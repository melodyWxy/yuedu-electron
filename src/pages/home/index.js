import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'

import mapDispatchToProps from './methods'
import get from '../../utils/get'

class Home extends Component {

  handleClick = () => {
    this.props.history.push('/error-page');
  }

  componentDidMount() {
    this.props.getData()
  }

  render() {
    const { count = 0, data = {} } = this.props.state;
    const female = get(data, "female", []);
    return (
      <div className="App">
        <div className="App-header">
          <Button variant='contained' color='primary' onClick={this.handleClick}>
            to error-page
          </Button>
          <div style={{marginTop: 10}}>
            <Button variant='contained' color='primary' onClick={this.props.handleAdd}>
              +
            </Button>
            <span style={{margin: '0 5px'}}>{count}</span>
            <Button variant='contained' color='primary' onClick={this.props.handleLess}>
              -
            </Button>
          </div>
          <div style={{marginTop: 10}}>
            书籍分类:
            <ul>
              {female.map(item=>{
                return <li>分类：{ item.name } 总量: { item.bookCount }</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state: state.HomeReducer })

export default connect(mapStateToProps, mapDispatchToProps)(Home)