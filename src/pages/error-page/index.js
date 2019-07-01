import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";

class Home extends Component {
  handleHome = () => {
    // hashHistory.push('./home')
    // console.log('跳转error-page')
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <Link to='/home'>
            <Button
              variant='contained'
              color='primary'
              onClick={this.handleHome}>
              to Home
            </Button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
