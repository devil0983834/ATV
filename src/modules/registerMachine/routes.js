import AppLayout from '@/layout/AppLayout.vue';

export const registerMachineRoutes = [
    {
        path: '/register-machine',
        component: AppLayout,
        name: 'RegisterMachinePage',
        meta: {
            title: 'Register Machine',
        },
        children: [
            {
                path: '/register-machine/dashboard',
                component: () => import('@/modules/registerMachine/pages/registerPage.vue'),
                name: 'Register Machine Dashboard',
                meta: {
                    title: 'Register Machine Dashboard',
                    requiresAuth: true,
                    requiredPermissions: ['T_HRC_RHI_R'],
                }
            },
        ]
    }
];