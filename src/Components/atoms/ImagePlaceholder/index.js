import React from "react";
import styled from "styled-components";
import phone from "./mock/app.png";

export default function ImageContainer({...props}) {
    
    
    return (
        <ImageStyle  shape={props.shape}>
            <Image src={props.image} height={props.height} alt='loading'/>
        </ImageStyle>
    )
}

export function PhoneMockUp({name, snapshot, device}) {
    
    
    return (
        <PhoneMockUpStyle mock={phone} device={device}>
            {
                device === 'android' ?
                    <span className={'phone-mock-samsung'}>
                        <img src={phone} alt={name}/>
                    </span>
                    : null
            }
            <span className={'project'}>
                <img src={snapshot} alt={name}/>
            </span>
        </PhoneMockUpStyle>
    )
};

const PhoneMockUpStyle = styled.div`
position: relative;
max-width: 350px;
height: 640px;
overflow: hidden;


.project {
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    
    
    img {
        position: relative;
        width: ${props => props.device === 'android' ? '91%' : null};
        height: ${props => props.device === 'android' ? '80%' : '100%'};
        top: ${props => props.device === 'android' ? 'calc(68px)' : null};
    }
}

.phone-mock-samsung {
    position: absolute;
    z-index: 2;
    max-height: 640px;
    height: 100%;
    
    img {
        width: 100%;
        height: 100%;
    }
}

`;


const ImageStyle = styled.div`
    width: 100%;
    height: 100%;
    max-height: 400px;
    max-width: 400px;
    border: none;
    overflow: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({shape}) => shape === "round" ? "50%" : "0"};
`;

const Image = styled.img`
    width: 100%;
    min-height: ${props => props.height || '100%'};
`;