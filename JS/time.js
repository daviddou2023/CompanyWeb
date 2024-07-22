// 获取当前时间并实时更新
function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  document.getElementById('current-time').textContent = timeString;
  setTimeout(updateTime, 1000); // 每隔1秒更新一次
}

// 格式化时间，确保两位数显示
function formatTime(time) {
  return (time < 10 ? "0" + time : time);
}

// 页面加载完成后开始更新时间
document.addEventListener('DOMContentLoaded', function() {
  updateTime(); // 初始调用一次更新时间
});
