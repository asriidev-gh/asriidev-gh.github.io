import React from 'react'

function ResumePage() {
    return (
        <div>
            <section id="resume" className="resume">
                <div className="container">
                <div className="section-title">
                    <h2>Resume</h2>
                    <p>I am a BS. Computer Science graduate from Unibersidad De Manila. I've been doing web development since I was in college and from then
                       I keep on exploring new and modern technologies that I may use to develop meaniful projects.</p>
                </div>
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item pb-0">
                            <h4>Andy R.</h4>
                            <p><em>Innovative and deadline-driven Web Developer with 5+ years of experience in fullstack development leveraging PHP and JS frameworks.</em></p>
                            <ul>
                            <li>Plainview Mandaluyong,Metro Manila, PH</li>
                            <li>(+63) 922-604-7141</li>
                            <li>asriidev@gmail.com</li>
                            </ul>
                        </div>
                        <h3 className="resume-title">Education</h3>
                    
                        <div className="resume-item">
                            <h4>Node.js, Express, MongoDB & More: The Complete Bootcamp 2020</h4>
                            <h5>2019 - 2020</h5>
                            <p><em>UDEMY</em></p>
                            <p>(jonas schmedtmann)</p>
                        </div>
                        <div className="resume-item">
                            <h4>-React - The Complete Guide (incl Hooks, React Router, Redux)</h4>
                            <h5>2019 - 2020</h5>
                            <p><em>UDEMY</em></p>
                            <p>(academind by maximilian schwarzmüller)</p>
                        </div>
                        <div className="resume-item">
                            <h4>DevOps Training</h4>
                            <h5>2019 - 2019</h5>
                            <p><em>MOA</em></p>
                            <p>10th floor, Mall of Asia Arena Annex Building, Pasay City, Philippines</p>
                        </div>
                        <div className="resume-item">
                            <h4>Linux 101 Training</h4>
                            <h5>2017 - 2017</h5>
                            <p><em>UP Diliman</em></p>
                            <p>Roxas Ave, Diliman, Quezon City, Philippines</p>
                        </div>
                        <div className="resume-item">
                            <h4>Bachelor of Science in Computer Science</h4>
                            <h5>2001 - 2005</h5>
                            <p><em>Unibersidad De Manila</em></p>
                            <p>659-A Cecilia Muñoz St, Ermita, Manila,Philippines</p>
                        </div>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <h3 className="resume-title">Professional Experience</h3>
                        <div className="resume-item">
                            <h4>Fullstack Web Developer</h4>
                            <h5>2015 - Present</h5>
                            <p><em>22nd Flr. Chatham House Cond. Rufino Ayala Makati, PH</em></p>
                            <ul>
                            <li>Keep the code quality high reviewing code from other developers and suggesting improvements.</li>
                            <li>Giving feedback about how to improve the overall experience of the application for the end user. </li>
                            <li>Accommodate daily request and issues raised by Dev Support team</li>
                            <li>Integrate 3rd Party API to existing application</li>
                            <li>Utilizing Technologies such as:<br/><br/>
                                <ul>
                                <li>PHP/MySQL/Nginx</li>
                                <li>Wordpress/Codeigniter/Laravel/VueJS</li>
                                <li>ReactJS/MongoDB/Firebase/Graphql/NodeJS/Express</li>
                                <li>Jira/Git/Docker/CICD</li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>Frontend Developer</h4>
                            <h5>2011 - 2015</h5>
                            <p><em>RCBC Plaza, Ayala Makati, PH</em></p>
                            <ul>
                            <li>Integrate Web Design from raw images (psd) to Interactive Web Page</li>
                            <li>Leveraging Frontend technologies such as Flash, Actionscript, Javascript, CSS, Bootstrap, HTML/HTML5</li>                        
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default ResumePage
