# Conteúdo, Copy e Placeholders

| Campo | Valor |
|---|---|
| Versão | 0.1 |
| Status | Rascunho editorial — aguardando conteúdo real |
| Última atualização | 2026-10-23 |
| Relacionado | `docs/SPEC.md`, `docs/DESIGN-SYSTEM.md` |

---

## 1. Objetivo deste documento

Definir a voz do site, o copy de cada página, o modelo de dados dos projetos e o sistema de placeholders. O objetivo é que a implementação possa começar sem lorem ipsum e sem inventar dados pessoais.

Todo texto entre colchetes é um **placeholder explícito** e deve ser substituído antes da publicação.

---

## 2. Voz e tom

### 2.1 Personalidade

- **Direto:** uma ideia por frase, sem rodeios.
- **Concreto:** verbos de ação, exemplos reais, números quando existirem.
- **Calmo:** confiança sem arrogância, entusiasmo sem exclamações.
- **Pessoal:** primeira pessoa do singular; o site é sobre uma pessoa, não sobre uma agência.
- **Técnico na medida:** termos de tecnologia são bem-vindos, jargão de marketing não.

### 2.2 Regras de escrita

- Português do Brasil, com acentuação correta.
- Frases de até 20 palavras; parágrafos de 1 a 3 frases.
- Voz ativa: "construo", "pesquiso", "implemento".
- Usar "você" para o visitante.
- Evitar "nós" quando o trabalho for individual.
- Sem emojis, sem exclamações, sem CAPS LOCK para ênfase.
- Sem superlativos vazios: "incrível", "revolucionário", "melhor do mercado".
- Termos técnicos em inglês quando forem padrão da área (`front-end`, `deploy`, `design system`).
- Números em algarismos: "6 projetos", "3 anos".
- Datas no formato "2024–2026" ou "desde 2024".
- Títulos em sentence case: "Projetos em destaque", não "Projetos Em Destaque".

### 2.3 Palavras e expressões proibidas

- "Apaixonado por tecnologia"
- "Soluções inovadoras"
- "Transformação digital"
- "Rockstar", "ninja", "unicórnio"
- "Disruptivo"
- "Sinergia"
- "Proatividade"
- "Fazendo a diferença"
- "Do zero ao deploy" (clichê)
- "Bem-vindo ao meu portfólio"

### 2.4 Fórmula para resumo de projeto

> O que é + para quem + qual é o diferencial ou resultado.

Exemplo:

> Dashboard leve que reúne vendas e tráfego em uma única tela, com leitura rápida e carregamento abaixo de 1 segundo.

Máximo de 160 caracteres. Sem adjetivos genéricos.

---

## 3. Sistema de placeholders

### 3.1 Convenção

- Placeholders visíveis usam colchetes e maiúsculas: `[SEU NOME]`.
- Todo placeholder recebe um comentário acima:

```html
<!-- TODO(content): substituir pelo nome real -->
<h1 class="hero__title">[SEU NOME]</h1>
```

- Não usar lorem ipsum.
- Não inventar biografia, empresas, métricas ou resultados.
- Se um dado não existir, manter o placeholder e registrar a pendência.
- Antes do deploy, buscar por `TODO(content)` e por `[` no HTML.

### 3.2 Inventário de placeholders

| Placeholder | Onde aparece | Exemplo |
|---|---|---|
| `[SEU NOME]` | Header, hero, Sobre, footer, SEO | Ana Silva |
| `[SEU CARGO]` | Hero, Sobre, SEO | Desenvolvedora Front-end |
| `[CIDADE]` | Hero, Sobre, Contato | São Paulo |
| `[PAÍS]` | Hero, Contato | Brasil |
| `[ÁREA]` | Hero, SEO | interfaces web |
| `[FOCO]` | Hero (metadados) | Front-end e design de interfaces |
| `[DISPONIBILIDADE]` | Hero, Contato | Disponível para novos projetos |
| `[TIPO DE OPORTUNIDADE]` | Contato, SEO | freelance e posições full-time |
| `[PRAZO]` | Contato | 2 dias úteis |
| `[EMAIL]` | Contato, footer | contato@seudominio.com |
| `[USUARIO]` | GitHub, canonical, links | seuusuario |
| `[GITHUB]` | Contato, footer | https://github.com/seuusuario |
| `[LINKEDIN]` | Contato, footer | https://www.linkedin.com/in/seuusuario/ |
| `[REDE EXTRA]` | Contato, footer (opcional) | https://behance.net/seuusuario |
| `[ANOS DE EXPERIÊNCIA]` | Hero, Sobre | 5 |
| `[INTERESSE PESSOAL]` | Sobre | fotografia e corrida |
| `[FORMAÇÃO]` | Sobre (trajetória) | Bacharelado em Ciência da Computação |
| `[EMPRESA]` | Sobre (trajetória) | Nome da empresa |
| `[CARGO ANTERIOR]` | Sobre (trajetória) | Desenvolvedor Front-end |
| `[PERÍODO]` | Sobre (trajetória) | 2022–2024 |
| `[SUA FOTO]` | Sobre | `assets/img/profile.webp` |
| `[DESCRIÇÃO DA FOTO]` | Sobre (alt) | Ana em uma mesa de trabalho, São Paulo, 2026 |
| `[PROJETO 01]` … `[PROJETO 06]` | Projetos | Nome do projeto |
| `[RESUMO]` | Cards | Texto de até 160 caracteres |
| `[URL DO PROJETO]` | Cards | https://github.com/... |
| `[TECNOLOGIA]` | Tags dos cards | HTML, CSS, JavaScript |
| `[ANO]` | Metadados dos cards | 2026 |
| `[ALT DA IMAGEM]` | Cards | Tela do projeto com... |

---

## 4. Copy por página

Os textos abaixo são **rascunhos aprovados como direção**, não conteúdo final. Substitua os placeholders e ajuste o que não corresponde à sua trajetória.

### 4.1 Home — `index.html`

#### Header

- Nome/logo: `[SEU NOME]`
- Links: Início, Projetos, Sobre, Contato

#### Hero

- Label de status: `Disponível para novos projetos`
- Título (`h1`): `[SEU NOME]`
- Linha de cargo: `[SEU CARGO] — [FOCO]`
- Lead:

> Construo produtos digitais com clareza, performance e atenção ao detalhe. Do problema à interface final, sem ruído.

- Bio:

> Trabalho com [ÁREA] há [ANOS DE EXPERIÊNCIA] anos. Atualmente em [CIDADE], aberto a [TIPO DE OPORTUNIDADE].

- CTA primário: `Ver projetos`
- CTA secundário: `Falar comigo`
- Metadados:
  - `Base — [CIDADE], [PAÍS]`
  - `Foco — [FOCO]`
  - `Status — [DISPONIBILIDADE]`

#### Projetos em destaque

- Label: `Selecionados`
- Título (`h2`): `Projetos em destaque`
- Lead:

> Uma amostra do que construí recentemente. Cada card abre o projeto em uma nova aba.

- Ação: `Ver todos os 6 projetos`

#### Sobre (resumo)

- Label: `Sobre`
- Título (`h2`): `Design e código, na mesma mesa.`
- Parágrafo 1:

> Sou [SEU NOME], [SEU CARGO] em [CIDADE]. Trabalho na interseção entre interface, produto e código, com foco em soluções simples para problemas complexos.

- Parágrafo 2:

> Prefiro entregas pequenas e bem acabadas a grandes lançamentos sem cuidado. Meu processo começa entendendo o contexto e termina com algo que as pessoas conseguem usar sem instruções.

- Ação: `Ler mais sobre mim`

#### Faixa de contato

- Label: `Contato`
- Título (`h2`): `Vamos conversar.`
- Texto:

> Aberto a [TIPO DE OPORTUNIDADE]. Respondo em até [PRAZO].

- E-mail: `[EMAIL]`
- Botão: `Copiar e-mail`
- Redes: GitHub, LinkedIn
- Ação secundária: `Página de contato`

#### Footer

- Nome: `[SEU NOME]`
- Tagline: `[SEU CARGO] em [CIDADE].`
- Navegação: Início, Projetos, Sobre, Contato
- Redes: GitHub, LinkedIn
- Copyright: `© 2026 [SEU NOME]. Todos os direitos reservados.`
- Nota: `Feito com HTML, CSS e JavaScript.`

---

### 4.2 Projetos — `projetos.html`

- Label: `Portfólio`
- Título (`h1`): `Projetos`
- Lead:

> Seleção de 6 projetos de [ÁREA]. Filtre por categoria ou abra um card para ver o trabalho completo.

- Filtros: `Todos`, `Front-end`, `Back-end`, `Full-stack`, `Design`
- Contador: `6 projetos`
- Estado vazio:
  - Título: `Nenhum projeto nesta categoria ainda.`
  - Texto: `Novos trabalhos entram aqui conforme ficam prontos.`
  - Ação: `Ver todos`
- CTA final:
  - Título (`h2`): `Tem algo parecido em mente?`
  - Texto: `Me conte o contexto e o que você precisa resolver.`
  - Ação: `Vamos conversar`

---

### 4.3 Sobre — `sobre.html`

- Label: `Sobre`
- Título (`h1`): `Sobre`
- Lead:

> Sou [SEU NOME], [SEU CARGO] em [CIDADE]. Trabalho entre interface, produto e código, com foco em clareza e detalhe.

#### Bio

Parágrafo 1:

> Comecei em [ÁREA] em [ANO DE INÍCIO] e desde então venho construindo [TIPO DE PRODUTO] para [PÚBLICO]. Gosto de problemas que exigem entender o contexto antes de escrever a primeira linha de código.

Parágrafo 2:

> Meu trabalho combina design de interface com desenvolvimento front-end: prototipo, testo e implemento. Prefiro entregas pequenas, bem acabadas, a grandes lançamentos sem cuidado.

Parágrafo 3:

> Fora do trabalho, [INTERESSE PESSOAL]. Hoje estou em [CIDADE] e disponível para [TIPO DE OPORTUNIDADE].

#### Foto

- Arquivo: `assets/img/profile.webp`
- Proporção: 4:5
- Legenda: `[SEU NOME], [CIDADE], 2026.`
- Alt: `[DESCRIÇÃO DA FOTO]`

#### Stack

- Linguagens: `[TECNOLOGIA]`, `[TECNOLOGIA]`, `[TECNOLOGIA]`
- Frameworks e bibliotecas: `[TECNOLOGIA]`, `[TECNOLOGIA]`, `[TECNOLOGIA]`
- Ferramentas: `[TECNOLOGIA]`, `[TECNOLOGIA]`, `[TECNOLOGIA]`

#### Trajetória

Formato de cada item:

- `[PERÍODO]` — `[CARGO ANTERIOR]` — `[EMPRESA]`
- Uma linha de contexto: `[O QUE VOCÊ FEZ E QUAL FOI O RESULTADO]`

Sugestão de 3 itens:

1. `[PERÍODO]` — `[CARGO ANTERIOR]` — `[EMPRESA]`
2. `[PERÍODO]` — `[CARGO ANTERIOR]` — `[EMPRESA]`
3. `[PERÍODO]` — `[FORMAÇÃO]` — `[INSTITUIÇÃO]`

#### Como eu trabalho

1. **Clareza antes de código.**
   Entender o problema e o contexto evita retrabalho e interfaces desnecessárias.
2. **Performance é parte do design.**
   Uma página bonita que demora para abrir não é uma boa experiência.
3. **O detalhe é o produto.**
   Estados de foco, textos de erro e espaçamento consistente separam o funcional do memorável.

#### CTA

- Título (`h2`): `Vamos trabalhar juntos.`
- Texto: `Estou disponível para [TIPO DE OPORTUNIDADE].`
- Ação: `Entrar em contato`

---

### 4.4 Contato — `contato.html`

- Label: `Contato`
- Título (`h1`): `Vamos conversar.`
- Lead:

> A forma mais rápida de falar comigo é por e-mail. Respondo em até [PRAZO].

- E-mail: `[EMAIL]`
- Botão: `Copiar e-mail`
- Feedback de sucesso: `Copiado!`
- Feedback de erro: `Não foi possível copiar. Selecione o e-mail acima.`

#### Redes

- GitHub — `[GITHUB]`
- LinkedIn — `[LINKEDIN]`
- Rede extra (opcional) — `[REDE EXTRA]`

#### Detalhes

| Rótulo | Valor |
|---|---|
| Disponível para | `[TIPO DE OPORTUNIDADE]` |
| Base | `[CIDADE], [PAÍS]` |
| Fuso horário | `[FUSO]` |
| Prazo de resposta | `[PRAZO]` |

#### Nota

> Sem formulário: e-mail direto funciona melhor para mim.

---

## 5. Modelo de dados dos projetos

Cada card é um `<article>` com um único link externo.

| Campo | Obrigatório | Regra |
|---|---|---|
| Título | Sim | 3–6 palavras, sentence case |
| Ano | Sim | 4 dígitos |
| Categoria | Sim | `frontend`, `backend`, `fullstack` ou `design` |
| Resumo | Sim | 100–160 caracteres, 2 linhas visuais |
| Tags | Sim | 2–4 tecnologias, cada uma com até 14 caracteres |
| URL | Sim | `https://`, abre em nova aba |
| Imagem | Sim | WebP 1600×1000, 16:10, ≤ 200 KB |
| Alt | Sim | Até 125 caracteres, descreve a tela |
| Destaque | Sim | `true` para exatamente 3 projetos na home |

### 5.1 Estrutura HTML de referência

```html
<article class="project-card" data-category="frontend" data-project="projeto-01">
  <a
    class="project-card__link"
    href="[URL DO PROJETO]"
    target="_blank"
    rel="noopener noreferrer"
  >
    <figure class="project-card__media">
      <img
        src="assets/img/projects/projeto-01.webp"
        alt="[ALT DA IMAGEM]"
        width="1600"
        height="1000"
        loading="lazy"
        decoding="async"
      />
    </figure>
    <div class="project-card__body">
      <p class="project-card__meta">
        <span>[ANO]</span>
        <span aria-hidden="true">·</span>
        <span>Front-end</span>
      </p>
      <h3 class="project-card__title">[PROJETO 01]</h3>
      <p class="project-card__summary">[RESUMO]</p>
      <ul class="tag-list" aria-label="Tecnologias">
        <li class="tag">[TECNOLOGIA]</li>
        <li class="tag">[TECNOLOGIA]</li>
      </ul>
      <span class="project-card__cta">
        Ver projeto
        <span class="sr-only">(abre em nova aba)</span>
      </span>
    </div>
  </a>
</article>
```

### 5.2 Exemplo preenchido — substituir

> **Exemplo apenas para calibrar o tom. Não publicar sem revisar.**

- **Título:** Painel de métricas para equipes pequenas
- **Ano:** 2025
- **Categoria:** Front-end
- **Resumo:** Dashboard leve que reúne vendas e tráfego em uma única tela, com leitura rápida e carregamento abaixo de 1 segundo.
- **Tags:** HTML, CSS, JavaScript
- **URL:** `https://github.com/[USUARIO]/[REPO]`
- **Alt:** Tela do painel com gráfico de vendas e cartões de indicadores sobre fundo claro.

### 5.3 Slots dos 6 projetos

| Slot | Categoria | Destaque na home | Observação |
|---|---|---|---|
| Projeto 01 | Front-end | Sim | Primeiro card da home e da grade |
| Projeto 02 | Full-stack | Sim | Segundo card da home e da grade |
| Projeto 03 | Design | Sim | Terceiro card da home e da grade |
| Projeto 04 | Front-end | Não | Apenas na página de projetos |
| Projeto 05 | Back-end | Não | Apenas na página de projetos |
| Projeto 06 | Full-stack | Não | Apenas na página de projetos |

Regras:

- Cada categoria deve ter pelo menos 1 projeto.
- A ordem da grade é a ordem dos slots.
- Se um projeto for removido, redistribuir categorias e destaques.

---

## 6. Microcopy

| Contexto | Texto |
|---|---|
| Navegação — Início | `Início` |
| Navegação — Projetos | `Projetos` |
| Navegação — Sobre | `Sobre` |
| Navegação — Contato | `Contato` |
| CTA principal do hero | `Ver projetos` |
| CTA secundário do hero | `Falar comigo` |
| Ver todos | `Ver todos os 6 projetos` |
| Sobre | `Ler mais sobre mim` |
| Contato na home | `Página de contato` |
| Filtro padrão | `Todos` |
| Contador | `6 projetos` / `1 projeto` / `Nenhum projeto` |
| Estado vazio | `Nenhum projeto nesta categoria ainda.` |
| Ação do estado vazio | `Ver todos` |
| Copiar | `Copiar e-mail` |
| Cópia concluída | `Copiado!` |
| Erro de cópia | `Não foi possível copiar. Selecione o e-mail acima.` |
| Menu fechado | `Abrir menu` |
| Menu aberto | `Fechar menu` |
| Link externo | `(abre em nova aba)` — sempre em `.sr-only` |
| Voltar ao topo | `Voltar ao topo` |
| Skip link | `Pular para o conteúdo` |
| Status disponível | `Disponível para novos projetos` |
| Status indisponível | `Sem disponibilidade no momento` |
| CTA final de projetos | `Vamos conversar` |
| CTA final de sobre | `Entrar em contato` |
| Nota de contato | `Sem formulário: e-mail direto funciona melhor para mim.` |

Regras:

- Botões no imperativo.
- Sem "clique aqui".
- Sem ponto final em botões e labels curtos.
- Plural correto no contador.
- Feedback de cópia sempre em região `aria-live="polite"`.

---

## 7. SEO — metadados

| Página | Title | Description | Canonical |
|---|---|---|---|
| Home | `[SEU NOME] — [SEU CARGO]` | Portfólio de [SEU NOME], [SEU CARGO] em [CIDADE]. Projetos de [ÁREA] com foco em clareza, performance e detalhe. | `https://[USUARIO].github.io/` |
| Projetos | `Projetos — [SEU NOME]` | Seleção de projetos de [ÁREA] por [SEU NOME]. Explore por categoria e abra cada trabalho. | `https://[USUARIO].github.io/projetos.html` |
| Sobre | `Sobre — [SEU NOME]` | Conheça a trajetória, as habilidades e os princípios de trabalho de [SEU NOME], [SEU CARGO]. | `https://[USUARIO].github.io/sobre.html` |
| Contato | `Contato — [SEU NOME]` | Fale com [SEU NOME] por e-mail ou redes sociais. Disponível para [TIPO DE OPORTUNIDADE]. | `https://[USUARIO].github.io/contato.html` |

Open Graph:

```html
<meta property="og:type" content="website" />
<meta property="og:locale" content="pt_BR" />
<meta property="og:site_name" content="[SEU NOME]" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:url" content="https://[USUARIO].github.io/..." />
<meta name="twitter:card" content="summary" />
```

Regras:

- Title com 50–60 caracteres.
- Description com 140–160 caracteres.
- Sem `og:image` nesta versão.
- Não repetir a mesma description em páginas diferentes.
- Não usar palavras-chave em listas; escrever para pessoas.

---

## 8. Textos alternativos

### 8.1 Regras

- Descrever o conteúdo e a função da imagem, não a aparência.
- Não começar com "imagem de" ou "foto de".
- Limite de 125 caracteres.
- Se a imagem for decorativa, usar `alt=""`.
- Se o card já tem título, o alt complementa com o que a tela mostra.
- Não repetir o título do projeto no alt.
- Não usar "screenshot" em inglês; preferir "tela".

### 8.2 Exemplos

| Imagem | Alt |
|---|---|
| Card de dashboard | `Tela do painel com gráfico de vendas e cartões de indicadores.` |
| Card de site institucional | `Página inicial com navegação horizontal e destaque tipográfico.` |
| Retrato no Sobre | `[SEU NOME] em uma mesa de trabalho, [CIDADE], 2026.` |
| Ícone de seta | `alt=""` (decorativo) |

---

## 9. Checklist de conteúdo antes do deploy

- [ ] Nome, cargo, cidade e país reais.
- [ ] E-mail real e testado.
- [ ] GitHub e LinkedIn corretos.
- [ ] Bio revisada e sem placeholders.
- [ ] Foto real em 4:5, P&B, WebP.
- [ ] 6 projetos com título, resumo, ano, categoria, tags e URL válida.
- [ ] 3 projetos marcados como destaque.
- [ ] Imagens dos projetos em 16:10, WebP, ≤ 200 KB.
- [ ] Alt text em todas as imagens informativas.
- [ ] Todos os placeholders `[ ]` substituídos.
- [ ] Todos os `TODO(content)` removidos.
- [ ] Títulos e descriptions de SEO preenchidos.
- [ ] Canonical apontando para a URL real.
- [ ] Copyright com o ano correto.
- [ ] Revisão ortográfica e de concordância.
- [ ] Nenhum lorem ipsum.
- [ ] Nenhuma métrica ou resultado inventado.

---

## 10. Pendências para o usuário

Itens que dependem de informação real e devem ser resolvidos antes da implementação final:

1. Nome completo e como quer ser chamado no site.
2. Cargo e especialidade.
3. Cidade, país e fuso horário.
4. E-mail público.
5. GitHub, LinkedIn e rede extra (opcional).
6. Bio curta e bio longa.
7. Foto de perfil.
8. 6 projetos: nome, resumo, ano, categoria, tags, URL e imagem.
9. Trajetória profissional e formação.
10. Stack por categoria.
11. Disponibilidade e prazo de resposta.
12. Usuário do GitHub para a URL final.
