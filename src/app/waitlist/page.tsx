import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typograpghy";
import { FC } from "react";
import device from "@/assets/images/device.png"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";


const WaitlistPage: FC = () => {
    return (
        <>
            {/* herosection */}
            <section className="relative bg-[url('/find-bg.svg')] bg-cover bg-center bg-no-repeat">
                <Container>
                    <div className="find-container flex gap-8 pt-[70px] ">
                        <div className="find-left w-full flex flex-col justify-center gap-8">
                            <div className="flex flex-col gap-4">
                                <Typography variant="h1" weight={700} letterSpacing={0.01} className="text-black-900">
                                    Find Smart, Secure Parking — Anytime, <span className="text-blue-500"> Anywhere.	</span>
                                </Typography>
                                <Typography variant="body" weight={400} lineHeight={28} className="text-black-900">
                                    Parkly connects <b> Drivers, Hosts, and Event-Goers</b> with verified, private parking spaces nearby. Stop circling. Save time and money.
                                </Typography>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Link href="" className="d-flex ">
                                    <Button
                                        text="Join the Waitlist"
                                        variant="lg"
                                        bg="#2C7FFF"
                                        color="#FFFFFF"
                                        boxShadow="1px 2px 24px 0px #13245733"
                                    />
                                </Link>
                                <Typography variant="para" weight={500} className="text-black-900">
                                    Launching across the U.S. soon
                                </Typography>
                            </div>
                        </div>
                        <div className="find-right w-full max-w-[524px]">
                            <div className="flex justify-center relative w-full h-full min-h-[450px] ">
                                <Image
                                    src={device}
                                    alt="world"
                                    fill
                                    className="object-contain"
                                    sizes="100%"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
};

export default WaitlistPage;