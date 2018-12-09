import React from 'react';

import clockImg from '../../images/clock-img.png';
import '../../stylesheets/forms/ReminderForm.scss';

class ReminderForm extends React.Component {
  render () {
    return (
      <div className="reminder-form">

        <div className="header">
          <h2>Welcome to Honeybee Health</h2>
          <h4>Sign-up for reminder emails!</h4>
        </div>

        <div className="img-container">
          <img src={clockImg} />
        </div>

      </div>
     );
  };
}

export default ReminderForm;
