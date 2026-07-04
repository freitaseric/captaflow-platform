import { createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import type React from 'react';
import { AppHeader } from '#components/AppHeader';
import { Toaster } from '#components/ui/sonner';

export const Route = createRootRoute({
	shellComponent: RouteComponent,
});

function RouteComponent({ children }: { children: React.ReactNode }) {
	return (
		<>
			<AppHeader />
			{children}
			<Toaster />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	);
}
