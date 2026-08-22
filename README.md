# Portfoilo Site  

<img width="1920" height="953" alt="image" src="https://github.com/user-attachments/assets/7032cee9-61cf-4dcb-b4ca-6933610e15b5" />
경험을 만드는 프론트엔드 개발자 강하영의 포트폴리오 사이트입니다.

첫 버전은 Stitch AI로 디자인해 직접 구현했고, 현재 버전은 Claude Code와 협업해 전면 개편했습니다.

🔗 배포 주소: [https://portfolio-site-xi-virid.vercel.app/](https://portfolio-site-xi-virid.vercel.app/)

## 특징

### 스크롤 기반 인터렉션

- GSAP ScrollTrigger + CSS sticky로 만든 섹션별 연출
  - 히어로: 한글 자모 단위 타이핑, 벚꽃 시차(패럴랙스), 스크롤에 따라 물드는 배경
  - About: 스크롤을 따라 교체되는 카드 덱 (데스크톱 세로 · 모바일 가로)
  - 기술 스택: 가로로 흐르는 카드 + 배경에서 저마다의 속도로 떠오르는 아이콘
  - 프로젝트: 토스식 고정 프레임 + 크로스페이드 영상 전환, 원근 진입 연출
- Lenis 관성 스크롤, `prefers-reduced-motion` 대응

### 온디바이스 AI 챗봇 (정비중)

- 직접 만든 오픈소스 프레임워크 [my-little-agent](https://github.com/Hayoung0708/my-little-agent)로 구동
- Chrome Built-in AI(Gemini Nano) 기반 — 질문 분류부터 답변 생성까지 전부 브라우저 안에서 처리
- 미지원 환경은 키워드 기반 준비 답변으로 자동 폴백

### 문의 폼 → 카카오톡

- Vercel 서버리스 함수가 카카오 "나에게 보내기" API로 문의 내용을 전달

## 기술 스택


| 분류        | 사용                                                                                          |
| --------- | ------------------------------------------------------------------------------------------- |
| Core      | React 19, TypeScript, Vite 7                                                                |
| Style     | Tailwind CSS v4                                                                             |
| Animation | GSAP (ScrollTrigger · SplitText · Draggable · Inertia), CSS Scroll-driven Animations, Lenis |
| AI        | my-little-agent, Chrome Built-in AI (Prompt API)                                            |
| Infra     | Vercel (SPA + Serverless Functions)                                                         |


## 구조

```
src/
├── components/          # 메인 페이지 섹션 단위 컴포넌트
│   └── project/         # 프로젝트 상세 페이지 컴포넌트
├── constants/           # 프로젝트·경력·리뷰 등 콘텐츠 데이터
├── lib/                 # my-little-agent 워크플로우, 스크롤 유틸
└── routes/              # react-router 라우트
api/                     # 카카오톡 문의 서버리스 함수
```

