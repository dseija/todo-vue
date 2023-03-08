import { reactive } from 'vue';

export const layoutState = reactive({
  sidebarOpen: true,
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  },
});
