import { Col } from "reactstrap"
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import ServiceCard from "./Service-card"
import customizationImg from '../assets/images/customization.png'

const serviceData = [
    {
        imgUrl: weatherImg,
        title: 'Calculate Weather',
        desc: 'Lorem doe sit amet, colcusum desmun klomsak dir.',
    },
    {
        imgUrl: guideImg,
        title: 'Best Tour Guide',
        desc: 'Lorem doe sit amet, colcusum desmun klomsak dir.',
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Lorem doe sit amet, colcusum desmun klomsak dir.',
    },
]

export default function ServiceList(){
    return(
        <>
            {
                serviceData.map((item,index)=> <Col lg='3' key={index}>
                    <ServiceCard item={item}/>
                </Col>)
            }
        </>
    )
}