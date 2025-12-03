import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`
        mx-auto w-full px-4
        sm:max-w-xl
        md:max-w-3xl
        lg:max-w-[992px]
        xl:max-w-[1200px]
        2xl:max-w-[1192px]
        ${className}
      `}
      style={{
        maxWidth: "1192px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
