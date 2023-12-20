import './Footer.css'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { CiYoutube } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const quick_links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    }
]
const quick_links2 = [
    {
        path: '/galley',
        display: 'Gallery'
    },
    {
        path: '/login',
        display: 'Login'
    },
    {
        path: '/register',
        display: 'Register'
    }
]
export default function Footer(){

    const year = new Date().getFullYear()

    return(
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className='logo'>
                            <img src={logo} alt='' />
                            <p>Lorem sold is this is the now earcth has been gone alright then end</p>
                            <div className='social__links d-flex align-items-center gap-4'>
                                <span>
                                    <Link to='#'><CiYoutube /></Link>
                                </span>
                                <span>
                                    <Link to='#'><FaGithub /></Link>
                                </span>
                                <span>
                                    <Link to='#'><CiFacebook /></Link>
                                </span>
                                <span>
                                    <Link to='#'><FaInstagram /></Link>
                                </span>
                            </div>
                        </div>
                    </Col>
                    <Col lg='3'>
                        <h5 className='footer__link-title'>Discover</h5>
                        <ListGroup className='footer__quick-links'>
                            {
                                quick_links.map((item,index)=>(
                                    <ListGroupItem key={index} className='ps-0 border-0'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='3'>
                    <h5 className='footer__link-title'>Quick Links</h5>
                        <ListGroup className='footer__quick-links'>
                            {
                                quick_links2.map((item,index)=>(
                                    <ListGroupItem key={index} className='ps-0 border-0'>
                                        <Link to={item.path}>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg='3'>
                    <h5 className='footer__link-title'>Contact</h5>
                        <ListGroup className='footer__quick-links'>
                            <ListGroupItem className='ps-0 border-0 d-flex
                            align-items-center gap-3'>

                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <FiMapPin className='i' />
                                    </span>
                                    Address: 
                                </h6>
                                <p className='mb-0'>Colombo, Sri Lanka</p>

                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0 d-flex
                            align-items-center gap-3'>

                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <FaRegEnvelope />
                                    </span>
                                    Email: 
                                </h6>
                                <p className='mb-0'>sasmithajayasinghe1@gmail.com</p>

                            </ListGroupItem>
                            <ListGroupItem className='ps-0 border-0 d-flex
                            align-items-center gap-3'>

                                <h6 className='mb-0 d-flex align-items-center gap-2'>
                                    <span>
                                        <FaPhoneAlt />
                                    </span>
                                    Phone: 
                                </h6>
                                <p className='mb-0'>+94 761207102</p>

                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='12' className='text-center pt-5'>
                        <p className='copyright'>Copyright {year}, design and developed by Thisara 
                        Jayasinghe. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}