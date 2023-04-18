// * Um dos motivos para a camada de use-cases não ser considerada um camada de apenas regras de negócio, ou uma camada poluída, é justamente o fato de provavelmente dependermos de tecnologias e frameworks.
// * Como, por exemplo, criar uma instância de uma entidade e precisar salvá-la num banco de dados. Faremos isso dentro da camada de use-cases. Mas, apesar de ser feita nessa camada, a mesma não deverá saber como funciona a forma de persistência de dados e suas regras!
// *  Devem ser serviços completamente independentes e isolados um do outro.
// * Para manter esse isolamento, usa-se "repositórios" onde iremos delegar a responsabilidade de persistência de dados.
// * A camada de repositórios no padrão de Clean Architecture lidar apenas, e diretamente, com a própria entidade! Um repositório lida apenas com UMA entidade e somente ela!

import { IRouteRepository } from "../domain/IRouteRepository";
import { Route } from "../domain/route.entity";

// * A camada de use-cases irá receber os repositórios pode meio de atributo de referência. Porém, esse atributo de referência será do tipo da interface que o repositório implementa!
export class RouteRepository implements IRouteRepository {
  public itens = [];
  async insert(route: Route): Promise<void> {
    this.itens.push(route);
  }
}
