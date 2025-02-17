import { createContext } from "react";
import potteryArtists from "../assets/assets";
export const AppContext = createContext()

const AppContextProvider = (props) => {



    const value ={
        potteryArtists
    }
    return (
          <AppContext.Provider value={value}>
            {props.children}
          </AppContext.Provider>
    )
}

export default AppContextProvider