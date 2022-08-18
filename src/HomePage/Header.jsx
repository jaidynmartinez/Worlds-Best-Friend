import React from 'react'
import './Header.css'

const Header = () => {
    return(
        <div>
            <header>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrKHTVY79FTpdhgvX53LjBFe7vnZBuoNj8Mw&usqp=CAU' alt='logo' />
                World's Best Friend!
            </header>
            <div className='nav'>
                <h3>Home</h3>
                <h3>Care</h3>
                <h3>Shop</h3>
                <h3>Create</h3>
            </div>
            <hr/>
        </div>
    )
}

export default Header