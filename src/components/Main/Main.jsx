import React,{useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../Assets/img (1).jpg'
import img2 from '../Assets/img (2).jpg'
import img3 from '../Assets/img (3).jpg'
import img4 from '../Assets/img (4).jpg'
import img5 from '../Assets/img (5).jpg'
import img6 from '../Assets/img (6).jpg'
import img7 from '../Assets/img (7).jpg'
import img8 from '../Assets/img (8).jpg'
import img9 from '../Assets/img (9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
{
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'NewZealand',
    fees: '$700',
    description: 'The option of romance,Bora Bora is one of the best travel destinations in the world. this place is known for its luxurious stays and adeventurious activities.'
},

{
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CUTURAL RELAX',
    fees: '$600',
    description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu,the so-called Lost City of Incas. This is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
},

{
    id:3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australian',
    grade: 'CUTURAL RELAX',
    fees: '$700',
    description: 'One of the most remarkable Autralian natural gifts is the the Great Barrier Reef. The hallmark of this place is "lavish" and "beauty". Always interesting to be in this place.'
},

{
    id:4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CUTURAL RELAX',
    fees: '$800',
    description: 'According to the world Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadosia. This place is known for its luxurius stays and adventurous activities.'
},

{
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajusto',
    location: 'Mexico',
    grade: 'CUTURAL RELAX',
    fees: '$1100',
    description: 'A city in central Mexico, guanajuato is known for its history of silver mining and colonial architecture. The houses in he city are very attractively painted with the most bright colors available. Always welcome.'
},

{
    id:6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CUTURAL RELAX',
    fees: '$8400',
    description: 'The vibrant heus of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!.'
},

{
    id:7,
    imgSrc: img7,
    destTitle: 'Angokor Wat',
    location: 'Cambodia',
    grade: 'CUTURAL RELAX',
    fees: '$790',
    description: 'Angokor wat represents the entire range of khmer art from the 9th to the 15th century. This is cosidered the heart and soul of cambodia. This place is known for its luxurous activities.'
},

{
    id:8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CUTURAL RELAX',
    fees: '$900',
    description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz,the mnoment is breathtakingly beautiful.This place is known for its luxurious stays and adventurous actinities.'
},

{
    id:9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CUTURAL RELAX',
    fees: '$500',
    description: 'Bali is an Indonasian Island and one of the holiday destination in the Indonasian archipelago. Bali is known for its volcanic mountains, history, art and culture, food, temples, and beautiful sandy beaches.'
},
]

const Main = () => {
// lets create a react hook to add a scroll animation....
useEffect(()=>(
    Aos.init({duration:2000})
),[])

    
    return ( 
        <section className='main container section'>
         <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
                MOST VISITED DESTINATION
            </h3>
         </div>

       <div className="secContent grid">
        {
            Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=>{
              return(
                <div key={id} data-aos="fade-up" className="singleDestination">
                   <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle} />
                   </div>

                  <div className="cardInfo">
                    <h4 className="destTitle">{destTitle}</h4>
                    <span className="continent flex">
                     <HiOutlineLocationMarker className='icon3'/>
                     <span className="name">{location}</span>
                    </span>

                    <div className="fees flex">
                     <div className="grade">
                        <span>{grade}<small>+1</small></span>
                     </div>
                     <div className="price">
                        <h5>{fees}</h5>
                     </div>
                    </div>

                    <div className="desc">
                        <p>{description}</p>
                    </div>

                    <button className='btn flex'>
                        DETAILS <HiOutlineClipboardCheck className='icon'/>
                    </button>
                  </div>
                 
                </div>
                
              )
            })
        }
       </div>

        </section>
     );
}
 
export default Main;