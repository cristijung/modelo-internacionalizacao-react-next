// este arquivo é um "Provider" para a internacionalização (i18n) no projeto. 
// Em termos simples, ele cria um contexto global que permite que todos os componentes 
// dentro dele tenham acesso fácil às funções de tradução.

'use client';

import { I18nextProvider } from 'react-i18next'; 
import i18n from '../../../i18n'; // importação a nossa configuração do projeto

export function I18nProvider({ children }: { children: React.ReactNode }) {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}

// "export function I18nProvider(...):' Define e exporta um novo componente React chamado I18nProvider. 
// Este é o componente "envelope" que usamos para envolver o restante da sua aplicação. 
// Ele recebe a propriedade children, que representa todos os outros componentes que você colocar dentro dele.

// '<I18nextProvider i18n={i18n}>:' Aqui está a parte mais importante. 
// Ele renderiza o componente I18nextProvider importado. 
// A propriedade i18n={i18n} passa a sua instância de i18n como o valor do contexto.

// {children}: Dentro do I18nextProvider, nós renderizamos a propriedade children. 
// Isso significa que qualquer componente que colocamos dentro do <I18nProvider> terá acesso a toda a funcionalidade do i18n.