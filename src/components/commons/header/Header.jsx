import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Dropdown, Nav, Row } from 'react-bootstrap';
import { GoPerson, GoSearch } from 'react-icons/go';
import { MdExpandMore } from 'react-icons/md';
import Dropdowns from '../dropdowns/Dropdowns';
import axios from 'axios';
import { IoCartOutline, IoLocationOutline } from 'react-icons/io5';
import { GrCycle } from 'react-icons/gr';
import { FaRegHeart } from 'react-icons/fa';
import AccDropdowns from '../dropdowns/AccDropdowns';
import logo from  './../../../assets/logo.svg'
import Navigation from './../dropdowns/Navigation'
const Header = () => {
     const countryApiUrl = "https://countriesnow.space/api/v0.1/countries/"
    const [categories, setCategories] = useState([ "Milk & Dairies", "Wines & Alchohol", "Clothing & Beauty", "Pet Foods & Toy", "Fast Food", "Baking material", "Vegetables", "Fresh Seafood", "Noodles & Rice", "Ice Cream"]);
    // const locations = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
    const countryList = [];
    const [isOpen, setIsOpen] = useState(false)

    const getCountry = async (url) => {
        try{
            await axios.get(url).then((res) => {
                if(res !== null){
                    // console.log(res.data.data)
                    // countryList.push(res.data.data.country);
                    // console.log(res.data.data.country)
                    res.data.data.map((item, i) =>{
                        countryList.push(item.country)
                        // console.log(countryList)
                    } ) 
                }
            })
        }catch(err){
            console.log(err.message)
        }

    }
    useEffect(() => {
        getCountry(countryApiUrl)
    }, [])
      const headerRef = useRef();
      useEffect(() => {
        window.addEventListener("scroll", () => {
          let position = window.pageYOffset;
          // console.log(position)
          if(position > 100){
            headerRef.current.classList.add("nav-fixed");
          }else {
              headerRef.current.classList.remove("nav-fixed");
          }
        })
      }, [])
    console.log(countryList)
    return (
     <header className='pt-3' ref={headerRef}>
        <Container className='pb-3'>
            <Row className='align-items-center'>
                <Col xs={2}>
                <img src={logo} alt="" />
                </Col>
                <Col xl={5}>
                    <div className='form-control d-flex align-items-center gap-2 border-green position-relative'>
                            
                       
                            <Dropdowns data={categories} placeholder={"All Categories"}  />
                            <div className='d-flex align-items-center gap-2 w-100 search-container'>
                                <input type="text" className="form-control border-0 " placeholder='Search for Items' />
                                <GoSearch />
                            </div>
                    </div>
                </Col>
                <Col xl={5}>
                <div className='position-relative d-flex align-items-center justify-content-between'>
                 <span className='d-flex align-items-center  location'>
                 <IoLocationOutline />
                         <Dropdowns data={countryList} placeholder={"Your Locations"} className="border-0" /> 
                    </span>  
                    <ul className='list header-tools'>
                        <li className='list-items'>

                        <GrCycle /> <span className='badge'>1</span> <span>Compare</span>
                        </li>
                        <li className='list-items'>
                        <FaRegHeart /> <span className='badge'>1</span> <span>Wishlist</span>
                        </li>
                        <li className='list-items'>
                        <IoCartOutline /> <span className='badge'>1</span> <span>Cart</span>
                        </li>
                        <li className='list-items' >
                            <span onClick={() => setIsOpen(!isOpen)}>

                        <GoPerson />  <span>Account</span>
                            </span>
                        {
                            isOpen !== false && 
                        <AccDropdowns ></AccDropdowns>
                        }
                        </li>
                    </ul> 
                </div>
                </Col>
            </Row>
        </Container>
        <Navigation></Navigation>
     </header>
    );
}

export default Header;
