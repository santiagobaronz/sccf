import { z } from "zod";

export const schemaPayment = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    lastname: z.string().min(1, "El apellido es obligatorio"),
    email: z.string().email("Correo electrónico inválido").min(1, "El correo electrónico es obligatorio"),
    phone: z.string().min(1, "El teléfono es obligatorio"),
    address: z.string().min(1, "La dirección es obligatorio"),
    city: z.string().min(1, "La ciudad es obligatorio"),
    country: z.string().min(1, "El país es obligatorio"),
    personType: z.string().min(1, "El tipo de persona es obligatorio"),
    university: z.string().min(1, "La universidad es obligatorio"),
    subscription: z.string().min(1, "La suscripción es obligatorio"),
});