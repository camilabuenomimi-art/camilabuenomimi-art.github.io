# Plano de Implementação Detalhado — TODO.md
**Projeto:** Site Pessoal / Portfólio Minimalista Editorial em Preto e Branco  
**Documentos de Referência:** `AGENTS.md`, `docs/SPEC.md`, `docs/DESIGN-SYSTEM.md`, `docs/CONTENT.md`  
**Guia para o Modelo Executor:** Siga rigorosamente a ordem sequencial das fases e tarefas. Não pule tarefas, não implemente funcionalidades fora de escopo e não avance para a próxima tarefa sem executar e passar no teste da tarefa atual.

---

## Regras de Ouro para o Modelo Executor (Sem Raciocínio)

1. **Zero Dependências:** Não instale pacotes npm, não use CDN, não utilize frameworks (sem Tailwind, Bootstrap, React, etc.) e não configure bundlers/compiladores. Apenas HTML5, CSS3 e JavaScript puro (ES2020+).
2. **Estética Estrita:** Paleta exclusivamente monocromática (preto `#0B0B0B`, branco `#FFFFFF`, cinzas `#F5F5F5`, `#E4E4E4`, `#BDBDBD`, `#8A8A8A`, `#6B6B6B`, `#3D3D3D`). Nenhuma cor de acento. Sem sombras, sem gradientes, sem cantos arredondados acima de `2px`.
3. **Tipografia do Sistema:** Somente fontes de sistema declaradas nos tokens. Zero download de fontes web.
4. **Semântica e Acessibilidade:** WCAG 2.2 AA obrigatório. Skip links, foco visível com anel de 2px, tags ARIA apropriadas, navegação 100% acessível por teclado.
5. **Caminhos Relativos:** Todas as referências a assets e páginas devem usar caminhos relativos (ex: `assets/css/styles.css`, `projetos.html`), nunca caminhos absolutos com barra inicial (`/assets/...`).
6. **Placeholders Padronizados:** Onde houver dado pessoal a preencher, use sempre o formato `[PLACEHOLDER]` precedido pelo comentário `<!-- TODO(content): ... -->`. Zero lorem ipsum ou biografias inventadas.
7. **Degradação Elegante:** O site deve ser legível e funcional mesmo com JavaScript desativado (com exceção de cópia de e-mail e filtros de projeto).

---

## Mapa de Fases e Dependências

```text
Fase 0: Preparação de Pastas e Assets Base
   ↓
Fase 1: Fundação CSS (Tokens, Reset, Tipografia e Base)
   ↓
Fase 2: Fundação JavaScript & Shell Global (Header, Menu Mobile e Footer)
   ↓
Fase 3: Construção da Home (index.html)
   ↓
Fase 4: Construção da Página de Projetos e Filtros (projetos.html)
   ↓
Fase 5: Construção da Página Sobre (sobre.html)
   ↓
Fase 6: Construção da Página de Contato e Cópia de E-mail (contato.html)
   ↓
Fase 7: Microinterações, Movimento e Prefers-Reduced-Motion
   ↓
Fase 8: Bateria de Testes Globais e Auditoria de Acessibilidade
   ↓
Fase 9: Checklist Final e Preparação para Deploy no GitHub Pages
```

---

## Fase 0: Preparação de Diretórios e Assets Base

- [ ] **TASK-001**: Criar a estrutura física de pastas do projeto.
  - **Caminhos a criar:**
    - `assets/`
    - `assets/css/`
    - `assets/js/`
    - `assets/img/`
    - `assets/img/projects/`
  - **Critério de conclusão:** Todos os diretórios existirem no disco.

- [ ] **TASK-002**: Criar o arquivo `.nojekyll` na raiz do projeto.
  - **Caminho:** `.nojekyll`
  - **Conteúdo:** Arquivo vazio (necessário para impedir que o GitHub Pages ignore arquivos que começam com underline ou aplique processamento Jekyll).
  - **Critério de conclusão:** Arquivo `.nojekyll` presente na raiz do repositório.

- [ ] **TASK-003**: Criar imagens/placeholders base para o projeto.
  - **Caminhos:**
    - `assets/img/profile.webp` (ou SVG de placeholder com aspect-ratio 4:5, 800x1000px, fundo `#F5F5F5`, borda `#E4E4E4`, texto mono "FOTO 4:5").
    - `assets/img/projects/projeto-01.webp` até `projeto-06.webp` (ou SVGs/WebP com aspect-ratio 16:10, 1600x1000px, fundo `#F5F5F5`, borda `#E4E4E4`, texto mono indicando "PROJETO 01" a "PROJETO 06").
  - **Critério de conclusão:** As 7 imagens de placeholder existirem nos caminhos corretos sem quebrar o carregamento de `<img src="...">`.

- [ ] **TEST-001**: Teste de validação da estrutura inicial de arquivos.
  - **Comando:** Executar listagem recursiva de pastas e arquivos no PowerShell (`Get-ChildItem -Recurse`).
  - **Critério de aceite:** Diretórios `assets/css`, `assets/js`, `assets/img/projects` criados, arquivo `.nojekyll` presente e 7 arquivos de placeholder existentes.

---

## Fase 1: Fundação do Sistema Visual (CSS)

- [ ] **TASK-004**: Criar o arquivo `assets/css/styles.css` e declarar as camadas CSS (`@layer`).
  - **Caminho:** `assets/css/styles.css`
  - **Estrutura obrigatória:**
    ```css
    @layer reset, tokens, base, layout, components, utilities;
    ```

- [ ] **TASK-005**: Implementar `@layer tokens` em `assets/css/styles.css`.
  - **Conteúdo:** Declarar em `:root` todas as variáveis descritas em `docs/DESIGN-SYSTEM.md`:
    - **Cores:** `--color-bg: #ffffff;`, `--color-bg-subtle: #f5f5f5;`, `--color-ink: #0b0b0b;`, `--color-ink-2: #3d3d3d;`, `--color-ink-3: #6b6b6b;`, `--color-line: #e4e4e4;`, `--color-line-strong: #bdbdbd;`, `--color-line-interactive: #8a8a8a;`, `--color-inverse-bg: #0b0b0b;`, `--color-inverse-ink: #ffffff;`, `--color-inverse-muted: #b3b3b3;`, `--color-focus: #0b0b0b;`, `--color-focus-inverse: #ffffff;`
    - **Tipografia:** `--font-sans: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;`, `--font-mono: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace;`
    - **Tamanhos e Entrelinhas:** `--fs-display`, `--fs-h1`, `--fs-h2`, `--fs-h3`, `--fs-lead`, `--fs-body`, `--fs-small`, `--fs-label`, `--fs-mono`, `--fs-tag`, e respectivos `--lh-*` e `--tracking-*`.
    - **Espaçamento (escala 4px):** `--space-1` (0.25rem) até `--space-10` (8rem).
    - **Layout:** `--container: 73.75rem;`, `--gutter: clamp(1.25rem, 5vw, 3rem);`, `--section-y: clamp(4rem, 10vw, 8rem);`, `--header-h: 4rem;`, `--prose-max: 68ch;`, `--lead-max: 56ch;`
    - **Bordas e Movimento:** `--border: 1px solid var(--color-line);`, `--border-strong: 1px solid var(--color-line-strong);`, `--radius: 2px;`, `--ease-out: cubic-bezier(0.22, 1, 0.36, 1);`, `--dur-fast: 150ms;`, `--dur-base: 250ms;`, `--dur-slow: 600ms;`
    - **Z-index:** `--z-header: 100;`, `--z-menu: 200;`, `--z-skip: 300;`

- [ ] **TASK-006**: Implementar `@layer reset` em `assets/css/styles.css`.
  - **Conteúdo:**
    - `box-sizing: border-box` universal (`*, *::before, *::after`).
    - Zerar margens e paddings em `body, h1, h2, h3, p, ul, ol, figure`.
    - `img, svg { display: block; max-width: 100%; height: auto; }`.
    - `button, input { font: inherit; color: inherit; }`.
    - `button { background: none; border: 0; cursor: pointer; padding: 0; }`.
    - `a { color: inherit; text-decoration: none; }`.
    - `ul, ol { list-style: none; padding: 0; }`.

- [ ] **TASK-007**: Implementar `@layer base` e `@layer utilities` em `assets/css/styles.css`.
  - **Conteúdo:**
    - Estilo de `html` e `body` (background `--color-bg`, color `--color-ink`, font `--font-sans`, line-height `--lh-body`).
    - `:focus-visible` global com outline `2px solid var(--color-focus)` e `outline-offset: 2px`.
    - `::selection` com background `var(--color-ink)` e color `var(--color-bg)`.
    - `.sr-only`: classe utilitária acessível para esconder visualmente mantendo leitura para screen readers (`position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;`).
    - `.skip-link`: oculto fora da tela e visível ao focar no canto superior esquerdo (`z-index: var(--z-skip); background: var(--color-ink); color: var(--color-bg); padding: var(--space-3) var(--space-4);`).
    - `.container`: largura máxima `min(100% - (var(--gutter) * 2), var(--container))` e centralizado com `margin-inline: auto`.
    - `.no-scroll`: aplicado ao `body` para travar scroll com `overflow: hidden;`.

- [ ] **TEST-002**: Teste de validação sintática do CSS.
  - **Método:** Inspecionar o arquivo `styles.css` e verificar se não há propriedades inválidas, seletores de ID para estilização ou regras fora das camadas declaradas.
  - **Critério de aceite:** Arquivo CSS válido, com as 6 camadas declaradas e tokens correspondentes a `DESIGN-SYSTEM.md`.

---

## Fase 2: Shell Global (Header, Menu Mobile, Footer e JavaScript Base)

- [ ] **TASK-008**: Implementar componentes de Header e Navegação Desktop em `@layer layout` e `@layer components`.
  - **Arquivo:** `assets/css/styles.css`
  - **Estilos:**
    - `.site-header`: sticky no topo, `top: 0`, altura `--header-h`, fundo `--color-bg`, borda inferior `1px solid var(--color-line)`, `z-index: var(--z-header)`.
    - `.site-header__inner`: flexbox com space-between e centralização vertical dentro do `.container`.
    - `.brand`: `--fs-body`, peso 600, tracking `-0.02em`.
    - `.site-nav`: `display: none` em telas menores que 768px; `display: flex; gap: 28px;` a partir de 768px (`@media (min-width: 768px)`).
    - `.site-nav__link`: `--fs-small`, `--color-ink-2`, hover `--color-ink`.
    - `.site-nav__link[aria-current="page"]`: cor `--color-ink`, sublinhado de 1px com offset de 6px.
    - `.nav-toggle`: botão de 44x44px visível em mobile, `display: flex; align-items: center; justify-content: center;` e oculto a partir de 768px (`display: none`).

- [ ] **TASK-009**: Implementar Menu Mobile Overlay em `assets/css/styles.css`.
  - **Estilos:**
    - `.mobile-menu`: fixo, abaixo do header (`top: var(--header-h); left: 0; width: 100%; height: calc(100vh - var(--header-h));`), fundo `--color-bg`, `z-index: var(--z-menu)`.
    - Estado oculto: `visibility: hidden; opacity: 0; pointer-events: none; transform: translateY(-8px); transition: opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), visibility var(--dur-base);`.
    - Estado ativo (`.is-open`): `visibility: visible; opacity: 1; pointer-events: auto; transform: translateY(0);`.
    - Links do menu mobile: `--fs-h2`, empilhados verticalmente com padding e réguas de 1px entre si (`border-bottom: 1px solid var(--color-line);`).

- [ ] **TASK-010**: Implementar Footer Global em `@layer layout` e `@layer components`.
  - **Arquivo:** `assets/css/styles.css`
  - **Estilos:**
    - `.site-footer`: fundo `--color-bg`, borda superior `1px solid var(--color-line)`, padding `64px 0 32px`.
    - `.site-footer__grid`: empilhado no mobile; grid de 4 colunas a partir de 768px (marca/tagline, navegação, redes, metadados/ano).
    - `.site-footer__back-to-top`: link discreto com ícone de seta para cima, alinhado à direita.

- [ ] **TASK-011**: Criar `assets/js/main.js` com inicialização de JS e controle de navegação mobile.
  - **Caminho:** `assets/js/main.js`
  - **Código:**
    - Adicionar classe `js` na raiz: `document.documentElement.classList.add('js');`.
    - IIFE com `'use strict'`.
    - Função `initFooterYear()`: atualiza o elemento `[data-year]` com `new Date().getFullYear()`.
    - Função `initMobileNav()`:
      - Seleciona botão toggle (`[data-nav-toggle]`) e overlay (`[data-mobile-menu]`).
      - Gerencia atributo `aria-expanded="false|true"`.
      - Trava scroll do body via classe `no-scroll`.
      - Aplica `inert` no `<main>` e `<footer>` enquanto aberto.
      - Ao abrir: foca no primeiro link do menu.
      - Ao fechar: devolve o foco ao botão toggle.
      - Escuta tecla `Escape` para fechar o menu.
      - Escuta clique em qualquer link do menu para fechar o menu.
      - Fecha menu automaticamente em evento `resize` quando largura for ≥ 768px.

- [ ] **TEST-003**: Teste de validação do Header, Footer e Menu Mobile.
  - **Cenário de teste:** Criar uma página temporária de teste ou carregar a estrutura básica no navegador.
  - **Passos:**
    1. Reduzir janela para 375px (mobile).
    2. Clicar no botão toggle do menu: menu deve abrir com fade sutil, foco deve ir para o primeiro link e scroll da página deve travar.
    3. Pressionar `Escape`: menu deve fechar e foco deve voltar ao botão.
    4. Redimensionar para > 768px: toggle deve sumir e nav desktop deve aparecer.
  - **Critério de aceite:** Todas as ações funcionam sem erros no console.

---

## Fase 3: Construção da Página Inicial (`index.html`)

- [ ] **TASK-012**: Implementar componentes de Botões, Tags e Section Headers em `assets/css/styles.css`.
  - **Botões:**
    - `.btn`: `display: inline-flex; align-items: center; justify-content: center; min-height: 44px; padding: 12px 24px; border-radius: var(--radius); font-size: var(--fs-small); font-weight: 500; transition: background var(--dur-fast), color var(--dur-fast), border-color var(--dur-fast), transform var(--dur-fast);`
    - `.btn--primary`: fundo `var(--color-ink)`, cor `var(--color-bg)`, borda `1px solid var(--color-ink)`. Hover: fundo `#262626`.
    - `.btn--secondary`: fundo transparente, cor `var(--color-ink)`, borda `1px solid var(--color-ink)`. Hover: fundo `var(--color-ink)`, cor `var(--color-bg)`.
    - `.btn--inverse`: fundo `var(--color-inverse-ink)`, cor `var(--color-inverse-bg)`.
    - `.btn--ghost`: sem borda, sublinhado com seta.
  - **Tags:**
    - `.tag-list`: `display: flex; flex-wrap: wrap; gap: var(--space-2);`
    - `.tag`: fonte mono, `--fs-tag`, uppercase, tracking `0.08em`, padding `4px 8px`, borda `1px solid var(--color-line-strong)`, cor `var(--color-ink-2)`.
  - **Section Head:**
    - `.section-head`: label em `--fs-label` uppercase, título em `--fs-h2`, lead em `--fs-lead`.

- [ ] **TASK-013**: Implementar estilos do Project Card em `assets/css/styles.css`.
  - **Estilos:**
    - `.project-card`: `<article>` com borda `1px solid var(--color-line)`, raio 2px, fundo `--color-bg`, transição de 200ms.
    - `.project-card__link`: bloco de link cobrindo o card inteiro.
    - `.project-card__media`: proporção 16:10 (`aspect-ratio: 16 / 10`), fundo `--color-bg-subtle`, overflow oculto.
    - `.project-card__media img`: `object-fit: cover; width: 100%; height: 100%; filter: grayscale(1) contrast(1.05); transition: transform var(--dur-base) var(--ease-out);`.
    - `.project-card__body`: padding `20px` (desktop) / `16px` (mobile).
    - `.project-card__meta`: `--fs-mono`, `--color-ink-3`.
    - `.project-card__title`: `--fs-h3`, cor `--color-ink`.
    - `.project-card__summary`: `--fs-small`, `--color-ink-2`, limite de 2 linhas visuais (`display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;`).
    - `.project-card:hover`: borda `--color-ink`, `transform: translateY(-2px)`, zoom na imagem `scale(1.03)`.
    - `.project-card:focus-within`: contorno de foco visível.

- [ ] **TASK-014**: Implementar estilos da Faixa de Contato Invertida em `assets/css/styles.css`.
  - **Estilos:**
    - `.contact-strip`: fundo `var(--color-inverse-bg)`, cor `var(--color-inverse-ink)`, padding vertical `var(--section-y)`.
    - Link de e-mail: `--fs-h2`, sublinhado, cor branca.
    - Links de redes sociais com setas externas em SVG inline.

- [ ] **TASK-015**: Criar o arquivo `index.html` completo conforme especificações editoriais.
  - **Caminho:** `index.html`
  - **Estrutura semântica:**
    - `<!DOCTYPE html>` e `<html lang="pt-BR">`
    - `<head>` com meta charset UTF-8, viewport, meta description com 140-160 caracteres, link canonical absoluto, tags Open Graph textuais (`og:title`, `og:description`, `og:type="website"`, `og:locale="pt_BR"`), meta theme-color `#ffffff`, e link CSS `assets/css/styles.css`.
    - `<body>`:
      - `a.skip-link` ("Pular para o conteúdo" -> `#main-content`).
      - `<header class="site-header">` com logo/nome, navegação com `aria-current="page"` no link Início, e botão do menu mobile com SVG de ícone.
      - `<nav class="mobile-menu" data-mobile-menu aria-label="Navegação mobile">`
      - `<main id="main-content">`:
        1. `<section class="hero" id="inicio">`:
           - Badge/status: "Disponível para novos projetos" com dot.
           - `<h1>`: `<!-- TODO(content): ... --> [SEU NOME]` em `--fs-display`.
           - Subtítulo: `[SEU CARGO] — [FOCO]`.
           - Lead e Bio conforme copy de `docs/CONTENT.md`.
           - CTAs: "Ver projetos" (link para `#destaques` ou `projetos.html`) e "Falar comigo" (link para `#contato`).
           - Linha de metadados: Base, Foco, Status.
        2. `<section class="featured-projects" id="destaques">`:
           - Section head: "Selecionados" / "Projetos em destaque".
           - Grade com **3 cards** de projetos em destaque (slots 01, 02 e 03 de `CONTENT.md`).
           - Cada card apontando externamente com `target="_blank"`, `rel="noopener noreferrer"` e `span.sr-only` ("(abre em nova aba)").
           - Link de ação: "Ver todos os 6 projetos" direcionando para `projetos.html`.
        3. `<section class="about-summary" id="sobre">`:
           - Section head: "Sobre" / "Design e código, na mesma mesa.".
           - Dois parágrafos de resumo conforme `docs/CONTENT.md`.
           - Link de ação: "Ler mais sobre mim" direcionando para `sobre.html`.
        4. `<section class="contact-strip" id="contato">`:
           - Título: "Vamos conversar.".
           - E-mail visível com link `mailto:`, botão "Copiar e-mail" com atributos de ação JS `data-copy-email`.
           - Região `div[aria-live="polite"]` para feedback de cópia.
           - Links para GitHub, LinkedIn e link para `contato.html`.
      - `<footer class="site-footer">`:
        - 4 colunas com marca, links de navegação, redes sociais, copyright dinâmico via `[data-year]` e link "Voltar ao topo".
      - `<script src="assets/js/main.js" defer></script>`.

- [ ] **TEST-004**: Teste e validação da página `index.html`.
  - **Método:** Iniciar servidor local (`python -m http.server 8000`) e carregar `http://localhost:8000/index.html`.
  - **Verificações:**
    1. Skip-link ganha foco ao pressionar `Tab` como primeiro elemento da página.
    2. Headings têm exatamente um `<h1>` e seguem a hierarquia sem pular níveis (`h1` -> `h2` -> `h3`).
    3. Exatamente 3 cards de projeto são exibidos na home.
    4. Responsividade testada em 320px, 768px e 1280px sem overflow horizontal.
    5. Desativar JavaScript no navegador e recarregar: todo o conteúdo, cards e links permanecem perfeitamente visíveis e navegáveis.
  - **Critério de aceite:** Layout idêntico ao design system, sem requisições externas e sem erros no console.

---

## Fase 4: Página de Projetos e Sistema de Filtros (`projetos.html`)

- [ ] **TASK-016**: Implementar estilos dos Filtros e Estado Vazio em `assets/css/styles.css`.
  - **Estilos:**
    - `.filters`: oculto por padrão (`display: none;`), visível apenas quando JS estiver ativo (`html.js .filters { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: var(--space-4); margin-bottom: var(--space-7); }`).
    - `.filters__list`: flexbox com gap de `8px`.
    - `.filter-btn`: botão com altura 40px, padding `0 16px`, fonte mono `--fs-tag` uppercase, borda `1px solid var(--color-line-interactive)`, raio 2px.
    - `.filter-btn[aria-pressed="true"]`: fundo `var(--color-ink)`, cor `var(--color-bg)`, borda `1px solid var(--color-ink)`.
    - `.filters__status`: mono `--fs-mono`, cor `var(--color-ink-3)`.
    - `.empty-state`: padding de 64px centralizado na grade, oculto por padrão (`display: none;`), visível quando ativo (`&.is-visible { display: block; text-align: center; }`).

- [ ] **TASK-017**: Criar a página `projetos.html`.
  - **Caminho:** `projetos.html`
  - **Conteúdo estrutural:**
    - `<head>` completo com metadados SEO específicos de Projetos conforme `docs/CONTENT.md` e link canonical `https://[USUARIO].github.io/projetos.html`.
    - Header com `aria-current="page"` no link "Projetos".
    - `<main>`:
      1. Cabeçalho de página: label "Portfólio", `<h1>Projetos</h1>`, lead explicativo.
      2. Barra de filtros (`.filters`):
         - Botões: `Todos` (`data-filter="all"`, `aria-pressed="true"`), `Front-end` (`data-filter="frontend"`), `Back-end` (`data-filter="backend"`), `Full-stack` (`data-filter="fullstack"`), `Design` (`data-filter="design"`).
         - Contador: `<span class="filters__status" data-filter-status aria-live="polite">6 projetos</span>`.
      3. Grade de Projetos (`.projects-grid`):
         - Grid responsivo: 1 coluna em mobile, 2 colunas ≥ 640px, 3 colunas ≥ 1024px.
         - Inserção dos **6 cards de projetos** (Projeto 01 a 06 de `docs/CONTENT.md`), cada um com seu atributo `data-category="frontend|backend|fullstack|design"`.
         - Cada card possui imagem com `loading="lazy"`, `decoding="async"`, `width="1600"`, `height="1000"`, meta (ano + categoria), título, resumo (máx 160 caracteres), tags e link externo seguro.
      4. Bloco de Estado Vazio (`.empty-state`):
         - `<h3>Nenhum projeto nesta categoria ainda.</h3>`
         - `<p>Novos trabalhos entram aqui conforme ficam prontos.</p>`
         - `<button class="btn btn--secondary" data-reset-filter>Ver todos</button>`.
      5. CTA final de continuidade:
         - `<h2>Tem algo parecido em mente?</h2>`
         - Link "Vamos conversar" apontando para `contato.html`.
    - Footer global idêntico ao da Home.

- [ ] **TASK-018**: Implementar a lógica dos Filtros em `assets/js/main.js`.
  - **Função:** `initProjectFilters()`
  - **Comportamento:**
    - Seleciona botões de filtro (`[data-filter]`), cards (`.project-card[data-category]`), contador (`[data-filter-status]`) e empty state (`[data-empty-state]`).
    - Ao clicar em um botão de filtro:
      - Atualiza `aria-pressed="true"` apenas no botão clicado (os demais recebem `aria-pressed="false"`).
      - Lê a categoria selecionada (`all`, `frontend`, `backend`, `fullstack`, `design`).
      - Para cada card: se a categoria for `all` ou igual ao `data-category` do card, remove o atributo `hidden` e a classe `.is-hidden`. Caso contrário, adiciona o atributo `hidden`.
      - Conta o número de cards visíveis.
      - Atualiza o texto do contador em português com plural correto ("6 projetos", "1 projeto", "Nenhum projeto").
      - Se o número de visíveis for 0, exibe o empty state; se for > 0, oculta o empty state.
    - Botão "Ver todos" do empty state reseta o filtro para `all`, disparando clique no botão "Todos".

- [ ] **TEST-005**: Teste e validação de filtros e grade em `projetos.html`.
  - **Passos:**
    1. Abrir `projetos.html` no navegador.
    2. Verificar exibição inicial de 6 cards e contador "6 projetos".
    3. Clicar em "Front-end": apenas os cards de front-end devem ficar visíveis; contador deve atualizar para a quantidade correta (ex: "2 projetos"); botão ativo com `aria-pressed="true"`.
    4. Clicar em "Design": apenas os cards de design devem aparecer.
    5. Clicar em "Todos": os 6 cards devem reaparecer.
    6. Simular categoria sem cards (ou alterar temporariamente via console): verificar se a mensagem de empty state aparece com o botão "Ver todos", e se ao clicar nele a lista volta ao estado inicial.
    7. Desativar JavaScript no navegador e recarregar a página: a barra de filtros deve ficar oculta e os 6 cards devem estar visíveis.
  - **Critério de aceite:** Filtros funcionam sem recarregar a página, acessibilidade de status conferida e degradação sem JS 100% preservada.

---

## Fase 5: Construção da Página Sobre (`sobre.html`)

- [ ] **TASK-019**: Implementar estilos específicos da Página Sobre em `assets/css/styles.css`.
  - **Estilos:**
    - Layout de duas colunas para Intro (`.about-intro`): 5 colunas para foto e 7 colunas para texto a partir de 900px (`@media (min-width: 900px)`). Empilhado abaixo de 900px.
    - Foto do perfil (`.about-portrait`): proporção 4:5 (`aspect-ratio: 4 / 5`), moldura de 1px, `filter: grayscale(1) contrast(1.05);`.
    - Legenda da foto: `--fs-mono`, `--color-ink-3`, margem superior de 8px.
    - Bio prose (`.about-bio`): `--fs-body`, largura máxima `68ch`, parágrafos com margem inferior de `1.25em`.
    - Seção Stack (`.stack-group`): título do grupo em `--fs-small` peso 600, lista de tags não interativas em mono.
    - Lista de Trajetória (`.timeline`): lista cronológica inversa com réguas de 1px entre itens, coluna com período em mono, cargo e empresa, seguidos por linha de contexto.
    - Seção "Como eu trabalho" (`.principles-grid`): 3 colunas desktop / 1 coluna mobile com título e explicação concisa.

- [ ] **TASK-020**: Criar a página `sobre.html`.
  - **Caminho:** `sobre.html`
  - **Conteúdo estrutural:**
    - `<head>` completo com metadados SEO de Sobre e link canonical `https://[USUARIO].github.io/sobre.html`.
    - Header com `aria-current="page"` no link "Sobre".
    - `<main>`:
      1. Cabeçalho de página: label "Sobre", `<h1>Sobre</h1>`, lead institucional.
      2. Intro em duas colunas:
         - Coluna 1: `<figure class="about-portrait">` com imagem `assets/img/profile.webp` (4:5, alt descritivo) e `<figcaption>` ("`[SEU NOME], [CIDADE], 2026.`").
         - Coluna 2: Três parágrafos de bio estruturada conforme `docs/CONTENT.md`.
      3. Seção Stack:
         - Grupos: "Linguagens", "Frameworks e bibliotecas", "Ferramentas" com tags em mono.
      4. Seção Trajetória:
         - Lista de experiências em ordem cronológica inversa (3 itens com período, cargo, organização e resultado).
      5. Seção "Como eu trabalho":
         - 3 princípios: "1. Clareza antes de código.", "2. Performance é parte do design.", "3. O detalhe é o produto.".
      6. CTA de contato:
         - `<h2>Vamos trabalhar juntos.</h2>`
         - Link "Entrar em contato" apontando para `contato.html`.
    - Footer global idêntico ao padrão.

- [ ] **TEST-006**: Teste e validação da página `sobre.html`.
  - **Verificações:**
    1. Abrir `sobre.html` no navegador.
    2. Inspecionar largura do texto de bio: deve respeitar o limite máximo confortável de 68ch sem quebras anormais.
    3. Foto de perfil deve respeitar a proporção 4:5 e exibir filtro monocromático.
    4. Responsividade testada em 375px, 768px e 1200px: no mobile a foto fica acima da bio; no desktop foto e bio ficam lado a lado.
  - **Critério de aceite:** Visual editorial limpo, sem quebra de grid e sem overflow horizontal.

---

## Fase 6: Página de Contato e Funcionalidade de Cópia (`contato.html`)

- [ ] **TASK-021**: Implementar estilos da Página de Contato em `assets/css/styles.css`.
  - **Estilos:**
    - Bloco de E-mail (`.contact-email-box`): e-mail em destaque com tamanho `clamp(1.25rem, 4vw, 2.25rem)`, peso 500, link `mailto:` sublinhado.
    - Botão "Copiar e-mail" alinhado ao lado no desktop e abaixo no mobile.
    - Área de feedback de cópia com ícone check e mensagem de sucesso/erro.
    - Lista de redes sociais (`.social-links`): links externos em display flex com espaçamento e ícones SVG inline (`arrow-up-right`).
    - Tabela/Lista de detalhes de disponibilidade (`.contact-details`): chave-valor com linha divisória de 1px.

- [ ] **TASK-022**: Implementar lógica de cópia de e-mail em `assets/js/main.js`.
  - **Função:** `initCopyEmail()`
  - **Comportamento detalhado:**
    - Seleciona botões de cópia (`[data-copy-email]`) e regiões de feedback (`[data-copy-feedback]`).
    - Ao disparar evento de clique:
      - Obtém o endereço de e-mail do atributo `data-email` ou elemento alvo.
      - Tenta copiar via API moderna `navigator.clipboard.writeText(email)`.
      - Se a API falhar ou não existir, executa fallback: cria um `<textarea>` temporário fora da tela, atribui o valor do e-mail, seleciona o texto e executa `document.execCommand('copy')`, removendo o textarea em seguida.
      - Em caso de sucesso:
        - Altera o texto do botão/feedback para exibir o ícone de check e o texto "Copiado!".
        - Atualiza a região `aria-live="polite"` com "E-mail copiado para a área de transferência.".
        - Retorna ao estado original após exatamente 2 segundos (`2000ms`).
      - Em caso de erro:
        - Atualiza feedback com mensagem: "Não foi possível copiar. Selecione o e-mail acima."

- [ ] **TASK-023**: Criar a página `contato.html`.
  - **Caminho:** `contato.html`
  - **Conteúdo estrutural:**
    - `<head>` completo com metadados SEO de Contato e link canonical `https://[USUARIO].github.io/contato.html`.
    - Header com `aria-current="page"` no link "Contato".
    - `<main>`:
      1. Cabeçalho de página: label "Contato", `<h1>Vamos conversar.</h1>`, lead explicativo.
      2. Bloco principal de e-mail:
         - Link `mailto:[EMAIL]` grande e legível.
         - Botão `<button type="button" class="btn btn--secondary" data-copy-email data-email="[EMAIL]">` com ícone SVG de copiar e texto "Copiar e-mail".
         - Região `<span class="copy-feedback" data-copy-feedback aria-live="polite"></span>`.
      3. Redes sociais:
         - Links para GitHub e LinkedIn com ícones SVG inline de seta externa (`arrow-up-right`) e texto acessível `(abre em nova aba)` em `.sr-only`.
      4. Detalhes de disponibilidade:
         - Lista de definição (`<dl class="contact-details">`):
           - "Disponível para": `[TIPO DE OPORTUNIDADE]`
           - "Base": `[CIDADE], [PAÍS]`
           - "Fuso horário": `[FUSO]`
           - "Prazo de resposta": `[PRAZO]`
      5. Nota editorial:
         - `<p class="contact-note">Sem formulário: e-mail direto funciona melhor para mim.</p>`
    - Footer global padrão.

- [ ] **TEST-007**: Teste da página `contato.html` e do recurso de cópia.
  - **Passos:**
    1. Abrir `contato.html` no navegador.
    2. Clicar no botão "Copiar e-mail":
       - O texto do botão/feedback deve mudar para "Copiado!" imediatamente.
       - Colar o conteúdo na barra de endereços ou bloco de notas para garantir que o e-mail correto foi copiado.
       - Aguardar 2 segundos: o botão deve voltar ao estado inicial "Copiar e-mail".
    3. Clicar no link de e-mail `mailto:`: o cliente de e-mail do sistema operacional deve ser invocado.
    4. Testar o botão de cópia na home (`index.html#contato`) para garantir que o mesmo comportamento ocorre de forma idêntica.
  - **Critério de aceite:** Cópia funciona perfeitamente com feedback visual e acessível em ambas as páginas.

---

## Fase 7: Microinterações, Movimento e Acessibilidade de Animação

- [ ] **TASK-024**: Implementar animação de Reveal ao Rolar em `assets/css/styles.css` e `assets/js/main.js`.
  - **CSS:**
    - Elementos com reveal (`[data-reveal]`): por padrão visíveis sem JS.
    - Quando JS ativo (`html.js [data-reveal]`): `opacity: 0; transform: translateY(14px); transition: opacity var(--dur-slow) var(--ease-out), transform var(--dur-slow) var(--ease-out);`.
    - Quando visível (`html.js [data-reveal].is-revealed`): `opacity: 1; transform: translateY(0);`.
  - **JavaScript (`initReveal`):**
    - Verificar suporte a `IntersectionObserver` e checar `window.matchMedia('(prefers-reduced-motion: reduce)').matches`.
    - Se movimento reduzido estiver ativo ou `IntersectionObserver` não for suportado, aplicar imediatamente `.is-revealed` a todos os elementos.
    - Caso contrário, observar os elementos e aplicar `.is-revealed` com stagger máximo de `60ms` entre elementos vizinhos, desobservando o elemento em seguida (revelar apenas uma vez).

- [ ] **TASK-025**: Implementar comportamento de "Voltar ao topo" suave em `assets/js/main.js`.
  - **Função:** `initBackToTop()`
  - **Comportamento:** Ao clicar nos links de voltar ao topo (`[data-back-to-top]`), rolar a página para o topo usando `window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' })`.

- [ ] **TASK-026**: Garantir suporte estrito a `prefers-reduced-motion: reduce` no CSS.
  - **Regra obrigatória em `assets/css/styles.css`:**
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

- [ ] **TEST-008**: Teste de movimento e redução de movimento.
  - **Passos:**
    1. Rolar a página normalmente: observar o fade e translateY suave dos blocos e cards.
    2. No Chrome DevTools (Rendering tab), ativar a opção de emulação `prefers-reduced-motion: reduce`.
    3. Rolar a página e clicar em links de navegação: todos os elementos devem aparecer imediatamente sem transições, sem translateY e sem scroll suave.
  - **Critério de aceite:** Nenhuma animação ou movimento ocorre quando `prefers-reduced-motion` está ativado.

---

## Fase 8: Auditoria de Qualidade, Acessibilidade, Responsividade e Performance

- [ ] **TEST-009**: Auditoria de Links e Metadados.
  - **Verificações:**
    - Percorrer as 4 páginas (`index.html`, `projetos.html`, `sobre.html`, `contato.html`).
    - Todos os links internos apontam para arquivos existentes e carregam sem erro 404.
    - Todos os links externos possuem `target="_blank"`, `rel="noopener noreferrer"` e texto oculto acessível `(abre em nova aba)`.
    - Cada página possui `<title>` exclusivo, `<meta name="description">` preenchida e `<link rel="canonical">` adequado.
  - **Critério de aceite:** 100% dos links funcionais e metadados válidos.

- [ ] **TEST-010**: Auditoria de Responsividade (320px a 1440px).
  - **Verificações:**
    - Testar cada página nas seguintes larguras no DevTools: `320px`, `375px`, `480px`, `640px`, `768px`, `1024px`, `1280px`, `1440px`.
    - Verificar que a barra de rolagem horizontal nunca aparece (`document.documentElement.scrollWidth <= window.innerWidth`).
    - Verificar que nenhum texto ou botão fica truncado ou sobreposto.
  - **Critério de aceite:** Zero overflow horizontal em todas as páginas e breakpoints.

- [ ] **TEST-011**: Auditoria de Navegação Completa por Teclado.
  - **Verificações:**
    - Navegar por todas as páginas usando apenas as teclas `Tab`, `Shift + Tab`, `Enter`, `Espaço` e `Escape`.
    - O anel de foco de 2px deve ser nítido e visível em todos os elementos interativos (links, botões, cards).
    - O skip link deve aparecer ao primeiro `Tab` e rolar até `#main-content` ao pressionar `Enter`.
  - **Critério de aceite:** Nenhum elemento interativo é inacessível ou possui foco invisível.

- [ ] **TEST-012**: Auditoria de Contraste e Paleta Monocromática.
  - **Verificações:**
    - Inspecionar estilos com analisador de contraste: texto normal com razão mínima de `4.5:1`, texto grande/títulos com no mínimo `3:1`.
    - Verificar que nenhuma cor além de preto, branco e a escala de cinzas neutros foi utilizada em nenhum seletor CSS.
  - **Critério de aceite:** Zero cores de acento, sombras ou gradientes encontrados.

- [ ] **TEST-013**: Auditoria de Degradação sem JavaScript.
  - **Verificações:**
    - Desativar o JavaScript no navegador (`Disable JavaScript`).
    - Recarregar as 4 páginas.
    - Verificar que:
      - O conteúdo de todas as páginas está 100% visível (nenhum elemento ficou invisível por causa de reveal).
      - Os 6 cards da página de projetos estão visíveis.
      - A barra de filtros na página de projetos fica oculta (evitando botões inoperantes).
      - O e-mail permanece perfeitamente legível e clicável via link `mailto:`.
      - Os menus de navegação desktop continuam acessíveis.
  - **Critério de aceite:** Degradação graciosa sem perda de conteúdo.

- [ ] **TEST-014**: Auditoria de Placeholders e Comentários TODO.
  - **Comando:** Executar busca no repositório por `TODO(content)` e colchetes `[` para listar todas as pendências editoriais.
  - **Critério de aceite:** Nenhum lorem ipsum presente; todos os dados que dependem de preenchimento real do usuário estão documentados com a convenção `<!-- TODO(content): ... --> [PLACEHOLDER]`.

---

## Fase 9: Deploy e Publicação no GitHub Pages

- [ ] **TASK-027**: Verificação dos arquivos essenciais na raiz do repositório.
  - **Checklist:**
    - [ ] `index.html` na raiz
    - [ ] `projetos.html` na raiz
    - [ ] `sobre.html` na raiz
    - [ ] `contato.html` na raiz
    - [ ] `.nojekyll` na raiz
    - [ ] `assets/css/styles.css`
    - [ ] `assets/js/main.js`
    - [ ] `assets/img/profile.webp`
    - [ ] `assets/img/projects/projeto-01.webp` até `projeto-06.webp`
  - **Critério de aceite:** Todos os arquivos nos caminhos exatos previstos na árvore de arquitetura.

- [ ] **TASK-028**: Fornecer ao usuário os comandos exatos de inicialização e deploy via Git.
  - **Comandos informativos para o usuário:**
    ```bash
    # 1. Testar localmente
    python -m http.server 8000

    # 2. Inicializar repositório Git e commit (apenas quando solicitado)
    git init
    git add .
    git commit -m "feat: implementa site pessoal e portfolio minimalista"
    git branch -M main
    git remote add origin https://github.com/<usuario>/<usuario>.github.io.git
    git push -u origin main
    ```
  - **Critério de aceite:** Comandos claros, sem execução de push ou commits automáticos não autorizados.

---

## Tabela de Acompanhamento de Execução

| ID da Tarefa | Descrição Resumida | Arquivo Envolvido | Status | Teste Associado |
|---|---|---|---|---|
| TASK-001 | Criação de pastas do projeto | Diretórios `assets/...` | [ ] Pendente | TEST-001 |
| TASK-002 | Criação do `.nojekyll` | `.nojekyll` | [ ] Pendente | TEST-001 |
| TASK-003 | Criação de imagens de placeholder | `assets/img/...` | [ ] Pendente | TEST-001 |
| TASK-004 | Declaração de `@layer` | `assets/css/styles.css` | [ ] Pendente | TEST-002 |
| TASK-005 | Tokens e variáveis CSS | `assets/css/styles.css` | [ ] Pendente | TEST-002 |
| TASK-006 | Reset CSS semântico | `assets/css/styles.css` | [ ] Pendente | TEST-002 |
| TASK-007 | Base, tipografia e utilities | `assets/css/styles.css` | [ ] Pendente | TEST-002 |
| TASK-008 | Layout Header e Nav desktop | `assets/css/styles.css` | [ ] Pendente | TEST-003 |
| TASK-009 | Menu Mobile Overlay | `assets/css/styles.css` | [ ] Pendente | TEST-003 |
| TASK-010 | Layout Footer global | `assets/css/styles.css` | [ ] Pendente | TEST-003 |
| TASK-011 | JavaScript Shell e Mobile Nav | `assets/js/main.js` | [ ] Pendente | TEST-003 |
| TASK-012 | Botões, Tags e Section Heads | `assets/css/styles.css` | [ ] Pendente | TEST-004 |
| TASK-013 | Project Card CSS | `assets/css/styles.css` | [ ] Pendente | TEST-004 |
| TASK-014 | Faixa de Contato Invertida CSS | `assets/css/styles.css` | [ ] Pendente | TEST-004 |
| TASK-015 | Construção de `index.html` | `index.html` | [ ] Pendente | TEST-004 |
| TASK-016 | Filtros e Estado Vazio CSS | `assets/css/styles.css` | [ ] Pendente | TEST-005 |
| TASK-017 | Construção de `projetos.html` | `projetos.html` | [ ] Pendente | TEST-005 |
| TASK-018 | Lógica JS dos Filtros | `assets/js/main.js` | [ ] Pendente | TEST-005 |
| TASK-019 | Estilos da Página Sobre | `assets/css/styles.css` | [ ] Pendente | TEST-006 |
| TASK-020 | Construção de `sobre.html` | `sobre.html` | [ ] Pendente | TEST-006 |
| TASK-021 | Estilos da Página de Contato | `assets/css/styles.css` | [ ] Pendente | TEST-007 |
| TASK-022 | Lógica JS de Cópia de E-mail | `assets/js/main.js` | [ ] Pendente | TEST-007 |
| TASK-023 | Construção de `contato.html` | `contato.html` | [ ] Pendente | TEST-007 |
| TASK-024 | Animação de Reveal ao rolar | `styles.css` / `main.js` | [ ] Pendente | TEST-008 |
| TASK-025 | Voltar ao topo suave | `assets/js/main.js` | [ ] Pendente | TEST-008 |
| TASK-026 | Regras `prefers-reduced-motion` | `assets/css/styles.css` | [ ] Pendente | TEST-008 |
| TEST-009 | Auditoria de Links e Metadados | Todas as páginas | [ ] Pendente | TEST-009 |
| TEST-010 | Auditoria de Responsividade | Todas as páginas | [ ] Pendente | TEST-010 |
| TEST-011 | Auditoria de Acessibilidade/Teclado | Todas as páginas | [ ] Pendente | TEST-011 |
| TEST-012 | Auditoria de Contraste Monocromático| Todas as páginas | [ ] Pendente | TEST-012 |
| TEST-013 | Auditoria Sem JavaScript | Todas as páginas | [ ] Pendente | TEST-013 |
| TEST-014 | Auditoria de Placeholders | Repositório todo | [ ] Pendente | TEST-014 |
| TASK-027 | Checklist final de arquivos | Raiz do projeto | [ ] Pendente | - |
| TASK-028 | Instruções de publicação/Git | Documentação | [ ] Pendente | - |
