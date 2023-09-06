import './App.css';
import ApiCall from "./Apicall.js";
import Homepage from './Homepage';
import React from 'react';
import Banner from './Banner';
import { Fragment, useState, setState, Component } from 'react'
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
import Website from "./Website"
import MTV from "./MTV"
import Reels from "./Reels"

// If you're reading this you are so sick and congrats you get to see some of the most beautiful code in the entire world (joking)

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentpage: "home"
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
        {/* <h1 onClick={()=>this.changePage()} className="fixed m-bottom-0 z-50">{this.state.currentpage} </h1> */}

        <Navbar 
          changeToHome={
            (input)=>{
              console.log("on click app" + input);
              this.setState({currentpage: input})
            }
          } 
          currentpage={this.state.currentpage}
        />

        {this.state.currentpage === "home" ? <Homepage currentpage={this.state.currentpage} /> : null}

        {this.state.currentpage === "website" ? <Website currentpage={this.state.currentpage} /> : null}

        {this.state.currentpage === "mtv" ? <MTV currentpage={this.state.currentpage} /> : null}

        {this.state.currentpage === "reels" ? <Reels currentpage={this.state.currentpage} /> : null}
      </div>
    );
  }
}

export default App;
