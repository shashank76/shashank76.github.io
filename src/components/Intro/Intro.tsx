import Button from "@/components/Button";
import { QUERIES } from "breakpoints";
import styled from "styled-components";
import Highlight from "../Highlight";
import Link from "../Link";

const Intro = () => {
    const scrollToContact = () => {
        const contact = document.getElementById("contact");
        contact!.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <ContentWrapper>
            <Text>
                <Highlight>Hi, my name is</Highlight>
            </Text>
            <Name>Shashank Tripathi</Name>
            <SubText></SubText>
            <Text>
                With over 7 years of expertise in full-stack development, CI/CD, cloud infrastructure, machine learning, data engineering & visualization, and automation,
                I hold a Master's degree in Computer Science from the {" "}
                <Link
                    href="https://www.uis.edu/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Highlight>University of Illinois at Springfield.</Highlight>
                </Link>
            </Text>
            <CallToAction onClick={scrollToContact}>Get In Touch</CallToAction>
        </ContentWrapper>
    );
};

const ContentWrapper = styled.div`
    align-self: center;
    max-width: 80%;
    min-height: calc(100vh - 150px);
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 2;
    pointer-events: none;
`;

const Name = styled.h2`
    white-space: nowrap;
    font-size: calc(35 / 16 * 1rem);
    margin-bottom: -16px;

    ${QUERIES.tabletAndUp} {
        font-size: calc(64 / 16 * 1rem);
        margin-bottom: -32px;
    }

    ${QUERIES.desktopAndUp} {
        font-size: calc(80 / 16 * 1rem);
        margin-bottom: -32px;
    }
`;

const SubText = styled.h3`
    color: ${({ theme }) => theme.colors.text.light};
    font-size: calc(35 / 32 * 1rem);
    margin-bottom: 24px;

    ${QUERIES.tabletAndUp} {
        font-size: calc(64 / 16 * 1rem);
    }

    ${QUERIES.desktopAndUp} {
        font-size: calc(80 / 16 * 1rem);
    }
`;

const Text = styled.p`
    color: ${({ theme }) => theme.colors.text.regular};
    font-weight: 400;
    margin-bottom: -4px;

    ${QUERIES.tabletAndUp} {
        margin-bottom: -8px;
    }
`;

const CallToAction = styled(Button)`
    margin-top: 32px;
    pointer-events: all;
`;

export default Intro;
