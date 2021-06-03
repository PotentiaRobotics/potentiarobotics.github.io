import React, {Component} from "react";
import adi from "./assets/img/Adi.PNG";
import rushil from "./assets/img/Rushil.PNG";
import jason from "./assets/img/Jason.PNG";
import shahzad from "./assets/img/Shahzad.PNG";
import aileen from "./assets/img/Aileen.PNG";
import mayuka from "./assets/img/Mayuka.PNG";
import ram from "./assets/img/Ram.PNG";
import sai from "./assets/img/Sai.PNG";
import kedar from "./assets/img/Kedar.PNG";
import icon from "./assets/img/aboutlogo.PNG";

import GroupPhoto from "./assets/img/team_picture.png";

import './assets/About.scss';

import './assets/About.scss';
 
import {Container, Row, Col, Tabs, Tab} from "react-bootstrap";

var adiBio = "Hi! I’m Aditya, one of the founders and Project Lead of Potentia Robotics and a sophomore at TJHSST. I was inspired to pursue such a grand project by YouTubers like Mark Rober and Michael Reeves, who build large, grand robots and other machinery just for the sheer fun of it. In particular, Michael Reeves’ philosophy of building cool things just for the sake of it/for the learning experience instead of having some ulterior—monetary or otherwise—motive behind building that thing really resonated with me. As the Project Lead of Potentia Robotics, I’m responsible for managing the team as a whole, setting and following through with deadlines, and I serve as the bridge between each of the three subteams. I also do subteam-specific work (programming, designing, accounting, etc.) in each subteam.";
var audhavBio = "I’m Audhav Durai, one of the founders and the Software Lead for Potentia Robotics. Motivated by the research being done at various colleges and academic institutions, I (along with Aditya) founded and became a part of Potentia Robotics so we could tackle a high-level project on our own. Having the opportunity to conduct research that is being done in the real word as a highschooler is an amazing experience. My role on the team is to manage the programming subteam, which means keeping track of our progress, making sure we are always on task, and meeting both exterior and team-set deadlines. Additionally, I do various tasks in the programming subteam as well." 
var eugeneBio = "Hi! I’m Eugene and I am the Control Systems Lead for Potentia Robotics. When I first saw the team posting I immediately .  It is so exciting to work alongside talented students and I am hopeful what we could do together as a team in the future."
var ShahzadBio = "Hi, I’m Shahzad! I manage the Design aspects of Potentia Robotics, specifically working on CAD and design. We use Autodesk Fusion 360 to create realistic models of our robot, allowing us to visualize how each subsection of the humanoid works in tandem with the others. I applied to join the team because of the unique goal of the club. In the past, I’ve worked on countless robots, but none are as intriguing as a full size humanoid. I’m grateful for being brought into the club, and it’s been a pleasure working with the Design team and other Engineering members to create our robot."
var rushilBio = "Hey! I’m Rushil, and I’m working on heading the main engineering team for the bot. We’re hard at work designing the chassis, running logistics for the fabrication of parts, and making the programmers happy. From CAD to cardboard prototype to 3D print to machining and final construction we’re working to design and engineer the final product!"
var jasonBio = "My name is Jason Yi and I am serving as the Outreach Lead for Potentia Robotics. Working with the outreach team has been one of the best experiences I’ve had so far, and it’s amazing knowing that the work I am doing is helping out some of the brightest high school students in the nation! I hope that as the outreach lead, the work that I do will enable the rest of the team to push the envelope of innovation."
var kedarBio = "Hey there! I'm Kedar Prasad and I help code everything in Potentia Robotics. I work on our Webots code and the Potentia Robotics website. I have been on a robotics team since 5th grade and have went to the state competitions for each. I joined Potentia Robotics to help drive my interest in Robotics and STEM. Additionally, I would never reject an opportunity to build a full-sized humanoid robot. So far, I have loved working with this team and learning from all my intellegent teammmates."
var fakeRamBio = "Hello, I’m Ram Reddy and I am a software developer at Potentia Robotics. I work in the programming team of the control systems, engine software and web development. I joined the team because I have always loved to program and build model robots since I was in elementary school. It has been an amazing experience working with like minded individuals striving for the same goal and I am looking forward to what the future holds."
var ramyaBio = "Hi, I’m Ramya Reddy and I’m one of the software developers at Potentia Robotics. I have worked on the engine software and web development with the programming team. I joined Potentia Robotics because I have always been interested in robotics and worked on various projects, but never got the opportunity to help create a full sized humanoid robot! It has been amazing working with the other members of the team, and I’m excited for what is to come."
var varshaBio = "Hi! I’m Varsha and I am a part of the engineering team. As a member of Potentia Robotics, I hope to learn more about the engineering and design process and eventually succeed in building a functional humanoid robot. I joined because I wanted to improve my skills in design and was interested in doing a large scale project."
var aileenBio = "Hey! I’m Aileen Zhao, part of the engineering team for Potentia Robotics, where I help make the body of the robot Olympian. I joined the team because I like robots and engineering and design! I hope that in the process of making Olympian, I also get to expand my understanding and experience in this subject."
var mayukaBio = "Hi! I’m Mayuka, and I’m an Engineer at Potentia Robotics. I work with the rest of the Engineering Team to design our robot Olympian. Working here has provided me with an amazing opportunity to learn many valuable skills in engineering (using CAD, good researching, etc.) and I am looking forward to learning more in the future! I joined the team to gain more knowledge in robotics and engineering, and to be part of a team with members who are enthusiastic to spread their love for STEM in our community. My experience here has been nothing but positive, and I am excited to be part of a team that shows that with hard work and determination, achieving any goal is possible."
var saiBio = "Hey! My name is Sai. I am a part of the Outreach and Finance team with my role centering around spearheading networking with sponsors, organizing financial accounts, as well as working with Jason and Ajit to formulate innovative methods of fundraising that not only help towards the development of our robot Olympian but also help spark a love of STEM in the community. I joined Potentia to help pave the path for other high schoolers and show them that the limitations placed upon us are not rigid but with a dose of determination and collaboration, malleable."
var ajitBio = "My name is Ajit Sivakumar and I am part of the Outreach and Finance team. I really enjoy working with the other members of the outreach team to create a solid foundation for our project. I wanted to join Potentia to gain experience working with money and people and I am also genuinely interested in the creation of a humanoid robot. I hope to learn more not only in my sub-section, but in all aspects of our project!"



class About extends Component {
    render() {
      return (
        <body>
      
      <h1 id = "title">About Us</h1>
      <Container fluid id = "container">
        <Row>
          <Col lg><img id = "teamimage" src = {GroupPhoto} alt = "Group Pic"></img></Col>
          <Col lg><p>We are a team of people who do things. The things we do are important. The things we do relate to robotics. We are important. We are Potentia.</p></Col>
        </Row>
      </Container>

      <Tabs defaultActiveKey="team1" id="uncontrolled-tab-example">
        <Tab eventKey="team1" title="Programming Subteam">
          <Container fluid>
            <Row>
              <Col lg>
                <Container>
                  <Row>

                    <Col lg>
                      <h1>Aditya Vasantharao</h1>
                      <h5>Project Lead</h5>
                    </Col>

                    <Col lg>
                      <img src = {adi} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
                
                
              </Col>
              <Col>
                <p>{adiBio}</p>
              </Col>
            </Row>

            <Row>
              <Col lg>

                <Container>
                  <Row>

                    <Col lg>
                      <h1>Audhav Durai</h1>
                      <h5>Programming Lead</h5>
                    </Col>

                    <Col lg>
                      <img src = {icon} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
                
              </Col>
              <Col>
                <p>{audhavBio}</p>
              </Col>
            </Row>

            <Row>
              <Col lg>
                <Container>
                  <Row>

                    <Col lg>
                      <h1>Eugene</h1>
                      <h5>Control Systems Lead</h5>
                    </Col>

                    <Col lg>
                      <img src = {icon} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
              </Col>
              <Col>
                <p>{eugeneBio}</p>
              </Col>
            </Row>

            <Row>
              <Col lg>
              <Container>
                  <Row>

                    <Col lg>
                      <h1>Kedar Prasad</h1>
                      <h5>Software Developer</h5>
                    </Col>

                    <Col lg>
                      <img src = {kedar} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
              </Col>
              <Col>
                <p>{kedarBio}</p>
              </Col>
            </Row>

            <Row>
              <Col lg>
                <Container>
                  <Row>

                    <Col lg>
                      <h1>Ram Reddy</h1>
                      <h5>Software Developer</h5>
                    </Col>

                    <Col lg>
                      <img src = {ram} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
              </Col>
              <Col>
                <p>{fakeRamBio}</p>
              </Col>
            </Row>

            <Row>
              <Col lg>
                <Container>
                  <Row>

                    <Col lg>
                      <h1>Ramya Reddy</h1>
                      <h5>Software Developer</h5>
                    </Col>

                    <Col lg>
                      <img src = {icon} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
              </Col>
              <Col>
                <p>{ramyaBio}</p>
              </Col>
            </Row>

            

          </Container>
        </Tab>
        
        
        
        <Tab eventKey="team2" title="Engineering Subteam">
          <Container fluid>
            
            <Row>
              <Col lg>
                <Container>
                  <Row>

                    <Col lg>
                      <h1>Shahzad Sohail</h1>
                      <h5>Engineering Lead</h5>
                    </Col>

                    <Col lg>
                      <img src = {shahzad} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
              </Col>
              <Col>
                <p>{ShahzadBio}</p>
              </Col>
            </Row>

            <Row>
              <Col lg>
              <Container>
                  <Row>

                    <Col lg>
                      <h1>Rushil Umaretiya</h1>
                      <h5>Engineer</h5>
                    </Col>

                    <Col lg>
                      <img src = {rushil} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
              </Col>
              <Col>
                <p>{rushilBio}</p>
              </Col>
            </Row>

            <Row>
              <Col lg>
                <Container>
                  <Row>

                    <Col lg>
                      <h1>Varsha</h1>
                      <h5>Engineer</h5>
                    </Col>

                    <Col lg>
                      <img src = {icon} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
              </Col>
              <Col>
                <p>{varshaBio}</p>
              </Col>
            </Row>

            <Row>
              <Col lg>
                <Container>
                  <Row>

                    <Col lg>
                      <h1>Aileen</h1>
                      <h5>Engineer</h5>
                    </Col>

                    <Col lg>
                      <img src = {aileen} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
              </Col>
              <Col>
                <p>{aileenBio}</p>
              </Col>
            </Row>

            <Row>
              <Col lg>
                <Container>
                  <Row>

                    <Col lg>
                      <h1>Mayuka Valluri</h1>
                      <h5>Engineer</h5>
                    </Col>

                    <Col lg>
                      <img src = {mayuka} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
              </Col>
              <Col>
                <p>{mayukaBio}</p>
              </Col>
            </Row>
           
                       
          </Container>
        </Tab>
        
        <Tab eventKey="team3" title="Outreach Subteam" >

          <Container fluid >

            <Row>
              <Col lg>
                <Container>
                  <Row>

                    <Col lg>
                      <h1>Jason Yi</h1>
                      <h5>Outreach Lead</h5>
                    </Col>

                    <Col lg>
                      <img src = {jason} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
              </Col>
              <Col>
                <p>{jasonBio}</p>
              </Col>
            </Row>

            <Row>
              <Col lg>
                <Container>
                  <Row>

                    <Col lg>
                      <h1>Sai Mattapalli</h1>
                      <h5>Outreach</h5>
                    </Col>

                    <Col lg>
                      <img src = {sai} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
              </Col>
              <Col>
                <p>{saiBio}</p>
              </Col>
            </Row>

            <Row>
              <Col lg>
                <Container>
                  <Row>

                    <Col lg>
                      <h1>Ajit</h1>
                      <h5>Outreach</h5>
                    </Col>

                    <Col lg>
                      <img src = {icon} alt = "Image of Team member"></img>
                    </Col>
                   
                  </Row>
                </Container>
              </Col>
              <Col>
                <p>{ajitBio}</p>  
              </Col>
            </Row>

          </Container>

        </Tab>
      </Tabs>
          
      {/* <table>
        <tr>
        <th colspan="2">About Us</th>
        </tr>
        <tr><th colspan="2">Founder and Project Lead</th></tr>
        <tr>
          <td font-size="20px"  >
          Hi! I’m Aditya, one of the founders and Project Lead of Potentia Robotics and a sophomore at TJHSST. I was inspired to pursue such a grand project by YouTubers like Mark Rober and Michael Reeves, who build large, grand robots and other machinery just for the sheer fun of it. In particular, Michael Reeves’ philosophy of building cool things just for the sake of it/for the learning experience instead of having some ulterior—monetary or otherwise—motive behind building that thing really resonated with me. As the Project Lead of Potentia Robotics, I’m responsible for managing the team as a whole, setting and following through with deadlines, and I serve as the bridge between each of the three subteams. I also do subteam-specific work (programming, designing, accounting, etc.) in each subteam.
 
          </td>
          <td>
            <img src = {adi}  alt="image of Aditya Vasantharao"></img>
          </td>
       
        </tr>
        <tr><th colspan="2">Founder and Software Lead</th></tr>
        <tr>
          <td font-size="20px"  >
          I’m Audhav Durai, one of the founders and the Software Lead for Potentia Robotics. Motivated by the research being done at various colleges and academic institutions, I (along with Aditya) founded and became a part of Potentia Robotics so we could tackle a high-level project on our own. Having the opportunity to conduct research that is being done in the real word as a highschooler is an amazing experience. My role on the team is to manage the programming subteam, which means keeping track of our progress, making sure we are always on task, and meeting both exterior and team-set deadlines. Additionally, I do various tasks in the programming subteam as well. 
 
          </td>
          <td padding="0px">
            <img src = {icon}  alt="image of Audhav Durai"></img>
          </td>
       
        </tr>
        <tr><th colspan="2">Control Systems Lead</th></tr>
        <tr>
          <td font-size="20px"  >
          Hi! I’m Eugene and I am the Control Systems Lead for Potentia Robotics. When I first saw the team posting I immediately .  It is so exciting to work alongside talented students and I am hopeful what we could do together as a team in the future.
 
          </td>
          <td padding="0px">
            <img src = {icon}  alt="image of Audhav Durai"></img>
          </td>
       
        </tr>
        <tr><th colspan="2">Design Lead</th></tr>
        <tr>
          <td font-size="20px"  >
          
          Hi, I’m Shahzad! I manage the Design aspects of Potentia Robotics, specifically working on CAD and design. We use Autodesk Fusion 360 to create realistic models of our robot, allowing us to visualize how each subsection of the humanoid works in tandem with the others. I applied to join the team because of the unique goal of the club. In the past, I’ve worked on countless robots, but none are as intriguing as a full size humanoid. I’m grateful for being brought into the club, and it’s been a pleasure working with the Design team and other Engineering members to create our robot. 
 
 
          </td>
          <td padding="0px">
            <img src = {shahzad}  alt="image of Shahzad Sohail"></img>
          </td>
       
        </tr>
        <tr><th colspan="2">Electronics Lead</th></tr>
        <tr>
          <td font-size="20px"  >
          Hey! I’m Rushil, and I’m working on heading the main engineering team for the bot. We’re hard at work designing the chassis, running logistics for the fabrication of parts, and making the programmers happy. From CAD to cardboard prototype to 3D print to machining and final construction we’re working to design and engineer the final product!
          </td>
          <td padding="0px">
            <img src = {rushil}  alt="image of Rushil Umaretiya"></img>
          </td>
       
        </tr>
        
        <tr><th colspan="2">Outreach Lead</th></tr>
        <tr>
          <td font-size="20px"  >
          My name is Jason Yi and I am serving as the Outreach Lead for Potentia Robotics. Working with the outreach team has been one of the best experiences I’ve had so far, and it’s amazing knowing that the work I am doing is helping out some of the brightest high school students in the nation! I hope that as the outreach lead, the work that I do will enable the rest of the team to push the envelope of innovation.
</td>
          <td padding="0px">
            <img src = {jason}  alt="image of Jason Yi"></img>
          </td>
       
        </tr>
        <tr>
          <td font-size="20px"  >
          Hey there! I'm Kedar Prasad and I help code everything in Potentia Robotics. I work on our Webots code and the Potentia Robotics website. I have been on a robotics team since 5th grade and have went to the state competitions for each. I joined Potentia Robotics to help drive my interest in Robotics and STEM. Additionally, I would never reject an opportunity to build a full-sized humanoid robot. So far, I have loved working with this team and learning from all my intellegent teammmates. </td>
          <td padding="0px">
            <img src = {kedar}  alt="image of Kedar Prasad"></img>
          </td>       
        </tr>

        <tr><th colspan="2">Software Developer</th></tr>
        <tr>
          <td font-size="20px"  >
          Hello, I’m Ram Reddy and I am a software developer at Potentia Robotics. I work in the programming team of the control systems, engine software and web development. I joined the team because I have always loved to program and build model robots since I was in elementary school. It has been an amazing experience working with like minded individuals striving for the same goal and I am looking forward to what the future holds.
</td>
          <td padding="0px">
            <img src = {ram}  alt="image of Ram Reddy"></img>
          </td>
       
        </tr>
        <tr><th colspan="2">Software Developer</th></tr>
        <tr>
          <td font-size="20px"  >
          Hi, I’m Ramya Reddy and I’m one of the software developers at Potentia Robotics. I have worked on the engine software and web development with the programming team. I joined Potentia Robotics because I have always been interested in robotics and worked on various projects, but never got the opportunity to help create a full sized humanoid robot! It has been amazing working with the other members of the team, and I’m excited for what is to come.
</td>
          <td padding="0px">
            <img src = {icon}  alt="image of Jason Yi"></img>
          </td>
       
        </tr>
        <tr><th colspan="2"> Engineer</th></tr>
        <tr>
          <td font-size="20px"  >
          Hi! I’m Varsha and I am a part of the engineering team. As a member of Potentia Robotics, I hope to learn more about the engineering and design process and eventually succeed in building a functional humanoid robot. I joined because I wanted to improve my skills in design and was interested in doing a large scale project.
  </td>
          <td padding="0px">
            <img src = {icon}  alt="image of Jason Yi"></img>
          </td>
       
        </tr>
        <tr><th colspan="2">Engineer</th></tr>
        <tr>
          <td font-size="20px"  >
          Hey! I’m Aileen Zhao, part of the engineering team for Potentia Robotics, where I help make the body of the robot Olympian. I joined the team because I like robots and engineering and design! I hope that in the process of making Olympian, I also get to expand my understanding and experience in this subject. 
</td>
          <td padding="0px">
            <img src = {aileen}  alt="image of Aileen Zhao"></img>
          </td>
       
        </tr>
        <tr><th colspan="2">Engineer</th></tr>
        <tr>
          <td font-size="20px"  >
          Hi! I’m Mayuka, and I’m an Engineer at Potentia Robotics. I work with the rest of the Engineering Team to design our robot Olympian. Working here has provided me with an amazing opportunity to learn many valuable skills in engineering (using CAD, good researching, etc.) and I am looking forward to learning more in the future! I joined the team to gain more knowledge in robotics and engineering, and to be part of a team with members who are enthusiastic to spread their love for STEM in our community. My experience here has been nothing but positive, and I am excited to be part of a team that shows that with hard work and determination, achieving any goal is possible.
</td>
          <td padding="0px">
            <img src = {mayuka}  alt="image of Mayuka"></img>
          </td>
       
        </tr>
        <tr>
          <td font-size="20px"  >
          Hey! My name is Sai. I am a part of the Outreach and Finance team with my role centering around spearheading networking with sponsors, organizing financial accounts, as well as working with Jason and Ajit to formulate innovative methods of fundraising that not only help towards the development of our robot Olympian but also help spark a love of STEM in the community. I joined Potentia to help pave the path for other high schoolers and show them that the limitations placed upon us are not rigid but with a dose of determination and collaboration, malleable.   
</td>
          <td padding="0px">
            <img src = {sai}  alt="image of Sai Mattapali"></img>
          </td>
       
        </tr>
        <tr>
          <td font-size="20px"  >
          My name is Ajit Sivakumar and I am part of the Outreach and Finance team. I really enjoy working with the other members of the outreach team to create a solid foundation for our project. I wanted to join Potentia to gain experience working with money and people and I am also genuinely interested in the creation of a humanoid robot. I hope to learn more not only in my sub-section, but in all aspects of our project!
</td>
          <td padding="0px">
            <img src = {icon}  alt="image of Jason Yi"></img>
          </td>
       
        </tr>
      </table> */}
       
        </body>
        );
      
      
    }
}
 
export default About;


