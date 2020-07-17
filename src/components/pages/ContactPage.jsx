import React from 'react'

function ContactPage() {
    return (
        <div>
            <section id="contact" className="contact">
                <div className="container">
                <div className="section-title">
                    <h2>Contact</h2>
                    <p>You may send me a message anytime..</p>
                </div>
                <div className="row" data-aos="fade-in">
                    <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                        <div className="address">
                        <i className="icofont-google-map" />
                        <h4>Location:</h4>
                        <p>Bumatay St. Plainview, Mandaluyong, Philippines</p>
                        </div>
                        <div className="email">
                        <i className="icofont-envelope" />
                        <h4>Email:</h4>
                        <p>asriidev@gmail.com</p>
                        </div>
                        <div className="phone">
                        <i className="icofont-phone" />
                        <h4>Call:</h4>
                        <p>+63 922 604 7141</p>
                        </div>
                        {/* <iframe title="PF location" src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7722.773463947691!2d121.03091672383289!3d14.577025809269786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c84b61807fbf%3A0xf075e6215d61cd4b!2sPlainview%2C%20Mandaluyong%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1594958883258!5m2!1sen!2sph" frameBorder="0" style={{border: 0, width: '100%', height: '290px'}} allowFullScreen /> */}
                        <iframe title="PF location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7722.773463947691!2d121.03091672383289!3d14.577025809269786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c84b61807fbf%3A0xf075e6215d61cd4b!2sPlainview%2C%20Mandaluyong%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1594958954257!5m2!1sen!2sph" style={{border: 0, width: '100%', height: '290px'}} frameborder="0" allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    </div>
                    <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                    <form action="forms/contact.php" method="post" className="php-email-form">
                        <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validate" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="name">Your Email</label>
                            <input type="email" className="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
                            <div className="validate" />
                        </div>
                        </div>
                        <div className="form-group">
                        <label htmlFor="name">Subject</label>
                        <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                        <div className="validate" />
                        </div>
                        <div className="form-group">
                        <label htmlFor="name">Message</label>
                        <textarea className="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us" defaultValue="" />
                        <div className="validate" />
                        </div>
                        <div className="mb-3">
                        <div className="loading">Loading</div>
                        <div className="error-message" />
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default ContactPage
