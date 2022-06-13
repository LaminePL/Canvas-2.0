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
              realm:'canvas-bis', //CANVAS //canvas-bis
              clientId:environment.keycloak.clientId
            },
            loadUserProfileAtStartUp:true,
            initOptions:{
              onLoad:"login-required",
              redirectUri:"http://localhost:4200",
              checkLoginIframe: true
            },
            bearerExcludedUrls: []
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
