var SiteName = document.getElementById("SiteName")
var siteUrl = document.getElementById("siteUrl")
var Container;
if (localStorage.getItem('list') != null) {
    Container = JSON.parse(localStorage.getItem('list'));
    displayData(Container);
}

else {
    var  Container = [];


}


function Submit() {
    var product = {
        SName: SiteName.value,
        SUrl: siteUrl.value,

    }
    console.log(product);
    Container.push(product)
    localStorage.setItem('list', JSON.stringify(Container)),
        clear()
    console.log(Container)
    displayData(Container)

}

function clear() {
    SiteName.value = "";
    siteUrl.value = "";
}



function displayData(list) {
    var temp = ``
    for (let i = 0; i < list.length; i++) {
        temp += `  <tr>
        <td>${i}</td>
        <td>${list[i].SName}</td>
        
        <td><a href="${list[i].SUrl}" target="_blank" id=""><button class=" btn btn-outline-dark btn-primary">Vist </button></a></td>
        <td> <button onclick="deleteItem(${i})" class=" btn btn-outline-dark btn-danger">delete </button></td>
    </tr>
`
    }
    document.getElementById('mytable').innerHTML = temp;

}


function deleteItem(index) {
    Container.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(Container));
    displayData(Container);


}