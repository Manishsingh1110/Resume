import React from 'react'

function Contact() {
  return (
    <div className="section" id="contact">
        <div className="container row">
            <div className="col-md-12">
                <h4>06</h4>
                <h1 className="size-50">Contact Me</h1>
                <div className="hh-50"></div>
            </div>
            <div className="col-md-4" data-aos="fade-up">

                <h3>Phone Number</h3>
                <p></p>
                <h3>Email</h3>
                <p>dsmanishsingh@gmail.com</p>

                <h3>Social Network</h3>

                <ul className="social">
                    <li><a href="/"><ion-icon name="logo-facebook"></ion-icon></a></li>
                    <li><a href="/"><ion-icon name="logo-twitter"></ion-icon></a></li>
                    <li><a href="/"><ion-icon name="logo-instagram"></ion-icon></a></li>
                </ul>
                <div className="clearfix"></div>
                <div className="hh-50"></div>
            </div>
            <div className="col-md-8" data-aos="fade-up">
                <form className="contact-bg" id="contact-form" name="contact" method="post" noValidate="noValidate">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" />
                    <input type="email" name="email" className="form-control" placeholder="Your E-mail" />
                    <input type="text" name="phone" className="form-control" placeholder="Phone Number" />
                    <textarea name="message" className="form-control" placeholder="Your Message"
                        ></textarea>
                    <button id="submit" type="submit" name="submit" className="btn btn-glance">Send</button>
                    <div id="success">
                        <p className="green textcenter"> Your message was sent successfully! I will be in touch as soon as I
                            can. </p>
                    </div>
                    <div id="error">
                        <p> Something went wrong, try refreshing and submitting the form again. </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact