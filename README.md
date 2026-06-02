# OrangeHRM Automation Testing

Projeto de automação de testes desenvolvido utilizando Cypress e JavaScript com arquitetura Page Objects.

## Objetivo

Automatizar cenários críticos da aplicação OrangeHRM, garantindo a validação de funcionalidades relacionadas à autenticação e atualização de dados do usuário.

## Tecnologias Utilizadas

- Cypress
- JavaScript
- Git
- GitHub
- Postman
- Page Objects Pattern

## Funcionalidades Automatizadas

### Login

- Login com credenciais válidas
- Login com credenciais inválidas
- Validação de mensagens de erro

### My Info

- Atualização de dados pessoais do usuário
- Validação do salvamento das informações

## Estrutura do Projeto

```text
cypress
├── e2e
├── pages
├── selectors
├── fixtures
└── support
```

## Boas Práticas Aplicadas

- Arquitetura Page Objects
- Separação de responsabilidades
- Reutilização de código
- Versionamento com Git
- Seletores organizados por funcionalidade

## Como Executar

### Instalar dependências

```bash
npm install
```

### Executar Cypress

```bash
npx cypress open
```

### Executar em modo headless

```bash
npx cypress run
```

## Autor

Bruna Oliveira Lino

LinkedIn:
www.linkedin.com/in/bruna-oliveira-lino

GitHub:
github.com/BrunaOliveiraLino

