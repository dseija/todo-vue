import { defineStore } from 'pinia';
import { loadSavedSettings } from './settingsHelpers';
import { SettingsState } from './settingsTypes';

const useSettingsStore = defineStore('settings', {
  state: () => ({
    settings: loadSavedSettings(),
  }),
  actions: {
    setAllSettings(settings: SettingsState) {
      this.settings = { ...settings };
    },
    toggleThemeMode() {
      this.settings.themeMode =
        this.settings.themeMode === 'dark' ? 'light' : 'dark';
    },
  },
});

export default useSettingsStore;
