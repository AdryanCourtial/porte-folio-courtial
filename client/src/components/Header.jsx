import './../static/Header.css'
import { NavLink, useLocation } from 'react-router-dom'
import { tabPage } from '../App'
import { useEffect, useState } from 'react'


export function Headers({OnChooseVariant}) {

    const location = useLocation();
    const [actualPage, setActualPage] = useState(location.pathname)

    useEffect(() => {
        setActualPage(location.pathname)
    }, [location])


    function GetLocation(nextPage){
        const curentIndex = tabPage.findIndex(route => route === actualPage);
        const nextIndex = tabPage.findIndex(route => route === nextPage);
        console.log(curentIndex, nextIndex)
        OnChooseVariant(curentIndex, nextIndex)
    }

    return (
    <header className='bg-my-white w-fit px-6 flex mx-auto mt-2 rounded-full min-h-[7vh]'>
        <NavLink
            to={'/'} 
            name={"Home"} 
            onClick={GetLocation('/')} 
            className={'px-4 h-full flex items-center underline underline-offset-8 decoration-secondary-color'}
        > Home </NavLink>
        <NavLink 
            to={'/competence'}
            name={"Competence"} 
            onClick={GetLocation('/competence')}  
            className='px-4 h-full flex items-center'
        > Competences </NavLink>
        <NavLink 
            to={'/experiences'}
            name={"Experiences"} 
            onClick={GetLocation('/experiences')}  
            className='px-4 h-full flex items-center'
        > Experiences </NavLink>
        <NavLink 
            to={'/contact'}
            name={"Contact"} 
            onClick={GetLocation('/contact')}  
            className='px-4 h-full flex items-center'
        > Contact </NavLink>
    </header>
    )
}