import React from 'react';
import { Link } from 'react-router-dom';
import gymImage from '../media/ai-generated-interior-view-of-a-gym-with-equipment-gym-background-generative-ai-photo.jpg'; // Replace with the path to your gym image

const Fit = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex bg-gradient-to-br from-blue-100 to-pink-100 rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2">
          <img src={gymImage} alt="Gym" className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-[4rem] font-bold text-black italic mb-4">Welcome to Our Gym</h1>
          <p className="text-gray-500 mb-6">"The only bad workout is the one that didn't happen."</p>
          <div className="flex space-x-8">
            <Link to="/Fitness">
              <button className="bg-pink-400 text-white py-2 px-4 ml-[9rem] rounded-lg hover:bg-blue-600 transition duration-300">
                Virtual Gym
              </button>
            </Link>
            <Link to="/Bmi">
              <button className="bg-pink-400 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
                BMI Calculator
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fit;
