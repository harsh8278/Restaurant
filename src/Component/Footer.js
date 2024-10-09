import React from 'react'

const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='share'>
                    <a href='#' className='fab fa-facebook-f' />
                    <a href='#' className='fab fa-twitter' />
                    <a href='#' className='fab fa-instagram' />
                    <a href='#' className='fab fa-linkedin' />
                    <a href='#' className='fab fa-pinterest' />
                </div>
                <div className='links'>
                    <a href='#home'>home</a>
                    <a href='#menu'>menu</a>
                    <a href='#about'>About us</a>
                    <a href='#products'>Prodcts</a>
                    <a href='#review'>Review</a>
                    <a href='#contact'>Contact</a>
                    <a href='#blogs'>blogs</a>
                </div>
                <div className='credit'>
                    created by <span>Harsh Gupta </span>
                    | all rights reserved
                </div>
            </section>
        </>
    )
}

export default Footer
