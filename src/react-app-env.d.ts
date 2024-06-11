/// <reference types="react-scripts" />
declare namespace NodeJS {
	interface ProcessEnv {
		REACT_APP_BASE_URL: string
		REACT_APP_SECRET_KEY: string
	}
}
