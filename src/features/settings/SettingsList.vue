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
  <v-list width="100%">
    <v-list-item prepend-icon="mdi-brightness-6" title="Dark Mode">
      <template v-slot:append>
        <v-switch
          color="primary"
          hide-details
          :model-value="settingsStore.settings.themeMode === 'dark'"
          @click="toggleThemeMode"
        />
      </template>
    </v-list-item>
  </v-list>
</template>
