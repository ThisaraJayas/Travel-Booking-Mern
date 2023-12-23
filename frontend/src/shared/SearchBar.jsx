import './SearchBar.css'
import { useRef } from 'react';
import {Col ,Form, FormGroup} from 'reactstrap'
import { LuMapPin } from "react-icons/lu";
import { RiMapPinTimeLine } from "react-icons/ri";
import { RiGroupLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { BASE_URL } from '../utils/config';
import { useNavigate } from 'react-router-dom';


export default function SearchBar(){
    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)
    const navigate = useNavigate()

    //function
    const searchHandler = async()=>{
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value

        if(location=='' || distance=='' || maxGroupSize==''){
            return alert('All fields are required')
        }

        //database
        const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=
        ${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`)

        if(!res.ok) alert('Something went wrong')

        const result = await res.json()

        navigate(`/tours/search?city=${location}&distance=${distance}&maxGroupSize=${maxGroupSize}`,
         {state: result.data})

    }
    return(
        <Col lg='12'>
            <div className='search__bar'>
                <Form className='d-flex align-items-ceter gap-4'>
                    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span><LuMapPin /></span>
                        <div>
                            <h6>Location</h6>
                            <input type='text' placeholder='Where are you going?' 
                            ref={locationRef}/>
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span><RiMapPinTimeLine /></span>
                        <div>
                            <h6>Distance</h6>
                            <input type='number' placeholder='Distance k/m'
                            ref={distanceRef} />
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form__group form__group-last'>
                        <span><RiGroupLine /></span>
                        <div>
                            <h6>Max People</h6>
                            <input type='number' placeholder='0'
                            ref={maxGroupSizeRef} />
                        </div>
                    </FormGroup>
                    <span className='search__icon' type='submit' onClick={searchHandler}>
                        <CiSearch />
                    </span>
                </Form>
            </div>
        </Col>
    )
}