import Typography from "@/components/Typography/Typograpghy";
import Container from "@/components/Container/Container";
import Image from "next/image";
import Button from "@/components/Button/Button";
import Verified from "@/assets/svgs/Verified";
import Guaranteed from "@/assets/svgs/Guaranteed";
import Effortless from "@/assets/svgs/Effortless";

export default function Home() {
  return (
    <>
      {/* herosection */}
      <section className="relative bg-[url('/find-bg.svg')] md:bg-[url('/find-bg-desk.svg')]  bg-cover bg-center bg-no-repeat">
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
    </>
  );
}
