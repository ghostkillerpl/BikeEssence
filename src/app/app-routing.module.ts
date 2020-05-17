import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'setting', loadChildren: './setting/setting.module#SettingPageModule' },
  { path: 'customer', loadChildren: './customer/customer.module#CustomerPageModule' },
  { path: 'addcustomer', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'addcustomer/:id/:name/:desc', loadChildren: './addcustomer/addcustomer.module#AddcustomerPageModule' },
  { path: 'showcustomer/:id/:name/:desc', loadChildren: './showcustomer/showcustomer.module#ShowcustomerPageModule' },
  { path: 'updatecustomer/:id/:name/:desc', loadChildren: './updatecustomer/updatecustomer.module#UpdatecustomerPageModule' },
  { path: 'home1', loadChildren: './home1/home1.module#Home1PageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' },
  { path: 'regulamin', loadChildren: './regulamin/regulamin.module#RegulaminPageModule' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
