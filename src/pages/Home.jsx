import React from 'react'
import Contact from './Contact';
import Lottie from "lottie-react";
import gif from "../media/Animation - 1719476322158.json"
import giff from "../media/Animation - 1719504456561.json"
import { GoHeartFill } from "react-icons/go";
import News from './News';
import '../App.css';
import Fit from "./Fit"
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import logo from "../media/MEDIFIT.png"
export default function Home() {
  return (
    <div className="App ">
      <img src={logo} width="120px" className="absolute rounded-full ml-1 mt-1 "/>
    <header className="App-header">
    <div className="hero">
    <Lottie animationData={gif} loop={true} />
        <div className="hero-text mt-[3rem]">
          <h1 >Never Hesitate to Consult with Doctor</h1>
          <p>
         
"We offer comprehensive healthcare services including online medical consultations, doctor support, face-to-face video calls, and AI consulting 
services to ensure you receive the best care, anytime and anywhere"
          </p>
        
          <button className="book-now-btn mt-4 mb-4"><span>Book Now</span></button>
         
          <div className="features flex flex-col   ">
            <div className="feature">
              <span className="text-xl mb-3" role="img" aria-label="24/7 Online Support">🕒</span>
              <p>24/7 AI generated Services</p>
            </div>
            <div className="feature ">
              <span className="text-xl mb-3" role="img" aria-label="Millions Customers">👥</span>
              <p>Online face-to-face Consultation</p>
            </div>
            <div className="feature">
              <span className="text-xl mb-3" role="img" aria-label="96 Doctors Online">👨‍⚕️</span>
              <p className=''>Doctors Support</p>
            </div>
          </div>


        </div>
      </div>
     
    </header>

<div>
  <Fit/>
</div>



    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-orange-200">
          <Card title="Blood Test" text="Get accurate and quick blood tests done at your convenience." />
          <Card title="Lab Test" text="Comprehensive lab tests for a variety of health concerns." />
          <Card title="Emergency" text="24/7 online emergency services to address urgent medical needs." />
          <Card title="AI Consultation" text="Leverage AI for quick and accurate health consultations." />
        </div>

<div className='flex aidiv '>

<div className='relative'>
<h2 className='aihead '>Access AI-Driven Medical Consultations</h2>
<p className='aisubhead'>Get expert medical advice anytime, anywhere. Fast, reliable, and secure medical consultations at your fingertips</p>

<Link to="/Aibot">
<button className='aibtn pulse'>Chat with the AI Bot Now</button>
</Link>
</div >

<div className =' ' >
<Lottie animationData={giff} loop={true} width="25rem"/>
</div>

</div>

<div>
  <News/>
  </div>
<div>
  <Contact/>
</div>

<div className='ml-[58rem] '>
<p className='mt-[4rem] mb-[2rem] ml-[10rem] flex items-center'>
  Made with <GoHeartFill className="mr-[0.2rem] ml-[0.2rem]" /> by Ishita Malhotra
</p>

    </div>

  </div>
  )
}
