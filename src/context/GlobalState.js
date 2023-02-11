import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer';

// Create initialState
const initialState = {
    expenseTransactions: [],
    incomeTransactions: [],
    sign: 'SGD',
}

// Create GlobalContext using initialState
export const GlobalContext = createContext(initialState);

// Create GlobalProvider to wrap child components
export const GlobalProvider = ( { children } ) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    // dispatch is a function that passes an action to AppReducer
    // the action passed to AppReducer is an object with type and payload

    const deleteExpenseTransaction = (expenseId) => { /* I use the expenseId because it is uniquely generated */
        dispatch({
            type: 'DELETE_EXPENSE_TRANSACTION',
            payload: expenseId,
        })
    }

    const addExpenseTransaction = (expenseTransaction) => {
        dispatch({
            type: 'ADD_EXPENSE_TRANSACTION',
            payload: expenseTransaction,
        })
    }

    const deleteIncomeTransaction = (incomeId) => {
        dispatch({
            type: 'DELETE_INCOME_TRANSACTION',
            payload: incomeId,
        })
    }

    const addIncomeTransaction = (incomeTransaction) => {
        dispatch({
            type: 'ADD_INCOME_TRANSACTION',
            payload: incomeTransaction,
        })
    }

    const convertCurrency = (currency) => {
        dispatch({
            type: 'CONVERT_CURRENCY',
            payload: currency,
        })
    }

    const setSign = (sign) => {
        dispatch({
            type: 'CHANGE_CURRENCY_SIGN',
            payload: sign,
        })
    }

    return (<GlobalContext.Provider
        value={{
            expenseTransactions: state.expenseTransactions,
            incomeTransactions: state.incomeTransactions,
            sign: state.sign,
            deleteExpenseTransaction,
            addExpenseTransaction,
            deleteIncomeTransaction,
            addIncomeTransaction,
            convertCurrency,
            setSign,
        }}>
        {children}
    </GlobalContext.Provider>
    );
}