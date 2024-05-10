import Button from "@/components/Button/Button";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import {MIN_WIDTH, QUERIES} from "breakpoints";
import styled from "styled-components";
import SlideUp from "../SlideUp";

export interface IProps {
    delegated?: any;
    theme: "dark" | "light";
}

const About: React.FC<React.PropsWithChildren<IProps>> = ({
                                                              children,
                                                              theme,
                                                              ...delegated
                                                          }) => {
    const downloadResume = () => {
        window.open("/resume", "_blank");
    };

    const aboutUrl =
        theme === "light" ? "images/profile_image.jpg" : "images/profile_image.jpg";
    return (
        <Wrapper {...delegated} id="about">
            <AboutMe>
                <SlideUp>
                    <SectionTitle label={"About Me "} side={"left"}/>
                </SlideUp>
                <SlideUp>
                    <Description>
                        Hi! My name is Shashank Tripathi. I attained my Master's in Computer Science from the University of Illinois in 2024.
                    </Description>
                </SlideUp>
                <SlideUp>
                    <Description>
                      I have<b> over 6 years of experience as a Software Engineer</b>, specializing in designing, developing, and deploying
                      scalable software and infrastructure systems. My proficiency spans a wide spectrum of technologies including <b> Python, Ruby on Rails,
											Vue.js, JavaScript, and shell scripting </b>, complemented by extensive experience in managing
											databases on AWS, particularly PostgreSQL and MongoDB. With a proven track record of
											collaborating with cross-functional Agile teams, I excel in implementing robust alerting
											and monitoring systems, ensuring compliance with CI/CD best practices, and leveraging Docker
											for efficient containerization. Whether building and deploying monolithic or microservices
											architectures,
                    </Description>
                </SlideUp>
                <SlideUp>
                    <Description>
                      I'm committed to continuous improvement and excellence in software engineering and data science
											driven by a passion for innovation and problem-solving.
                    </Description>
                </SlideUp>
                <SlideUp>
                    <Download onClick={downloadResume}>
                        Download Resume
                    </Download>
                </SlideUp>
            </AboutMe>
            <Picture>
                <Source media={MIN_WIDTH.desktop} srcSet={aboutUrl}/>
                <Source
                    media={MIN_WIDTH.tablet}
                    srcSet="images/profile_image.jpg"
                />
                <Image src={aboutUrl} alt="Shashank Tripathi"/>
            </Picture>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: grid;
  padding: 32px;
  padding-bottom: 0px;
  row-gap: 80px;
  grid-template-areas:
        "aboutme"
        "picture";

  ${QUERIES.tabletAndUp} {
    grid-template-areas: "picture aboutme";
    grid-template-columns: 1fr 1fr;
    column-gap: 0px;
    padding: 64px;
  }

  ${QUERIES.desktopAndUp} {
    column-gap: 80px;
    padding-bottom: 0px;
  }
`;

const AboutMe = styled.div`
  grid-area: aboutme;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 3px;

  ${QUERIES.tabletAndUp} {
    justify-self: start;
    max-width: min(400px, 100%);
  }
`;

const Description = styled.p`
  font-weight: 400;
`;

const Picture = styled.picture`
  grid-area: picture;
  justify-self: center;
  width: 300px;

  ${QUERIES.tabletAndUp} {
    width: min(50vw, 250px);
  }

  ${QUERIES.desktopAndUp} {
    justify-self: end;
    width: min(50vw, 500px);
  }
`;

const Source = styled.source``;

const Image = styled.img``;

const Download = styled(Button)`
  align-self: start;
  margin-top: 32px;
  margin-bottom: 8px;
`;

export default About;
