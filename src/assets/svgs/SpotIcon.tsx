"use client";

interface SpotIconProps {
    stroke: string;
}

const SpotIcon: React.FC<SpotIconProps> = ({ stroke }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1750_21632)">
            <path d="M21 23.25H3C1.7595 23.25 0.75 22.2405 0.75 21V3C0.75 1.7595 1.7595 0.75 3 0.75H21C22.2405 0.75 23.25 1.7595 23.25 3V21C23.25 22.2405 22.2405 23.25 21 23.25ZM3 2.25C2.58675 2.25 2.25 2.586 2.25 3V21C2.25 21.414 2.58675 21.75 3 21.75H21C21.414 21.75 21.75 21.414 21.75 21V3C21.75 2.586 21.414 2.25 21 2.25H3ZM8.25 18.75C7.836 18.75 7.5 18.4147 7.5 18V6C7.5 5.58525 7.836 5.25 8.25 5.25H12C14.4818 5.25 16.5 7.26825 16.5 9.75C16.5 12.2318 14.4818 14.25 12 14.25H9V18C9 18.4147 8.664 18.75 8.25 18.75ZM9 12.75H12C13.6545 12.75 15 11.4045 15 9.75C15 8.0955 13.6545 6.75 12 6.75H9V12.75Z" fill={stroke} />
        </g>
        <defs>
            <clipPath id="clip0_1750_21632">
                <rect width="24" height="24" fill="white" />
            </clipPath>
        </defs>
    </svg>

);

export default SpotIcon;
