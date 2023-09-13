import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { motion, useAnimate, usePresence } from "framer-motion"

const mountVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 5,
      duration: 1
    }
  }

}


const coreskills = [
  { name: 'Web+AR Desgin', description: 'Working with artists and brands', href: '#', icon: ChartPieIcon },
  { name: 'Photography', description: 'Tour, corporate, events, and studio photography', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Graphic Design', description: 'Corporate designer working with Grammy-Award winning artists and independent artists alike', href: '#', icon: FingerPrintIcon },
  { name: 'Painting', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
]

const showcase = [
  { name: 'Web+AR Desgin', description: 'Working with artists and brands', href: '#', icon: ChartPieIcon },
  { name: 'Photography', description: 'Tour, corporate, events, and studio photography', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Graphic Design', description: 'Corporate designer working with Grammy-Award winning artists and independent artists alike', href: '#', icon: FingerPrintIcon },
  { name: 'Painting', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
]

const callsToAction = [
  { name: 'Watch MTV Show', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar(props) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(true)

  return (
    <motion.div
      variants={mountVariant}
      initial="hidden"
      animate="visible"
      className="z-50 bg-white fixed right-5 bottom-5 rounded drop-shadow-xl flex flex-col flex-auto w-100 divide-y-2"  
    >
      <div className='border-slate-200 w-full px-10 py-2 '>
        development tab
      </div>
      <div className='border-slate-200 px-10 py-2 w-full hover:bg-slate-200'>
        <a onClick={() => { props.changeToHome("home") }} className="text-sm font-semibold leading-6 w-full">
          home
        </a>
      </div>
      <div className='border-slate-200 px-10 py-2 w-full hover:bg-slate-200'>
        <a onClick={() => { props.changeToHome("home") }} className="text-sm font-semibold leading-6 w-full">
          api calls
        </a>
      </div>
      <div className='border-slate-200 px-10 py-2 w-full hover:bg-slate-200'>
        <a onClick={() => { props.changeToHome("home") }} className="text-sm font-semibold leading-6 w-full">
          input form
        </a>
      </div>
      <div className='border-slate-200 px-10 py-2 w-full hover:bg-slate-200'>
        <a onClick={() => { props.changeToHome("home") }} className="text-sm font-semibold leading-6 w-full">
          animation
        </a>
      </div>
      <div className='border-slate-200 px-10 py-2 w-full hover:bg-slate-200'>
        <a onClick={() => { props.changeToHome("home") }} className="text-sm font-semibold leading-6 w-full">
          github repo
        </a>
      </div>
      <div className='px-10 py-2 w-ful'>
        <p className="max-w-xs text-xs">
          the purpose of this website is to display the front-end development ability of kevin charles macaraeg
        </p>
      </div>
    </motion.div>
  )
}

export default Navbar