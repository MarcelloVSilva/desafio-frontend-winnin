import snoowrap from 'snoowrap';

const redditInterface = () => new Promise((resolve, reject) => {
    const reddit = new snoowrap({
        userAgent: 'winnin',
        clientId: 'sbpY3HgVOCGXEQ',
        clientSecret: '3HDlt0u0Z4GnPOYI1bZZ-az-p88',
        username: 'testebrdev',
        password: 'admin.teste'
    })
    resolve(reddit)
})

export default redditInterface