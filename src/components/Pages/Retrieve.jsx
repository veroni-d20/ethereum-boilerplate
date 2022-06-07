import { useState } from "react";
// import {
//   Card,
//   CardActions,
//   CardContent,
//   Button,
//   CardMedia,
// } from "@mui/material";
// // import { Dialog, DialogContent, DialogContentText } from "@mui/material";
// import Typography from "@mui/material/Typography";
// import dummyData from "../data/courses.json";
import Layout from "./Layout";

export default function Retrieve() {
  //   const [open, setOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);
  //   const [data, setData] = useState([]);

  //   const handleClickOpen = async (id) => {
  //     // const userObject = new Moralis.Object.extend("_User");
  //     // jobApplication.equalTo(
  //     //   "ethAddress",
  //     //   "0x4a187a5a7d3cfa0f6e8e22295ef8b2404e77b556"
  //     // );Z
  //     // const userObject = Moralis.Object.extend("_User");
  //     // const user = new userObject();

  //     // user.add("courseId", id);
  //     // await user
  //     //   .save()
  //     //   .then(() => {
  //     //     setOpen(true);
  //     //   })
  //     //   .catch((error) => {
  //     //     console.log(error);
  //     //   });
  //     // setOpen(true);

  //     console.log(id);
  //     const query = new Moralis.Query("CourseDetails");
  //     const data = query.equalTo("objectId", id);
  //     console.log(data);

  //     const user = Moralis.User.current();
  //     user.set("courseID", data);
  //     user.save();
  //     console.log(user);
  //   };

  return (
    <section className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Layout>
        <div
          className="bg-white align-items-center justify-content-center h-md-75"
          style={{
            minHeight: "85vh",
            width: "100%",
            borderRadius: "10px",
            boxShadow:
              "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
          }}
        >
          <h3 className="text-center pt-4">Courses</h3>

          {loading ? (
            <div className="d-flex align-items-center mt-5 align-content-center justify-content-center">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              <div className="row">
                {/* {dummyData.map((e) => (
                <div className="col-md-6 col-lg-4 mb-3" key={e.objectId}>
                  <Card
                    sx={{
                      maxWidth: 450,
                      bgcolor: "#5cdab3",
                    }}
                  >
                    <CardContent>
                      <CardMedia
                        component="img"
                        height="120"
                        image={e.imageUrl}
                        alt={e.courseName}
                      />
                      <div className="d-flex justify-content-between pt-3">
                        <Typography
                          sx={{ fontSize: 20, fontWeight: "bold" }}
                          color="text.primary"
                          gutterBottom
                        >
                          {e.courseName}
                        </Typography>
                        <p className="m-0">
                          <b>{e.duration}</b> Weeks
                        </p>
                      </div>

                      <Typography color="text.secondary">
                        {e.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="small"
                        color="primary"
                        // onClick={() => {
                        //   handleClickOpen(e.objectId);
                        // }}
                      >
                        Buy course
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              ))} */}
              </div>
            </>
          )}

          {/* <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              sx={{ color: "#1e293b" }}
            >
              You have enrolled in the course successfully.✅
            </DialogContentText>
          </DialogContent>
        </Dialog> */}
        </div>
      </Layout>
    </section>
  );
}
