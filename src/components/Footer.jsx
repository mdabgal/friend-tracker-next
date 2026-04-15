import Image from 'next/image';
import React from 'react';
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png"

      

const Footer = () => {
  return (
    <footer className="bg-[#285943] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        
       
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Keen<span className="font-light">Keeper</span>
        </h1>

       
        <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture
          the relationships that matter most.
        </p>

     
        <div className="space-y-2">
          <p className="text-sm text-gray-200">Social Links</p>

          <div className="flex justify-center gap-4">
            <div className=" text-black p-2 rounded-full cursor-pointer">
                <Image src={instagram} alt='' ></Image>
            </div>
            <div className=" text-black p-2 rounded-full cursor-pointer">
         <Image src={facebook} alt=''></Image>
            </div>
            <div className=" text-black p-2  rounded-full cursor-pointer">
              <Image src={twitter} alt=''></Image>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 text-xs text-gray-300">
          <p>© 2026 KeenKeeper. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
            <p className="cursor-pointer hover:underline">Terms of Service</p>
            <p className="cursor-pointer hover:underline">Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;