import React from "react";
import Header from "../../Components/molecules/header";
import {Content, InnerLeft} from "../templates";
import Text from "../../Components/atoms/typography";
import {footerBackgroundColor} from "../../Components/constants";

export default function Contacts() {
    
    
    return (
        <>
            <Header text={'Contact Me'}/>
            <Content>
                <InnerLeft>
                    <Text>You can reach me at: </Text>
                </InnerLeft>
                <InnerLeft style={{width: '100%'}}>
                    <InnerLeft>
                        <span style={{color: `${footerBackgroundColor}`, marginRight: '5px'}}>Email: </span>
                        <Text>
                            oduekene@gmail.com
                        </Text>
                    </InnerLeft>
                    <InnerLeft>
                        <span style={{color: `${footerBackgroundColor}`,  marginRight: '5px'}}>LinkedIn: </span>
                        <Text>
                        linkedin.com/in/odu-anthony-53971a160/
                        </Text>
                    </InnerLeft>
                    {/* <InnerLeft>
                        <span style={{color: `${footerBackgroundColor}`,  marginRight: '5px'}}>Skype: </span>
                        <Text>Anthony Odu</Text>
                    </InnerLeft> */}
                </InnerLeft>
            </Content>
        </>
    )
}
