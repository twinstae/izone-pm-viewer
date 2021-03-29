[IZPM-Backup 백업 툴](https://github.com/mdsnins/IZPM-Backup)과 호환되는 뷰어입니다.

기술 스택 : FastAPI, Svelte, TailwindCss, Fuse

## 구현된 기능목록
- 날짜로 찾기
- 날짜별 메일 개수 표시
- 검색 기능
- 중요 표시 (기존 앱에서 이전해오는 기능은 개발 중)
- 태그 달기, 수정
- 카드 뷰, 리스트 뷰
- Mobile 반응형 UI
- Desktop <-> Mobile 태그 동기화. 서버에 저장
- 다크 모드
- 자동 업데이트 (예정)
- 백업 툴 내장 (예정)

## 사용방법

1. [IZ-PM-Viewer-배포.zip 다운 받기](https://github.com/twinstae/izone-pm-viewer/raw/main/IZ-PM-Viewer-%EB%B0%B0%ED%8F%AC.zip)
압축 파일을 받아서 img와 mail이 있는 output 폴더에 풀어줍니다.

신형 서버도 받으려면 [여기](https://github.com/twinstae/izone-pm-viewer/raw/main/%EC%84%9C%EB%B2%84-%EB%B0%B0%ED%8F%AC%EC%9A%A9.zip) 신 서버는 절대 output 폴더에 풀면 안 되고. 그 상위 폴더에 풀어줘야합니다.

- 최상위 폴더
  - FastAPI 설치.bat
  - 서버 파일들
  - 신형 서버 시작하기.bat
  - output
    - build
    - img
    - mail
    - 서버 시작하기.bat

### output 폴더 사진
![](https://github.com/twinstae/izone-pm-viewer/raw/main/%EC%98%88%EC%8B%9C.png)

> 이때 새 폴더가 만들어지면 안 됩니다.
> IZ-PM-Viewer-배포 폴더가 새로 생겼다면,
> 폴더에 있는 파일을 모두 output으로 옮겨주세요.

2. 초기 설정하기.bat 파일을 실행하면 필요한 pm_list.json과 member_name.json을 알아서 생성해줍니다.

3. 이제 서버 시작하기.bat 파일을 실행하면 뷰어가 열릴 겁니다. 아마도...

> 아직 테스트 중 입니다.
> 에러 나면 알려주세요. F12 누르면 뜨는 개발자 창에서 Console 부분과, 검은 서버 cmd 창 스크린샷 찍어서 보여주시면 됩니다.

![](https://raw.githubusercontent.com/twinstae/izone-pm-viewer/main/%EA%B2%80%EC%83%89.png)

## FAQ
### 0. FileNotFoundError: No such file or directory: 'pm.js'
output 폴더에 새 폴더가 생기지 않았는지 확인합니다. 모든 파일은 output folder에 있어야 합니다. IZ-PM-Viewer-배포 같은 폴더가 새로 생기면 안 됩니다.
폴더가 생겼다면 안에 있는 파일을 모두 output으로 꺼내주세요.

### 1. localhost 연결 거부라고 떠요 ㅠㅠ
검은 서버 창을 확인합니다.
서버가 정상적으로 실행 중이면 다음과 같이 떠야 합니다.
![](https://github.com/twinstae/izone-pm-viewer/raw/main/%EC%A0%95%EC%83%81%20%EC%9E%91%EB%8F%99%20%EC%A4%91%EC%9D%B8%20%EC%84%9C%EB%B2%84.png)

#### 다음과 같이 Python만 덩그러니 뜨는 것도 에러입니다.
![](https://github.com/twinstae/izone-pm-viewer/raw/main/%ED%8C%8C%EC%9D%B4%EC%8D%AC%20%EC%97%90%EB%9F%AC.png)
파이썬이 설치되어 있지 않거나, 환경변수가 설정되어 있지 않아서 생기는 에러입니다. 컴퓨터가 파이썬을 찾아야 실행할 수 있습니다.
인터넷에 파이썬 환경 변수 설정을 검색해봅시다.

### 2. 무지개빛 화면만 보여요.

F12를 누르면 개발자 도구 창이 뜹니다. Console 탭을 찾아서 클릭하고 에러가 뜨는 게 없는지 확인합니다.

![](https://github.com/twinstae/izone-pm-viewer/raw/main/%EC%BD%98%EC%86%94.png)

#### Failed to load resource: the server responded with a sataus of 404 :8000/pm_list.json
서버가 pm_list.json을 찾지 못해서 생기는 에러입니다.
0번 확인합니다.

output 폴더에 pm_list.json이 잘 있는지 확인합니다. 서버 시작하기.bat과 같은 폴더에 있어야 합니다.

###  SyntaxError: Unexpected token ( in JSON at position 0
유니코드 인코딩에서 나는 에러입니다. 대부분 해결되었지만... 혹시라도 에러가 난다면 
json load 실패, 1차 시도, 2차 시도 하는 식으로 에러 로그가 남으니. 스샷을 찍어서 문의 주세요.

### TypeError
Cannot read property 'add' of undefined
Cannot read property 'value' of undefined

이런 에러가 뜬다면 앞에서 다른 에러가 있었을 확률이 높습니다. 보통 멤버 이름 사전(member_name.json)이 깨진 경우입니다.

정상적인 사전은 다음처럼 생겼습니다.

```{"장원영": 0, "チャン・ウォニョン": 0, "미야와키 사쿠라": 1, "宮脇咲 良": 1, "宮脇咲良": 1, "조유리": 2, "チョ・ユリ": 2, "최예나": 3, "チェ・イェナ": 3, "안유진": 4, "야부키 나코": 5, "矢吹奈子": 5, "권은비": 6, "クォン・ウンビ": 6, "강혜원": 7, "カン・へウォン": 7, "혼다 히토미": 8, "本田仁美": 8, "김채원": 9, "キム・チェウォン": 9, "김민주": 10, "キム・ミンジュ": 10, "이채연": 11, "イ・チェヨン": 11, "운영팀": 12, "월클토미": 8, "깃털채연": 11, "오리예나": 3, "광배": 7, "김민주 앤젤": 10, "쌈무": 9}```

```\uc7a5``` 같은 건 유니코드 인코딩이라 괜찮습니다.

```"\uc7a5": null``` 같이 숫자가 없고null, undefined, None 같은 단어가 우르르 뜬다면, 사전이 깨진 겁니다.
[기본 사전 파일](https://github.com/twinstae/izone-pm-viewer/blob/main/assets/member_name.json) 을 다운 받아서. 직접 설정한 멤버들의 별명을 하나하나 입력해주면 됩니다.
