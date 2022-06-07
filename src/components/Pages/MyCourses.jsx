import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  CardMedia,
} from "@mui/material";
import Typography from "@mui/material/Typography";
//import data from "../data/courses.json";
import Layout from "./Layout";
import data from "./data.json";

export default function MyCourses() {
  // let navigate = useNavigate();
  //   const { Moralis, logout } = useMoralis();
  //   const logoutFn = async () => {
  //     await logout();
  //     window.localStorage.removeItem("connectorId");
  //     navigate("/");
  //   };

  const [lessonData, setLessonData] = useState([]);
  const { courseId } = useParams();

  useEffect(() => {
    const course = data.find((course) => course.courseId == courseId);
    setLessonData(course.lessons);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <h3 className="text-center pt-md-4">My Courses</h3>
          <div className="row m-2">
            {lessonData.length > 0 &&
              lessonData.map((lesson) => (
                <div className="col-md-6 col-lg-4 mb-3" key={lesson.lessonId}>
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
                        image={lesson.imageUrl}
                        alt="Agile Methodology"
                      />
                      <div className="d-flex justify-content-between pt-3">
                        <Typography
                          sx={{ fontSize: 20, fontWeight: "bold" }}
                          color="text.primary"
                          gutterBottom
                        >
                          {lesson.courseName}
                        </Typography>
                        <p className="m-0">
                          <b>{lesson.duration}</b>
                        </p>
                      </div>

                      <Typography color="text.secondary">
                        {lesson.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link
                        to={`/player/${courseId}/${lesson.lessonId}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button size="small" color="primary">
                          Go to course
                        </Button>
                      </Link>
                    </CardActions>
                  </Card>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </section>
  );
}
