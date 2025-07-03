'use client'

import { Link } from "next-view-transitions";
import { useEffect, useState } from "react";
import { TbAtom } from "react-icons/tb";

const images = [
	'/image1.jpg',
	'/image2.jpg',
	'/image3.jpg',
];

export default function Home() {

	const [currentImage, setCurrentImage] = useState(images[0]);

	useEffect(() => {
		const interval = setInterval(() => {
			const randomIndex = Math.floor(Math.random() * images.length);
			setCurrentImage(images[randomIndex]);
		}, 8000); // cambia cada 5 segundos

		return () => clearInterval(interval);
	}, []);

	return (
		<div>
			<div className="relative h-full w-full overflow-hidden">
				{/* Imagen de fondo */}
				<div
					className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 z-0"
					style={{ backgroundImage: `url(${currentImage})` }}
				></div>

				{/* Capa negra semi-transparente */}
				<div className="absolute inset-0 bg-black-900/75 z-10"></div>

				<section className="w-full relative z-20 py-28 md:py-24 lg:py-32 xl:py-48 max-sm:px-5">
					<div className="container px-4 md:px-6">
						<div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
							<div className="flex flex-col justify-center space-y-10">
								<div className="space-y-5">
									<h1 className="font-bold tracking-tighter text-5xl xl:text-6xl/none text-palette-white">
										Sociedad Colombiana de Ciencias Físicas
									</h1>
									<p className="max-w-[600px] text-palette-white/90 md:text-xl">
										Promoviendo el desarrollo académico, científico y social en el ámbito de la física en Colombia.
									</p>
								</div>
								<div className="flex gap-x-5 flex-wrap">
									<Link
										href="/miembros"
										className="home-link text-white font-normal px-8 py-2.5 bg-palette-blue rounded-md max-sm:mb-3"
									>
										Hazte Miembro
									</Link>
									<Link
										href="/#nosotros"
										className="home-link text-black font-normal px-8 py-2.5 bg-white rounded-md text-black-900"
									>
										Conoce más
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>



			<div className="bg-palette-white h-auto w-full py-20" id="nosotros">
				<div className="container px-4 md:px-6 flex flex-col items-center justify-center h-full">
					<div className="flex flex-col items-center justify-center space-y-6 text-center max-w-6xl mx-auto">
						<div className="inline-flex p-3 rounded-full bg-palette-blue/20 mb-2">
							<TbAtom className="h-10 w-10 text-palette-blue" />
						</div>
						<h2 className="text-3xl font-semibold tracking-tighter sm:text-4xl pb-2">Quiénes Somos</h2>
						<hr className="w-32 h-1 mx-auto my-4 bg-palette-blue border-0" />
						<p className="text-palette-gray md:text-xl leading-relaxed pt-5">
							La Sociedad Colombiana de Ciencias Físicas (SCCF) es una asociación sin ánimo de lucro que
							tiene por objeto promover el desarrollo académico, científico y social en el ámbito de la física;
							fomentar la colaboración, el intercambio de conocimientos y la formación integral tanto de sus
							miembros como de la comunidad en general; facilitar la conexión entre la industria y la academia
							colombiana; divulgar la física entre la comunidad; y contribuir al desarrollo de políticas
							científicas que beneficien el ejercicio profesional de los científicos.
						</p>
					</div>
				</div>
			</div>

			<div className="bg-palette-dark-blue lg:h-auto w-full py-14">
				<div className="container px-4 lg:px-6 lg:grid grid-cols-2 items-center justify-center h-full gap-10 max-lg:p-10 max-lg:space-y-10">
					<div className="max-w-6xl mx-auto bg-mision-vision p-12 rounded-xl">
						<h2 className="text-3xl text-white font-semibold mb-5">Misión</h2>
						<p className="text-palette-white/75 font-light">
							Crear un entorno dinámico y colaborativo que impulse el desarrollo integral de las ciencias
							físicas en Colombia. Para ello, nos comprometemos a fomentar la investigación, la formación
							académica y la divulgación científica, a la vez que fortalecemos y apoyamos el desarrollo
							profesional de los científicos. Buscamos crear alianzas estratégicas con el sector académico,
							industrial y gubernamental, promoviendo la cooperación y el intercambio de conocimientos con
							el fin de abordar y solucionar las problemáticas sociales y tecnológicas que afectan a nuestra
							nación.
						</p>
					</div>
					<div className="max-w-6xl mx-auto bg-mision-vision p-12 rounded-xl">
						<h2 className="text-3xl text-white font-semibold mb-5">Visión</h2>
						<p className="text-palette-white/75 font-light">
							Soñamos y visualizamos un país que valora su ciencia y a sus científicos, donde el conocimiento
							y la innovación sean fundamentales para el desarrollo social y económico. Aspiramos a construir
							una comunidad científica unida y sólida, que fortalezca la colaboración, impulse el desarrollo
							profesional de sus miembros y garantice su participación activa en la solución de los desafíos
							nacionales.
						</p>
					</div>
				</div>
			</div>

			<div className="bg-palette-white py-28">
				<div className="container px-4 md:px-6">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Nuestros Valores Fundamentales</h2>
						<p className="max-w-2xl mx-auto text-muted-foreground">
							Son los principios que guían nuestras acciones, asegurando que la organización opere de manera ética,
							efectiva y alineada con su visión y misión.
						</p>
						<div className="h-1 w-32 bg-palette-green rounded-full mx-auto mt-6"></div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{/* Valor 1 */}
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray/5">
							<div className="rounded-full bg-palette-green/10 p-3 w-14 h-14 flex items-center justify-center mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-7 w-7 text-palette-green"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-2">Transparencia</h3>
							<p className="text-muted-foreground">
								Garantizamos claridad en nuestros procesos administrativos, financieros y operativos, asegurando que
								nuestras decisiones y acciones sean abiertas y accesibles para todos los miembros.
							</p>
						</div>

						{/* Valor 2 */}
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray/5">
							<div className="rounded-full bg-palette-blue/10 p-3 w-14 h-14 flex items-center justify-center mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-7 w-7 text-palette-blue"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-2">Compromiso con la ciencia</h3>
							<p className="text-muted-foreground">
								Defendemos la rigurosidad científica, la búsqueda del conocimiento y el avance de la física como motor
								de desarrollo para el país.
							</p>
						</div>

						{/* Valor 3 */}
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray/5">
							<div className="rounded-full bg-palette-red/10 p-3 w-14 h-14 flex items-center justify-center mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-7 w-7 text-palette-red"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-2">Inclusión y diversidad</h3>
							<p className="text-muted-foreground">
								Fomentamos un entorno en el que todas las personas, sin distinción de género, origen o trayectoria,
								tengan igualdad de oportunidades para participar y contribuir.
							</p>
						</div>

						{/* Valor 4 */}
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray/5">
							<div className="rounded-full bg-palette-green/10 p-3 w-14 h-14 flex items-center justify-center mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-7 w-7 text-palette-green"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-2">Colaboración</h3>
							<p className="text-muted-foreground">
								Creemos en el trabajo conjunto entre científicos, instituciones y sectores estratégicos para fortalecer
								la comunidad científica y generar impacto.
							</p>
						</div>

						{/* Valor 5 */}
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray/5">
							<div className="rounded-full bg-palette-blue/10 p-3 w-14 h-14 flex items-center justify-center mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-7 w-7 text-palette-blue"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-2">Responsabilidad social</h3>
							<p className="text-muted-foreground">
								Promovemos el uso del conocimiento científico para abordar los desafíos de la sociedad colombiana,
								contribuyendo al bienestar común.
							</p>
						</div>

						{/* Valor 6 */}
						<div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray/5">
							<div className="rounded-full bg-palette-red/10 p-3 w-14 h-14 flex items-center justify-center mb-4">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-7 w-7 text-palette-red"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
									/>
								</svg>
							</div>
							<h3 className="text-xl font-bold mb-2">Innovación y excelencia</h3>
							<p className="text-muted-foreground">
								Nos esforzamos por desarrollar iniciativas que potencien la ciencia en Colombia, impulsando la calidad y
								la mejora continua en todas nuestras actividades.
							</p>
						</div>
					</div>
				</div>
			</div>

			<section className="w-full py-12 md:py-24 lg:py-20 bg-palette-blue/15">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Únete a SCCF</h2>
							<p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Forma parte de nuestra comunidad y accede a beneficios exclusivos para miembros.
							</p>
						</div>
						<div className="space-x-4">
							<Link href="/miembros">
								<button
									className="font-medium bg-palette-blue hover:bg-palette-blue/90 text-palette-white px-5 py-2 rounded-md transition-colors duration-200"
								>
									Hazte Miembro
								</button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
