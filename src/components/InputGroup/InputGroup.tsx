// "use client";

// import { useState } from "react";
// import ProfileIcon from "@/assets/svgs/ProfileIcon";

// interface InputGroupProps {
//   placeholder?: string;
//   type?: string;
// }

// const InputGroup: React.FC<InputGroupProps> = ({ placeholder = "Your name", type = "text" }) => {
//   const [value, setValue] = useState("");
//   const [isFocused, setIsFocused] = useState(false);

//   const strokeColor = isFocused || value ? "#19398F" : "#727272";

//   return (
//     <div className="input-wrapper p-[18px] border-[1.5px] border-[#BCDCFF] rounded-xl flex gap-2.5 items-center">
//       <ProfileIcon stroke={strokeColor} />
//       <input
//         type={type}
//         placeholder={placeholder}
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         onFocus={() => setIsFocused(true)}
//         onBlur={() => setIsFocused(false)}
//         className="placeholder:text-[#727272] outline-none focus:outline-none focus-visible:outline-none text-blue-900 flex-1"
//       />
//     </div>
//   );
// };

// export default InputGroup;




"use client";

import { useState } from "react";

interface InputGroupProps {
  placeholder?: string;
  type?: string;
  Icon: React.FC<{ stroke: string }>; // Icon is passed as a component prop
}

const InputGroup: React.FC<InputGroupProps> = ({ placeholder = "Your name", type = "text", Icon }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const strokeColor = isFocused || value ? "#19398F" : "#727272";

  return (
    <div className="input-wrapper py-[15px] px-[18px] md:p-[18px] border-[1.5px] border-[#BCDCFF] rounded-xl flex gap-2.5 items-center">
      <div className="">
        <Icon stroke={strokeColor} />
      </div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="placeholder:text-[#727272] outline-none focus:outline-none focus-visible:outline-none text-blue-900 flex-1"
      />
    </div>
  );
};

export default InputGroup;
