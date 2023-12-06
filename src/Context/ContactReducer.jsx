const ContactReducer = (state, action) => {
    switch (action.type) {


        case "DELETE":
            return {
                ...state,
                contacts: state.contacts.filter((item) => item.id !== action.payload)
            }

            case"SAVE":
            return{
                ...state,
                contacts:[action.payload,...state.contacts]
            }


        default:
            return state
    }
}
export default ContactReducer