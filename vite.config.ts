import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsConfigPath from 'vite-tsconfig-paths';
import { hostPath } from './helpers';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tsConfigPath()],
	server: {
		port: 3000,
		fs: {
			strict: false,
		},
	},
	base: hostPath,
});
