'use client';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                className="bg-white rounded-full w-10 h-10 flex flex-col items-center justify-center gap-1"
                onClick={() => setOpen(true)}
            >
                <div className="w-5 h-0.5 bg-black" />
                <div className="w-5 h-0.5 bg-black" />
                <div className="w-5 h-0.5 bg-black" />
            </button>


            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 right-0 h-full w-64 bg-black text-white z-50 rounded-l-2xl border border-yellow-400 p-6 flex flex-col gap-6"
                    >
                        <button
                            className="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center"
                            onClick={() => setOpen(false)}
                        >
                            ✕
                        </button>

                        <nav className="mt-12 flex flex-col gap-4 text-lg font-bold">
                            <a href="#">PORTFOLIO</a>
                            <a href="#">SERVICES</a>
                            <a href="#">COMPETENCES</a>
                            <a href="#">CONTACT ME</a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
