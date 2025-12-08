import Logo from "@/assets/Logo.jpg";
import instagram from "@/assets/Instagram.png";
import telegram from "@/assets/Telegram.webp";
import whatsApp from "@/assets/WhatsApp.png";
import facebook from "@/assets/facebook.png";

export const Footer = () => {
  return (
    <>
      <div className="flex justify-center ml-3 mr-1 mb-5 mt-4 ">
        <div className="w-full h-110 bg-gray-600 rounded-3xl grid grid-cols-3 pt-15 items-center justify-items-center ">
          <div>
            <img src={Logo} className="w-70 h-60 rounded-4xl" />
          </div>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-white font-bold text-lg mb-2">Info</h4>
            <a
              href="/products"
              className="inline-block text-gray-300 font-medium hover:text-white w-fit "
            >
              Pricing
            </a>
            <a href="/aboutus" className="text-gray-300 font-medium w-fit">
              About
            </a>
            <a href="/aboutus" className="text-gray-300 font-medium w-fit">
              Contacts
            </a>
          </div>
          <div className="flex flex-col gap-2 ">
            <h4 className="text-white font-bold text-lg mb-2">Languages</h4>
            <span className="hover:cursor-pointer hover:text-white text-gray-300 font-medium w-fit">
              English
            </span>
            <span className="hover:cursor-pointer hover:text-white text-gray-300 font-medium w-fit">
              Farsi
            </span>
            <span className="hover:cursor-pointer hover:text-white text-gray-300 font-medium w-fit">
              Espanish
            </span>
          </div>
          <div className="col-span-3 justify-self-end flex gap-2 mr-20">
            <img
              className="hover:cursor-pointer w-10 h-10 p-0.5"
              src={instagram}
              alt="Instagram"
            />
            <img
              className="hover:cursor-pointer w-10 h-10 p-0.5"
              src={telegram}
              alt="Telegram"
            />
            <img
              className="hover:cursor-pointer w-10 h-10 "
              src={facebook}
              alt="FaceBook"
            />
            <img
              className="hover:cursor-pointer w-10 h-10"
              src={whatsApp}
              alt="WhatsApp"
            />
          </div>
          <p className="w-full h-6 col-span-3 self-end flex justify-center bg-gray-500 rounded-b-[27px] items-center text-sm ">
            2025-Copy Right
          </p>
        </div>
      </div>
    </>
  );
};
