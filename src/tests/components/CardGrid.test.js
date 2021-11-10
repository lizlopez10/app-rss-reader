import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { CardGrid } from '../../components/CardGrid';

const mockFeedUrl = 'http://feeds.washingtonpost.com/rss/rss_compost?itid=lk_inline_manual_10';

describe('Test in <CardGrid />', () => {

  const wrapper = mount(<CardGrid feed_url={mockFeedUrl} />);

  test('should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});