"use client";
import Typography from "@/components/Typography/Typograpghy";
import Container from "@/components/Container/Container";

import Button from "@/components/Button/Button";
import Verified from "@/assets/svgs/Verified";
import Guaranteed from "@/assets/svgs/Guaranteed";
import Effortless from "@/assets/svgs/Effortless";
import EffortCard from "@/components/molecules/EffortCard";

import glass from "@/assets/svgs/glass.svg"
import book from "@/assets/svgs/book.svg"
import paid from "@/assets/svgs/paid.svg"
import glassHost from "@/assets/svgs/glass-host.svg";
import bookHost from "@/assets/svgs/book-host.svg";
import paidHost from "@/assets/svgs/paid-host.svg";

import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useState } from "react";

export default function Home() {
  const isMd = useMediaQuery('(min-width: 768px)');
  const [activeRole, setActiveRole] = useState<"Driver" | "Host">("Driver");
  const data = {
    Driver: [
      {
        number: "01",
        bgColor: "#173EB6",
        icon: glass,
        title: "Search Nearby Spots",
        subtitle: "Find verified parking near your destination in seconds.",
      },
      {
        number: "02",
        bgColor: "#1B62F5",
        icon: book,
        title: "Pick & Reserve",
        subtitle: "Compare options and confirm your spot instantly.",
      },
      {
        number: "03",
        bgColor: "#2C7FFF",
        icon: paid,
        title: "Get Paid or Park Stress Free",
        subtitle: <>Navigate, arrive, and enjoy <span className="text-blue-500">stress-free parking.</span></>,
      },
    ],
    Host: [
      {
        number: "01",
        bgColor: "#173EB6",
        icon: glassHost,
        title: "List Your Spot",
        subtitle: "Add your parking space and set availability easily.",
      },
      {
        number: "02",
        bgColor: "#1B62F5",
        icon: bookHost,
        title: "Accept Bookings",
        subtitle: "Receive booking requests and confirm instantly.",
      },
      {
        number: "03",
        bgColor: "#2C7FFF",
        icon: paidHost,
        title: "Earn Hassle-Free",
        subtitle: <>Get paid automatically while keeping your spot secure.</>,
      },
    ],
  };

  return (
    <>
      {/* herosection */}
      <section className="relative bg-[url('/find-bg.svg')] md:bg-[url('/landing-bg.svg')]  bg-cover bg-center bg-no-repeat">
        <Container>
          <div className="flex flex-col gap-6 md:gap-8 py-8 md:py-[84px] max-w-[600px] mx-auto ">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex flex-col gap-2 md:gap-4">
                <Typography variant="h1" weight={700} letterSpacing={0.01} className="text-black-900 text-center ">
                  Find Smart, Secure Parking — Anytime,<span className="text-blue-500"> Anywhere.</span>
                </Typography>
                <Typography variant="body" weight={400} className="text-black-900 text-center">
                  Parkly connects <b> Drivers, Hosts, and Event-Goers </b> with verified, private parking spaces nearby. Stop circling. Save time and money.
                </Typography>
              </div>
              <div className="flex gap-6 flex-wrap">
                <div className="flex gap-2 items-center bg-[#EEF6FF] py-1.5 px-4 rounded-3xl ">
                  <Verified />
                  <Typography variant="chip" weight={600} lineHeight={20} className="text-blue-800">
                    Verified Spots
                  </Typography>
                </div>
                <div className="flex gap-2 items-center bg-[#EEF6FF] py-1.5 px-4 rounded-3xl ">
                  <Guaranteed />
                  <Typography variant="chip" weight={600} lineHeight={20} className="text-blue-800">
                    Guaranteed Parking
                  </Typography>
                </div>
                <div className="flex gap-2 items-center bg-[#EEF6FF] py-1.5 px-4 rounded-3xl ">
                  <Effortless />
                  <Typography variant="chip" weight={600} lineHeight={20} className="text-blue-800">
                    Effortless Earnings
                  </Typography>
                </div>
              </div>
            </div>
            <div className="flex gap-6 items-center justify-center">
              <div className="">
                <Button
                  text="Join the Waitlist"
                  variant="lg"
                  bg="#2C7FFF"
                  color="#FFFFFF"
                  hoverBg="#101010"
                  boxShadow="1px 2px 24px 0px #13245733"
                  className="w-full md:w-auto"
                />
              </div>
              <div className="">
                <Button
                  text="Find Parking"
                  variant="lg"
                  bg="#2C7FFF1A"
                  color="#1B62F5"
                  hoverBg="#101010"
                  className="w-full md:w-auto"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Parkly Makes Parking Effortless */}
      <section id="how-it-works">
        <Container>
          <div className="flex flex-col gap-8 md:gap-15 pt-8 pb-5 md:py-[70px] ">
            {/* Header */}
            <div className="flex justify-between items-end">
              <div className="flex flex-col gap-1 md:gap-2">
                <div className="w-max py-1.5 px-3 bg-[#D9EBFF] backdrop-blur-sm rounded-3xl">
                  <Typography variant="chip" weight={600} lineHeight={isMd ? 20 : 16} className="text-blue-500">
                    HOW IT WORKS?
                  </Typography>
                </div>
                <Typography variant="h2" weight={600} lineHeight={isMd ? 45 : 36} className="text-[#0A0A0A]">
                  Parkly Makes Parking Effortless
                </Typography>
              </div>

              {/* Toggle Buttons */}
              <div className="flex gap-1 p-2 rounded-lg bg-[#EFEFEF]">
                {(["Driver", "Host"] as const).map((role) => (
                  <div
                    key={role}
                    onClick={() => setActiveRole(role)}
                    className={`py-2 px-4 rounded-lg cursor-pointer ${activeRole === role ? "bg-black" : ""
                      }`}
                  >
                    <Typography
                      variant="chip"
                      weight={400}
                      lineHeight={isMd ? 20 : 16}
                      className={activeRole === role ? "text-black-00" : "text-black"}
                    >
                      {role}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Effort Cards */}
            <div className="flex flex-col lg:flex-row lg:justify-around gap-7 md:gap-0 lg:gap-8 bg-[url('/bg-net.svg')] bg-contain md:bg-cover bg-center bg-no-repeat">
              {data[activeRole].map((card) => (
                <EffortCard
                  key={card.number}
                  number={card.number}
                  bgColor={card.bgColor}
                  icon={card.icon}
                  title={card.title}
                  subtitle={card.subtitle}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
