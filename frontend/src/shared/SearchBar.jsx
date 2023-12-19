import './SearchBar.css'
import {Col ,Form, FormGroup} from 'reactstrap'
import { LuMapPin } from "react-icons/lu";
import { RiMapPinTimeLine } from "react-icons/ri";
import { RiGroupLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";


export default function SearchBar(){
    return(
        <Col lg='12'>
            <div className='search__bar'>
                <Form className='d-flex align-items-ceter gap-4'>
                    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span><LuMapPin /></span>
                        <div>
                            <h6>Location</h6>
                            <input type='text' placeholder='Where are you going?' />
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                        <span><RiMapPinTimeLine /></span>
                        <div>
                            <h6>Distance</h6>
                            <input type='number' placeholder='Distance k/m' />
                        </div>
                    </FormGroup>
                    <FormGroup className='d-flex gap-3 form__group form__group-last'>
                        <span><RiGroupLine /></span>
                        <div>
                            <h6>Max People</h6>
                            <input type='number' placeholder='0' />
                        </div>
                    </FormGroup>
                    <span className='search__icon' type='submit'>
                        <CiSearch />
                    </span>
                </Form>
            </div>
        </Col>
    )
}