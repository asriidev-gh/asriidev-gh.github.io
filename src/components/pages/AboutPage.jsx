import React from 'react'

function AboutPage() {
    return (
        <div>
            <section id="about" className="about">
                <div className="container">
                <div className="section-title">
                    <h2>About</h2>
                    <p>I’m a fullstack developer. I currently work as a fullstack dev at Tripleone Tech in Makati, Philippines. And I also do freelance work, working with small businesses to get them a nice, modern website.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                    <img src="assets/img/asrii_profile_pic.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                    <h3>Fullstack Developer.</h3>
                    <p className="font-italic">
                        I kind of fell into it. So I started learning HTML, CSS, PHP, JavaScript and MySQL. Eventually I learned NodeJS and React and so my passion for web development has remained sky high..
                    </p>
                    <div className="row">
                        <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right" /> <strong>Birthday:</strong> 15 Sept 1983</li>                            
                            <li><i className="icofont-rounded-right" /> <strong>Phone:</strong> +63 922-6047141</li>
                            <li><i className="icofont-rounded-right" /> <strong>City:</strong> Makati, Philippines</li>
                        </ul>
                        </div>
                        <div className="col-lg-6">
                        <ul>
                            <li><i className="icofont-rounded-right" /> <strong>Age:</strong> 36</li>
                            <li><i className="icofont-rounded-right" /> <strong>Degree:</strong> BS. Computer Science</li>
                            <li><i className="icofont-rounded-right" /> <strong>Email:</strong> asriidev@gmail.com</li>
                            <li><i className="icofont-rounded-right" /> <strong>Freelance:</strong> Available</li>
                        </ul>
                        </div>
                    </div>
                    
                    </div>
                </div>
                </div>
            </section>{/* End About Section */}
        </div>
    )
}

export default AboutPage
