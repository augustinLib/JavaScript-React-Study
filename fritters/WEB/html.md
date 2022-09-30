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
