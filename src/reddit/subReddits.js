export const getHot = (reddit) => new Promise((resolve, reject) => {
    reddit.getHot('reactjs', { limit: 10 })
    .then(hot => resolve(hot))
    .then(err => reject(err));
})

export const getNew = (reddit) => new Promise((resolve, reject) => {
    reddit.getNew('reactjs', { limit: 10 })
    .then(news => resolve(news))
    .then(err => reject(err));
})

export const getRising = (reddit) => new Promise((resolve, reject) => {
    reddit.getRising('reactjs', { limit: 10 })
        .then(rising => resolve(rising))
        .catch(err => reject(err));
})