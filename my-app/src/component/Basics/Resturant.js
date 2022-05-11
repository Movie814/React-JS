import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import MenCard from './MenCard';
import Nav from './Nav';



const uniqueList=[
  ...new Set (Menu.map((curElem)=>{
  return curElem.category;
  
})
),"ALL",
];
console.log(uniqueList);



function Resturant() {
    const[menuData,setMenuData]=useState(Menu);
    const [menuList,setMenuList]=useState(uniqueList);
    const filtterItem =(category)=>{
      if(category==='ALL'){
        setMenuData(Menu);
        return setMenuList ;
      }
      const updatedList=Menu.filter((curElem)=>{
        return curElem.category=== category;
      });
      setMenuData(updatedList);
    };
    
  return (
    <>
    <Nav filtterItem={filtterItem} menuList={menuList}/>
      <MenCard menuData={menuData}/>
      
    </>
  )
}

export default Resturant