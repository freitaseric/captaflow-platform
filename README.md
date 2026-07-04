# CaptaFlow Platform

Monorepo da plataforma CaptaFlow.

## Estrutura

```txt
.
|-- apps/
|   |-- api/
|   `-- desktop/
|-- packages/
|   |-- config/
|   `-- types/
|-- package.json
|-- pnpm-workspace.yaml
`-- turbo.json
```

## Projetos

| Caminho | Descricao |
| --- | --- |
| `apps/api/` | API HTTP em Fastify com TypeScript, Better Auth, Drizzle ORM e PostgreSQL. |
| `apps/web/` | App web publico usado para login, cadastro e retorno do fluxo desktop. |
| `apps/desktop/` | App desktop Tauri com Vite, React e TypeScript. |
| `packages/config/` | Base para configuracoes compartilhadas do workspace. |
| `packages/contracts/` | Pacote para contratos compartilhados entre apps. |

## Requisitos

- Node.js >= 22
- pnpm 11.9.0
- Docker e Docker Compose, para o PostgreSQL local da API
- Rust/Tauri toolchain, para os comandos Tauri do app desktop

## Instalacao

Instale as dependencias na raiz do monorepo:

```sh
pnpm install
```

## Desenvolvimento

```sh
pnpm dev
```

O comando acima e orquestrado pelo Turborepo e executa os scripts `dev` dos
apps do workspace.

Para rodar apenas um app:

```sh
pnpm --filter captaflow-api dev
pnpm --filter captaflow-desktop dev
```

## Comandos

| Comando | Descricao |
| --- | --- |
| `pnpm dev` | Executa os apps em desenvolvimento via Turbo. |
| `pnpm build` | Executa os builds dos pacotes/apps. |
| `pnpm check` | Executa typecheck e lint dos pacotes/apps. |
| `pnpm typecheck` | Executa apenas os typechecks. |
| `pnpm lint` | Executa os lints do Biome. |
| `pnpm format` | Executa os formatadores definidos nos pacotes/apps. |

## API

Crie o arquivo `.env` em `apps/api/`:

```env
NODE_ENV=development
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/captaflow
WEB_PUBLIC_URL=http://localhost:5173
API_PUBLIC_URL=http://localhost:3000
CORS_ALLOWED_ORIGINS=http://localhost:5173
GOOGLE_CLIENT_ID=local-google-client-id
GOOGLE_CLIENT_SECRET=local-google-client-secret
```

Variaveis publicas de build:

| App | Arquivo local sugerido | Variaveis |
| --- | --- | --- |
| `apps/web` | `.env.local` | `VITE_API_BASE_URL=http://localhost:3000` |
| `apps/desktop` | `.env.local` | `VITE_API_BASE_URL=http://localhost:3000`, `VITE_WEB_BASE_URL=http://localhost:5173` |

As variaveis `VITE_*` sao embutidas pelo Vite no momento do build. No bundle
do Tauri elas nao sao lidas do ambiente do usuario final. Em build de producao,
web e desktop falham se as URLs publicas obrigatorias nao estiverem definidas.

Suba o PostgreSQL local a partir de `apps/api/`:

```sh
docker compose up -d
```

Mais detalhes em [apps/api/README.md](apps/api/README.md).

## Licenca

Este projeto usa a licenca Apache 2.0. Veja [LICENSE](LICENSE).
