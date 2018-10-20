# Galaxia

> personal space community

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

##황호룡 프로젝트
우주 커뮤니티를 만들어보자.
2018 경상대학교 CS 웹프로그래밍 

황채린
김호
이자룡

##9월 23일 작업내용
기초 세팅중

##9월 26일 작업내용
인트로페이지 제작중. 로그인창 추가 예정

##9월 26일 회의내용
로그인 페이지 이후 내 행성페이지 구현의논
1. 행성이 있고 네비게이션 바
	1. 둘러보기: 모든 행성 중 하나로 갈 수 있다. 슈우우욱
		우주선 로딩페이지로 바뀜. 다른 행성으로 간다.
	2. 상점: 일주일 지나면 우주농산물이 자란다. 그걸 팔 수 있다.
	3. 꾸미기: 내가 상점에서 구입한 요소들을 행성에 심는다.
	4. 친구들: 누르면 친구리스트가 뜬다
	5. 설정: 내 프로필 설정: 상태메세지
2. 귀여운 행성 및 솜사탕나무 등의 우주요소들을 취합할 것
3. 나무를 클릭하면 물준다. 나무가 크면 솜사탕수확

##9월 28일 작업내용
1. 인트로 페이지 html파일로 옮겨버림. 차후 vue dev모드에서 production모드로 바꿀 것.
2. 개인행성페이지 세팅중. 전체 배경색 spaceGray컬러로 설정.
3. myPlanet페이지 레이아웃 작업중. 알바가야되서 작업못했는데  지금 중앙정렬이 cottonCandy로 되어있는데 Planet으로 바꾸고 솜사탕나무는 planet내부템플릿으로 빼버릴 것. 

##9월 30일 작업내용
1. 사이드바 작업중

##10월 1일 작업내용
1. 임시 배경화면과 플래닛, 솜사탕나무 설치함.

##10월 5일 작업내용
1. 뒷 배경 바꿈
2. myplanet 박스사이징 인덱스로 옮겨버림
3. 행성과 솜사탕나무 잠시 꺼둠

##10월 6일 작업내용
1. flex없애버림.

##10월 8일 작업내용
1. 사진 교체.
2. vuetify 추가함. 현재 vuesax와 혼용하고 있어서 나중에 코드가 꼬일 수 있으므로 vuetify로 통일할 것.
3. 앞으로 해야할 일: 
	1. 행성 호버하면 특정한 애니메이션을 하도록
	2. 솜사탕 나무 클릭하면 물주기 뜨기
	3. 사이드바 작업...

##10월 18일 작업내용
1. 아예 vuetify로 템플릿 바꿔버림
2. 현재 사진에 가려서 콘텐츠가 안 보이는 문제 발생. 해결에 집중할 것.
3. 2번문제 해결. 배경을 이미지태그로 넣는 게 아니라 css background url로 적용
4. 김호가 보내준 로그인파일을 프로젝트 파일에 추가함

##10월 19일 작업내용
1. 클라이언트단 로그인함수 작성함 

##10월 20일 작업내용
1. login.js파일 제외함
2. 스택오버플로에 static폴더로 build option 변경하는거 질문함. 예전 left and right땐 알아서 static에 담겼던 것으로 확인됨.
3. 2번은 김호가 해결함. 팩맨게임과 로그아웃, 프로필 설정 기능 추가.
4. 황채린의 새 행성과 솜사탕나무 추가 