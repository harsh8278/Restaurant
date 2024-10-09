import React from 'react'
import { blog } from '../Date'

const Blog = () => {
    return (
        <>
            <section className='blogs' id="blogs">
                <h1 className='heading'>our <span>blog</span></h1>
                <div className='box-container'>
                    {blog.map((item, index) => (
                        <div className='box' key={index}>
                            <div className='image'>
                                <img src={item.img} alt='' />
                            </div>
                            <div className='content'>
                                <a href='#' className='title'>
                                    tasty and refreshing spices
                                </a>
                                <span>by admin / 8th oct, 2024</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, dicta.</p>
                                <a href='#' className='btn'>
                                    read more
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Blog
