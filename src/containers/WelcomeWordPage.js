import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/welcomeAction';
import Home from '../components/Home';


export const WelcomeWordPage = (props) => {
	return(
		<Home welcomeText={props.welcome_word}/>
	);
};


WelcomeWordPage.propTypes = {
  actions: PropTypes.object.isRequired,
  welcome_word: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    welcome_word: state.welcomeWordReducer.welcome_word
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeWordPage);
