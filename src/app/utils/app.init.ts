import {KeycloakService, KeycloakOptions} from 'keycloak-angular'

export function initializeKeycloak(keyckloak: KeycloakService): () => Promise<any> {
  return (): Promise<any>=>{
    return new Promise<void>(async  (resolve,reject) =>{
      try {
        await keyckloak.init(
          {
            config :{
              url:"http://localhost:8080"+"/auth",
              realm:"CANVAS", //CANVAS //canvas-bis
              clientId:"canvas-app"
            },
            loadUserProfileAtStartUp:true,
            initOptions:{
              onLoad:"login-required",
              checkLoginIframe: true
            },
            bearerExcludedUrls: []
          }
        );
        resolve()
      }
      catch (error){
        alert('errror')
      }
    })
  }
}
