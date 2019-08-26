import React from 'react';
import {ImageSlider} from '../index';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

const images = [
  'https://cdn.stocksnap.io/img-thumbs/960w/PS7M4VMB9P.jpg',
  'https://cdn.stocksnap.io/img-thumbs/960w/SVSBXHN1OU.jpg',
  'https://cdn.stocksnap.io/img-thumbs/960w/KLSTPV1LBV.jpg',
  'https://cdn.stocksnap.io/img-thumbs/960w/N06ELOLAT9.jpg',
  'https://cdn.stocksnap.io/img-thumbs/960w/YN0MX9OUSY.jpg',
  'https://cdn.stocksnap.io/img-thumbs/960w/JVBWZNCQLW.jpg',
  'https://cdn.stocksnap.io/img-thumbs/960w/LN6MZNMBUR.jpg',
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  const component = mount(<ImageSlider
    images={images}/>, {attachTo: document.body});
});
