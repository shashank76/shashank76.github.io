import { QUERIES } from "breakpoints";
import styled from "styled-components";
import Highlight from "../Highlight/Highlight";
import SectionTitle from "../SectionTitle/SectionTitle";
import SlideUp from "../SlideUp";

export interface IProps {
    delegated?: any;
}

const Contact: React.FC<React.PropsWithChildren<IProps>> = ({
    children,
    ...delegated
}) => {

    return (
        <Wrapper {...delegated} id="contact">
            <ContactMe>
                <SlideUp>
                    <SectionTitle label={"Get In Touch"} side={"left"}/>
                </SlideUp>
                <SlideUp>
                    Address: Chicago, Illinois  &bull; USA<br></br>
                    Phone: +1-217-767-0790<br></br>
                    Email: shashank.tripathi0508@gmail.com
                </SlideUp>
            </ContactMe>
            <Map>
                <SlideUp>
                    <Highlight>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8051.860050103969!2d-87.64417017674651!3d41.88199585908272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb6e328686d%3A0x43f86a8214e286bb!2sThe%20Merchandise%20Mart!5e0!3m2!1sen!2sus!4v1739999127391!5m2!1sen!2sus" width="100%" height="250"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Highlight>
                </SlideUp>
            </Map>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: grid;
  padding: 32px;
  padding-bottom: 0px;
  row-gap: 80px;
  grid-template-areas:
        "ContactMe"
        "map";

  ${QUERIES.tabletAndUp} {
    grid-template-areas: "map ContactMe";
    grid-template-columns: 1fr 1fr;
    column-gap: 0px;
    padding: 64px;
  }

  ${QUERIES.desktopAndUp} {
    column-gap: 80px;
    padding-bottom: 0px;
  }
`;

const ContactMe = styled.div`
  grid-area: ContactMe;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 3px;

  ${QUERIES.tabletAndUp} {
    justify-self: start;
    max-width: min(400px, 100%);
  }
`;

const Map = styled.map`
  grid-area: map;
  justify-self: center;
  width: 300px;
  margin-bottom: 64px;

  ${QUERIES.tabletAndUp} {
    width: min(50vw, 250px);
  }

  ${QUERIES.desktopAndUp} {
    justify-self: end;
    width: min(50vw, 500px);
  }
`;

export default Contact;
