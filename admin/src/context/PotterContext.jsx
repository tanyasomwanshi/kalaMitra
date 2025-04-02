import { createContext } from "react";

export const PotterContext = createContext()
const PotterContextProvider = (props) => {
    const value ={


    }

    return(
        <PotterContext.Provider value={value}>
            {props.children}
        </PotterContext.Provider>
    )
}
export default PotterContextProvider