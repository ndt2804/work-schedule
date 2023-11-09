<script lang="ts">
import TheSubMenu from './TheSubMenu.vue';

export default {
    components: {
        TheSubMenu
    },
    props: {
        model: {
            type: Array,
            default: () => ([])
        }
    },
    emits: ['menuitem-click'],
    methods: {
        onMenuItemClick(event: any) {
            this.$emit('menuitem-click', event);
        },
    }
};
</script>

<template>
    <div class="layout-menu-container">
        <AppSubmenu :items="model" class="layout-menu" :root="true" @menuitem-click="onMenuItemClick" />
    </div>
</template>

<style scoped></style>