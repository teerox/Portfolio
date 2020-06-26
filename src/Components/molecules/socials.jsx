import React from "react";
import styled from "styled-components";
import Text from "../atoms/typography";
import {fontSize, hover, textColor} from "../constants";


export default function Socials(props) {
    const links = [
        ["Github","Github", "https://github.com/teerox/"],
        ["LinkedIn","LinkedIn", "https://www.linkedin.com/in/odu-anthony-53971a160/"],
        ["Facebook","Facebook", "https://www.facebook.com/odu.anthony/"],
        ["Twitter","Twitter", "https://twitter.com/teerox44"],
        ["Instagram","Instagram", "https://www.instagram.com/teee_rox/"],
        ["My CV","Book", "https://drive.google.com/file/d/1iDEIH0XX3D0SJYJKzM-oMM76_ZiK0MrD/view?usp=sharing"],
    ];

    return (
        <>
            <SocialStyle {...props}>
                {links.map(el => (
                  <a href={el[2]} key={el}>
                    <Text size={'xsm'}>
                        <ion-icon name={"logo-"+ el[1].toLowerCase()}/>
                        {"  " + el[0]}
                    </Text>
                  </a>
                ))}
            </SocialStyle>
        </>
    );
}

const SocialStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  font-size: ${fontSize};
  
  a {
    color: ${textColor} !important;
  }
  
  &:hover {color: ${hover};}  
`;
