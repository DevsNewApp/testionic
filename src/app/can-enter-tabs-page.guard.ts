import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanEnterTabsPageGuard implements CanActivate { 
  constructor(
       private _angularFireAuth: AngularFireAuth,
       private _router: Router
  ){

  }
 
  canActivate(
    activateRouteSnapshot: ActivatedRouteSnapshot,
    stateSnapshot: RouterStateSnapshot)  {  
    return this._angularFireAuth.authState.pipe(
         map((auth)=> {
           if(!auth){
            this._router.navigate(["/login"]);
            return false;
           } else {
            return true;
           }
         })
    );
  }
  
}
