import React from "react";
import { Card,CardGroup} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Tweets from "./services/TweetsServices";
import { RiTwitterFill } from 'react-icons/ri';
class TweetRandom extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: []
    }
  }
  componentDidMount() {
    Tweets.getRandomTweets().then((res) => {
      this.setState({ tweets: res.data.data})
      
    })
  }
  render() { 
    
    return (
      <div>
        <NavBar />
        
      
        <div class="row  row-cols-sm-2 m-2">
        {this.state.tweets.map((t) => (
     
         <CardGroup>
          <Card key={t.id} style={{marginRight:"3px",marginTop:"5px"}}>
          <Card.Header style={{color:"blue"}}><RiTwitterFill/></Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {' '}
                {t.text}
               {' '}
              </p>
              <footer className="blockquote-footer">
                <cite title="Source Title">{t.source}</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        </CardGroup>
            
         
        ))} 
          </div>
        </div>  
    );
  }
}
export default TweetRandom;
