import React, { Component, useState } from 'react'

import adi from './assets/img/Adi.PNG'
import anirudh from './assets/img/anirudh.png'
import rushil from './assets/img/Rushil.PNG'
import jason from './assets/img/Jason.PNG'
import shahzad from './assets/img/Shahzad.PNG'
import aileen from './assets/img/Aileen.PNG'
import mayuka from './assets/img/Mayuka.PNG'
import ram from './assets/img/Ram.PNG'
import ramV from './assets/img/Ram1.png'
import sai from './assets/img/Sai.PNG'
import kedar from './assets/img/Kedar.PNG'
import icon from './assets/img/aboutlogo.PNG'
import raghav from './assets/img/Raghav.PNG'
import shruti from './assets/img/shruti.png'
import group from './assets/img/group.png'
import classnames from 'classnames'

import GroupPhoto from './assets/img/team_picture.png'

import './assets/About.scss'

import { Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import './assets/react-tabs.scss';
// import {Tabs, Tab} from 'react-bootstrap-tabs';

// Leadership
const adiBio = 'Hi! I’m Aditya, one of the founders (along with Audhav) and Project Lead of Potentia Robotics and a sophomore at TJHSST. I was inspired to pursue such a grand project by YouTubers like Mark Rober and Michael Reeves, who build large, grand robots and other machinery just for the sheer fun of it. In particular, Michael Reeves’ philosophy of building cool things just for the sake of it/for the learning experience instead of having some ulterior—monetary or otherwise—motive behind building that thing really resonated with me. As the Project Lead of Potentia Robotics, I’m responsible for managing the team as a whole, setting and following through with deadlines, and I serve as the bridge between each of the three subteams. I also do subteam-specific work (programming, designing, accounting, etc.) in each subteam.'
const audhavBio = 'I’m Audhav Durai, one of the founders and the Software Lead for Potentia Robotics. Motivated by the research being done at various colleges and academic institutions, I (along with Aditya) founded and became a part of Potentia Robotics so we could tackle a high-level project on our own. Having the opportunity to conduct research that is being done in the real word as a highschooler is an amazing experience. My role on the team is to manage the programming subteam, which means keeping track of our progress, making sure we are always on task, and meeting both exterior and team-set deadlines. Additionally, I do various tasks in the programming subteam as well. '
const eugeneBio = 'Hi! I’m Eugene and I am the Control Systems Lead for Potentia Robotics. I joined Potentia because I have always loved to create and program robots. It is so exciting to work alongside talented students and I am hopeful what we could do together as a team in the future.'
const ogRamBio = 'Hello, I’m Ram Reddy and I am the dynamic balance lead at Potentia Robotics. I work in the programming team of control systems, engine software and web development. I joined the team because I have always loved to program and build model robots since I was in elementary school. It has been an amazing experience working with like minded individuals striving for the same goal and I am looking forward to what the future holds.'
const ShahzadBio = 'Hi, I’m Shahzad! I manage the Design aspects of Potentia Robotics, specifically working on CAD and design. We use Autodesk Fusion 360 to create realistic models of our robot, allowing us to visualize how each subsection of the humanoid works in tandem with the others. I applied to join the team because of the unique goal of the club. In the past, I’ve worked on countless robots, but none are as intriguing as a full size humanoid. I’m grateful for being brought into the club, and it’s been a pleasure working with the Design team and other Engineering members to create our robot. '
const raghavBio = 'Hello! My name is Raghav Tirumale and I’m the Hardware and Electronics Lead for Potentia Robotics. I work on designing the electrical systems of our robot and also determine which sensors, motors, microcontrollers, and other hardware components are the most suitable for the project. I’ve done robotics for a while now through organizations like FIRST and KIPR, however this is the first time I have been involved in such an exciting large-scale project! I have enjoyed working with all of our members and I’m excited to see what we can accomplish together as a team. '
const jasonBio = 'My name is Jason Yi and I am serving as the Outreach Lead for Potentia Robotics. Working with the outreach team has been one of the best experiences I’ve had so far, and it’s amazing knowing that the work I am doing is helping out some of the brightest high school students in the nation! I hope that as the outreach lead, the work that I do will enable the rest of the team to push the envelope of innovation.'

// Programming
const kedarBio = "Hey there! I'm Kedar Prasad and I help code everything in Potentia Robotics. I work on our Webots code and the Potentia Robotics website. I have been on a robotics team since 5th grade and have went to the state competitions for each. I joined Potentia Robotics to help drive my interest in Robotics and STEM. Additionally, I would never reject an opportunity to build a full-sized humanoid robot. So far, I have loved working with this team and learning from all my intelligent teammates."
const ramyaBio = 'Hi, I’m Ramya Reddy and I’m one of the software developers at Potentia Robotics. I have worked on the engine software and web development with the programming team. I joined Potentia Robotics because I have always been interested in robotics and worked on various projects, but never got the opportunity to help create a full sized humanoid robot! It has been amazing working with the other members of the team, and I’m excited for what is to come.'
const johnBio = 'Hey, I’m John Kim and a software developer at Potential Robotics! I joined this group because I was excited at the prospect of being the first high school group to build a humanoid robot from scratch. I’ve enjoyed working on the website and researching alongside my teammates, and can’t wait to see how far we go!'
const ryanBio = 'Hi! I’m Ryan Park and am one of the software developers at Potentia Robotics. I am working and researching on standing dynamic balance with the programming team. I joined Potentia because I love learning new things and the prospect of being a part of a team of highschoolers creating something never before done, a six-foot humanoid robot, intrigued me. I have enjoyed working and learning from all my team members and am excited to see what the future of Potentia will hold. '
const ramBioP = 'Hey there! My name is Ram Vempati, and I’m part of the engine control systems and web development teams. I primarily use simulation software like webots to train our robot to balance, as well as various web development tools and frameworks to make the website. Robotics is my passion and I am excited to see our project come to fruition.'

// Engineering
const ramBioE = 'Hey there! My name is Ram Vempati, and I’m part of the engineering team. I use CAD tools to design and evaluate parts for our robot. Using Autodesk Fusion 360 and other tools, I designed the arms and legs of our robot. Robotics is my passion and I am exited to see our project come to fruition.'
const varshaBio = 'Hi! I’m Varsha and I am a part of the engineering team. As a member of Potentia Robotics, I hope to learn more about the engineering and design process and eventually succeed in building a functional humanoid robot. I joined because I wanted to improve my skills in design and was interested in doing a large scale project.'
const mayukaBio = 'Hi! I’m Mayuka, and I’m an Engineer at Potentia Robotics. I work with the rest of the Engineering Team to design our robot Olympian. Working here has provided me with an amazing opportunity to learn many valuable skills in engineering (using CAD, good researching, etc.) and I am looking forward to learning more in the future! I joined the team to gain more knowledge in robotics and engineering, and to be part of a team with members who are enthusiastic to spread their love for STEM in our community. My experience here has been nothing but positive, and I am excited to be part of a team that shows that with hard work and determination, achieving any goal is possible.'
const aileenBio = 'Hey! I’m Aileen Zhao, part of the engineering team for Potentia Robotics, where I help make the body of the robot Olympian. I joined the team because I like robots and engineering and design! I hope that in the process of making Olympian, I also get to expand my understanding and experience in this subject. '
const shrutiBio = 'Hi! My name is Shruti and I’m part of the engineering team for Olympian. Currently I work with other team members to CAD and design various robot parts such as ankles and shoulders using Fusion 360. I’ve always had a passion for robotics and all things design in general. But getting a chance to help bring such a large, complex project to life is amazing! I’ve already learned so much throughout my experience in Potentia and can’t wait to discover more in the future. '

// Outreach
const saiBio = 'Hey! My name is Sai. I’m a part of the Outreach and Finance team with my role centering around spearheading networking with sponsors, organizing financial accounts, as well as working with Jason and Ajit to formulate innovative methods of fundraising that not only help towards the development of our robot Olympian but also help spark a love of STEM in the community. I joined Potentia to help pave the path for other high schoolers and show them that the limitations placed upon us are not rigid but with a dose of determination and collaboration, malleable.   '
const ajitBio = 'My name is Ajit Sivakumar and I am part of the Outreach and Finance team. I really enjoy working with the other members of the outreach team to create a solid foundation for our project. I wanted to join Potentia to gain experience working with money and people and I am also genuinely interested in the creation of a humanoid robot. I hope to learn more not only in my sub-section, but in all aspects of our project!'
const anirudhBio = 'Hi! My name is Anirudh Mantha and I am part of the Outreach and Finance team. My main role is reaching out to other companies for sponsorships and planning events that spread awareness on how amazing STEM is. The main reason I wanted to become part of the Potentia Robotics team was because our mission is something that has never been done before by a group of high schoolers. Being part of the process for just a year makes me wonder how far our team will get in the coming years. '

// Past members
const rushilBio = 'Hey! I’m Rushil, and I’m working on heading the main engineering team for the bot. We’re hard at work designing the chassis, running logistics for the fabrication of parts, and making the programmers happy. From CAD to cardboard prototype to 3D print to machining and final construction we’re working to design and engineer the final product!'


class About extends Component {
  render () {
    return (
      <body className="backColor">

        <h1 id='title'><span className="backColor3" >About Us</span></h1>
        <Container fluid id='container'>
          <Row>
            <Col sm={{ size: 6, order: 2, offset: 1 }}><img className="imgStyle" id = "teamimage" src = {group} alt = "Group Pic"></img></Col>
            <Col sm={{ size: 6, order: 2, offset: 1 }}><p className="rowColor" id = "ourDescription">Potentia Robotics is the first high school team building a fully-functional humanoid robot. It is run entirely by students from Thomas Jefferson High School for Science and Technology (TJHSST). Our goal is to build Olympian, a 6-foot tall, low-cost bipedal humanoid robot with a human-like dynamically stable gait, limb mobility, and balance capabilities, that can be controlled effectively and efficiently from afar.</p></Col>
          </Row>
        </Container>

        <Tabs className="backColor2">
          <TabList>
            <Tab>Leadership</Tab>
            <Tab>Programming Subteam</Tab>
            <Tab>Engineering Subteam</Tab>
            <Tab>Outreach Subteam</Tab>
          </TabList>

          <TabPanel>
            <Container fluid>
              <h1 id='subteamTitle'><span className="simple-highlight">Leadership</span></h1>
              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1 className="nameStyle">Aditya Vasantharao</h1>
                      <h2 className="h2Style">Project Lead</h2>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img className="imgStyle2" src={adi} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>

                <Col sm={{ size: 6, order: 0, offset: 0 }}>
                  <p>{adiBio}</p>
                </Col>

              </Row>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  {/* <Container> */}
                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Audhav Durai</h1>
                      <h5>Programming Lead</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={icon} alt='Image of Team member' />
                    </Col>

                  </Row>
                  {/* </Container> */}

                </Col>
                <Col>
                  <p>{audhavBio}</p>
                </Col>
              </Row>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Eugene</h1>
                      <h5>Control Systems Lead</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={icon} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{eugeneBio}</p>
                </Col>
              </Row>
              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Ram Reddy</h1>
                      <h5>Dynamic Balance Lead</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={ram} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{ogRamBio}</p>
                </Col>
              </Row>
              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Shahzad Sohail</h1>
                      <h5>Design Lead</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={shahzad} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{ShahzadBio}</p>
                </Col>
              </Row>
              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Raghav Tirumale</h1>
                      <h5>Hardware and Electronics Lead</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={raghav} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{raghavBio}</p>
                </Col>
              </Row>
              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Jason Yi</h1>
                      <h5>Outreach Lead</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={jason} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{jasonBio}</p>
                </Col>
              </Row>

            </Container>
          </TabPanel>

          <TabPanel>
            <Container fluid>
              <h1 id='subteamTitle'>Programming Subteam Members</h1>
              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Kedar Prasad</h1>
                      <h5>Software Developer</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={kedar} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{kedarBio}</p>
                </Col>
              </Row>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Ramya Reddy</h1>
                      <h5>Software Developer</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={icon} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{ramyaBio}</p>
                </Col>
              </Row>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>John Kim</h1>
                      <h5>Software Developer</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={icon} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{johnBio}</p>
                </Col>
              </Row>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Ryan Park</h1>
                      <h5>Software Developer</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={icon} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{ryanBio}</p>
                </Col>
              </Row>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Ram Vempati</h1>
                      <h5>Software Developer</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={ramV} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{ramBioP}</p>
                </Col>
              </Row>

            </Container>
          </TabPanel>

          <TabPanel>
            <Container fluid>
              <h1 id='subteamTitle'>Engineering Subteam Members</h1>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Ram Vempati</h1>
                      <h5>Engineer</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={ramV} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{ramBioE}</p>
                </Col>
              </Row>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Varsha Athreya</h1>
                      <h5>Engineer</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={icon} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{varshaBio}</p>
                </Col>
              </Row>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Aileen Zhao</h1>
                      <h5>Engineer</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={aileen} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{aileenBio}</p>
                </Col>
              </Row>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Mayuka Valluri</h1>
                      <h5>Engineer</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={mayuka} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{mayukaBio}</p>
                </Col>
              </Row>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Shruti Shah</h1>
                      <h5>Engineer</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={shruti} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{shrutiBio}</p>
                </Col>
              </Row>

            </Container>
          </TabPanel>

          <TabPanel>
            <Container fluid>
              <h1 id='subteamTitle'>Outreach Subteam Members</h1>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Sai Mattapalli</h1>
                      <h5>Outreach</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={sai} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{saiBio}</p>
                </Col>
              </Row>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Ajit</h1>
                      <h5>Outreach</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={icon} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{ajitBio}</p>
                </Col>
              </Row>

              <Row>
                <Col sm={{ size: 6, order: 2, offset: 1 }}>

                  <Row>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <h1>Anirudh Mantha</h1>
                      <h5>Outreach</h5>
                    </Col>

                    <Col sm={{ size: 6, order: 2, offset: 1 }}>
                      <img src={anirudh} alt='Image of Team member' />
                    </Col>

                  </Row>

                </Col>
                <Col>
                  <p>{anirudhBio}</p>
                </Col>
              </Row>

            </Container>

          </TabPanel>

        </Tabs>

      </body>
    )
  }
}

export default About
