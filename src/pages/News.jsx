import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import logo1 from "../media/surgical-1200x630px-robots.jpg";
import logo2 from "../media/bcg-scaled.jpg";
import logo3 from "../media/8_Main_Types_of_Heart_Disease.jpg";
import logo4 from "../media/mental-healtyh2.avif";
import logo5 from "../media/Screenshot 2024-06-20 131823.png";
import logo6 from "../media/images.jfif";
import logo7 from "../media/telemedicine.jpg"
export default function News() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };


    const newsData = [
        {
         image: logo1,
          title: "AIIMS Introduces Robotic Surgery for Cancer Treatment",
          description: "All India Institute of Medical Sciences has recently introduced advanced robotic surgery techniques for cancer treatment, aiming to improve precision and time.",
          date: "June 18, 2024",
          source: "Times of India",
          link: "https://timesofindia.indiatimes.com"
        },
        {
            image: logo2,
          title: "India Launches Nationwide Tuberculosis Vaccination ",
          description: "The Indian government has launched a nationwide campaign to vaccinate children against tuberculosis, aiming to eradicate the disease by 2025.",
          date: "June 16, 2024",
          source: "The Hindu",
          link: "https://www.thehindu.com"
        },
        {
            image: logo3,
          title: "New AI Tool Predicts Risk of Heart Disease in Indians",
          description: "Researchers have developed an AI-based tool that can predict the risk of heart disease in the Indian population with high accuracy, enabling early intervention.",
          date: "June 14, 2024",
          source: "Hindustan Times",
          link: "https://www.hindustantimes.com"
        },
        {
            image: logo5,
          title: "Breakthrough in Diabetes Research by Indian Scientists",
          description: "Scientists in India have made a breakthrough in diabetes research, identifying new biomarkers that can help in early detection and management.",
          date: "June 12, 2024",
          source: "India Today",
          link: "https://www.indiatoday.in"
        },
        {
            image: logo4,
          title: "Government Approves New Policy for Mental Health",
          description: "The Indian government has approved a new health policy focusing on mental health, aiming to increase access to mental health services and reduce stigma.",
          date: "June 10, 2024",
          source: "The Indian Express",
          link: "https://indianexpress.com"
        },
        {
            image: logo6,
          title: "Study Finds High Levels of Microplastics in Indian Bottled Water",
          description: "A new study has found alarmingly high levels of microplastics in bottled water sold across India, raising concerns about health impacts.",
          date: "June 8, 2024",
          source: "NDTV",
          link: "https://www.ndtv.com"
        },
        {
            image: logo7,
          title: "Launch of Telemedicine Services in Rural Areas",
          description: "The Indian government has launched telemedicine services in rural areas, aiming to provide remote access to healthcare services and specialists.",
          date: "June 6, 2024",
          source: "Business Standard",
          link: "https://www.business-standard.com"
        }
      ];
  return (
    <div className="w-[100%] bg-[#f0f4f8]">
    <div className="w-3/4 m-auto bg-[#f0f4f8]">
      <div className="">
      <Slider {...settings}>
      {newsData.map((element, index) => {
  return (
    <div key={index} className='bg-white h-[450px] rounded-xl flex flex-col p-4 border-2 border-gray-400 shadow-lg hover:shadow-2xl transition-shadow duration-300'>
      <div className="w-full h-40 overflow-hidden rounded-t-xl mb-4">
        <img src={element.image} alt="News" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div className="flex flex-col items-start gap-2">
          <p className="text-xl font-semibold text-gray-800">{element.title}</p>
          <p className="text-sm text-gray-600">{element.description}</p>
          <p className="text-xs text-gray-500">{element.date}</p>
          <p className="text-xs text-gray-500">{element.source}</p>
        </div>
        <div className="mt-auto">
          <Link to={{ pathname: element.link }} target="_blank" className="text-blue-500 hover:underline">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
})}


        </Slider>
</div>
    </div>
    </div>
  )
}
