import React, { Component } from 'react';
import Switch from 'material-ui/Switch';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
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
 }
};

class Toggle extends Component {

 constructor(props) {
    super(props);
}

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
	<div>
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
