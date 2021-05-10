import { React } from "react";
import { Footer } from "./footer";
import { ServiceSection } from "./components/service-section";
import "./style.css";
export function OurServices() {
  const myFunction = function () {
    const coll = document.getElementsByClassName("collapsible");
    let i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }
  };

  return (
    <div>
      <div className="aboutSection1">
        <h1 className=" dark white dib ma0">Our Services</h1>
      </div>
      <div className="aboutSection2 ph6">
        <ServiceSection
          title=" Resume & Cover Letter Essentials"
          content={`Making a decision about getting help is tough?\nTake action now to get someone who is specialist in the field to help you. We will make it easy and worth, in getting you that new job you know you'd do better than anyone else. \n For the same, if you want your resume and cover letter to be written professionally for you and get it done in right manner?\nConsult us today!
          `}
        />
        <ServiceSection
          title="Job Services"
          content={`Work, learn and make your career from anywhere!!!\nIn today's environment, more businesses are employees are working remotely. To help, we <em>@InterSume</em>have gathered some job opportunities and resources for you to stay connected and productive, at the time of pandemic!.\nWORK FROM ANYWHERE!\nThese opportunities can be helpful for the ones in need and are currently looking for the job opportunities.\nGet a chance to grow your skills, and career with us <em>@InterSume</em> now! Build your career and get the exposure you need to succeed!\nAll it takes is one call.
          `}
        />
        <ServiceSection
          title={`Interview Help`}
          content={`There are mistakes from everyone at Interviews, either a fresher or experienced,and it is not easy to get rid of the mistakes as NO MAN IS PERFECT, BUT ofcourse we can avoid them. We are ambitious enough to win whatever we want and,<em>@InterSume</em>does exactly the same for you by providing you beneficial advices for Interview preparations to your resume creation.`}
        />
        <ServiceSection
          title={`Carrer Counselling`}
          content={`Pretend for a moment that you’re a job seeker. While browsing job ads, you find one that fits your profile. But what’s the work environment like at that company? Who will you be working with? And if you want to occasionally work from home, will you be able to? Is it the right field for you to proceed with?\nIf only you had the answers to these questions before applying.Wait… maybe you can find them yourself? So where do you look? The careers page, of course. Welcome<em>@InterSume<em>- The portal that connects employers with potential employees,the place to look for those answers.`}
        />
        <ServiceSection
          title={`Logo/Poster Designing`}
          content={`Why Branding\nWith the perfect branding/ digital advertisement quality and quantity of your product or service, it will do reach the people in the word of mouth thereby, giving your brand a recognition it deserves!\nWe <em>@InterSume</em>, thus, provide all the branding solutions-Simple /Customized digital marketing strategies (like- logos/posters/ advertisments, etc.) tailored just for your needs. We have 1000+ different professionally-designed logo/poster templates to choose from. On-time delivery with excellent customer care,InterSume promises you quality service.`}
        />
        <ServiceSection title={`Question Paper Designing`}
        content={`Designing tests and paper questions for various big and small institutions with premium quality work.`}
        />
        <ServiceSection title={`Social Media/ Advertisement Posts`}
        content={`Why Branding?\nWith the perfect branding/ digital advertisement quality and quantity of your product or service, it will do reach the people in the word of mouth thereby, giving your brand a recognition it deserves! \nWe <em>@InterSume</em>,thus,provide all the branding solutions-Simple/ Customized digital marketing strategies tailored just for your needs. We have 1000+ different professionally-designed logo/poster templates to choose from. On-time delivery with excellent customer care, InterSume promises you quality service.`}
        />
        <ServiceSection title="Job Portal Management and Training"content={` We at InterSume are working together as a team of professionals,who focuses and works with the right set of techniques required to handle the job portals. Handling the job portals (like- naukri,indeed, linkedin, etc.) requires utmost knowledge and proficiency.\n We, as a team, make sure that we land you to your desired job either by managing your profile; Managed by one of our executives,or by giving you proper trainings on how to manage your profile effectively and accurately that can land you into the jobs/interview calls from job recruiters within a short period of time.`}
        />
        <ServiceSection title="Certificates and Other Designing" content={` We use a rich set of fully-customizable designs/ templates to build attractive certificates in no time. Approach us <em>@InterSume </em>for any kind of designing needs, we make it easy for you by creating exactly the same design you want.`}
        />
        <Footer/>
      </div>
      
    </div>
  );
}


