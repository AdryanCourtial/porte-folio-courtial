import React from 'react'
import { motion } from 'framer-motion'
import './../static/PageHome.css'



export function PageHome( {animation} ) {
    return <motion.main variants={animation} initial="hidden" animate="visible">
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
    </motion.main>
}