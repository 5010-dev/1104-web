/// <reference types="react-scripts" />
declare namespace NodeJS {
	interface ProcessEnv {
		REACT_APP_BASE_URL: string
		REACT_APP_SECRET_KEY: string
		REACT_APP_ENV: string
		REACT_APP_STIBEE_API_KEY: string
		REACT_APP_STIBEE_EMAIL_LIST_ID: string
		REACT_APP_CLIENT_KEY: string
	}
}
