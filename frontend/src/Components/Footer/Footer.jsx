import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-12 md:gap-20 mt-10 border-t-2 pt-10'>
        <div className="flex items-center gap-5 md:gap-8">
            <img src={footer_logo} alt="Shopper Logo" className="w-10 md:w-16" />
            <p className="text-3xl md:text-6xl font-bold text-gray-700">Maulik Kinmel</p>
        </div>
        <ul className="flex list-none gap-5 md:gap-12 text-gray-800 text-base md:text-xl">
            <li className="cursor-pointer">Company</li>
            <li className="cursor-pointer">Products</li>
            <li className="cursor-pointer">Offices</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
        </ul>
        <div className="flex gap-5">
            <div className="p-2 bg-gray-100 border border-gray-300">
                <img src={instagram_icon} alt="Instagram" className="w-6 md:w-8" />
            </div>
            <div className="p-2 bg-gray-100 border border-gray-300">
                <img src={pintester_icon} alt="Pinterest" className="w-6 md:w-8" />
            </div>
            <div className="p-2 bg-gray-100 border border-gray-300">
                <img src={whatsapp_icon} alt="WhatsApp" className="w-6 md:w-8" />
            </div>
        </div>
        <div className="flex flex-col items-center gap-5 w-full mb-8 text-gray-800 text-sm md:text-lg">
            <hr className="w-4/5 border-none h-1 bg-gray-400 rounded-lg" />
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer
