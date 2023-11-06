const test_data = [
    {
        id : 1,
        title : "천비전1",
        name : "vision 55",
        date : "2023-10-12",
        hits : 9,
    },
    {
        id : 1,
        title : "ㅋ 1",
        name : "vision 55",
        date : "2023-10-12",
        hits : 9,
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
            <td class="center">${cur['id']}</td>
            <td class="left">${cur['title']}</td>
            <td class="center">${cur['name']}</td>
            <td class="center">${cur['date']}</td>
            <td class="center">${cur['hits']}</td>   
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
    document.querySelector(".noticeGrid").append(temp);
}