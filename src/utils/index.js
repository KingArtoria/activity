// ? 时间格式化X天X小时X分钟X秒
export const formatTime = (time) => {
  let day = Math.floor(time / 86400);
  let hour = Math.floor((time % 86400) / 3600);
  let minute = Math.floor(((time % 86400) % 3600) / 60);
  let second = Math.floor(((time % 86400) % 3600) % 60);
  return [day, hour, minute, second]
}