# Especificação Geral — Site Pessoal / Portfólio

| Campo | Valor |
|---|---|
| Versão | 0.1 |
| Status | Planejamento — aguardando aprovação |
| Última atualização | 2026-10-23 |
| Responsável | [SEU NOME] |
| Documentos relacionados | `AGENTS.md`, `docs/DESIGN-SYSTEM.md`, `docs/CONTENT.md` |

---

## 1. Visão geral

Site pessoal estático, em português do Brasil, publicado no GitHub Pages, com o objetivo de apresentar quem você é e uma seleção de projetos para recrutadores, clientes e colegas de área.

O site deve parecer um portfólio autoral: editorial, monocromático, direto e rápido. A experiência é construída com tipografia forte, muito espaço em branco, réguas finas e movimento discreto. Não há blog, formulário com backend, CMS ou qualquer dependência externa.

### 1.1 Objetivos

1. Causar uma primeira impressão profissional em menos de 10 segundos.
2. Deixar claro **quem você é**, **o que faz** e **como entrar em contato**.
3. Expor 6 projetos com link externo, filtráveis por categoria.
4. Funcionar perfeitamente em celular, teclado e leitores de tela.
5. Ser simples de manter: editar HTML/CSS/JS diretamente, sem build.

### 1.2 Público-alvo

| Público | O que procura | Ação esperada |
|---|---|---|
| Recrutadores | Trajetória, habilidades, contato rápido | Ler o Sobre, abrir projetos, copiar e-mail |
| Clientes freelance | Prova de trabalho e especialidade | Ver projetos, iniciar conversa |
| Colegas e comunidade | Referências, código, troca | Abrir repositórios, seguir redes |

### 1.3 Métricas de sucesso

- Visitante entende a proposta no hero sem rolar a página.
- Contato acessível em no máximo 2 cliques a partir de qualquer página.
- Lighthouse mobile ≥ 95 em todas as categorias.
- Nenhuma requisição externa e nenhum cookie.

---

## 2. Decisões fechadas

| Tema | Decisão |
|---|---|
| Stack | HTML, CSS e JavaScript puro, sem build |
| Publicação | GitHub Pages em `<usuario>.github.io` |
| Idioma | Português do Brasil |
| Estética | Preto e branco, base clara, editorial |
| Tipografia | Fontes do sistema |
| Estrutura | Híbrida: home enxuta + páginas de Projetos, Sobre e Contato |
| Projetos | 6 cards com link externo |
| Filtros | Por categoria, na página de projetos |
| Contato | Seção na home, página dedicada e links no rodapé |
| Movimento | Sutil, respeitando `prefers-reduced-motion` |
| Conteúdo | Placeholders explícitos para preenchimento posterior |
| Analytics | Fora de escopo |
| Tema escuro | Fora de escopo |
| Formulário | Fora de escopo |

---

## 3. Escopo

### 3.1 Dentro do escopo

- Quatro páginas: `index.html`, `projetos.html`, `sobre.html`, `contato.html`.
- Layout responsivo de 320px a 1440px.
- Header fixo com navegação e menu mobile.
- Hero de apresentação.
- Três projetos em destaque na home.
- Grade com 6 projetos e filtros por categoria.
- Página Sobre com bio, foto, stack e trajetória.
- Página de Contato com e-mail copiável e redes.
- Rodapé consistente em todas as páginas.
- Microinterações: reveal ao rolar, hover de cards, botões e foco.
- SEO básico por página: title, description, canonical, Open Graph textual.
- Acessibilidade WCAG 2.2 AA.
- Deploy estático no GitHub Pages.

### 3.2 Fora do escopo

- Blog ou artigos.
- CMS ou painel administrativo.
- Formulário com envio real.
- Backend, banco de dados ou API.
- Modo escuro ou seletor de tema.
- Versão em inglês ou outro idioma.
- Página 404.
- Favicon e imagem Open Graph.
- `sitemap.xml`, `robots.txt` e JSON-LD.
- Analytics, cookies ou qualquer rastreamento.
- Currículo em PDF.
- Páginas individuais de case.
- Domínio próprio.
- Testes automatizados.

Itens fora de escopo podem virar backlog, mas não devem ser implementados por iniciativa do agente.

---

## 4. Arquitetura de informação

```text
/ (index.html)
├── #inicio        Hero
├── #destaques     Projetos em destaque
├── #sobre         Resumo do Sobre
└── #contato       Faixa de contato
/projetos.html     Grade completa + filtros
/sobre.html        Bio, foto, stack e trajetória
/contato.html      E-mail, redes e disponibilidade
```

### 4.1 Navegação principal

O header aponta sempre para as páginas, nunca para âncoras da home:

| Rótulo | Destino | Estado ativo |
|---|---|---|
| Início | `index.html` | `aria-current="page"` na home |
| Projetos | `projetos.html` | `aria-current="page"` |
| Sobre | `sobre.html` | `aria-current="page"` |
| Contato | `contato.html` | `aria-current="page"` |

O logo/nome à esquerda também leva para `index.html`.

Na home, o CTA secundário do hero pode levar para `#contato`, mas o item "Contato" do menu continua apontando para `contato.html`.

### 4.2 Fluxos principais

1. **Recrutador:** home → hero → projetos em destaque → página de projetos → card externo.
2. **Cliente:** home → sobre → contato → copiar e-mail.
3. **Exploração:** projetos → filtro por categoria → card externo → retorno.
4. **Mobile:** menu → página → contato → copiar e-mail.

---

## 5. Páginas e seções

### 5.1 `index.html` — Home

**Objetivo:** apresentar a pessoa, provar competência com 3 projetos e abrir caminho para contato.

1. **Header** — nome, navegação, botão de menu no mobile.
2. **Hero**
   - Label superior com status: "Disponível para novos projetos".
   - `<h1>` com o nome.
   - Cargo e foco em uma linha.
   - Lead curto (máx. 2 linhas) sobre o que faz e como trabalha.
   - Bio curta (máx. 3 linhas) com localização e disponibilidade.
   - CTAs: "Ver projetos" (primário) e "Falar comigo" (secundário).
   - Linha de metadados: Base, Foco, Status.
3. **Projetos em destaque**
   - Label "Selecionados", título "Projetos em destaque" e lead curto.
   - 3 cards.
   - Link "Ver todos os 6 projetos" para `projetos.html`.
4. **Sobre (resumo)**
   - Label "Sobre", título e dois parágrafos curtos.
   - Link "Ler mais sobre mim" para `sobre.html`.
5. **Faixa de contato**
   - Bloco invertido (fundo preto), único da página.
   - Título "Vamos conversar.", disponibilidade e prazo de resposta.
   - E-mail em destaque, botão "Copiar e-mail" e links sociais.
   - Link para a página de contato.
6. **Footer** — navegação, redes, copyright e "Voltar ao topo".

### 5.2 `projetos.html` — Projetos

**Objetivo:** permitir explorar os 6 projetos por categoria e abrir cada um externamente.

1. **Header**.
2. **Cabeçalho da página**
   - Label "Portfólio".
   - `<h1>` "Projetos".
   - Lead com quantidade e tipos de trabalho.
3. **Filtros**
   - Botões: Todos, Front-end, Back-end, Full-stack, Design.
   - Contador ao lado: "6 projetos".
   - Apenas um filtro ativo por vez.
4. **Grade**
   - 6 cards com imagem, ano, categoria, título, resumo, tags e CTA.
   - 1 coluna no mobile, 2 no tablet, 3 no desktop.
5. **Estado vazio**
   - "Nenhum projeto nesta categoria ainda." + botão "Ver todos".
   - Ocorre apenas se uma categoria ficar sem projetos após edição futura.
6. **CTA final**
   - "Tem algo parecido em mente? Vamos conversar." com link para contato.
7. **Footer**.

### 5.3 `sobre.html` — Sobre

**Objetivo:** dar contexto humano e profissional, aprofundar a bio e mostrar trajetória.

1. **Header**.
2. **Cabeçalho da página** — label "Sobre", `<h1>` "Sobre" e lead.
3. **Intro em duas colunas**
   - Foto em preto e branco, proporção 4:5, com legenda.
   - Bio em 3 parágrafos, máx. 68ch.
4. **Stack**
   - Grupos: Linguagens, Frameworks e bibliotecas, Ferramentas.
   - Tags não interativas.
5. **Trajetória**
   - Lista cronológica inversa com período, cargo, organização e uma linha de contexto.
6. **Como eu trabalho**
   - Três princípios curtos com título e uma frase.
7. **CTA de contato** — link para `contato.html`.
8. **Footer**.

### 5.4 `contato.html` — Contato

**Objetivo:** facilitar o contato sem formulário.

1. **Header**.
2. **Cabeçalho da página** — label "Contato", `<h1>` "Vamos conversar." e lead.
3. **Bloco de e-mail**
   - E-mail grande como link `mailto:`.
   - Botão "Copiar e-mail" com feedback.
4. **Redes**
   - GitHub, LinkedIn e, opcionalmente, uma terceira rede.
   - Links externos com ícone de seta.
5. **Detalhes**
   - Lista de definição: Disponível para, Base, Fuso horário, Prazo de resposta.
6. **Nota**
   - "Sem formulário: e-mail direto funciona melhor para mim."
7. **Footer**.

---

## 6. Requisitos funcionais

| ID | Requisito | Prioridade | Critério de aceite |
|---|---|---|---|
| RF-01 | Header fixo com logo e 4 links | Must | Permanece no topo; item da página atual com `aria-current="page"` |
| RF-02 | Menu mobile acessível | Must | Abre/fecha, `aria-expanded`, `Esc`, foco preso e restaurado, scroll travado |
| RF-03 | Hero com nome, cargo, lead e CTAs | Must | Conteúdo visível sem JS; um único `<h1>` |
| RF-04 | 3 projetos em destaque na home | Must | Cards linkam externamente e "Ver todos" leva a `projetos.html` |
| RF-05 | Grade com 6 projetos | Must | 6 cards com todos os campos de `docs/CONTENT.md` |
| RF-06 | Filtros por categoria | Must | Um ativo por vez; `aria-pressed`; cards filtrados por `data-category`; contador atualizado |
| RF-07 | Estado vazio dos filtros | Should | Mensagem e ação "Ver todos" quando não houver resultado |
| RF-08 | Copiar e-mail | Must | Copia via Clipboard API com fallback; feedback visual e `aria-live` por 2s |
| RF-09 | Reveal ao rolar | Should | Fade/translate sutil, uma vez por elemento; desativado com movimento reduzido; conteúdo visível sem JS |
| RF-10 | Ano automático no footer | Should | Exibe o ano atual; fallback estático se JS falhar |
| RF-11 | Links externos seguros | Must | `target="_blank"`, `rel="noopener noreferrer"` e aviso para leitor de tela |
| RF-12 | Skip link | Must | Primeiro elemento focável; leva ao `main` |
| RF-13 | Degradação sem JS | Must | Navegação, conteúdo e links funcionam; filtros ficam ocultos; todos os cards visíveis |
| RF-14 | Voltar ao topo | Should | Link no footer; respeita movimento reduzido |

### 6.1 Regras dos filtros

- Categorias fixas: `frontend`, `backend`, `fullstack`, `design`.
- O botão "Todos" usa `data-filter="all"`.
- Cada card declara `data-category` com uma única categoria.
- Ao filtrar, usar o atributo `hidden` nos cards que não correspondem.
- O contador considera apenas cards visíveis e usa plural correto.
- A barra de filtros só aparece quando JS está ativo (classe `js` no `<html>`).
- Não alterar a URL nem usar histórico do navegador nesta versão.

### 6.2 Regras do copiar e-mail

- O e-mail permanece visível como link `mailto:`; o botão é um atalho.
- Usar `navigator.clipboard.writeText` quando disponível.
- Fallback com `textarea` temporário e `document.execCommand('copy')`.
- Sucesso: ícone de check + "Copiado!" por 2 segundos.
- Erro: "Não foi possível copiar. Selecione o e-mail acima."
- Feedback em região `aria-live="polite"`.

---

## 7. Requisitos não funcionais

| ID | Requisito | Meta |
|---|---|---|
| NFR-01 | Performance | Lighthouse mobile ≥ 95; LCP < 2.5s; CLS < 0.1 |
| NFR-02 | Acessibilidade | WCAG 2.2 AA; axe sem violações críticas |
| NFR-03 | SEO | Títulos e descrições únicos; HTML semântico; canonical |
| NFR-04 | Compatibilidade | Últimas 2 versões de Chrome, Edge, Firefox e Safari; iOS 16+; Android Chrome |
| NFR-05 | Privacidade | Zero cookies, analytics ou requisições a terceiros |
| NFR-06 | Manutenibilidade | Sem build; edição direta de HTML/CSS/JS |
| NFR-07 | Responsividade | 320px a 1440px sem scroll horizontal |
| NFR-08 | Peso | CSS < 25 KB; JS < 12 KB; imagens ≤ 200 KB cada |

---

## 8. Estrutura de arquivos

```text
/
├── AGENTS.md
├── index.html
├── projetos.html
├── sobre.html
├── contato.html
├── .nojekyll
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       ├── profile.webp
│       └── projects/
│           ├── projeto-01.webp
│           ├── projeto-02.webp
│           ├── projeto-03.webp
│           ├── projeto-04.webp
│           ├── projeto-05.webp
│           └── projeto-06.webp
└── docs/
    ├── SPEC.md
    ├── DESIGN-SYSTEM.md
    └── CONTENT.md
```

Observações:

- `.nojekyll` evita processamento desnecessário do Jekyll pelo GitHub Pages.
- Todos os caminhos são relativos, para funcionar localmente e no Pages.
- Não há `package.json`, `node_modules` ou pasta de build.

---

## 9. Responsividade

| Faixa | Largura | Comportamento |
|---|---|---|
| Mobile pequeno | 320–479px | 1 coluna, header 64px, menu overlay, tipografia mínima |
| Mobile | 480–639px | 1 coluna, CTAs empilhados |
| Tablet | 640–767px | 2 colunas na grade de projetos |
| Tablet largo | 768–1023px | Header expandido, 2 colunas, sobre em 2 colunas |
| Desktop | 1024–1279px | 3 colunas na grade, 12 colunas no hero |
| Desktop largo | 1280px+ | Container limitado a 1180px, margens generosas |

Regras:

- Mobile-first em todo o CSS.
- Sem alturas fixas para blocos de texto.
- Imagens com `aspect-ratio` e `object-fit: cover`.
- Nunca esconder conteúdo essencial no mobile.
- O menu mobile substitui a navegação abaixo de 768px.

---

## 10. Acessibilidade

- Estrutura de landmarks: `header`, `nav`, `main`, `footer`.
- Skip link visível ao focar.
- Um `<h1>` por página e headings em ordem.
- Foco visível em todos os elementos interativos.
- Menu mobile com `aria-expanded`, `aria-controls`, `inert` no conteúdo de fundo e foco preso.
- Filtros como `<button>` com `aria-pressed`; contador em `aria-live="polite"`.
- Cards: link único por card, sem elementos interativos aninhados.
- Links externos com `(abre em nova aba)` em `.sr-only`.
- Contraste mínimo de `4.5:1` para texto e `3:1` para UI.
- Alvos de toque ≥ 44×44px.
- `prefers-reduced-motion` remove transforms e reduz transições.
- Nenhum conteúdo piscando, autoplay ou movimento contínuo.
- Formulários inexistentes nesta versão.

---

## 11. Performance

- Sem fontes web, ícones externos, CDNs ou analytics.
- CSS e JS únicos, minificados apenas se o usuário pedir.
- Imagens em WebP, 1600×1000 (16:10), com `srcset` de 800w e 1600w.
- Primeira imagem de projeto com `loading="lazy"`; nenhuma imagem no hero.
- `width` e `height` explícitos para evitar CLS.
- `decoding="async"` em todas as imagens.
- Ícones como SVG inline.
- `defer` no script.
- Não usar `scroll` listeners pesados; preferir `IntersectionObserver`.
- Respeitar cache padrão do GitHub Pages.

Orçamento:

| Recurso | Limite |
|---|---|
| HTML por página | 30 KB |
| CSS total | 25 KB |
| JS total | 12 KB |
| Imagem de projeto | 200 KB |
| Total inicial sem imagens | 100 KB |
| Página de projetos com imagens | 1.2 MB |

---

## 12. SEO

### 12.1 Por página

| Página | Title | Description |
|---|---|---|
| Home | `[SEU NOME] — [SEU CARGO]` | Portfólio de [SEU NOME], [SEU CARGO] em [CIDADE]. Projetos de [ÁREA] com foco em clareza, performance e detalhe. |
| Projetos | `Projetos — [SEU NOME]` | Seleção de projetos de [ÁREA] por [SEU NOME]. Explore por categoria e abra cada trabalho. |
| Sobre | `Sobre — [SEU NOME]` | Conheça a trajetória, as habilidades e os princípios de trabalho de [SEU NOME], [SEU CARGO]. |
| Contato | `Contato — [SEU NOME]` | Fale com [SEU NOME] por e-mail ou redes sociais. Disponível para [TIPO DE OPORTUNIDADE]. |

### 12.2 Requisitos técnicos

- `lang="pt-BR"` em todas as páginas.
- `<title>` único, com 50–60 caracteres.
- `<meta name="description">` com 140–160 caracteres.
- `<link rel="canonical">` absoluto: `https://<usuario>.github.io/<pagina>`.
- Open Graph textual: `og:title`, `og:description`, `og:type`, `og:url`, `og:locale`, `og:site_name`.
- Twitter Card `summary` sem imagem.
- `theme-color` `#ffffff`.
- Headings semânticos e links com texto descritivo.
- Imagens com alt útil.
- Nenhum texto escondido para SEO.
- `sitemap.xml`, `robots.txt` e JSON-LD ficam para uma versão futura.

---

## 13. Deploy no GitHub Pages

### 13.1 Pré-requisitos

- Conta no GitHub com o nome de usuário definido.
- Repositório público chamado `<usuario>.github.io`.
- Branch `main` com os arquivos na raiz.

### 13.2 Configuração

1. Criar o repositório `<usuario>.github.io`.
2. Enviar os arquivos para a branch `main`.
3. Em **Settings → Pages**, selecionar **Deploy from a branch**.
4. Escolher branch `main` e pasta `/ (root)`.
5. Salvar e aguardar o deploy.
6. Ativar **Enforce HTTPS**.
7. Acessar `https://<usuario>.github.io/`.

### 13.3 Observações

- Não usar GitHub Actions: o site não tem build.
- O arquivo `.nojekyll` deve existir na raiz.
- Atualizações levam de segundos a alguns minutos para propagar.
- Se o repositório tiver outro nome, a URL será `https://<usuario>.github.io/<repo>/`; nesse caso, todos os caminhos relativos continuam funcionando, mas canonical e Open Graph precisam ser ajustados.
- Domínio próprio fica para o futuro: exigirá `CNAME`, DNS e atualização de canonical.

---

## 14. Critérios de aceite

### 14.1 Visão geral

- [ ] As 4 páginas existem e são acessíveis pelo menu.
- [ ] O site funciona sem JavaScript, exceto filtros e feedback de cópia.
- [ ] Nenhuma requisição externa é feita.
- [ ] Nenhuma cor fora da paleta monocromática.
- [ ] Fontes do sistema aplicadas.
- [ ] Placeholders visíveis e documentados.
- [ ] Nenhum lorem ipsum.

### 14.2 Layout

- [ ] Header consistente em todas as páginas.
- [ ] Hero com hierarquia clara e CTAs visíveis.
- [ ] 3 cards na home e 6 na página de projetos.
- [ ] Grade 3/2/1 colunas conforme breakpoint.
- [ ] Sobre com foto 4:5 e bio legível.
- [ ] Contato com e-mail copiável e redes.
- [ ] Rodapé completo.
- [ ] Sem overflow horizontal em 320px.
- [ ] Sem elementos cortados em 1440px.

### 14.3 Interação

- [ ] Menu mobile abre, fecha, prende foco e responde ao `Esc`.
- [ ] Filtros alteram a grade e o contador.
- [ ] Estado vazio funciona.
- [ ] Copiar e-mail funciona com feedback.
- [ ] Links externos abrem em nova aba com `rel` correto.
- [ ] Reveal não esconde conteúdo se o JS falhar.
- [ ] Ano do footer correto.

### 14.4 Qualidade

- [ ] HTML válido no W3C.
- [ ] Console sem erros.
- [ ] Lighthouse mobile ≥ 95 em todas as categorias.
- [ ] axe sem violações críticas.
- [ ] Navegação completa por teclado.
- [ ] `prefers-reduced-motion` respeitado.
- [ ] Testado em Chrome, Firefox, Safari e mobile.

---

## 15. Riscos e mitigação

| Risco | Impacto | Mitigação |
|---|---|---|
| Placeholders esquecidos no lançamento | Alto | Checklist em `docs/CONTENT.md` e busca por `TODO` antes do deploy |
| Fontes do sistema variarem entre SOs | Médio | Testar em Windows, macOS e mobile; usar stack robusta |
| Imagens coloridas quebrarem a estética | Médio | Tratamento `grayscale(1)` e direção de arte em `docs/DESIGN-SYSTEM.md` |
| Categorias de filtro mal distribuídas | Baixo | Revisar após definir os 6 projetos; cada categoria deve ter ao menos 1 projeto |
| GitHub Pages com cache lento | Baixo | Aguardar propagação; validar em janela anônima |
| Falta de backend para contato | Baixo | E-mail direto + copiar e-mail |
| Nome/cargo provisórios | Alto | Definir antes do deploy |

---

## 16. Roadmap de implementação

| Fase | Entrega | Critério de conclusão |
|---|---|---|
| 0. Preparação | Estrutura de pastas, `.nojekyll`, placeholders de imagem | Repositório pronto para receber código |
| 1. Fundação | `styles.css` com tokens, reset, layout, header e footer | Header/footer funcionando em todas as páginas |
| 2. Home | Hero, destaques, sobre resumido e faixa de contato | Página completa e responsiva |
| 3. Projetos | Grade, filtros e estado vazio | Filtros e contador funcionando |
| 4. Sobre | Bio, foto, stack e trajetória | Conteúdo completo e legível |
| 5. Contato | E-mail copiável, redes e detalhes | Cópia e feedback funcionando |
| 6. Polimento | Reveal, menu mobile, foco, microcopy | Interações e acessibilidade validadas |
| 7. QA e deploy | Lighthouse, HTML válido, revisão e publicação | Critérios de aceite atendidos |

Cada fase deve ser revisada pelo usuário antes da próxima.

---

## 17. Backlog futuro

- Página 404 personalizada.
- Favicon e imagem Open Graph.
- `sitemap.xml`, `robots.txt` e JSON-LD.
- Analytics sem cookies.
- Modo escuro com toggle.
- Versão em inglês.
- Blog ou notas técnicas.
- Páginas individuais de case.
- Currículo em PDF.
- Domínio próprio.
- Formulário via serviço externo.

Nenhum item deve ser implementado sem aprovação e atualização desta spec.

---

## 18. Histórico de decisões

| Data | Decisão | Origem |
|---|---|---|
| 2026-10-23 | Stack sem build, HTML/CSS/JS puro | Entrevista |
| 2026-10-23 | Estética preto e branco com base clara | Entrevista |
| 2026-10-23 | Fontes do sistema | Entrevista |
| 2026-10-23 | Estrutura híbrida com 4 páginas | Entrevista |
| 2026-10-23 | 6 projetos em cards com link externo | Entrevista |
| 2026-10-23 | Filtros por categoria | Entrevista |
| 2026-10-23 | Contato na home, página dedicada e rodapé | Entrevista |
| 2026-10-23 | Conteúdo inicial com placeholders | Entrevista |
