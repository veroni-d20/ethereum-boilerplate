/* eslint-disable no-unused-vars */
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { create } from "ipfs-http-client";
import Layout from "./Layout";

const client = create("https://ipfs.infura.io:5001/api/v0");

const Input = styled("input")({
  display: "none",
});

export default function Upload() {
  const [fileUrl, setFileUrl] = useState("");
  const [fileCid, setFileCid] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageCid, setImageCid] = useState("");
  const [courseName, setCourseName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseDuration, setCourseDuration] = useState("");

  async function createCourse() {
    const result = await client.add({
      name: courseName,
      description: courseDescription,
      Duration: courseDuration,
      image_CID: imageCid,
      video_CID: fileCid,
      imageUrl: imageUrl,
      videoUrl: fileUrl,
    });
    const url = `https://ipfs.infura.io/ipfs/${result.path}`;
    return result.cid.toString();
    // const receipt = await blockchain.contract.methods
    //   .addInstituteInfo(instituteName, instituteAddress)
    //   .send({
    //     from: blockchain.account,
    //   });
    // console.log(receipt);

    // Call API to create institute
    // history.push("/institute");
  }

  async function setVideoFile(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;

      console.log(added.cid.toString());
      return {
        url: url,
        cid: added.cid,
      };
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  return (
    <section className="d-flex flex-column align-items-center justify-content-center vh-100">
      <Layout>
        <div
          className="bg-white align-items-center justify-content-center h-md-75"
          style={{
            minHeight: "85vh",
            width: "95%",
            borderRadius: "10px",
            boxShadow:
              "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
          }}
        >
          <div className="container pt-4">
            <div className="text-center">
              <b>
                <h3>Upload Course</h3>
              </b>
              <Typography component="h1" variant="h6">
                Here's the right way to teach!
              </Typography>
            </div>

            <div className="d-flex justify-content-center flex-column container">
              <div className="d-flex justify-content-center p-2">
                <Box
                  sx={{
                    "& > :not(style)": { m: 1 },
                    letterSpacing: 15,
                    m: 1,
                  }}
                >
                  <div className="my-1 py-2 ">
                    <TextField
                      id="course-name"
                      label="Course name"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => setCourseName(e.target.value)}
                    />
                  </div>
                  <div className="my-1 py-2">
                    <TextField
                      id="outlined-multiline-static"
                      label="Course Description"
                      multiline
                      rows={4}
                      //placeholder="Course description"
                      onChange={(e) => {
                        setCourseDescription(e.target.value);
                        console.log(e.target.value);
                      }}
                      style={{
                        width: "75vw",
                      }}
                    />
                  </div>
                  <div className="my-1 py-2 ">
                    <TextField
                      id="course-duration"
                      label="Course duration"
                      variant="outlined"
                      fullWidth
                      onChange={(e) => {
                        setCourseDuration(e.target.value);
                        console.log(e.target.value);
                      }}
                    />
                  </div>
                </Box>
              </div>
              <div
                className="d-flex justify-content-center align-items-center p-2"
                sx={{ flexDirection: "row" }}
              >
                <Box sx={{ "& > :not(style)": { m: 1 } }}>
                  <label htmlFor="contained-button-file">
                    <Input
                      accept="video/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={(event) => {
                        let { url, cid } = setVideoFile(event);
                        setFileUrl(url);
                        setFileCid(cid);
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "5px",
                        backgroundColor: "#3b82f6",
                        maxHeight: "50px",
                        minHeight: "30px",
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#3b82f6",
                        },
                      }}
                      component="span"
                    >
                      Attach Video
                    </Button>
                  </label>
                  <label htmlFor="contained-button-image">
                    <Input
                      accept="image/*"
                      id="contained-button-image"
                      multiple
                      type="file"
                      onChange={(event) => {
                        let { url, cid } = setVideoFile(event);
                        setImageUrl(url);
                        setImageCid(cid);
                      }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: "5px",
                        backgroundColor: "#3b82f6",
                        maxHeight: "50px",
                        minHeight: "30px",
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#3b82f6",
                        },
                      }}
                      component="span"
                    >
                      Attach Image
                    </Button>
                  </label>
                  <Button
                    variant="contained"
                    component="span"
                    sx={{
                      borderRadius: "5px",
                      backgroundColor: "#3b82f6",
                      maxHeight: "50px",
                      minHeight: "30px",
                      "&:hover": {
                        backgroundColor: "#fff",
                        color: "#3b82f6",
                      },
                    }}
                    onClick={() => {
                      createCourse();
                    }}
                  >
                    Upload
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  );
}
