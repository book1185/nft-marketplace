import { Checkbox, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import img1 from "../../images/img1.png";
import img2 from "../../images/img2.png";
import img3 from "../../images/img3.png";
import img5 from "../../images/img5.png";
const LoginField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
  },
});
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const LeftInterface = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [pass, setPass] = useState("");
  const [togglePass, setTogglePass] = useState(false);
  function removeEmail() {
    console.log("book");
  }

  return (
    <div className="flex w-full justify-between">
      <div className=" w-full h-screen flex flex-col justify-center">
        <div className="absolute top-10  flex items-center">
          <img src={img1} alt="" className="mr-3.5  cursor-pointer" />
          <div className=" text-base font-medium cursor-pointer">PNFT Market</div>
        </div>
        <div className="text-4xl font-extrabold mb-2">NFT Access</div>
        <div className="text-[#667085] mb-14">
          Please fill your detail to access your account.
        </div>
        <div className="flex flex-col relative">
          <div className="text-[#344054] mb-2 l">Email</div>
          <LoginField
            label=""
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          {emailAddress != "" && (
            <div>
              <img
                src={img2}
                alt=""
                className="absolute right-4 top-12 cursor-pointer"
                onClick={() => setEmailAddress("")}
              />
            </div>
          )}
        </div>
        <div className="flex flex-col relative">
          <div className="text-[#344054] mb-2 mt-5">Password</div>
          <LoginField
            label=""
            type={togglePass ? "text" : "password"}
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          {pass != "" && (
            <div>
              <img
                src={img3}
                alt=""
                className="absolute right-4 bottom-4 cursor-pointer"
                onClick={() => setTogglePass(!togglePass)}
              />
            </div>
          )}
        </div>
        <div className="flex mt-5 justify-between" >
        <div className="flex">
        <Checkbox
          className=""
            {...label}
            defaultChecked
            sx={{
              "&.Mui-checked": {
                color: "#000000",
              },
              "&.MuiButtonBase-root": {
                padding: 0,
              },
            }}
          />
          <div className="ml-2 text-[#344054]">Remember me</div>
        </div>
        <div className="text-[#5429FF] cursor-pointer">Forgot Password?</div>
        </div>
        <div className="bg-[#5429FF] py-3 flex flex-col justify-center items-center mt-8 rounded-lg cursor-pointer mb-4" >
          <div className="text-base text-white">Sign in</div>
        </div>
        <div className=" py-3 flex justify-center items-center rounded-lg cursor-pointer  border-solid border-2 border-[#D0D5DD]">
        <div><img src={img5} alt="" /></div>
        <div className="text-base ml-2">Sign in with Google</div>
        </div>
      </div>
      <div className="w-1/6"></div>
    </div>
  );
};

export default LeftInterface;
