import React, { Component } from 'react'
import { getHot, getNew, getRising } from '../reddit/subReddits'
import redditInterface from '../reddit/config'

export const Context = React.createContext();

export const HOT = 1
export const NEW = 2
export const RISING = 3

export class Provider extends Component {
    constructor(props) {
        super(props)
        this.changeTab = (abaAtiva) => {
            this.setState({ abaAtiva })
            window.scroll(0, 0)
        }
        this.state = {
            reddit: null,
            hot: null,
            news: null,
            rising: null,
            abaAtiva: HOT,
            changeTab: this.changeTab
        }
    }
    async componentWillMount() {
        const reddit = await redditInterface()
        this.setState({ reddit })

        const hot = await getHot(reddit)
        this.setState({ hot })

        const news = await getNew(reddit)
        this.setState({ news })

        const rising = await getRising(reddit)
        this.setState({ rising })
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}