import { React } from "react";
import "./style.css";
import { Footer } from "./footer";
export function Home() {
  return (
    <div>
      <div className="homeSection">
        <h1 className=" dark white dib ma0">
          Better Solution for your
          <br />
          professional Growth
        </h1>
        <p>
          <span>
            <em>
              <strong className="dark white dib">
                We give direction to your dreams!!
              </strong>
            </em>
          </span>
        </p>
        <p>
          <span>
            <em className="textdec dark white dib  ">
              We are a team of certified and talented designers, tailoring your
              resume & all such designing needs, providing you better solutions
              for your brand, along with the best interview preparation
              techniques/ career counselling sessions in the market.{" "}
            </em>
          </span>
        </p>
      </div>
      <div className="section2">
        <div>
          <h2 className=" pl5 underline">Mission</h2>
        </div>
        <p className="pl5 pr5">
          Our motto is to provide a digital platform to Job Seekers (fresher's
          and experienced), Schools, Colleges, Enterprises, etc. where they can
          get their designing done for certificates, social media accounts,
          report cards, resumes and cover letters, etc. at the nominal fee
          charged for the service.
        </p>
        <div>
          <h2 className=" pl5 underline">Vision-</h2>
        </div>
        <p className="pl5 pr5">
          Our vision involves the digitalization of all kinds of designing works
          in education sectors, enterprises and for job seekers through a single
          medium channel. In this fast paced era, our professionals are
          commended to provide best services digitally
        </p>
        <div className="pt4">
          <h2 className=" pl5 underline">From the founder's desk...</h2>
        </div>
        <em className="pl5 pr5">
          <p className="ttu tracked pl5">
            "THERE ARE NO SECRETS TO SUCCESS. IT IS THE RESULT OF PREPARATION,
            HARD WORK, AND LEARNING FROM FAILURE." -Colin Powell
          </p>
          <p>
            I feel immensely glorified in sharing my experience and endeavors
            with all our clients who have entrusted their time as well as faith
            on InterSume. When I started this company, I had a dream of making
            it unique rather than big, and I believed it would come true, with
            the right team and earnest efforts. The journey from the beginning
            till date has strengthened the foundation of the company by leaps
            and bounds.
          </p>
          <p>
            Our company's goal for all peers / enterprises is to not only grow,
            but also to believe that "anything is possible...that the
            inspiration to dream and to achieve is unlimited." The recipe for
            success in any business and life; is passion, and continuous
            self-development initiatives. Team InterSume makes sure that we
            sustain the quality and commitment with the services we offer. The
            company was founded for the sole purpose of providing applicable yet
            affordable solutions to our customers thus creating opportunities
            for employment.
          </p>
          <p>
            We are obligated to provide honest, ethical and professional
            dealings with our customers, employees, and also with the other
            instituitions who are connected with us. I would like to thank all
            for their committed and dedicated efforts contributed towards the
            achievement of the company's goals. It's time to commemorate our
            glory, struggle, our associations and our values with great pride
            and happiness. I am confident that we will continue to exceed the
            expectations, deliver value to our prestigious customers and expand
            our foothold into other domains and geographies.
          </p>
          <p className="pt6">Mr. Shashank Pandey</p>
          <p>Founder</p>
          <p>InterSume</p>
        </em>
        <Footer />
      </div>
    </div>
  );
}
