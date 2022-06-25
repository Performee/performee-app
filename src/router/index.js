import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import GoalsView from "@/views/goals/GoalsView.vue";
import ObjectivesView from "@/views/objectives/ObjectivesView.vue";
import PlansView from "@/views/plans/PlansView.vue";
import AddGoal from "@/views/goals/AddGoal.vue";
import EditGoal from "@/views/goals/EditGoal.vue";
import AddPlan from "@/views/plans/AddPlan.vue";
import EditPlan from "@/views/plans/EditPlan.vue";
import AddObjective from "@/views/objectives/AddObjective.vue";
import EditObjective from "@/views/objectives/EditObjective.vue";

const routes = [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/goals',
        name: 'GoalsView',
        component: GoalsView
    },
    {
        path: '/goals/add',
        name: 'AddGoal',
        component: AddGoal
    },
    {
        path: '/goals/:id',
        name: 'EditGoal',
        component: EditGoal,
        props: true
    },
    {
        path: '/objectives',
        name: 'ObjectivesView',
        component: ObjectivesView
    },
    {
        path: '/objectives/add',
        name: 'AddObjective',
        component: AddObjective
    },
    {
        path: '/objectives/:id',
        name: 'EditObjective',
        component: EditObjective,
        props: true
    },
    {
        path: '/plans',
        name: 'PlansView',
        component: PlansView
    },
    {
        path: '/plans/add',
        name: 'AddPlan',
        component: AddPlan
    },
    {
        path: '/plans/:id',
        name: 'EditPlan',
        component: EditPlan,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
