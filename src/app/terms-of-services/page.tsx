"use client";

import Container from "@/components/Container/Container";
import Typography from "@/components/Typography/Typography";
import { FC } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const TermsOfServicePage: FC = () => {
    const isMd = useMediaQuery("(min-width: 768px)");

    return (
        <section>
            <Container>
                <div className="flex flex-col gap-7 md:gap-10 py-8 md:py-[70px]">

                    {/* ───── Header ───── */}
                    <div className="flex flex-col gap-3 md:gap-4">
                        <div className="w-max py-1.5 px-3 bg-[#D9EBFF] backdrop-blur-sm rounded-3xl">
                            <Typography variant="chip" weight={600} lineHeight={isMd ? 20 : 16} className="text-blue-500">
                                LEGAL
                            </Typography>
                        </div>
                        <div className="flex flex-col gap-1 md:gap-2">
                            <Typography variant="h2" weight={700} letterSpacing={0.01} className="text-black-900">
                                Parkly Terms of Service
                            </Typography>
                            <Typography variant="para" weight={400} lineHeight={isMd ? 24 : 20} className="text-black-500">
                                Effective Date: April 1, 2026
                            </Typography>
                        </div>
                    </div>

                    {/* ───── Intro ───── */}
                    <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                        Welcome to Parkly. By using our services, you agree to the following Terms of Service.
                    </Typography>

                    {/* ───── Sections ───── */}
                    <div className="flex flex-col gap-6 md:gap-8">

                        {/* 1. Overview of Services */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                1. Overview of Services
                            </Typography>
                            <div className="flex flex-col gap-2">
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    Parkly is a platform that connects individuals seeking parking (&ldquo;Drivers&rdquo;) with individuals offering parking spaces (&ldquo;Hosts&rdquo;).
                                </Typography>
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    Parkly acts solely as an intermediary and does not own, operate, or control any parking spaces or vehicles.
                                </Typography>
                            </div>
                        </div>

                        {/* 2. Eligibility */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                2. Eligibility
                            </Typography>
                            <div className="flex flex-col gap-2">
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    By using Parkly, you confirm that:
                                </Typography>
                                <ul className="flex flex-col gap-1.5 pl-5 list-disc marker:text-[#2C7FFF]">
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            You are at least 18 years old
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            You have the legal authority to enter into this agreement
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            All information you provide is accurate
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 3. Nature of the Agreement */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                3. Nature of the Agreement
                            </Typography>
                            <div className="flex flex-col gap-2">
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    Parkly facilitates short-term parking arrangements between Drivers and Hosts.
                                </Typography>
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    Any agreement for parking is solely between the Driver and the Host, not Parkly.
                                </Typography>
                            </div>
                        </div>

                        {/* 4. Driver Responsibilities */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                4. Driver Responsibilities
                            </Typography>
                            <div className="flex flex-col gap-2">
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    Drivers agree that they:
                                </Typography>
                                <ul className="flex flex-col gap-1.5 pl-5 list-disc marker:text-[#2C7FFF]">
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Are fully responsible for their vehicle at all times
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Are responsible for any damage caused by their vehicle to property, structures, or other vehicles
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Will comply with all local laws and regulations
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Will not store illegal, hazardous, or prohibited items in their vehicle
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Will use the parking space only during the agreed time
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 5. Host Responsibilities */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                5. Host Responsibilities
                            </Typography>
                            <div className="flex flex-col gap-2">
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    Hosts agree that they:
                                </Typography>
                                <ul className="flex flex-col gap-1.5 pl-5 list-disc marker:text-[#2C7FFF]">
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Have the right to offer the parking space
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Will provide reasonable access to the space during the agreed time
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Will not interfere with the Driver&apos;s lawful use of the space
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 6. Payments */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                6. Payments
                            </Typography>
                            <div className="flex flex-col gap-2">
                                <ul className="flex flex-col gap-1.5 pl-5 list-disc marker:text-[#2C7FFF]">
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Payment terms are communicated prior to booking
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Parkly may facilitate payment between Drivers and Hosts
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Payment is typically sent prior to the Driver&apos;s arrival
                                        </Typography>
                                    </li>
                                </ul>
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    Parkly is not responsible for payment disputes between users.
                                </Typography>
                            </div>
                        </div>

                        {/* 7. Cancellations & Changes */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                7. Cancellations &amp; Changes
                            </Typography>
                            <ul className="flex flex-col gap-1.5 pl-5 list-disc marker:text-[#2C7FFF]">
                                <li>
                                    <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                        Any changes or cancellations should be communicated as soon as possible
                                    </Typography>
                                </li>
                                <li>
                                    <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                        Parkly may assist in coordinating adjustments but does not guarantee outcomes
                                    </Typography>
                                </li>
                            </ul>
                        </div>

                        {/* 8. Property Damage & Liability */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                8. Property Damage &amp; Liability
                            </Typography>
                            <div className="flex flex-col gap-2">
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    Drivers are solely responsible for any damage caused by their vehicle to a Host&apos;s property or to any third party property.
                                </Typography>
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    By using Parkly, Drivers agree to cover the cost of any such damage and release Parkly from any liability related to such incidents.
                                </Typography>
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    Hosts acknowledge that Parkly is not responsible for enforcing damage claims but may assist in communication between parties.
                                </Typography>
                            </div>
                        </div>

                        {/* 9. Liability Disclaimer */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                9. Liability Disclaimer
                            </Typography>
                            <div className="flex flex-col gap-2">
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    Parkly is a platform only and is not responsible for:
                                </Typography>
                                <ul className="flex flex-col gap-1.5 pl-5 list-disc marker:text-[#2C7FFF]">
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Damage to vehicles
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Theft, loss, or vandalism
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Personal injury
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Property damage
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Disputes between Drivers and Hosts
                                        </Typography>
                                    </li>
                                </ul>
                                <Typography variant="para" weight={500} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    All use of the platform is at your own risk.
                                </Typography>
                            </div>
                        </div>

                        {/* 10. Indemnification */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                10. Indemnification
                            </Typography>
                            <div className="flex flex-col gap-2">
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    You agree to indemnify and hold harmless Parkly from any claims, damages, or disputes arising from:
                                </Typography>
                                <ul className="flex flex-col gap-1.5 pl-5 list-disc marker:text-[#2C7FFF]">
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Your use of the platform
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Your interactions with other users
                                        </Typography>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* 11. Limitation of Liability */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                11. Limitation of Liability
                            </Typography>
                            <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                To the maximum extent permitted by law, Parkly shall not be liable for any indirect, incidental, or consequential damages.
                            </Typography>
                        </div>

                        {/* 12. Termination */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                12. Termination
                            </Typography>
                            <div className="flex flex-col gap-2">
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    Parkly reserves the right to:
                                </Typography>
                                <ul className="flex flex-col gap-1.5 pl-5 list-disc marker:text-[#2C7FFF]">
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Refuse service
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Remove users
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                            Cancel bookings
                                        </Typography>
                                    </li>
                                </ul>
                                <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                    at its sole discretion.
                                </Typography>
                            </div>
                        </div>

                        {/* 13. Modifications */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                13. Modifications
                            </Typography>
                            <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                Parkly may update these Terms at any time. Continued use of the platform constitutes acceptance of the updated Terms.
                            </Typography>
                        </div>

                        {/* 14. Governing Law */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                14. Governing Law
                            </Typography>
                            <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                These Terms shall be governed by the laws of the State of California.
                            </Typography>
                        </div>

                        {/* 15. Contact */}
                        <div className="flex flex-col gap-2 md:gap-3">
                            <Typography variant="h4" weight={600} lineHeight={isMd ? 28 : 24} className="text-black-900 font-poppins">
                                15. Contact
                            </Typography>
                            <Typography variant="para" weight={400} lineHeight={isMd ? 26 : 22} className="text-black-700">
                                For any questions, please contact:{" "}
                                <a
                                    href="mailto:support@parklyco.com"
                                    className="text-blue-600 underline hover:text-blue-800"
                                >
                                    support@parklyco.com
                                </a>
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default TermsOfServicePage;