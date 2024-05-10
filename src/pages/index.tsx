import About from "@/components/About";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Education from "@/components/Education";
import Email from "@/components/Email";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import Socials from "@/components/Socials";
import Splash from "@/components/Splash";
import Skills from "@/components/Skills";
import { useRef } from "react";
import styled from "styled-components";

export default function Home({
    scrollDirection,
    theme,
    toggleTheme,
}: {
    scrollDirection: "up" | "down" | undefined;
    theme: "light" | "dark";
    toggleTheme: () => void;
}) {
    const boundingRect = useRef<HTMLDivElement>(null);
    return (
        <>
            <Splash />
            <Socials />
            <Email />
            <Grid>
                <Header
                    theme={theme}
                    scrollDirection={scrollDirection}
                    toggleTheme={toggleTheme}
                />
                <CursorWrapper ref={boundingRect}>
                    <Cursor />
                    <Intro />
                </CursorWrapper>

                <About theme={theme} />
                <Experiences />
                <Skills />
                <Education />
                <Contact />
                <Footer />
            </Grid>
        </>
    );
}

const CursorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: ${({ theme }) => theme.colors.background};
`;

const Grid = styled.div`
    display: flex;
    flex-direction: column;
`;
