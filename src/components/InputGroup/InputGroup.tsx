"use client";

import { useState } from "react";

interface InputGroupProps {
  placeholder?: string;
  type?: string;
  Icon: React.FC<{ stroke: string }>;
  error?: string;
  multiline?: boolean; // <-- new prop to switch between input/textarea
  rows?: number;        // optional rows for textarea
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: any;
}

const InputGroup: React.FC<InputGroupProps> = ({ placeholder = "Your name", type = "text", Icon, error,
  register, multiline = false,
  rows = 3,}) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const strokeColor = isFocused || value ? "#19398F" : "#727272";

  return (
    <div className="flex flex-col gap-1">
      {/* Wrapper */}
      <div
        className={`py-[15px] px-[18px] md:p-[18px] border-[1.5px] rounded-xl flex gap-2.5 overflow-hidden ${multiline ? "items-start" : "items-center"
          } ${error ? "border-red-500" : "border-[#BCDCFF]"}`}
      >
        <div className={`min-w-5 ${multiline ? "mt-0.5" : ""}`}>
          <Icon stroke={strokeColor} />
        </div>
        {multiline ? (
          <textarea
            placeholder={placeholder}
            {...register}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows={rows}
            className="placeholder:text-[#727272] placeholder:text-[16px] [@media(max-width:390px)]:placeholder:text-[12px] outline-none text-blue-900 flex-1 resize-none"
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            {...register}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className="placeholder:text-[#727272] placeholder:text-[16px] [@media(max-width:390px)]:placeholder:text-[12px] outline-none text-blue-900 flex-1"
          />
        )}
      </div>

      {/* Error message */}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default InputGroup;
