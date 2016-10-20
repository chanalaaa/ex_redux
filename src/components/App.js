import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div>
      <Link to="/">HOME</Link>
      {' / '}
      <Link to="/run">RUN</Link>
      <br/>
      {props.children}
    </div>
  );
};

App.propTypes={
	children: PropTypes.element
};

export default App;