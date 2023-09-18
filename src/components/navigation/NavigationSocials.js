//import Linkedin from "../../assets/images/socials/linkedin-pink.svg";
import Github from "../../assets/images/socials/github-pink.svg";
import Codepen from "../../assets/images/socials/codepen-pink.svg";
import Skype from "../../assets/images/socials/skype-pink.svg";
const NavigationSocials = () => {
  return (
    <section className="social-media">
      {/* <a
        href="https://www.linkedin.com/in/catherinemitagvaria/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Linkedin} alt="linkedin" />
      </a> */}
      <a
        href="web.skype.com/live:.cid.53ca091db4e91087"
        target="_blank"
        rel="noreferrer"
      >
        <img src={Skype} alt="Skype" />
      </a>
      <a href="https://github.com/banjaminlee" target="_blank" rel="noreferrer">
        <img src={Github} alt="github" />
      </a>
      <a href="https://codepen.io/banjaminlee" target="_blank" rel="noreferrer">
        <img src={Codepen} alt="codepen" />
      </a>
    </section>
  );
};

export default NavigationSocials;
