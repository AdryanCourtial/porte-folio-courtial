import React from "react"
import { motion } from "framer-motion"

export function PageExperiences({animation}) {
    return (
        <div>
            <motion.p style={{color: '#ffff'}} variants={animation} initial="hidden" animate="visible"> Page Experiences </motion.p>
        </div>
    )
}