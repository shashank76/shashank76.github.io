import GlobalStyles from "@/styles/globalStyles";
import ResetStyles from "@/styles/resetStyles";
import type {AppProps} from "next/app";
import Head from "next/head";
import {useEffect, useRef, useState} from "react";
import {ThemeProvider} from "styled-components";
import {DARK_THEME, LIGHT_THEME} from "theme";
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'

export default function App({Component, pageProps}: AppProps) {
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const [scrollDirection, setScrollDirection] = useState<string>();

    const [theme] = useState<"light" | "dark">("dark");

    const activeTheme = theme === "light" ? LIGHT_THEME : DARK_THEME;

    const ref = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        const scrollTop = ref.current?.scrollTop || 0;
        // only update if the scroll is more than 5px
        if (Math.abs(scrollTop - lastScrollTop) < 20) {
            return;
        }

        if (scrollTop > lastScrollTop) {
            setScrollDirection("down");
        } else {
            setScrollDirection("up");
        }
        setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    const debounce = (func: any, wait = 50, immediate = false) => {
        let timeout: any;
        return function () {
            // @ts-ignore
            let context = this,
                args = arguments;
            let later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };

            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    const [documentMounted, setDocumentMounted] = useState(false);
    // run after document mounted
    useEffect(() => {
        setDocumentMounted(true);
    }, []);

    if (documentMounted) {
        const body = document.querySelector("body");
        if (body) {
            body.style.backgroundColor = activeTheme.colors.background.regular;
            body.style.color = activeTheme.colors.text.regular;
        }
    }

    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            gtag.pageview(url);
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return () => {
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [router.events]);

    return (
        <div className="App" onScroll={debounce(handleScroll)} ref={ref}>
            <Head>
                <meta charSet="utf-8"/>
                <title>Shashank Tripathi | Computer Science Graduate Student | Software Engineer | Entry-Level Data Scientist | Cloud Engineer | ML/AI Engineer</title>
                <meta name="description"
                      content="Shashank Tripathi is a Computer Science Graduate Student at University of Illinois at Springfield, who loves learning new things."/>

                <meta property="og:url" content="https://shashank76.github.io/"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title"
                      content="Shashank Tripathi | Computer Science Graduate Student | Software Engineer | Entry-Level Data Scientist | Cloud Engineer | ML/AI Engineer"/>
                <meta property="og:description"
                      content="Shashank Tripathi is a Computer Science Graduate Student at University of Illinois at Springfield, who loves learning new things."/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="shashank76.github.io"/>
                <meta property="twitter:url" content="https://shashank76.github.io/"/>
                <meta name="twitter:title"
                      content="Shashank Tripathi | Computer Science Graduate Student | Software Engineer | Entry-Level Data Scientist | Cloud Engineer | ML/AI Engineer"/>
                <meta name="twitter:description"
                      content="Shashank Tripathi is a Computer Science Graduate Student at University of Illinois at Springfield, who loves learning new things."/>


            </Head>

            <ThemeProvider theme={activeTheme}>
                <ResetStyles/>
                <GlobalStyles/>
                <Component
                    {...pageProps}
                    scrollDirection={scrollDirection}
                    theme={theme}
                />
            </ThemeProvider>
        </div>
    );
}
