import {QUERIES} from "breakpoints";
import styled from "styled-components";
import {ContraintedTitle, MaxWidthWrapper} from "../Education/Education";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

const Experiences: React.FC = () => {
    return (
        <Wrapper id='experiences'>
            <MaxWidthWrapper>
                <SlideUp>
                    <ContraintedTitle label="Experiences" side="left"/>
                </SlideUp>
                <Items>
                    <TimeLine/>
                    <SlideUp>
                        <Item>
                            <Image
                                src="images/paypal.png"
                                alt="PayPal"
                            ></Image>
                            <DotPrimary>
                                <DotCore/>
                            </DotPrimary>
                            <Connector/>
                            <Info>
                                <MobileImage
                                    src="images/paypal-braintree.png"
                                    alt="PayPal"
                                ></MobileImage>
                                <Time>Mar 2025 - Present</Time>
                                <Company>PayPal</Company>
                                <Role>Senior Software Engineer</Role>
                                <Description>

                                </Description>
                            </Info>
                        </Item>
                    </SlideUp>
                    <SlideUp>
                        <Item>
                            <Image
                                src="images/iqvia.png"
                                alt="IQVIA"
                            ></Image>
                            <DotPrimary>
                                <DotCore/>
                            </DotPrimary>
                            <Connector/>
                            <Info>
                                <MobileImage
                                    src="images/iqvia.png"
                                    alt="IQVIA"
                                ></MobileImage>
                                <Time>Jul 2024 - Mar 2025</Time>
                                <Company>IQVIA</Company>
                                <Role>Senior Software Engineer</Role>
                                <Description>

                                </Description>
                            </Info>
                        </Item>
                    </SlideUp>
                    <SlideUp>
                        <Item>
                            <Image
                                src="images/uis-logo1.png"
                                alt="UIS"
                            ></Image>
                            <DotPrimary>
                                <DotCore/>
                            </DotPrimary>
                            <Connector/>
                            <Info>
                                <MobileImage
                                    src="images/uis-logo1.png"
                                    alt="UIS"
                                ></MobileImage>
                                <Time>Jan 2023 - May 2024</Time>
                                <Company>University of Illinois, Information Technology Service </Company>
                                <Role>Software Engineer - Graduate Assistant</Role>
                                <Description>
                                  • Developed and deployed Dockerized Laravel app (Vue.js, MySQL, Docker) for global event scheduling, boosting scheduling
                                      meetings by 25% and optimizing advisor availability through improved accessibility and timezone management.<br></br>
                                  • Automated deployment & infrastructure setup with Shell Scripting, reducing avoid configuration errors and manual workload 40%.
                                </Description>
                            </Info>
                        </Item>
                    </SlideUp>

                    <Item>
                        <SlideUpFirm>
                            <Image
                                src="images/doit-logo.jpeg"
                                alt="Illinois Department of Innovation and Technology"
                            ></Image>
                            <Connector/>
                        </SlideUpFirm>
                        <Infos>
                            <SlideUp>
                                <Bullet>
                                    <DotPrimary>
                                        <DotCore/>
                                    </DotPrimary>
                                    <Info>
                                        <MobileImage
                                            src="images/doit-logo.jpeg"
                                            alt="Illinois Department of Innovation and Technology"
                                        ></MobileImage>
                                        <Time>May 2023 - July 2023</Time>
                                        <Company>Illinois Department of Innovation and Technology</Company>
                                        <Role>Data Engineer Intern</Role>
                                        <Description>
                                          • Spearheaded end-to-end development and maintenance of scalable ETL pipelines using Python and SQL, automating data
                                            ingestion and transformation from diverse sources into a centralized Power BI dashboard. Resulted in the elimination of
                                            manual processing for the procurement team and facilitated real-time tracking and visualization of processes.<br></br>
                                          • Partnered cross-functionally to gather data requirements, enhance database performance, and implement rigorous data quality
                                            checks. Delivered actionable insights through data visualization, boosting data accuracy and consistency by 20% for
                                            informed decision-making.
                                        </Description>
                                    </Info>
                                </Bullet>
                            </SlideUp>
                    </Infos>
                    </Item>
                    <SlideUp>
                        <Item>
                            <Image
                                src="images/seanergy-logo.jpeg"
                                alt="Seanergy Digital"
                            ></Image>
                            <DotPrimary>
                                <DotCore/>
                            </DotPrimary>
                            <Connector/>
                            <Info>
                                <MobileImage
                                    src="images/seanergy-logo.jpeg"
                                    alt="Seanergy Digital"
                                ></MobileImage>
                                <Time>Oct 2019 - Aug 2022</Time>
                                <Company>Seanergy Digital Services</Company>
                                <Role>Software Software Engineer</Role>
                                <Description>
                                  • Enhanced patient care by crafting a unified portal, boosting accessibility and efficiency 30% for clinics and support teams.
                                    Crafted with Ruby on Rails, MongoDB, DynamoDB, and AWS Lambda microservices for scalability and security.<br></br>
                                  • Architected secure and efficient data (medical records) import pipeline with 25% faster processing using AWS Lambda, Ruby on Rails,
                                    ETL and Redis. Enforced PHI anonymization for compliance, leveraging cron jobs for streamlined data ingestion.<br></br>
                                  • Revolutionized Population Insights module (Ruby on Rails, MongoDB, JavaScript, HTML, CSS, Docker) for 20% critical data
                                    visibility boost and 20% usability improvement, empowering healthcare professionals with efficient access.
                                </Description>
                            </Info>
                        </Item>
                    </SlideUp>
                    <SlideUp>
                        <Item>
                            <Image
                                src="images/hcah-logo.png"
                                alt="UIS"
                            ></Image>
                            <DotPrimary>
                                <DotCore/>
                            </DotPrimary>
                            <Connector/>
                            <Info>
                                <MobileImage
                                    src="images/hcah-logo.png"
                                    alt="UIS"
                                ></MobileImage>
                                <Time>Oct 2018 - Oct 2019</Time>
                                <Company>Healthcare At Home</Company>
                                <Role>Software Engineer</Role>
                                <Description>
                                  • Designed and launched marketing campaign portal (Ruby on Rails, MongoDB, Mailchimp, Redis, Sidekiq) with
                                    optimized user consent and account creation, boosting platform signups by 15%.<br></br>
                                  • Built a scalable payment infrastructure (Ruby on Rails, MongoDB, JavaScript) with integrated payment
                                    gateways (Paytm, CCAvenue) for seamless self-service invoices and online payments, resulting in a 20%
                                    uplift in timely payments.
                                </Description>
                            </Info>
                        </Item>
                    </SlideUp>

                    <Item>
                        <SlideUpFirm>
                            <Image
                                src="images/mobiloitte-logo.png"
                                alt="Mobiloitte Technologies"
                            ></Image>
                            <Connector/>
                        </SlideUpFirm>
                        <Infos>
                            <SlideUp>
                                <Bullet>
                                    <DotPrimary>
                                        <DotCore/>
                                    </DotPrimary>
                                    <Info>
                                        <MobileImage
                                            src="images/mobiloitte-logo.png"
                                            alt="Mobiloitte Technologies"
                                        ></MobileImage>
                                        <Time>Aug 2015 - Oct 2018</Time>
                                        <Company>Mobiloitte technologies</Company>
                                        <Role>Software Engineer</Role>
                                        <Description>
                                          • Architected and deployed advanced sales analytics dashboard (Python, PostgreSQL, JavaScript, CSS, HTML)
                                            with AWS cloud integration (EC2, S3, Lambda) for 25% improvement in data-driven insights and revenue growth.<br></br>
                                          • Implemented a scalable live streaming platform with real-time audience engagement features (Wowza, Wirecast,
                                            WebSocket, Ruby on Rails, Sidekiq, Redis, Google Firebase) and cloud infrastructure (AWS EC2, S3) exceeding user
                                            engagement targets by 30%.
                                        </Description>
                                    </Info>
                                </Bullet>
                            </SlideUp>
                            <SlideUp>
                    </SlideUp>
                    </Infos>
                    </Item>
                </Items>
            </MaxWidthWrapper>
        </Wrapper>
    );
};

export const Role = styled.h4`
  color: ${({theme}) => theme.colors.primary};
  font-weight: 400;
  font-size: calc(14 / 16 * 1rem);
  margin-bottom: 8px;

  ${QUERIES.tabletAndUp} {
    font-size: calc(16 / 16 * 1rem);
  }

  ${QUERIES.desktopAndUp} {
    font-size: calc(18 / 16 * 1rem);
  }
`;

const Items = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 64px;

  ${QUERIES.tabletAndUp} {
    gap: 80px;
  }
`;

const SlideUpFirm = styled(SlideUp)`
  flex-shrink: 0;
`;

const Item = styled.div`
  display: flex;
  align-items: top;
  position: relative;
`;

const TimeLine = styled.div`
  position: absolute;
  top: 0;
  transform: translate(-50%, 0);
  width: 1px;
  height: 100%;
  background-color: ${({theme}) => theme.colors.text.light};

  left: 24px;

  ${QUERIES.tabletAndUp} {
    left: 264px;
  }

  ${QUERIES.desktopAndUp} {
    left: 296px;
  }
`;

const DotPrimary = styled.div`
  height: 32px;
  width: 32px;
  border: 1px solid ${({theme}) => theme.colors.text.light};
  outline: 1px ${({theme}) => theme.colors.text.light} solid;
  outline-offset: 8px;
  border-radius: 50%;
  position: relative;
  flex-shrink: 0;

  margin: 8px;
  margin-top: 32px;
  margin-right: 24px;

  ${QUERIES.tabletAndUp} {
    margin: 84px 48px;
  }

  ${QUERIES.desktopAndUp} {
    margin: 84px 80px;
  }
`;

const DotSecondary = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  border: 1px solid ${({theme}) => theme.colors.text.light};

  position: relative;
  flex-shrink: 0;

  margin: 8px;
  margin-top: 32px;
  margin-right: 24px;

  ${QUERIES.tabletAndUp} {
    margin: auto 48px;
  }

  ${QUERIES.desktopAndUp} {
    margin: auto 80px;
  }
`;

const Connector = styled.div`
  position: absolute;
  height: 1px;
  background-color: ${({theme}) => theme.colors.primary};
  width: 32px;
  left: 32px;
  top: 48px;

  ${QUERIES.tabletAndUp} {
    top: 100px;
    left: 200px;
    width: 64px;
  }

  ${QUERIES.desktopAndUp} {
    width: 96px;
  }
`;

const Bullet = styled.div`
  display: flex;
  align-items: top;
  position: relative;
`;

const DotCore = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.primary};
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 32px;

  ${QUERIES.tabletAndUp} {
    gap: 40px;
  }
`;

const Info = styled.div``;

const Time = styled.p`
  font-weight: 400;
  color: ${({theme}) => theme.colors.text.light};
  text-transform: uppercase;
  font-size: calc(12 / 16 * 1rem);
`;

const Description = styled.p`
  font-weight: 400;
  max-width: 650px;
`;

export const Company = styled.h4`
  font-size: calc(21 / 16 * 1rem);

  ${QUERIES.tabletAndUp} {
    font-size: calc(24 / 16 * 1rem);
  }

  ${QUERIES.desktopAndUp} {
    font-size: calc(28 / 16 * 1rem);
  }
`;

const Wrapper = styled.div`
  background-color: ${({theme}) => theme.colors.background.dark};
  padding: 32px 32px;
  display: flex;
  flex-direction: column;
  gap: 64px;

  ${QUERIES.tabletAndUp} {
    padding: 64px 64px;
  }

  ${QUERIES.desktopAndUp} {
    gap: 32px;
  }
`;

const Image = styled.img`
  display: none;

  ${QUERIES.tabletAndUp} {
    display: initial;
  }

  height: 200px;
  width: 200px;
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.colors.primary};
`;

const MobileImage = styled.img`
  display: initial;

  ${QUERIES.tabletAndUp} {
    display: none;
  }

  height: 100px;
  width: 100px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.colors.primary};
`;

const Title = styled(SectionTitle)``;
export default Experiences;
