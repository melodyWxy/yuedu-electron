import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <Link to='/error-page'>
              <Button
                variant='contained'
                color='primary'
                onClick={this.handleHome}>
                to error-page
              </Button>
            </Link>
          </div>
        </div>
      );
    }
  }
  
  export default Home;