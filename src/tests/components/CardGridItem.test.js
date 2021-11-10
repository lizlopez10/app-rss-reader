import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { CardGridItem } from '../../components/CardGridItem';


describe('Test in <CardGridItem />', () => {

  const wrapper = mount(<CardGridItem link={'http://feeds.washingtonpost.com/rss/rss_compost?itid=lk_inline_manual_10'} title={'Test'} />);

  test('should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});