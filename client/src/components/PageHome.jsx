import React from 'react'
import { motion } from 'framer-motion'
// import { CircleDecoration } from './CircleDecoration'
import './../static/PageHome.css'



export function PageHome( {animation} ) {
    return <motion.div variants={animation} initial="hidden" animate="visible" exit='leave' className='max-h-[91vh]'>
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