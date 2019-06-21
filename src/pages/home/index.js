import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Home extends Component {
    render() {
      return (
        <div className="App">
          <div className="App-header">
            <Button variant="contained" color="primary">
              开始
            </Button>
          </div>
        </div>
      );
    }
  }
  
  export default Home;