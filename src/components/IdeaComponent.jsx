/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import EUmap from '../resources/images/flag-map.svg.png';
import connect from '../resources/images/people.jpg';
import match from '../resources/images/match.png';
import learn from '../resources/images/flag.png';
import motivate from '../resources/images/motivate2.png';

class Idea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Jumbotron id="idea" className="primary-bg idea">
                <div className="container">
                    <div className="row">
                        <div className="section_heading">
                            <h2> Our IDEA </h2>

                            <h4>
                                {' '}
                                We decided to create an app for pupils aging
                                12-17 who are struggling with lack of motivation
                                in homeschooling caused by the current lockdown,
                                matchEU is a platform that matches tandems and
                                mentorships cross-border to ensure the
                                opportunity for a holistic education and keeping
                                on track for every pupil.
                            </h4>
                        </div>

                        <div className="col-md-6">
                            <div className="features_detail">
                                <ul>
                                    <li>
                                        <div className="circle">
                                            <img
                                                className="smaller"
                                                src={connect}
                                                alt=""
                                            />
                                        </div>
                                        <h5>Connect</h5>
                                        Connect pupils around the globe
                                    </li>
                                    <li>
                                        <div className="circle right">
                                            <img
                                                className="smaller"
                                                src={match}
                                                alt=""
                                            />
                                        </div>
                                        <h5>Match</h5>
                                        Match pupils with mentors
                                    </li>
                                    <li>
                                        <h5>Learn</h5>
                                        Foster cultural identity
                                        <div className="circle">
                                            <img
                                                className="smaller"
                                                src={learn}
                                                alt=""
                                            />
                                        </div>
                                    </li>
                                    <li>
                                        <h5> Motivate </h5>
                                        Motivate pupils going forward
                                        <div className="circle right">
                                            <img
                                                className="smaller"
                                                src={motivate}
                                                alt=""
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="features_img pull-left">
                                <img
                                    src={EUmap}
                                    alt="EU Map"
                                    className="EUmap"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Jumbotron>
        );
    }
}

export default Idea;
