import { FaGithub } from "react-icons/fa";
import { QUERIES } from "breakpoints";
import Tilt from "react-parallax-tilt";
import styled from "styled-components";
import SlideUp from "../SlideUp";

export interface IProps {
    name: string;
    description: string;
    techstacks: string[];
    github: string;
    imgSrc: string;
    side: "left" | "right";
}

const ProjectDetails: React.FC<IProps> = ({
    name,
    description,
    techstacks,
    github,
    imgSrc,
    side,
    ...delegated
}) => {

    return (
        <Wrapper side={side} {...delegated}>
            <SlideUp>
                <Stretch>
                    <Tilt
                        tiltMaxAngleX={3}
                        tiltMaxAngleY={3}
                        glareEnable={true}
                        glarePosition="top"
                        glareMaxOpacity={0.3}
                        glareBorderRadius="8px"
                    >
                        <Image src={imgSrc} alt={name} />
                    </Tilt>
                </Stretch>
            </SlideUp>
            <Info side={side}>
                <SlideUp delay={200}>
                </SlideUp>
                <SlideUp delay={200}>
                    <Name side={side}>{name}</Name>
                </SlideUp>
                <SlideUp delay={200}>
                    <Description side={side}>{description}</Description>
                </SlideUp>
                <SlideUp delay={200}>
                    <Data side={side}>
                        <TechStack>
                            {techstacks.join(', ')}
                        </TechStack>
                        <GitHub>
                            <HoverIconLink href={github} target="_blank">
                                <FaGithub />
                            </HoverIconLink>
                        </GitHub>
                    </Data>
                </SlideUp>
            </Info>
        </Wrapper>
    );
};

interface StyledProps {
    side: "left" | "right";
}

export const Wrapper = styled.div<StyledProps>`
    display: flex;
    isolation: isolate;
    justify-content: center;
    flex-direction: column;

    ${QUERIES.desktopAndUp} {
        flex-direction: ${({ side }) =>
            side === "left" ? "row" : "row-reverse"};
    }
`;

export const Stretch = styled.div`

    ${QUERIES.desktopAndUp} {
        margin-left: 0;
        margin-right: 0;
    }
`;

export const Image = styled.img`
    width: 100%;
    max-width: 650px;
    max-height: 500px;
    object-fit: cover;
    z-index: 1;
    line-height: 0;

    ${QUERIES.tabletAndUp} {
        display: none;
    }

    ${QUERIES.desktopAndUp} {
        display: block;
        border-radius: 8px;
    }
`;

const SmallImage = styled.img`
    display: none;
    height: 120px;
    width: 120px;
    position: absolute;
    right: 32px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 8px;

    ${QUERIES.tabletAndUp} {
        display: block;
    }

    ${QUERIES.desktopAndUp} {
        display: none;
    }
`;

export const Info = styled.div<StyledProps>`
    display: flex;
    flex-direction: column;
    z-index: 2;
    position: relative;

    ${QUERIES.desktopAndUp} {
        width: 500px;
        align-items: ${({ side }) =>
            side === "left" ? "flex-end" : "flex-start"};

        margin-top: auto;
        margin-bottom: auto;
    }
`;

export const Name = styled.h4<StyledProps>`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
    font-size: calc(14 / 16 * 1rem);
    margin-top: 16px;

    ${QUERIES.tabletAndUp} {
        margin-left: 32px;
        margin-right: 32px;
        font-size: calc(16 / 16 * 1rem);
    }

    ${QUERIES.desktopAndUp} {
        font-size: calc(18 / 16 * 1rem);
        margin-left: ${({ side }) => (side === "left" ? "0" : "32px")};
        margin-right: ${({ side }) => (side === "right" ? "0" : "32px")};
    }
`;

export const Description = styled.h4<StyledProps>`
    margin-bottom: 16px;
    font-size: calc(16 / 16 * 1rem);

    ${QUERIES.tabletAndUp} {
        margin-left: 32px;
        margin-right: 32px;
        font-size: calc(16 / 16 * 1rem);
    }

    ${QUERIES.desktopAndUp} {
        font-size: calc(16 / 16 * 1rem);
        margin-left: ${({ side }) => (side === "left" ? "0" : "32px")};
        margin-right: ${({ side }) => (side === "right" ? "0" : "32px")};
    }
`;


export const Data = styled.ul<StyledProps>`
    margin-top: 16px;
    display: flex;
    gap: 64px;
    font-size: calc(16 / 16 * 1rem);

    ${QUERIES.tabletAndUp} {
        margin-left: 32px;
    }

    ${QUERIES.desktopAndUp} {
        margin-left: ${({ side }) => (side === "left" ? "0" : "32px")};
        margin-right: ${({ side }) => (side === "right" ? "0" : "32px")};
        align-self: ${({ side }) =>
            side === "left" ? "flex-end" : "flex-start"};
    }
`;

export const HoverIconLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.light};
    cursor: pointer;

    & > * {
        transition: var(--transition);
    }

    &:hover > * {
        transform: scale(1.2) translateY(-4px);
        color: ${({ theme }) => theme.colors.primary};
    }
`;

const TechStack = styled.p`
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
`;

const GitHub = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    margin: 16px;
`;

export default ProjectDetails;