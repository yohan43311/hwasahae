const test_data = [
    {
        number : 1,
        product : "glass",
        name : "천비전",
        status : "배송중",
    },
    {
        number : 1,
        product : "glass",
        name : "천비전",
        status : "배송중",
    }]
window.onload = function(){
    // 1. 화면이 호출되면 백엔드로 부터 데이터를 호출한다. (0)
    // 2. 받은 데이터를 제어하여 원하는 방식으로 만든다 (유효성, 조작)
     // -> 원하는 방식으로 만드는것보다 백엔드가 원하는 방식으로 주는것이 더좋다..
     // ex. date (백엔드가 완성되면 협업을 통해서 풀어나가)
     // 3. html elements를 만들어서 데이터를 랜더링해준다.
     //1
     //2
     //3
     console.log('천비전바보')
     const element_list = test_data.reduce((prev,cur,index,arr)=>{
        const row = `
        <th>${cur['number']}</th>
        <td>${cur['product']}</td>
        <td>${cur['name']}</td>
        <td>${cur['status']}</td>   
    `
        prev.push(row)
        return prev
     },[])
     console.log(element_list)
     for (let r of element_list){
        console.log(r)
        appendHtml(r)
     }
}

const appendHtml = (row_text)=>{
const temp = document.createElement("tr");
temp.innerHTML = row_text
document.querySelector(".table table-hover").append(temp);
}