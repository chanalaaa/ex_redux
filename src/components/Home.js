import React, {PropTypes} from 'react';

class Home extends React.Component {
	constructor(props, context) {
    super(props, context);
	}
	render() {
		return(
			<div>
				<h1>{this.props.welcomeText.word}</h1>
			</div>
		);
	}
}

Home.propTypes = {
  welcomeText: PropTypes.object.isRequired
};

export default Home; 