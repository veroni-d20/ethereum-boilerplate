import React from "react";
import ReactPlayer from "react-player";
//import { useNavigate } from "react-router-dom";
//import video from "../images/agile.mp4";
import Layout from "./Layout";

export default function Player() {
  //   let navigate = useNavigate();

  return (
    <>
      <section className="d-flex flex-column align-items-center justify-content-center vh-100">
        <Layout>
          <div
            className="bg-white align-items-center mt-md-2 justify-content-center h-md-75"
            style={{
              minHeight: "85vh",
              width: "100%",
              borderRadius: "10px",
              boxShadow:
                "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
            }}
          >
            <div className="container d-flex flex-column p-md-4 p-3">
              <h3 className="m-0">Agile Methodology</h3>
              <hr></hr>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=KJYQiKHEmCE"
                muted={false}
                volume={true}
                playing={false}
                controls={true}
                width="100%"
              />
              <div className="d-flex row justify-content-between pt-3">
                <div className="col-md-10">
                  <h5 className="m-0">
                    This course will explore the history, approach, and
                    philosophy of Agile project management, including the Scrum
                    framework. You will learn how to differentiate and blend
                    Agile and other project management approaches.
                  </h5>
                </div>
                <div className="col-md-2">
                  <p className="m-0 text-end">
                    <b>4</b> Weeks
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </section>
    </>
  );
}
