import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { MdExpandMore } from 'react-icons/md';

const Dropdowns = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [list1, setList] = useState(props.data);
    const [list2, setList2] = useState(props.data);
    const toggleHangle = () =>{
   setIsOpen(!isOpen)
//    console.log(isOpen)
     
    }
   
    // console.log("")
    const [selectIndex, isSelectedIndex] = useState(0);
    const [selectItem, isSelectedItem] = useState(props.placeholder);
    const closeSelect = (index, name) => {
        isSelectedIndex(index)

         console.log(index)
        setIsOpen(false)
        isSelectedItem(name)
    }
    const filterHandle = (e) => {
        const keyword = e.target.value.toLowerCase();
        const list = list2.filter((item) => item.toLowerCase().includes(keyword))
        const list3 = list.filter((item, i) => list.indexOf(item) === i)
        setList(list3)
        // Check if list is defined and is an array
     
    };
    
return (
    <>
    {/* <div className={`${open === true ? "d-block" : "d-none"} position-absolute dropdowns-list`}>
        <ul>
            {category.map((item, i) => <li className='p-2' key={i}>{item}</li>)}
        </ul>
    </div> */}
    <Button onClick={toggleHangle} className="category-btn d-flex align-items-center gap-2" >
                                <span>{selectItem.length > 14 ? selectItem.substr(0, 14) + "..." : selectItem}</span> 
                                <MdExpandMore />
                            </Button>
    <div className={`${isOpen === true ? "d-block" : "d-none"} position-absolute dropdowns-list`}>
        <div className="form-group p-3">
            <input type="text" className="form-control search-container" onChange={filterHandle} placeholder='Search here' />
        </div>
        <ul>
        <li key={0} onClick={() => closeSelect(0, props.placeholder)}   className={`${ 0 === selectIndex ? "active" : "" } p-2`} >{props.placeholder}</li>
            {list1.map((item, i) => <li key={i+1} onClick={() => closeSelect(i+1, item)}   className={`${ i+1 === selectIndex ? "active" : "" } p-2`} >{item}</li>)}
        </ul>
    </div>
    </>
)
}


export default Dropdowns;
