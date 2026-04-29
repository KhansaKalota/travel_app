import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter mb-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">

        {/* TOP SECTION */}
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">

          {/* LOGO */}
          <Link href="/" className="mb-10">
            <Image
              src="/hilink-logo.svg"
              alt="logo"
              width={74}
              height={29}
            />
          </Link>

          {/* FOOTER LINKS */}
          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">

            {FOOTER_LINKS.map((column, index) => (
              <div key={index} className="flex flex-col gap-5">

                <h4 className="bold-18 whitespace-nowrap">
                  {column.title}
                </h4>

                <ul className="regular-14 flex flex-col gap-4 text-gray-30">

                  {column.links.map((link, idx) => (
                    <li key={idx}>
                      <Link href="/">
                        {link}
                      </Link>
                    </li>
                  ))}

                </ul>
              </div>
            ))}

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-5">

              <h4 className="bold-18 whitespace-nowrap">
                {FOOTER_CONTACT_INFO.title}
              </h4>

              {FOOTER_CONTACT_INFO.links.map((item, idx) => (
                <Link
                  href="/"
                  key={idx}
                  className="flex gap-4 md:flex-col lg:flex-row"
                >
                  <p className="whitespace-nowrap">
                    {item.label}:
                  </p>
                  <p className="medium-14 whitespace-nowrap text-blue-70">
                    {item.value}
                  </p>
                </Link>
              ))}

            </div>

          </div>
        </div>

        {/* LINE */}
        <div className="border bg-gray-20" />

        {/* COPYRIGHT */}
        <p className="regular-14 w-full text-center text-gray-30">
          2026 Hilink | All rights reserved
        </p>

      </div>
    </footer>
  )
}

export default Footer