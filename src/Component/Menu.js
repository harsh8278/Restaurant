import React from 'react'
import { menu } from '../Date'

const Menu = () => {
    return (
        <>
            <section className='menu' id='menu'>
                <h1 className='heading'>
                    our <span>menu</span>
                </h1>
                <div className='box-container'>
                    {menu.map((item, index) =>(
                        <div className='box'>
                            <img src={item.img}/>
                            <h3>testy and healty</h3>
                            <div className='price'>
                                $15.99 <span> 20.99</span>
                            </div>
                            <a href='' className='btn'>add to cart</a>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Menu
