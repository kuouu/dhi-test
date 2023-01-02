import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder8: "rounded-radius8",
  CustomBorderTL16:
    "rounded-bl-[0] rounded-br-[0] rounded-tl-[16px] rounded-tr-[16px]",
  CustomBorderTL20:
    "rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px]",
  RoundedBorder4: "rounded-radius4",
};
const variants = {
  FillBlue600: "bg-blue_600 text-white_A700",
  FillBlue700: "bg-blue_700 text-white_A700",
  FillBlue100: "bg-blue_100",
  FillIndigo800: "bg-indigo_800 text-white_A700",
  FillWhiteA700: "bg-white_A700 text-indigo_800",
  OutlineGray401: "bg-white_A700 border border-gray_401 border-solid",
};
const sizes = {
  sm: "sm:p-[5px] md:p-[7px] p-[9px]",
  md: "md:p-[11px] p-[13px] sm:p-[8px]",
  lg: "md:p-[14px] p-[17px] sm:px-[15px] sm:py-[11px]",
  xl: "sm:p-[15px] md:p-[19px] p-[23px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder8",
    "CustomBorderTL16",
    "CustomBorderTL20",
    "RoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "FillBlue600",
    "FillBlue700",
    "FillBlue100",
    "FillIndigo800",
    "FillWhiteA700",
    "OutlineGray401",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder8",
  variant: "FillBlue600",
  size: "sm",
};

export { Button };
