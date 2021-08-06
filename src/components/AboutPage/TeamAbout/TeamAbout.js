import React from "react";
import "./TeamAbout.css";
// import team1 from '../../../img/team/team-1.jpg'
// import team2 from '../../../img/team/team-2.jpg'
// import team3 from '../../../img/team/team-3.jpg'
// import team4 from '../../../img/team/team-4.jpg'
import TeamAboutMember from "./TeamAboutMember";
import WebText from "../../../TextData";

const TeamAbout = () => {
  return (
    <section id="team" className="team">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>{WebText.aboutPage.teamAbout.title}</h2>
          <p>{WebText.aboutPage.teamAbout.description}</p>
        </div>

        <div className="row">
          {WebText.aboutPage.teamAbout.teamListData.map((member) => (
            <TeamAboutMember key={member.title} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamAbout;
