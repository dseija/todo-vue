<script setup lang="ts">
import { useTheme } from 'vuetify';
import { saveSettings } from './settingsHelpers';
import { updateSettings } from './settingsService';
import useSettingsStore from './settingsStore';

const theme = useTheme();
const settingsStore = useSettingsStore();

const toggleThemeMode = () => {
  settingsStore.toggleThemeMode();
  theme.global.name.value = settingsStore.settings.themeMode;
  const saved = saveSettings(settingsStore.settings);
  if (saved) updateSettings(settingsStore.settings);
};
</script>

<template>
  <ul>
    <li>
      <span>Dark Mode: </span>
      <input
        type="checkbox"
        :checked="settingsStore.settings.themeMode === 'dark'"
        @change="toggleThemeMode"
      />
    </li>
  </ul>
</template>
