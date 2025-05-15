import { Link } from 'next-view-transitions'
import React from 'react'

export const Footer = () => {
	return (
		<footer className="w-full border-t bg-palette-dark-blue text-palette-white py-6 md:py-8">
			<div className="container flex flex-col items-center justify-between gap-4 md:flex-row md:gap-8">
				<div className="flex items-center gap-2">
					<span className="font-semibold">SCCF</span>
				</div>
				<p className="text-center text-sm text-scef-white/80 md:text-left">
					&copy; {new Date().getFullYear()} Sociedad Colombiana de Ciencias Físicas. Todos los derechos reservados.
				</p>
				<div className="flex gap-4">
					<Link href="/terminos" className="text-sm text-scef-white/80 hover:text-scef-white">
						Términos
					</Link>
					<Link href="/privacidad" className="text-sm text-scef-white/80 hover:text-scef-white">
						Privacidad
					</Link>
				</div>
			</div>
		</footer>
	)
}