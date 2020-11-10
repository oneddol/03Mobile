<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>모바일화면</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
</head>
<body>
    <div id="wrap">
        <header id="header">
            <div class="row">
                <div id="menu" class="openMenu">
                    <i class="fas fa-bars"><span class="blind">메뉴열기</span></i>
                </div>
                <div id="navWrap">
                    <nav id="lnb">
                        <div class=choose><span>↓Choose↓</span></div>
                        <ul class="menuBox">
                            <li><a href="kor.html" class="part6">한식</a></li>
                            <li><a href="western.html" class="part1">양식</a></li>
                            <li><a href="china.html" class="part5">중식</a></li>
                            <li><a href="jap.html" class="part4">일식</a></li>
                            <li><a href="buffet.html" class="part3">뷔페</a></li>
                            <li><a href="etc.html" class="part2">기타</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="closeMenu">
                    <i class="far fa-window-close"><span class="blind">메뉴닫기</span></i>
                </div>
                <div class="logo">
                    <a href="main.html">
                       <div class="logoBox"></div>
                       <span>서초구 음식점</span>
                    </a>
                </div>
                <div class="search">
                    <a href="#">
                        <i class="fas fa-search"><span class="blind">검색버튼</span></i>
                    </a>
                </div>
                <div class="searchBox">
                    <div class="searchWrap">
                        <select name="category" id="">
                            <option value="title">--선택--</option>
                            <option value="all">전체</option>
                            <option value="kor">한식</option>
                            <option value="western">양식</option>
                            <option value="china">중식</option>
                            <option value="jap">일식</option>
                            <option value="buffet">뷔페</option>
                            <option value="etc">기타</option>
                        </select>
                        <input type="text" placeholder="검색할 메뉴를 입력해주세요.">
                        <button type="button" class="sOpen"><i class="fas fa-search"></i></button>
                        <button type="button" class="sClose"><i class="fas fa-times"></i></button>
                    </div>
                </div>
            </div>
        </header>

        <section id="container">
        </section>

        <footer id="footer">
            <div class="quickMenu">
                <a href=""><i class="fas fa-sms"><span class="blind">카톡문의</span></i></a>
                <a href="mailto:wonseok88e@naver.com"><i class="far fa-envelope"><span class="blind">이메일보내기</span></i></a>
                <a href=""><i class="fas fa-home"><span class="blind">홈화면으로 가기</span></i></a>
                <a href="#"><i class="fab fa-facebook-f"><span class="blind">페이스북</span></i></a>
                <a href="#"><i class="fab fa-instagram"><span class="blind">인스타그램</span></i></a>
            </div>
            <div class="copyright">
                &copy;Oneddol. All rights reserved.
            </div>
        </footer>
    </div>
    <div id="onlyMobile">
        해당 화면은 모바일환경(768px 이하)에서 확인 가능합니다.
    </div>

    <script src="js/main.js"></script>
</body>
</html>