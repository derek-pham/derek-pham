import React, { useState } from "react";
import './Projects.css'
import bitemapIcon from './icons/bitemap-icon.png'
import codeBrewCafeIcon from './icons/codebrewcafe.png'
import recipeRumbleIcon from './icons/reciperumble.png'
import wipIcon from './icons/work-in-progress.png'
import starIcon from './icons/star.png'

function Projects({ onSkillEnter, onSkillLeave }) {
    const [triggerStar, setTriggerStar] = useState(false)
    const [triggerAward, setTriggerAward] = useState(false)

    const triggerBiteMap = () => {
        setTriggerAward(true)
        setTriggerStar(true)
        onSkillEnter('BiteMap')
    }

    const triggerCodeBrewCafe = () => {
        onSkillEnter('CodeBrewCafe')
    }

    const triggerRecipeRumble = () => {
        onSkillEnter('RecipeRumble')
    }

    const handleMouseLeave = () => {
        setTriggerAward(false)
        setTriggerStar(false)
        onSkillLeave('')
    }

    return (
        <>
            <div id="projects-container">
                <div id="bitemap" onMouseEnter={triggerBiteMap} onMouseLeave={handleMouseLeave}>
                    <a href="https://github.com/derek-pham/BiteMap" target="_blank">
                        <img src={bitemapIcon} alt="BiteMap" />
                    </a>
                    {triggerStar ? <img src={starIcon} alt="Star" id="starIcon" /> : ''}
                    {triggerAward ? <p id="award-text">TOP CAPSTONE AWARD</p> : ''}
                </div>
                <div id="codebrewcafe" className="project" onMouseEnter={triggerCodeBrewCafe} onMouseLeave={handleMouseLeave}>
                    <a href="https://github.com/derek-pham/CodeBrewCafe" target="_blank">
                        <img src={codeBrewCafeIcon} alt="CodeBrewCafe" />
                    </a>
                </div>
                <div id="reciperumble" className="project" onMouseEnter={triggerRecipeRumble} onMouseLeave={handleMouseLeave}>
                    <a href="https://github.com/derek-pham/RecipeRumble" target="_blank">
                        <img src={recipeRumbleIcon} alt="RecipeRumble" />
                    </a>
                </div>
                <div id="wip">
                    <img src={wipIcon} alt="WIP" />
                </div>
            </div>
        </>
    );
}

export default Projects