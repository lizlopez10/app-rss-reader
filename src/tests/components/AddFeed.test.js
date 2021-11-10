import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { AddFeed } from '../../components/AddFeed';

// const mockSetFeed = 'http://feeds.washingtonpost.com/rss/rss_compost?itid=lk_inline_manual_10';
const mockSetFeed = jest.fn();
const handleInputChange = jest.fn();

describe('Test in <AddFeed />', () => {

  const wrapper = mount(<AddFeed setFeeds={mockSetFeed} />);

  test('should show component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // test('should trigger action handleInputChange', () => {
  //   const e = { target: { value: 'test' } };
  //   act( () => {
  //     wrapper2.find('input').prop('onChange')(e);
  //     expect(handleInputChange).toHaveBeenCalled();
  //   });
  // });

});