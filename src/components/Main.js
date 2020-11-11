import React from "react";
import '../styles/Main.css'
import lingolabs from "../images/lingolabs.png";
import movie_magic from "../images/movie_magic.png";
import sports_tracker from "../images/sports_tracker.png";
import node_express_handlebars from "../images/node_express_handlebars.png";
import "../styles/ContactForm.css";
import "../styles/Aboutme.css";
import "../styles/Home.css";





function Main () {
  return (
  
       
 <div>


   <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light"  aria-hidden="false"  role="navigation">

<a className="navbar-brand " href="home">JAM</a>
<button className="nav-btn1 navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse"id="navbarSupportedContent">

    <ul className="navbar-nav  mx-auto">
        <li className="nav-item ">
            <a className="nav-link" href="/#section1">HOME </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/#section2">ABOUT </a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/#section3">PORTFOLIO</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/#section4">CONTACT</a>
        </li>

    </ul>
</div>
</nav>

<section id="section1">
<div id="home" aria-hidden="false">
      

      <center>
      <h1 id="name" className="fade-in" >JAM</h1>
      <h2 id="position">Full Stack Developer</h2>
      <h5 id="email" className="text-white">jgamerino@gmail.com</h5>
   
      <h3 id="location">San Diego, CA </h3>
       <div id="socialContacts" className="row">
      
        
   <li className="list-inline-item">
   
             <a className="btn  btn-social text-center rounded-circle" href="https://github.com/Kuiil7"> 
             <i className="fa fa-fw fa-github fa-2x" > </i><p className="text-white">GitHub</p></a>
             </li> 
        <li className="list-inline-item">
   
             <a className="btn  btn-social text-center rounded-circle" href="https://www.linkedin.com/in/joey-aguilera-merino-8298b6193/">
                 <i className="fa fa-linkedin fa-2x" > </i><p className="text-white"> linkedin</p> </a>
             
      </li>      <li className="list-inline-item">
   
   
   <a className="btn  btn-social text-center rounded-circle"  href="https://onedrive.live.com/download?cid=657CABE1B252F7DF&resid=657CABE1B252F7DF%212009&authkey=ADu8A0SMy0D98-E" > 
   <i class="fa fa-file-text fa-2x" > </i> <p className="text-white"> Resume</p>
   
    </a>
   
   </li>       
   
    
   </div>
   
        </center>
     </div>
</section>
<div id="section2"  aria-hidden="false" >
          <div id="about" className="container ">

    <center>
    <h2 id="aboutme_title">About Me</h2>
    <img src="https://i.imgrz.com/vb6h.jpg" id="prof-img" className="p_margin20" alt="profile pic"></img>
    <h2>Joey Aguilera Merino</h2>

    </center>
    <div>
    <p className="p_margin20" >
    Endless pursuit of perfection – that is my motivation. I am always looking for ways to move an organization to the next level and have done that throughout my career. 
    </p>
     <p className="p_margin20" >
     I began at Telecommunications and Marketing with MCI WorldCom and more recently AT&T Relay Services in a national capacity. Coding was not only a necessity in these roles, it has been my lifelong passion. To continue improving these skills I enrolled in the George Washington Coding Boot Camp and obtained my professional certification. This program provided me the foundation, skills and tools to create and build websites and applications from the ground up.
</p>
<p className="p_margin20" >
My most recent work has been the creation of Progressive Web Apps (PWAs) with offline capability, and working nonstructural databases (MongoDB Atlas).

</p>
<div className="p_margin20" >
I bring:
<ul className="p_margin20" >
<li>
   Full Stack Development
    </li>
    <li>
    Proven creativity skills
    </li>
    <li>
    Graphic design experience 
    </li>
    <li>
    Technical expertise
    </li>
    <li>
     Dedicated problem-solver
    </li>
    <li>
    UX/UI design principles 
    </li>
    <li>
    Video Editing
    </li>
    <li>
Photography
    </li>


</ul> 
</div>
     <div className="container">
    <img src="https://i.imgrz.com/Yjwf.png" className="logo_size " alt="html5 logo"></img>
    <img src="https://i.imgrz.com/YAlk.png" className="logo_size" alt="CSS3 logo"></img>
    <img src="https://i.imgrz.com/YLb5.png" className="logo_size" alt="JavaScript logo"></img>
    <img src=" https://i.imgrz.com/YrnT.png" className="logo_size" alt="JQuery logo"></img>
    <img src="https://i.imgrz.com/Y88z.png" className="logo_size" alt="MongoDB logo"></img>
    <img src="https://i.imgrz.com/YQud.png" className="logo_size" alt="Express logo"></img>
    <img src="https://i.imgrz.com/YajO.png" className="logo_size" alt="NodeJs logo"></img>
    <img src=" https://i.imgrz.com/YgIw.png" className="logo_size" alt="npm logo"></img>
    <img src=" https://i.imgrz.com/YldS.png" className="logo_size" alt="ReactJs logo"></img>
    <img src=" https://i.imgrz.com/YpbV.png" className="logo_size" alt="Adobe Illustrator logo"></img>
    <img src="https://i.imgrz.com/Y27P.jpg" className="logo_size" alt="Photoshop logo"></img>
    <img src="  https://i.imgrz.com/RMw0.png" className="logo_size" alt="Final Cut Pro logo"></img>  
    </div>



</div>
</div>
</div>
<section id="section3">
<div className="container">
  <div className="row">
    <div className="col">
        <h4>LingoLabs</h4>
        < img className="img-wrapper" src={lingolabs}  alt="project lingolabs landingpage">
    </img>
    <h5 className="card-title">LingoLabs</h5>
        <p className="card-text text-justify"> A website where users can browse and shop for stock websites templates. </p>
        <p className="card-text text-justify"> My core responsibility was creating the registration page and technical details regarding the backend server. </p>
        <p className="card-text text-justify"> Built with:
       
       <strong> NodeJs, NPM, Express.js, MongoDB, React.js, Mongoose, Passport.js, Socket.io, and Heroku. </strong>
 </p>
 <a href="https://github.com/ShawnWhy/LingoLabs" className="btn btn-light bg-warning btn-1">REPO</a>
  
      <a href="https://shawnyulingolabsmaster.herokuapp.com/" className="btn btn-dark">DEMO</a>

    </div>
    <div className="col">
            <h4>Movie Magic</h4>
            
    < img className="img-wrapper" src={movie_magic}  alt="project movie app with popcorn background">
   
   </img>
        <p className="card-text text-justify">Find movies and fellow movie buffs (called "buddies") based on user input which is accessed upon signing up or logging in. </p>
        <p className="card-text text-justify ">My core responsibility was creating the registration page where the user signups/ logins, logout, and redirect (members page). *registration has bugs but work by manually refreshing after every input
        </p>
       
        <p className="card-text text-justify   "> Built with:
         
            <strong> Express.js, NodeJs, Passport.js, MySQL, Moments.Js, Ajax, Sequelize, Dotenv, Console.Table, and Heroku. </strong>

        </p>
    </div>
    <div className="w-100"></div>
    <div className="col">         
    <h4>Sports Tracker</h4>    
            < img className="img-wrapper" src={sports_tracker}  alt="landing page">
            </img></div>
    <div className="col">
    <h4>Node-Express-Handlebars</h4>
            
            < img className="img-wrapper" src={node_express_handlebars}  alt="landing page">
            </img>
    </div>
  </div>
</div>
</section>
<section id="section4">
  <h1>holding4</h1>
</section>


<section id="section6">

  <div id="contact1" className="bg-light text-dark" aria-hidden="false">

<form name="contact" className="contact-form" method="post" netlify="true">
    <p id="contact-me-title" className="text-center">

        CONTACT ME
    </p>
    <input type="hidden" name="form-name" value="contact" />

    <div className="form-field">
        <label htmlFor="name">
    <div className="label-content">Name:</div>
    <input type="text" name="name" required />
  </label>
    </div>

    <div className="form-field">
        <label htmlFor="email">
    <div className="label-content">Email:</div>
    <input type="email" name="email" required />
  </label>
    </div>

    <div className="form-field">
        <label htmlFor="message">
    <div className="label-content">Message:</div>
    <textarea className="stretch" name="message" rows="5" required />
  </label>
    </div>

    <button className="btn bg-warning" type="submit">Send</button>

</form>
</div>

</section>
</div>

  );

  
}

export default Main;