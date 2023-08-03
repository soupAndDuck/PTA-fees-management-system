import { createRouter, createWebHashHistory } from 'vue-router';

import AccountSettings from '../views/AccountSettings.vue';
import CreateClerkAccount from '../views/CreateClerkAccount.vue';
import CreateStudentAccount from '../views/CreateStudentAccount.vue';


const routes = [
    {
        path: '/:index?',
        name: 'Account Settings',
        component: AccountSettings,
    },
    {
        path: '/create-clerk',
        name: 'Create Clerk Account',
        component: CreateClerkAccount
    },
    {
        path: '/create-stud',
        name: 'Create Student Account',
        component: CreateStudentAccount
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router