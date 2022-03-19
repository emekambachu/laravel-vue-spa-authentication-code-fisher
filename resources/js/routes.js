import { createWebHistory, createRouter } from "vue-router";
import Home from './components/HomeComponent';
import About from './components/AboutComponent';

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home,
    },
    {
        path: '/about',
        name: "About",
        component: About,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
