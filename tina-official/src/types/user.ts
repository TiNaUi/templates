/**
 * 用户信息
 */

export interface UserModel {
  profile: {
    nickname: string;
    avatar: string;
    gender: number;
    country: string;
    province: string;
    city: string;
    id: number;
    appid: string;
    openid: string;
  };
  creator: any | null
  id: number
  pid: number
  vip_level: number
  score: number
}