import React from "react";
import ShareYourMusic from "./shareYourMusic";
import ListenToMusic from "./listenToMusic";

function UdunkuluAbout(params) {
  return (
    <div className="gapping">
      <div className="container">
        <div className="jumbotron">
          <h1>A mini Music web App</h1>
          <p>I created this app for music streaming as a portfolio project</p>
          <p>There are two diffrent type of users; Listner and artist</p>
          <ShareYourMusic></ShareYourMusic>
          <ListenToMusic></ListenToMusic>
        </div>
      </div>
    </div>
  );
}

export default UdunkuluAbout;
