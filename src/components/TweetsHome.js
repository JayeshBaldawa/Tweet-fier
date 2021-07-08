import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";

const facts = ["One of the original ideas for a name was “FriendStalker","Approximately 350,000 Tweets are posted every minute."
,"According to the Vatican, you’re a better person if you follow the Pope on Twitter","The hashtag was first introduced in 2007",
"The Library of Congress used to archive all tweets","The famous blue Twitter bird is called Larry",
"The very first tweet was posted on March 21, 2006","Twitter’s early days were not without their problems"]

class TweetsHome extends React.Component {
  
  handleButton(event,id)
  {
    event.preventDefault();
    if(id==="1")
      this.props.history.push(`/tweets-gem`)
    else if(id==="2")
      this.props.history.push(`/tweets-resources`)
    else if(id==="3")
      this.props.history.push(`/tweets-random`)  
  }
  
  render() {
    return (
      <div>
        <NavBar/>
        <br/>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Recent Interesting Tweets</Card.Title>
              <Card.Text>
                
                  <i>
                    “Smart people learn from everything and everyone, average
                    people from their experiences, stupid people already have
                    all the answers.” – Socrates
                  </i>
                
              </Card.Text>
              <Button variant="primary" onClick={(event) => this.handleButton(event,"1")} >Explore</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Techie & Resources</Card.Title>
              <Card.Text>
                <i>
                  “If somebody offers you an amazing opportunity but you are not
                  sure you can do it, say yes – then learn how to do it later.”
                  Richard Branson
                </i>
              </Card.Text>
              <Button variant="primary" onClick={(event) => this.handleButton(event,"2")}>Explore</Button>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Random Tweets</Card.Title>
              <Card.Text>
                <i>
                “When I get bored, I'll zone out, and I'll just sit in front of
                  my computer and start writing any random song that comes to
                  mind.” JC Chasez
                </i>
              </Card.Text>
              <Button variant="primary" onClick={(event) => this.handleButton(event,"3")}>Explore</Button>
            </Card.Body>
          </Card>
        </CardGroup>
        <br/>
        <h4 className="text-center" style={{color:"#3493eb"}}>** Random Twitter fact **</h4>
        <h5 className="text-center">{facts[Math.floor(Math.random() * 8)]}</h5>
      </div>
    );
  }
}
export default TweetsHome;
