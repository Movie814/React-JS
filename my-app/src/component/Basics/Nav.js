import React from 'react'

const Nav = ({filtterItem,menuList}) => {
  return (
    <>
         <nav className='navbar'>
        <div className='btn-group'>
        {
            menuList.map((curElem)=>{
                return (
                    <button className='btn-group__item'
                     onClick={()=>filtterItem(curElem)}>
                     {curElem}
                    </button> 
                )
            })
        }
           
        </div>
    </nav>
    </>
  )
}

export default Nav