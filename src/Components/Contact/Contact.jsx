import React, { useState } from 'react'
import './contact.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faPhone, faAt, faHandPointUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    const [active, setActive] = useState(false)
    const handleClickLetter = () => {
        setActive(true)
    }

    return (
        <div className='contact-wrap'>
            <div>
                <div onClick={handleClickLetter} className='letter-icon-wrap'>
                    <FontAwesomeIcon className='icon' icon={faEnvelope} />
                </div>
                <div className={`${active ? 'contact-info' : 'hidden'}`}>
                    <div>
                        <FontAwesomeIcon className='icon' icon={faUser} />
                        Nguyễn Văn Quang
                    </div>
                    <div>
                        <FontAwesomeIcon className='icon' icon={faPhone} />
                        0889737517
                    </div>
                    <div>
                        <FontAwesomeIcon className='icon' icon={faAt} />
                        vanquangqt01@gmail.com
                    </div>
                    <div>
                        <FontAwesomeIcon className='icon' icon={faFacebook} />
                        <a href='https://www.facebook.com/profile.php?id=100012214305334'>Văn Quang</a>
                    </div>
                    <div>
                        <FontAwesomeIcon className='icon' icon={faSquareGithub} />
                        vquang201
                    </div>
                </div>

            </div>
            <div className={`${active ? 'contact-input-wrap' : 'hidden'}`}>
                <input placeholder='Enter Name' />
                <input type='email' required placeholder='Enter Email' />
                <input placeholder='Enter Message' />
                <button type='submit'>Send</button>
            </div>
            <div className={`${active == false ? 'hand-up-wrap' : 'hidden'}`} >
                <p>Click The Mailbox</p>
                <FontAwesomeIcon className='icon' icon={faHandPointUp} />
            </div>


        </div >
    )
}
