import { Routes } from '@angular/router';
import { NewsList } from './news/list/list';
import { NewsView } from './news/view/view';
import { NewsEdit } from './news/edit/edit';
import { Home } from './pages/home/home';
import { Login } from './auth/login/login'
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'login', component: Login },
    {
        path: 'news',
        component: NewsList,
        canActivate: [authGuard]
    },
    {
        path: 'news/:id',
        component: NewsView,
        canActivate: [authGuard]
    },
    {
        path: 'news/:id/edit',
        component: NewsEdit,
        canActivate: [authGuard]
    }
];