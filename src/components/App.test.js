import { getHot, getNew, getRising } from '../reddit/subReddits'
import redditInterface from '../reddit/config'

let reddit
beforeAll( async () => {
  reddit = await redditInterface()
})

describe('Reddit API', async () => {
  test('Get hot', async () => {
    const hot = await getHot(reddit)
    expect(hot).not.toBeNull()
  });

  test('Get news', async () => {
    const news = await getNew(reddit)
    expect(news).not.toBeNull()
  });

  test('get rising', async () => {
    const rising = await getRising(reddit)
    expect(rising).not.toBeNull()
  });

})
