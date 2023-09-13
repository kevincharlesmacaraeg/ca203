import './App.css';
import ApiCall from "./Apicall.js";
import Homepage from './Homepage';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Fragment, useState, setState, useEffect, Component } from 'react'
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
import coreLogo from './img/core-logo.svg'
import Navbar from './Navbar'
import { motion, useAnimate, usePresence } from "framer-motion"

// If you're reading this you are so sick and congrats you get to see some of the most beautiful code in the entire world (joking)

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
        {this.state.currentpage === "home" ? <Homepage currentpage={this.state.currentpage} /> : null}
        {/* {this.state.currentpage === "website" ? <Website currentpage={this.state.currentpage} /> : null} */}
      </div>
    );
  }
}

export default App;
