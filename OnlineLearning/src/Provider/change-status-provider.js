import React, {useState, useEffect, useContext} from 'react'

const ChangeStatusContext = React.createContext();

const ChangeStatusProvider = (props) =>{
    const [change, setChange] = useState({index: -1, status: false});

    return <ChangeStatusContext.Provider value={{change, setChange}}>
            {props.children}
        </ChangeStatusContext.Provider>
    
}

export {ChangeStatusProvider, ChangeStatusContext};