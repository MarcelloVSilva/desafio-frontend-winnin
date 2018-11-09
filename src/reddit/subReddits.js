export const getHot = (reddit) => new Promise((resolve, reject) => {
    reddit.getSubreddit('reactjs').fetch()
        .get_hot()
        .then(hot => resolve(hot))
        .then(err => reject(err));
})

export const getNew = (reddit) => new Promise((resolve, reject) => {
    reddit.getSubreddit('reactjs').fetch()
        .get_new()
        .then(news => resolve(news))
        .then(err => reject(err));
})

export const getRising = (reddit) => new Promise((resolve, reject) => {
    reddit.getSubreddit('reactjs').fetch()
        .get_rising()
        .then(rising => resolve(rising))
        .catch(err => reject(err));
})