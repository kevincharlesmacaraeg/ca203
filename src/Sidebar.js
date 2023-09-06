import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Sidebar = () =>{
    return (
        <div className="fixed top-0 left-0 h-screen w-16 bg-red m-0 flex flex-col">
            <div className="">
                A
            </div>
            <div className="">
                B
            </div>
            <div className="">
                C
            </div>
            <div className="">
                D
            </div>
            <div className="">
                E
            </div>
        </div>
    )
}

export default Sidebar