import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { state:'Error not page'});
    }, 4000);
  }, []);

  return <div>NotFound</div>;
};

export default NotFound;
