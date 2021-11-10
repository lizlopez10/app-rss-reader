import { renderHook } from '@testing-library/react-hooks';
import { useFetchFeed } from '../../hooks/useFetchFeed';


describe('test in useFetchFeed', () => {

  test('should return state', () => {
    const { result } = renderHook(() => useFetchFeed('http://feeds.washingtonpost.com/rss/rss_compost?itid=lk_inline_manual_10'));
    expect(result.current).toEqual({
      data: {},
      loading: true,
    });
  });

});