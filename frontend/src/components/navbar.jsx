import React, { useState } from "react";
import { Link } from "react-router";
import { HiMiniBars3CenterLeft, HiOutlineShoppingCart } from "react-icons/hi2";
import { IoSearchCircleSharp } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import avatarImg from "../assets/avatar.png";

const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/orders" },
    { name: "Cart", href: "/cart" },
    { name: "Check out", href: "/checkout" },
];

const navbar = () => {
    const currentUser = false;
    const [isDropdown, setIsDropdown] = useState(false);


    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className=" flex justify-between items-center">
                {/* left side */}
                <div className="flex justify-between items-center md:gap-4 w-1/2">
                    <Link to="/" className="">
                        <HiMiniBars3CenterLeft className="size-6" />
                    </Link>

                    {/* search bar */}

                    <div className="relative sm:w-80 left-2.5 w-40 space-x-2 ml-2">
                        <IoSearchCircleSharp className="absolute inline-block left-3 inset-y-2" />
                        <input
                            type="text"
                            placeholder="Search here!"
                            className="bg-blackbg  w-full py-1 md:px-8 px-9 rounded-md focus:outline-none"
                        />
                    </div>
                </div>

                {/* right side */}
                <div className="relative flex md:space-x-3 space-x-2 items-center">
                    <div className="">
                        {currentUser ? (
                            <>
                                <button onClick={() => setIsDropdown(!isDropdown)}>
                                    <img
                                        src={avatarImg}
                                        alt="loginAvatar"
                                        className={`rounded-full cursor-pointer size-7 ${currentUser ? "ring-2 ring-blue-500" : ""
                                            }`}
                                    />
                                </button>

                                {/* show dropdown here */}
                                {isDropdown && (
                                    <div className="absolute right-0 mt-2 w-48 bg-blackbg shadow-lg rounded-md z-40">
                                        <ul >
                                            {
                                                navigation.map((item) => (
                                                            <li key={item.name} onClick={() => setIsDropdown(false)}>
                                                                <Link to={item.href} className="block py-2 px-4 text-sm hover:bg-gray-100">{item.name}</Link>
                                                            </li>
                                                ))
                                                
                                        }
                                        </ul>
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link to="/login">
                                {" "}
                                <HiOutlineUser className="size-6" />{" "}
                            </Link>
                        )}
                    </div>

                    <button>
                        <HiOutlineHeart className="size-6" />
                    </button>

                    <Link
                        to="/cart"
                        className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
                    >
                        <HiOutlineShoppingCart className="" />
                        <span className="text-sm font-semibold sm:ml-1">0</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default navbar;
