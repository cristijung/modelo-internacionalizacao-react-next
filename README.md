# Repositório modelo para Internacionalização
## React 19 & Next.Js 15

### Comandos instaladores:
- `npx create-next-app@latest`
- `npm install i18next react-i18next i18next-browser-languagedetector`
- `npm install i18next-http-backend`

### Documentação base
- (https://nextjs.org/docs/pages/guides/internationalization)
- (https://nextjs.org/blog/next-15)
- (https://www.i18next.com/)
- Não é doc, mas é um artigo atual (2025): (https://dev.to/antoniojuniordev/como-implementar-internacionalizacao-i18n-em-um-projeto-nextjs-sem-alterar-a-url-8kb)

![Tradutor](/public/tradutor.png)

<hr/>

# i18n

O i18n, abreviação de internacionalização, é um processo de desenvolvimento de software que permite que um produto (como um aplicativo ou site) seja facilmente adaptado para diferentes idiomas e culturas, sem precisar de alterações no código-fonte. A sigla "i18n" é formada pela letra inicial 'i', seguida por 18 letras entre ela e a letra final 'n'.

## O que é?
### Principais Conceitos do i18n
O i18n envolve a separação de todo o conteúdo traduzível do código do aplicativo. Em vez de ter frases como "Bem-vindo" diretamente no código, usamos um identificador, como `welcome_message`, que aponta para o texto real em um arquivo de tradução.

#### Este processo não se limita apenas à tradução de texto. Ele também abrange outros aspectos culturais, como:

- **Formato de Data e Hora:** A maneira como datas e horários são exibidos varia em cada país. Por exemplo, $13/08/2025$ no Brasil, $08/13/2025$ nos EUA e $2025/08/13$ em alguns países da Ásia.
- **Moeda:** Símbolos de moeda (R$, €, $ ), formatação de números (uso de vírgula ou ponto para separar decimais) e o nome da moeda.
- **Números:** O uso de vírgulas e pontos para separar milhares e decimais. Por exemplo, $1.234,56$ no Brasil e $1,234.56$ nos EUA.
- **Direção do Texto:** Idiomas como o árabe e o hebraico são escritos da direita para a esquerda (RTL - Right-to-Left), ao contrário do português e do inglês (LTR - Left-to-Right).
- **Unidades de Medida:** A conversão entre sistemas métricos e imperiais (quilômetros vs. milhas, quilos vs. libras).
- **Ordenação de Listas:** A ordem alfabética pode variar conforme o idioma, pois a existência e a posição de caracteres especiais (como vogais acentuadas) diferem.

