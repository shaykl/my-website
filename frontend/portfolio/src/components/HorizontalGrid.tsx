import React, { useState } from 'react'
import './HorizontalGrid.css'
import projects from "./projects"
import Slider from "react-slick"
import Project from './Project'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

interface HorizontalGridProps {
    numberOfSquares: number;
}

const HorizontalGrid: React.FC<HorizontalGridProps> = ({ numberOfSquares }) => {
    const [data] = useState(projects)

    var settings = {
        dots: true,
        infinite: true,
        swipeToSlide: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };

    return (
        <section className='slider-container'>
            <Slider {...settings}>
                {data.map((item) => {
                    return <Project key={item.id} {...item}/>
                })}
            </Slider>
        </section>
    );
};

export default HorizontalGrid;
