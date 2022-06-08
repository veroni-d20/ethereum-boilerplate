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
              my: 18,
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
          </Box>

          {/* </div> */}

          {/* <motion.div
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
                src="images/chameleon.png"
                style={{ height: "300px" }}
                alt="branding"
              />
            </motion.div> */}
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
            backgroundImage:
              "url(https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?w=900&t=st=1652125977~exp=1652126577~hmac=c2a18dc6516704bfaabe34170b7f416c2b3fed649808920cbbf298553f74d5f2)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}
