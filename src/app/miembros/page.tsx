'use client'

import Link from "next/link"
import { getNames } from 'country-list';
import { useActionState, useEffect, useState } from "react";
import paymentAction from "@/data/actions/payment/paymentAction";

const INITIAL_STATE = {
    apiErrors: null,
    zodErrors: null,
    data: null,
    message: null,
};

export default function RegistroPage() {

    const countries = getNames();
    const [selectedCountry, setSelectedCountry] = useState('');
    const [personType, setPersonType] = useState('');
    const [universities, setUniversities] = useState<string[]>([]);
    const [selectedUniversity, setSelectedUniversity] = useState('');
    const [formStatePayment, formActionPayment] = useActionState(paymentAction, INITIAL_STATE);

    useEffect(() => {
        if (formStatePayment?.payload) {
            const sendToPayU = () => {
                const form = document.createElement("form");
                form.method = "POST";
                form.action = "https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/";
                form.style.display = "none";

                for (const key in formStatePayment.payload) {
                    if (formStatePayment.payload.hasOwnProperty(key)) {
                        const input = document.createElement("input");
                        input.type = "hidden";
                        input.name = key;
                        input.value = formStatePayment.payload[key];
                        form.appendChild(input);
                    }
                }

                document.body.appendChild(form);
                form.submit();
            };

            sendToPayU();
        }
    }, [formStatePayment]);

    useEffect(() => {
        if (
            selectedCountry &&
            (personType === 'STUDENT' || personType === 'TEACHER')
        ) {
            fetch(`http://universities.hipolabs.com/search?country=${selectedCountry}`)
                .then((res) => res.json())
                .then((data: { name: string }[]) => {
                    const uniqueUniversities = Array.from(new Set(data.map((uni) => uni.name)));
                    setUniversities(uniqueUniversities);
                });
        } else {
            setUniversities([]);
        }
    }, [selectedCountry, personType]);

    return (
        <div className="container max-w-4xl py-20">
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-md:mx-8">
                <h1 className="text-4xl font-bold tracking-tighter">Hazte Miembro</h1>
                <p className="text-muted-foreground text-lg">
                    Completa el formulario para unirte a la Sociedad Colombiana de Ciencias Físicas.
                </p>
            </div>

            <form action={formActionPayment} className="mx-auto mt-8 grid gap-8 md:grid-cols-2 max-md:mx-8">
                <div className="border rounded-lg p-6 border-gray/20">
                    <h2 className="text-xl font-semibold mb-2">Información Personal</h2>
                    <p className="text-muted-foreground text-sm mb-6">
                        Ingresa tus datos personales para completar el proceso de pago.
                    </p>

                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Nombre
                                </label>
                                <input id="name" name="name" placeholder="Tu nombre" className="w-full border border-gray/20 py-2 pl-4 rounded-md" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastname" className="text-sm font-medium">
                                    Apellido
                                </label>
                                <input id="lastname" name="lastname" placeholder="Tu apellido" className="w-full border border-gray/20 py-2 pl-4 rounded-md" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">
                                Correo Electrónico
                            </label>
                            <input id="email" name="email" type="email" placeholder="tu@email.com" className="w-full border border-gray/20 py-2 pl-4 rounded-md" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium">
                                Teléfono
                            </label>
                            <input id="phone" name="phone" type="tel" placeholder="+57 300 123 4567" className="w-full border border-gray/20 py-2 pl-4 rounded-md" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="address" className="text-sm font-medium">
                                Dirección
                            </label>
                            <input id="address" name="address" placeholder="Tu dirección" className="w-full border border-gray/20 py-2 pl-4 rounded-md" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="city" className="text-sm font-medium">
                                    Ciudad
                                </label>
                                <input id="city" name="city" placeholder="Tu ciudad" className="w-full border border-gray/20 py-2 pl-4 rounded-md" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="country" className="text-sm font-medium">
                                    País
                                </label>
                                <select
                                    id="country"
                                    name="country"
                                    value={selectedCountry}
                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                    className="w-full border border-gray/20 py-2 pl-4 rounded-md"
                                >
                                    <option value="" disabled>Seleccionar</option>
                                    {countries.map((country) => (
                                        <option key={country} value={country}>{country}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="personType" className="text-sm font-medium">
                                Tipo de persona
                            </label>
                            <select
                                id="personType"
                                name="personType"
                                value={personType}
                                onChange={(e) => setPersonType(e.target.value)}
                                className="w-full border border-gray/20 py-2 pl-4 rounded-md"
                            >
                                <option value="" disabled>Selecciona una opción</option>
                                <option value="STUDENT">Estudiante</option>
                                <option value="TEACHER">Profesor</option>
                                <option value="OTHER">Otro</option>
                            </select>
                        </div>

                        {((personType === 'STUDENT' || personType === 'TEACHER') && selectedCountry) && (
                            <div className="space-y-2">
                                <label htmlFor="university" className="text-sm font-medium">
                                    Universidad
                                </label>
                                <select
                                    id="university"
                                    name="university"
                                    value={selectedUniversity}
                                    onChange={(e) => setSelectedUniversity(e.target.value)}
                                    className="w-full border border-gray/20 py-2 pl-4 rounded-md"
                                >
                                    <option value="" disabled>Selecciona tu universidad</option>
                                    {universities.length === 0 ? (
                                        <option value="">Cargando universidades...</option>
                                    ) : (
                                        universities.map((uni) => (
                                            <option key={uni} value={uni}>{uni}</option>
                                        ))
                                    )}
                                </select>
                            </div>
                        )}
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="border rounded-lg p-6 border-gray/20">
                        <h2 className="text-xl font-semibold mb-2">Membresía</h2>
                        <p className="text-muted-foreground text-sm mb-6">
                            En la SCCF ofrecemos un único plan de suscripción anual.
                        </p>

                        <div className="border rounded-lg p-6 border-gray/20">
                            <div className="flex items-center">
                                <div className="flex items-center h-5">
                                    <input
                                        id="subscription"
                                        name="subscription"
                                        type="radio"
                                        value={"Anual Subscription"}
                                        className="h-4 w-4 text-scef-blue border-gray-300"
                                        defaultChecked
                                    />
                                </div>
                                <div className="flex justify-between items-center w-full ml-3">
                                    <div>
                                        <label htmlFor="subscription" className="font-medium text-gray-900">
                                            Suscripción
                                        </label>
                                        <p className="text-sm text-gray-500">Acceso completo a todos los beneficios.</p>
                                    </div>
                                    <div className="font-semibold">$50.000/año</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="border rounded-lg p-6 border-gray/20">
                        <h2 className="text-xl font-semibold mb-2">Checkout de pago</h2>
                        <p className="text-muted-foreground text-sm mb-6">Comprueba los detalles del pago.</p>

                        <div className="space-y-1">
                            <div className="flex justify-between">
                                <span className="text-sm font-medium">Tipo de pago</span>
                                <span className="text-sm font-medium text-palette-gray">Suscripción</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-sm font-medium">Total a pagar</span>
                                <span className="text-sm font-medium text-palette-gray">$50.000 COP</span>
                            </div>
                        </div>

                        <p className="text-xs text-muted-foreground mt-6">
                            Al hacer clic en Proceder al Pago, aceptas nuestros{" "}
                            <Link href="/terminos" className="text-scef-blue hover:underline">
                                Términos y Condiciones
                            </Link>{" "}
                            y{" "}
                            <Link href="/privacidad" className="text-scef-blue hover:underline">
                                Política de Privacidad
                            </Link>
                        </p>

                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-palette-blue text-palette-white mt-5 rounded-md hover:bg-blue-200 transition-colors"
                        >
                            Proceder al Pago
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
