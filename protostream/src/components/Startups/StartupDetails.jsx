import React from 'react'
import './css/startupDetails.css'
import cloud from '../../assets/images/clouddownload.svg'

function StartupDetails({name}) {
    return (
        <div className="Startup-Details">
            <div className="main">
                <div className="heading startup-name">Roxet</div>
                <div className="yellow-box">
                    <div className="heading">Basic Details</div>
                    <div className="details">
                        <ul className="names column">
                            <li><span>Startup Domain:</span>  Mechanical Engineering</li>
                            <li><span>Startup Stage:</span>  Prototype</li>
                            <li><span>Startup Type:</span>  Product Based</li>
                            <li><span>Startup Founder:</span>  Himanshu Pandey</li>
                        </ul>
                        <ul className="names column">
                            <li><span>Team Size:</span>  5</li>
                            <li><span>Founder's Mob No:</span>  8476090539</li>
                            <li><span>Founder's E-mail:</span>  hp200229@gmail.com</li>
                            <li><span>Founder's Branch:</span>  CSE</li>
                        </ul>
                    </div>
                </div>
                <div className="grey-box">
                    <div className="heading">Summary</div>
                    <p className="para">Idea is to use chemical rockets to lift off from Earth and to land on Mars. But for the middle part of the journey, some engineers propose using something called nuclear thermal electric propulsion.
The Orion crew module docking with Gateway in lunar orbit 

Astronauts could be sent to the Gateway in Nasa's Orion capsule. The Orion crew capsule would then dock with a transfer vehicle.</p>
                </div>
                <div className="yellow-box">
                    <div className="heading">Team Members</div>
                    <div className="details">
                        <ul className="names column">
                            <li className="head">Name</li>
                            <li>Himanshu Pandey</li>
                            <li>Akhil Siraswal</li>
                            <li>Aayushman</li>
                            <li>Ujjwal Kumar</li>
                        </ul>
                        <ul className="branch column">
                            <li className="head">Branch</li>
                            <li>CSE</li>
                            <li>CSE</li>
                            <li>CSE</li>
                            <li>CO</li>
                        </ul>
                        <ul className="email column">
                            <li className="head">Email</li>
                            <li>Himanshu@gmail.com</li>
                            <li>Akhil@gmail.com</li>
                            <li>Aayushman@gmail.com</li>
                            <li>Ujjwal@gmail.com</li>
                        </ul>
                        <ul className="number column">
                            <li className="head">Mob No.</li>
                            <li>8476090539</li>
                            <li>8476090539</li>
                            <li>8476090539</li>
                            <li>8476090539</li>
                        </ul>
                    </div>
                </div>
                <div className="grey-box">
                    <div className="heading">Milestones</div>
                    <ul className="milestone">
                        <li><div className="circles"></div><span className="date">27 June '21</span>Physical Prototype Completed</li>
                        <li><div className="circles"></div><span className="date">27 June '21</span>Physical Prototype Completed</li>
                        <li><div className="circles"></div><span className="date">27 June '21</span>Physical Prototype Completed</li>
                        <li><div className="circles"></div><span className="date">27 June '21</span>Physical Prototype Completed</li>
                        <li><div className="circles"></div><span className="date">27 June '21</span>Physical Prototype Completed</li>
                        <li><div className="circles"></div><span className="date">27 June '21</span>Physical Prototype Completed</li>
                    </ul>
                </div>
                <div className="yellow-box">
                    <div className="heading">Startup Files</div>
                    <a href="#" className="file">ProjectPresentation.ppt <img src={cloud} alt="" /></a>
                    <a href="#" className="file">ProjectPresentation.ppt <img src={cloud} alt="" /></a>
                    <a href="#" className="file">ProjectPresentation.ppt <img src={cloud} alt="" /></a>
                </div>
                <div className="grey-box">
                    <div className="heading">Startup Breif</div>
                    <p className="para">If we're ever to make regular journeys from Earth to Mars and other far-off destinations, we might need new kinds of engines. Engineers are exploring revolutionary new technologies that could help us traverse the Solar System in much less time.

Because of the orbital paths Mars and Earth take around the Sun, the distance between them varies between 54.6 million km and 401 million km.

Missions to Mars are launched when the two planets make a close approach. During one of these approaches, it takes nine months to get to Mars using chemical rockets - the form of propulsion in widespread use.

That's a long time for anyone to spend travelling. But engineers, including those at the US space agency (Nasa), are working with industrial partners to develop faster methods of getting us there.

So what are some of the most promising technologies?
Solar electric propulsion

Solar electric propulsion could be used to send cargo to Mars ahead of a human mission. That would ensure equipment and supplies were ready and waiting for astronauts when they arrived using chemical rockets, according to Dr Jeff Sheehy, chief engineer in Nasa's Space Technology Mission Directorate.

With solar electric propulsion, large solar arrays unfurl to capture solar energy, which is then converted to electricity. This powers something called a Hall thruster.

There are pros and cons. On the upside, you need far less fuel, so the spacecraft becomes lighter. But it also takes your vehicle longer to get there.

"In order to carry the payload we'd need to, it would probably take between two to 2.5 years to get us there," Dr Sheehy tells the BBC. </p>
                </div>
            </div>
        </div>
    )
}

export default StartupDetails
