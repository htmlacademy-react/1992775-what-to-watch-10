export enum AppRoute {
  Login = '/login',
  List = '/mylist',
  Film = '/films/:id',
  Main = '/',
  Review = '/films/:id/review',
  Player = '/player/:id',
  Error = '/error',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
