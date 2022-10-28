import { defineStore } from 'pinia';

interface IState {
  drawer: boolean;
}

export const useComponentStore = defineStore('component', {
  state: (): IState => {
    return {
      drawer: false,
    };
  },

  actions: {
    toggleLeftDrawer(): boolean {
      return !this.$state.drawer;
    },
  },
});
