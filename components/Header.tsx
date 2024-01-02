import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoDark from "../public/images/logoDark.png";
import placeholder from "../public/images/placeholder.jpg";
import { useSession, signIn, signOut } from "next-auth/react"

const Header = () => {
  const {data:session} = useSession();

  return (
    <div className="w-full h-20 border-b-[1px] border-b-black font-titleFont sticky top-0 bg-white z-50 px-4">
      <div className="max-w-7xl h-full mx-auto flex justify-between items-center">
        <Link href="/">
          <div>
            <Image width={80} height={80} src={logoDark} alt="logoDark" />
          </div>
        </Link>
       <div>
  <ul className="hidden lg:inline-flex gap-8 uppercase text-sm font-semibold">
    <li className="headerLi">
      <Link href="/">
        Home
      </Link>
    </li>
    <li className="headerLi">
      <Link href="/posts">
        Posts
      </Link>
    </li>
    <li className="headerLi">
      <Link href="/pages">
        Pages
      </Link>
    </li>
    <li className="headerLi">
      <Link href="raghadnakshou-portfolio.online">
        Portfolio
      </Link>
    </li>
  </ul>
</div>

        <div className="flex items-center gap-8 text-lg">
          <div className="flex items-center gap-3">
             {session
                ?
            <img
              className="w-9 h-8 rounded-full"
              alt="logo"
              src={session?.user!.image!}
            /> : 
        <Image   className="w-9 h-7 rounded-full" src={placeholder} alt="placeholder" />
             }

            <p className="text-sm font-medium">
              {session ?  session?.user!.name : "Hello Stranger!"}
              </p>
          </div>

          {
            session ? 
          <button onClick={()=> signOut()} className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign Out
          </button>
           : 
           
          <button onClick={()=> signIn()} className="uppercase text-sm border-[1px] border-primaryColor hover:border-secondaryColor px-4 py-1 font-semibold hover:text-white rounded-md hover:bg-secondaryColor transition-all duration-300 active:bg-yellow-600">
            Sign In
          </button>
          }

        </div>
      </div>
    </div>
  );
};

export default Header;
