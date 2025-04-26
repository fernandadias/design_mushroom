# Design Mushroom - SaaS de Agentes de IA

Este projeto é um SaaS de agentes de IA para design, desenvolvido com Next.js e HeroUI, mantendo um tema escuro com a cor de destaque #C6F700.

## Estrutura do Projeto

- `/src/components` - Componentes reutilizáveis
  - `/layout` - Componentes de layout (Sidebar, Header, Breadcrumb)
  - `/ui` - Componentes de UI (Button, Card, Table, SearchBar)
  - `/auth` - Componentes de autenticação
  - `/agents` - Componentes relacionados aos agentes
  - `/history` - Componentes relacionados ao histórico
  - `/plans` - Componentes relacionados aos planos
- `/src/app` - Páginas da aplicação
  - `/dashboard` - Página principal após login
  - `/agents` - Listagem de agentes
  - `/agents/[id]` - Página de agente específico
  - `/history` - Histórico de uso
  - `/plans` - Planos disponíveis
  - `/auth` - Página de login/cadastro
- `/src/hooks` - Hooks personalizados
- `/public/images` - Imagens e recursos estáticos

## Funcionalidades Implementadas

1. **Tema escuro com cor de destaque #C6F700**
2. **Sidebar responsiva**
   - Logo "Design Mushroom"
   - Seções: Agentes, Histórico, Planos
   - Footer com informações do usuário e consumo
3. **Header com barra de pesquisa estilo spotlight**
4. **Interface de agente estilo ChatGPT**
5. **Área de login/cadastro**
6. **Breadcrumbs e títulos em todas as views**
7. **Design totalmente responsivo**

## Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Acesse a aplicação em [http://localhost:3000](http://localhost:3000)

## Navegação

1. A aplicação inicia na página de login/cadastro
2. Após "entrar", você será redirecionado para o dashboard
3. Navegue entre as seções usando a sidebar

## Observações

Este projeto implementa apenas a estrutura de front-end conforme solicitado. Para um ambiente de produção completo, seria necessário implementar:

- Autenticação real
- Backend para gerenciar os agentes de IA
- Armazenamento de dados
- Integração com serviços de IA
