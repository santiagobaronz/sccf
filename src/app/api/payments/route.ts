import prisma from "@/lib/config/prisma";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { MD5 } from "crypto-js";

function generateRandomPassword(length: number = 12): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

async function generateHashedPassword(length = 12): Promise<string> {
    const plainPassword = generateRandomPassword(length);
    const hashedPassword = await bcrypt.hash(plainPassword, 10);
    return hashedPassword;
}

export async function POST(request: Request) {

    const body = await request.json();

    const hashedPassword = await generateHashedPassword();

    const user = await prisma.user.create({
        data: {
            email: body.email,
            firstName: body.name,
            lastName: body.lastname,
            phone: body.phone,
            address: body.address,
            city: body.city,
            country: body.country,
            personType: body.personType,
            university: body.university,
            password: hashedPassword,
        },
    });


    if (!user) {
        return NextResponse.json({ error: 'Error al crear el usuario' }, { status: 500 });
    }

    return NextResponse.json({ user });

}