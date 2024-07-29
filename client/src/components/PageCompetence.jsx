import React from "react"
import { motion } from "framer-motion"

export function PageCompetence({animation}){
    return (
        <motion.div variants={animation} initial="hidden" animate="visible">
             <p style={{color: '#ffff'}} > Page Competence </p>
        </motion.div>
    )
}