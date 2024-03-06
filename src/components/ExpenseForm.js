import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description: '',
            amount: props.expense ? (props.expense.amount / 100).toString() :'',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            note: props.expense ? props.expense.note : '',
            calendarFocus: false,
            error: '',
            errorFlag:  false
        }
    }

    setDescription = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }

    setAmount = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }))
        }
    }

    setDate = (createdAt) => {
        //const createdAt = e.target.value;
        //console.log('createdAT--', createdAt);
        if(createdAt){
            this.setState(() => ({ createdAt }))
        }
    }
    
    setNote = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }

    focusChange = ({ focused }) => this.setState({ calendarFocus: focused })

    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({
                errorFlag: true,
                error: 'Input field cannot be empty.'
            }))
        }
        else {
            // this.state.errorFlag = false;
            // this.state.error = ''
            this.setState(() => ({
                errorFlag: false,
                error: ''
            }));

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Description' autoFocus 
                    value={this.state.description} onChange={this.setDescription}/><br/><br/>
                    <input type='text' placeholder='Amount' 
                    value={this.state.amount} onChange={this.setAmount}/><br/><br/>
                    <SingleDatePicker
                        date={this.state.createdAt} // momentPropTypes.momentObj or null
                        onDateChange={this.setDate} // PropTypes.func.isRequired
                        focused={this.state.calendarFocus} // PropTypes.bool
                        onFocusChange={this.focusChange} // PropTypes.func.isRequired
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    /><br/><br/>
                    <textarea type='text' placeholder='Note (Optional)' 
                    value={this.state.note} onChange={this.setNote}></textarea><br/><br/>
                    <button>Add Expense</button>
                </form>
                <br/>
                {this.state.errorFlag && <span>{this.state.error}</span>}
            </div>
        )
    }
}