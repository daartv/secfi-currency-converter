import React, {Component} from 'react';
import { Carousel } from 'antd';
import 'antd/lib/carousel/style/css';
import './Details.css';

class Details extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    if (!this.props.details.fluctuationValue) {
      console.log(this.props.details.fluctuationValue)
      return (
        <p></p>
      )
    } else {
      let URL = `http://www.xe.com/en/currencycharts/?from=${this.props.currencies.base}&to=${this.props.currencies.target}&view=1M`
      console.log(this.props.currencies);
      return (
        <Carousel effect='fade'>
          <div>
            <h1>Fluctuation over the past 30 days</h1>
            <h2>
              {this.props.details.fluctuationValue} (Fluctuation)<br/>
              &<br/>
              {this.props.details.fluctuationPercentage}% (Percentage)
            </h2>
          </div>
          <div id='my-div'>
           <iframe src={URL} id="my-iframe" align='center' scrolling='no'></iframe>
          </div>
        </Carousel>
      )
    }
  }
}
export default Details;