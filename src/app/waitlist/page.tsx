import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typograpghy";
import { FC } from "react";
import device from "@/assets/images/device.png"
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button/Button";
import glass from "@/assets/svgs/glass.svg"
import book from "@/assets/svgs/book.svg"
import paid from "@/assets/svgs/paid.svg"
import EffortCard from "@/components/molecules/EffortCard";


const WaitlistPage: FC = () => {
    return (
        <>
            {/* herosection */}
            <section className="relative bg-[url('/find-bg.svg')] bg-cover bg-center bg-no-repeat">
                <Container>
                    <div className="find-container flex gap-8 pt-[70px] ">
                        <div className=" w-full flex flex-col justify-center gap-8">
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
                                        hoverBg="#101010"
                                        boxShadow="1px 2px 24px 0px #13245733"
                                    />
                                </Link>
                                <Typography variant="para" weight={500} className="text-black-900">
                                    Launching across the U.S. soon
                                </Typography>
                            </div>
                        </div>
                        <div className=" w-full max-w-[524px]">
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

            {/* Parkly Makes Parking Effortless */}
            <section>
                <Container>
                    <div className="flex flex-col gap-15 py-[70px] ">
                        <div className="flex flex-col gap-2">
                            <div className="w-max py-1.5 px-3 bg-[#D9EBFF] backdrop-blur-sm rounded-3xl">
                                <Typography variant="chip" weight={600} className="text-blue-500">
                                    HOW IT WORKS?
                                </Typography>
                            </div>
                            <Typography variant="h2" weight={600} className="text-[#0A0A0A] ">
                                Parkly Makes Parking Effortless
                            </Typography>
                        </div>
                        <div className="flex justify-around gap-8">
                            <EffortCard
                                number="01"
                                bgColor="#173EB6"
                                icon={glass}
                                title="Verify Your Spot"
                                // subtitle=""
                            />
                            <EffortCard
                                number="02"
                                bgColor="#1B62F5"
                                icon={book}
                                title="List or Book"
                            />
                            <EffortCard
                                number="03"
                                bgColor="#2C7FFF"
                                icon={paid}
                                title="Get Paid or Park Stress Free"
                            />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
};

export default WaitlistPage;