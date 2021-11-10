import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { RSSApp } from '../RSSApp';

const mockFeedUrl = 'http://feeds.washingtonpost.com/rss/rss_compost?itid=lk_inline_manual_10';

describe('Test in <RSSApp />', () => {

  const wrapper = mount(<RSSApp />);

  test('should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});