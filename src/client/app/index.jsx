import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import {
  HashRouter,
  Route,
  Link,
  Redirect,
  hashHistory
} from 'react-router-dom';
import EnigmaComponent from './EnigmaComponent.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    //get new passphrase
    axios.get('/newPassphrase')
    .then(response => {
      this.props.history.push("/"+response.data)
    })
    .catch(error => {
    console.log(error.response)
      if(error.response.data){
        alert(error.response.data)
      }
    });
    return (
      <div>
      </div>
    );
  }
}

ReactDOM.render((
     <HashRouter history={hashHistory} >
      <div>
        <Route exact path="/" component={App}/>
        <Route path="/:passphrase" component={EnigmaComponent}/>
      </div>
     </HashRouter>
     ),document.getElementById('app')
);
