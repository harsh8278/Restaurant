import React from 'react'

const Contact = () => {
    return (
        <>
            <section className='contact' id='contact'>
                <h1 className='heading'>
                    <span>contact</span> us
                </h1>
                <div className='row'>
                    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14227.523009302186!2d75.77850592563976!3d26.938994629491688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db36932579551%3A0x82437174bc13d51b!2sDomino&#39;s%20Pizza!5e0!3m2!1sen!2sin!4v1728367489874!5m2!1sen!2sin" allowfullscreen="" loading="lazy" >
                    </iframe>
                    <form>
                        <h3>get in  touch</h3>
                        <div className='inputBox'>
                            <span className='fas fa-user'></span>
                            <input type='text' placeholder='name'/>
                        </div>
                        <div className='inputBox'>
                            <span className='fas fa-envelope'></span>
                            <input type='email' placeholder='email'/>
                        </div>
                        <div className='inputBox'>
                            <span className='fas fa-phone'></span>
                            <input type='number' placeholder='number'/>
                        </div>
                        <input type='submit' value="contact now" className='btn'/>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact
