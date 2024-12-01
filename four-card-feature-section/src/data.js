import supervisorImage from "../images/icon-supervisor.svg";
import teamImage from "../images/icon-team-builder.svg";
import karmaImage from "../images/icon-karma.svg";
import calculatorImage from "../images/icon-calculator.svg";

const feature = {
  title: "Reliable, efficient delivery",
  subtitle: "Powered by Technology",
  text: "Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful",
  cards: [
    {
      title: "Supervisor",
      text: "Monitors activity to identify project roadblocks",
      image: supervisorImage,
      color: "primary-cyan",
    },
    {
      title: "Team Builder",
      text: "Scans our talent network to create the optimal team for your project",
      image: teamImage,
      color: "primary-red",
    },
    {
      title: "Karma",
      text: "Regularly evaluates our talent to ensure quality",
      image: karmaImage,
      color: "primary-orange",
    },
    {
      title: "Calculator",
      text: "Uses data from past projects to provide better delivery estimates",
      image: calculatorImage,
      color: "primary-blue",
    },
  ],
};

export default feature;
