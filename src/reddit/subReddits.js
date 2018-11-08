export const getHot = (reddit) => new Promise((resolve, reject) => {
    reddit.getHot('reactjs', { limit: 10 }).then(hot => {
        resolve(hot)
    });
})

export const getNew = (reddit) => new Promise((resolve, reject) => {
    reddit.getNew('reactjs', { limit: 10 }).then(news => {
        resolve(news)
    });
})

export const getRising = (reddit) => new Promise((resolve, reject) => {
    reddit.getRising('reactjs', { limit: 10 }).then(rising => {
        resolve(rising)
    });
})