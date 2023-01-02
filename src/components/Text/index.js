import React from "react";
const variantClasses = {
  h1: "font-bold text-[9px]",
  h2: "font-bold text-[8px]",
  h3: "font-bold sm:text-[32px] md:text-[34px] text-[36px]",
  h4: "font-bold sm:text-[24px] md:text-[26px] text-[28px]",
  h5: "font-bold sm:text-[20px] md:text-[22px] text-[24px]",
  h6: "text-[20px]",
  body1: "text-[18px]",
  body2: "text-[16px]",
  body3: "text-[14px]",
  body4: "font-medium text-[12px]",
  body5: "font-bold text-[10px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
