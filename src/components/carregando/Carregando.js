import React from 'react'
import './Carregando.css'

class Carregando extends React.Component {
    render() {
        return (
            <div className="spinner">
                <div class="dot1"></div>
                <div class="dot2"></div>
            </div>
        )
    }
}

export default Carregando