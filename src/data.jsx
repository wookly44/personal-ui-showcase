import site from '../public/assets/web.png'
import git from '../public/assets/git2.png'
import archive from '../public/assets/archive.png'

export const headerNav = [{
        title: "ABOUT",
        url: "#ABOUT"
    },{
        title: "PROJECT",
        url: "#PROJECT"
    },
    {
        title: "TOY",
        url: "#TOY"
    },
    {
        title: "CLONE",
        url: "#CLONE"
    }
];

export const projectDatas = [{
    class: 'Festival',
    siteName: 'BANDI FESTA',
    teamName: '대한민국 밤산책 (반디페스타)',
    text: '대한민국 밤산책은 React 기반의 전국 축제 탐색 웹 애플리케이션입니다. 저는 Context API 기반의 1:1 문의 CRUD 시스템과 비동기 FAQ 검색/토글 기능을 전담하여 게시판 기능을 구현했습니다. 특히 2026년 5월, 자발적 리팩토링을 통해 Lighthouse TBT(Total Blocking Time) 지표를 개선하고 IntersectionObserver 지연 로딩을 도입하여 브라우저 렌더링 성능을 극대화했습니다. 아울러 GitHub Actions를 이용한 CI/CD 파이프라인을 구축하여 배포 프로세스까지 자동화했습니다.',
    date: '2024.05.15 ~ 2024.06.18 (Refactoring: 2026.05)',
    date2: 'Role: Frontend & Optimization',
    bgImg: 'assets/festival.avif',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: 'https://wookly44.github.io/bandiFesta/#/main',
    btn2: 'github',
    btn2Img: git,
    btn2Link: 'https://github.com/wookly44/bandiFesta',
    btn3: 'ARCHIVE',
    btn3Img: archive,
    btn3Link: 'https://github.com/TheSandfox/bandifesta',
}, {
    class: 'Math',
    siteName: 'CATCH MATH MONSTERS',
    teamName: "캐치! 수학 몬스터즈 ",
    text: '캐치! 수학 몬스터즈는 초등학생을 위한 React 기반의 디지털 수학 학습 인터랙티브 웹사이트입니다. 본 프로젝트에서 **Kakao API를 연동한 사용자 인증(Auth)** 시스템을 전담하여, 토큰 기반의 세션 유지 및 유저 상태에 따른 라우팅 접근 제어(Protected Route)를 구현했습니다. 또한 useLocation과 useRef를 활용해 동적 URL 변화와 컴포넌트 상태를 동기화하는 조건부 라우팅 기반의 탭 메뉴 시스템을 설계하여 다중 페이지 환경의 UI 일관성을 확보했습니다.',
    date: '2024.07.06 ~ 2024.08.07 (Update: 2026.05)',
    date2: 'Role: Authentication & Web Routing',
    bgImg: 'assets/book.jpg',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: 'https://wookly44.github.io/catchMonsters/',
    btn2: 'github',
    btn2Img: git,
    btn2Link: 'https://github.com/wookly44/catchMonsters',
    btn3: 'ARCHIVE',
    btn3Img: archive,
    btn3Link: 'https://github.com/pichiss/TeamMMs',
}, {
    class: 'Gcova',
    siteName: 'GCOVA FRANCHISE RENEWAL',
    teamName: '지코바 프랜차이즈 리뉴얼',
    text: '지코바 치킨의 예비 창업자를 타겟으로 비즈니스 정보 접근성을 극대화한 프랜차이즈 홍보 및 리뉴얼 웹사이트입니다. 본 프로젝트에서 Node.js 인프라와 MySQL 데이터베이스를 직접 설계하여 가맹 문의 및 공지사항을 위한 백엔드 게시판 아키텍처를 구축했습니다. 프론트엔드 영역에서는 Vanilla JS 기반의 동적 내비게이션(LNB/GNB) UI와 Swiper 모듈을 활용해 사용자 경험(UX)을 개선했습니다.',
    date: '2024.03.26 ~ 2024.04.09',
    date2: 'Role: Full-Stack Development',
    bgImg: 'assets/gcova.jpg',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: 'https://gcova.vercel.app/',
    btn2: 'github',
    btn2Img: git,
    btn2Link: 'https://github.com/wookly44/gcova',
}, {
    class: 'Front',
    siteName: 'FRONTEND DICTIONARY',
    teamName: '프론트엔드 용어 사전',
    text: '개발 공부를 하며 모르는 단어를 검색하고 직접 등록·관리할 수 있는 React 기반의 사전 서비스입니다. 코드가 지저분해지는 것을 막기 위해 기능을 수행하는 로직과 화면에 보여지는 UI 코드를 철저히 분리하여 설계했습니다. 반복되는 코드는 **커스텀 훅(Custom Hook)**으로 묶어 재사용성을 높였으며, 단어 데이터가 많아져도 버벅임 없이 원하는 단어와 카테고리를 찾아주는 실시간 검색 필터링 기능을 구현했습니다.',
    date: '2024.05.06 ~ 2024.05.10',
    date2: 'Role: Architecture & Custom Hooks',
    bgImg: 'assets/frontend.jpg',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: 'https://wookly44.github.io/Frontend_Dictionary/',
    btn2: 'github',
    btn2Img: git,
    btn2Link: 'https://github.com/wookly44/Frontend_Dictionary',

},
{
    class: 'Port',
    siteName: 'INTERACTIVE UI SHOWCASE',
    teamName: "인터랙티브 UI 쇼케이스",
    text: '웹 브라우저 환경에서 구현할 수 있는 화려하고 부드러운 인터랙션을 연구하고 증명하는 쇼케이스 사이트입니다. 웹 퍼블리싱 및 UI 개발 역량을 극대화하기 위해 GSAP 라이브러리(ScrollTrigger, Timeline)를 적극적으로 활용하여 시각적 몰입감을 주는 스크롤 애니메이션을 구현했습니다. 아울러 EmailJS API를 도입하여 백엔드 없이도 웹 내에서 실시간 협업 메일을 즉각 발송할 수 있는 비동기 인터랙션 시스템을 설계했습니다.',
    date: '2024.06.18 ~ 2024.07.04',
    date2: 'Role: Frontend & UI Interaction',
    bgImg: 'assets/port.jpg',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: 'https://wookly44.github.io/Portfolio/',
    btn2: 'github',
    btn2Img: git,
    btn2Link: 'https://github.com/wookly44/Portfolio',
}
];

export const toyData = [{
    siteName: 'TO-DO LIST',
    teamName: "투두리스트",
    text: '간결한 사용성과 감성적인 디자인을 결합한 React 기반의 할 일 관리 웹 애플리케이션입니다. 사용자가 핵심 기능에만 온전히 집중할 수 있도록 복잡한 부가 기능을 과감히 제거하는 UX 리팩토링을 진행했습니다. 날짜 입력 등 불필요한 단계를 줄여 사용성을 단순화하는 대신, 할 일의 완료/미완료 상태에 따라 목록이 실시간으로 분류되는 조건부 데이터 렌더링 시스템을 구축하여 작업 관리의 효율성을 높였습니다. 또한, 딱딱한 기능 중심의 UI에서 벗어나 캐릭터와 일러스트를 활용한 감성 디자인을 전면 적용하여 시각적 완성도와 유저 친밀도를 함께 개선했습니다.',
    date: '2024.06.18 ~ 2024.07.04',
    date2: 'Role: Frontend & UX Design',
    bgImg: 'assets/port.jpg',
    btn1: 'go site',
    btn1Img: site,
    btn1Link: '#;',
    btn2: 'github',
    btn2Img: git,
    btn2Link: 'https://github.com/wookly44/Portfolio',
}]

export const cloneDatas = [{
    class : 'domino',
    img : 'assets/domino.png',
    logo: '',
    tit : '도미노 사이트 클론',
    txt : 'HTML, CSS, JavaScript를 사용하여 클론 사이트를 제작하였습니다.',
    btn1: 'go site',
    btn1Img: site,
    git : 'https://clone-domino.vercel.app/',
    btn3: 'github',
    btn3Img: git,
    link : 'https://github.com/wookly44/clone_domino'
},{
    class : 'socar',
    img : 'assets/socar.png',
    logo: '',
    tit : '쏘카 사이트 클론',
    txt : 'React, CSS를 사용하여 클론 사이트를 제작하였습니다.',
    btn1: 'go site',
    btn1Img: site,
    git : 'https://clone-socar.vercel.app/',
    btn3: 'github',
    btn3Img: git,
    link : 'https://github.com/wookly44/clone_socar'
},{
    class : 'gongju',
    img : 'assets/gongju.png',
    logo: '',
    tit : '국립공주박물관 사이트 클론',
    txt : 'HTML, CSS, JavaScript를 사용하여 클론 사이트를 제작하였습니다.',
    btn1: 'go site',
    btn1Img: site,
    git : 'https://clone-gongju.vercel.app/',
    btn3: 'github',
    btn3Img: git,
    link : 'https://github.com/wookly44/clone_gongju'
},{
    class : 'bizcar',
    img : 'assets/bizcar.png',
    logo: '',
    tit : '비즈카 사이트 클론',
    txt : 'HTML, CSS, JavaScript를 사용하여 클론 사이트를 제작하였습니다.',
    btn1: 'go site',
    btn1Img: site,
    git : 'https://clone-bizcar.vercel.app/',
    btn3: 'github',
    btn3Img: git,
    link : 'https://github.com/wookly44/clone_bizcar'
},
{
    class : 'ktg',
    img : 'assets/ktg.png',
    logo: '',
    tit : 'KT&G 사이트 클론',
    txt : 'HTML, CSS, JavaScript를 사용하여 클론 사이트를 제작하였습니다.',
    btn1: 'go site',
    btn1Img: site,
    git : 'https://clone-kt-g.vercel.app/',
    btn3: 'github',
    btn3Img: git,
    link : 'https://github.com/wookly44/clone_kt-g'
},
]
