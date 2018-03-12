import Conversion from './Conversion.js'
import React, {Component} from 'react';
import { Select, InputNumber, Button, Icon } from 'antd';
import 'antd/lib/button/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/input-number/style/css';
import 'antd/lib/icon/style/css';
import axios from 'axios';
import currencyCodes from '../currencyCodes.js';

const Option = Select.Option;

class Converter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      base: 'EUR',
      target: 'USD',
      rate: '',
      date: '',
      conversion: 0,
      amount: 0
    };
  }

  handleBaseChange(value) {
    let newBase = value;
    this.setState({base: newBase})
  };

  handleTargetChange(value) {
    let newTarget = value;
    this.setState({target: newTarget})
  };

  getRate() {
    let baseCurrencyCode = this.state.base;
    let targetCurrencyCode = this.state.target;
    axios.get(`http://data.fixer.io/api/latest?access_key=9a15f817809d8d6ceee00fd850aa53f1&base=${baseCurrencyCode}&symbols=${targetCurrencyCode}`)
    .then(({data}) => {
      let value = data.rates[this.state.target]
      this.setState({rate: value, date: data.date, conversion: this.state.amount * value});
    })
    .catch((error) => {
      console.log(error)
    })
  };

  onChange(num) {
    this.setState({amount: num});
  }

  render() { 
    return (
      <div>
        <Select defaultValue="EUR" size='large' onChange={this.handleBaseChange.bind(this)}>
          {currencyCodes.map((code, index) => <Option value={code}>{code}</Option>)}
        </Select>
        <InputNumber onChange={num => this.onChange(num)} style={{ width: 140, height: 40, fontSize: 'large'}}/>
        <h2> to </h2>
        <Select defaultValue="USD" size='large' onChange={this.handleTargetChange.bind(this)}>
          {currencyCodes.map((code, index) => <Option value={code}>{code}</Option>)}
        </Select>
        <div>
          <Button type='primary' icon='swap' size='large' onClick={this.getRate.bind(this)} style={{margin: '10px'}}>
            Convert
          </Button>
          <Conversion data={this.state} />
        </div>
      </div>
    )
  }
}

export default Converter;