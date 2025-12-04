import { FC } from "react";
import Link from "next/link";
import Container from "../Container/Container";
import Typography from "@/components/Typography/Typograpghy";
import Image from "next/image";
import globe from "./footer-img/globe.svg"
import twitter from "./footer-img/twitter.svg"
import fb from "./footer-img/fb.svg"
import insta from "./footer-img/insta.svg"

const Footer: FC = () => {
    return (
        <footer className="w-full">
            <div className="flex flex-col">
                <div className="bg-[#EEF6FF] py-[50px] ">
                    <Container>
                        <div className="flex justify-between">
                            <div className=""></div>
                            <div className=""></div>
                        </div>
                    </Container>
                </div>
                <div className="py-5">
                    <Container>
                        <div className="flex justify-between">
                            <div className="flex gap-10">
                                <Typography variant="para" weight={600} className="text-[#132457]">
                                    © 2025 Parkly
                                </Typography>

                                <Link href="">
                                    <Typography variant="para" weight={500} className="text-[#2B2B2B] cursor-pointer">
                                        Privacy
                                    </Typography>
                                </Link>

                                <Link href="">
                                    <Typography variant="para" weight={500} className="text-[#2B2B2B] cursor-pointer">
                                        Terms & Conditions
                                    </Typography>
                                </Link>
                            </div>
                            <div className="flex gap-10">
                                <div className="flex gap-3 items-center">
                                    <div className="flex items-center relative w-5 h-5">
                                        <Image
                                            src={globe}
                                            alt="world"
                                            fill
                                            className="object-contain"
                                            sizes="100%"
                                            priority
                                        />
                                    </div>
                                    <Typography variant="body" weight={500} className="text-[#2B2B2B]">
                                        English
                                    </Typography>
                                </div>

                                <div className="flex gap-8 items-center">
                                    <Link href="https://twitter.com" target="_blank">
                                        <div className="flex items-center gap-2 relative w-6 h-6 cursor-pointer">
                                            <Image
                                                src={twitter}
                                                alt="twitter"
                                                fill
                                                className="object-contain"
                                                sizes="100%"
                                                priority
                                            />
                                        </div>
                                    </Link>

                                    <Link href="https://facebook.com" target="_blank">
                                        <div className="flex items-center gap-2 relative w-6 h-6 cursor-pointer">
                                            <Image
                                                src={fb}
                                                alt="facebook"
                                                fill
                                                className="object-contain"
                                                sizes="100%"
                                                priority
                                            />
                                        </div>
                                    </Link>

                                    <Link href="https://instagram.com" target="_blank">
                                        <div className="flex items-center gap-2 relative w-6 h-6 cursor-pointer">
                                            <Image
                                                src={insta}
                                                alt="instagram"
                                                fill
                                                className="object-contain"
                                                sizes="100%"
                                                priority
                                            />
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </footer>
    )
}

export default Footer;