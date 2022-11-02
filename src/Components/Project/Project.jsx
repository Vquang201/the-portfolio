import React from 'react'
import './project.scss'

export default function Project() {
    const projects = [
        {
            name: 'Shoppet Website',
            demo: 'https://vquang-shoppet.netlify.app/',
            source: 'https://github.com/Vquang201/shoppet',
            laguage: 'HTML , CSS , JavaScript , Reactjs'
        },
        {
            name: 'Spotify Website',
            demo: 'https://vquang-spotify.vercel.app/',
            source: 'https://github.com/Vquang201/clone-spotify',
            laguage: 'HTML , CSS , Tailwind , JavaScript , Reactjs'
        },
        {
            name: 'Music Website',
            demo: 'https://vquang201.github.io/Clone_music/',
            source: 'https://github.com/Vquang201/Clone_music',
            laguage: 'HTML , CSS , JavaScript '
        },
        {
            name: 'Book Tickets Website',
            demo: 'https://vquang201.github.io/theband/',
            source: 'https://github.com/Vquang201/theband',
            laguage: 'HTML , CSS'
        }
    ]

    return (
        <div className='project-wrap'>
            {
                projects.map((e, i) => (
                    <div key={i} className='project'>
                        <div className='content'>
                            <h3 className='project-name'>Name : {e.name}</h3>
                            <a href={e.demo} className="demo-code"> <span>Demo Code : </span>{e.demo} </a>
                            <a href={e.source} className="code-source"><span>Source : </span>{e.source} </a>
                            <p className="project-language"><span>Laguages : </span>{e.laguage} </p>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
