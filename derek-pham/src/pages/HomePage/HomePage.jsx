import './HomePage.css'
import BackgroundAccent from './components/BackgroundAccent/BackgroundAccent'
import Border from './components/Border/Border'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import Quotes from './components/Quotes/Quotes'
import About from './components/About/About'
import SkillsAndProjects from './components/SkillsAndProjects/SkillsAndProjects'

export default function HomePage() {
    return (
        <>
            <div className='homepage'>
                <BackgroundAccent />
                <Header />
                <Border>
                    <Profile />
                    <Quotes />
                    <About />
                    <SkillsAndProjects />
                    <div style={{
                        height: '80px'
                    }} />
                </Border>
            </div >
        </>
    )
}