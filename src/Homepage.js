import './App.css';
import kevinbg from "./img/kevinbg.jpg"
import { useState, Fragment } from 'react'
import { motion, animate, AnimatePresence, useAnimate, stagger } from "framer-motion"
import ReactPlayer from 'react-player'
import akaerblack from "./img/akaer.svg"
import logo1 from './img/logo-1.svg'
import logo2 from './img/logo-2.svg'
import logo3 from './img/logo-3.svg'
import logo4 from './img/logo-4.svg'
import image1 from "./img/website1.png"
import image2 from "./img/website2.png"
import image3 from "./img/website3.png"
import webflow from "./img/webflow.png"
import Iframe from "react-iframe"

const mountVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .5,
      duration: 1,
    }
  }
}

const portfolioArray = [
  {
    url: "https://www.rockeysliqueur.com/",
    description: "web development for rockeys liqueur",
  },
  {
    url: "https://www.groundreview.com/",
    desription: "web development, branding, more for ground review"
  },
  {
    url: "https://www.akaer.studio",
    description: "standing website for akaer studio featuring designs made by kevin charles macaraeg"
  }
]

const cvitems = [
  {
    company: "Akaer Studio",
    position: "Creative Director",
    location: "Los Angeles, California",
    years: "2022-present",
    school: false
  },
  {
    company: "Franc Moody",
    position: "Tour Photographer + Social Media Designer",
    location: "London, United Kingdom",
    years: "2022-present",
    school: false
  },
  {
    company: "The Orchard (Sony Music)",
    position: "Multimedia Designer",
    location: "New York, New York",
    years: "2019-2022",
    school: false
  },
  {
    company: "DesignCoin",
    position: "Web Designer",
    location: "San Francisco, California",
    years: "2018-2019",
    school: false
  },
  {
    company: "Snap, Inc",
    position: "Content Analyst",
    location: "San Francisco, California",
    years: "2017-2018",
    school: false
  },
  {
    company: "UC Berkeley Extn",
    position: "Full-Stack Coding Bootcamp",
    location: "Berkeley, California",
    years: "2019",
    school: true
  },
  {
    company: "San Francisco State University",
    position: "Graphic Design",
    location: "San Francisco, California",
    years: "2018",
    school: true
  },

]

const Splash = () => {

  const draw = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      y: -3,
      transition: {
        delay: 1.5,
        duration: 1
      }
    }
  };

  return (
    <div>

      <motion.div
        variants={mountVariant}
        initial="hidden"
        animate="visible"
        className="px-10 pb-20">
        <img src={akaerblack}></img>
        <div className='md:p-10 pt-5 pb-0 flex justify-center w-full'>
          <p className='md:max-w-sm mb-0'>this website is to display the front-end development abilities of los angeles-based creative director kevin charles macaraeg. macaraeg has spent the last year freelancing creating websites and brand identities for companies and traveling the world taking pictures on tour with his favorite bands. he has worked full-time for big tech and some of the largest companies in music.</p>
        </div>
        <div className='md:p-10 py-10 flex justify-center items-center w-full'>
          <div className="md:max-w-sm flex w-full justify-left flex-col mb-20">
            <p>previous companies</p>
            <div className='flex '>
              <motion.img
                initial="hidden"
                animate="visible"
                className="w-1/4 p-4"
                variants={draw}
                src={logo3} />
              <motion.img
                initial="hidden"
                animate="visible"
                className="w-1/4 p-4"
                variants={draw}
                src={logo2} />
              <motion.img
                initial="hidden"
                animate="visible"
                className="w-1/4 p-4"
                variants={draw}
                src={logo4} />
              <motion.img
                initial="hidden"
                animate="visible"
                className="w-1/4 p-4"
                variants={draw}
                src={logo1} />
            </div>
          </div>
        </div>
        <motion.div className='rounded overflow-hidden pb-40'>
          <p className="font-title text-xl mb-10 font-black">Kevin Charles Macaraeg Wins Contest on MTV</p>
          <ReactPlayer width=" 100%" url="https://www.youtube.com/watch?v=Rf9yc4ZHJ-I&list=PLBPLVvU_jvGtuH9naOqjV78tQ3utnoLHy&index=1&t=274s" playing="true" muted="true" className="w-full " />
        </motion.div>
        <motion.div className="pt-20 pb-40">
          <h1 className="font-title mb-10 text-xl font-black">Recent Websites</h1>
          <div className="grid gap-4 ">
            {portfolioArray?.map((item) => (
              <div className='md:p-10 p-0 rounded drop-shadow-lg bg-white mb-4' href={item.url}  >
                <div className=''>
                  <div className="w-full h-800 relative">
                    <motion.div onClick={() => { console.log("hide") }} className="cursor-pointer hidden md:flex absolute w-full h-full bg-slate-500 opacity-80 text-white items-center justify-center hover:opacity-50">see website</motion.div>
                    <Iframe className="md:invisible flex" url={item.url} width="100%" height="600px" />
                  </div>
                  <div className="items-end justify-end h-full flex flex-col mt-10" >
                    <p>{item.description}</p>
                    <button href={item.url} className="rounded-full text-white px-4 text-xs py-2 mt-2 bg-black hover:bg-slate-400 transition-all">go to website here</button>
                    <p className="mt-6 text-xs">designed and coded with webflow</p>
                    <img src={webflow} className="h-5 mt-2" />
                  </div>
                </div>
              </div >
            ))}
          </div>
        </motion.div>
        <div>
          <h1 className="font-title mb-10 text-xl font-black">CV</h1>
          <div>
            {cvitems?.map((item) => (
              <div className="border-b-2 grid-cols-4 grid gap-4 border-slate-100 mb-2 pb-2">
                <h1 className="text-xs">{item.location}</h1>
                <h1 className="text-xs">{item.company}</h1>
                <h1 className="text-xs">{item.position}</h1>
                <h1 className="text-xs">{item.years}</h1>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
      <div className='bg-black p-20 mt-40'>
        <img className="rotate-180 invert" src={akaerblack}></img>
        <div className='grid w-full grid-cols-3 mt-5 gap-4 mb-40'>
          <a className="px-4 py-2 border-2 border-white rounded-full text-white hover:text-red-500 transition text-center hover:border-red-500" href="https://www.linkedin.com/in/sandiegokevin">see linkedin</a>
          <a className="px-4 py-2 border-2 border-white rounded-full text-white hover:text-red-500 transition text-center hover:border-red-500" href="https://www.akaer.studio">see live creative director portfolio</a>
          <a className="px-4 py-2 border-2 border-white rounded-full text-white hover:text-red-500 transition text-center hover:border-red-500" href="mailto:kevin@akaer.studio">see email</a>
        </div>
      </div>
    </div>
  )
}

const Homepage = () => {
  const [scope, animate] = useAnimate();
  return (
    <div className="pt-5">
      <Splash ref={scope} />
    </div>
  );
}

export default Homepage;