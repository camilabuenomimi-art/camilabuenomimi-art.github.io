# Design System — Preto e Branco Editorial

| Campo | Valor |
|---|---|
| Versão | 0.1 |
| Status | Especificação — aguardando aprovação |
| Última atualização | 2026-10-23 |
| Relacionado | `docs/SPEC.md`, `docs/CONTENT.md` |

---

## 1. Direção visual

**Editorial suíço encontra portfólio de produto.**

Fundo branco, tinta quase-preta, réguas de 1px, tipografia grande e muito espaço em branco. A página deve respirar como uma revista bem diagramada: títulos com presença, textos com medida confortável, alinhamento à esquerda e nenhum enfeite sem função.

O contraste entre preto e branco é a identidade. Não existe cor de acento, gradiente, sombra, vidro ou ilustração decorativa. A hierarquia nasce de **escala tipográfica**, **peso**, **espaço** e **linhas**.

### 1.1 Referências conceituais

- Portfólios editoriais com tipografia enorme e navegação discreta.
- Grids suíços: colunas visíveis apenas pela composição, não por linhas desenhadas.
- Catálogos de design: numeração, metadados em mono e imagens tratadas em P&B.
- Sites de estúdio: uma única faixa invertida em preto como ponto de tensão.

### 1.2 O que evitar

- Gradientes, sombras, glassmorphism, neon, cores de acento.
- Cantos muito arredondados, ícones coloridos, emojis.
- Carrossel, parallax, cursor customizado, marquee.
- Múltiplos fundos alternados por seção.
- Texto centralizado em blocos longos.
- Excesso de cards por tela.
- Imagens com molduras de dispositivo ou mockups 3D.

---

## 2. Tokens

Valores de referência para `assets/css/styles.css`. Nenhum valor deve ser repetido fora dos tokens.

```css
:root {
  /* ---- Cor ---- */
  --color-bg: #ffffff;
  --color-bg-subtle: #f5f5f5;
  --color-ink: #0b0b0b;
  --color-ink-2: #3d3d3d;
  --color-ink-3: #6b6b6b;
  --color-line: #e4e4e4;
  --color-line-strong: #bdbdbd;
  --color-line-interactive: #8a8a8a;
  --color-inverse-bg: #0b0b0b;
  --color-inverse-ink: #ffffff;
  --color-inverse-muted: #b3b3b3;
  --color-focus: #0b0b0b;
  --color-focus-inverse: #ffffff;

  /* ---- Tipografia ---- */
  --font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  --font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas,
    "Liberation Mono", monospace;

  --fs-display: clamp(2.75rem, 9vw, 6.5rem);
  --fs-h1: clamp(2.5rem, 6vw, 4.5rem);
  --fs-h2: clamp(2rem, 4.5vw, 3rem);
  --fs-h3: clamp(1.25rem, 1.1rem + 0.5vw, 1.5rem);
  --fs-lead: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
  --fs-body: clamp(1rem, 0.97rem + 0.15vw, 1.0625rem);
  --fs-small: 0.875rem;
  --fs-label: 0.75rem;
  --fs-mono: 0.8125rem;
  --fs-tag: 0.6875rem;

  --lh-display: 0.92;
  --lh-h1: 1;
  --lh-h2: 1.05;
  --lh-h3: 1.25;
  --lh-lead: 1.45;
  --lh-body: 1.65;
  --lh-small: 1.5;

  --tracking-display: -0.05em;
  --tracking-h1: -0.035em;
  --tracking-h2: -0.025em;
  --tracking-h3: -0.01em;
  --tracking-label: 0.12em;

  /* ---- Espaço (escala de 4px) ---- */
  --space-1: 0.25rem;  /*  4px */
  --space-2: 0.5rem;   /*  8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.5rem;   /* 24px */
  --space-6: 2rem;     /* 32px */
  --space-7: 3rem;     /* 48px */
  --space-8: 4rem;     /* 64px */
  --space-9: 6rem;     /* 96px */
  --space-10: 8rem;    /* 128px */

  /* ---- Layout ---- */
  --container: 73.75rem;                    /* 1180px */
  --gutter: clamp(1.25rem, 5vw, 3rem);
  --section-y: clamp(4rem, 10vw, 8rem);
  --header-h: 4rem; /* mobile; 4.5rem a partir de 768px */
  --prose-max: 68ch;
  --lead-max: 56ch;

  /* ---- Borda ---- */
  --border: 1px solid var(--color-line);
  --border-strong: 1px solid var(--color-line-strong);
  --radius: 2px;

  /* ---- Movimento ---- */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 150ms;
  --dur-base: 250ms;
  --dur-slow: 600ms;

  /* ---- Camadas ---- */
  --z-header: 100;
  --z-menu: 200;
  --z-skip: 300;
}
```

### 2.1 Cores e contraste

| Token | Hex | Uso | Contraste |
|---|---|---|---|
| `--color-bg` | `#FFFFFF` | Fundo padrão | — |
| `--color-bg-subtle` | `#F5F5F5` | Fundo de imagem/placeholder | — |
| `--color-ink` | `#0B0B0B` | Texto principal, bordas ativas | ~19.6:1 sobre branco |
| `--color-ink-2` | `#3D3D3D` | Texto secundário | ~10.9:1 sobre branco |
| `--color-ink-3` | `#6B6B6B` | Metadados e legendas | ~5.3:1 sobre branco |
| `--color-line` | `#E4E4E4` | Réguas e bordas decorativas | Não textual |
| `--color-line-strong` | `#BDBDBD` | Bordas de ênfase não interativas | Não textual |
| `--color-line-interactive` | `#8A8A8A` | Borda de controles (filtros) | ~3.5:1 |
| `--color-inverse-bg` | `#0B0B0B` | Faixa de contato | — |
| `--color-inverse-ink` | `#FFFFFF` | Texto sobre preto | ~19.6:1 |
| `--color-inverse-muted` | `#B3B3B3` | Texto secundário sobre preto | ~9.4:1 |

Regras:

- Texto pequeno nunca abaixo de `4.5:1`.
- Bordas de componentes interativos com pelo menos `3:1` quando forem o único indicador.
- Não usar cinza sobre cinza.
- Não usar opacidade para simular texto desabilitado; usar cor sólida.

### 2.2 Tipografia

Stack sem downloads:

```css
--font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
  "Helvetica Neue", Arial, sans-serif;
--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas,
  "Liberation Mono", monospace;
```

| Token | Tamanho | Entrelinha | Peso | Tracking | Uso |
|---|---|---|---|---|---|
| `--fs-display` | 44–104px | 0.92 | 600 | -0.05em | Nome no hero |
| `--fs-h1` | 40–72px | 1.00 | 600 | -0.035em | Título de página |
| `--fs-h2` | 32–48px | 1.05 | 600 | -0.025em | Título de seção |
| `--fs-h3` | 20–24px | 1.25 | 600 | -0.01em | Título de card |
| `--fs-lead` | 18–22px | 1.45 | 400 | 0 | Texto de apoio |
| `--fs-body` | 16–17px | 1.65 | 400 | 0 | Corpo |
| `--fs-small` | 14px | 1.50 | 400 | 0 | Legendas, rodapé |
| `--fs-label` | 12px | 1.20 | 600 | 0.12em | Labels maiúsculos |
| `--fs-mono` | 13px | 1.40 | 400 | 0 | Metadados e números |
| `--fs-tag` | 11px | 1.20 | 500 | 0.08em | Tags e filtros |

Regras:

- Peso máximo `600`. Não usar `700` ou `800`; o sistema já é denso.
- Não usar pesos abaixo de `400`.
- Títulos sempre à esquerda, com `text-wrap: balance`.
- Corpo com `text-wrap: pretty`.
- Medida de leitura: `68ch`; leads: `56ch`.
- Labels em maiúsculas com tracking amplo; nunca em blocos longos.
- Números de seção e ano em mono.

### 2.3 Espaçamento

- Escala baseada em 4px.
- Seções: `padding-block: var(--section-y)`.
- Entre label, título e lead: `12px`, `16px` e `24px`.
- Entre título de seção e conteúdo: `48px` desktop / `32px` mobile.
- Grid de projetos: `24px` desktop / `16px` mobile.
- Nunca usar margens arbitrárias fora da escala.

---

## 3. Layout e grid

### 3.1 Container

```css
.container {
  width: min(100% - (var(--gutter) * 2), var(--container));
  margin-inline: auto;
}
```

- `--gutter`: 20px no mobile, até 48px no desktop.
- Conteúdo textual nunca ocupa a largura total do container; limitar a `68ch`.
- Seções podem ser full-bleed apenas quando o fundo for invertido (faixa de contato).

### 3.2 Breakpoints

| Nome | Largura | Mudanças principais |
|---|---|---|
| `sm` | 640px | Grade de projetos em 2 colunas; CTAs lado a lado |
| `md` | 768px | Navegação desktop; header 72px; footer em colunas |
| `lg` | 1024px | Grade em 3 colunas; hero em 12 colunas |
| `xl` | 1280px | Container atinge 1180px |

### 3.3 Grid de páginas

- **Hero:** 12 colunas no desktop. Texto ocupa 8 colunas; metadados ocupam 4 ou ficam em linha abaixo.
- **Projetos:** `repeat(3, 1fr)` ≥ 1024px, `repeat(2, 1fr)` ≥ 640px, `1fr` abaixo.
- **Sobre:** 5 colunas para foto e 7 para texto ≥ 900px; empilhado abaixo.
- **Footer:** 4 colunas ≥ 768px; empilhado abaixo.

### 3.4 Ritmo vertical

```text
Header
↓ 96–160px
Hero
↓ 96–128px
Projetos em destaque
↓ 96–128px
Sobre resumido
↓ 96–128px
Faixa de contato (full-bleed)
↓
Footer
```

---

## 4. Componentes

### 4.1 Skip link

- Primeiro elemento do `<body>`.
- Fora da tela até receber foco.
- Fundo preto, texto branco, padding `12px 16px`.
- Ao focar, aparece no canto superior esquerdo.
- Texto: "Pular para o conteúdo".

### 4.2 Header

```text
.site-header
└── .site-header__inner
    ├── .brand (nome ou monograma)
    ├── .site-nav (4 links)
    └── .nav-toggle (somente mobile)
```

- Sticky no topo, `z-index: var(--z-header)`.
- Altura: 64px mobile / 72px desktop (`--header-h` acompanha o breakpoint de 768px).
- Fundo branco sólido, sem transparência e sem blur.
- Borda inferior de 1px.
- Logo: nome em `--fs-body`, peso 600, tracking `-0.02em`.
- Links: `--fs-small`, cor `--color-ink-2`; hover em `--color-ink`.
- Link ativo: cor `--color-ink` + sublinhado de 1px com offset de 6px.
- Não usar sombra.

### 4.3 Navegação desktop

- `display: flex`, gap de `28px`.
- Alinhada à direita.
- Visível a partir de 768px.
- Cada link com área de toque de pelo menos 44px de altura.
- `aria-current="page"` no item ativo.

### 4.4 Menu mobile

- Botão de 44×44px com ícone de menu/close.
- Overlay branco full-screen abaixo do header, `z-index: var(--z-menu)`.
- Links grandes (`--fs-h2`), empilhados, com réguas de 1px entre eles.
- Abre com fade de 200ms + translateY de 8px.
- Fecha com `Esc`, clique em link, clique no botão ou redimensionamento para desktop.
- `aria-expanded` e `aria-controls` no botão.
- `inert` no `main` e no `footer` enquanto aberto.
- Scroll do `body` travado.
- Foco vai para o primeiro link ao abrir e volta ao botão ao fechar.
- Sem ícones animados elaborados.

### 4.5 Botões

| Variante | Aparência | Uso |
|---|---|---|
| `.btn--primary` | Fundo preto, texto branco, borda preta | Ação principal |
| `.btn--secondary` | Fundo transparente, borda preta, texto preto | Ação secundária |
| `.btn--inverse` | Fundo branco, texto preto | Sobre fundo preto |
| `.btn--ghost` | Sem fundo e sem borda, com seta | Links de continuidade |

Especificação:

- Altura mínima: 44px; padrão 48px.
- Padding inline: 20–24px.
- Raio: 2px.
- Fonte: `--fs-small`, peso 500.
- Transição de 150ms.
- Primário hover: `#262626`; active: `translateY(1px)`.
- Secundário hover: fundo preto, texto branco.
- Foco: anel de 2px com offset de 3px.
- Em fundos pretos, usar `--color-focus-inverse` no anel.
- Ícone de seta quando a ação leva a outra página.
- Nunca usar botão para navegação.

### 4.6 Links de texto

- Sublinhado de 1px, `text-underline-offset: 4px`.
- Hover: sublinhado mais espesso ou cor `--color-ink`.
- Foco: anel visível.
- Links externos com ícone `arrow-up-right` de 16px.
- Texto do link sempre descritivo.

### 4.7 Section header

```text
.section-head
├── .section-head__label    (ex: "Selecionados")
├── .section-head__title    (h2)
├── .section-head__lead     (opcional)
└── .section-head__action   (link opcional)
```

- Label em `--fs-label`, maiúsculo, `--color-ink-3`.
- Título em `--fs-h2`.
- Lead em `--fs-lead`, `--color-ink-2`, máximo 56ch.
- Ação alinhada à direita no desktop, abaixo no mobile.
- Espaço entre label e título: 12px; título e lead: 16px.

### 4.8 Hero

- Padding superior: `clamp(4rem, 12vh, 9rem)`.
- Label de status com ponto preto de 6px e texto `--fs-label`.
- `<h1>` com o nome em `--fs-display`, `text-wrap: balance`.
- Linha de cargo/foco em `--fs-lead`, `--color-ink-2`.
- Lead em `--fs-lead`, máximo 56ch.
- Bio em `--fs-body`, máximo 56ch, `--color-ink-2`.
- CTAs em linha no desktop, empilhados no mobile.
- Metadados em uma linha com três itens; label em mono maiúsculo e valor em `--fs-small`.
- Sem foto no hero.
- Sem fundo, sem card, sem borda.

### 4.9 Project card

```text
.project-card
└── a.project-card__link
    ├── figure.project-card__media > img
    └── .project-card__body
        ├── .project-card__meta   (ano · categoria)
        ├── h3.project-card__title
        ├── p.project-card__summary
        ├── ul.tag-list > li.tag
        └── span.project-card__cta (texto + seta)
```

- Card inteiro é um único link externo. Não aninhar outros links ou botões.
- Borda de 1px, raio 2px, fundo branco.
- Imagem 16:10, `object-fit: cover`, `filter: grayscale(1)`.
- Corpo com padding de 20px (16px no mobile).
- Meta em mono, `--fs-mono`, `--color-ink-3`.
- Título em `--fs-h3`.
- Resumo em `--fs-small`, `--color-ink-2`, máximo 2 linhas visuais.
- Tags em mono, `--fs-tag`, maiúsculas, borda de 1px.
- CTA com seta no canto inferior.
- Hover: borda preta, `translateY(-2px)`, imagem com `scale(1.03)`.
- Foco: anel de 2px ao redor do card.
- Transição de 200ms.
- Sem sombra.
- Imagem com `alt` descritivo; se o card já tem título, o alt descreve a tela.

### 4.10 Tag

- `font-family: var(--font-mono)`.
- `font-size: var(--fs-tag)`.
- `text-transform: uppercase`.
- `letter-spacing: 0.08em`.
- Padding: `4px 8px`.
- Borda de 1px, raio 2px.
- Cor `--color-ink-2`.
- Não interativa; não usar como filtro.

### 4.11 Filtros

```text
.filters
├── .filters__list
│   └── button.filter[aria-pressed]
└── .filters__status[aria-live="polite"]
```

- Botões retangulares, 40px de altura, padding inline de 16px.
- Fonte mono, `--fs-tag`, maiúscula, tracking `0.08em`.
- Borda de 1px `--color-line-interactive`; ativo com fundo preto e texto branco.
- Hover: borda preta.
- Foco: anel de 2px.
- `aria-pressed="true"` apenas no ativo.
- Contador à direita no desktop, abaixo no mobile.
- Escondidos por padrão; visíveis apenas com `html.js`.
- Em telas pequenas, quebram em várias linhas com gap de 8px.

### 4.12 Faixa de contato

- Full-bleed, fundo `--color-inverse-bg`, texto branco.
- Padding vertical de `clamp(4rem, 10vw, 8rem)`.
- Único bloco invertido da home.
- Título em `--fs-h2` ou `--fs-h1` conforme espaço.
- E-mail como link grande, `clamp(1.25rem, 4vw, 2.25rem)`, sublinhado.
- Botão "Copiar e-mail" em variante inversa.
- Redes em linha, com seta.
- No mobile, tudo empilhado e alinhado à esquerda.

### 4.13 Bloco de e-mail (contato)

- E-mail em `clamp(1.25rem, 4vw, 2.25rem)`, peso 500.
- Sublinhado de 1px com offset de 6px.
- Botão de copiar ao lado no desktop, abaixo no mobile.
- Feedback com check e texto "Copiado!".
- Região `aria-live="polite"` sempre presente no DOM.

### 4.14 Footer

- Fundo branco, borda superior de 1px.
- Padding: `64px 0 32px`.
- Grade de 4 colunas no desktop: marca + tagline, navegação, redes, metadados.
- No mobile, empilhado com réguas entre grupos.
- Nome em peso 600; tagline em `--fs-small`, `--color-ink-2`.
- Links em `--fs-small`, `--color-ink-2`.
- Copyright e "Feito com HTML, CSS e JavaScript" em `--fs-mono`, `--color-ink-3`.
- "Voltar ao topo" com seta para cima, alinhado à direita.
- Ano via JS com fallback estático.

### 4.15 Prose

- Largura máxima `68ch`.
- Parágrafos com margem inferior de `1.25em`.
- Links sublinhados.
- Listas com marcador simples ou numeração mono.
- Sem drop cap, sem citação decorativa.

### 4.16 Imagem e figura

- Proporção 16:10 para projetos; 4:5 para retrato.
- Borda de 1px.
- Fundo `--color-bg-subtle`.
- `filter: grayscale(1) contrast(1.05)` em imagens de projeto e retrato.
- Sem cantos arredondados.
- Legenda em `--fs-mono`, `--color-ink-3`, abaixo da imagem.
- Placeholder: SVG local com fundo `#F5F5F5`, número do projeto em mono e borda de 1px.

### 4.17 Estado vazio

- Centralizado dentro da grade, com padding de 64px.
- Título em `--fs-h3`.
- Texto em `--fs-small`, `--color-ink-2`.
- Botão secundário "Ver todos".
- Sem ilustração.

### 4.18 Divisores

- 1px, `--color-line`.
- Usar para separar grupos de conteúdo, nunca como decoração aleatória.
- Não usar `<hr>` entre cada parágrafo.

---

## 5. Iconografia

Ícones necessários, todos em SVG inline:

| Ícone | Uso | Tamanho |
|---|---|---|
| `arrow-up-right` | Link externo, CTA de card | 16px |
| `arrow-right` | Continuidade | 16px |
| `arrow-up` | Voltar ao topo | 16px |
| `copy` | Copiar e-mail | 18px |
| `check` | Feedback de cópia | 18px |
| `menu` | Abrir menu | 20px |
| `close` | Fechar menu | 20px |

Especificação:

- `viewBox="0 0 24 24"`.
- `fill="none"`, `stroke="currentColor"`.
- `stroke-width="1.5"`.
- `stroke-linecap="round"`, `stroke-linejoin="round"`.
- `aria-hidden="true"` e `focusable="false"`.
- Não usar biblioteca de ícones.

---

## 6. Movimento

| Interação | Duração | Easing | Efeito |
|---|---|---|---|
| Hover de botão/link | 150ms | `--ease-out` | Cor e borda |
| Hover de card | 200ms | `--ease-out` | `translateY(-2px)` + zoom 1.03 |
| Abertura do menu | 200ms | `--ease-out` | Fade + translateY(8px) |
| Reveal ao rolar | 600ms | `--ease-out` | Opacity 0→1 + translateY(14px→0) |
| Feedback de cópia | 2000ms | — | Troca de ícone/texto |

Regras:

- Reveal apenas uma vez por elemento, com `IntersectionObserver`.
- Stagger máximo de 60ms entre cards vizinhos.
- Nada de animação contínua.
- Nada de animar `width`, `height` ou `top`.
- `prefers-reduced-motion: reduce`: desativar transforms, reduzir transições para `0.01ms` e remover scroll suave.
- Conteúdo deve estar visível se o JS falhar. A classe que esconde o reveal só é aplicada com `html.js`.

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Essa é a única exceção permitida para `!important`.

---

## 7. Direção de imagens

- Screenshots reais do projeto, sem molduras de notebook ou celular.
- Recorte consistente: 16:10, conteúdo centralizado, sem barras pretas.
- Tratamento monocromático via CSS, não editar a imagem original.
- Contraste ligeiramente aumentado para leitura em telas pequenas.
- Fundo dos placeholders: cinza claro `#F5F5F5` com número do projeto em mono.
- Retrato: 4:5, fundo neutro, luz natural, sem filtros pesados.
- Não usar banco de imagens genérico.
- Não usar imagens com texto pequeno ilegível; o card é sobre o projeto, não sobre a screenshot.

---

## 8. Arquitetura CSS

Ordem das camadas:

```css
@layer reset, tokens, base, layout, components, utilities;
```

Estrutura interna de `styles.css`:

1. `@layer reset` — box-sizing, margens, imagens, listas, botões.
2. `@layer tokens` — `:root` e `@media (prefers-reduced-motion)`.
3. `@layer base` — `html`, `body`, tipografia, links, foco, seleção.
4. `@layer layout` — container, section, header, footer, grids.
5. `@layer components` — botões, cards, filtros, menu, faixa de contato.
6. `@layer utilities` — `.sr-only`, `.skip-link`, `.no-scroll`.

Convenções:

- Mobile-first; `@media (min-width: ...)`.
- BEM simplificado.
- Sem seletor de ID para estilo.
- Sem `!important`, exceto movimento reduzido.
- Sem estilos inline.
- Sem bibliotecas ou utilitários externos.
- Comentários de seção em português.

### 8.1 Reset essencial

- `box-sizing: border-box` global.
- `margin: 0` em headings, parágrafos, listas e figuras.
- `img, svg { display: block; max-width: 100%; }`.
- `button, input { font: inherit; }`.
- `button { background: none; border: 0; cursor: pointer; }`.
- `a { color: inherit; text-decoration: none; }`.
- `:focus-visible` com anel de 2px e offset.
- `::selection` com fundo preto e texto branco.

---

## 9. Do / Don't

| Faça | Não faça |
|---|---|
| Uma ideia por seção | Várias mensagens competindo |
| Título grande e texto curto | Parágrafos longos no hero |
| Réguas de 1px para separar | Cards com sombra e borda ao mesmo tempo |
| Preto para ação e contraste | Preto como decoração em todo lugar |
| Grayscale consistente | Misturar imagens coloridas e P&B |
| Espaço em branco generoso | Preencher cada pixel |
| Movimento sutil | Animação chamando mais atenção que o conteúdo |
| Tag em mono | Tag colorida ou em formato de pílula |
| Foto 4:5 no Sobre | Foto gigante no hero |
| Um bloco invertido por página | Fundos alternados a cada seção |

---

## 10. Checklist visual

- [ ] A página parece uma composição, não uma pilha de blocos.
- [ ] O `<h1>` é o elemento mais forte da tela.
- [ ] Existe apenas um nível claro de destaque por seção.
- [ ] O espaçamento segue a escala.
- [ ] Nenhuma cor fora dos tokens.
- [ ] Nenhuma sombra ou gradiente.
- [ ] Imagens em P&B com recorte consistente.
- [ ] Cards alinhados e com alturas equilibradas.
- [ ] Foco visível em todos os elementos.
- [ ] Mobile mantém a hierarquia, não apenas empilha.
- [ ] O rodapé fecha a página sem parecer abandonado.
- [ ] Nada pisca, gira ou se move sozinho.
