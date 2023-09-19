import { Fragment, useState } from 'react'
import { motion, useAnimate, usePresence } from "framer-motion"

const mountVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1
    }
  }

}

const navItems = [
  {
    pageName: "home",
    pageName2: "home",
  },
  {
    pageName: "elements",
    pageName2: "elements",
  },
]

const Navbar = (props) => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(true)

  return (
    <motion.div
      variants={mountVariant}
      initial="hidden"
      animate="visible"
      className="z-50 bg-white fixed right-5 bottom-5 rounded drop-shadow-xl flex flex-col flex-auto w-100 divide-y-2 overflow-hidden"
    >
      <div className='border-slate-100 w-full px-10 py-2 bg-slate-100'>
        <a className="text-sm font-semibold leading-6 w-full">
          development tab
        </a>
      </div>
      {navItems?.map((item) => (
          <a onClick={() => { props.changeToHome(item.pageName) }} className="border-slate-100 px-10 py-2 w-full transition-all hover:bg-slate-400 cursor-pointer text-sm leading-6">
            {item.pageName2}
          </a>
      ))}
      <a href="mailto:kevin@akaer.studio" className='px-10 py-2 text-sm transition-all hover:bg-slate-400 cursor-pointe'>contact</a>
    </motion.div>
  )
}

export default Navbar