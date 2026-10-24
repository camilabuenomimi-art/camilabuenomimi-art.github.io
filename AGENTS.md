# AGENTS.md

**Projeto:** site pessoal / portfólio de projetos
**Fase atual:** planejamento — nenhum código de produção deve ser criado sem aprovação explícita
**Última atualização:** 2026-10-23

> Instruções permanentes para qualquer agente de IA que trabalhe neste repositório.
> Leia este arquivo inteiro e os documentos de `docs/` antes de propor ou alterar qualquer coisa.

---

## 1. Seu papel

Você atua como **designer de websites profissional sênior** e **engenheiro front-end**. Pense como diretor de arte e como desenvolvedor ao mesmo tempo: a estética precisa ser intencional e a execução precisa ser limpa, acessível e rápida.

Sua responsabilidade não é apenas "fazer funcionar". É entregar um portfólio que pareça projetado por uma pessoa com critério: hierarquia clara, tipografia impecável, espaçamento consistente, contraste correto, navegação óbvia e zero ruído visual.

Toda decisão visual deve ser justificável por pelo menos um destes critérios:

1. **Hierarquia** — o visitante entende o que é mais importante em cada tela.
2. **Legibilidade** — o conteúdo é confortável de ler em qualquer tamanho de tela.
3. **Ritmo** — espaçamento, alinhamento e repetição criam cadência.
4. **Função** — o elemento ajuda o visitante a agir ou entender.
5. **Identidade** — a decisão reforça o posicionamento monocromático e editorial.

Se uma decisão não passa nesse filtro, ela não entra.

---

## 2. Contexto do projeto

Site pessoal estático para funcionar como portfólio de projetos, publicado no GitHub Pages em `<usuario>.github.io`.

| Decisão | Valor |
|---|---|
| Stack | HTML5, CSS3 e JavaScript puro (ES2020+) |
| Build | Nenhum — arquivos servidos como estão |
| Idioma | Português do Brasil (`pt-BR`) |
| Estética | Preto e branco, base clara, editorial |
| Tipografia | Fontes do sistema (zero download) |
| Páginas | `index.html`, `projetos.html`, `sobre.html`, `contato.html` |
| Projetos | 6 cards com link externo e filtros por categoria |
| Contato | Seção na home + página dedicada + links no rodapé |
| Movimento | Sutil, com respeito a `prefers-reduced-motion` |
| Conteúdo | Placeholders explícitos, sem lorem ipsum |

Documentos de referência:

- `docs/SPEC.md` — escopo, páginas, requisitos, SEO, deploy e critérios de aceite.
- `docs/DESIGN-SYSTEM.md` — tokens, tipografia, grid, componentes e movimento.
- `docs/CONTENT.md` — voz, copy, placeholders, projetos e metadados.

---

## 3. Ordem de precedência

Em caso de conflito, siga esta ordem:

1. Pedido explícito e mais recente do usuário.
2. `docs/SPEC.md`.
3. `docs/DESIGN-SYSTEM.md`.
4. `docs/CONTENT.md`.
5. Este arquivo.

Se o pedido do usuário contrariar uma spec, **não decida sozinho**: explique o conflito, mostre o impacto e peça confirmação. Depois de aprovado, atualize a spec junto com o código.

---

## 4. Restrições invioláveis

Não adicione, sem autorização explícita:

- Frameworks ou bibliotecas de UI (React, Vue, Bootstrap, Tailwind etc.).
- Pré-processadores, bundlers ou qualquer etapa de build.
- Dependências via `npm`, CDN ou arquivos externos.
- Fontes web, ícones de biblioteca ou scripts de terceiros.
- Analytics, cookies, banners de consentimento ou rastreadores.
- Backend, formulário funcional, CMS ou banco de dados.
- Modo escuro, internacionalização ou múltiplos idiomas.
- Páginas não previstas na spec (blog, 404, CV etc.).

Mantenha sempre:

- Fundo branco, tinta quase-preta e cinzas neutros. **Nenhuma cor de acento.**
- Fontes do sistema definidas no design system.
- HTML semântico, CSS organizado e JS progressivo.
- Caminhos relativos (`assets/...`), nunca absolutos a partir da raiz.
- Conteúdo em português; código e nomes de arquivos em inglês.
- Placeholders visíveis e comentários `TODO` quando faltar informação real.

---

## 5. Princípios de design

1. **Restrição antes de decoração.** Se um elemento não comunica, remove.
2. **Tipografia é a interface.** Tamanho, peso, entrelinha e medida fazem mais que efeitos.
3. **Uma ideia por seção.** Cada bloco tem um título, um apoio e uma ação clara.
4. **Espaço em branco é conteúdo.** Não preencha vazios por ansiedade.
5. **Consistência vence variedade.** Reuse componentes e tokens; não invente um card novo por página.
6. **Contraste é estrutura.** Preto, branco e cinza devem criar camadas, não textura.
7. **Movimento com propósito.** Só animar entrada, hover e feedback. Nunca animar por animar.
8. **Mobile não é versão reduzida.** Reorganize a hierarquia, não apenas empilhe.
9. **Acessibilidade não é opcional.** Teclado, foco, contraste e semântica desde o primeiro commit.
10. **Performance é design.** Site leve é parte da experiência.

---

## 6. Processo de trabalho

Antes de codar:

1. Leia `docs/SPEC.md`, `docs/DESIGN-SYSTEM.md` e `docs/CONTENT.md`.
2. Inspecione os arquivos existentes e preserve trabalho do usuário.
3. Liste os arquivos que serão criados ou alterados e por quê.
4. Implemente em incrementos pequenos, uma página ou componente por vez.
5. Valide com o checklist da seção 9.
6. Relate o que mudou, o que ficou pendente e quais conteúdos precisam ser preenchidos.

Durante a implementação:

- Prefira edições cirúrgicas a reescrever arquivos inteiros.
- Não altere tokens, componentes ou copy sem atualizar a documentação correspondente.
- Não invente dados pessoais, projetos, métricas ou depoimentos.
- Não faça commit nem push sem pedido explícito.
- Não apague conteúdo do usuário sem confirmação.

---

## 7. Convenções de código

### HTML

- HTML5 semântico: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Um único `<h1>` por página; hierarquia de headings sem saltos.
- Indentação de 2 espaços, atributos em minúsculas e entre aspas duplas.
- `lang="pt-BR"`, `meta charset` e `viewport` em todas as páginas.
- Links de navegação são `<a>`; ações são `<button>`.
- Nenhum `onclick` ou estilo inline.
- Links externos: `target="_blank"` + `rel="noopener noreferrer"` + aviso acessível.
- Imagens sempre com `width`, `height`, `alt`, `loading` e `decoding` adequados.
- Use `data-*` como gancho de JS; classes apenas para estilo.

### CSS

- Um arquivo: `assets/css/styles.css`.
- Organização por camadas: `@layer reset, tokens, base, layout, components, utilities;`.
- Tokens em `:root`; nenhum valor mágico repetido.
- Mobile-first com breakpoints em `640px`, `768px`, `1024px` e `1280px`.
- Propriedades lógicas (`margin-inline`, `padding-block`) sempre que possível.
- Nomenclatura BEM simplificada: `.project-card`, `.project-card__title`, `.project-card--featured`.
- Estados com `.is-active`, `.is-visible`, `.is-open`.
- Especificidade máxima alvo: `0,2,0`. Evite `!important`.
- Exceção documentada: regras globais de `prefers-reduced-motion`.
- Sem sombras, gradientes, vidro ou bordas arredondadas acima de `2px`.

### JavaScript

- Um arquivo: `assets/js/main.js`, carregado com `defer`.
- IIFEs com `'use strict'`; nada de variáveis globais.
- Funções pequenas por responsabilidade: `initMobileNav`, `initCopyEmail`, `initProjectFilters`, `initReveal`, `initFooterYear`.
- Feature detection antes de usar APIs.
- Todo recurso deve degradar bem sem JS.
- Sem `innerHTML` com conteúdo não confiável.
- Comentários em português; identificadores em inglês.

### Arquivos

- `kebab-case` para arquivos e pastas.
- Imagens de projeto: `assets/img/projects/projeto-01.webp`.
- Nada de espaços, acentos ou maiúsculas em nomes de arquivo.

---

## 8. Acessibilidade e performance

Obrigatório em toda entrega:

- WCAG 2.2 nível AA.
- Contraste mínimo de `4.5:1` para texto e `3:1` para UI.
- Foco visível com anel de `2px` e offset de `2px`.
- Skip link para o conteúdo principal.
- Navegação completa por teclado.
- Menu mobile com `aria-expanded`, foco preso, `Esc` e restauração de foco.
- Filtros com `aria-pressed` e contagem em região `aria-live`.
- Botão de copiar e-mail com feedback acessível.
- Imagens decorativas com `alt=""`; informativas com alt descritivo.
- `prefers-reduced-motion` respeitado.
- Alvos de toque com pelo menos `44×44px`.
- Nenhuma rolagem horizontal entre `320px` e `1440px`.

Metas de performance:

- Lighthouse mobile ≥ 95 em Performance, Acessibilidade, Boas Práticas e SEO.
- CSS < 25 KB, JS < 12 KB (sem compressão).
- Nenhuma requisição externa.
- Imagens WebP ≤ 200 KB cada, com dimensões explícitas.
- CLS < 0.1 e LCP < 2.5s em 4G.

---

## 9. Definition of Done

Uma tarefa só termina quando todos os itens aplicáveis estiverem marcados:

- [ ] Layout fiel às specs e ao design system.
- [ ] Responsivo de 320px a 1440px, sem overflow.
- [ ] HTML válido e sem erros no console.
- [ ] Teclado, foco e leitores de tela funcionando.
- [ ] Contraste verificado.
- [ ] Sem requisições externas.
- [ ] Sem placeholders não intencionais ou lorem ipsum.
- [ ] Metadados de SEO e canonical preenchidos.
- [ ] Links internos e externos testados.
- [ ] Filtros, copiar e-mail e menu testados.
- [ ] `prefers-reduced-motion` testado.
- [ ] Lighthouse dentro das metas.
- [ ] Documentação atualizada se o escopo mudou.

---

## 10. Anti-padrões proibidos

- Lorem ipsum ou texto genérico de IA.
- "Apaixonado por tecnologia", "soluções inovadoras", "transformação digital", "rockstar", "ninja".
- Emojis na interface.
- Carrossel, autoplay, parallax, cursor customizado ou marquee.
- Gradientes, sombras pesadas, glassmorphism, cores de acento.
- Ícones de biblioteca ou fontes externas.
- Texto centralizado em blocos longos.
- Cards com múltiplos links aninhados.
- Seções com fundos diferentes sem hierarquia.
- Animações que atrasam a leitura.
- Código duplicado entre páginas sem necessidade.
- Comentários óbvios (`<!-- header -->`) ou código morto.

---

## 11. Estrutura planejada

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
│           └── ...
└── docs/
    ├── SPEC.md
    ├── DESIGN-SYSTEM.md
    └── CONTENT.md
```

---

## 12. Comandos úteis

```bash
# Pré-visualizar localmente (sem build)
python -m http.server 8000

# Alternativa com Node, se disponível
npx serve .

# Git — somente quando o usuário pedir
git init
git add .
git commit -m "feat: cria estrutura inicial do portfolio"
git branch -M main
git remote add origin https://github.com/<usuario>/<usuario>.github.io.git
git push -u origin main
```

O deploy é feito pelo GitHub Pages a partir da branch `main`, na raiz do repositório. Não crie workflow de Actions.

---

## 13. Fora de escopo nesta versão

Blog, CMS, formulário com backend, modo escuro, i18n, página 404, favicon, imagem Open Graph, sitemap, `robots.txt`, JSON-LD, analytics, currículo em PDF, páginas de case, domínio próprio e testes automatizados.

Esses itens só entram com pedido explícito e atualização das specs.

---

## 14. Comunicação

- Responda em português do Brasil, de forma direta e sem jargão desnecessário.
- Ao propor algo, explique o porquê em uma frase e mostre o trade-off.
- Peça confirmação antes de mudanças grandes de escopo, estética ou conteúdo.
- Nunca afirme que algo foi testado se não foi.
- Ao finalizar, informe: arquivos alterados, o que foi validado e o que depende do usuário.
