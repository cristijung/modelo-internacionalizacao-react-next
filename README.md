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

- *Formato de Data e Hora:* A maneira como datas e horários são exibidos varia em cada país. Por exemplo, $13/08/2025$ no Brasil, $08/13/2025$ nos EUA e $2025/08/13$ em alguns países da Ásia.
- *Moeda:* Símbolos de moeda (R$, €, $ ), formatação de números (uso de vírgula ou ponto para separar decimais) e o nome da moeda.
- *Números:* O uso de vírgulas e pontos para separar milhares e decimais. Por exemplo, $1.234,56$ no Brasil e $1,234.56$ nos EUA.
- *Direção do Texto:* Idiomas como o árabe e o hebraico são escritos da direita para a esquerda (RTL - Right-to-Left), ao contrário do português e do inglês (LTR - Left-to-Right).
- *Unidades de Medida:* A conversão entre sistemas métricos e imperiais (quilômetros vs. milhas, quilos vs. libras).
- *Ordenação de Listas:* A ordem alfabética pode variar conforme o idioma, pois a existência e a posição de caracteres especiais (como vogais acentuadas) diferem.

### Como o i18n Funciona na Prática
O i18n geralmente envolve duas partes principais:
- *Extração de Strings:* O desenvolvedor identifica e isola todas as strings (textos) que precisam ser traduzidas. Em vez de codificar, por exemplo, <h1>Olá Mundo</h1>, ele usaria algo como <h1>{t('hello_world')}</h1>, onde t é uma função de tradução e hello_world é uma chave única.
- *Arquivos de Tradução:* Esses arquivos, frequentemente em formatos como JSON, YAML ou Gettext, contêm as chaves e os valores correspondentes para cada idioma.

#### Exemplos de arquivos de tradução (pt-BR.json):

![Exemplo de Json](/public/json.png)

#### JSON

{
  "hello_world": "Olá Mundo",
  "welcome_message": "Bem-vindo ao nosso site!",
  "currency_symbol": "R$"
}
Exemplo de um arquivo de tradução (en-US.json):
JSON

{
  "hello_world": "Hello World",
  "welcome_message": "Welcome to our website!",
  "currency_symbol": "$"
}
<br/>
Quando o usuário seleciona um idioma, o aplicativo carrega o arquivo de tradução correspondente e exibe os textos adequados, adaptando também a formatação de data, moeda e outros elementos culturais.

## As vantagens e benefícios do i18n
- *Alcance Global:* Permite que seu produto seja acessível a um público muito maior, rompendo barreiras de idioma.
- *Manutenção Simplificada:* As alterações nos textos ou a adição de novos idiomas podem ser feitas nos arquivos de tradução, sem a necessidade de modificar o código-fonte do programa.
- *Experiência do Usuário Aprimorada:* Oferecer uma interface no idioma nativo do usuário torna a experiência mais intuitiva e agradável.
- *Otimização para Busca:* Conteúdos traduzidos podem ser indexados por motores de busca em diferentes países, melhorando o SEO internacional.

<hr/>
# Passos para criar e implementar o i18n em projeto React/Nnext

1. Escolha uma biblioteca: Selecione uma biblioteca de internacionalização, como i18next ou react-intl. A i18next é uma das mais populares e versáteis, com integrações robustas para React.
2. Instale as dependências: Instale a biblioteca escolhida e seus plugins necessários. Para o i18next, isso inclui `i18next`, `react-i18next` e um carregador de arquivos (ex: `i18next-http-backend`).
3. Crie arquivos de tradução: Organize os textos em arquivos JSON, um para cada idioma (`en.json, pt-BR.json`), dentro de um diretório como public/locales.
4. Configure a biblioteca: Crie um arquivo de configuração (`i18n.js` ou similar) para inicializar a biblioteca, especificando os idiomas suportados, o idioma padrão e o caminho para os arquivos de tradução.
5. Integre com o Next.js: No Next.js, é importante configurar o i18n para funcionar com o roteamento. Isso pode ser feito no arquivo de configuração do Next.js (next.config.js), especificando os locales e o defaultLocale.
6. Adicione o provedor no _app.js: Envolva seu componente App com o provedor da biblioteca (I18nextProvider ou similar) para que toda a aplicação tenha acesso às traduções.
7. Use os hooks de tradução: Nos seus componentes, importe e use o hook de tradução (`useTranslation no react-i18next`) para acessar a função de tradução (`t`) e o idioma atual.
8. Crie um seletor de idioma: Implemente um componente simples que permita ao usuário alternar entre os idiomas disponíveis, chamando a função i18n.`changeLanguage()` fornecida pela biblioteca.
9. Adicione o suporte a SEO (opcional): Para o Next.js, use o Head e as tags link com hreflang para informar aos motores de busca sobre as versões de idioma da sua página.