
   //상품 이미지 추가.
   const img_box = document.querySelector('.img_box')
   const imgBox = new Image();
   imgBox.src = 'http://skincure.co.kr/shopimages/skincure/0550040001062.jpg?1679875372'
   img_box.appendChild(imgBox)

//구매 관련 폼
const info = document.querySelector('.info')

const item_date = {title:"순한 클랜징 동백 오일",price:23000,discount:32000,reserves:1,volume:200};

//갯수
let item_su = 1

//토탈금액 물픔금액 * 갯수
let total_price = () =>{
    const total_num = item_date.price * item_su
    return total_num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}


 info.innerHTML = `
    <h3 class="tit-prd">${item_date.title}</h3> 
    <ul class="itemInfo">
        <li>
            <span class="tb-left">판매가격</span>
            <div class="tb-left tb-left-in"><span class="pricevalue" id="price">${item_date.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>원</div>
        </li>
        <li>
            <span class="tb-left">소비자가격</span>
            <div class="tb-left tb-left-in"><strike>${item_date.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</strike></div>
        </li>
        <li>
            <span class="tb-left">적립금</span>
            <div class="tb-left tb-left-in reserves"><span class="pricevalue">${item_date.reserves}</span>%</div>
        </li>
        <li>
            <span class="tb-left">용량 및 중량</span>
            <div class="tb-left tb-left-in reserves"><span class="pricevalue">${item_date.volume}</span>ml</div>
        </li>
    </ul>
    <div class="option_add_area">
        <ul>
            <li>${item_date.title}</li>
            <li>
            <input type="text" class="item_many" id="MS_amount_basic_0" name="amount[]" value=${item_su} onfocusout="set_amount(this, 'basic');" size="4" style="text-align: right; float: left;" class="basic_option" maxlength="" data-gtm-form-interact-field-id="0">
            <span class="plus area_btn">+</span>
            <span class="minus area_btn">-</span>
            <strong class="MK_price"><span id="MK_p_price_basic_0">${item_date.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>원</strong>
            </li>
        </ul>
    </div>
    <div>
    <ul id="MK_innerOptTotal">
        <li>
        <p class="totalLeft"><span class="MK_txt-total">총 상품 금액</span></p>
        <p class="totalRight">
            <strong class="MK_total" id="MK_p_total"></strong>
            <span class="MK_txt-won">원</span>
        </p>
        </li>
    </ul>
    </div>
    <div class="cboth prd-btns">
    <a href="javascript:예정" class="buy move">BUY NOW</a>
    <a id="cartBtn" href="javascript:예정;" class="basket move">CART</a>
    <a id="wishBtn" href="javascript:예정;" class="wish move">WISH LIST</a>
    </div>
`

//제품수량 증가 및 감소
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const item_many = document.querySelector('.item_many')
const item_total = document.querySelector('#MK_p_total') 
item_total.innerHTML = item_date.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

plus.addEventListener('click', () => {
        item_su = item_su+1
        item_many.value = item_su
        item_total.innerHTML = total_price()
})
minus.addEventListener('click', () => {
    if(item_many.value == 1){
        item_many.value = 1
        return alert("최소수량 입니다")}


    item_su = item_su-1
    item_many.value = item_su
    item_total.innerHTML = total_price()
})

//디테일 이미지. url
const detail_div = document.querySelector('.detail_img') 
const detail_text = document.querySelector('.item_detail>div:first-child')
//위에는 선택자

const detail_img = new Image();
detail_img.src = 'http://sandawha.com/sandawha/detail/Sandawha-Natural-Mild-Cleansing-Oil_01.jpg'
detail_div.appendChild(detail_img)

//아래는 상세페이미지가 
detail_img.onload = function() { // 이미지로딩 성공했을때
    detail_text.style.width = detail_div.offsetWidth + "px";
}
detail_img.onerror = function() {
    // 이미지 로딩 중 오류가 발생한 경우 실행할 코드를 여기에 작성합니다.
    alert("이미지 로드 오류")
};



//데이터를 보내려면 어떻게 준비해야할까?
// json.body 값으로 보냄
