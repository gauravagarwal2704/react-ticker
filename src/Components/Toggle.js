import React, { Component } from 'react';
import Switch from 'material-ui/Switch';
import Grid from 'material-ui/Grid';
import './Toggle.css';

const styles = {
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
 toggleOption:{
 	fontSize : '20px',
 	fontFace:'Raleway'
 },
 toggleGrid:{
 	top:'50px',
 },
 toggleContainer:{
 	margin: '25px 0'
 }
};

class Toggle extends Component {

state = {
	isCoin: true,
};

  handleChange = name => (event, checked) => {
    this.setState({ [name]: checked });
    this.props.handleChoice(this.state.isCoin);
    console.log('in change');
    console.log(this.state)
  };

render() {

    return (
	<div style={styles.toggleContainer}>
		<Grid container spacing={0}>
			<Grid item xs={12} style={styles.toggleGrid} >
				<Grid
				container
				spacing={0}
				alignItems='center'
				justify='center'
				>
					<Grid item>
						<span className="toggleOption" style={styles.toggleOption}>Coins</span>
						<Switch
						checked={this.state.isCoin}
						onChange={this.handleChange('isCoin')}
						aria-label="isCoin"
						/>
						<span className="toggleOption" style={styles.toggleOption}>Exchanges</span>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	</div>
      );
  }
}

export default Toggle;
