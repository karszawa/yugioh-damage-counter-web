import Vue from 'vue';
import VueRouter, { Route } from 'vue-router';

declare module "*.vue" {
  export interface Vue {
    $router: VueRouter;
    $route: Route;
  }

  export default Vue;
}
