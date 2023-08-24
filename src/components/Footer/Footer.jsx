import React,{useEffect} from 'react';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import {MdOutlineTravelExplore} from 'react-icons/md'
import './footer.css'
import video2 from '../Assets/video (2).mp4'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
// lets create a react hook to add a scroll animation....
useEffect(()=>(
  Aos.init({duration:2000})
),[])



    return ( 
        <section className="footer">
           <div className="videoDiv">
             <video src= {video2} loop autoPlay muted type='video/mp4'></video>
    </div>
            
         <div className="secContent container">
             <div className="contactDiv flex">
              <div  data-aos="fade-up"  className="text">
                <h5 className='small'>KEEP IN TOUCH</h5>
                <h2>Travel with us</h2>
              </div>

              
              <div className="inputDiv flex">
              <h6> <input  data-aos="fade-up"  type='text' placeholder='Enter Email Address'/></h6>
                <button  data-aos="fade-up"  className="btn1 flex" type='submit'>
                    SEND <FiSend className='icon5'/>
                </button>
              </div>

             </div>

             <div className="footerCard flex">
              <div className="footerIntro flex">
                <div className="logoDiv">
                  <a href='#' className='logo flex'>
                    <MdOutlineTravelExplore className='icon-4'/>
                    ChippersTravel.
                  </a>
                </div>

                <div data-aos="fade-up" className="footerParagraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Eligendi atque harum sunt expedita
                   voluptatibus odio delectus ipsum earum aspernatur eos.
                </div>
                <div data-aos="fade-up" className="footerSocials">
                   <AiOutlineTwitter className='icon-5'/>
                   <AiFillYoutube className='icon-5'/>
                   <AiFillInstagram className='icon-5'/>
                   <FaTripadvisor className='icon-5'/>
                </div>
              </div>

              <div className="footerLinks grid">
                {/*GROUP ONE*/}
               <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                <span className="groupTitle">
                  OUR AGENCY
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                 <h1> Services</h1>
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                  <h1>Insurance</h1>
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                  <h1>Agency</h1>
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                  <h1>Tourism</h1>
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                 <h1> Payment</h1>
                </li>
               </div>


               <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                {/*GROUP TWO*/}
                <span className="groupTitle">
                  PARTNERS
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                 <h1> Bookings</h1>
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                  <h1>Rent cars</h1>
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                  <h1>Hostelworld</h1>
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                  <h1>Trivigo</h1>
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                 <h1> TripAdvisor</h1>
                </li>
               </div>

                {/*GROUP THREE*/}
               <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                <span className="groupTitle">
                  LAST MINUTE
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                 <h1> London</h1>
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                  <h1>California</h1>
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                  <h1>Indonesia</h1>
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                  <h1>Europe</h1>
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon-6'/>
                 <h1> Oceania</h1>
                </li>
               </div>

              </div>

              <div className="footerDiv flex">
               <h3>BEST TRAVEL WEBSITE THEME</h3>
               <h3>COPYRIGHT RESERVED - GLADTECH 2023</h3>
              </div>
             </div>
         </div>


        </section>
     );
}
 
export default Footer ;