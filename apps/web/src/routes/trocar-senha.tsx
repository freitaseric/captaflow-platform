import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/trocar-senha')({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/trocar-senha"!</div>;
}
