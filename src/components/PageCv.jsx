import React from "react"
import { motion } from "framer-motion"

export function PageCv({animation}) {
    return (
        <motion.div className="flex flex-col" variants={animation} initial="hidden" animate="visible" exit='leave'>
            <div className="flex w-full h-full mt-32 justify-center">
                {/* <img src={require('./../image/adryan_cv_alternance.png')} alt="cv_courtial_adryan" /> */}
                <embed src='/adryan_alternance_cv.pdf#zoom=60' className="w-[40%] h-[800px]" type="application/pdf"/>
            </div>
        </motion.div>
    )
}