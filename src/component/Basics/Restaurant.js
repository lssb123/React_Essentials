import React, { useState } from 'react'
import "./style.css"
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";
import Navbar from "./Navbar.js";

const uniqueList = [...new Set(Menu.map((curElem)=> {
  return curElem.category;
})
),"All Items",];

// ... is a spread operator ans it is used to convert set into list
// console.log(uniqueList);
const Restaurant = () => {
  // Hooks are used to get the data from the Api or any data storage things. and to manage the data we use hooks
  const [menuData , setMenuData] = useState(Menu);
  const [menuList,setMenuList] = useState(uniqueList);
  // console.log(menuData);
    const filterItem = (category) => {
      if(category === "All Items"){
        setMenuData(Menu);
        return;
      }
      const updatedList = Menu.filter((curElem) => {
        return curElem.category === category;
      })
      setMenuData(updatedList);
    }
  return (
    <>
      <Navbar filterItem = {filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData} />
    </>
  )
}

export default Restaurant;
