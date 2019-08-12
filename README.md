# Image slider

> Image gallery component for your application.

[![Build Status](https://travis-ci.org/pivchenkosv/image-slider.svg?branch=master)](https://travis-ci.org/pivchenkosv/image-slider)
![GitHub issues](https://img.shields.io/github/issues/pivchenkosv/image-slider-react)
![npm](https://img.shields.io/npm/dw/image-slider-react)
[![Demo](https://img.shields.io/badge/-Demo-blue)](https://jsfiddle.net/pivchenkosv/kneL0arm/)
---

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Clone](#clone)
- [Usage](#usage)
- [License](#license)

---

## Description

A convenient and configurable tool for displaying images with their thumbnails.

You can just pass an array of urls to pictures and put the component in the right place 
in order to start using it in your project. 

It's also adopted for mobile devices.

---

## Installation

`npm install image-slider-react`

---

## Clone

Clone this repo to your local machine using 

`git clone https://github.com/pivchenkosv/image-slider.git`

---
## Usage

Import `ImageSlider` 
```js
import ImageSlider from "image-slider-react";
```
And use it in your React component
```js
<ImageSlider 
    images={images} // An array of images urls
    height='400px'  // Not required
    width='600px'   // Not required
/>
```
---

## License  [![License](http://img.shields.io/:license-mit-blue.svg?style=flat)](https://github.com/pivchenkosv/image-slider/blob/master/LICENSE)
