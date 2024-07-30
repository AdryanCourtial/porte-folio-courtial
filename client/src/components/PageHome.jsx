import React from 'react'
import { motion } from 'framer-motion'
import './../static/PageHome.css'
import { CircleDecoration } from './CircleDecoration'



export function PageHome( {animation} ) {
    return <motion.div variants={animation} initial="hidden" animate="visible">
        <div className='container'>
            <h2 className='name'> COURTIAL <br/>  Adryan </h2>
            <div className='container_hr'>
                <hr  className='bar_1'/>
                <hr  className='bar_2'/>
            </div>
            <p className='emploie'> Developpeur Full Stack </p>
        </div>
        <div className='container_profil'>
            <div id='little_circle'> </div>
            <div id='middle_circle'> </div>
            <div id='big_circle'> </div>
        </div>
        <CircleDecoration size={'20vh'} top={'20vh'} left={'10vw'}/>
        <CircleDecoration size={'15vh'} top={'32vh'} left={'45vw'}/>
        <CircleDecoration size={'15vh'} top={'86vh'} left={'17vw'}/>
        <CircleDecoration size={'60vh'} top={'-15vh'} left={'80vw'}/>
        <CircleDecoration size={'50vh'} top={'56vh'} left={'63vw'}/>
    </motion.div>
}