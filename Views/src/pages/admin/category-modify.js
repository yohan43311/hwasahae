
window.onload =function (){
    const receivedData = location.href.split('?')[1];
    console.log('카테고리 수정 페이지',typeof receivedData,receivedData)
    let params = receivedData.split('&')
    console.log('파람^^ ',params)
    const requestParameter =  params.reduce((prev,cur)=>{
        const v = cur.split('=')
        prev[v[0]] = decodeURI(v[1])
        console.log('브이 ',v,v[0],decodeURI(v[1]))
        return prev
    }, {})

    const categorychild = document.getElementById("categorychild");

    categorychild.value = requestParameter['categoryName'];

    // 1. fetch 해서 수정하기 fetch 보내기

    
    
window.close()

}

const postModifiedCategory = () => {
    var requestOptions = {
        method: 'PATCH',
        redirect: 'follow'
      };
      
      fetch("http://localhost:3000/admin/654b262458c7e8b239d796ae/category", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
} 