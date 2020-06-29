import React from "react";
import Header from "../../Components/molecules/header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardContainer, {Card} from "../../Components/molecules/Card";
import first from "../../Components/atoms/ImagePlaceholder/movies.jpeg"
import second from "../../Components/atoms/ImagePlaceholder/myroot.jpeg"
import third from "../../Components/atoms/ImagePlaceholder/distance.jpeg"
import fourth from "../../Components/atoms/ImagePlaceholder/weather.png"
import fifth from "../../Components/atoms/ImagePlaceholder/task.jpeg"
import sixth from "../../Components/atoms/ImagePlaceholder/bmicalculator.png"


export default function Jobs() {
    
    
    const allData = [
        {
            "id": 1,
            "name": "The Movie(Android/iOS)",
            "description": "Built a movie application for Android and iOS where a user can watch movie trailer of most recent movies.",
            "tools": " java swift github",
            "link": "https://github.com/teerox/",
            "project_snapshot": first,
            "repository": "https://github.com/teerox/",
            "device": "android"
        },
        
        {
            "id": 2,
            "name": "My RootAfrica(Android/iOS)",
            "description": "Collaborated with team members to build a full-stack mobile Investment application based on client requirements. used for connecting interested Individual willing to invest in Africa. yet to be launched and Deployed on App Store.",
            "tools": " java swift github",
            "link": "",
            "project_snapshot": second,
            "repository": "https://github.com/teerox/",
            "device": "android"
        },
        
        {
            "id": 3,
            "name": "Distance Calculator(Android)",
            "description": "An application capable of calculating distance covered by a user and able to get the location of a user using Latitude and Longitude on the google map.",
            "tools": " java github",
            "link": "https://github.com/teerox/",
            "project_snapshot": third,
            "repository": "https://github.com/teerox/",
            "device": "android"
        },
        {
            "id": 4,
            "name": "Weather App(iOS)",
            "description": " An iOS weather application.",
            "tools": " swift github",
            "link": "",
            "project_snapshot": fourth,
            "repository": "https://github.com/teerox/",
            "device": "ios"
    
        },
        {
            "id": 5,
            "name": "Todo App(Android/iOS)",
            "description": "A Simple Todo Application.",
            "tools": " java swift github",
            "link": "",
            "project_snapshot": fifth,
            "repository": "https://github.com/teerox/",
            "device": "android"
        },
        {
            "id": 6,
            "name": "BMI Calculator App(iOS)",
            "description": "A Simple BMI calculator for personal use for Knowledge purpose.",
            "tools": " swift github",
            "link": "",
            "project_snapshot": sixth,
            "repository": "https://github.com/teerox/",
            "device": "ios"
        }
    ];
    
    // const [api, setApi] = useState([]);
    const api = allData;
    //setApi(allData)
    // useEffect(() => {
    //     axios({
    //         method: 'GET',
    //         url: '',
    //     })
    //         .then((response) =>
    
    //             setApi(allData)
    
    //         )
    //         .catch(err => console.log(err.message))
    // }, []);
    
    return (
        <div>
            <Header text={'Projects'}/>
            <CardContainer>
                {console.log(api)}
                {api.length < 1 ?
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                    :
                    api.map((el, index) => <Card key={index} details={el}/>)
                    
                }
            
            </CardContainer>
        </div>
    )
}


export function RecentJobs() {
    return (
        <>
            {/*<CardCarousel/>*/}
        </>
    
    );
}