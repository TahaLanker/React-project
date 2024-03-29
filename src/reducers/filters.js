import moment from 'moment';

//Filter Reducer
const defaultFilterReducerState = {
    text: '',
    sortBy: 'date', //amount or date
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
};
const filtersReducer = (state = defaultFilterReducerState, action) => {
    switch (action.type){
        case 'TEXT_FILTER': 
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE': 
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT': 
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE': 
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE': 
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state;
    }
};

export default filtersReducer;
