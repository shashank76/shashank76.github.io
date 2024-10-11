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
                      Hi, I’m Shashank Tripathi, a Master’s graduate in Computer Science from the University of Illinois. With over seven years of hands-on experience as a Software Engineer, I specialize in designing, developing, and deploying scalable software solutions and infrastructure systems.
                    </Description>
                </SlideUp>
                <SlideUp>
                    <Description>
                      My technical expertise covers a wide range of tools and technologies, including Python, Ruby on Rails, Vue.js, JavaScript, and shell scripting, with a strong emphasis on cloud platforms like AWS. I have extensive experience managing databases, particularly PostgreSQL and MongoDB, and am adept at working within Agile teams to build robust, scalable systems.
                    </Description>
                </SlideUp>
                <SlideUp>
                    <Description>
                      I excel at implementing comprehensive CI/CD pipelines, leveraging Docker for containerization, and developing both monolithic and microservices architectures. I’m also skilled at creating efficient alerting and monitoring systems to ensure system reliability and performance.
                    </Description>
                </SlideUp>
                <SlideUp>
                    <Description>
                      Driven by a passion for innovation and problem-solving, I’m committed to continuously improving my technical skills and delivering excellence in software engineering and data science.
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
