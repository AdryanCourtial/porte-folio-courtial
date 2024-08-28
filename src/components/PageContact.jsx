import React from "react"
import { motion } from "framer-motion"

export function PageContact({animation}) {
    return (
        <div>
            <motion.p style={{color: '#ffff'}} variants={animation} initial="hidden" animate="visible"> Page Contact </motion.p>
        </div>
    )
}