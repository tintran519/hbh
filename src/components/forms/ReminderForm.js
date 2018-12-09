import React from 'react';

import clockImg from '../../images/clock-img.png';
import '../../stylesheets/forms/ReminderForm.scss';

class ReminderForm extends React.Component {
  render () {
    return (
      <div className="reminder-form">
        <div className="container">
          <div className="header text-center">
            <h2>Welcome to Honeybee Health</h2>
            <h4>Sign-up for reminder emails!</h4>
          </div>

          <div className="row">
            <div className="col-lg-8 content-container">
              <form>
                <div className="row">
                  <div className="form-group col-lg-6">
                    <label for="name"></label>
                    <input
                      type="name"
                      className="form-control"
                      placeholder="Full name"
                      />
                  </div>

                  <div className="form-group col-lg-6">
                    <label for="email"></label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      />
                  </div>

                  <div className="form-group col-lg-6">
                    <label for="medicine-name"></label>
                    <input
                      type="medicine-name"
                      className="form-control"
                      placeholder="Medicine Name"
                      />
                  </div>

                  <div className="form-group col-lg-6">
                    <label for="email"></label>
                    <select
                      className="form-control"
                      placeholder="Days supply of RX">
                      <option selected disabled>Days supply of RX</option>
                      <option>30</option>
                      <option>60</option>
                      <option selected="selected">90</option>
                    </select>
                  </div>
                </div>
              </form>

              <div className="col-xs-12 message">
                <p>
                  Hi blah!<br />
                  Thanks for signing up for a reminder for blah. We'll send it to blah on blah, to give you a little notice.
                </p>
              </div>

              <div className="col-xs-12 text-center">
                <button type="button" className="btn btn-primary">
                  Set Reminder
                </button>
              </div>

              <div className="drug-reactions">
                <p>As a service, here are the possible drug reactions you should contact your doctor if you're experiencing:</p>
              </div>
            </div>

            <div className="col-lg-4 img-container text-right">
              <img src={clockImg} />
            </div>

          </div>
        </div>
      </div>
     );
  };
}

export default ReminderForm;
