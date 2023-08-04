import { createRouter, createWebHashHistory } from 'vue-router';

import AccountSettings from '../views/AccountSettings.vue';
import CreateClerkAccount from '../views/CreateClerkAccount.vue';
import CreateStudentAccount from '../views/CreateStudentAccount.vue';
import Login from '../views/Login.vue';
import DashBoard from '../components/DashBoard.vue';


const routes = [
    {
        path: '/:index?',
        name: 'Dash Board',
        component: DashBoard,
        children: [
            { path: '', component: AccountSettings },
            { path: 'create-clerk', component: CreateClerkAccount },
            { path: 'create-stud', component: CreateStudentAccount }
        ] 
    },
    {
        path: '/login-adlie',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router