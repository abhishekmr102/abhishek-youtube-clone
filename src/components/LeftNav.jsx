import React,{useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


import LeftNavMenuItem from './LeftNavMenuItem';
import { Categories } from '../utils/constants';
import { Context } from '../context/contextApi';

const LeftNav = () => {

const {selectCategories, setSelectCategories,mobileMenu} = useContext(Context);
const navigate = useNavigate();




// Action click
const clickHanderAction = (name, type)=>{
    switch (type){
      case "category":
        return setSelectCategories(name);

        case "home":
          return setSelectCategories(name);

          case "menu":
            return false;

            default:
              break;
    }
};


  return (
    <div className={`bg-black  w-[240px] overflow-y-auto h-full py-4 absolute md:relative z-10 translate-x-[-240px]
     md:translate-x-0  transition-all ${mobileMenu ? "translate-x-1": "" }`}>
      <div className='flex px-5 flex-col'>
        {Categories.map((items)=>{
          return(
            <React.Fragment key={items.name}>
              <LeftNavMenuItem 
                text = {items.type === "home" ? "Home" : items.name}
                icon = {items.icon}
                action = {()=>{
                  clickHanderAction(items.name , items.type);
                  navigate("/");
                }}
                className={`${selectCategories === items.name ?  "bg-white/[0.15]" : ""}`}
              />

             {items.divider && (
                  <hr className='my-5 border-white/[0.2]'/>
                )}
            </React.Fragment>
          )
        })}
       
      </div>
      <div className='text-green-500 font-semibold text-sm px-5 '>
          Develop By : ABHISHEK
      </div>
    </div>
  )
}

export default LeftNav
