import VueRouter, { Route } from 'vue-router';

declare module vue {
  export class Vue {
    $router: VueRouter;
    $route: Route;
  }
}
