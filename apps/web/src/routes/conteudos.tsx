import { createFileRoute } from '@tanstack/react-router';
import { BookOpen, CalendarDays, FileText, LayoutTemplate } from 'lucide-react';

export const Route = createFileRoute('/conteudos')({
	component: RouteComponent,
});

const contentSections = [
	{
		id: 'conteudos-guias',
		title: 'Guias de captação',
		description:
			'Conteúdos práticos para estruturar busca de editais, triagem de oportunidades, rotina comercial e tomada de decisão.',
		icon: BookOpen,
		items: ['Como mapear editais relevantes', 'Como priorizar oportunidades', 'Rotina semanal de captação'],
	},
	{
		id: 'conteudos-modelos',
		title: 'Modelos de projetos',
		description:
			'Templates para acelerar propostas, orçamento, cronograma, plano de trabalho e documentação de apoio.',
		icon: LayoutTemplate,
		items: ['Modelo de proposta', 'Planilha de orçamento', 'Checklist documental'],
	},
	{
		id: 'conteudos-calendario',
		title: 'Calendário de editais',
		description:
			'Um espaço para reunir períodos importantes, chamadas recorrentes e datas que ajudam no planejamento anual.',
		icon: CalendarDays,
		items: ['Chamadas recorrentes', 'Datas críticas', 'Janelas de planejamento'],
	},
	{
		id: 'conteudos-blog',
		title: 'Blog',
		description:
			'Artigos sobre captação, prestação de contas, indicadores, gestão de projetos e governança institucional.',
		icon: FileText,
		items: ['Boas práticas', 'Análises de mercado', 'Gestão e produtividade'],
	},
];

function RouteComponent() {
	return (
		<main className="bg-background text-foreground">
			<section className="bg-white">
				<div className="mx-auto max-w-[1504px] px-6 py-20 lg:px-8">
					<p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
						Conteúdos
					</p>
					<h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-normal md:text-6xl">
						Materiais para amadurecer sua captação de recursos.
					</h1>
					<p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
						Esta página agrupa guias, modelos, calendário e artigos para apoiar
						equipes que querem sair do improviso e operar captação com método.
					</p>
				</div>
			</section>

			<section className="mx-auto grid max-w-[1504px] gap-6 px-6 py-20 lg:px-8">
				{contentSections.map(section => (
					<article
						key={section.id}
						id={section.id}
						className="scroll-mt-28 rounded-lg border border-border bg-card p-7">
						<div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
							<div>
								<section.icon className="size-10 text-primary" />
								<h2 className="mt-5 text-2xl font-semibold">
									{section.title}
								</h2>
								<p className="mt-3 text-sm leading-6 text-muted-foreground">
									{section.description}
								</p>
							</div>
							<div className="grid gap-3 md:grid-cols-3">
								{section.items.map(item => (
									<div
										key={item}
										className="rounded-md border border-border bg-background p-4 text-sm font-medium">
										{item}
									</div>
								))}
							</div>
						</div>
					</article>
				))}
			</section>
		</main>
	);
}
