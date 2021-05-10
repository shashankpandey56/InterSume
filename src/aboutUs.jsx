import { React } from "react";
import { Footer } from "./footer";
import "./style.css";
export function About() {
  return (
    <div>
      <div className="aboutSection1">
        <h1 className=" dark white dib ma0">About Us</h1>
      </div>
      <div className="aboutSection2 pl5 pr5">
        <em className="pt4">
          <p>
            A reliable and motivated platform, with exceptional training in
            dealing with its clients and their requirements. Well- developed
            skills in creating and designing of various services like-
            Schools/Events Logos, Posters, Milestones, Certificates,
            Professional Resumes, Curriculum Vitaes, Cover letters, Portfolios,
            Brochures and much more. Proven strengths in organizing, multi-
            tasking and prioritizing heavy workloads with deadlines.
          </p>
          <p className="pt4">
            We also provide interview preparations including all the right set
            of techniques and skills required, in order to ace the interview.
            Get an in-person consultation with one of our interview experts and
            learn how to prepare for the most common interview questions to how
            to answer some of the most difficult interview questions, or even
            what to wear.
          </p>
          <p className="pt4">We can help!!</p>
          <p className="pt4 underline">
            Our officials are trained and certified in the following programs-
          </p>
          <ul className="pt4">
            <li>Interview Skills</li>
            <li>Communication Skills</li>
            <li>Soft Skills</li>
            <li>Telephone Etiquettes</li>
            <li>Business Etiquettes</li>
            <li>Email Etiquettes</li>
            <li>Resume & Cover Letter Skills</li>
            <li>Digital Designing, etc</li>
          </ul>
        </em>
      </div>
      <Footer />
    </div>
  );
}
