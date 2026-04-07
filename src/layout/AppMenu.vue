<script setup>
import { ref, computed } from 'vue';

import AppMenuItem from './AppMenuItem.vue';
import { useAuthStore } from '@/modules/core/stores/useAuthStore';
const authStore = useAuthStore();

const model = ref([
    {
        label: '',
        items: [
            {
                label: 'REGISTER', to: '', permissions: [''],
                items: [
                    {
                        label: 'REGISTER', icon: '', to: '',
                        items: [
                            { label: 'Dashboard', icon: '', to: '/register-machine/dashboard' },
                        ]
                    },
                ]
            },
            {
                label: 'ESI MONACO', to: '', permissions: [''],
                items: [
                    {
                        label: 'HOLD LOT MANAGEMENT', icon: '', to: '',
                        items: [
                            { label: 'Dashboard', icon: '', to: '/hold-lot-management/dashboard' },
                            { label: 'Hold Lot History', icon: '', to: '/hold-lot-management/history' },
                        ]
                    },
                ]
            },
            {
                label: 'QTI QXM', to: '', permissions: [''],
                items: [
                    {
                        label: 'PANEL MONITORING', icon: '', to: '',
                        items: [
                            { label: 'Dashboard', icon: '', to: '/panel-yield-monitoring/dashboard' },
                        ]
                    }
                ]
            },
            {
                label: 'PM SYSTEM', to: '', permissions: [''],
                items: [
                    {
                        label: 'EQUIPMENT MONITORING', icon: '', to: '',
                        items: [
                            { label: 'PM Monitoring', icon: '', to: '/equipment-monitoring/pmmonitoring' },
                            { label: 'JAM Monitor', icon: '', to: '/equipment-monitoring/jammonitor' },
                            { label: 'MTBA/MTBF Report', icon: '', to: '/equipment-monitoring/mtbarecord' },
                        ]
                    },
                    {
                        label: 'HCC CONTROL PAGE', icon: '', to: '',
                        items: [
                            { label: 'HCC Dashboard', icon: '', to: '/hcc-control-page/hcc-dashboard', permissions: ['T_HRC_RHI_R'] },
                            { label: 'HCC Request', icon: '', to: '/hcc-control-page/hcc-request', permissions: ['T_HRC_RHI_R'] },
                            { label: 'Socket Close Rate', icon: '', to: '/hcc-control-page/socket-close-rate' },
                            { label: 'Socket Close Rate History', icon: '', to: '/hcc-control-page/socket-close-rate-history' },
                        ]
                    },
                ]
            },
        ]
    },
]);

const filteredMenuItems = computed(() => {

    var filteredMenu = model.value.map(menu => {
        if (menu.items.length > 0) {
            return {
                ...menu,
                items: menu.items.filter(item => item.permissions.some(per => authStore.permissions.includes(per)))
            };
        } else {
            return {
                ...menu,
                label: '',
                items: []
            };
        }

    });
    return filteredMenu;
});

</script>

<template>

    <div class="flex justify-center items-center">
        <span class="text-2xl font-bold">ATV TEST AUTOMATION</span>
    </div>
    <ul class="layout-menu">
        <!-- Remove permission filter -->
        <!-- <template v-for="(item, i) in filteredMenuItems" :key="item"> -->
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator && item.items.length > 0" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
