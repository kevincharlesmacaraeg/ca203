import './App.css';
import kevinbg from "./img/kevinbg.jpg"
import { useState, Fragment } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import akaerblack from "./img/Asset 5 (2).svg"
import ApiCall from './Apicall';
import { motion, AnimatePresence, useAnimate, stagger } from "framer-motion"
import ReactPlayer from 'react-player'

const mountVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .5,
      duration: 1
    }
  }

}

function Splash() {
  return (
    <motion.div
      variants={mountVariant}
      initial="hidden"
      animate="visible"
      className="px-10">
      <img src={akaerblack}></img>

      <div className='p-10 flex justify-center items-center w-full'>
        <p className='max-w-sm mb-0'> the purpose of this website is to display the front-end development ability of los angeles-based creative director kevin charles macaraeg. macaraeg has spent the last year freelancing creating websites and brand identities for companies and traveling the world taking pictures on tour with his favorite bands. previously he has worked full-time in big tech and some of the largest companies in music.</p>
      </div>

      <div className='p-10 flex justify-center items-center w-full'>
        <div className="max-w-sm flex w-full justify-left">

           <p>previous companies</p>

        </div>

      </div>

      <motion.div className='flex '>
        <ReactPlayer width=" 100%" url="https://www.youtube.com/watch?v=Rf9yc4ZHJ-I&list=PLBPLVvU_jvGtuH9naOqjV78tQ3utnoLHy&index=1&t=274s" playing="true" muted="true" className="w-full" />
      </motion.div>
    </motion.div>
  )
}

function Homepage(props) {

  return (
    <div className="pt-5">
      <Splash />
    </div>
  );
}

export default Homepage;
