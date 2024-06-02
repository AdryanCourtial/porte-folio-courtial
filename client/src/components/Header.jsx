import './../static/Header.css'
import { NavLink } from 'react-router-dom'
import { PageHome } from './PageHome'

export function Headers() {
    return (
    <header>
        <NavLink to='/'> Home </NavLink>
        <NavLink to='/competence'> Competence </NavLink>
        <NavLink to='/contact'> Contact </NavLink>
    </header>
    )
}