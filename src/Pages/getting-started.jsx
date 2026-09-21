import { Outlet } from "react-router";
import Banner from '../components/banner';

export default function GettingStarted(){
    return (
        <div >
            <Banner/>
            <div className='sub-title '>Getting Started</div>

            <div className='container'>
                <div className='text-block'>
                    <img src='src/images/yoga pose.jpg' className='wrap-image-left' width='315px' height='350px'/>
                    <p style={{fontSize:'40px'}}>Beginning Your Yoga Practice</p>
                    <p>
                        If you are new to my classes, I ask that you begin with a **30-minute introductory meeting** before joining a regular class. 
                        This short meeting gives us an opportunity to connect, talk about your experience with yoga, and discuss what you are hoping 
                        to gain from your practice.
                    </p>
                    <p>
                        My classes follow a consistent sequence inspired by Ashtanga yoga, with an emphasis on mindful movement, breath, 
                        concentration, and developing a steady, meditative practice. Because the sequence is intentional and builds over 
                        time, the introductory meeting is an important first step in becoming familiar with the approach.
                    </p>
                    <p>
                        During our meeting, I will introduce you to the basic structure of the practice and answer any questions you may 
                        have. We can also discuss any physical considerations or modifications that may be helpful for you as you begin.
                    </p>
                    <p>
                        There is no expectation that you have prior yoga experience. Whether you are completely new to yoga or returning 
                        to practice after some time away, the introduction provides a comfortable place to begin.
                    </p>
                    <p>
                        Your first step is simply to schedule your 30-minute introductory meeting. I look forward to meeting you and beginning 
                        this practice together.  Please email me at ***** to get started
                    </p>

                </div>
            </div>









            <Outlet />
        </div>
    )
}