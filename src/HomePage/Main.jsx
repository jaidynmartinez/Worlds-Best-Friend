import React from 'react'
import './Main.css'
import Header from './Header'


const Main = () => {
    return(
        <div>
            <Header />
            
             <h1>Choose a pet to get started!</h1>

            <div className='choose-pet-circles'>
                <div id='lowerCircle'></div>
                <div id='higherCircle'></div>
                <div id='lowerCircle'></div>
            </div>
            
        </div>
    )
}

export default Main