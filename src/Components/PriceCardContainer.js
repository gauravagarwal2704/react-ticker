import React, {Component} from 'react';
import './PriceCard.css';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
// import PriceCard from './PriceCard';


const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

class PriceCardContainer extends Component {


  render() {
       var cards = this.props.all_data.map((cardData)=>{
        return <Grid item xs={12} sm={6} md={4} lg={4} key={cardData.name}> 
                <Card>
                  <CardHeader
                    title={ <Typography component="p">              
                              <span className="titles">{cardData.name}</span>
                            </Typography>
                          }
                    avatar= {
                              <Avatar aria-label="Recipe"  
                              alt={cardData.name} 
                              src={cardData.image}
                              style={styles.bigAvatar}
                              />
                            }
                  />
                 
                  <CardContent>
                    <Typography component="p" dir="ltr">              
                      <span className="prices">Buy |  ₹ {cardData.buy}</span>
                      <br/>
                      <span className="prices">Sell |  ₹ {cardData.sell}</span>
                    </Typography>

                    <div dir="rtl">              
                              <Avatar aria-label="Recipe"  
                              alt={cardData.coin} 
                              src={cardData.coin_path}
                              style={styles.bigAvatar}
                              />
                    </div>

                  </CardContent>
                </Card>
              </Grid>
      })

    // else{
    //   var cards = <Grid item xs={12} sm={6} md={3} lg={3}> 
    //             <Card>
    //               <CardHeader
    //                 title="Zebpay"
    //                 avatar="https://img14.androidappsapk.co/300/0/e/c/zebpay.Application.png"
    //               />
    //               <CardContent>
    //                 <Typography component="p">              
    //                  No Data
    //                 </Typography>
    //               </CardContent>
    //             </Card>
    //           </Grid>
    
    // }

   

    return (
      <div style={{ padding: 20 }}>
      <div style={{textAlign : 'center'}}><Button raised color="primary" onClick={this.props.clicked}>Refresh</Button></div>
        <br/>
        <Grid container spacing={24}>
        {cards}
         </Grid>
      </div>
    );
  }
}

export default PriceCardContainer;