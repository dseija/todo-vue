import { inject } from 'vue';
import { VueCookies } from 'vue-cookies';
import { $cookies } from '../../main';

export const useCookies = () => inject<VueCookies>('$cookies') as VueCookies;

export const getAppCookies = () => $cookies;
