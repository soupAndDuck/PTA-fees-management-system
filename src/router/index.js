import { createRouter, createWebHashHistory } from 'vue-router';

import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import ManageAccount from '../views/ManageAccount.vue';
import DashBoard from '../components/DashBoard.vue';
import ClerkAccount from '../views/ClerkAccount.vue';
import AddStudents from '../views/AddStudents.vue';
import SignUp from '../views/SignUp.vue';


const routes = [
    {
        path: '/:index?',
        name: 'Home',
        component: DashBoard,
        children: [
            {path: '', component: Home},
            { path: '/:index?/manage-account', component: ManageAccount },
            { path: '/:index?/create-clerk', component: ClerkAccount },
            { path: '/:index?/add-student', component: AddStudents }
        ] 
    },
    {
        path: '/login-adlie',
        name: 'Login',
        component: Login
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router