
# Landing Page NEXORA — Estrutura Inicial

Vou montar o esqueleto visual da landing page seguindo à risca o sistema de design fornecido (dark mode, paleta Midnight Navy + acentos neon, tipografia Plus Jakarta Sans / Inter / Sora).

## 1. Sistema de Design (`src/styles.css`)

Reescrever os tokens do tema para refletir a identidade NEXORA:

- `--background`: `#070A14` (Deep Background)
- `--card` / superfícies elevadas: `#0B1020` (Midnight Navy)
- `--foreground`: branco levemente frio
- `--primary`: `#00F5A0` (Neon Green — usado nos CTAs) com `--primary-foreground` escuro `#04121B`
- `--accent`: `#00E5FF` (Cyan — detalhes IA)
- Tokens extras: `--tech-blue: #2D8CFF`, `--electric-purple: #7A3CFF`, `--neon-green: #00F5A0`, `--cyan: #00E5FF`, registrados em `@theme inline` para virarem utilitários (`text-tech-blue`, `bg-neon-green`, etc.)
- Borders/inputs sutis em branco 8–12% de opacidade para o visual clean
- Forçar `.dark` no `<html>` no shell root (dark mode obrigatório, sem toggle)

## 2. Tipografia

- Carregar via `<link>` no `head()` do `__root.tsx` (regra Tailwind v4 — nunca `@import` remoto no CSS):
  - Plus Jakarta Sans (600/700/800) — títulos
  - Inter (400/500) — corpo
  - Sora (700) — apenas o logo "NEXORA"
- Registrar em `@theme`:
  - `--font-display: "Plus Jakarta Sans", sans-serif`
  - `--font-sans: "Inter", sans-serif`
  - `--font-logo: "Sora", sans-serif`
- Aplicar `font-sans` no `<body>` e `font-display` nos títulos.

## 3. Metadados (`src/routes/__root.tsx`)

Substituir os placeholders "Lovable App":

- title: `NEXORA — Soluções digitais para PMEs`
- description: `Sites rápidos e otimizados que colocam negócios locais no topo do Google.`
- og:title / og:description / twitter equivalentes
- Sem og:image nesta fase (regra: não usar placeholder)

## 4. Home (`src/routes/index.tsx`)

Remover o placeholder e montar dois componentes:

### Header (`src/components/site-header.tsx`)
- Container full-width, `sticky top-0`, fundo `bg-background/70` com `backdrop-blur`, borda inferior sutil
- Esquerda: logo `NEXORA` em `font-logo font-bold tracking-tight text-xl` — a letra "O" ou o ponto final recebendo um leve gradiente cyan→purple para toque premium
- Centro (desktop): links "Serviços" e "Portfólio" em `text-sm text-muted-foreground hover:text-foreground`
- Direita: botão CTA "Falar com Consultor" — pill, `bg-neon-green text-[#04121B] font-semibold`, hover com leve glow (`shadow-[0_0_24px_-4px_#00F5A0]`)
- Mobile: colapsa os links, mantém logo + CTA compacto

### Hero (`src/components/hero.tsx`)
- Seção `min-h-[calc(100vh-4rem)]`, centralizada, layout coluna única, bastante respiro
- Fundo: `bg-background` com um "spotlight" radial suave usando cyan/purple em opacidade baixa (blur pesado) posicionado atrás do título — sensação premium sem poluir
- Eyebrow pequeno acima do H1: pill discreta com ponto cyan pulsante + texto "Agência de soluções digitais" em `text-cyan/80 text-xs uppercase tracking-[0.2em]`
- H1: "Transformamos confiança em crescimento." — `font-display` extrabold, `text-5xl md:text-7xl`, `leading-[1.05] tracking-tight`. A palavra "crescimento" recebe gradiente `from-neon-green via-cyan to-tech-blue` (`bg-clip-text text-transparent`) para ancorar a paleta
- Subtítulo: `max-w-2xl text-muted-foreground text-lg md:text-xl` — "Criamos sites rápidos e otimizados que colocam negócios locais no topo do Google — do primeiro clique ao primeiro cliente."
- CTA primário: "Agendar diagnóstico gratuito" (ou reaproveita "Falar com Consultor" — ver pergunta abaixo) em Neon Green, tamanho grande, com seta e glow no hover
- CTA secundário fantasma: "Ver portfólio" em `text-foreground/80` com borda `border-white/10`
- Micro-detalhe abaixo: linha com 3 selos discretos (ex.: "Google PageSpeed 95+", "SEO local", "Entrega em 21 dias") separados por pontos cyan — reforça posicionamento sem quebrar o minimalismo

## 5. Arquitetura & Rotas

- Não criar rotas `/servicos` ou `/portfolio` ainda — os links do menu apontam para âncoras `#servicos` e `#portfolio` como placeholders desta fase inicial (fica documentado que viram rotas próprias quando as seções forem construídas).
- Nenhuma dependência nova; tudo com Tailwind v4 + tokens.

## Observação técnica

Todas as cores da marca entram como tokens semânticos no `src/styles.css` (nunca hex hardcoded nos componentes, exceto o `primary-foreground` do CTA que exige um tom específico). Isso mantém o padrão do template e permite escalar as próximas seções (Serviços, Portfólio, Depoimentos, Footer) sem retrabalho.
