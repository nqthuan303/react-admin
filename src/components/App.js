import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import Sidebar from './Sidebar';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Sidebar />
        <div className="main-content">
          {this.props.children}
        </div>
        
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
