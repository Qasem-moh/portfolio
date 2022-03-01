import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is Qasem Mohammad. I have a BA in Journalism and Media (electronic journalism) from the Arab Open University AOU. I am seeking to become a professional software developer that no one can compete with because I have the skills and passion that help me to become a professional software developer.
                            I am looking for anything that interests me ::)  </p>
                        <p className={classes.br}>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;