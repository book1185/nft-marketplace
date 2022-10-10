import { height } from "@mui/system";
import React from "react";
import img4 from "../../images/img4.png";

const RightInterface = () => {
  return (
    <div className="flex w-full pt-8 pb-8">
      <div
        style={{
          backgroundImage: "url(" + img4 + ")",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width:'100%',
          height:'100%'
        }}
      ></div>
    </div>
  );
};

export default RightInterface;
