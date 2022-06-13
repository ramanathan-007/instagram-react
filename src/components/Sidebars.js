import "../styles/sidebars.scss"
import Sticky from 'react-sticky-el';
import Profile from './Profile.js';
import Suggestions from './Suggestions.js';
import Footer from './Footer.js';
import image from '../images/profile.png'

function Sidebars(){
    return(
            <Sticky topOffset={-80}>
                <div className="sidebars">
                    <Profile 
                     username="ram.007"
                     caption="Ramanathan"
                     urlText="Switch"
                     iconSize="big"
                     image={image} />
                     <Suggestions />
                     <Footer />
                </div>

            </Sticky>
    )
}

export default Sidebars;