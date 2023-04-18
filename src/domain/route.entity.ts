// * Esse arquivo representa a camada mais ao centro do anel concêntrico, ou seja, é parte que irá concentrar as regras de negócio da aplicação. Essa camada é a "Entity".
// * As regras de negócio deve ser agnóstico a framework e tecnologias!

export type RouteProps = {
  title: string;
  startPosition: Coordenates;
  endPosition: Coordenates;
  points?: Coordenates[];
};

export type Coordenates = {
  lat: number;
  long: number;
};

export class Route {
  // * Primeira regra da classe. Criação de uma rota. Decisões de armazenameto não importam diretamente para a entidade. Entidade deve ser totalmente acoplada.
  // * A lib que deve ser independente a regra de negócio e não o contrário. Com isso, poderemos ter uma maior flexibilidade de uso de diferentes tecnologias sem afetar as regras de negócio. Os serviços devem ser desacoplados.
  public props: Required<RouteProps>;
  constructor(props: RouteProps) {
    this.props = {
      ...props,
      points: props.points || [],
    };
  }

  // * Esse método representa uma intenção de mudança de algo que faz parte da entidade! Não é um método "anêmico", mas representa um comportamento.
  // * Devemos separar as alterações de cada atributo para métodos diferentes! Sempre respeitar a responsabilidade única.
  // * Todos os métodos de comportamento, no final das contas, são métodos setters. Mas, eles executam a regra de negócio da entidade.
  // * A junção de todos os métodos de comportamento formam as regras de negócio da entidade.
  updateTitle(title: string) {
    this.props.title = title;
  }

  // ? Esse método precisa ser necessariamente privado, ou temos a opção de não criá-lo para evitar falta de expressividade da entidade?
  private set title(title: string) {
    this.props.title = title;
  }

  // * Esse método será responsável por retornar o objeto que representa todas as propriedades da entidade "Route". Retorna o objeto "RouteProps". Com isso, podemos manipular todas as informações que a entidade de Rotas possui, sem a camada a cima de use cases saber exatamente como a entidade funciona.
  // * Aparentemente podemos pensar que esse método serve como forma de abstração entre camadas. Para que camadas mais externas conheçam apenas suas camadas "filhas" (que são envolvidas por diretamente por elas).
  toJson() {
    return this.props;
  }
}

const rota = new Route({
  title: "Rota",
  startPosition: { lat: 15, long: 15 },
  endPosition: { lat: 20, long: 20 },
  points: [
    { lat: 20, long: 20 },
    { lat: 20, long: 20 },
  ],
});
// * Com o frameworks, temos o conceito de "entidades anêmicas". Que é sempre usar métodos de acesso para tomar ações dentro da classe, não deixar as regras de negócio de forma clara na entidade.
// * Todas as mudanças na entidade devem ser feitas via métodos que representem comportamentos de mudança. Isso evita a "anemia" ou, "falta de expressividade", da entidade. Ao invés de usar um "setTitle()", usa-se o "updateTitle()". Esses métodos de comportamento representam uma *intenção* de mudança.
