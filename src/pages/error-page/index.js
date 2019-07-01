import React, { Component } from 'react'
import Button from '@material-ui/core/Button'

class Home extends Component {
  handleClick = () => {
    this.props.history.push('/home');
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
            <Button
              variant='contained'
              color='primary'
              onClick={this.handleClick}>
              to Home
            </Button>
        </div>
      </div>
    )
  }
}

export default Home
