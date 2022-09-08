import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function Header() {
  const Navtool = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Contact Us", link: "/" },
    { name: "Properties", link: "/" },
  ]
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className='grid grid-cols-8 relative'>
        <div className='col-span-2 relative w-32 h-32 mx-20'>
          <Image
            src='/img/logo.png'
            objectFit='contain'
            layout='fill'
            className='w-fit h-fit'
          />
        </div>
        <div className='col-span-4'>
          {/* <ul className="flex justify-end gap-16 pt-14">
            {Navtool.map((link) => (
              <li key={link.name} className="hover:text-helper font-semibold text-xl">
                <Link href={link.link} className="">{link.name}</Link>
              </li>
            ))
            }
          </ul> */}

        </div>
        <div className='col-span-2 mx-auto ' onClick={() => setOpen(!open)}>
        {!open ?
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-white w-16 pt-10 cursor-pointer hover:stroke-helper"
            viewBox="0 0 512 512"
          >
            <path
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M80 160h352M80 256h352M80 352h352"
            ></path>
          </svg>:
          <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-white w-16 pt-10 cursor-pointer hover:stroke-helper"
          viewBox="0 0 512 512"
      >
          <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144m224 0L144 368"
          ></path>
      </svg>}
        </div>
          <div className='col-span-6'></div>
          <div className={`${!open && 'invisible'} col-span-2 pt-20 bg-[rgba(0,0,0,0.5)]`}>
            <ul className="h-full">
              {Navtool.map((link) => (
                <li key={link.name} className="hover:text-helper font-semibold mb-10 text-xl">
                  <Link href={link.link} className="">{link.name}</Link>
                </li>
              ))
              }
            </ul>
          </div>

        </div>
    </>
  )
}

export default Header
