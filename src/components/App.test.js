import { getHot, getNew, getRising } from '../reddit/subReddits'
import redditInterface from '../reddit/config'

let reddit
beforeAll( async () => {
  reddit = await redditInterface()
})

describe('Reddit API Hot', async () => {
  test('Get hot', async () => {
    const hot = await getHot(reddit)
    expect(hot).not.toBeNull()
  });
})

describe('Reddit API News', async () => {
  test('Get news', async () => {
    const news = await getNew(reddit)
    expect(news).not.toBeNull()
  });
})

describe('Reddit API Rising', async () => {
  test('get rising', async () => {
    const rising = await getRising(reddit)
    expect(rising).not.toBeNull()
  });
})
