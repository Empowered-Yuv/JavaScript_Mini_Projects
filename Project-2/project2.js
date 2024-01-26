function getupdate() {
    tit = document.getElementById('Task').value
    desc = document.getElementById('Description').value
    if (localStorage.getItem('itemsJson')==null) {
        itemsJsonarr=[]
        itemsJsonarr.push([tit,desc])
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonarr))
    } else {
        itemsJsonstr=localStorage.getItem('itemsJson')
        itemsJsonarr = JSON.parse(itemsJsonstr)
        itemsJsonarr.push([tit,desc])
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonarr))
    }

  
    update()
}

function update() {
    if (localStorage.getItem('itemsJson')==null) {
        itemsJsonarr=[]
        localStorage.setItem('itemsJson',JSON.stringify(itemsJsonarr))
    } else {
        itemsJsonstr=localStorage.getItem('itemsJson')
        itemsJsonarr = JSON.parse(itemsJsonstr)
        
    }
    let tb=document.getElementById('tb');
    let str = ""
    itemsJsonarr.forEach((element, index) => {
        str += `
                    <tr>
                    <th scope="row">${index+1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td>
                    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Done</button></td>
                    </tr> `

                  
    });
    tb.innerHTML = str
}

function deleted(itemIndex) {
    itemsJsonstr=localStorage.getItem('itemsJson')
    itemsJsonarr = JSON.parse(itemsJsonstr)

    itemsJsonarr.splice(itemIndex, 1)

    localStorage.setItem('itemsJson',JSON.stringify(itemsJsonarr))

    update()
    
}

function cleared() {
    if (confirm("Do you really want to clear ? (It will clear your full list)")) {
        localStorage.clear()
        update()
    }
}
add=document.getElementById('add')

add.addEventListener('click',getupdate)
update()