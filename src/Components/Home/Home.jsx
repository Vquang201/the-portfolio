import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Bio from '../Bio/Bio';
import Experiences from '../Experiences/Experiences';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import Tabs from '../Tabs/Tabs'
import axios from 'axios';


import './home.scss'

export default function Home() {
    const [question, setQuestion] = useState()
    const [author, setAuthor] = useState()


    useEffect(() => {
        const axiosData = async () => {
            const res = await axios.get('https://programming-quotes-api.herokuapp.com/Quotes/random')
            setQuestion(res.data.en)
            setAuthor(res.data.author)
        }
        axiosData()
    }, [])

    return (
        <div className='home'>
            <div className='avatar-wrap'>
                <img src='https://i.imgur.com/jKfkvbI.jpg'
                    alt='avt' className='avatar' />
            </div>
            <h1 className='heading'>Hi , Welcome To My Portfolio</h1>
            <p className='question' >{question} - {author}</p>

            <div className='wrap-content'>
                <Tabs />
                <Routes>
                    <Route path='/' element={<Bio />} />
                    <Route path='/experiences' element={<Experiences />} />
                    <Route path='/project' element={<Project />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </div>
    )
}
