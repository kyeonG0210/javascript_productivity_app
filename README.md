# Momentum App (JavaScript Productivity App)

**Momentum App**은 하루를 더욱 생산적으로 만들어주는 개인 맞춤형 웹 대시보드입니다.

<br/>

## 주요 기능

- **로그인 및 환영 메시지**  
  사용자의 이름을 입력받아 저장합니다. 다음 방문 시 자동으로 환영 메시지를 보여줍니다.

- **실시간 시계**  
  현재 시간을 초 단위로 실시간 표시합니다.

- **To-Do 리스트**  
  할 일을 추가하고, 삭제할 수 있습니다.  
  할 일 목록은 브라우저의 LocalStorage에 저장되어 새로고침해도 유지됩니다.

- **명언 랜덤 표시**  
  다양한 명언 중 하나를 무작위로 선택해 동기부여 메시지를 보여줍니다.

- **배경 이미지 랜덤 변경**  
  여러 배경 이미지를 매번 임의로 선택해서 화면을 더 아름답게 꾸며줍니다.

- **날씨 정보 제공**  
  사용자의 위치를 기반으로 현재 날씨와 도시명을 보여줍니다.  
  (OpenWeatherMap API 사용)

<br/>

## 사용 기술

- HTML, CSS, JavaScript (Vanilla JS)
- LocalStorage (브라우저 데이터 저장)
- [OpenWeatherMap API](https://openweathermap.org/) (실시간 날씨 정보)

<br/>

## 파일 구조

- `index.html` : 메인 페이지
- `css/style.css` : 스타일시트
- `js/clock.js` : 시계 기능
- `js/greeting.js` : 로그인/환영 메시지
- `js/todo.js` : 할 일 목록
- `js/quotes.js` : 명언 표시
- `js/background.js` : 배경 이미지 기능
- `js/weather.js` : 날씨 기능
- `js/apikey.js` : 날씨 API 키 파일 (직접 생성 필요)
