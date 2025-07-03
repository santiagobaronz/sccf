'use server'

import { schemaPayment } from "@/data/schemas/payment/schemaPayment";
import { fetchPOST } from "@/data/services/fetchPOST";
import { MD5 } from "crypto-js";

function generateSignature(
    apiKey: string,
    merchantId: string,
    reference: string,
    amount: number,
    currency: string,
) {
    const data = `${apiKey}~${merchantId}~${reference}~${amount}~${currency}`;
    const signature = MD5(data).toString();
    return signature;
}

export default async function paymentAction(prevState: any, formData: FormData) {

    try {
        const validatedFields = schemaPayment.safeParse({
            name: formData.get("name"),
            lastname: formData.get("lastname"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            address: formData.get("address"),
            city: formData.get("city"),
            country: formData.get("country"),
            personType: formData.get("personType"),
            university: formData.get("university"),
            subscription: formData.get("subscription"),
        });

        if (!validatedFields.success) {
            return {
                ...prevState,
                apiErrors: null,
                zodErrors: validatedFields.error?.flatten().fieldErrors,
                message: "Faltan campos por completar.",
            };
        }

        const responseData = await fetchPOST({
            url: '/api/payments',
            body: validatedFields.data,
            error: 'Error al crear el pago',
        });

        if (!responseData) {
            return {
                ...prevState,
                apiErrors: responseData.error,
                zodErrors: null,
                message: "Ocurrió un error. Por favor, intenta de nuevo.",
            };
        }

        if (responseData.error) {

            return {
                apiErrors: "Ocurrio un error al crear el pago",
                zodErrors: null,
                message: "Error al crear el pago",
            };
        }

        const payload = {
            merchantId: process.env.PAYU_MERCHANT_ID,
            accountId: process.env.PAYU_ACCOUNT_ID,
            description: 'Pago de suscripción',
            referenceCode: `SUBSCRIPTION-${validatedFields.data.email}`,
            amount: 50000,
            tax: 0,
            taxReturnBase: 0,
            currency: 'COP',
            signature: generateSignature(
                process.env.PAYU_API_KEY as string,
                process.env.PAYU_MERCHANT_ID as string,
                `SUBSCRIPTION-${validatedFields.data.email}`,
                50000,
                'COP'
            ),
            test: 1,
            buyerEmail: validatedFields.data.email,
            responseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/response`,
            confirmationUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/api/payments/confirmation`,
            extra1: validatedFields.data.email
        };

        return { success: true, payload: payload };

    } catch (error) {
        console.error('Error al crear el pago: ', error);
        throw error;
    }

}