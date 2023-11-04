    const header = document.querySelector('.header');

    //카트 숫자넘버 그려지기전에 넣어둬야 작동한다.
    let cart_num = 1

        // 네비 메뉴
        const menu = [
            { text: "상 품", link: "/products" },
            { text: "주문 하기", link: "/itemset" },
            //{ text: "고객 센터", link: "/customer-service" }
        ];
        // 메뉴 아이템을 생성하는 함수
        const menu_li = () => {
            const menuItems = menu.map(item => `<li><a href="${item.link}" onclick="route()">${item.text}</a></li>`);
            return menuItems.join(''); // 배열을 문자열로 결합하여 반환
        };



    header.innerHTML = `
    <div class="header_section">
        <div>
            <ul>
                <li class="main_login_btn">로그인</li>
                <li class="main_user_join">회원가입</li>
            </ul>
        </div>
        <div class="main_top_logo"></div>
        <div class="header_right_area">
        <ul>
            <li class="search_open">
                <form action="/" method="post" name="/">
                    <fieldset>
                    <input name="search" placeholder="비타민 존맛탱"  onkeydown="함수명대체할것." value="" class="MS_search_word">
                    <a href="javascript:search_submit();" class="search_btn"></a>
                    </fieldset>
                </form>
            </li>
            <li class="top_myp"></li>
            <li class="top_cart">
            <span id="user_basket_quantity" class="user_basket_quantity">${cart_num}</span>
            </li>
        </ul>
        </div>
    </div>
    <nav>
        <ul>
            ${menu_li()}
        </ul>
    </nav>
    `;

    // 로그인 / 회원가입 클릭 이벤트 링크연결.
    const login_link = document.querySelector('.main_login_btn');
    const main_user_join = document.querySelector('.main_user_join')

    login_link.addEventListener('click', () => {
        window.location.href = '/main.html'; //추후 룅크변경
    });
    main_user_join.addEventListener('click', () => {
        window.location.href = '/main.html'; //추후 룅크변경
    });

    //메인로고 넣기
    const main_log = document.querySelector('.main_top_logo')
    const mainImg = new Image();
    mainImg.src = 'http://skincure.co.kr/design/skincure/0759ansome/top_logo.gif';
    main_log.appendChild(mainImg)

    main_log.addEventListener('click', () => {
        window.location.href = '/index.html'; // 메인 페이지의 URL을 여기에 지정
    });
    //서치 돋보기 버튼
    const search_btn = document.querySelector('.search_btn');
    const search_btn_img = new Image();
    search_btn_img.src = 'http://skincure.co.kr/design/skincure/0759ansome/btn_search.png';
    search_btn.appendChild(search_btn_img)

    search_btn.addEventListener('click', () => {
        window.location.href = '/index.html'; //추후 돋보기 룅크변경
    });

    //사람 아이콘
    const top_myp = document.querySelector('.top_myp');
    const mypImg = new Image();
    mypImg.src = 'http://skincure.co.kr/design/skincure/0759ansome/btn_mypage2.gif'
    top_myp.appendChild(mypImg)

    top_myp.addEventListener('click', () => {
        window.location.href = '/index.html'; //추후 룅크변경
    });

    //카트 아이콘
    const top_cart = document.querySelector('.top_cart');
    const cartImg = new Image();
    cartImg.src = 'http://skincure.co.kr/design/skincure/0759ansome/btn_cart2.gif'
    top_cart.appendChild(cartImg)

    top_cart.addEventListener('click', () => {
        window.location.href = '/index.html'; //추후 룅크변경
    });


// 위에는 헤더바 아래는 푸터바
const footer = document.querySelector('footer');
footer.innerHTML = `
<div class="ft_sec01">
    <div class="bt_inner">
        <ul class="fleft">
            <li><a href="/shop/page.html?id=1">회사소개</a><span class="bt_bar">|</span></li>
            <li><a href="/html/info.html">이용가이드</a><span class="bt_bar">|</span></li>
            <li><a href="javascript:bottom_privacy();" style="color:#ac1818; font-weight:700;">개인정보처리방침</a><span class="bt_bar">|</span></li>
            <li><a href="javascript:view_join_terms();">이용약관</a></li>
        </ul>
        <ul class="fright">
            <li><a href="https://www.skincure.co.kr">홈으로</a><span class="bt_bar">|</span></li>
            <li><a href="#">위로가기</a><span class="bt_bar">|</span></li>
            <li><div class="familySite">
        <select name="number" onchange="window.open(this.value)">
            <option selected="selected">Family Site</option>
            <option value="http://eskincure.co.kr">스킨큐어 기업 홈페이지</option>
            <option value="http://eskincure.com">스킨큐어 영문 홈페이지</option>
            <option value="http://en.skincure.co.kr/">스킨큐어 영문 쇼핑몰</option>
            <option value="http://www.skincure.kr">B2B 도매홈페이지</option>
        </select>
                </div></li>
        </ul>
    </div>
</div>
<div class="cboth ft_sec02">
		<div class="bt_inner">
			<div class="fleft cs_area">
				<div class="tit_cs">고객센터</div>
				<div class="cs_sec"><!-- CUSTOMER CENTER : 정보 -->
					<div class="fleft ft_phone">1544-5439</div>
					<div class="fleft cs_info">운영시간: 월~금 AM 09:00 - PM 5:30  /  점심시간: PM 12:20 - PM 1:20<br><span class="bk">휴무: 토,일,공휴일</span></div>
				</div>
			</div>

			<div class="fleft bank_area">
				<div class="tit_bank">무통장 입금 계좌</div>
				<div class="bk_sec"><!-- BANK ACCOUNT : 정보 -->
					<div class="fleft bank_info">국민은행 : 290301-04-006396</div>
				</div>
			</div>

			<div class="fleft return_area">
				<div class="tit_return">반품/교환 주소 안내</div>
				<div class="rt_sec"><!-- 반품주소안내 -->
					<div class="fleft rt_info">경기도 용인시 수지구 신수로 767, A동 10층 1007호(동천동, 분당 수지 U-TOWER)<br><span>자세한 사항은 문의게시판 혹은 공지사항을 참고해주세요</span></div>
				</div>
			</div>
		</div>
	</div>
    <div class="cboth ft_sec03">
		<div class="bt_inner">
			<div class="fleft com_info">
				상호명 : 스킨큐어(주)  /  대표이사 : 김명옥  /  경기도 용인시 수지구 신수로 767, A동 10층 1007호(동천동, 분당수지 U-TOWER)  /  1544-5439  /  FAX : 031-719-5202 <br>
				사업자등록번호 : 123-86-09894 <a href="https://www.ftc.go.kr/www/biz/bizCommList.do?key=5375&amp;searchCnd=wrkr_no&amp;searchKrwd=1238609894" target="_blank">[사업자정보확인]</a>  /  개인정보 책임자 : 김정기(<a href="mailto:msd02@skincure.co.kr">msd02@skincure.co.kr</a>)  /  통신판매업신고 : 제 2016-용인수지-0385 호			</div>
			<div class="cboth copyright">COPYRIGHT BY 스킨큐어(주) ALL RIGHTS RESERVED. <!--Hosting by (주)코리아센터닷컴--></div>
			<span class="escrow"><div class="ft-escrow">                <a href="http://www.skincure.co.kr" onclick="window.open('https://okbfex.kbstar.com/quics?e2eType=10&amp;page=C021590&amp;cc=b034066%3Ab035526&amp;mHValue=54e0922d4df6a7693fb792989984b118201609091343851 ', 'escrow', 'height=670,width=630'); return false;">
            <!-- 하단 에스크로 배너 링크수 삭제-->
                </a><!-- 하단 에스크로 배너 링크수정 -->
		</div>
	</span></div><!-- //ft_sec03 -->
    </div>
    `