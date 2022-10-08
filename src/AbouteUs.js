import React from 'react'
import './abouteUs.css'

function AbouteUs() {
    return (
        <div class="about-section">
            <div class="inner-width">
                <h1>About Us</h1>
                <div class="border"></div>
                <div class="about-section-row">
                    <div class="about-section-col">
                        <div class="about">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga provident ea hic, neque amet sequi temporibus iure aliquid placeat inventore. Quae dolores dolore, cum nulla quas ipsum facere maxime, necessitatibus!
                            </p>
                            <a href="edjfjq">Read More</a>
                        </div>
                    </div>
                    <div class="about-section-col">
                        <div class="skills">
                            <div class="skill">
                                <div class="title">Web Develpor</div>
                                <div class="progress">
                                    <div class="progress-bar p1"><span>90%</span></div>
                                </div>
                            </div>

                            <div class="skill">
                                <div class="title">UI Design</div>
                                <div class="progress">
                                    <div class="progress-bar p2"><span>70%</span></div>
                                </div>
                            </div>

                            <div class="skill">
                                <div class="title">UX Design</div>
                                <div class="progress">
                                    <div class="progress-bar p3"><span>50%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbouteUs