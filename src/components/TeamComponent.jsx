/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Nathalie from "../resources/images/Team2.jpg"
import Marko from "../resources/images/Team3.jpg"
import Nastja from "../resources/images/Team5.jpg"
import Misrah from "../resources/images/Team.jpg"
import Isabel from "../resources/images/Team6.jpg"
import Paula from "../resources/images/Team7.jpg"
import Olha from "../resources/images/Team8.jpg"
import Ron from "../resources/images/Team9.jpg"
import Vanessa from "../resources/images/Team10.jpg"

class Team extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3,
        };
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3, // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2, // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
        };
        return (
            <>
                <Jumbotron id="team" class="primary-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section_heading">
                                    <h2> Team Members </h2>
                                    <h4>
                                        We&apos;re the best international team,
                                        keeping connected and communicated to
                                        make things happen!{' '}
                                    </h4>
                                </div>
                            </div>
                        </div>

                        <Carousel
                            style={{
                                paddingBottom: '30px',
                                position: 'relative',
                                fontSize: '30px',
                            }}
                            additionalTransfrom={0}
                            arrows
                            ssr
                            autoPlay
                            autoPlaySpeed={1500}
                            centerMode
                            className=""
                            containerClass="container row"
                            dotListClass="dots"
                            draggable
                            focusOnSelect
                            infinite
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={{
                                desktop: {
                                    breakpoint: {
                                        max: 3000,
                                        min: 1024,
                                    },
                                    items: 3,
                                    partialVisibilityGutter: 20,
                                },
                                mobile: {
                                    breakpoint: {
                                        max: 464,
                                        min: 0,
                                    },
                                    items: 1,
                                    partialVisibilityGutter: 10,
                                },
                                tablet: {
                                    breakpoint: {
                                        max: 1024,
                                        min: 464,
                                    },
                                    items: 2,
                                    partialVisibilityGutter: 10,
                                },
                            }}
                            showDots
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                        >

                            <div className="card">
                                <div className="member_img">
                                    <img
                                        src={Nathalie}
                                        alt="Nathalie Haußmann"
                                    />
                                </div>
                                <div className="member_name">
                                    <h5> Nathalie Haußmann</h5>
                                </div>
                            </div>
                            <div className="card">
                                <div className="member_img">
                                    <img
                                        src={Marko}
                                        alt="Marko Shiva Pavlovic"
                                    />
                                </div>
                                <div className="member_name">
                                    <h5> Marko Shiva Pavlovic </h5>
                                </div>
                            </div>

                            <div className="card">
                                <div className="member_img">
                                    <img
                                        src={Nastja}
                                        alt="Nastja Gatsenko"
                                    />
                                </div>
                                <div className="member_name">
                                    <h5> Nastja Gatsenko </h5>
                                </div>
                            </div>
                            <div className="card">
                                <div className="member_img">
                                    <img
                                        src={Misrah}
                                        alt="Misrah Mohamed"
                                    />
                                </div>
                                <div className="member_name">
                                    <h5>Misrah Mohamed</h5>
                                </div>
                            </div>
                            <div className="card">
                                <div className="member_img">
                                    <img
                                        src={Isabel}
                                        alt="Isabel Arens"
                                    />
                                </div>
                                <div className="member_name">
                                    <h5> Isabel Arens </h5>
                                </div>
                            </div>
                            <div className="card">
                                <div className="member_img">
                                    <img
                                        src={Paula}
                                        alt="Paula Rodriguez"
                                    />
                                </div>
                                <div className="member_name">
                                    <h5> Paula Rodriguez </h5>
                                </div>
                            </div>
                            <div className="card">
                                <div className="member_img">
                                    <img
                                        src={Olha}
                                        alt="Olha Onofriichuk"
                                    />
                                </div>
                                <div className="member_name">
                                    <h5> Olha Onofriichuk</h5>
                                </div>
                            </div>
                            <div className="card">
                                <div className="member_img">
                                    <img
                                        src={Vanessa}
                                        alt="Vanessa Guillen"
                                    />
                                </div>
                                <div className="member_name">
                                    <h5> Vanessa Guillen </h5>
                                </div>
                            </div>
                            <div className="card">
                                <div >
                                    <img
                                        src={Ron}
                                        alt="Ron Huberfeld"
                                    />
                                </div>
                                <div className="member_name">
                                    <h5> Ron Huberfeld </h5>
                                </div>
                            </div>

                        </Carousel>
                    </div>
                    <div
                        className="dots"
                        style={{
                            paddingTop: '80px',
                            position: 'relative',
                        }}
                    />
                </Jumbotron>
            </>
        );
    }
}

export default Team;
