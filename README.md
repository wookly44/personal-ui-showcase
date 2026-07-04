# interactive-ui-lab <img src="https://github.com/user-attachments/assets/2158c366-9312-4a02-8fd0-03944832805d" align=left width=70>

> GSAP 고성능 애니메이션 최적화 및 비동기 이메일 시스템을 실험하는 프론트엔드 UI 쇼케이스
<img width="1242" height="824" alt="project_uiShowCase" src="https://github.com/user-attachments/assets/5e0595f4-39a2-4873-ac33-537ed7253b98" />

<br/>

## 🔗 링크
- **배포 링크**: [바로가기](https://wookly44.github.io/personal-ui-showcase)

<br/>

## 📌 프로젝트 소개

웹 브라우저 환경에서 구현할 수 있는 화려하고 부드러운 인터랙션을 연구하고 증명하는 쇼케이스 사이트입니다. 웹 퍼블리싱 및 UI 개발 역량을 극대화하기 위해 GSAP 라이브러리(ScrollTrigger, Timeline)를 적극적으로 활용하여 시각적 몰입감을 주는 스크롤 애니메이션을 구현했습니다. 아울러 EmailJS API를 도입하여 백엔드 없이도 웹 내에서 실시간 협업 메일을 즉각 발송할 수 있는 비동기 인터랙션 시스템을 설계했습니다.

<br/>

## 🛠 기술 스택

### Frontend
- React (Vite)
- JavaScript (ES6+)
- GSAP (ScrollTrigger / Timeline)
- CSS3

### Infrastructure & Tools
- EmailJS API
- Git / GitHub / GitHub Actions
- VS Code

<br/>

## ✨ 주요 기능

- **GSAP 기반 시각적 몰입형 인터랙션**: `ScrollTrigger`와 `Timeline`을 결합한 유기적인 스크롤 애니메이션 구현
- **비동기 폼(Form) 프로세스**: `EmailJS API`를 연동하여 웹 내에서 새로고침 없이 실시간 협업 메일을 발송하는 비동기 통신 구현
- **클립보드 자동 복사 시스템**: 기본 메일 앱(mailto:) 미설정 환경을 방어하는 `navigator.clipboard` 기반 주소 자동 복사 내비게이션 설계
- **모듈화 기반 아키텍처**: 컴포넌트 단위 유기적 설계 및 미니멀리즘 인터페이스 구현

<br/>

## 🗂 업데이트 히스토리

| 날짜 | 버전 | 구분 | 내용 |
|------|------|------|------|
| 2026.05 | v1.1.0 | 데이터 정리 | EmailJS API 재연동 및 프로젝트 데이터 수정 |
| 2026.05 | v1.1.1 | lighthouse 점수 향상 | Light House 점수를 90점 이상으로 향상 |

<br/>

## 🖼 화면 구성

### 메인 쇼케이스 영역
- GSAP 인터랙티브 스크롤 비주얼 섹션
- 프로젝트 포커스 콘텐츠 영역

### 풀스크린 글로벌 메뉴 레이어
- EmailJS 기반 실시간 컨택트 폼 및 API 비동기 흐름 피드백
- 깃허브 아카이브 및 원클릭 클립보드 이메일 복사 인터페이스

<br/>

## 📁 폴더 구조

```bash
project
 ┣ .github
 ┃ ┗ workflows
 ┃ ┃ ┗ deploy.yml
 ┣ public
 ┃ ┗ assets
 ┣ src
 ┃ ┣ components
 ┃ ┃ ┣ Button.jsx
 ┃ ┃ ┗ Button2.jsx
 ┃ ┣ css
 ┃ ┃ ┣ section (css 파일 분리)
 ┃ ┃ ┣ main.css
 ┃ ┃ ┗ components.css
 ┃ ┣ pages
 ┃ ┃ ┣ header
 ┃ ┃ ┣ sec1 (Intro)
 ┃ ┃ ┣ sec2 (About)
 ┃ ┃ ┣ sec3 (Project)
 ┃ ┃ ┣ sec4 (Toy)
 ┃ ┃ ┣ sec5 (Clone)
 ┃ ┃ ┗ Footer.jsx
 ┃ ┣ utils
 ┃ ┃ ┣ link.js
 ┃ ┃ ┗ smooth.js
 ┃ ┣ App.jsx
 ┃ ┣ data.jsx
 ┃ ┗ main.jsx
 ┣ index.html
 ┣ package.json
 ┗ vite.config.js
