
"use client";

interface AddressIconProps {
    stroke: string;
}

const AddressIcon: React.FC<AddressIconProps> = ({ stroke }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10C21 13.9479 18.1373 17.5777 15.641 19.9925C14.2075 21.379 13.4908 22.0723 12.083 22.1048C12.0407 22.1058 11.9593 22.1058 11.917 22.1048C10.5092 22.0723 9.79247 21.379 8.35904 19.9924C5.86268 17.5777 3 13.9479 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default AddressIcon;
