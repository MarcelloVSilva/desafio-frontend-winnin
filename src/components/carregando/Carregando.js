import React from 'react'
import './Carregando.css'

class Carregando extends React.Component {
    render() {
        return (
            <div className="spinner">
                <div className="dot1"></div>
                <div className="dot2"></div>
            </div>
        )
    }
}

export default Carregando