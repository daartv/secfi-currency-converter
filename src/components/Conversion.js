import React, {Component} from 'react';
import { Card, Button, Icon } from 'antd';
import Details from './Details.js'
import 'antd/lib/card/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/icon/style/css';
import axios from 'axios';

class Conversion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      date: '',
      pastDate: '',
      fluctuationValue: 0,
      fluctuationPercentage: 0
    };
  };

  handleClick() {
    let date = new Date()
    let pastDate = new Date()
    pastDate.setDate(pastDate.getDate() - 30);
    let dateString = date.toISOString().substring(0,10)
    let pastDateString = pastDate.toISOString().substring(0,10)
    //this.setState({date: dateString, pastDate: pastDateString})
    axios.get(`http://data.fixer.io/api/${pastDateString}?access_key=9a15f817809d8d6ceee00fd850aa53f1&base=${this.props.data.base}&symbols=${this.props.data.target}`)
    .then(({data}) => {
      console.log(data.rates[this.props.data.target]);
      let pastRate = data.rates[this.props.data.target];
      let newFluctuationValue = this.props.data.rate - pastRate;
      let newFluctuationPercentage = ((pastRate * 100) / this.props.data.rate) - 100;
      console.log(newFluctuationValue, 'the value of fluctuation');
      console.log(newFluctuationPercentage, 'the percentage of fluctuation');
      this.setState({fluctuationValue: newFluctuationValue, fluctuationPercentage: newFluctuationPercentage})
    })
    .catch((error) => {
      console.log(error)
    })
  };

  render () {
    if (!this.props.data.rate) {
      return (
        <p></p>
      )
    } else {
      return (
        <div>
          <Card title={`${this.props.data.base} to ${this.props.data.target}`} style={{width: 800, margin: 'auto'}} bordered={false}>
            <h1>{this.props.data.amount} {this.props.data.base} = {this.props.data.conversion} {this.props.data.target}</h1>
            <p>{this.props.data.date}</p>
            <Button type='primary' onClick={this.handleClick.bind(this)}>
              Details
              <Icon type='right'/>
            </Button>
          </Card>
          <Details details={this.state} currencies={this.props.data} />
          </div>
      )
    }
  }
}

export default Conversion;