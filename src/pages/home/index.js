import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class Home extends Component {
  handleClick = () => {
    this.props.history.push('/error-page');
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <Button
              variant='contained'
              color='primary'
              onClick={this.handleClick}>
              to error-page
            </Button>
        </div>
      </div>
    );
  }
}
  
  export default Home;