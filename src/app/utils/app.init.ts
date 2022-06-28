import {KeycloakService} from 'keycloak-angular'
import {environment} from '../../environments/environment'
export function initializeKeycloak(keyckloak: KeycloakService): () => Promise<any> {
  return (): Promise<any>=>{
    return new Promise<void>(async  (resolve,reject) =>{
      try {
        await keyckloak.init(
          {
            config :{
              url: environment.keycloak.issuer,
              realm: environment.keycloak.realm,
              clientId:environment.keycloak.clientId
            },
            loadUserProfileAtStartUp:true,
            initOptions:{
              onLoad:"check-sso",
              silentCheckSsoRedirectUri: window.origin + '/assets/silent-check-sso.html',
              redirectUri:"http://localhost:4200",
              checkLoginIframe: false,

            },
            bearerExcludedUrls: ['/assets']
          }
        );
        resolve()
      }
      catch (error){
        return error
      }
    })
  }
}
