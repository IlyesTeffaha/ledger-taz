import React, { useState } from "react";

const Button = ({
  children,
  onClick,
  bgColor,
  borderRadius,
  width,
  height,
  textColor,
  padding,
  borderColor,
  borderWidth,
  disabled,
  hoverBackgroundColor,
  hoverTextColor,
  ...otherProps
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyles = {
    backgroundColor: isHovered ? hoverBackgroundColor : bgColor,
    borderRadius: borderRadius,
    width: width,
    height: height,
    color: isHovered ? hoverTextColor : textColor,
    padding: padding,
    outline: "0",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all 0.3s ease 0s",
    border: `${borderWidth}px solid ${borderColor}`,
    fontFamily: "inherit",
    overflowWrap: "break-word",
    float: "left",
    lineHeight: "36px",
    opacity: "0.9",
    textAlign: "center",
    whiteSpace: "nowrap",
  };

  return (
    <button
      style={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...otherProps}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
