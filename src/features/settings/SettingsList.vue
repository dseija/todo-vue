<script setup lang="ts">
import { saveSettings } from './settingsHelpers';
import { updateSettings } from './settingsService';
import useSettingsStore from './settingsStore';

const settingsStore = useSettingsStore();

const toggleThemeMode = () => {
  settingsStore.toggleThemeMode();
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
