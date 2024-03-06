//set text filter
export const textFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text
});

//sort
export const sortByDate = () => ({
type: 'SORT_BY_DATE'
});

export const sortByAmount = () => ({
type: 'SORT_BY_AMOUNT'
});

//set start and end date
export const setStartDate = ( startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
});

export const setEndDate = ( endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});