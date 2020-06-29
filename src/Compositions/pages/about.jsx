import React from "react";
import Header from "../../Components/molecules/header";
import {Content, InnerLeft} from "../templates";
import Text from "../../Components/atoms/typography";


export default function About() {
    let aboutMe = "I am Anthony Odu";
    return (
        <>
            <Header text={'About Me'}/>
            <Content>
                <InnerLeft>
                    <Text>
                        <Text>&lt;p&gt;</Text>
                        {aboutMe}
                        <br/>
                        FullStack Mobile Developer
                        <br/>
                        Android, iOS, Kotlin, Flutter, Swift, Python, Javascript,
                        <br/>
                        Building Native and Cross-platform Apps for Mobile,Espresso, Unit Testing,UIKit(iOS),RxJava, RxSwift,Material Design (Android),ORMs ie Room, RealmDB,Git,
                         Server Management (Active directory/Domain/DHCP), Network configuration
                        <Text>&lt;/p&gt;</Text>
                    </Text>
                </InnerLeft>
                <InnerLeft>
                    <Text>
                    Anthony Odu is a Full-Stack Android and iOS developer, proficient in using Kotlin and Swift.
                    He is Result-oriented and an innovative software engineer with experience. 
                    Easily communicates complex technical requirements to others and a problem- solving software engineer with a positive attitude. 
                    Promotes excellent communication and organizational skills. Seeking a software engineering position that builds tools and services, 
                    which make a positive impact in the daily environment and looking to join a highly regarded software company
                    </Text>
     
                    <Text>
                        Over the years, he has interned in several organisations where he has applied his knowledge to
                        improve and/or optimize manual processes.
                    </Text>
                </InnerLeft>
            </Content>
        </>
    )
}