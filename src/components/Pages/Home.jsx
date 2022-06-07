import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
//import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import {Img} from "/images/bglogin.jpg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
// import bg1 from "././bg1.jpg";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <b>
//         {/* <Link color="inherit" href="#"> */}
//         D-Learning &nbsp;
//         {/* </Link> */}
//       </b>
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          {/* <div className="row p-2">
            <div className="col-md-7 p-3"> */}
          <Box
            sx={{
              my: 5,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AnimatePresence>
              <motion.div
                id="page-content"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 20 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 2.5 }}
                className="container overflow-hidden"
                style={{ paddingTop: "65px" }}
              >
                <h1 className="text-dark  fw-normal" color="light">
                  Access your courses <br />
                  <span className="fw-bold text-primary">LMS</span>
                  <br />
                  on Web3.
                </h1>
                <div className="text-left py-3">
                  <Link
                    to="/allCourses"
                    className="btn btn-primary btn-lg h1 fw-bold text-white"
                  >
                    View all Courses
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                id="page-content"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 20 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 2.5 }}
                className="container overflow-hidden"
                style={{ paddingTop: "65px" }}
              >
                <div
                  className="col-md-9 p-5 bg-primary text-white "
                  style={{ height: "70vh", width: "100%" }}
                >
                  <h3
                    className="text-white fw-normal"
                    style={{ fontSize: "3rem" }}
                    color="light"
                  >
                    About <span className="fw-bold text-white">D</span> Learning
                    {/* <span className="fw-bold text-white">NFT</span> */}
                  </h3>
                  <h6
                    className="text-white fw-normal"
                    style={{ fontSize: "3rem" }}
                    color="light"
                  >
                    <span className="fw-bold text-white"> Diverse.</span>
                    <span className="fw-bold text-white">
                      Student Centered.
                    </span>
                    <span className="fw-bold text-white">Engaging.</span>
                  </h6>
                  <p className="fw-normal h4 mt-4 w-100">
                    <br />D Learning was created for making knowledge-sharing
                    easier. Typically, it offers a position to work with
                    students who are thousands of miles away. The functionality
                    of these platforms makes the learning process easier than
                    ever before. The Learning Management Systems can offer an
                    engaging customized learning experience for various sorts of
                    crowds, from undergrads to industry experts.{" "}
                  </p>
                  <div className="text-left justify-start align-items-start py-3">
                    <Link
                      to="/allCourses"
                      className="btn btn-primary bg-white btn-lg h1 fw-bold text-primary"
                    >
                      What's making you wait? <br /> Come show the students the
                      D-Learning World
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </Box>

          {/* </div> */}

          {/* {
            <motion.div
              whileHover={{
                x: -120,
                scale: 1.2,
                transition: { duration: 0.6 },
              }}
              whileTap={{ rotate: -360, transition: { duration: 0.6 } }}
              className="d-flex col-md-3"
            >
              <img
                className="no-drag"
                src="https://img.freepik.com/free-vector/cute-parrot-bird-branch-cartoon-animal-wildlife-icon-concept-isolated-flat-cartoon-style_138676-2176.jpg?t=st=1654625464~exp=1654626064~hmac=4152c6a44ba41e8ae62ff190850f82d48c69d8febfe4af157943286815b7d1f5&w=740"
                style={{ height: "300px" }}
                alt="branding"
              />
            </motion.div>
          } */}
          {/* </div> */}
          {/* <Box
            sx={{
              my: 18,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <b>
              <Typography component="h1" variant="h4">
                D LEARNING
              </Typography>
            </b>
            <br />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Typography>New learning everyday</Typography>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box> */}
        </Grid>{" "}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            // background: `url("${bg1}")no-repeat center/cover`,
            backgroundImage:
              "url(https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?w=996&t=st=1654628358~exp=1654628958~hmac=5459e42df06ade83883817b11e71f22c0b155ef2caa6a96bf7568e821b4bc0df)",
            backgroundRepeat: "cover",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "120vh",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
