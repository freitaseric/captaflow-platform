import { authClient } from './authClient';

export async function signInEmail(input: {
	email: string;
	password: string;
	callbackURL?: string;
	rememberMe?: boolean;
}) {
	return authClient.signIn.email(input);
}

export type SignInEmailResult = Awaited<ReturnType<typeof signInEmail>>;

export async function signInWithGoogle(input?: { callbackURL?: string }) {
	return authClient.signIn.social({
		provider: 'google',
		callbackURL: input?.callbackURL,
	});
}

export type SignInWithGoogleResult = Awaited<
	ReturnType<typeof signInWithGoogle>
>;

export async function signUpEmail(input: {
	name: string;
	email: string;
	password: string;
	callbackURL?: string;
}) {
	return authClient.signUp.email(input);
}

export type SignUpEmailResult = Awaited<ReturnType<typeof signUpEmail>>;
