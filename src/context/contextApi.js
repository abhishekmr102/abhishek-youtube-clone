import React,{createContext,useEffect,useState} from 'react';
import { FetchDataFromApi } from '../utils/api';

export const Context = createContext();

export  const AppContext = (props) => {

const [loading, setLoading] = useState(false);
const [searchResults, setSearchResults] = useState(false);
const [selectCategories, setSelectCategories] = useState("New");
const [mobileMenu, setMobileMenu] = useState(false);



useEffect(()=>{
    fetchSelectCategoriesData(selectCategories);
},[selectCategories]);


const fetchSelectCategoriesData = (query)=>{
    setLoading(true);
    FetchDataFromApi(`search/?q=${query}`).then((contents)=>{
        console.log(contents);
        setSearchResults(contents);
        setLoading(false);
    })
}




  return (
    <Context.Provider value= {{
        loading,
        setLoading,
        searchResults,
        setSelectCategories,
        selectCategories,
        mobileMenu,
        setMobileMenu
    }}>
     {props.children}
    </Context.Provider>
  )
}

 