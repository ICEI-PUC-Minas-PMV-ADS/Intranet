# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Um trabalho de pesquisa e diálogo entre os membros do grupo foi feito semanalmente para entender as principais dores que os colaboradores de diversas empresas sofrem no seu dia a dia. Dessa forma, com os dados apresentados, pudemos identificar os padrões existentes em diferentes segmentos do mercado corporativo para poder solucioná-los de modo mais assertivo.

## Personas

As personas estudadas durante o processo de levantamento dos dados para entendimento do problema são apresentadas abaixo.


Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Matheus Silva | Receber notificações do quadro de avisos assim que entrar na página          | Nunca perder nenhum aviso importante sobre o setor que trabalho na empresa               |
|Matheus Silva      | Conseguir solicitar um chamado de TI                 | Ter suporte para solucionar um problema |
|Ana Marcela | Saber quando é o aniversário dos meus colegas de trabalho | Poder parabenizá-los |
|Ana Marcela | Receber as notícias mais recentes da empresa, em relação à mudanças de regras, benefícios e atualizações de cargos e funcionários |Não perder as notícias e acontecimentos da empresa |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site irá oferecer uma aba descrita “Institucional”, nela conterá sub abas categorizadas com informações de cada aplicação.| ALTA | 
|RF-002| Ao abrir o site será solicitado um login de acesso. O funcionário deverá inserir um nome de usuário, que pode ser criado pelo próprio ou disponibilizado pela empresa; uma senha também será solicitada e esta será criada ou pré-estabelecida ao colaborador. Os administradores do site terão acesso a mais funcionalidades.| ALTA |
|RF-003| Na página principal serão exibidos os aniversariantes daquele determinado mês ou semana.| BAIXA |
|RF-004| Além do disposto no RF-03, haverá um portal de notícias relacionadas a empresa e aos colaboradores, atualizadas esporadicamente.| MÉDIA |
|RF-005| O site deve oferecer funcionalidade para abertura de chamadas de TI. |ALTA|
|RF-006| Um quadro de avisos será exibido a cada funcionário, contendo informações sobre seu setor e da empresa.| MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser compatível com os principais navegadores (Microsoft Edge, Firefox, Google Chrome). | ALTA | 
|RNF-002| O site deve ter uma paleta de cores de referência igual a (https://colorhunt.co/palette/222831393e4600adb5eeee). | MÉDIA |
|RNF-003| O site deverá ser responsivo para visualização em dispositivos móveis.| ALTA |
|RNF-004| A intranet terá o código aberto, possibilitando que qualquer empresa possa utilizá-lo. | BAIXA |
|RNF-005| HTML com boas práticas de acessibilidade. | MÉDIA |
|RNF-006| O sistema será escrito utilizando as linguagens HTML5, CSS3, JavaScript e frameworks como Bootstrap. | ALTA |
|RNF-007| O sistema utilizará o local storage do browser para puxar dados necessários. | MÉDIA |
|RNF-008| O sistema deverá seguir a Lei Geral de Proteção de Dados Pessoais (LGPD). | ALTA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deve estar finalizado e não extrapolar a data de 26/06/2022. |
|02| A intranet deve funcionar apenas na rede da empresa. |
|03| O sistema deve se restringir às tecnologias básicas do Web Front-end |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
