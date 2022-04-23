import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
import Login from './../pages/login.vue';
import Dashboard from './../pages/dashboard.vue';
import Contacts from './../pages/contacts.vue';
import Groups from './../pages/groups.vue';
import Campaigns from './../pages/campaigns.vue';
import Messaging from './../pages/messaging.vue';
import Settings from './../pages/settings.vue';
import AutoResponder  from './../pages/messaging.vue';
import LoginLayout  from './../layouts/default.vue';
import DashboardLayout  from '../layouts/dashboardLayout.vue';
import NotFound from '../pages/notFound.vue';


const routes = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [

        {
            path: '/',
            component: Login,
            name: 'login',
            meta: {
                requiresVisitor: true,
            }              
        },
        {
            path: '/dashboard',
            component: Dashboard,
            name: 'dashboard',
            meta: {
                layout: DashboardLayout,
                requiresAuth: true,
            }
        },
        {
            path: '/contacts',
            component: Contacts,
            name: 'contacts',
            meta: {
                layout: DashboardLayout,
                requiresAuth: true,
            }
        },
        {
            path: '/groups',
            component: Groups,
            name: 'groups',
            meta: {
                layout: DashboardLayout,
                requiresAuth: true,
            }
        },
        {
            path: '/compaigns',
            component: Campaigns,
            name: 'campaigns',
            meta: {
                layout: DashboardLayout,
                requiresAuth: true,
            }
        },
        {
            path: '/auto-responder',
            component: AutoResponder,
            name: 'auto-responder',
            meta: {
                layout: DashboardLayout,
                requiresAuth: true,
            }
        },
        {
            path: '/messaging',
            component: Messaging,
            name: 'messaging',
            meta: {
                layout: DashboardLayout,
                requiresAuth: true,
            }
        },
        {
            path: '/settings',
            component: Settings,
            name: 'settings',
            meta: {
                layout: DashboardLayout,
                requiresAuth: true, 
            }
        },
        {
            path :'*',
            redirect:'/'
            // component:NotFound
        }
        
    ]
});

export default routes;







