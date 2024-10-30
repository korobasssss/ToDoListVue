import { createRouter, createWebHistory } from "vue-router";
import {CategoryPage, TaskPage} from "../../../pages";
import { EPaths } from "../../enums";

const routes = [
    {
        path: EPaths.MAIN,
        redirect: EPaths.TASKS
    },
    {
        path: EPaths.TASKS,
        component: TaskPage
    },
    {
        path: EPaths.CATEGORIES,
        component: CategoryPage
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes
})