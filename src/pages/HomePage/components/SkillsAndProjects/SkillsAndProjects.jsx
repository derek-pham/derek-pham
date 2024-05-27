import React, { useState } from "react";
import './SkillsAndProjects.css'
import SkillIcons from "./SkillIcons/SkillIcons";
import Projects from "./Projects/Projects";

function SkillsAndProjects() {
    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node.js', 'MongoDB', 'React', 'Git'];
    const [hoveredSkill, setHoveredSkill] = useState('');
    const handleSkillEnter = skill => setHoveredSkill(skill);
    const handleSkillLeave = () => setHoveredSkill('');

    return (
        <>
            <div className='skillsandprojects-container'>
                <h1 id="skillsandprojects-header">Skills & Projects</h1>
                <div className="skillsandprojects-text">
                    <p>
                        With a robust foundation in both front-end and back-end development, my technical expertise spans&nbsp;
                        <span className={hoveredSkill === 'HTML' ? 'highlight' : ''}>HTML</span>,&nbsp;
                        <span className={hoveredSkill === 'CSS' ? 'highlight' : ''}>CSS</span>,&nbsp;
                        <span className={hoveredSkill === 'JavaScript' ? 'highlight' : ''}>JavaScript</span>,&nbsp;
                        <span className={hoveredSkill === 'TypeScript' ? 'highlight' : ''}>TypeScript</span>,&nbsp;
                        <span className={hoveredSkill === 'Node.js' ? 'highlight' : ''}>Node.js</span>,&nbsp;
                        <span className={hoveredSkill === 'MongoDB' ? 'highlight' : ''}>MongoDB</span>, and&nbsp;
                        <span className={hoveredSkill === 'React' ? 'highlight' : ''}>React</span>.
                        A standout project from my portfolio is 'BiteMap', a capstone project developed during my software engineering course at UTS in collaboration with trainers and mentors from the Institute of Data. This project is&nbsp;
                        <span className={hoveredSkill === 'BiteMap' ? 'highlight' : ''}>an interactive platform that allows food enthusiasts </span><span className={hoveredSkill === 'BiteMap' ? 'highlight' : ''}>and cultural explorers to dive into the rich diversity&nbsp;</span><span className={hoveredSkill === 'BiteMap' ? 'highlight' : ''}> of global cuisines. It earned the 'Top Capstone &nbsp;</span><span className={hoveredSkill === 'BiteMap' ? 'highlight' : ''}>Project' award</span>, allowing me to refine my skills in integrating diverse technologies to enhance user experiences. 
                        Moreover, I am also proficient in using tools like&nbsp;
                        <span className={hoveredSkill === 'Git' ? 'highlight' : ''}>Git</span> for version control to streamline project workflows and enhance team collaboration. I am actively expanding my expertise in emerging technologies and advancements in software development to ensure my skills remain ready to meet the challenges of future projects.
                    </p>
                    <p>
                        Some of my othe projects include <span className={hoveredSkill === 'CodeBrewCafe' ? 'highlight' : ''}>CodeBrewCafe </span> which is a<span className={hoveredSkill === 'CodeBrewCafe' ? 'highlight' : ''}> collection of smaller mini-projects and widgets </span> that act as tangible products from the result of my continuous coding journey. My most recent project is <span className={hoveredSkill === 'RecipeRumble' ? 'highlight' : ''}>RecipeRumble </span> which is a <span className={hoveredSkill === 'RecipeRumble' ? 'highlight' : ''}>java-written text based adventure game</span> that I created from my personal studies to practice OOP as well learning a new programming language.
                    </p>

                </div>
                <SkillIcons onSkillEnter={handleSkillEnter} onSkillLeave={handleSkillLeave} />
                <Projects onSkillEnter={handleSkillEnter} onSkillLeave={handleSkillLeave} />
            </div>
        </>
    );
}


export default SkillsAndProjects