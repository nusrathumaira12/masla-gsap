import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="">
   <div className="flex  space-x-2  gap-10 p-8 mx-auto justify-center">
     
      <div className="flex lg:flex-col md:flex-row gap-2 items-star space-y-3">
       
        <div className="flex  gap-4">
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Accessibility</a>
          <a href="#" className="hover:underline">Code of Ethics</a>
        
        </div>

       <div className="flex gap-3">
         <h2 className="  mt-2">2022</h2>
        <h2 className="mt-2">Masla Emphathy Lab</h2>
       </div>
        <div className="flex justify-start gap-4 text-lg">
           <a href="#" className="transform duration-300 transition hover:-translate-y-1">
            <FaInstagram />
          </a>
          <a href="#" className="transform duration-300 transition hover:-translate-y-1">
            <FaLinkedin />
          </a>
          <a href="#" className="transform duration-300 transition hover:-translate-y-1">
            <FaFacebook />
          </a>
        </div>
      </div>

   
    <div className="flex md:flex-row  md:text-start justify-start space-x-10">  <div className="flex flex-col items-center text-start max-w-md">
      
        <p className="text-gray-700">
         <span className="font-bold">Masla acknowledges with deep gratitude that we were <br /> founded on the unceded land of Tiohtià:ke, colonially known as Montreal.</span> The Kanien’kehá:ka Nation is recognized as the custodians of these lands and waters, and is honorably bestowed with the title of the Keepers of the Eastern Door. We humbly respect the past, present, and future relationships, and the continued connections with the people Indigenous to this land
        </p>
      </div>

      {/* 3rd Div */}
      <div className="flex  items-center text-start max-w-md">
       
        <p className="text-gray-700">
          We’re now a fully remote team, and while land acknowledgments allow us to engage in ongoing reconciliation by reflecting on a singular physical space and our relationships to such space, much of our work now takes place virtually. To continue to put reconciliation at the center of our work, we encourage our team, clients, and partners to take time to learn about the lands they are currently on and to reflect on their relationships with these lands.
        </p>
      </div></div>
   </div>
      <img src="https://maslaempathylab.com/wp-content/uploads/2023/02/footer.png" 
      alt=""
      className="w-full flex-col h-[80vh]" />
    </footer>
  );
};

export default Footer;
