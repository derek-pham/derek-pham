import React from "react";
import './About.css'

function About() {

    return (
        <>
            <div className='about-container' >
                <h1 id='about-header'>ABOUT ME</h1>
                <div className="aboutme-text">
                    <p>
                        When I was six years old, my cousin asked me what I wanted to be when I grow up and I said, "I want to be an INVENTOR!". I've always had a deep fascination in creating things and have admired the level of craftsmanship that can be found behind anything. This fascination first unfolded through <a href="https://gamemaker.io/en" target="_blank">GameMaker</a> at eight years old, where I learned about systems and workflows, created rooms and levels, animations and effects, and dealt with simple physics and enemy logic. Though these early projects remained unpublished and stayed as a small childhood sandbox hobby, they laid the groundwork for my future inventive pursuits.
                    </p>
                    <p>
                        I've maintained this interest in creating throughout my school life, engaging in woodwork, metalwork, textiles, cooking, photography, and art. Each discipline has contributed to sharpening my appreciation for meticulous craftsmanship. Thanks to my science background in my final high school years and through university, I have honed my analytical skills and deepened my understanding of complex systems—qualities I bring to my work in the tech industry today.
                    </p>
                    <p>
                        Seeking to align my career with my lifelong interests, I am now focused on leveraging my diverse background and technical skills to innovate in the tech space, honoring the aspirations of my six-year-old self while applying everything I have learned.
                    </p>
                </div>
            </div>
        </>
    );

}

export default About