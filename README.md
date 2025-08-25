# Astro Sweep - Space Debris Cleaning Simulator

> 우주 파편 청소 시뮬레이터 게임으로 우주 환경 문제에 대한 인식 제고를 위한 교육용 웹 애플리케이션

![Python](https://img.shields.io/badge/Python-3.x-blue)
![Flask](https://img.shields.io/badge/Flask-Latest-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![CesiumJS](https://img.shields.io/badge/CesiumJS-1.104-red)

## 📖 프로젝트 개요

Astro Sweep는 우주 파편(Space Debris) 문제를 일반 대중에게 쉽고 재미있게 알리기 위한 교육용 3D 시뮬레이션 게임입니다. NASA와 ESA와 같은 전문 기관에서는 우주 파편 문제의 복잡성을 잘 알고 있지만, 일반 대중에게는 여전히 추상적인 개념으로 남아있습니다. 이 프로젝트는 게임이라는 매체를 통해 이 문제를 더 접근 가능하고 이해하기 쉽게 만들고자 합니다.

## ✨ 주요 기능

- **3D 지구 시각화**: CesiumJS를 사용한 실시간 3D 지구 모델
- **우주 파편 시뮬레이션**: 실제 궤도 역학을 기반으로 한 우주 파편 움직임
- **대화형 수집 게임**: 키보드 컨트롤로 우주 파편을 수집하는 게임플레이
- **다층 궤도 시스템**: LEO, MEO, HEO 궤도별 우주 파편 분포
- **실시간 점수 시스템**: 수집한 우주 파편 개수 추적
- **물리 기반 시뮬레이션**: 중력 상수와 지구 질량을 고려한 궤도 속도 계산

## 🛠️ 기술 스택

### Backend

- **Flask**: Python 웹 프레임워크
- **CSV**: 우주 파편 데이터 저장 및 관리

### Frontend

- **CesiumJS 1.104**: 3D 지구 및 우주 시각화
- **JavaScript (ES6+)**: 게임 로직 및 상호작용
- **HTML5 & CSS3**: UI/UX 디자인
- **Font Awesome**: 아이콘 시스템

### APIs

- **ArcGIS MapServer**: 고해상도 위성 이미지 제공
- **CesiumJS API**: 3D 시각화 및 엔티티 관리

## 📁 프로젝트 구조

```
DaHacks3.0/
├── app.py                 # Flask 메인 애플리케이션
├── generateDebris.js      # 우주 파편 데이터 생성 스크립트
├── data/
│   └── debris.csv        # 우주 파편 데이터 파일
├── models/
│   └── satellite.glb     # 3D 모델 파일
└── static/
    ├── index.html        # 메인 게임 페이지
    ├── Info.html         # 프로젝트 정보 페이지
    ├── script.js         # 게임 로직 및 CesiumJS 제어
    └── styles.css        # 스타일시트
```

## 🚀 설치 및 실행

### 필수 요구사항

- Python 3.x
- Node.js (우주 파편 데이터 생성용)
- 모던 웹 브라우저 (WebGL 지원)

### 설치 과정

1. **프로젝트 클론**

```bash
git clone https://github.com/your-username/DaHacks3.0.git
cd DaHacks3.0
```

2. **Python 의존성 설치**

```bash
pip install flask
```

3. **우주 파편 데이터 생성 (선택사항)**

```bash
node generateDebris.js
```

4. **Flask 서버 실행**

```bash
python app.py
```

5. **브라우저에서 접속**

```
http://localhost:5000
```

## 🎮 게임 조작법

| 키  | 기능                   |
| --- | ---------------------- |
| `↑` | 수집기를 북쪽으로 이동 |
| `↓` | 수집기를 남쪽으로 이동 |
| `←` | 수집기를 서쪽으로 이동 |
| `→` | 수집기를 동쪽으로 이동 |
| `W` | 수집기 고도 상승       |
| `S` | 수집기 고도 하강       |

## 🌌 우주 파편 분류

게임에서는 세 가지 궤도 영역의 우주 파편을 시뮬레이션합니다:

- **LEO (Low Earth Orbit)**: 160km - 2,160km 고도 (회색 점)
- **MEO (Medium Earth Orbit)**: 2,000km - 35,786km 고도 (파란색 점)
- **HEO/GEO (High Earth Orbit)**: 35,786km 이상 고도 (빨간색 점)

각 궤도의 우주 파편은 실제 물리학 법칙에 따라 계산된 속도로 움직입니다.

## 📊 데이터 및 물리 모델

### 궤도 역학

- 중력 상수: 6.674 × 10⁻¹¹ m³/kg⋅s²
- 지구 질량: 5.972 × 10²⁴ kg
- 궤도 속도: v = √(GM/r)

### 우주 파편 데이터

- 총 500개의 시뮬레이션된 우주 파편
- LEO: 300개, MEO: 150개, HEO: 50개
- 각 파편은 고유한 궤도 매개변수를 가짐

## 🤝 기여 방법

1. 이 저장소를 Fork 하세요
2. 새로운 기능 브랜치를 생성하세요 (`git checkout -b feature/새기능`)
3. 변경사항을 커밋하세요 (`git commit -am '새 기능 추가'`)
4. 브랜치에 Push 하세요 (`git push origin feature/새기능`)
5. Pull Request를 생성하세요

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 제공됩니다.

## 👥 팀 정보

**Five Hs Team** - DaHacks 3.0 해커톤 참가팀

## 🔗 참고 링크

- [CesiumJS 공식 문서](https://cesium.com/platform/cesiumjs/)
- [ArcGIS World Imagery](https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer)
- [Discord 커뮤니티](https://discord.gg/rss8p6dP)

---

_우주 파편 문제에 대한 인식을 높이고, 깨끗한 우주 환경을 위한 노력에 동참해 주세요! 🌍✨_
