'use client'

import { Link } from 'next-view-transitions';
import React, { useState } from 'react'
import { IoIosMenu } from 'react-icons/io';
import { MdOutlineClose } from 'react-icons/md';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md transition-all duration-300 ease-in-out">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="logo" className="w-14 h-14" />
            <span className="hidden font-bold sm:inline-block">SCCF</span>
          </Link>
        </div>

        <div className="flex-1 flex justify-start ml-8">
          <Link href="/registro">
            <button
              className="font-medium bg-palette-blue hover:bg-palette-blue/90 text-palette-white px-5 py-2 rounded-md transition-colors duration-200"
            >
              Hazte Miembro
            </button>
          </Link>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-scef-blue">
            Inicio
          </Link>
          <Link href="/nosotros" className="text-sm font-medium transition-colors hover:text-scef-blue">
            Nosotros
          </Link>
          <Link href="/nosotros" className="text-sm font-medium transition-colors hover:text-scef-blue">
            Donaciones
          </Link>
          <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-scef-blue">
            Contacto
          </Link>
        </nav>

        <button
          aria-label="Toggle Menu"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <MdOutlineClose className="h-6 w-6" /> : <IoIosMenu className="h-6 w-6" />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
            <nav className="container flex flex-col gap-4 py-4">
              <Link
                href="/"
                className="text-sm font-medium transition-colors hover:text-scef-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/nosotros"
                className="text-sm font-medium transition-colors hover:text-scef-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </Link>
              <Link
                href="/beneficios"
                className="text-sm font-medium transition-colors hover:text-scef-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Beneficios
              </Link>
              <Link
                href="/contacto"
                className="text-sm font-medium transition-colors hover:text-scef-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}