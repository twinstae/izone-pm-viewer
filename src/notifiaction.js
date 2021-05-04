export function requestNotificationPermission(){
  if (window.Notification) {
    Notification.requestPermission();
  }
}

export function notify(mail){
  if (Notification.permission !== 'granted'){
    alert('알람 설정이 되어 있지 않습니다.');
    return null;
  }

  const notification = new Notification(`${mail.member} ${mail.subject}`, {
    icon: `http://127.0.0.1:5000/img/profile/latest/${mail.member}.jpg`,
    body: `[${mail.time}] ${mail.preview}`
  });

  notification.onclick = function () {
    window.open(`http://127.0.0.1:5000/?dateString=${time_to_dateStr(mail.time)}&nowPage=1&tag=&search=&showList=false&now_pm=${mail.id}`);
  }
}

