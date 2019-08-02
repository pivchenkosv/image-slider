import React from "react";
import PropTypes from 'prop-types';

import './index.scss'

class ImageSlider extends React.Component {

    state = {
        currentImage: 0,
        imageWidth: 0,
        smallImageWidth: 0,
    }

    componentDidMount() {
        const image = document.getElementById('image-container')
        const imageSmall = document.getElementById('image-container-small')
        this.setState({
            imageWidth: image.offsetWidth / this.props.images.length,
            smallImageWidth: imageSmall.offsetWidth / this.props.images.length
        }, () => {
            image.style.left = (-1 * this.state.imageWidth * this.state.currentImage) + "px";
        })
    }

    componentDidUpdate() {
        const imageContainer = document.getElementById('image-container')
        const imageContainerSmall = document.getElementById('image-container-small')
        imageContainer.style.left = (-1 * this.state.imageWidth * this.state.currentImage) + "px";
        if (600 < imageContainerSmall.offsetWidth)
            imageContainerSmall.style.left = this.state.currentImage / (this.props.images.length - 1) * (600 - imageContainerSmall.offsetWidth) + "px";
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
        console.log('mouseDown')
    }

    handleMouseUp = (e) => {
        console.log('mouseUp')
    }

    handleMouseMove = (e) => {
        e.preventDefault()
        console.log('mouseMove')
    }
    render() {
        const {width, height, isMobile, images} = this.props;
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
                        onMouseUp={() => this.handleMouseUp()}
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
                    className='images-container images-container__small'
                >
                    <div
                        id='image-container-small'
                        className="image-container"
                    >
                        {
                            images.map((img, key) => {
                                return (
                                    <img
                                        className="image-small"
                                        key={key}
                                        src={img}
                                        alt='image'
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
    images: PropTypes.array,
    width: PropTypes.string,
    height: PropTypes.string,
    isMobile: PropTypes.bool,
}

export default ImageSlider;
