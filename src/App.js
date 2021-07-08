import React from "react";
import './App.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import TweetsHome from "./components/TweetsHome";
import Tweetgem from "./components/Tweetgem";
import TweetResources from "./components/TweetResources";
import TweetRandom from "./components/TweetRandom";
import About from "./components/About";

class App extends React.Component
{
    render()
    {
        return(
        
          <Router>
            <Switch>
            <Route path ="/" exact component={TweetsHome}></Route>
            <Route path ="/tweets-gem" exact component={Tweetgem}></Route>
            <Route path ="/tweets-resources" exact component={TweetResources}></Route>
            <Route path ="/tweets-random" exact component={TweetRandom}></Route>
            <Route path ="/about" exact component={About}></Route>
            </Switch>
         </Router>
        
        );
    }
}

export default App;
