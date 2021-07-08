import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import './style.css'


class TweetsHome extends React.Component {
  
  
  render() {
    return (
      <div className="bg">
        <NavBar/>
        <br/>
        <center>
        <section>
    		
    		<div class="col-md-4">
    		    <div class="card profile-card-3">
    		        <div class="background-block">
    		            <img src="https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="profile-sample1" class="background"/>
    		        </div>
    		        <div class="profile-thumb-block">
    		            <img src="jayesh.jpg" alt="profile-image" class="profile"/>
    		        </div>
    		        <div class="card-content">
                    <h2>Jayesh Baldawa<small>Software Engineer</small></h2>
                    <div class="icon-block"><a href="https://github.com/VenomousJ"><i class="fa fa-github"></i></a><a href="https://twitter.com/JayeshBaldawa"> <i class="fa fa-twitter"></i></a><a href="https://www.linkedin.com/in/jayeshbaldawa"> <i class="fa fa-linkedin" aria-hidden="true"></i></a></div>
                    </div>
                </div>
                <p class="mt-3 w-100 float-left text-center"><strong></strong></p>
    		</div>
    		
</section>
</center> 
    </div>
    );
  }
}
export default TweetsHome;
