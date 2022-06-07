import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
//import video from "../images/agile.mp4";
import Layout from "./Layout";
import data from "./data.json";

export default function Player() {
  let { courseId, lessonId } = useParams();
  const [lessonsData, setLessonsData] = useState({});

  useEffect(() => {
    const course = data.find((course) => course.courseId == courseId);
    const lessons = course.lessons.find(
      (lesson) => lesson.lessonId === Number(lessonId),
    );
    setLessonsData(lessons);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            {lessonsData && (
              <div className="container d-flex flex-column p-md-4 p-3">
                <h3 className="m-0">{lessonsData.courseName}</h3>
                <hr></hr>
                <ReactPlayer
                  url={lessonsData.dataUrl}
                  muted={false}
                  volume={true}
                  playing={false}
                  controls={true}
                  width="100%"
                />
                <div className="d-flex row justify-content-between pt-3">
                  <div className="col-md-10">
                    <h5 className="m-0">{lessonsData.description}</h5>
                  </div>
                  <div className="col-md-2">
                    <p className="m-0 text-end">
                      <b>{lessonsData.duration}</b>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Layout>
      </section>
    </>
  );
}
