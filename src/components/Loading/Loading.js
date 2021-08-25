import React, { Component } from "react";
import { LoopCircleLoading } from "react-loadingg";
import "./Loading.css";

const Container = () => {
  return (
    <div className="container-loading">
      <LoopCircleLoading color="cornflowerblue" />
    </div>
  );
};

export default Container;
