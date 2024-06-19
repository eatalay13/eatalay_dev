'use client';

import { motion } from "framer-motion";
import { ReactNode } from "react";

const RootTemplate = ({ children }: { children: ReactNode }) => (
    <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 20, opacity: 0 }}
        transition={{
            ease: "easeInOut",
            duration: 0.3,
        }}
    >
        {children}
    </motion.div>
);
export default RootTemplate;