"use client";
import Link from "next/link";
import { FC, useState } from "react";
import Image from "next/image";
import logo from "./header-img/header-logo.png";
import world from "./header-img/world.svg"
import ham from "./header-img/ham.svg"
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typograpghy";
import Button from "../Button/Button";

const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-[#EEF6FFB2]">
            <Container>
                <nav className="">
                    {/* Desktop Header */}
                    <div className="hidden lg:flex items-center justify-between py-4">
                        <Link href="/" className="flex items-center gap-2 relative w-[166px] h-[50px]">
                            <Image
                                src={logo}
                                alt="Parkly Logo"
                                fill
                                className="object-contain"
                                sizes="100%"
                                priority
                            />
                        </Link>

                        <div className="flex gap-10">
                            <div className="flex gap-3 items-center">
                                <Link href="/how-it-works" className="d-flex px-2.5 py-4">
                                    <Typography variant="para" className="text-black-700 custom-underline hover:text-blue-500">
                                        How it Works
                                    </Typography>
                                </Link>

                                <Link href="/features" className="d-flex px-2.5 py-4">
                                    <Typography variant="para" className="text-black-700 custom-underline hover:text-blue-500">
                                        Features
                                    </Typography>
                                </Link>

                                <Link href="/faq" className="d-flex px-2.5 py-4">
                                    <Typography variant="para" className="text-black-700 custom-underline hover:text-blue-500">
                                        FAQ
                                    </Typography>
                                </Link>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Link href="" className="px-5 py-4">
                                    <div className="flex gap-2 items-center">
                                        <div className="flex items-center gap-2 relative w-4 h-4">
                                            <Image
                                                src={world}
                                                alt="world"
                                                fill
                                                className="object-contain"
                                                sizes="100%"
                                                priority
                                            />
                                        </div>
                                        <Typography variant="para" className="text-black-700 font-medium">
                                            EN
                                        </Typography>
                                    </div>
                                </Link>

                                <Link href="" className="d-flex ">
                                    <Button
                                        text="Join"
                                        variant="sm"
                                        bg="#2C7FFF33"
                                        color="#101010"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Header */}
                    <div className="flex lg:hidden items-center justify-between py-4">
                        <Link href="/" className="flex items-center gap-2 relative w-[126px] h-[38px]">
                            <Image
                                src={logo}
                                alt="Parkly Logo"
                                fill
                                className="object-contain"
                                sizes="100%"
                                priority
                            />
                        </Link>

                        <button onClick={() => setIsOpen(true)}>
                            <div className="p-3 bg-[#2C7FFF33] rounded-lg overflow-hidden">
                                <div className="relative w-5 h-4">
                                    <Image
                                        src={ham}
                                        alt="menu"
                                        fill
                                        className="object-contain"
                                        sizes="100%"
                                        priority
                                    />
                                </div>
                            </div>
                        </button>
                    </div>


                    {/* Offcanvas */}
                    <div
                        className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <div className="flex justify-end p-4">
                            <button onClick={() => setIsOpen(false)} className="text-black font-bold text-lg">
                                ✕
                            </button>
                        </div>
                        <nav className="flex flex-col gap-6 mt-10 px-6">
                            <Link href="/how-it-works" onClick={() => setIsOpen(false)}>
                                <Typography variant="para" className="text-black-700 custom-underline hover:text-blue-500">
                                    How it Works
                                </Typography>
                            </Link>
                            <Link href="/features" onClick={() => setIsOpen(false)}>
                                <Typography variant="para" className="text-black-700 custom-underline hover:text-blue-500">
                                    Features
                                </Typography>
                            </Link>
                            <Link href="/faq" onClick={() => setIsOpen(false)}>
                                <Typography variant="para" className="text-black-700 custom-underline hover:text-blue-500">
                                    FAQ
                                </Typography>
                            </Link>
                            <div className="flex items-center gap-3 mt-4">
                                <div className="flex items-center gap-2 relative w-4 h-4">
                                    <Image src={world} alt="world" fill className="object-contain" sizes="100%" priority />
                                </div>
                                <Typography variant="para" className="text-black-700 font-medium">
                                    EN
                                </Typography>
                            </div>
                            <Button text="Join" variant="sm" bg="#2C7FFF33" color="#101010" />
                        </nav>
                    </div>

                    {/* Overlay */}
                    {isOpen && (
                        <div
                            className="fixed inset-0 bg-black/30 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                    )}
                </nav>
            </Container>
        </header>
    );
};

export default Header;

