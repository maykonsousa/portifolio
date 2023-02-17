declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production";
		PORT: string;
		EMAIL_USER: string;
		EMAIL_PASS: string;
		MY_LINKEDIN: string;
		MY_GITHUB: string;
		MY_TWITTER: string;
		MY_FACEBOOK: string;
		MY_INSTAGRAM: string;
	}
}
