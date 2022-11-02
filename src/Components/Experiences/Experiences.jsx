import React from 'react'
import './experiences.scss'
export default function Experiences() {
    const experiencesTimes = [
        {
            time: '2021 - 2022',
            work: 'Working on some personal projects'

        },
        {
            time: '2020 - 2021',
            work: 'Self-studying programming'
        },
        {
            time: '2019 - 2022',
            work: 'Studying at Duy Tan University'
        }
    ]
    return (
        <div className='experiences-wrap'>
            {
                experiencesTimes.map((e, i) => (
                    <div key={i} className='content'>
                        <p>{e.time}</p>
                        <p>{e.work}</p>
                    </div>
                ))
            }
        </div>
    )
}
