export const config = {
	expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
	path: "/",
	domain:  process.env.NEXT_PUBLIC_CK,
	httpOnly: true,
	sameSite: "lax" as "lax",
	secure: true,
};