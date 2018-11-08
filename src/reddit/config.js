import snoowrap from 'snoowrap';

const redditInterface = () => new Promise((resolve, reject) => {
    const reddit = new snoowrap({
        userAgent: 'winnin',
        clientId: 'IE9d1OXIWqq6UQ',
        clientSecret: 'MiphccB4ePA38VVGBQXfX0hvqAk',
        username: 'MarcelloVSilva',
        password: 'hashtag#reddit'
    })
    resolve(reddit)
})

export default redditInterface