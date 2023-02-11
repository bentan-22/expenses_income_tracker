const AppReducer = (state, action) => {
    switch(action.type) { /* switch and case is similar to if and else */
        case 'DELETE_EXPENSE_TRANSACTION':
            return {
                ...state,
                expenseTransactions: state.expenseTransactions.filter(expenseTransaction => expenseTransaction.expenseId !== action.payload)
                /* use filter method to generate a new array expenseTransactions without the unwanted expenseTransaction identified by its unique id */
            }
        
        case 'ADD_EXPENSE_TRANSACTION':
            return {
                ...state,
                expenseTransactions: [action.payload, ...state.expenseTransactions]
                /* adds the incoming expenseTransaction to the array expenseTransactions */
            }

        case 'DELETE_INCOME_TRANSACTION':
            return {
                ...state,
                incomeTransactions: state.incomeTransactions.filter(incomeTransaction => incomeTransaction.incomeId !== action.payload)
            }
    
        case 'ADD_INCOME_TRANSACTION':
            return {
                ...state,
                incomeTransactions: [action.payload, ...state.incomeTransactions]
            }

        case 'CONVERT_CURRENCY':
            return {
                ...state,
                expenseTransactions: state.expenseTransactions.map((expenseTransaction) => {
                    expenseTransaction.expenseAmount = expenseTransaction.expenseAmount * action.payload;
                    /* multiply the expenseAmount in each expenseTransaction by the exchange rate (action.payload) */
                    return expenseTransaction;
                }),
                incomeTransactions: state.incomeTransactions.map((incomeTransaction) => {
                    incomeTransaction.incomeAmount = incomeTransaction.incomeAmount * action.payload;
                    return incomeTransaction;
                })
            }

        case 'CHANGE_CURRENCY_SIGN':
            return {
                ...state,
                sign: action.payload
            }
        
        default: 
            return state;
    }
};

export default AppReducer;