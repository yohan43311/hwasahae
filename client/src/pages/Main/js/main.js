var swiper = new Swiper(".main_banner", {
    spaceBetween: 30,
    centeredSlides: true,
    loop:true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".main_swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".main_swiper-button-next",
      prevEl: ".main_swiper-button-prev",
    },
  });


// md 아이템 오브젝트 배열화

const mdItem = [
    {imgUrl:"/design/skincure/0759ansome/icon_prd04.gif",title:"비타민C화이트닝 에센스",price:660000,discount:450000},
    {imgUrl:"/design/skincure/0759ansome/icon_prd04.gif",title:"테스트3",price:660000,discount:450000},
    {imgUrl:"/design/skincure/0759ansome/icon_prd04.gif",title:"비타민C화이트닝 에센스",price:660000,discount:450000},
    {imgUrl:"/design/skincure/0759ansome/icon_prd04.gif",title:"비타민C화이트닝 에센스",price:660000,discount:450000}
]

const mdItemMap = mdItem.map(item=>`
    <td>
    <div class="tb-center">
        <div class="box">
            <div class="thumb salebox">
                <a href="/shop/shopdetail.html?branduid=100&amp;xcode=055&amp;mcode=004&amp;scode=012&amp;special=11&amp;GfDT=aWl3UQ%3D%3D"><img class="MS_prod_img_m" src="/shopimages/skincure/0550040000892.jpg?1679876830" alt="상품 섬네일"></a>
                <div class="info_icon">
                    <span><a href="javascript:viewdetail('055004000089', '1', '');"><img src="${item.imgUrl}" alt="미리보기"></a></span>                                                                            </div>
                <input type="hidden" name="custom_price" value="66000">
                <input type="hidden" name="product_price" value="37000">
                <div id="sale_bg" style="display: block;"><span class="sale_text">44%</span></div>
            </div>
            <ul class="info">
                <li class="dsc">${item.title}</li>
                <li class="subname">유기농 미백 보습 에센스!<br>
                </li><li class="price"><span class="consumer">66,000원</span>37,000원</li>
                                                                                        <li class="icon"><span class="MK-product-icons"></span></li>
            </ul>
        </div>
    </div>
    </td>
    `
).join('');

const md_md_item = document.querySelector('.main_md_item')
    md_md_item.innerHTML = mdItemMap

const itemList = [
    {imgUrl:"/design/skincure/0759ansome/icon_prd04.gif",title:"비타민C화이트닝 에센스",price:660000,discount:450000},
    {imgUrl:"/design/skincure/0759ansome/icon_prd04.gif",title:"비타민C화이트닝 에센스",price:660000,discount:450000},
    {imgUrl:"/design/skincure/0759ansome/icon_prd04.gif",title:"비타민C화이트닝 에센스",price:660000,discount:450000},
    {imgUrl:"/design/skincure/0759ansome/icon_prd04.gif",title:"비타민C화이트닝 에센스",price:660000,discount:450000},
    {imgUrl:"/design/skincure/0759ansome/icon_prd04.gif",title:"비타민C화이트닝 에센스",price:660000,discount:450000},
    {imgUrl:"/design/skincure/0759ansome/icon_prd04.gif",title:"비타민C화이트닝 에센스",price:660000,discount:450000},
    {imgUrl:"/design/skincure/0759ansome/icon_prd04.gif",title:"비타민C화이트닝 에센스",price:660000,discount:450000},
    {imgUrl:"/design/skincure/0759ansome/icon_prd04.gif",title:"비타민C화이트닝 에센스",price:660000,discount:450000},
    {imgUrl:"/design/skincure/0759ansome/icon_prd04.gif",title:"비타민C화이트닝 에센스",price:660000,discount:450000},
]

const itemListSet = itemList.map(item=>`
        <div class="prd-list">
        <table summary="상품이미지, 상품 설명, 가격">
        <tbody>
        <tr>
        <td>
        <div class="tb-center">
            <div class="box">
                <div class="thumb salebox">
                    <a href="/shop/shopdetail.html?branduid=365378&amp;xcode=055&amp;mcode=004&amp;scode=011&amp;special=1&amp;GfDT=aGZ3UQ%3D%3D"><img class="MS_prod_img_m" src="${item.imgUrl}" alt="상품 섬네일"></a>
                    <div class="info_icon">
                        <span><a href="javascript:viewdetail('055004000353', '1', '');"><img src="/design/skincure/0759ansome/icon_prd04.gif" alt="미리보기"></a></span>                                                                            </div>
                    <input type="hidden" name="custom_price" value="0">
                    <input type="hidden" name="product_price" value="24000">
                    <div id="sale_bg" style="display: none;"><span class="sale_text"></span></div>
                </div>
                <ul class="info">
                    <li class="dsc">${item.title}<br></li>
                    <li class="price">${item.price}원</li>
                    <li class="icon"><span class="MK-product-icons"></span></li>
                </ul>
            </div>
        </div>
        </tbody>
        </table>
        </div>
`).join('')

const allItem = document.querySelector('.swiper2_tabbox01')
    allItem.innerHTML =itemListSet