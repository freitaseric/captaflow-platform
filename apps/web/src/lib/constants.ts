import { publicEnv } from './env';

export default {
	backendBaseUrl: publicEnv.apiBaseUrl,
} as const;
