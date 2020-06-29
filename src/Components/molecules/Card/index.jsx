import React from "react";
import styled from "styled-components";
import {PhoneMockUp} from "../../atoms/ImagePlaceholder";
import {LazyLoadComponent} from 'react-lazy-load-image-component';
import Text from "../../atoms/typography";
import Line from "../../atoms/divider";
import {backgroundColor} from "../../constants";


export default function CardContainer(props) {
    
    return (
        <CardContainerStyle>
            {props.children}
        </CardContainerStyle>
    )
}


export function Card({details}) {
    
    return (
        <div>
            <LazyLoadComponent>
                <CardStyle>
                    <Image>
                        <PhoneMockUp device={details.device} snapshot={details.project_snapshot}/>
                    </Image>
                    <div className="card-content">
                        
                        
                        <CardContent variant={'card'}>
                            <div>
                                <div className='title'>
                                    <Text size={'sm'} weight={'800'}>
                                        {details.name}
                                    </Text>
                                    {
                                        details.link ?
                                            <a href={details.link} target={"_blank"} rel="noopener noreferrer">
                                                <Text>
                                                    <ion-icon name="download-outline"/>
                                                </Text>
                                            </a>
                                            : null
                                    }
                                </div>
                                <Line/>
                                <div className='description'>
                                    <Text size={'xsm'}>{details.description}</Text>
                                </div>
                            </div>
                            <div className='tools'>
                                <Line/>
                                <Text size={'sm'}>
                                    {details.tools
                                        .replace(/,/g, '').replace(/./, '')
                                        .replace(/and/, '')
                                        .split(' ')
                                        .filter(el => el !== '')
                                        .map((el, i) =>
                                            // { console.log(el)}
                                            <i key={i} className={"devicon-" + el + "-plain"}/>
                                        )}
                                </Text>
                                <Line/>
                            </div>
                        </CardContent>
                    </div>
                </CardStyle>
            </LazyLoadComponent>
        </div>
    )
}

const CardContainerStyle = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, auto));
    grid-gap: 40px;
`;

const CardStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 540px;
    overflow: hidden;
    
    .card-content {
        width: 100%;
        transition: 0.5s;
        position: absolute;
        bottom: -153px;
        z-index: 3;

    }
    
    
    &:hover {
        box-shadow: 0px 0px 33px 5px black;
        .card-content {
            bottom: 0px;
        }
    }
    
`;

const Image = styled.div`
    position: relative;
    overflow: hidden;
    z-index: 2;
`;


const CardContent = styled.div`
    width: 100%;
    height: 12.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.6rem; 
    background: linear-gradient(180deg, ${backgroundColor});
    // box-shadow: 0px -117px 27px -11px #00000075;
    

    
    div {
        .title {
            letter-spacing: 0px;
            line-height: 30px;
            display: flex;
            justify-content: space-between;
        };
    }
    
    .description {
        width: 100%; 
        height: 6.9rem; 
        overflow-y: scroll;
        overflow-x: hidden;
        scrollbar-width: none; 
        -ms-overflow-style: none; 
    };
    .description::-webkit-scrollbar {
        width: 0px;
    }
    .tools {
        width: 100%;
        i {
            margin-right: 3px;
        }
    };
`;