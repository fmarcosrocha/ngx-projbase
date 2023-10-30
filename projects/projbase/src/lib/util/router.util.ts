import {ActivatedRouteSnapshot, Router} from '@angular/router';

export class RouterUtil {

    public static goToUrl(router: Router, statePath: string, stateData?: any) {
        router.navigateByUrl(statePath, { state: stateData  });
    }

    public static getState(router: Router): any {
        return router.getCurrentNavigation()?.extras.state;
    }

    public static getUrl(route: ActivatedRouteSnapshot): string {
        return '/' + route.pathFromRoot.filter(u => u.url.length > 0).map(u => u.url).join('/');
    }

    public static getPath(route: ActivatedRouteSnapshot) {
        if (route.routeConfig !== null && route.routeConfig.path !== null) {
            return route?.routeConfig?.path;
        }
        return '';
    }

    public static emVisualizacao(route: ActivatedRouteSnapshot): boolean {
        return RouterUtil.getUrl(route)?.toLowerCase().includes('visualizar');
    }

    public static emEdicao(route: ActivatedRouteSnapshot): boolean {
        return RouterUtil.getUrl(route)?.toLowerCase().includes('editar');
    }

    private static checkStatePath(statePath: string  | ActivatedRouteSnapshot): string {
        if (statePath instanceof ActivatedRouteSnapshot) {
            return this.getUrl(statePath);
        }
        return statePath;
    }
}
