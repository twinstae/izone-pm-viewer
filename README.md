[IZPM-Backup 백업 툴](https://github.com/mdsnins/IZPM-Backup)과 호환되는 뷰어입니다.


## 뷰어 상담소 카카오톡
[프메 백업 뷰어 상담소 카카오톡](https://open.kakao.com/o/gPbArZ4c) 막히시면 물어보세요.

기술 스택 : FastAPI, httpx, pytest, Svelte, Tailwind CSS, Fuse(검색), cypress

## 구현된 기능목록
- 날짜로 찾기
- 날짜별 메일 개수 표시
- 검색 기능
- 중요 표시
- 태그 달기, 수정
- 카드 뷰, 리스트 뷰
- Mobile 반응형 UI
- Desktop <-> Mobile 태그 동기화. 서버에 저장
- 다크 모드
- 단축키
- 프로필 사진 수정
- 오래된 메일부터 보기
- 앨범

## 설치

### 0. IZPM 백업 툴로 백업하셨나요?

아이즈원 프라이빗 메일 서버가 종료되었기 때문에, 백업을 하지 않으셨으면 뷰어 사용이 불가능합니다.

장원영 갤러리, 최예나 갤러리 백업 툴이 모두 IZPM 계열입니다. 백업한 output 폴더에 img, mail 폴더 그리고 pm.js 가 잘 있는지 확인합니다. "pm.js" 는 확장자가 숨겨지면 "pm" 으로 보이기도 합니다.

> 그 외에 Shelter, 3분 Go속 백업, 트위터 레디필님 앱, 광배츄님 Flutter 백업 앱 등도 지원 예정입니다. 체험해보시려면 [프메 백업 뷰어 상담소 카카오톡](https://open.kakao.com/o/gPbArZ4c) 으로 와주세요.

### 1. Python을 설치합니다.
아직 파이썬을 설치하지 않으셨다면 [파이썬 홈페이지](https://www.python.org/downloads/) 에서 파이썬을 다운 받아주세요.

#### 윈도우10, 최신 맥
윈도우10이나 최신 맥 사용자는 커다란 노란색 버튼을 눌러서 최신 파이썬 3.9.5을 설치하면 됩니다. (2021-06-06 기준)

#### 윈도우7
윈도우7 사용하시는 분은 [파이썬 3.8.9](https://www.python.org/downloads/release/python-389/)를 설치하면 됩니다.
Windows Installer (64-bit)를 설치하시면 됩니다. (Embeddable package가 아니라 Installer 입니다.)

설치하실 때 Add Python 3.9 to PATH 체크박스를 꼭 체크해주세요.
> 체크하지 않으면 환경 변수 설정이 자동으로 되지 않아서 에러가 납니다.

![설치하실 때 Add Python 3.9 to PATH 체크박스를 꼭 체크해주세요.](https://i0.wp.com/improveandrepeat.com/wp-content/uploads/2020/01/PythonSetup.png?w=666&ssl=1)


혹시 Disable path length limit 같은 경고가 뜨면 꼭꼭꼭 눌러주세요. 환경변수 길이 제한 때문에 환경 변수를 추가할 수 없으니, 길이 제한을 해제하시겠냐고 묻는 겁니다.

![Disable path length limit 같은 경고가 뜨면 꼭꼭꼭 눌러주세요.](https://i0.wp.com/improveandrepeat.com/wp-content/uploads/2020/01/PythonSetup_PathLenghtLimit.png?w=666&ssl=1)


체크박스도 체크하셨고, 경고도 처리했다면 이제 뷰어를 다운 받습니다.


### 2. 뷰어를 다운 받고 초기 설정을 해줍니다.
#### 윈도우10
[배포+스크립트.zip 다운로드](https://github.com/twinstae/izone-pm-viewer/raw/main/%EB%B0%B0%ED%8F%AC%2B%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8.zip)

다운로드 받으신 파일의 압축을 풀면 배포.zip과 설치-업데이트 스크립트가 있습니다. 사진처럼 백업하신 output 폴더와 나란히 둬주세요.
> 그 외에 newone.exe 나 pm_runner.py 같은 다른 파일이 같이 있어도 상관 없습니다.
> 기존에 뷰어를 설치하셨던 분도 마찬가지입니다. 서버 시작하기와 같은 위치에 두시면 됩니다.

![](https://github.com/twinstae/izone-pm-viewer/raw/main/output%20%ED%8F%B4%EB%8D%94%EC%99%80%20%EB%82%98%EB%9E%80%ED%9E%88%20%EB%91%90%EA%B8%B0.png)


그리고 *윈도우10 뷰어 설치, 업데이트하기.bat* 스크립트를 실행해주면 됩니다. 
스크립트가 알아서 배포.zip의 압축을 현재 위치에 풀어줍니다. 필요한 파이썬 모듈을 다운 받고, 초기 설정까지 해줍니다.

#### Mac OS, 윈도우7
[배포.zip 다운로드](https://github.com/twinstae/izone-pm-viewer/raw/main/%EB%B0%B0%ED%8F%AC.zip)

Mac과 윈도우7은 초기 설정 스크립트를 손으로 실행해줘야 합니다.

뷰어를 사용할 폴더를 만들고, 배포.zip의 압축을 풀어줍니다. 안에는 서버 파일과 output 폴더가 있습니다.

output 폴더에 원래 백업한 폴더의 img폴더, mail폴더, pm.js를 복사해서 넣어줍니다.

그리고 맥 초기 설정하기.sh.command 스크립트를 실행해주시면 필요한 파이썬 모듈을 다운 받고, 초기설정을 진행합니다.

> 권한 문제로 실행이 안 되시는 경우 [프메 백업 뷰어 상담소 카카오톡](https://open.kakao.com/o/gPbArZ4c)을 방문해주세요.

> 다운로드와 초기 설정에 1~5 분 정도 시간이 걸립니다.

![](https://github.com/twinstae/izone-pm-viewer/raw/main/%EC%A0%95%EC%83%81%EC%A0%81%EC%9C%BC%EB%A1%9C%20%EC%B4%88%EA%B8%B0%20%EC%84%A4%EC%A0%95%EC%97%90%20%EC%84%B1%EA%B3%B5%ED%95%9C%20%EA%B2%BD%EC%9A%B0.png)

### 3. 서버를 시작하고 뷰어를 실행합니다.

신형 서버 시작하기 스크립트를 실행하면 서버가 시작됩니다.
정상적으로 서버가 실행 중이면 Uvicorn running on 과 같은 메세지가 뜹니다.
![](https://github.com/twinstae/izone-pm-viewer/raw/main/%EC%A0%95%EC%83%81%20%EC%9E%91%EB%8F%99%20%EC%A4%91%EC%9D%B8%20%EC%84%9C%EB%B2%84.png)


혹시 Python만 덩그러니 뜬다면 환경 변수 설정이 안 된 겁니다. 파이썬을 재설치하면서 환경변수 설정을 해주시거나. 인터넷에 파이썬 환경 변수 설정을 검색해보세요.

![](https://github.com/twinstae/izone-pm-viewer/blob/main/%ED%8C%8C%EC%9D%B4%EC%8D%AC%20%EC%97%90%EB%9F%AC.png?raw=true)


> 해결이 안 된다면 [프메 백업 뷰어 상담소 카카오톡](https://open.kakao.com/o/gPbArZ4c)을 방문해주세요.

*IZ-ONE Private Mail Viewer 바로가기* 아이콘을 클릭하시면 뷰어가 열립니다.
이제 웨일, 크롬, 사파리 등의 웹 브라우저로 주소창에 http://127.0.0.1:8000 을 치셔서 서버에 직접 접속하실 수도 있습니다.

![](https://raw.githubusercontent.com/twinstae/izone-pm-viewer/main/%EA%B2%80%EC%83%89.png)
