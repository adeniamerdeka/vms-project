import { createRouter, createWebHistory } from "vue-router";


import LoginView from '@/components/LoginView.vue'
import Register from '@/components/Register.vue';
import LoginView2 from '@/components/LoginView2.vue';
import Register2 from '@/components/Register2.vue';

const routes = [
    { path: '/login', component: LoginView },
    { path: '/login2', component: LoginView2},
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/register2",
        name: "Register2",
        component: Register2,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
