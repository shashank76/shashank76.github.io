import PDFViewer from '@/components/PDFViewer';
import PDFJSBackend from '@/backends/pdfjs';
import {useEffect, useState} from "react";
import {DARK_THEME} from "../../theme";


export default function Resume() {

    const activeTheme = DARK_THEME;

    const [documentMounted, setDocumentMounted] = useState(false);

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

    return (
        <PDFViewer
            backend={PDFJSBackend}
            src="/Shashank_Tripathi.pdf"
        />
    );
}