import { Outlet } from 'react-router';
import Banner from '../components/banner';

export default function WhatAshtanga(){
    return (
        <div className='page-style'>
            <Banner/>
            <div className='sub-title '>What Is Ashtanga</div>
            <div className='container'>
                <img src='src/images/Pattabhi-Jois.jpg' className='wrap-image-left' width='425px' height='450px'/>
                <div className='text-block'>
                    <p>Ashtanga Yoga is a traditional and dynamic system of yoga that combines physical postures, controlled breathing, 
                    focused attention, and disciplined practice. The word “Ashtanga” comes from the Sanskrit words ashta, meaning “eight,” 
                    and anga, meaning “limb.” It refers to the eight-limbed path of yoga described by the ancient Indian sage Patanjali in the Yoga Sutras. 
                    These eight limbs provide a framework for developing physical health, mental clarity, self-discipline, and spiritual awareness.</p>
                    <p>The physical practice of Ashtanga Yoga is particularly known for its structured sequence of postures performed in a specific order. 
                        The practice traditionally begins with Sun Salutations (Surya Namaskara), followed by standing postures, seated postures, backbends, 
                        and finishing poses. Each movement is coordinated with the breath, creating a continuous and flowing practice. This combination 
                        of movement and breathing generates internal heat, which is traditionally believed to help purify and strengthen the body.</p>
                    <p>
                        An important feature of Ashtanga Yoga is Ujjayi breathing, a controlled breathing technique in which the breath is gently constricted 
                        at the back of the throat, producing a soft, audible sound. Practitioners coordinate each movement with either an inhalation or an exhalation. 
                        This synchronization of breath and movement helps develop concentration and creates a meditative quality within the physical practice.
                    </p>
                    <p>Ashtanga Yoga also emphasizes bandhas, or internal energy locks. The three principal bandhas are Mula Bandha (root lock),
                        Uddiyana Bandha (abdominal lock), and Jalandhara Bandha (throat lock). Along with breathing, bandhas are traditionally used to 
                        support stability, control, and energetic awareness.</p>
                        <p>Another important element is drishti, which means a specific point of visual focus. Each posture has an associated gaze point, 
                            helping practitioners maintain concentration and reduce visual distractions. Together, breath (pranayama), posture (asana), and gaze 
                            (drishti) form what is sometimes called the Tristhana method of Ashtanga practice.</p>
                        <p>The eight limbs of Ashtanga Yoga extend beyond physical exercise. They are Yama (ethical principles), Niyama (personal observances), 
                            Asana (posture), Pranayama (breath control), Pratyahara (withdrawal of the senses), Dharana (concentration), Dhyana (meditation), and 
                            Samadhi (a state of deep absorption). Thus, the physical postures represent only one part of the broader yogic path.</p>
                        <p>Modern Ashtanga Vinyasa Yoga was systematized and taught internationally by K. Pattabhi Jois, who developed a method based on 
                            traditional yoga teachings. The practice is commonly taught through several progressively challenging series, with students traditionally 
                            learning postures gradually according to their ability and experience.</p>
                        <p>Overall, Ashtanga Yoga is a disciplined practice that seeks to unite body, breath, and mind. Its structured sequences can develop strength, 
                            flexibility, balance, coordination, and concentration, while its philosophical foundations encourage self-awareness and mindful living. Because 
                            the practice can be physically demanding, beginners are generally encouraged to learn from a qualified teacher and progress gradually, respecting 
                            their individual abilities and limitations.</p>
                        </div>
                    </div>
            <Outlet />
        </div>
    )
}