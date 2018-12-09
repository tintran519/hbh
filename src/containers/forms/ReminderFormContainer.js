import React        from 'react';
import ReminderForm from '../../components/forms/ReminderForm';

class ReminderFormContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      medicine: "",
      daysSupply: 0,
      daysSupplyArr: [30, 60, 90, 100, 120],
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.getFirstName    = this.getFirstName.bind(this);
    this.options         = this.options.bind(this);
  }

  onChangeHandler (e, field) {
    this.setState({ [field]: e.target.value })
  }

  getFirstName () {
    return this.state.name.split(' ')[0];
  }

  getSendDate () {
    const today = new Date();
    today.toDateString();
  }

  options (label) {
    let arr = this.state.daysSupplyArr;
    return arr.map((el, index) => {
      console.log('el', el)
      console.log('index', index)
      if (index === 0) {
        return [ <option disabled key={'option-label'}>{label}</option>, <option key={index} value={el}>{el}</option> ]
      } else {
        return <option key={index} value={el}>{el}</option>
      }
    })
  }

  render () {
    let today = new Date();

    return (
      <ReminderForm
        onChangeHandler    ={this.onChangeHandler}
        name               ={this.getFirstName()}
        email              ={this.state.email}
        medicine           ={this.state.medicine}
        dayOptions         ={this.options("Days supply of RX")}
        />
    )
  }
}

export default ReminderFormContainer;
