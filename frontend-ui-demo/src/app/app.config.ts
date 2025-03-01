import { ApplicationConfig, provideZoneChangeDetection, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { authKeyInterceptor } from './interceptors/auth-key.interceptor';
import { ConfigService } from '../assets/ConfigService.service';
import { APP_INITIALIZER } from '@angular/core';
import { Observable } from "rxjs";

// export function initConfig(config: AppConfig) {
//   return () => config.load();
// }

export function initConfigService(configService: ConfigService): () => Observable<any> {
  return () => configService.loadConfig();
}

// export const provideConfigService = (): Provider => {
//   const provider: (Provider) =
//   {
//     provide: APP_INITIALIZER,
//     deps: [ConfigService],
//     useFactory: initConfigService,
//     multi: true
//   };
//   return provider;
// };

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), 
    provideHttpClient(withInterceptorsFromDi()), 
      {
        provide: HTTP_INTERCEPTORS,
        useClass: authKeyInterceptor,
        multi: true
      },

      // ConfigService, {
      //   provide: APP_INITIALIZER,
      //   deps: [ConfigService],
      //   useFactory: initConfigService,
      //   multi: true
      // }
    ]
};
