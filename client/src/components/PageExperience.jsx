import React from "react"
import { motion } from "framer-motion"
import { Experience } from "./Experience/Experience"

export function PageExperiences({animation}) {
    return (
        <motion.div className="flex-col justify-center mt-1/4 w-full h-full mt-[20vh]" variants={animation} initial="hidden" animate="visible">
            <Experience name={'PME-Partner'} />
            <Experience position={'right'} />
        </motion.div>
    )
}