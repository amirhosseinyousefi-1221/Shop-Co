import { NavLink } from "./NavLink";
import { SearchBar } from "./SearchBar";
import { UserRound } from "lucide-react";
export const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-start">
        <div className=" w-5/12 h-18 flex gap-6 ml-7 items-center">
          <NavLink title="Home" ref="/" />
          <NavLink title="Products" ref="/products" />
          <NavLink title="Cart" ref="/cart" />
          <NavLink title=" About Us" ref="/aboutus" />
        </div>

        <SearchBar />
        <div className="flex gap-2 ml-30 mr-5 ">
          <a className="text-white bg-black rounded-3xl py-3 px-8" href="/cart">
            Cart
          </a>
          <a
            className=" flex justify-center items-center w-12 h-12 rounded-full bg-black "
            href="/auth"
          >
            <UserRound size={28} color="white" strokeWidth={1} />
          </a>
        </div>
      </div>
      <div className="border-b border-[#D7D7D7] mb-5" />
    </>
  );
};
