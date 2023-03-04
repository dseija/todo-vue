import { getAppCookies } from '../../common/utils';
import { UserData } from './userTypes';

export const setUserSessionCookies = (user: UserData) => {
  const $cookies = getAppCookies();
  const expires = '30d';
  $cookies.set('sessionToken', user.token, expires);
  $cookies.set('userFirstname', user.firstname, expires);
  $cookies.set('userUsername', user.username, expires);
};

export const getUserSessionToken = () => getAppCookies().get('sessionToken');

export const getUserSessionDisplayName = () => {
  const $cookies = getAppCookies();
  return $cookies.get('userFirstname') || $cookies.get('userUsername');
};

export const clearUserCookies = () => {
  const $cookies = getAppCookies();
  $cookies.remove('sessionToken');
  $cookies.remove('userFirstname');
  $cookies.remove('userUsername');
};
