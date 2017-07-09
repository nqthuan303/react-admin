import React from 'react';
import PropTypes from 'prop-types';

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        Dashboard
      </div>
    );
  }
}

Dashboard.propTypes = {
  children: PropTypes.element
};

export default Dashboard;
