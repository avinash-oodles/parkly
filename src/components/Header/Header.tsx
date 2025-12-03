"use client";
import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import logo from "./header-img/header-logo.png";
import world from "./header-img/world.svg"
import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typograpghy";
import Button from "../Button/Button";

const Header: FC = () => {
    return (
        <header className="w-full bg-[#EEF6FFB2]">
            <Container>
                <nav className="flex items-center justify-between py-4">

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
                </nav>
            </Container>
        </header>
    );
};

export default Header;
