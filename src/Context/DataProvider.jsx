
import { createContext, useState } from 'react';

export const IcardContext = createContext(null);

const ContextProvider = ({children}) => {
    
    const [ idcardtemplate, setIdcardtemplate ] = useState('template1');
    
    const [ obj, setObj ] = useState('');
    
    const [ icardimg, setIcardimg ] = useState('');
    const [ icardlogo, setIcardlogo ] = useState('');
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const [userLoggedInEmail, setUserLoggedInEmail] = useState("");


    const [schoolData, setSchoolData] = useState('');





    
    return (
        <IcardContext.Provider value={{ idcardtemplate, setIdcardtemplate,obj, setObj,icardimg, setIcardimg,isUserLoggedIn, setIsUserLoggedIn ,schoolData, setSchoolData,icardlogo, setIcardlogo,userLoggedInEmail, setUserLoggedInEmail}}>
            {children}
        </IcardContext.Provider>
    )
}

export default ContextProvider;



















