import kevinbg from "./img/kevinbg.jpg";
import React from 'react';
import { useState, Fragment } from 'react'
import { motion, animate, AnimatePresence, useAnimate, stagger } from "framer-motion"
import ReactPlayer from 'react-player'
import akaerblack from "./img/akaer.svg"
import ApiUsers from "./ApiUsers";
import Lottie from "lottie-react"
import lazyload from "./img/lazyload.json"
import SparklyButton from "./SparklyButton";

class Elements extends React.Component {

    constructor() {
        super();
        this.state = {
            currentpage: "home",
            isMenuOpen: false,
        };
    }

    // API Calls
    // Lottie Animations
    // Plugins

    render() {

        return (
            <motion.div className="pt-5 px-10">

                <div className="pt-5 px-10 fixed left-0 h-screen w-1/2">

                    <div><img className="max-w-sm mb-5" src={akaerblack}></img></div>
                    <div className="mt-2 mb-5">
                        <p>the purpose of this page is to show React functions and their applications</p>
                    </div>

                    <div className="mt-2 mb-5">
                        <p>react is a lifecycle based framework that is really light on the browser. i learned how to code in 2019 at uc berkeley extn. we covered the full javascript stack, but i was always drawn to the front-end side. shortly after coding school, i started working in crypto and freelanced around the industry designing branding and front-ends. soon i was scouted to work at sony music in new york as a multimedia designer. there, i worked quickly on websites for artists, about 2-3 websites per month launchded with webflow.</p>
                    </div>
                    <div className="mt-2 mb-5">
                        <p>illustrator, photoshop, and after effects are all in my main bag of tricks. this past year i have been going on tour with some of my favorite bands as a photographe and videographer. i have held several art shows showcasing my paintings and i am happy to report i have sold 30+ paintings in the last couple years.</p>
                    </div>
                    <div className="mt-2 mb-10">
                        <p>my next challenge is to conquer the visual landscape of web apps and create my mark in the modern tech world.</p>
                    </div>
                    <div className="rounded bg-slate-100 p-10">
                        <ul>
                            <li>import React from 'react';</li>
                            <li>import ReactPlayer from 'react-player';</li>
                            <li>import &#123; AnimatePresence, motion, useAnimate, usePresence &#125; from "framer-motion";</li>
                            <li>import Lottie from lottie-react;</li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div></div>
                    <motion.div className="">
                        <motion.div className="mb-20">
                            <h1 className="font-title font-black mb-4">Quick Api Call</h1>
                            <ApiUsers />
                        </motion.div>
                        <motion.div className="mb-20">
                            <h1 className="font-title font-black mb-4">After Effects + Lottie Stuff</h1>
                            <Lottie animationData={lazyload} />
                        </motion.div>
                        <motion.div className="mb-20">
                            <h1 className="font-title font-black mb-4">Framer</h1>
                        </motion.div>
                        <div className="h-60 py-60 w-full flex items-center justify-center mb-20 border-2 rounded">
                            <SparklyButton />
                        </div>
                    </motion.div>
                </div>


            </motion.div>
        )
    }

}

export default Elements;
