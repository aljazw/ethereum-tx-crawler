import {
  RouteReuseStrategy,
  DetachedRouteHandle,
  ActivatedRouteSnapshot
} from '@angular/router';

export class DashboardReuseStrategy implements RouteReuseStrategy {
  private storedRoute?: DetachedRouteHandle;

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return route.routeConfig?.path === '';
  }

  store(
    route: ActivatedRouteSnapshot,
    handle: DetachedRouteHandle
  ): void {
    this.storedRoute = handle;
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return route.routeConfig?.path === '' && !!this.storedRoute;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return this.storedRoute ?? null;
  }

  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return future.routeConfig === curr.routeConfig;
  }
}
