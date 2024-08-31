import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const useCourseDetails = () => {
  const { id } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const courseId = Number(id);
        const filteredCourse = data.topCourses.find(
          (course) => course.id === courseId
        );
        if (filteredCourse) {
          setCourseDetails(filteredCourse);
        } else {
          console.error("Course not found");
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchCourseDetails();
  }, [id]);

  return courseDetails;
};
