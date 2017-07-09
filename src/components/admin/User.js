import React from 'react';
import PropTypes from 'prop-types';

class User extends React.Component {
  render() {
    return (
      <div>
        User
      </div>
    );
  }
}

User.propTypes = {
  children: PropTypes.element
};

export default User;
