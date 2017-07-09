import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Sidebar from './Sidebar';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
