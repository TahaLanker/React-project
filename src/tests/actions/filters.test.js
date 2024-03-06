import moment from 'moment';
import {setStartDate, setEndDate, textFilter, sortByDate, sortByAmount} from './../../actions/filters';

test('Start Date Test', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
});

test('End Date Test', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
});

test('Default Text Filter Test', () => {
    const action = textFilter();
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: ''
    })
});

test('Text Filter Test', () => {
    const action = textFilter('Rent');
    expect(action).toEqual({
        type: 'TEXT_FILTER',
        text: 'Rent'
    })
});

test('Sort By Date Test', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('Sort By Amount Test', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});