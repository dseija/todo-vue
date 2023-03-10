import { mande } from 'mande';
import { API_BASE_URL } from '../../common/constants';
import { getUserSessionToken } from './userHelpers';
import { UserData } from './userTypes';

type UserResponse = [any, UserData?];

export const userLogin = async (
  loginData: Partial<UserData>
): Promise<UserResponse> => {
  try {
    const user = await mande(`${API_BASE_URL}/auth/login`).post(loginData);
    return [null, user as UserData];
  } catch (err) {
    return [err];
  }
};

export const userRegister = async (
  registerData: Partial<UserData>
): Promise<UserResponse> => {
  try {
    const user = await mande(`${API_BASE_URL}/auth/register`).post(
      registerData
    );
    return [null, user as UserData];
  } catch (err) {
    return [err];
  }
};

export const getUserData = async (): Promise<UserResponse> => {
  try {
    const user = await mande(`${API_BASE_URL}/user/whoami`, {
      headers: { Authorization: `Bearer ${getUserSessionToken()}` },
    }).get();
    return [null, user as UserData];
  } catch (err) {
    return [err];
  }
};
