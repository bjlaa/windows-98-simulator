import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Editor from './Editor';

describe('Editor', () => {
  it('should render a textarea with an editor className ', () => {
    const wrapper = shallow(<Editor />);
    const expected = wrapper.find('textarea').prop('className');
    const actual = 'editor';

    expect(actual).to.equal(expected);
  });
});