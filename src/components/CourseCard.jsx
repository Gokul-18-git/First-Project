export default function CourseCard({ course }) {
  return (
    <div className="course-card">
      <h3>{course.title}</h3>
      <p>{course.desc}</p>
      <span>{course.price}</span>
    </div>
  );
}
