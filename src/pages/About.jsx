// export default function About() {
//   return (
//     <section style={{ padding: "40px" }}>
//       <h1>About Us</h1>
//       <p>
//         EduNext is a modern e-learning platform designed to help learners
//         upgrade their skills with industry-relevant courses.
//       </p>
//     </section>
//   );


export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <section className="about-hero">
        <h1>About EduNext </h1>
        <p>
          Building skills for the future through modern learning.
        </p>
      </section>

      {/* ABOUT CONTENT */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            EduLearn is a modern e-learning platform designed to help students
            and professionals gain practical, job-ready skills. Our courses
            are created by industry experts and focus on real-world learning.
          </p>

          <p>
            We believe education should be accessible, flexible, and
            career-focused. That’s why our platform is fully responsive and
            easy to use across all devices.
          </p>
        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Learning"
          />
        </div>
      </section>

      {/* STATS */}
      <section className="about-stats">
        <div>
          <h3>10K+</h3>
          <p>Students</p>
        </div>
        <div>
          <h3>20+</h3>
          <p>Courses</p>
        </div>
        <div>
          <h3>50+</h3>
          <p>Instructors</p>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          To empower learners with practical knowledge and career-ready
          skills through high-quality, affordable online education.
        </p>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Start Your Learning Journey Today</h2>
      </section>

    </div>
  );
}

