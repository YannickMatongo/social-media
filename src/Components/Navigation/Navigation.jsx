import React from "react";
import { navigationMenu } from "./NavigationMenu";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Navigation = () => {
    const navigate=useNavigate();
  return (
    <div className="h-screen sticky top-0">
      <div>
        <div className="py_5">
            <img src="/logo.png" alt="" className="w-[80px] h-[80px]" />
        </div>
        <div className="space-y-6">
            {navigationMenu.map((item)=><div className="cursor-pointer flex space-x-3 items-center" onClick={() => item.title === "Profile" ? navigate(`/profile/${5}`) : navigate(item.path)}>
                {item.icon}
                <p className="text-xl" >{item.title}</p>
            </div>)}
        </div>
      </div>
      <div className="py-10">
        <Button
        sx={{ width:"100%", borderRadius: "29px", py: "15px", bgColor: '#1e88e5' }}
        variant="contained"
        >
            Tweet
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
