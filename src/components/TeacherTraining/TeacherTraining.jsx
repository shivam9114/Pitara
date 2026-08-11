import { useState } from "react";
import "./TeacherTraining.css";

import img1 from "../../assets/img/1.jpeg";
import img2 from "../../assets/img/2.avif";
import img3 from "../../assets/img/3.jpeg";

const courses = [
  {
    id: "01",
    title: "200-Hour Foundation",
    location: "Rishikesh",
    duration: "28 Days",
    months: "Feb + Sept",
    image: img1,
  },
  {
    id: "02",
    title: "300-Hour Advanced",
    location: "Kerala",
    duration: "35 Days",
    months: "March + Oct",
    image: img2,
  },
  {
    id: "03",
    title: "500-Hour Immersion",
    location: "Rishikesh + Kerala",
    duration: "10 Weeks",
    months: "Winter",
    image: img3,
  },
];

export default function TeacherTraining() {

    const [active, setActive] = useState(0);

    return (

        <section className="training">

            <div className="trainingContainer">

                <div className="trainingLeft">

                    <h2>
                        To learn <em>deeply</em>,
                        <br />
                        stay longer.
                    </h2>

                    <div className="courseList">

                        {courses.map((course,index)=>(

                            <div
                                key={course.id}
                                className={
                                    active===index
                                    ? "course active"
                                    : "course"
                                }
                                onMouseEnter={()=>setActive(index)}
                            >

                                <span>{course.id}</span>

                                <h3>{course.title}</h3>

                                <div className="meta">

                                    {course.location}

                                    <br/>

                                    {course.months}

                                </div>

                                <div className="days">

                                    {course.duration}

                                </div>

                                <div className="arrow">

                                    →

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                <div className="trainingRight">

                    <img
                        src={courses[active].image}
                        alt=""
                    />

                </div>

            </div>

        </section>

    );

}