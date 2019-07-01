import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom";

class Home extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <Link to='/home'>
           ls
          </Link>
        </div>
      </div>
    )
  }
  handleHome = () => {
    // hashHistory.push('./home')
    // console.log('跳转error-page')
  }
}

export default Home
