import { ElementRef, DynamicComponentLoader, AttributeMetadata, Directive, Attribute } from '@angular/core';
import { Router, RouterOutlet, ComponentInstruction } from '@angular/router-deprecated';
import { AuthService as UserService } from './service/loginService';

@Directive({
  selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes: Array;
  private parentRouter: Router;
  private userService: UserService;

  constructor(
    _elementRef: ElementRef, _loader: DynamicComponentLoader,
    _parentRouter: Router, @Attribute('name') nameAttr: string,
    private userService: UserService
  ) {
    super(_elementRef, _loader, _parentRouter, nameAttr);

    this.router = _parentRouter;
    this.publicRoutes = [
      '', 'login', 'signup'
    ];
  }

  activate(instruction: ComponentInstruction) {
    if (this._canActivate(instruction.urlPath)) {
      return super.activate(instruction);
    }

    this.router.navigate(['Login']);
  }

  _canActivate(url) {
    return this.publicRoutes.indexOf(url) !== -1
      || this.userService.isLoggedIn();
  }
}
