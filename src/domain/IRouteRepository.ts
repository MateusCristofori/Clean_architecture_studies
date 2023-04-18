import { Route } from "./route.entity";

// * Interface responsável pela inversão de dependência. Também presente na arquitetura hexagonal.
export interface IRouteRepository {
  // ? Seria interessante passar um "RouteDTO" como argumento desse método ou não seria necessário? Não é mais recomendável trabalhar com representações de entidades do que com entidades em si?
  insert(route: Route): Promise<void>;
}
