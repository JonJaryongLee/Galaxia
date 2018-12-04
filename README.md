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

## 황호룡 프로젝트
우주 커뮤니티를 만들어보자.
2018 경상대학교 CS 웹프로그래밍 

황채린
김호
이자룡

## 9월 23일 작업내용
기초 세팅중

## 9월 26일 작업내용
인트로페이지 제작중. 로그인창 추가 예정

## 9월 26일 회의내용
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

## 9월 28일 작업내용
1. 인트로 페이지 html파일로 옮겨버림. 차후 vue dev모드에서 production모드로 바꿀 것.
2. 개인행성페이지 세팅중. 전체 배경색 spaceGray컬러로 설정.
3. myPlanet페이지 레이아웃 작업중. 알바가야되서 작업못했는데  지금 중앙정렬이 cottonCandy로 되어있는데 Planet으로 바꾸고 솜사탕나무는 planet내부템플릿으로 빼버릴 것. 

## 9월 30일 작업내용
1. 사이드바 작업중

## 10월 1일 작업내용
1. 임시 배경화면과 플래닛, 솜사탕나무 설치함.

## 10월 5일 작업내용
1. 뒷 배경 바꿈
2. myplanet 박스사이징 인덱스로 옮겨버림
3. 행성과 솜사탕나무 잠시 꺼둠

## 10월 6일 작업내용
1. flex없애버림.

## 10월 8일 작업내용
1. 사진 교체.
2. vuetify 추가함. 현재 vuesax와 혼용하고 있어서 나중에 코드가 꼬일 수 있으므로 vuetify로 통일할 것.
3. 앞으로 해야할 일: 
	1. 행성 호버하면 특정한 애니메이션을 하도록
	2. 솜사탕 나무 클릭하면 물주기 뜨기
	3. 사이드바 작업...

## 10월 18일 작업내용
1. 아예 vuetify로 템플릿 바꿔버림
2. 현재 사진에 가려서 콘텐츠가 안 보이는 문제 발생. 해결에 집중할 것.
3. 2번문제 해결. 배경을 이미지태그로 넣는 게 아니라 css background url로 적용
4. 김호가 보내준 로그인파일을 프로젝트 파일에 추가함

## 10월 19일 작업내용
1. 클라이언트단 로그인함수 작성함 

## 10월 20일 작업내용
1. login.js파일 제외함
2. 스택오버플로에 static폴더로 build option 변경하는거 질문함. 예전 left and right땐 알아서 static에 담겼던 것으로 확인됨.
3. 2번은 김호가 해결함. 팩맨게임과 로그아웃, 프로필 설정 기능 추가.
4. 황채린의 새 행성과 솜사탕나무 추가 

## 10월 21일 작업내용
1. 상점 구현중.
2. 리스트를 누르면 화면이 바뀌게 구현함.
3. login.js파일 새로 업데이트함.
4. 현재 로컬에서 이미지를 못 읽어오고 있음. 카로셀로 구현했는데 아마 서버에 올려서 써야 할 듯.
5. 카로셀 계속 움직임. 안 움직이게 하는 api 찾아볼 것.

## 10월 22일 작업내용.
1. 상점 구현중. 그리드 대충 짜놓음. 디자인이 마음에 안 든다.
2. 앞으로 이것 관련해서 해야 할 내용은 다음과 같다.
	- 탭을 누르면 바뀌어야
	- 이미지를 클릭하면 해당 인포가 나와야
	- 구매하기를 누르면 확인모달이 떠야
	- 확인을 누르면 돈이 깎이면서 성공했다는 메세지가 뜨고 아이템이 담김.

## 10월 23일 작업내용
1. 상점 대충 구현해놓음.
2. 상점 디자인 마음에 들지 않음. 그리고 커밍쑨 촌스러움. 
3. 호에게 어떻게 돌아가는지 설명해줄 것. 

## 11월 1일 작업내용
1. 게임을 팩맨에서 테트리스로 수정함. 차후 테트리스를 서버에 올리고, 클릭 시 새창으로 실행되도록 조치할 것.
2. 쇼핑창 살짝만 손봄.

## 11월 16일 작업내용
1. 보름만에 작업 재개. 변경사항이 어마어마하니 일단 기록함
	1. 발표 ppt를 메뉴 섹션에 넣었음. 아직 ppt는 없음
	2. 인트로는 배경 바꿨고 디자이너가 넘겨줄 예정
	3. 친구들 섹션은 김호에게 넘겨줌
	4. 상점, 꾸미기 빼버림
	5. 프로필 설정 때 자기소개 한 줄 입력하도록 설정했으며, 닉네임 밑에 뜨도록 조치함.
	6. 로그아웃 버튼 클릭 시 아래 Alert이 뜨는 게 아니라 다이얼로그가 뜨도록 조치함.
	7. 로딩 할 일이 없어서 로딩 빼버림
	8. 퀴즈 제작중.
		1. 정답 입력시 경험치 올라감
		2. 정답 입력시 나머지항목들 disabled
		3. 정답 입력시 정답 알람 뜸.
		4. 오답 입력시 오답 알람 뜸

## 11월 18일 작업내용
1. 퀴즈는 데모로 총 3개 만들어놓음. 3번퀴즈가 끝나면 1번으로 돌아옴.
2. 경험치가 쌓이면 100을 빼고 남는 데이터가 경험치로 남고, (하나 성공시킬때마다 33.4오르도록 함) 레벨이 올라감. 개발자도구를 통해 콘솔에 찍히도록 하니 정상적으로 레벨업 됨.

## 11월 19일 작업내용
1. 경험치 옆에 레벨도 같이 보이게.
2. 레벨 올라가면 행성 5개 중 선택하는 팝업 뜨게 함
3. 프로젝트 파일 구조 바꿈.
4. planetChoiceList에서 선택된 행성 넘버를 최상위 컴포넌트인 App으로 넘겨줌. log찍어봤을 때 잘 나옴.
5. 인트로 배경 바꿈.
6. 퀴즈 마무리하고 내 행성 항목 작업중. 선택창을 그림으로 바꾸고, 트랜지션 적용해 부드럽게 선택되게 만듦. 선택하면 최상위 컴포넌트인 App에 선택한 행성 이름이 전달됨. log찍어봤을 때 잘 나옴.
7. 6번의 데이터를 하위컴포넌트인 UserPlanet으로 넘겨주었음. 백엔드는 src주소를 http로 바꾼 뒤 서버 안에 있는 사진 데이터에 http접근하도록 할 것.

## 11월 20일 작업내용
1. 레벨 1->2에서 선택창이 뜨도록 함.
2. 레벨 2->3 혹은 3->4에서 단순 레벨업 알람이 뜨도록 함.
3. 컴포넌트간 데이터 연동 작업중. 이 작업은 서버와 협업이 필수이나, 클라이언트쪽에서 먼저 테스트중임. 모든 데이터를 최상위 컴포넌트인 App.vue에서 처리하고, 서버 통신은 App.vue하고만 통신하게 짜는 중 
	- 이게 프론트에서 해야 할 제일 어려운 일 같음. 시간 좀 투자해서 제대로 연동 가능하도록 하겠음.
4. 전체 배경화면 우주로 바꿔놓음

## 11월 21일 작업내용
1. 호가 수정한 파일 적용함.
2. 인트로 바꿈. my galaxy - > galaxia 로 바꿈

## 11월 22일 작업내용
1. 김호 수정사항 업데이트함
	1. 프로필 설정에서, 전송 링크를 변경함.
	2. 퀴즈 게임의 레벨과 경험치를 완전히 구현함.
	3. 퀴즈 기능을 완전히 구현함.
	4. 퀴즈 기능과 내 행성이 연동됨.
	5. 버그수정.
2. 카로셀 테스트중

## 11월 23일 작업내용
1. initMoney작동안함(원래 작동했었음)
2. 렌더링 관련 오류들이 뜨는데, 받아오는 타이밍의 문제인 것으로 보임.(아직 못 받아와서 null인데 실행을 시키니깐 문제인듯. 그러나 정상적으로 돌아감)
3. 현재 카로셀은 데모로 짜고있어서 구현이 논리적이지 못함.
	1. 각 행성마다 레벨과 경험치가 달라야 함. 넘어갈때마다 해당 인덱스를 받아서 해당행성의 레벨과 경험치를 보여주어야 함.
	2. 그 인덱스값을 가지고 있어서 퀴즈를 맞출 때 다른 행성이 아니라 그 해당 행성이 변해야 함. 
	3. 마지막 카로셀에 yes버튼을 클릭하면 보유금액이 깎이며 새로운 토지가 생겨야 함. 물론 돈이 없으면 알람이 뜨면서 작동 안함. 현재 경고는 뜨도록 했으나 예쁘지 않아서 추후 수정예정이며, 돈이 있을 때 기존 데이터에 추가하고 새로운 카로셀을 생성하는 로직은 비교적 복잡하고 백엔드와 협업해야한다는 판단 아래 작업 유보 
4. 갑자기 무슨 일인지 모르겠지만 친구들이 작동 안함/
5. 행성 갯수는 카로셀 아래 동그라미로 충분히 유추 가능하므로 빼버림. 
6. 각 행성별 레벨과 경험치는 추후 말풍선으로 예쁘게 바꿀 예정
7. CannotSetPurchase.vue 파일은 필요가 없어 임포트 빼고 지우려했으나 이미 어딘가에 쓰여져있는지 지우면 에러뜨고 앱 실행 안 됨. 그래서 그냥 놔둠

## 11월 24일 작업내용
1. 내 행성 영역 말풍선 작업함. 흰색으로 설정
2. 친구들 항목 작업하려는데 에러때문에 현재 파일에선 작업 불가. 그래서 호가 저번에 보내준 파일로 작업 시작.
3. 스크롤바 숨김. 커스텀 스크롤바 임포트해서 쓰고 있음 (npm simple var)
4. 친구들 데모 작업 완료. 그러나 친구들페이지 에러때문에 작동 안 함.

## 11월 25일 작업내용
1. 드래그 앤 드롭 연습중
2. 친구들과 돈 받아오는 로직, 퀴즈의 레벨과 경험치 연동이 안 되었던 이유는 UserPlanet.vue의 getElementId때문이었는데, 카로셀 데모로 바꾸면서 해당 아이디를 가지고 있는 코드가 없어졌기에 그 다음 로직으로 진행이 안 되서 생기는 문제였음. 일단 전체 로직을 손봐야되기때문에 주석처리해둠.
3. 그러나 여전히 통신 타이밍때문에 뜨는 에러는 해결하지 못하였는데, 이는 axios가 받아오는 시점과 화면에 그리는 시점이 어긋나서 생기는 문제로 생각됨. 그러나 에러문구만 뜨지 작동상 문제는 없으므로 계속 진행하겠음. 추후 에러가 거슬리면 수정할 것.
4. 친구들의 list 아이콘 없애버림
5. 드래그 앤 드롭 구현 실패. vue라이브러리 중 가장 심플한 걸 써보았으나 못써먹을 라이브러리였음. 이번 주 작업 끝

## 11월 26일 작업내용
1. html로 드래그 앤 드롭 구현 성공함. 그러나 그것을 뷰에 적용하려니깐 에러메세지 뜨며 작동 안함. 에러메세지는 다음과 같다.
	1. Uncaught ReferenceError: drag is not defined at HTMLDivElement.ondragstart ((index):17)
	2. Uncaught ReferenceError: allowDrop is not defined at HTMLDivElement.ondragover ((index):17)
2. 성공한 예제는 test.html이며, Galaxia-myGalaxy-DragTest폴더에 담겨있다.

## 11월 28일 작업내용
1. FriendDialog의 메세지 기능 추가. 대시 구분선 추가. 메시지의 ValidCheck기능 있음. 아예 안 쓰면 보내기 작동 안하고, 40자 넘어가도 작동 안함
2. ppt 프로젝트에 추가함. 적용은 아직 안함.
3. 메세지기능 제작중
4. 김호의 수정사항 업데이트 완료
5. 메세지기능 완료 
6. ppt 팀장으로부터 받음. vue로 임포트중
7. ppt 이식 완료

## 11월 29일 작업내용
1. 드래그 앤 드롭 테스트중 뭔가 되긴 되는데 버그 수정해야함.

## 11월 30일 작업내용
1. 드래그 앤 드롭 구현성공
2. 화면 해상도 1024x768 발표용 컴퓨터에 맞추었음. 로그인페이지도 조정했으니 백엔드는 확인할 것
3. 어제자 호가 카톡으로 보내준 코드 적용 완료. Message.vue에 axios import안 해놓아서 코드 적어놓음
4. 이상 프런트 작업 끝.

## 12월 1일 작업내용
1. 퀴즈 문제 내용이 많아지면 가리거나 밀리는 현상 생김. 해당 항목 css수정함
2. UserPlanet.vue의 checkMoney항목 수정.
3. UserPlanet.vue에 addPlanet함수 추가. axios통신 부분 구현 안 함.
4. Planets길이를 반환해보려 했지만 자꾸 0으로 나와 못함. 이 길이를 받아서 ++한 값을 새로운 행성 num에 넣으려고 했었음.
5. UserPlanet.vue 구매 성공 다이알로그 추가함. 
6. 카로셀 맨 뒤로 옮기는 걸 시도해봤는데 인덱스가 엉망이 되서 퀴즈와 경험치,레벨 연동이 안 됨. 그냥 맨 앞에 둠
7. 주말간 김호 팀원의 LookAround.vue 수정된 코드를 이해하려 했으나, 나의 자바스크립트 실력이 미천하여 코드 리딩에 진전을 보지 못했습니다. 미안합니다. 일요일엔 개인적인 약속이 있어 작업을 하지 못합니다. 월요일에 이 문제에 대해 의논했으면 합니다.

## 12월 3일 작업내용
1. 김호가 토요일에 보고한 두 개의 소스코드 프런트코드에 반영완료. 깃에 업로드 완료.

##12월 4일 작업내용
1. 어제 회의에서 논의된 피피티 수정완료.
2. UserPlanet.vue 에 axios import시킴.
3. 황채린이 카톡으로 추가 요청한 것 반영완료
4. ppt 카로셀 높이 수정.