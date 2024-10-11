import ProjectDetails from "@/components/ProjectDetails";
import { QUERIES } from "breakpoints";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";
import { PROJECTLIST } from "./projectList";


const Project: React.FC = () => {
    return (
        <Wrapper id="projects">
            <MaxWidthWrapper>
                <SlideUp>
                    <ContraintedTitle label="Project" side="left" />
                </SlideUp>
                <ProjectDetails {...PROJECTLIST[0]} side="left" />
            </MaxWidthWrapper>
            <ProjectDetails {...PROJECTLIST[1]} side="right" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.background.dark};
    padding: 32px 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    ${QUERIES.tabletAndUp} {
        padding: 64px 64px;
    }
`;

export const ContraintedTitle = styled(SectionTitle)`
    width: 100%;
    margin-bottom: 32px;
    ${QUERIES.desktopAndUp} {
        max-width: 650px;
    }
`;

export const MaxWidthWrapper = styled.div`
    ${QUERIES.desktopAndUp} {
        max-width: max-content;
        align-self: center;
    }
`;

const Title = styled(SectionTitle)`
    margin-bottom: 32px;
`;

export default Project;
