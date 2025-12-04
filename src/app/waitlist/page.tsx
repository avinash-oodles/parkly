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
import car from "@/assets/svgs/feature-car.svg"
import realtime from "@/assets/svgs/real-time.svg"
import tick from "@/assets/svgs/tick.svg"
import verified from "@/assets/svgs/verifid.svg"
import arrow from "@/assets/svgs/arrow.svg"
import calender from "@/assets/svgs/calender.svg"
import dots from "@/assets/svgs/dots.svg"
import star from "@/assets/svgs/star.svg"
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

            {/* KEY FEATURES */}
            <section className="bg-[#D9EBFF] ">
                <Container>
                    <div className="feature-content pt-[70px] flex flex-col gap-15 ">
                        <div className="flex flex-col gap-3 items-center">
                            <div className="flex flex-col gap-2  items-center ">
                                <div className="w-max py-1.5 px-3 bg-[#C5E3FF] backdrop-blur-sm rounded-3xl">
                                    <Typography variant="chip" weight={600} className="text-blue-500">
                                        KEY FEATURES
                                    </Typography>
                                </div>
                                <Typography variant="h2" weight={600} className="text-black-900">
                                    Smart. Verified. Effortless.
                                </Typography>
                            </div>
                            <Typography variant="body" lineHeight={32} letterSpacing={0.01} weight={400} className="text-black-700">
                                A platform built to make parking safer, simpler, and smarter for everyone.
                            </Typography>
                        </div>
                        <div className="flex gap-8">
                            <div className="flex gap-8">
                                <div className="flex flex-col gap-9">
                                    <div className=" feature-card bg-white px-6 py-[30px] shadow-[0px_2px_12px_0px_#8888881F] rounded-2xl flex flex-col gap-5  lg:min-w-[360px] ">
                                        <div className="p-2.5 bg-[#59A6FF] rounded-xl flex items-center relative w-4 lg:w-[46px] h-4 lg:h-[46px] ">
                                            <Image
                                                src={realtime}
                                                alt="world"
                                                width={26}
                                                height={26}
                                                className="object-contain"
                                                priority
                                            />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Typography variant="body" weight={600} className="text-black-900">
                                                Real-Time Smart Map
                                            </Typography>
                                            <Typography variant="para" weight={400} className="text-black-600">
                                                Reserve spots instantly with our live, dynamic map interface.
                                            </Typography>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-[#59A6FF] rounded-xl flex items-center p-1.5 "></div>
                                            <Typography variant="chip" weight={600} lineHeight={21} className="text-blue-900">
                                                Live Updates
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className=" feature-card bg-white px-6 py-[30px] shadow-[0px_2px_12px_0px_#8888881F] rounded-2xl flex flex-col gap-5 lg:min-w-[360px]">
                                        <div className="p-2.5 bg-[#59A6FF] rounded-xl flex items-center relative w-4 lg:w-[46px] h-4 lg:h-[46px] ">
                                            <Image
                                                src={arrow}
                                                alt="arrow"
                                                width={26}
                                                height={26}
                                                className="object-contain"
                                                priority
                                            />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Typography variant="body" weight={600} className="text-black-900">
                                               Effortless Booking & Management
                                            </Typography>
                                            <Typography variant="para" weight={400} className="text-black-600">
                                                Book, manage, or cancel easily — everything happens in a few taps.
                                            </Typography>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className="rounded-xl flex items-center p-1.5 relative">
                                                <Image
                                                src={dots}
                                                alt="world"
                                                width={12}
                                                height={12}
                                                className="object-contain"
                                                priority
                                            />
                                            </div>
                                            <Typography variant="chip" weight={600} lineHeight={21} className="text-blue-900">
                                                3 Simple Steps
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-9">
                                    <div className=" feature-card bg-white px-6 py-[30px] shadow-[0px_2px_12px_0px_#8888881F] rounded-2xl flex flex-col gap-5 lg:min-w-[360px]">
                                        <div className="p-2.5 bg-[#59A6FF] rounded-xl flex items-center relative w-4 lg:w-[46px] h-4 lg:h-[46px] ">
                                            <Image
                                                src={verified}
                                                alt="world"
                                                width={26}
                                                height={26}
                                                className="object-contain"
                                                priority
                                            />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Typography variant="body" weight={600} className="text-black-900">
                                                Verified & Secure Parking
                                            </Typography>
                                            <Typography variant="para" weight={400} className="text-black-600">
                                                All listings are verified, ensuring your car is safely parked with trusted hosts.
                                            </Typography>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-[#59A6FF] rounded-xl flex items-center p-1.5 relative">
                                                <Image
                                                src={tick}
                                                alt="world"
                                                width={12}
                                                height={12}
                                                className="object-contain"
                                                priority
                                            />
                                            </div>
                                            <Typography variant="chip" weight={600} lineHeight={21} className="text-blue-900">
                                                100% Verified Hosts
                                            </Typography>
                                        </div>
                                    </div>
                                    <div className=" feature-card bg-white px-6 py-[30px] shadow-[0px_2px_12px_0px_#8888881F] rounded-2xl flex flex-col gap-5 lg:min-w-[360px]">
                                        <div className="p-2.5 bg-[#59A6FF] rounded-xl flex items-center relative w-4 lg:w-[46px] h-4 lg:h-[46px] ">
                                            <Image
                                                src={calender}
                                                alt="calender"
                                                width={26}
                                                height={26}
                                                className="object-contain"
                                                priority
                                            />
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <Typography variant="body" weight={600} className="text-black-900">
                                                Event-Ready Parking Discovery
                                            </Typography>
                                            <Typography variant="para" weight={400} className="text-black-600">
                                                Find parking near events — compare distances, reviews, and prices.
                                            </Typography>
                                        </div>
                                        <div className="flex gap-2 items-center">
                                            <div className="bg-[#59A6FF] rounded-xl flex items-center p-1.5 relative">
                                                <Image
                                                src={star}
                                                alt="world"
                                                width={12}
                                                height={12}
                                                className="object-contain"
                                                priority
                                            />
                                            </div>
                                            <Typography variant="chip" weight={600} lineHeight={21} className="text-blue-900">
                                                Event Optimized
                                            </Typography>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full max-w-[400px]">
                                <div className="flex justify-center relative w-full h-full min-h-[450px] ">
                                    <Image
                                        src={car}
                                        alt="car"
                                        fill
                                        className="object-cover"
                                        sizes="100%"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
};

export default WaitlistPage;