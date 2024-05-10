import { QUERIES } from "breakpoints";
import styled from "styled-components";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";
import { SKILLLIST } from "./skillList";

const Technical: React.FC = () => {
    const sortedSkills = SKILLLIST.sort((a, b) => b.level - a.level);
    return (
        <Wrapper id="skills">
            <SlideUp>
                <SlideUp>
                    <TechnicalTitleDesktop
                        label="Technical Skills"
                        side="right"
                    />
                </SlideUp>
                <Display>
                    <SkillList>
                        <SlideUp>
                            <Options>
                                {sortedSkills.map((skill, index) => (
                                    <Option active key={index}>
                                        {skill.name}
                                    </Option>
                                ))}
                            </Options>
                        </SlideUp>
                    </SkillList>
                </Display>
            </SlideUp>

        </Wrapper>
    );
};

interface OptionProps {
    active: boolean;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background.dark};
    padding: 32px;

    ${QUERIES.tabletAndUp} {
        padding: 64px;
    }

    ${QUERIES.desktopAndUp} {
        flex-direction: row;
    }
`;

const TechnicalTitle = styled(SectionTitle)`
    width: 100%;
    margin-bottom: 32px;
`;

const TechnicalTitleDesktop = styled(TechnicalTitle)`
    display: none;

    ${QUERIES.desktopAndUp} {
        display: flex;
    }
`;


const Display = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: ${({ theme }) => theme.colors.background.light};




    border-radius: 0px;

    ${QUERIES.tabletAndUp} {
        margin-left: 0;
        margin-right: 0;
        border-radius: 8px;
    }

    ${QUERIES.desktopAndUp} {
        max-width: 800px;
        padding-left: 12px;
        padding: 16px;
    }
`;

const Title = styled.h3`
    color: ${({ theme }) => theme.colors.primary};
`;

const Content = styled.p`
    font-weight: 400;
`;

const Level = styled.div`
    display: flex;
    margin-top: auto;
    gap: 8px;
`;

const SkillList = styled.div`
    margin-top: 4px;
    margin-bottom: 16px;
`;

const Options = styled.ul`
    gap: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    ${QUERIES.desktopAndUp} {
        justify-content: flex-end;
    }
`;

const Option = styled.li<OptionProps>`
    cursor: pointer;
    background-color: ${({ theme, active }) =>
        active ? theme.colors.primary : theme.colors.text.light};
    color: ${({ theme }) => theme.colors.background.dark};
    text-align: center;
    padding: 4px 12px;
    font-size: calc(12 / 16 * 1rem);
    transition: var(--transition);
    border-radius: 2px;

    ${QUERIES.tabletAndUp} {
        padding: 4px 32px;
        font-size: calc(14 / 16 * 1rem);
    }
`;

const Star = styled.div`
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    margin-right: 4px;
`;

const EmptyStar = styled(Star)`
    background-color: ${({ theme }) => theme.colors.text.light};
`;

export default Technical;
