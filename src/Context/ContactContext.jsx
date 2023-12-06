import { createContext, useReducer } from "react";
import ContactReducer from "./ContactReducer";

const ContactContext = createContext()

export const ContextProvider = ({ children }) => {

    const initialstate ={
        contacts:[]
    }

    const [state , dispatch]=useReducer(ContactReducer,initialstate)




    return (
        <ContactContext.Provider value={{...state,dispatch}}>
            {children}
        </ContactContext.Provider>
    )
}



export default ContactContext