import './HomePage.css'
import './responsive-css/responsive.css'
import BackgroundAccent from './components/BackgroundAccent/BackgroundAccent'
import Border from './components/Border/Border'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import About from './components/About/About'
import SkillsAndProjects from './components/SkillsAndProjects/SkillsAndProjects'

export default function HomePage() {
    return (
        <>
        <BackgroundAccent />
        <Border />       
        <Header />
        <Profile />
        <About />
        <SkillsAndProjects />
        <div className='place1'>            <p>QUOTE: <p style={{fontStyle:"italic"}}>"If you want something you have never had,<br /> you must be willing to do something you have never done."— Anonymous </p></p></div>
        <div className='place4'>            <p>CONTACT: <p style={{fontStyle:"italic"}}>text text text text text text text text text text text text text text text</p></p></div>
        </>
    )
}