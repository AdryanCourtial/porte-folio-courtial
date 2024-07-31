import React from 'react'
import { motion } from 'framer-motion'
import './../static/PageHome.css'
import { CircleDecoration } from './CircleDecoration'



export function PageHome( {animation} ) {
    return <motion.div variants={animation} initial="hidden" animate="visible" exit='leave'>
        <div className='container w-[37vw]'>
            <h2 className='name w-full'> COURTIAL <br/>  Adryan </h2>
            <div className='container_hr w-full'>
                <hr  className='bar_1'/>
                <hr  className='bar_2'/>
            </div>
            <p className='emploie w-full'> Developpeur Full Stack </p>
        </div>
        <div className='container_profil'>
            <div id='little_circle'> </div>
            <div id='middle_circle'> </div>
            <div id='big_circle'> </div>
        </div>
    </motion.div>
}