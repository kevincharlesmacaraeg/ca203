import './App.css';
import Homepage from './Homepage';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Fragment, useState, setState, useEffect, Component } from 'react'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import coreLogo from './img/core-logo.svg'
import Navbar from './Navbar'
import { AnimatePresence, motion, useAnimate, usePresence } from "framer-motion"
import Elements from './Elements';
import Lottie from "lottie-react"
import lazyload from "./img/lazyload.json"


// If you're reading this you are so sick and congrats you get to see some of the most beautiful code in the entire world (joking)

const LottieFlag =() => {

  return(
    <div className="fixed bottom-5 left-5 h-20 w-20">
      <Lottie data={lazyload} />
    </div>
  )
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentpage: "home",
      isMenuOpen: false,
    };
  }

  // const [nameState, setNameState] = useState('')

  componentDidMount = () => {
    console.log(this.state.currentpage)
  }

  componentDidUpdate = () => {
    console.log(this.state.currentpage)
  }

  render() {
    return (
      <div className="">
        <Navbar
          changeToHome={
            (input) => {
              this.setState({ currentpage: input })
            }
          }
          currentpage={this.state.currentpage}
        />
        <AnimatePresence>
          <motion.div exit={{
            opacity: 0,
            transition: {
              duration: 3,
              delay: .5
            }
          }}>
            {this.state.currentpage === "home" ? <Homepage currentpage={this.state.currentpage} /> : null}
            {this.state.currentpage === "elements" ? <Elements currentpage={this.state.currentpage} /> : null}
          </motion.div>
        </AnimatePresence>
        <LottieFlag />
      </div>
    );
  }
}

export default App;
