<h1 align="center">GreenPlate</h1>


> [플레이 데이터] 한화시스템 BEYOND SW캠프  
> 6기 3차 프로젝트 **팀 404x**
## 🤚 404x 팀원
<table>
 <tr>
    <td align="center"><a href="https://github.com/ohgyulim"><img src="https://avatars.githubusercontent.com/ohgyulim" width="150px;" alt=""></td>
    <td align="center"><a href="https://github.com/dyun23"><img src="https://avatars.githubusercontent.com/dyun23" width="150px;" alt=""></td>
    <td align="center"><a href="https://github.com/lrkdms125"><img src="https://avatars.githubusercontent.com/dlrkdms125" width="150px;" alt=""></td>
    <td align="center"><a href="https://github.com/winter0123"><img src="https://avatars.githubusercontent.com/winter0123" width="150px;" alt=""></td>
  </tr>
  <tr>
    <td align="center"><i>Team Leader</i><br><a href="https://github.com/ohgyulim"><b>오규림</b></td>
    <td align="center"><a href="https://github.com/dyun23"><b>김다윤</b></td>
    <td align="center"><a href="https://github.com/dlrkdms125"><b>이가은</b></td>
    <td align="center"><a href="https://github.com/winter0123"><b>장유정</b></td>
  </tr>
  </table>

## 📌 프로젝트 주제 
<div align="center">
   <img src="./img/greenplate.jpg" align="center"/>
</div> 

### 건강한 삶을 위한 나만의 식재료 추천 사이트 
레시피를 추천해주고, 레시피 속 필요한 재료를 한 번에 담을 수 있는 기능을 제공

레시피에 사용된 재료 각각의 칼로리를 보여주고, 장바구니에 상품을 담았을 때 장바구니에 담긴 전체 상품의 칼로리 합계를 보여주는 기능 

라이브 스트리밍과 커머스의 합성어인 라이브커머스 서비스 제공  
[추가 자료](https://github.com/beyond-sw-camp/be06-1st-404x-GreenPlate/wiki/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B0%9C%EC%9A%94)

## 🔧 기술 스택
프론트엔드  
![Vue.js](https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![pinia](https://img.shields.io/badge/Pinia-f7d336?style=for-the-badge&logoColor=black) ![NginX](https://img.shields.io/badge/NginX-009639?style=for-the-badge&logo=nginx&logoColor=white)  
백엔드  
![](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=Spring-Boot&logoColor=white) ![](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white) ![JWT](https://img.shields.io/badge/JWT-%232F7D32.svg?style=for-the-badge&logo=json-web-tokens&logoColor=white)  
DB  
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white) ![Amazon RDS](https://img.shields.io/badge/Amazon%20RDS-527FFF?style=for-the-badge&logo=Amazon%20RDS&logoColor=white) ![Redis](https://img.shields.io/badge/Redis-%23D92D2A.svg?style=for-the-badge&logo=redis&logoColor=white)  
클라우드  
![](https://img.shields.io/badge/Amazon%20EC2-FF9900?style=for-the-badge&logo=Amazon%20EC2&logoColor=white) ![](https://img.shields.io/badge/Amazon%20S3-569A31?style=for-the-badge&logo=Amazon%20S3&logoColor=white)  
협업 툴  
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Notion](https://img.shields.io/badge/Notion-%23000000.svg?style=for-the-badge&logo=notion&logoColor=white)  ![Figma](https://img.shields.io/badge/Figma-%232C2E3A.svg?style=for-the-badge&logo=figma&logoColor=white)

## 🖥️ 화면설계서
- <a href="https://www.figma.com/design/1PVF5jM6ozQJ8CNJUQmiTf/greenplate-%ED%99%94%EB%A9%B4-%EC%84%A4%EA%B3%84%EC%84%9C?node-id=0-1&t=W8U2BEQUvvUK2I7B-0">Figma 화면 설계서</a> 
<br/><br/>

## 🔧 시스템 아키텍처
<img src="img/시스템_아키텍처.png" alt="시스템 아키텍처" style="width:75%;"/>
<details>
<summary> Amazon RDS </summary>
 
- 별도의 설치과정 없이 편리하게 DB를 구성하기 위해 Amazon RDS를 사용했습니다.
</details>

<details>
<summary> Amazon S3 </summary>

- 상품의 썸네일, 상세 이미지 등 상품과 관련된 이미지를 저장하기 위해 S3를 사용하였습니다.
</details>

<details>
<summary> Backend Server </summary>

- EC2를 이용하여 서버를 배포했습니다.
- 동일한 EC2에 In-Memory 기반의 DB인 Redis 서버를 설치하여 이메일 인증을 빠르게 처리할 수 있도록 하였습니다. 또한, 데이터에 유효 시간(3분)을 설정하여 유효 시간이 지난 데이터는 자동으로 삭제되도록 처리했습니다.
</details>
<details>
<summary> Frontend Server </summary>

- Frontend Server와 Backend Server는 각각 다른 인스턴스에서 실행되고 있기 때문에 CORS 에러 없이 통신하기 위해서 Proxy Pass 기능이 필요했습니다.
- 이 기능을 위해 EC2에 Nginx를 실행시켰습니다.
</details>
<details>
<summary> PortOne </summary>

- 상품 결제를 위해 PG사의 결제 대행 서비스 중 하나인 PortOne을 사용하였습니다.
</details>

## ⭐ 접속 주소
- [접속 주소](http://greenplate.s3-website.ap-northeast-2.amazonaws.com)

## ✨ 기능 테스트
<details>
<summary> User </summary>

### 회원가입
![](/img/기능구현/유저_회원가입.gif)
### 로그인
![](/img/기능구현/유저_로그인.gif)
</details>
<details>
<summary> Company </summary>

### 회원가입
![](/img/기능구현/사업자_회원가입.gif)
### 로그인
![](/img/기능구현/사업자_로그인_상품수정.gif)
</details>
<details>
<summary> Item </summary>

### 상품조회
![](/img/기능구현/상품_조회.gif)
### 상품검색
![](/img/기능구현/상품_검색.gif)
### 장바구니 담기
![](/img/기능구현/상품_장바구니.gif)
### 상품 등록
![](/img/기능구현/상품_등록.gif)
</details>
<details>
<summary> Cart </summary>

### 장바구니 페이지
![](/img/기능구현/장바구니.gif)
</details>
<details>
<summary> Order </summary>

### 카카오페이 결제
![](/img/기능구현/카카오페이_결제.gif)
### 카카오페이 환불
![](/img/기능구현/카카오페이_결제환불.gif)
</details>
<details>
<summary> Recipe </summary>

### 레시피 등록
![](/img/기능구현/레시피_작성.gif)
### 레시피 목록
![](/img/기능구현/레시피_리스트조회.gif)
### 레시피 상세
![](/img/기능구현/레시피_상세조회.gif)
</details>
<details>
<summary> Mypage(User)  </summary>

### 주문내역
![](/img/기능구현/마이페이지_주문내역.gif)
### 주소
![](/img/기능구현/마이페이지_주소.gif)
### 키워드
![](/img/기능구현/마이페이지_키워드.gif)
</details>
<details>
<summary> Mypage(Company)  </summary>

### 주문관리
![](/img/기능구현/사업자_주문관리.gif)
### 주문관리-송장번호입력
![](/img/기능구현/사업자_송장번호입력.gif)
### 상품등록
![](/img/기능구현/상품_등록.gif)
### 상품목록 조회/수정
![](/img/기능구현/사업자_상품목록_조회수정.gif)
</details>
