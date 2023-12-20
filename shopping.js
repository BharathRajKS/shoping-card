

document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();

//-------------- input alert check alert message------------------------------

let count = 0;
    let productName = document.getElementById('productName').value;
    let amount = document.getElementById('amount').value;

    if (productName === '') {
        document.getElementById('producterror').textContent = 'Invalid Product Name';
        return;
    } 
    
    else {
        document.getElementById('producterror').textContent = '';
    }

    if (amount === '' || isNaN(amount)) {
        document.getElementById('amounterror').textContent = 'Invalid amount';
        return;
    } 
    
    else {
        document.getElementById('amounterror').textContent = '';
    }




// -----------------------product list function -------------------------


    let Listofdata = document.getElementById('data-lst');
    let newproducts = document.createElement('div');
    
    newproducts.className='newItem';
   
    if (count % 2 === 0) {
        newproducts.style.backgroundColor = 'rgba(99, 83, 159, 0.3';
    
    }


    let productlist = document.createElement('h5')
    productlist.className='list-name'
    productlist.textContent = productName; 
    let listamo = document.createElement('h5')

    listamo.classname='list-amt'
    listamo.textContent = amount;
    let deleteicn =document.createElement('li')
    deleteicn.className='fa-solid fa-trash'
    //   deleteicn.className =<i class="fa-solid fa-trash">

    newproducts.append(productlist,listamo)
    Listofdata.append(newproducts,deleteicn);
    count++;
  

    let totalAmount = parseFloat(document.getElementById('totalAmount').textContent);
    totalAmount += parseFloat(amount);
    document.getElementById('totalAmount').textContent = totalAmount;


    let plusfunction = parseFloat(document.getElementById('totalAmount').textContent);
    plusfunction += parseFloat(amount);
    document.getElementById('totalAmount').plus = plus;

    // let mines =parseFloat(document.getElementById("totalAmount").textContent)
    // mines -=parseFloat(amount);
    // document.getElementById("totalAmount") .mines = mines
});


// -------------------delete function 

// function DeleteIcon(newItem, dataList) {
//     let deleteicn = document.createElement('li');
//     deleteicn.className = 'fa-solid fa-trash';
//     deleteicn.style.color='#ff0000'
//     deleteicn.style.display = 'none';

//     deleteicn.addEventListener('click', function () {
//         dataList.removeChild(newItem);
//         updateTotalAmount();
//     });

//     return deleteicn;
// }

















































