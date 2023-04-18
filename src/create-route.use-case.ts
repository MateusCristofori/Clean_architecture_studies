// * Essa camada representa a camada que envolve a camada "Entity". É a camada "use case".

import { Coordenates, Route } from "./route.entity";

// * A camada "entity" representa as regras de negócio da aplicação de uma forma mais "pura", enquanto a camada de "use case" é responsável por coordenar essas regras de negócio vindas das entidades.
// * Essa classe irá realizar operações em cima das entidades!
export class CreateRouteUseCase {
  // * Método responsável pelo comportamento de criar uma nova rota.
  // * Não devemos retornar entidades na camada de use-case. Cada camada conhece a apenas a camada seguinte a ela. Ou seja, "use-case" conhece apenas "entity", "controllers" (web) conhece apenas "use-case" e assim por diante.
  // * Caso seja retornado a entidade na camada de use-case, irá acontecer uma relação entrelaçamento entre camadas. Ou seja, camadas mais internas acabam sendo "conhecidas" por camadas mais externas onde não deveria ter relação umas com as outras.
  // * Caso a entidade seja retornada nesse método, a camada de "controllers" que for se utilizar desse use-case, terá, não apenas o conhecimento da camada de use-case, mas também, o conhecimento da camada de entidades. Essa dependência entre camadas deve ser apenas entre uma camada qualquer em conjunto com a camada seguinte.
  execute(input: CreateRouteInput) {
    const route = new Route(input);
    // * Retorno do objeto de props e não da entidade propriamente dita.
    return route.toJson();
  }
}

type CreateRouteInput = {
  title: string;
  startPosition: Coordenates;
  endPosition: Coordenates;
  points?: [];
};

type CreateRouteOutput = {
  title: string;
  startPosition: Coordenates;
  endPosition: Coordenates;
  points?: [];
};
