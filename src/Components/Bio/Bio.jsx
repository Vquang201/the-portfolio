import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCakeCandles,
    faUser,
    faBriefcase,
    faCode
} from "@fortawesome/free-solid-svg-icons";
import {
    faCss3,
    faHtml5,
    faJs,
    faNodeJs,
    faReact,
} from "@fortawesome/free-brands-svg-icons";

import './bio.scss'

export default function Bio() {
    return (
        <div className='bio-wrap'>
            <div>
                <ul className='info-list'>
                    <li>
                        <div className='flex'>
                            <FontAwesomeIcon className='heading-icon' icon={faUser} />
                            Nguyễn Văn Quang
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <FontAwesomeIcon className='heading-icon' icon={faCakeCandles} />
                            30/06/2001
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <FontAwesomeIcon className='heading-icon' icon={faBriefcase} />
                            Intern Software Engineer
                        </div>
                    </li>
                    <li>
                        <div className='flex'>
                            <FontAwesomeIcon className='heading-icon' icon={faCode} />
                            <span>
                                <FontAwesomeIcon className='language-icon' icon={faHtml5} />
                                <FontAwesomeIcon className='language-icon' icon={faCss3} />
                                <FontAwesomeIcon className='language-icon' icon={faJs} />
                                <FontAwesomeIcon className='language-icon' icon={faReact} />
                                <FontAwesomeIcon className='language-icon' icon={faNodeJs} />
                            </span>
                        </div>

                    </li>
                </ul>
            </div>
            <div className='about'>
                <p>
                    I'm a tech junkie who are willing to learn new things everyday.
                    I love to play around with computers and do problems-solving.
                    Looking forward to working in a professional environment,
                    so i can dedicate myself for the company and be better me each day.
                </p>
            </div>
        </div >
    )
}
