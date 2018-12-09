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
                    <input
                      type="name"
                      className="form-control"
                      placeholder="Full name"
                      onChange={(e) => this.props.onChangeHandler(e, "name")}
                      />
                  </div>

                  <div className="form-group col-lg-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      onChange={(e) => this.props.onChangeHandler(e, "email")}
                      />
                  </div>

                  <div className="form-group col-lg-6">
                    <input
                      type="medicine-name"
                      className="form-control"
                      placeholder="Medicine Name"
                      onChange={(e) => this.props.onChangeHandler(e, "medicine")}
                      />
                  </div>

                  <div className="form-group col-lg-6">
                    <select
                      className="form-control"
                      placeholder="Days supply of RX"
                      defaultValue={90}>
                      {this.props.dayOptions}
                    </select>
                  </div>
                </div>
              </form>

              <div className="col-xs-12 message">
                <p>
                  Hi {this.props.name}!<br />
                  Thanks for signing up for a reminder for {this.props.medicine}.
                  We'll send it to {this.props.email} on blah, to give you a little notice.
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
