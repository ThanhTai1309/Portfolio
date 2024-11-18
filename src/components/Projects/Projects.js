import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import portfolio from "../../Assets/Projects/portfolio.png";
import hairsalonFE from "../../Assets/Projects/hairsalonFE.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hairsalonFE}
              isBlog={false}
              title="HairSalonBooking Front-End Project"
              description="Our platform allows users to easily book haircuts based on their preferred services and stylists, view ratings and reviews from other customers, and make secure online payments. It also features a management system for staff and payroll. Built with React.js and Vite.js on the front-end, and Node.js and Express.js on the back-end, the platform uses MySQL and PostgreSQL databases, secured by JSON Web Tokens (JWT), and deployed on Firebase, Azure, Supabase, and DigitalOcean."
              ghLink="https://github.com/HairSalonBooking/HairSalonBooking_FE"
              demoLink="https://hair-salon-vjp.azurewebsites.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hairsalonFE}
              isBlog={false}
              title="HairSalonBooking Back-End Project"
              description="Our platform allows users to easily book haircuts based on their preferred services and stylists, view ratings and reviews from other customers, and make secure online payments. It also features a management system for staff and payroll. Built with React.js and Vite.js on the front-end, and Node.js and Express.js on the back-end, the platform uses MySQL and PostgreSQL databases, secured by JSON Web Tokens (JWT), and deployed on Firebase, Azure, Supabase, and DigitalOcean."
              ghLink="https://github.com/devbaoo/Backend-HairSalonBooking"
              demoLink="https://oyster-app-pc2gd.ondigitalocean.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="I just completed and deployed my personal portfolio website with modern design and optimized user experience. The website is built using [technology you use such as HTML, TailwindCSS, JS, React...] and is where I showcase my skills, projects, and work style. Come visit to explore the journey and products I've made! 🌟"
              ghLink="https://github.com/ThanhTai1309/Portfolio"
              demoLink="https://dev-portfolio-fet29jmgi-thanhtai1309s-projects.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
