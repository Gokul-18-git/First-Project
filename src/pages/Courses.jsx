// import courses from "../data/courses";
// import CourseCard from "../components/CourseCard";

// export default function Courses() {
//   return (
//     <section className="courses-page">
//       <h2>Popular Courses</h2>
//       <div className="course-grid">
//         {courses.map(c => (
//           <CourseCard key={c.id} course={c} />
//         ))}
//       </div>
//     </section>
//   );
// }

import coursesData from "../data/courses.json";

export default function Courses() {
  return (
    <div className="courses-page">
      <h1>Our Courses</h1>

      <div className="course-grid">
        {coursesData.map(course => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p><strong>Price:</strong> {course.price}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>Level:</strong> {course.level}</p>
            <button>Enroll Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

