import React from 'react';
import PropTypes from 'prop-types';

import Resume from './Resume';
import Role from './Role';
import RoleDescriptions from './RoleDescriptions';

class FieldsetProfessionalInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resume: '',
      role: '',
      roleDescriptions: '',
    }
  }

  handleProfInputChange = ({ target }) => {
    const { name, value } = target;
 
    this.setState({
      [name]: value
    })
  }

  render() {
    const { resume, role, roleDescriptions } = this.state;
    return (
      <fieldset>
        <Resume value={ resume } handleProfInputChange={ this.handleProfInputChange }/>
        <Role value={ role } handleProfInputChange={ this.handleProfInputChange } />
        <RoleDescriptions value={ roleDescriptions } handleProfInputChange={ this.handleProfInputChange } />

      </fieldset>
    );
  }
}

FieldsetProfessionalInfo.propTypes = {
  resume: PropTypes.string,
  role: PropTypes.string,
  roleDescriptions: PropTypes.string,
};

FieldsetProfessionalInfo.defaultProps = {
  resume: '',
  role: '',
  roleDescriptions: '',
};

export default FieldsetProfessionalInfo;
