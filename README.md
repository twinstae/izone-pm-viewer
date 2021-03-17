[IZPM-Backup 백업 툴](https://github.com/mdsnins/IZPM-Backup)과 호환되는 뷰어입니다.


> 주의 : 태그 및 좋아요 저장 기능은 아직 없다.
> 주의 : 데이터가 저장되지 않습니다.
> 주의 : 서버를 껏다 켜면 모든 데이터가 초기화 됩니다.

## 사용방법

1. [IZ-PM-Viewer-배포.zip 다운 받기](https://github.com/twinstae/izone-pm-viewer/raw/main/IZ-PM-Viewer-%EB%B0%B0%ED%8F%AC.zip)
압축 파일을 받아서 img와 mail이 있는 output 폴더에 풀어줍니다.

![](https://github.com/twinstae/izone-pm-viewer/raw/main/%EC%98%88%EC%8B%9C.png)

2. pm_list.js (최신 버전에서는 pm.js) 파일을 열어서, let pm_list = 을 지워버리고 pm_list.json 으로 이름을 바꿔서 저장합니다. (-> 자동화 예정)

예시
```[{"id": "m21279", "member": "미야와키 사쿠라", "time": "2021/03/14 22:38", "subject": "。", "preview": "이런저런 프메 내용"},{"id": "m21280", "member": "월클토미", "time": "2021/03/14 22:35", "subject": "😌", "preview": "이런저런 프메 내용"},{"id": "m21278", "member": "권은비", "time": "2021/03/14 22:20", "subject": "🥲", "preview": "이런저런 프메 내용"}, ... (이런 식으로 계속 되야 함), ...(정말 딱 이것들만 있어야 한다.) ]```

3. member_name.json 파일을 열어서 내가 설정한 별명들을 한 글자도 틀리지 않게 넣어줍니다. (-> 자동화 예정)
4. 이제 서버 시작하기.bat 파일을 실행하면 뷰어가 열릴 겁니다. 아마도...

> 아직 테스트 중 입니다. 아직 다른 컴퓨터에서 돌려본 적은 없어서 잘 될지 모릅니다.
> 에러 나면 알려주세요.

### 발견된 에러 목록
-[x] 날짜 시간 태그를 선택하면 멈추는 증상. -> (클릭 안 되게 함)
-[x] 파파고에 html 태그가 뜨는 에러. -> (태그 지워버림)

![](https://raw.githubusercontent.com/twinstae/izone-pm-viewer/main/%EA%B2%80%EC%83%89.png)
