
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h3>EduLearn</h3>
          <p>
            Learn modern skills online with expert-led courses and
            career-focused programs.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
             <li><a href="/courses">Courses</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div>
          <h3>Support</h3>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h3>Follow Us</h3>
          <div className="footer-social">
            <a href="#"><i class="fa-brands fa-facebook"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
            <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} EduLearn. All rights reserved.
      </div>
    </footer>
  );
}
