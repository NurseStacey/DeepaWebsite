import { Outlet } from 'react-router';
import Banner from '../components/banner';

export default function HomePage(){
    return (
        <div >
            <Banner/>
                <div className='sub-title '>New To Ashtanga</div>

                <div className='container'>
                    <img src='src/images/lotus pose.png' className='wrap-image-right' width='475x' height='450px'/>
                    <div className='text-block'>
                        
                        <p>
                            Beginning an Ashtanga yoga practice is an invitation to slow down, turn inward, and develop a deeper awareness of yourself. 
                            While Ashtanga is known for its structured sequence of postures and its physical discipline, at its heart is a meditative 
                            practice. Through the integration of breath, movement, and focused attention, Ashtanga offers a way to cultivate presence 
                            both on and off the mat.
                        </p> 

                        <p>
                            The practice follows a set sequence of postures connected through breath and movement. Over time, the familiarity of the 
                            sequence creates a steady rhythm that allows the mind to become quieter. Rather than wondering what comes next, practitioners 
                            can gradually shift their attention toward the experience of breathing, moving, and being fully present. In this way, the 
                            physical practice becomes a form of moving meditation.
                        </p>
                        <p>
                            Breath is central to this process. Ashtanga uses a steady form of breathing known as ujjayi pranayama, which helps anchor 
                            awareness and create continuity throughout the practice. Listening to the breath can provide a point of focus when the mind 
                            becomes distracted. With each inhale and exhale, there is an opportunity to return to the present moment.
                        </p>
                        <p>
                            Another important aspect of Ashtanga is developing a focused gaze, or drishti. Directing the eyes toward a specific point 
                            during each posture helps gather the attention and reduce external distractions. Combined with breath and movement, drishti 
                            encourages a state of concentration in which awareness becomes less scattered and more centered.
                        </p>
                        <p>
                            For beginners, the meditative quality of yoga does not require sitting perfectly still or clearing the mind completely. 
                            The mind will wander—that is part of being human. The practice is learning to notice when attention has drifted and gently 
                            bring it back to the breath, the body, and the present moment. This repeated return is where much of the meditative work takes place.
                        </p>
                        <p>
                            Ashtanga also invites practitioners to develop patience and self-awareness. Each day on the mat can feel different.
                            Some days may feel strong and energized, while others may feel slow, challenging, or unsettled. Instead of judging 
                            these experiences, the practice offers an opportunity to observe them with curiosity. Over time, this awareness can 
                            help us recognize patterns in the way we respond to challenge, discomfort, success, and change.
                        </p>
                        <p>
                            Consistency is an important part of cultivating this relationship with practice. You do not need to be flexible or 
                            experienced to begin, and progress is not measured simply by how deeply you can move into a posture. The deeper practice 
                            is learning to inhabit your body, follow your breath, and meet yourself where you are.
                        </p>
                        <p>
                            With regular practice, the qualities developed on the mat can begin to extend into everyday life. A greater awareness 
                            of breath can help us pause before reacting. Concentration can support us through moments of distraction. Stillness can 
                            become something we carry with us, even while moving through a busy day.
                        </p>
                        <p>
                            Starting Ashtanga is therefore not simply about learning a sequence of postures. It is about creating space to 
                            listen, observe, breathe, and reconnect with yourself. Through steady practice, movement becomes meditation, the breath 
                            becomes an anchor, and the yoga mat becomes a place to cultivate greater presence and awareness.
                        </p>
                    </div>                    
                    
                    
                </div>
                
                
            <Outlet />
        </div>
    )
}