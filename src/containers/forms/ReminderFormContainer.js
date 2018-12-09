import React from 'react';
import axios from 'axios';

import ReminderForm from '../../components/forms/ReminderForm';

class ReminderFormContainer extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      name: "John Doe",
      email: "john@email.com",
      medicine: "nonsteroidal anti-inflammatory drug",
      daysSupply: 0,
      daysSupplyArr: [30, 60, 90, 100, 120],
      reactions: [],
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.getFirstName    = this.getFirstName.bind(this);
    this.getSendDate     = this.getSendDate.bind(this);
    this.getReactions    = this.getReactions.bind(this);
    this.options         = this.options.bind(this);
    this.reactionList    = this.reactionList.bind(this);
  }

  componentDidMount () {
    this.setState({ daysSupply: this.getMedianValue(this.state.daysSupplyArr) });
    this.getReactions();
  }

  getReactions () {
    const medicine = this.state.medicine.split(" ").join("+");
    const url      = `https://api.fda.gov/drug/event.json?search=patient.drug.openfda.pharm_class_epc:"${medicine}"&limit=1`

    axios({
      url: url,
    }).then(this.getReactionsSuccess.bind(this))
  }

  getReactionsSuccess (response) {
    const reactions = response.data.results[0].patient.reaction;

    this.setState({ reactions: reactions })
    console.log('reactions: ', reactions)
  }

  onChangeHandler (e, field) {
    this.setState({ [field]: e.target.value })
  }

  getFirstName () {
    return this.state.name.split(' ')[0];
  }

  getSendDate () {
    const today    = new Date();

    today.setDate(today.getDate() + parseInt(this.state.daysSupply) - 5)
    return today.toDateString();
  }

  getMedianValue (arr) {
    const list     = arr.sort((a,b) => {return a - b});
    const listLen  = list.length;
    const evenList = (listLen % 2) === 0;

    if (evenList) {
      return list[(listLen/2) - 1];
    } else {
      return list[Math.floor(listLen/2)];
    };
  }

  options (label) {
    let arr = this.state.daysSupplyArr;
    return arr.map((el, index) => {
      if (index === 0) {
        return [ <option disabled key={'option-label'}>{label}</option>, <option key={index} value={el}>{el}</option> ]
      } else {
        return <option key={index} value={el}>{el}</option>
      }
    });
  }

  reactionList () {
    if (this.state.reactions.length < 1) { return <p>*Unknown reactions</p> };

    return this.state.reactions.map((el) => {
      return <p>*{el.reactionmeddrapt}</p>
    });
  }

  render () {
    return (
      <ReminderForm
        onChangeHandler    ={this.onChangeHandler}
        firstName          ={this.getFirstName()}
        name               ={this.state.name}
        email              ={this.state.email}
        medicine           ={this.state.medicine}
        dayOptions         ={this.options("Days supply of RX")}
        middleDayOption    ={this.getMedianValue(this.state.daysSupplyArr)}
        sendDate           ={this.getSendDate()}
        reactionList       ={this.reactionList()}
        />
    )
  }
}

export default ReminderFormContainer;
