export const reducer = ( state, action ) => {

    if ( action.type == 'EMPTY' ) {
        return {
            ...state,
            error: true,
            message: 'Please enter a value',
            success: false
        }
    } else if ( action.type == 'RESET' ) {
        return {
            ...state,
            error: false,
            success: false,
            message: ''
        }
    } else if ( action.type == 'ADD_DATA' ) {
        return {
            ...state,
            success: true,
            error: false,
            message: 'Value Added',
            data: [...state.data, action.payload]
        }
    } else if ( action.type == 'DELETE_DATA' ) {
        return {
            ...state,
            success: true,
            message: 'VALUE DELETED',
            data: state.data.filter( ( item, index ) => {
                return item.id !== action.payload
            } )
        }
    }

}