import { getFeed } from '../../helpers/getFeed';

describe('test in getFeed', () => {

  test('should return data', async() => {

    const data = await getFeed('http://feeds.washingtonpost.com/rss/rss_compost?itid=lk_inline_manual_10', true);
    expect(data).toBeDefined();

  });

});