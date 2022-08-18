# Herb Chat Messenger

Next.js와 Electron을 이용한 Chat Messenger 입니다.

<br>

## 📅 Schedule

**2022년 08월 09일 ~ 2022년 08월 11일**

- 기능 구현 배치 구상
- Next.js, Electron 학습

**2022년 08월 11일 ~ 2022년 08월 18일**

- 기능 개발
- UI작업
- 빌드 및 데스크톱 앱 배포

<br>

## 📚 Stack

- React
- Next.js
- Electron
- Firebase (Authentication(구글) 및 FireStore Database)
- TypeScript
- Cypress → `진행중`

<br>

## ⚙️ Function List

✅ 회원가입(구글) <br>
✅ 로그인 <br>
✅ 유저목록 <br>
✅ 1:1 채팅 <br>
❌ 그룹채팅 → `진행중` <br>

<br>

## 📁 Installation

1. 프로젝트를 다운 받은 후 프로젝트 디렉토리 내부에서 다음 명령어 입력

```
npm install or npm i
npm start
npm run build
deploy:osx
```

2. 환경설정 (.env file)을 아래와 같이 입력해야 합니다.

```
NEXT_PUBLIC_FIREBASE_API_KEY=<YOUR_FIREBASE_API_KEY>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<YOUR_FIREBASE_AUTH_DOMAIN>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<YOUR_FIREBASE_PROJECT_ID>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<YOUR_FIREBASE_STORAGE_BUCKET>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<YOUR_FIREBASE_MESSAGING_SENDER_ID>
NEXT_PUBLIC_FIREBASE_APP_ID=<YOUR_FIREBASE_API_ID>

BROWSER=none
```

<br>

## 🔫 Special Note

- `디자인을 위해` 화면에 아이콘들을 사용하여 배치하였는데, **"새로고침, 뒤로가기, 검색" 등만 선 구현 필수요소**라고 판단하여 해당 아이콘만 기능을 진행하였습니다.

  - 나머지 기능 아이콘들은 차후 구현하겠습니다.

- 배포 전 빌드를 진행하다가 타입스크립트 오류를 다 해결했음에도 불구하고 빌드가 되지않았습니다. (데스크톱 앱 배포는 현재 가능합니다.)
  - 이유를 찾다보니 `First Load Js`이 서버에서 페이지로 다운로드한 횟수가 커서 빌드가 되지 않음을 확인하게 되었고, 이를 해결하기 아래의 방법으로 `트리쉐이킹 작업`을 진행하였고 시도하였습니다.
    - import 방식을 변경 (필요한 것만 가져오게 변경) - `시도`
    - 불필요한 종속성 제거 - `시도`
    - import, export의 구문을 ES5의 문법으로 변환 방지 - `시도`
    - Side-Effect 발생 방지 - `시도`
    - dynamic import 를 이용한 사이즈 줄이기 - `시도중`
      - SSR 없이 동적으로 가져오기
    - github 연동을 통한 배포 - `시도`
