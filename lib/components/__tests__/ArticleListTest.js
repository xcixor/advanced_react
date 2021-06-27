import React from 'react';
import ArticleList from '../ArticleList';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import ArticleContainer from '../Article';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe('ArticleList', ()=> {
  const testProps = {
    articles: {
      a: {'id': 'a'},
      b: {'id': 'b'}
    },
  };

  ArticleContainer.propTypes = {};

  it('renders correctly', ()=> {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(toJson(wrapper.find('.article-list').children()).length).toBe(3);
    const titleElement = toJson(wrapper.find('.page-head'));
    expect(titleElement.children[0]).toEqual('Article List');
  });
});