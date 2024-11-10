import { createContext, useContext, useState } from "react";


const UtilContext = createContext();

export const UtilsContextProvider = ({children}) =>{
    const [isSidebar,setIsSidebar] = useState(false);
    const [mobileShow,setMobileShow] = useState(false);


    return <UtilContext.Provider value={{isSidebar,setIsSidebar,mobileShow,setMobileShow}}>
        {children}
    </UtilContext.Provider>
}

export const useUtils = ()=> {
    const utilsContext = useContext(UtilContext);
    if(!utilsContext) return null

    return utilsContext;
}