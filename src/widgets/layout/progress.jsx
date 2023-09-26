import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Typography, Card, Button, Alert } from "@material-tailwind/react";

import { useNavigate } from "react-router-dom";

export function Progress() {
  const navigate = useNavigate();

  const handleCancel = () => {
    // Perform your analyze function here
    // Once done, navigate to the Results page
    navigate("/dashboard/upload-audio");
  };

  return (
    <div className=" mt-12 flex w-full flex-col items-center gap-3 rounded-lg bg-white px-8 py-12 shadow-md">
      <Typography
        variant="h4"
        color="blue-gray"
        className="m-0 p-0 font-normal"
      >
        Sit Tight
      </Typography>
      <Typography variant="paragraph" color="blue-gray" className="mb-4">
        Analyzing your call
      </Typography>
      <CircularProgress className="mb-4" size={100} thickness={2} />
      <Button variant="gradient" ripple={true} type="sm" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  );
}

export default Progress;
