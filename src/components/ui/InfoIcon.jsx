import * as React from "react";

const InfoIcon = ({ icon, info, iconClassName = "", infoClassName = "" }) => (
  <div className="flex flex-col items-center">
    {React.cloneElement(icon, {
      className: iconClassName,
      width: "20px",
      height: "20px",
    })}
    <p className={infoClassName}>{info}</p>
  </div>
);

export default InfoIcon;
