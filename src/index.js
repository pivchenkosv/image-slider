import React from "react";
import PropTypes from 'prop-types';

import './index.scss'

export class ImageSlider extends React.Component {

    state = {
        currentImage: 0,
        imageWidth: 0,
        smallImageWidth: 0,
        xDown: null,
        slideImage: 0,
    }

    constructor(props) {
        super(props)

        const declaration = document.styleSheets[0] ? document.styleSheets[0].rules[0].style : null;

        this.props.height && declaration &&
        declaration.setProperty('--container-height', this.props.height);

        this.props.width && declaration &&
        declaration.setProperty('--container-width', this.props.width);
    }

    componentDidMount() {
        const image = document.getElementById('image-container')
        const imageSmall = document.getElementById('image-container-small')
        const { images } = this.props
        const { imageWidth, currentImage } = this.state

        this.setState({
            imageWidth: image.offsetWidth / images.length,
            smallImageWidth: imageSmall.offsetWidth / images.length
        }, () => {
            image.style.left = (-1 * imageWidth * currentImage) + "px";
        })
    }

    componentDidUpdate() {
        const imageContainer = document.getElementById('image-container')
        const imageContainerSmall = document.getElementById('image-container-small')
        const imagesContainerSmall = document.getElementById('images-container-small')
        const { imageWidth, currentImage, slideImage } = this.state
        const { images } = this.props

        imageContainer.style.left = (-1 * imageWidth * (currentImage + slideImage)) + "px";
        if (600 < imageContainerSmall.offsetWidth)
            imageContainerSmall.style.left = (currentImage + slideImage) / (images.length - 1) * (imagesContainerSmall.offsetWidth - imageContainerSmall.offsetWidth) + "px";
    }

    onLeftClick = () => {
        if (this.state.currentImage > 0) {
            this.setCurrentImage(this.state.currentImage - 1)
        }
    }

    onRightClick = () => {
        if (this.state.currentImage + 1 < this.props.images.length) {
            this.setCurrentImage(this.state.currentImage + 1)
        }
    }

    setCurrentImage = (num) => {
        this.setState({
            currentImage: num
        })
    }

    handleMouseDown = (e) => {
        e.preventDefault()

        const clientX = e.clientX || e.touches[0].clientX
        let image = document.getElementById('image-container')

        image.style.transition = 'none'
        this.setState({
            xDown: clientX
        })

    }

    handleMouseUp = (e) => {
        e.preventDefault()
        const { currentImage, slideImage } = this.state
        const { images } = this.props
        let image = document.getElementById('image-container')

        image.style.transition = 'left 0.5s ease-in-out';

        if (this.state.slideImage > 0.4 && currentImage + 1 < images.length) {
            this.setState({
                currentImage: currentImage + 1,
                slideImage: 0
            })
        } else if (slideImage < -0.4 && currentImage > 0) {
            this.setState({
                currentImage: currentImage - 1,
                slideImage: 0
            })
        } else {
            this.setState({
                slideImage: 0
            })
        }

        this.setState({
            xDown: null
        })
    }

    handleMouseMove = (e) => {
        e.preventDefault()
        const clientX = e.clientX || e.touches[0].clientX

        if (this.state.xDown) {
            this.setState({
                slideImage: (this.state.xDown - clientX) / this.state.imageWidth
            })
        }
    }

    render() {
        const {images} = this.props;
        return (
            <div
                className='container'
            >
                <div
                    className="images-container"
                >
                    <div
                        id='image-container'
                        className="image-container"
                        onMouseDown={event => this.handleMouseDown(event)}
                        onMouseMove={event => this.handleMouseMove(event)}
                        onMouseUp={event => this.handleMouseUp(event)}
                        onMouseLeave={event => this.handleMouseUp(event)}
                        onTouchStart={event => this.handleMouseDown(event)}
                        onTouchMove={event => this.handleMouseMove(event)}
                        onTouchEnd={event => this.handleMouseUp(event)}
                        onTouchCancel={event => this.handleMouseUp(event)}
                    >
                        {
                            images.map((img, key) => {
                                return (
                                    <div
                                        className="image"
                                        key={key}
                                        style={{backgroundImage: `url("${img}")`}}
                                    />
                                )
                            })
                        }
                    </div>
                    <div
                        className='left-button'
                        onClick={this.onLeftClick}
                    >
                    </div>
                    <div
                        className='right-button'
                        onClick={this.onRightClick}
                    >
                    </div>
                </div>
                <div
                    id='images-container-small'
                    className='images-container images-container__small'
                >
                    <div
                        id='image-container-small'
                        className="image-container"
                    >
                        {
                            images.map((img, key) => {
                                return (
                                    <div
                                        className="image-small"
                                        key={key}
                                        style={{backgroundImage: `url("${img}")`}}
                                        onClick={() => this.setCurrentImage(key)}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
};

ImageSlider.propTypes = {
    images: PropTypes.array.isRequired,
    width: PropTypes.string,
    height: PropTypes.string,
}
