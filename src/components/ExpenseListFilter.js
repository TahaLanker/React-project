import React from 'react';
import { connect } from 'react-redux';
import { textFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {DateRangePicker} from 'react-dates';

class ExpenseListFilter extends React.Component{
    state = {
        calenderFocus: null
    };
    onDatesChange = ({startDate, endDate}) =>{
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (calenderFocus) => {
      this.setState(()=>({calenderFocus}))
    };
    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(textFilter(e.target.value))
                }}/>
                <select onChange={(e) => {
                    let selectVal = e.target.value;
                    console.log('selectVal--', selectVal)
                    this.props.dispatch(selectVal === 'amount' ? sortByAmount() : sortByDate())
                }}>
                    <option value=''>Select</option>
                    <option value='amount'>Amount</option>
                    <option value='date'>Date</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    //onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                    focusedInput={this.state.calenderFocus} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
                    numberOfMonts={1}
                    //isOutsideRange={false}
                    showClearDates={true}
                />
            </div>
        );
    }
}

/*const ExpenseListFilter = (props) => {
    console.log('props.filters---',props.filters)
    return (
        <div>
            <input type="text" value={props.filters.text} onChange={(e) => {
                props.dispatch(textFilter(e.target.value))
            }}/>
            <select onChange={(e) => {
                let selectVal = e.target.value;
                console.log('selectVal--', selectVal)
                props.dispatch(selectVal === 'amount' ? sortByAmount() : sortByDate())
            }}>
                <option value=''>Select</option>
                <option value='amount'>Amount</option>
                <option value='date'>Date</option>
            </select>
        </div>
    );
};*/

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
};

export default connect(mapStateToProps)(ExpenseListFilter);
