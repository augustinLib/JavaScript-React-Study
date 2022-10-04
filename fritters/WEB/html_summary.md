# Memo for HTML 

> [레퍼런스: PoiemaWeb](https://poiemaweb.com) 

<br>

---
## HTML
---

### HTML5 New Features

<br> 

- Multimedia (플래시 없이 비디오 오디오 기능 지원-!)

- Graphics / Effects (SVG, Canvas, CSS3, WebGL)

- Connectivity

- Device Access

- Offline / Storage

- Semantics

- CSS3

<br>

### HTML 

<br>

- \<!DOCTYPE html> 

- \<html> ... \</html>

- \<head> ... \</head> : 표시  X

- \<body> ... \</body>


### Element

<br>


-  \<p> ... <\p>

- Nested Element 
    - Can be Superposited
- Empty Element
    - \<meta charset="utf-8">
    - \<br> \<hr> \<img> \<input> \<link> \<meta>
- Attribute
    - ex. \<img src(Attribute Name)="html.png" (Attribute Value)>
    - else, width, height 등등
- Comment 
    - \<!-- "DECR" -->

<br>

---
## Semantic Web
---

<br>

- non-semantic : div, span 등, No extra Description

- semantic : form, table, img

- HTML5 New semantic tags
    - header
    - nav
    - aside
    - section
    - article
    - footer

---
## Basic Tags
---
### tag

```
<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <title>문서 제목</title>
  </head>
  <body>
    화면에 표시할 모든 콘텐츠는 이곳에 기술한다.
  </body>
</html>
```
### Head 

- title tag
- style tag
```
<style>
    body {
        background-color: yellow;
        color: blue;
    }
</style>
```
- link tag
```
<link rel="stylesheet" href="style.css">
```
- meta tag
```
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">
<meta http-equiv="refresh" content="30">
```

---
## Text
---
### Text Formatting

- b tag
- strong tag (semantic meaning)
- i tag 
- em tag (italic, semantic)
- small 
- mark (highlight)
- del (취소선)
- ins (inserted)
- sub / sup : 위 첨자 아래 첨자

### 본문 태그

- <p></p>
- <br> : break line
- <pre> : pre tag 안은 작성된 그대로 표시됨! 엔터 모든 것 다 포함
- <hr> : --- 랑 같은 역할
- <q>: quote
- <blockquote> : > 랑 같은 역할

---
## Link
--- 
### href attribute
- ./ : 작업 중인 현재 디렉토리
- ../ : 부모 디렉터리 

- fragment identifier : 특정 id 요소에 링크 
    - ex. href = "#top" <!--id가 탑인 경우-->

### target attribute
- _blank : 새 탭 시작
    - ex. \<a href="http://www.google.com" target="_blank" rel="noopener noreferrer">
- _self : 현재 윈도우 (default)

---
## List
---
### List
- 순서가 없는 목록
```
    <ul> 
        <li></li>
    </ul> 
```
-  순서가 있는 목록
```
    <ol> 
        <li></li>
    </ul> 
```
- `type` attribute와 `value` 어트리뷰트로 커스터마이징 가능
```
<ol type="I">
  <li value="2">Coffee</li>
  <li value="4">Tea</li>
  <li>Milk</li>
</ol>
```
    - "1" "A" "a" "I" "i"
- `start` 어트리뷰트로 시작값 지정 가능
- `reversed` 어트리뷰트로 순서값 역으로 표시 가능
- 중첩도 가능~

### Table
- `src` 경로
- `alt` 이미지 파일 없는 경우 표시되는 문장
- `width` 너비
- `height` 높이 
    - 너비와 높이는 CSS에 저장하는 것이 일반적

---
## Forms
---
### form
- \<form></form> : 데이터 수집위해 사용
    - 내부에  input, textarea, button, select, checkbox, radio button, submit button 등 다양한 입력 양식 태그 포함 가능

- Attribute
    - `action` : URL 지정
    - `method` : get / post 입력 데이터 전달 방식 지정
    - GET : 전송 URL에 데이터 쿼리스트링으로 보냄
        - ?를 통해 데이터 시작 알려주고 key-value 형식으로 데이터 추가, 1개 이상의 데이터의 경우 "&"로 구분
        - 최대 255자
    - POST : request body에 담아 보냄
        - GET에 담아 보냄
        - 전송 데이터 URL에 노출 X

### input
- attribute `type`을 통해 종류 구분
- name을 key로 value를 attribute로 하여 서버로 전송
- type들
    - `button`
    - `checkbox`
    - `color`
    - `date`
    - `email`
    - `file`
    - `hidden`
    - `image`
    - `month`
    - `number`
    - `password`
    - `range`
    - `reset`
    - `search`
    - `submit`
    - `text`
    - `url`
    - `week`

### Select 
- 복수 개의 리스트에서 복수 개의 아이템 선택
- name : value key-value 형식으로 전송

- select 
- option
- optgroup

### textarea
- 여러 줄 글자 입력에 사용

### button
- 클릭 가능한 버튼

### fieldset / legend

---
## Structure
---
- tags : `div` `span` `table`
    - `div`가 일반적
    - but, `div`는 Semantic Meaning 없음
- `header`  : 헤더
- `nav`     : 내비게이션
- `aside`   : 사이드 공간
- `section` : 본문에 여러 내용 포함하는 공간 의미
- `article` : 본문 주 내용 들어가는 공간
- `footer`  : 푸터 의미