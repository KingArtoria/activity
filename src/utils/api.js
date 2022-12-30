import request from './request';
import qs from 'qs'
// ? 获取抽奖次数以及以获得的奖励
export const getLottery = (data) => {
  return request({
    url: '/Activity/member_activity_info',
    method: 'post',
    data: qs.stringify(data)
  });
}
// ? 抽奖
export const lottery = (data) => {
  return request({
    url: '/Activity/draw',
    method: 'post',
    data: qs.stringify(data)
  });
}
// ? 活动奖励
export const getReward = (data) => {
  return request({
    url: '/Activity/activity_info',
    method: 'post',
    data: qs.stringify(data)
  });
}
// ? 红包雨奖励
export const getRedRainReward = (data) => {
  return request({
    url: '/Activity/rain',
    method: 'post',
    data: qs.stringify(data)
  });
}