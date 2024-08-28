import './../static/ButtonCompetence.css'
import { CircleDecoration } from './CircleDecoration'
import { motion } from 'framer-motion'

export function ButtonCompetence({ image, gradient, position, text }) {
    return (
        <motion.div className='relative h-[30vh] w-[52vh]'
        initial={{ y: 200, scale: 0.1}}
        whileInView={{ y: 0, scale: 1}}
        viewport={{ once: true }}
        style={{ alignSelf: position}}>
            <div className='absolute bg-my-white z-40 top-0 left-1/4 right-1/4 bottom-1/4 rounded-3xl flex drop-shadow-xl'>
                <img src={image} alt="Salut" className='h-full m-auto p-2 z-50'/>
            </div>
            <div
            className='boite_competence absolute bottom-0 right-0 left-0 top-1/3 rounded-3xl border-2 drop-shadow-xl flex'
            style={{ background: gradient }}>
                <p className='self-end text-center w-full font-bold mb-4 text-2xl'> { text } </p>
            </div>
            <CircleDecoration size={'54vh'} top={'-7vh'} left={'-1vh'}/>
        </motion.div>
    )
}