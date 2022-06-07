import React from "react";
import Box from "@mui/material/Box";
import Layout from "./Layout";
//import Grid from "@mui/material/Grid";
//import { Button, Typography } from "@mui/material";

export default function Score() {
  return (
    <section className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Layout>
        <div
          className="bg-white align-items-center  justify-content-center h-md-75"
          style={{
            minHeight: "85vh",
            width: "95%",
            borderRadius: "10px",
            boxShadow:
              "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
          }}
        >
          <div className="text-center pt-4">
            <b>
              <h2>Score</h2>
            </b>
          </div>
          <div className="row m-md-5">
            <div className="col-md-6">
              <Box
                component="img"
                sx={{
                  //height: 400,
                  width: 600,
                  // maxHeight: { xs: 233, md: 167, lg: 500 },
                  // maxWidth: { xs: 350, md: 250, lg: 500 },
                }}
                alt="The house from the offer."
                src="https://img.freepik.com/free-vector/grades-concept-illustration_114360-628.jpg?w=996&t=st=1654146029~exp=1654146629~hmac=075ffe1c34133142e97c83e31e9d9eb4fa80937baeca5086db1a552e4ffc03fb"
              />
            </div>
            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
              <h4>Your Score is 45</h4>
              <br />
              <h4>
                You are a <b> Challenger!🎖</b>
              </h4>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
