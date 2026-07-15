import { createContext, useState } from "react";

export const MyStore = createContext();//this context


export const ContextProvider = ({children})=>{
    const [centralData, setCentralData] = useState("this is context data");
    return <MyStore.Provider value={centralData} >{children}</MyStore.Provider>
}