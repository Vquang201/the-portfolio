import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './tabs.scss'

export default function Tabs() {
    const { pathname } = useLocation();
    const tabName = [
        {
            id: 1,
            display: 'Bio',
            path: '/'
        },
        {
            id: 2,
            display: 'Experiences',
            path: '/experiences'
        },
        {
            id: 3,
            display: 'Project',
            path: '/project'
        },
        {
            id: 4,
            display: 'Contact',
            path: '/contact'
        }
    ]

    const active = tabName.findIndex(e => e.path === pathname);
    return (

        <div className='tabs-contain'>
            {
                tabName.map((e, i) => (
                    <Link className={`tab-name ${active === i ? 'active' : ''}`} key={e.id} to={e.path} >
                        {e.display}
                    </Link>
                ))
            }
        </div >
    )
}
