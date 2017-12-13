import React, {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardHeader, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import './PriceCard.css';

class PriceCardContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      newZeb : 'hello'
    }
    console.log("in PriceCard", props)
  }
  render() {

    return (
        <div>
          <Card>
          <CardHeader
            title="Zebpay"
            avatar="https://img14.androidappsapk.co/300/0/e/c/zebpay.Application.png"
          />
          <CardContent>
            <Typography component="p">              
              
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default PriceCardContainer;