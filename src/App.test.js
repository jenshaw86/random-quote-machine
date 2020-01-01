import React from 'react';
// import { render } from '@testing-library/react';
import {shallow} from 'enzyme';
import App from './App';
import QuoteBox from './components/quoteBox'

describe ('<App />', () => {
  it('contains QuoteBox component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(QuoteBox).exists()).toBe(true);
  })
})