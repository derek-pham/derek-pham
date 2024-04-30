import React from "react";
import './SkillIcons.css'
import cssLogo from './icons/icons8-css-logo-100.png'
import reactLogo from './icons/icons8-react-100.png'
import htmlLogo from './icons/icons8-html-5-100.png'
import mongodbLogo from './icons/icons8-mongodb-100.png'
import javascriptLogo from './icons/icons8-javascript-100.png'
import typescriptLogo from './icons/icons8-typescript-100.png'
import gitLogo from './icons/icons8-git-logo-100.png'
import nodejsLogo from './icons/icons8-node-js-100.png'

function SkillIcons({ onSkillEnter, onSkillLeave }) {
    const skillData = [
        { name: 'JavaScript', logo: javascriptLogo },
        { name: 'TypeScript', logo: typescriptLogo },
        { name: 'HTML', logo: htmlLogo },
        { name: 'CSS', logo: cssLogo },
        { name: 'MongoDB', logo: mongodbLogo },
        { name: 'React', logo: reactLogo },
        { name: 'Git', logo: gitLogo },
        { name: 'Node.js', logo: nodejsLogo }
    ];

    return (
        <div className='skillicons-container'>
            {skillData.map(skill => (
                <img
                    key={skill.name}
                    src={skill.logo}
                    alt={skill.name}
                    onMouseEnter={() => onSkillEnter(skill.name)}
                    onMouseLeave={onSkillLeave}
                    className="skill-icon"
                />
            ))}
        </div>
    );
}

export default SkillIcons