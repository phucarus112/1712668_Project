import React, { useState, useEffect, useContext } from 'react'
import { vietnam, english } from '../Global/strings'

const LanguageContext = React.createContext();

const LanguageProvider = (props) => {

    const [lan, setLan] = useState(JSON.parse(vietnam));

    return <LanguageContext.Provider value={{ lan, setLan }}>
        {props.children}
    </LanguageContext.Provider>
}

export { LanguageProvider, LanguageContext };