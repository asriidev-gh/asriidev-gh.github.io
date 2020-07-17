import React from 'react'

function SkillsPage() {
    return (
        <div>
            <section id="skills" className="skills section-bg">
                <div className="container">
                <div className="section-title">
                    <h2>Skills</h2>
                    <p>I started as a front-end developer early in my career from converting psd files to webpages, then I got interested in creating dynamic web pages or backend development and so I started to learned PHP, and now with the emerging modern technologies I fell in love with React and NodeJS as well.</p>
                </div>
                <div className="row skills-content">
                    <div className="col-lg-4" data-aos="fade-up">
                        Frontend
                        <div className="progress">
                            <span className="skill">HTML/HTML5 <i className="val">100%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">PHOTOSHOP/Image Optimization <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">CSS <i className="val">95%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow={950} aria-valuemin={0} aria-valuemax={90} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        PHP Fullstack
                        <div className="progress">
                            <span className="skill">PHP/MYSQL/NGINX/APACHE<i className="val">95%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "95%"}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">CODEIGNITER/LARAVEL <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">WORDPRESS/DRUPAL/SHOPIFY <i className="val">60%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "60%"}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                        Javascript Fullstack
                        <div className="progress">
                            <span className="skill">NodeJS/MongoDB/Firebase/ReactJS<i className="val">70%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "70%"}} aria-valuenow={70} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">VANILLA JS <i className="val">90%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "90%"}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                        <div className="progress">
                            <span className="skill">ECMASCRIPT/ES6 <i className="val">80%</i></span>
                            <div className="progress-bar-wrap">
                            <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default SkillsPage
