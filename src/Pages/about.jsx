import { Outlet } from "react-router";
import Banner from '../components/banner';

export default function AboutPage(){
    return (
        <div >
            <Banner/>
                <div className='sub-title '>About Page</div>

            <div className='container'>
                <div className='text-block'>
                    <p style={{fontSize:'40px'}}>A Meditative Ashtanga-Inspired Yoga Practice</p>
                    <img src='src/images/Cairn.jpg' className='wrap-image-right' width='475x' height='450px'/>
                    <p>
                        This class offers a steady, intentional approach to yoga inspired by the traditional Ashtanga method, with an emphasis 
                        on breath, presence, and moving inward. Rather than focusing on a fast-paced flow or constantly changing sequences, we 
                        practice the same sequence from class to class, allowing familiarity to become part of the practice.
                    </p>
                    <p>
                        As you return to the sequence each week, there is less need to think about what comes next and more opportunity to 
                        notice what is happening within. The repetition creates a sense of rhythm and ritual, inviting you to settle into your 
                        breath, observe sensations in the body, and cultivate a quieter, more focused state of mind.
                    </p>

                    <p>
                        The practice incorporates elements of Ashtanga yoga, including sun salutations, standing postures, seated poses, 
                        twists, hip openers, backbends, and traditional closing postures. The sequence is thoughtfully paced, with time to 
                        establish each posture rather than rushing from one movement to the next. Transitions are deliberate and mindful, 
                        and the breath serves as a continuous thread throughout the practice.
                    </p>

                    <p>
                        While the sequence provides structure, there is no expectation that your practice look exactly like anyone else’s. 
                        Options and modifications are offered so that you can work with your body as it is on any given day. The goal is 
                        not to achieve a particular shape, but to develop steadiness, awareness, and a deeper connection between breath, 
                        body, and mind.
                    </p>

                    <p>
                        This class is designed to be both grounding and contemplative. You may find that the repetition allows the mind 
                        to become quieter, while the physical practice builds strength, mobility, balance, and endurance. Over time, the 
                        familiar sequence can become a moving meditation—one in which you have the space to observe yourself with curiosity 
                        rather than judgment.
                    </p>

                    <p>
                        Whether you are newer to yoga or have an established practice, you are invited to approach the class at your own 
                        pace. Come prepared to move, breathe, listen, and cultivate stillness within movement.
                    </p>

                    <p>
                        The sequence stays consistent. **Your experience of it does not.**
                    </p>
                </div>
            </div>









            <Outlet />
        </div>
    )
}