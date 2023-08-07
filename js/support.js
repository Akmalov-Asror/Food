

//     ITS FOR NAV MENU 
const toggleButton4 = document.getElementById('toggleButton-4');
const toggleButton5 = document.getElementById('toggleButton-5');
const toggleButton6 = document.getElementById('toggleButton-6');
const toggleButton7 = document.getElementById('toggleButton-7');
const toggleButton8 = document.getElementById('toggleButton-8');
const li1 = document.querySelectorAll('.li-1');
const tab = document.querySelectorAll('.tabs__item-button');
const icn = document.querySelectorAll('.style-icons');
let ID = randomNUmber(30000, 100000);
li1.forEach(function(element){
    element.addEventListener('click', open);
});
function open(evt){
    const li2 = evt.currentTarget;
    icn.forEach(function(item){
        item.classList.remove('style-icons--active');   
    });

    tab.forEach(function(item){
        item.classList.remove('tabs__item-button--active');
    });

    li1.forEach(function(item){
        item.classList.remove('li-1--active');
    });

    li2.classList.add('li-1--active');
    // console.log(li2);
    let button = li2.children[0];
    button.classList.add('tabs__item-button--active');
    let icon = li2.children[0].children[0];
    icon.classList.add('style-icons--active');
    
}



const wDiv = document.getElementById('bg__color-1');
const tButton = document.getElementById('toggleButton');

// |{Cart button items }| \\
const windowItemActive = document.getElementById('windowDiv');

wDiv.addEventListener('click', function(e) {
    wDiv.classList.remove('bg__color--active');
    windowItemActive.classList.remove('window__item--active');
});

const mainDiv = document.getElementById('mainAction');
const select1 = document.getElementById('select');
const imgSelect = document.querySelector('.img-item');
const newOption = select1.children[2]; 
mainDiv.addEventListener('click', function(e) {
    if(e.target !== select1){
        select1.classList.remove('choose__select--active');
        newOption.classList.remove('menu-btn--active');
    };
});     


const functionDiv = document.getElementById('functionDiv');
const toggleButton2 = document.getElementById('toggleButton-2');

let toggleButton2isActive = false;

toggleButton2.addEventListener('click', function() {
    functionDiv.classList.toggle('function--active');   
    if (wDiv.classList.contains('bg__color--active')) {
        informationDiv.classList.remove('information--active'); 
        functionDiv.classList.remove('function--active');   
    }
    if (wDiv.classList.contains('bg__color--active')) {
        informationDiv.classList.remove('information--active'); 
        orderDiv.classList.remove('order--profile-or-burger--active'); 
    }
    if (functionDiv.classList.contains('function--active') === false) {
        li1.forEach(li => {
            li.classList.remove('li-1--active');
        });
        li1[1].classList.add('li-1--active');
        tab.forEach(tabBtn => {
            tabBtn.classList.remove('tabs__item-button--active');
        });
        tab[1].classList.add('tabs__item-button--active');
    
        icn.forEach(icon => {
            icon.classList.remove('style-icons--active');
        });
        icn[1].classList.add('style-icons--active');
    }

});



wDiv.addEventListener('click', function(e) {
    wDiv.classList.remove('bg__color--active');
    functionDiv.classList.remove('function--active');
    li1.forEach(li => {
        li.classList.remove('li-1--active');
    });
    li1[1].classList.add('li-1--active');

    tab.forEach(tabBtn => {
        tabBtn.classList.remove('tabs__item-button--active');
    });
    tab[1].classList.add('tabs__item-button--active');

    icn.forEach(icon => {
        icon.classList.remove('style-icons--active');
    });
    icn[1].classList.add('style-icons--active');
});


///-------------------------------------------\\\\

const profileDiv = document.getElementById('profileDiv');
const toggleButton3 = document.getElementById('toggleButton-3');


wDiv.addEventListener('click', function() {
    wDiv.classList.remove('bg__color--active');
    profileDiv.classList.remove('profile--active');
});

const defaultBtn = document.getElementById('default');
const toggle = document.getElementById('toggle-3');
const toggleButtonIcon3 = document.getElementById('toggleButtonIcon-3');
const toggleButtonIcon4 = document.getElementById('toggleButtonIcon-4');

toggleButton3.addEventListener('click', function(){
    if (profileDiv.classList.contains('profile--active')) {
        profileDiv.classList.toggle('profile--active');
        wDiv.classList.add('bg__color--active');
    }else{
        profileDiv.classList.toggle('profile--active');
        wDiv.classList.remove('bg__color--active');
    }
    if (!toggleButton3.classList.contains('tabs__item-button--active')) {
        functionDiv.classList.remove('function--active');
        windowItemActive.classList.remove('window__item--active');
        orderDiv.classList.remove('order--profile-or-burger--active'); 
        informationDiv.classList.remove('information--active'); 
        if (!wDiv.classList.contains('bg__color--active')) {
            wDiv.classList.add('bg__color--active');
        }
        else {
            wDiv.classList.remove('bg__color--active');
        }
    } else {
        if (!wDiv.classList.contains('bg__color--active')) {
            wDiv.classList.add('bg__color--active');
        } else {
            wDiv.classList.remove('bg__color--active');
        }
    functionDiv.classList.remove('function--active');
    windowItemActive.classList.remove('window__item--active');
    orderDiv.classList.remove('order--profile-or-burger--active'); 
    informationDiv.classList.remove('information--active'); 
    
    }
});



toggleButton2.addEventListener('click', function(){
    if (!toggleButton2.classList.contains('tabs__item-button--active')) {
        if (!wDiv.classList.contains('bg__color--active')) {
            wDiv.classList.add('bg__color--active');
        }
        else {
            wDiv.classList.remove('bg__color--active');
        }
        profileDiv.classList.remove('profile--active');
        windowItemActive.classList.remove('window__item--active');
    }else{
        if (!wDiv.classList.contains('bg__color--active')) {
            wDiv.classList.add('bg__color--active');
        }
        else {
            wDiv.classList.remove('bg__color--active');
        }
    profileDiv.classList.remove('profile--active');
    windowItemActive.classList.remove('window__item--active');
    }
});
const clientDiv = document.getElementById('clientDiv');

tButton.addEventListener('click', function(){
    windowItemActive.classList.toggle('window__item--active');
    let localstorageElements = JSON.parse(localStorage.getItem('products')) || [];
    if (localstorageElements.length === 0) {
        if (windowItemActive.classList.contains('window__item--active')) {
            wDiv.classList.remove('bg__color--active');
        }
        
        if (!tButton.classList.contains('tabs__item-button--active')) {
            profileDiv.classList.remove('profile--active');
            functionDiv.classList.remove('function--active');
            clientDiv.classList.remove('client--orders--active');
            informationDiv.classList.remove('information--active'); 
            orderDiv.classList.remove('order--profile-or-burger--active'); 
            if (!wDiv.classList.contains('bg__color--active')) {
                wDiv.classList.add('bg__color--active');
            }
            else {
                wDiv.classList.remove('bg__color--active');
            }
        }else{
            if (!wDiv.classList.contains('bg__color--active')) {
                wDiv.classList.add('bg__color--active');
            }
            else {
                wDiv.classList.remove('bg__color--active');
            }
        profileDiv.classList.remove('profile--active');
        functionDiv.classList.remove('function--active');
        }
    }else{
        wDiv.classList.add('bg__color--active');
        clientDiv.classList.add('client--orders--active');
        windowItemActive.classList.remove('window__item--active');
        createProductHtml();        
    }
    
});

wDiv.addEventListener('click', function() {
    wDiv.classList.remove('bg__color--active');
    clientDiv.classList.remove('client--orders--active');
});


toggleButton4.addEventListener('click', function(){
    if (wDiv.classList[1] === 'bg__color--active') {
        wDiv.classList.remove('bg__color--active')
    };
    profileDiv.classList.remove('profile--active');
    functionDiv.classList.remove('function--active');
    windowItemActive.classList.remove('window__item--active');
    clientDiv.classList.remove('client--orders--active');
    informationDiv.classList.remove('information--active'); 
    orderDiv.classList.remove('order--profile-or-burger--active');
    paymentDiv.classList.remove('order--payment--active');
});
toggleButton5.addEventListener('click', function(){
    if (wDiv.classList[1] === 'bg__color--active') {
        wDiv.classList.remove('bg__color--active')
    };
    profileDiv.classList.remove('profile--active');
    functionDiv.classList.remove('function--active');
    windowItemActive.classList.remove('window__item--active');
    clientDiv.classList.remove('client--orders--active');
    informationDiv.classList.remove('information--active');
    orderDiv.classList.remove('order--profile-or-burger--active');
    paymentDiv.classList.remove('order--payment--active');
});
toggleButton6.addEventListener('click', function(){
    if (wDiv.classList[1] === 'bg__color--active') {
        wDiv.classList.remove('bg__color--active')
    };
    profileDiv.classList.remove('profile--active');
    functionDiv.classList.remove('function--active');
    windowItemActive.classList.remove('window__item--active');
    clientDiv.classList.remove('client--orders--active');
    informationDiv.classList.remove('information--active');
    orderDiv.classList.remove('order--profile-or-burger--active');
    paymentDiv.classList.remove('order--payment--active');
    
});
toggleButton7.addEventListener('click', function(){
    if (wDiv.classList[1] === 'bg__color--active') {
        wDiv.classList.remove('bg__color--active')
    };
    profileDiv.classList.remove('profile--active');
    functionDiv.classList.remove('function--active');
    windowItemActive.classList.remove('window__item--active');
    clientDiv.classList.remove('client--orders--active');
    informationDiv.classList.remove('information--active');
    orderDiv.classList.remove('order--profile-or-burger--active');
    paymentDiv.classList.remove('order--payment--active');
});
toggleButton8.addEventListener('click', function(){
    if (wDiv.classList[1] === 'bg__color--active') {
        wDiv.classList.remove('bg__color--active')
    };
    profileDiv.classList.remove('profile--active');
    functionDiv.classList.remove('function--active');
    windowItemActive.classList.remove('window__item--active');
    clientDiv.classList.remove('client--orders--active');
    informationDiv.classList.remove('information--active');
    orderDiv.classList.remove('order--profile-or-burger--active');
    paymentDiv.classList.remove('order--payment--active');
});

const funcInfo = document.getElementById('function-information');
const informationDiv = document.getElementById('informationDiv');

funcInfo.addEventListener('click', function(){
    informationDiv.classList.add('information--active');
    functionDiv.classList.remove('function--active');
});

wDiv.addEventListener('click', function() {
    wDiv.classList.remove('bg__color--active');
    informationDiv.classList.remove('information--active');
});

const orderInfo = document.getElementById('order-information');
const orderDiv = document.getElementById('orderDiv');

orderInfo.addEventListener('click', function(){
    orderDiv.classList.add('order--profile-or-burger--active');
    // console.log(orderDiv);
    functionDiv.classList.remove('function--active');
    // console.log(functionDiv);
});

wDiv.addEventListener('click', function() {
    wDiv.classList.remove('bg__color--active');
    orderDiv.classList.remove('order--profile-or-burger--active');
});

let total = 0;
function AddOrder(name, price, count, id, img) {
    let getIdByCart = JSON.parse(localStorage.getItem('products')) || [];
    let getIdByOrder = JSON.parse(localStorage.getItem('orders')) || [];
    const orderTitle = document.querySelector('.order-header-title');

    orderTitle.textContent = 'Orders #' + ID;
    console.log(ID);

    let existingItem = getIdByCart.findIndex((item) => item.id === id);
    if(existingItem !== -1){
        if (getIdByCart[existingItem].countable !== getIdByCart[existingItem].count) {
            getIdByCart[existingItem].countable++;
            let amount1 = parseFloat(getIdByCart[existingItem].amount);
            let price1 = parseFloat(getIdByCart[existingItem].price);
            amount1 += price1;
            getIdByCart[existingItem].amount = amount1;
        }else{
            alert(`${getIdByCart[existingItem].name}`+' maximum '+`${getIdByCart[existingItem].count}`);
        }
    }
    else {
        getIdByCart.push({
            name: name,
            price: price,
            count: count,
            id: id,
            img: img,
            countable: 1,
            amount: price,
        });
    };
    localStorage.setItem('products', JSON.stringify(getIdByCart));
}

function createProduct(pro) {
    let amountAll = '';
    if (pro.countable !== 1) {
        pro.amount.toFixed(2);
    } else {
        amountAll = pro.amount;
    }
    return`
    <div class="order__section" id="order--head">
    <div data-productid="${pro.id}">
        <div class="order__section--product">
            <div class="order-product">
                <img class="order-product-img" src="${pro.img}" alt="">
                <p class="order-product-text">${pro.name}</p>
            </div>
            <div class="order-product-price">
                <p class="order-product-price-p">$${(pro.price)}</p>
            </div>
        </div>
        <div class="order--count">
                <div class="order--count-bacground">
                    <button onclick="deleteOrder('${pro.id}')" class="btn-background">
                        <img class="img-background" src="images/minus.png" alt="">
                    </button>
                    <p class="order-number">${pro.countable}</p>
                    <button onclick="addOrder('${pro.id}')" class="btn-background">
                        <img class="img-background" src="images/plus.png" alt="">
                    </button>
                </div>
            <div class="order-count">
                <p id="product-sum" class="order-count-amount">$ ${pro.amount}</p> 
            </div>
        </div>
        <div class="input-order">
            <input placeholder="Please, just a little bit spicy only." class="description" type="">
            <button onclick="RemoveOrder('${pro.id}')" class="delete">
                <img class="img-background-1" src="images/Delete.svg" alt="">
            </button>
        </div>
        </div>
    </div>`;
}
function deleteOrder(removeproductId) {
    // console.log(removeproductId);
    let removecounter = document.querySelectorAll('.order-number');
    let removeOrderSum = document.querySelectorAll('.order-count-amount');
    let selectProductAllRemoveOrder = JSON.parse(localStorage.getItem('products')) || [];
    let existingItemRemoveOrder = undefined;

    // finding index of selected product
    selectProductAllRemoveOrder.forEach((element, indexOF) => {
        if (element.id === removeproductId) {
            existingItemRemoveOrder = indexOF;
        }
    });

    if (selectProductAllRemoveOrder !== -1) {

        if (selectProductAllRemoveOrder[existingItemRemoveOrder].countable !== 1) {
            selectProductAllRemoveOrder[existingItemRemoveOrder].countable--;
            let allSum = selectProductAllRemoveOrder[existingItemRemoveOrder].amount - selectProductAllRemoveOrder[existingItemRemoveOrder].price;
            selectProductAllRemoveOrder[existingItemRemoveOrder].amount = allSum;
            removecounter[existingItemRemoveOrder].innerHTML = selectProductAllRemoveOrder[existingItemRemoveOrder].countable;
            removeOrderSum[existingItemRemoveOrder].innerHTML = `$ ${selectProductAllRemoveOrder[existingItemRemoveOrder].amount.toFixed(2)}`
        }else{
            alert('its full');
        }
    }else{
        alert('wha are you doing')
    }
        saveProductsToLocalStorage(selectProductAllRemoveOrder);
        calculateTotalAllProducts();
}

function addOrder(addproductId) {
    // console.log(addproductId);
    let counter = document.querySelectorAll('.order-number');
    let addOrderSum = document.querySelectorAll('.order-count-amount');
    let selectProductAllAddOrder = JSON.parse(localStorage.getItem('products')) || [];
    let existingItemAddOrder = undefined;

    // finding index of selected product
    selectProductAllAddOrder.forEach((elem, index) => {
        if (elem.id === addproductId) {
            existingItemAddOrder = index;
        }
    })


    if (existingItemAddOrder !== -1) {
        if (selectProductAllAddOrder[existingItemAddOrder].countable !== selectProductAllAddOrder[existingItemAddOrder].count) {
            selectProductAllAddOrder[existingItemAddOrder].countable++;
            let allSum1 = selectProductAllAddOrder[existingItemAddOrder].price * selectProductAllAddOrder[existingItemAddOrder].countable;
            selectProductAllAddOrder[existingItemAddOrder].amount = allSum1;
            counter[existingItemAddOrder].innerHTML = selectProductAllAddOrder[existingItemAddOrder].countable;
            addOrderSum[existingItemAddOrder].innerHTML = `$ ${selectProductAllAddOrder[existingItemAddOrder].amount.toFixed(2)}`;
        }else{
            alert('its full');
        }
    }else{
        alert('debil')
    }
    saveProductsToLocalStorage(selectProductAllAddOrder);
    calculateTotalAllProducts();
}



function RemoveOrder(productId){
    let selectProducts = JSON.parse(localStorage.getItem('products')) || []; // Allproducts from localstorage
    selectProducts = selectProducts.filter(selectProduct => selectProduct.id !== productId);
    removeOrderFromHTML(productId);
    saveProductsToLocalStorage(selectProducts);
    if (selectProducts.length !== 0) {
        wDiv.classList.add('bg__color--active');
        clientDiv.classList.add('client--orders--active');
        windowItemActive.classList.remove('window__item--active');
    }else {
        wDiv.classList.add('bg__color--active');
        clientDiv.classList.remove('client--orders--active');
        windowItemActive.classList.add('window__item--active');
    }
    calculateTotalAllProducts();
}

function saveProductsToLocalStorage(products) {
    localStorage.setItem('products', JSON.stringify(products)); 
}
function saveOrdersToLocalStorage(orders) {
    localStorage.setItem('orders', JSON.stringify(orders)); 
}
const orderHead = document.getElementById('order--head'); //orderHead

function removeOrderFromHTML(productId) {
    const orderToRemove = document.querySelector(`[data-productid="${productId}"]`);
    orderToRemove.remove();
    
}

function createProductHtml() {
    let selectProduct = JSON.parse(localStorage.getItem('products')) || [];
    const productHtml = selectProduct.map(createProduct).join(' ');
    
    calculateTotalAllProducts();
    // let totalSum = document.querySelector('.total-sum');
    // let sum = calculateTotalAllProducts();
    // totalSum.textContent = sum;
    // totalSum.innerHTML = sum;
    
    let createProductDiv = document.querySelector('.create-product');
    createProductDiv.innerHTML = '';
    createProductDiv.insertAdjacentHTML('beforeend', productHtml);
    
}

function activeWindow(allProduct) {
    if (allProduct !== null) {
        wDiv.classList.add('bg__color--active');
        windowItemActive.classList.remove('window__item--active');
        clientDiv.classList.add('client--orders--active');
    }else{
        wDiv.classList.add('bg__color--active');
        clientDiv.classList.remove('client--orders--active');
        windowItemActive.classList.add('window__item--active');
    }
}

function calculateTotalAllProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    let total = 0;
    let totalSum = document.querySelector('.total-sum');
  
    for (const product of products) {
      const price = product.price;
      let sum = price * product.countable;
      total += sum;
    }

    totalSum.textContent = `$ ${total.toFixed(2)}`;
}


// watchAnyObject(
//     window.localStorage,
//     ['setItem', 'getItem', 'removeItem'],
//     (method, key, ...args) =>
//       console.log(`call ${method} with key ${key} and args ${args}`),
//     );

const connectionWindow = document.getElementById('window--connect--orders');

connectionWindow.addEventListener('click', function(){
    const yourAllProducts = JSON.parse(localStorage.getItem('products')) || [];
    if (yourAllProducts.length === 0) {
        alert('choose your products');
        wDiv.classList.remove('bg__color--active');
        windowItemActive.classList.remove('window__item--active');
    }else{
        wDiv.classList.add('bg__color--active');
        clientDiv.classList.add('client--orders--active');
    }
});

const backOrder = document.getElementById('back--order');

backOrder.addEventListener('click', function(){
    windowItemActive.classList.add('window__item--active');
    clientDiv.classList.remove('client--orders--active');
    console.log('sdfsbfbsjfbh');
});

const btn1 = document.getElementById('button-1');
const img1 = document.getElementById('imgActive-1');
const btn2 = document.getElementById('button-2');
const img2 = document.getElementById('imgActive-2');
const btn3 = document.getElementById('button-3');
const img3 = document.getElementById('imgActive-3');

btn1.addEventListener('click', function(){
    btn1.classList.add('order--payment-card--active');
    img1.classList.add('img-activator--active');
    if (btn2.classList[1] === ('order--payment-card--active') && img2.classList[1] === ('img-activator--active')) {
        btn2.classList.remove('order--payment-card--active');
        img2.classList.remove('img-activator--active');
    }
    else if (btn3.classList[1] === ('order--payment-card--active') && img3.classList[1] === ('img-activator--active')) {
        btn3.classList.remove('order--payment-card--active');
        img3.classList.remove('img-activator--active');
    }
});
btn2.addEventListener('click', function(){
    btn2.classList.add('order--payment-card--active');
    img2.classList.add('img-activator--active');
    if (btn1.classList[1] === 'order--payment-card--active' && img1.classList[1] === 'img-activator--active') {
        btn1.classList.remove('order--payment-card--active');
        img1.classList.remove('img-activator--active');
    }
    else if (btn3.classList[1] === 'order--payment-card--active' && img3.classList[1] === 'img-activator--active') {
        btn3.classList.remove('order--payment-card--active');
        img3.classList.remove('img-activator--active');
    }
});
btn3.addEventListener('click', function(){
    btn3.classList.add('order--payment-card--active');
    img3.classList.add('img-activator--active');
    if (btn1.classList[1] === 'order--payment-card--active' && img1.classList[1] === 'img-activator--active') {
        btn1.classList.remove('order--payment-card--active');
        img1.classList.remove('img-activator--active');
    }
    else if (btn2.classList[1] === 'order--payment-card--active' && img2.classList[1] === 'img-activator--active') {
        btn2.classList.remove('order--payment-card--active');
        img2.classList.remove('img-activator--active');
    }
});

const windowButtonDiv = document.getElementById('windowButtonDiv');
const paymentDiv = document.getElementById('paymentDiv');

windowButtonDiv.addEventListener('click', function () {
    wDiv.classList.add('bg__color--active');
    paymentDiv.classList.add('order--payment--active');
    clientDiv.classList.remove('client--orders--active');
});

wDiv.addEventListener('click', function(){
    paymentDiv.classList.remove('order--payment--active');
});
const cancel = document.getElementById('cancel');

cancel.addEventListener('click', function(){
    paymentDiv.classList.remove('order--payment--active');
    clientDiv.classList.add('client--orders--active');
});
function randomNUmber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function addorderNumber(){
    // const orderTitle = document.querySelector('.order-header-title');
        // let orderId = orderTitle.textContent.substring(8);
    let date = new Date();
    let formattedDate = getDateNow(date);
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    // console.log(ID);
    orders.push({
        id: ID , 
        date : formattedDate
    });
    
    // let productAll =  productRemove();
    // productAll.remove();
    saveOrdersToLocalStorage(orders);
    generateOrderHTML();
    localStorage.removeItem('products');
}
// function productRemove() {
//     const pro = JSON.parse(localStorage.getItem('products')) || [];
//     return pro
// }
function getDateNow(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayOfWeek = daysOfWeek[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    
    return `${dayOfWeek},${day} ${month} ${year}`;
}

function putOrderHtml(id, time){
    return `
    <div class="order--history-title">
    <h1 class="order--background-title">Orders #${id}</h1>
    <p class="order--background-text">${time}</p>
    </div>`;

}

function generateOrderHTML() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderHistoryHTML = orders.map((element) => putOrderHtml(element.id, element.date)).join(' ');

    const orderBackground = document.querySelector('.order--background');
    orderBackground.innerHTML = '';
    orderBackground.insertAdjacentHTML('beforeend', orderHistoryHTML);

}

const confirm = document.getElementById('gotoOrder');

confirm.addEventListener('click', addorderNumber());


window.addEventListener('load' , generateOrderHTML);

const cardNumberInput = document.getElementById('cardNumber');

cardNumberInput.addEventListener('input', formatCardNumber);

function formatCardNumber(event) {

    let input = event.target.value.replace(/\D/g, '');
    const cardNumberRegex = /(\d{4})(?=\d)/g;
    input = input.replace(cardNumberRegex, '$1 ');
    input = input.slice(0, 19);

    event.target.value = input;
}

const expirationDateInput = document.getElementById('expirationDate');

expirationDateInput.addEventListener('input', formatExpirationDate);

function formatExpirationDate(event) {
    let input = event.target.value.replace(/\D/g, ''); // Remove non-numeric characters

    if (input.length > 2) {
        const month = input.slice(0, 2);
        const year = input.slice(2, 6);
        input = `${month}/${year}`;
    }

    event.target.value = input;
}

const numberInput = document.getElementById('numberInput');

    numberInput.addEventListener('input', (event) => {
      const input = event.target;
      const value = input.value;

      // Remove any non-numeric characters
      const numericValue = value.replace(/\D/g, '');

      // Limit the input to 3 or fewer digits
      if (numericValue.length > 3) {
        // If more than 3 digits, update the input value with the first 3 digits
        input.value = numericValue.slice(0, 3);
      }
    });

const gotoClientOrder = document.getElementById('gotoClientOrder');

gotoClientOrder.addEventListener('click', function () {
    orderDiv.classList.add('order--profile-or-burger--active'); 
    profileDiv.classList.remove('profile--active');
});

const hamburger = document.getElementById('hamburger');

let previous;
function applyRadius(index) {
    const buttons = document.querySelectorAll('.li-1');

    // buttons.forEach((element) => element.classList.remove('border-bottom-right') && element.classList.remove('border-top-right') )
    if(previous){
    let p = previous.previousElementSibling;
    let n = previous.nextElementSibling;
    if(p){
    p.classList.remove('border-bottom-right')
    }
    if(n){
    n.classList.remove('border-top-right')
    }
    }

    index--;

    let previousSibling = buttons[index].previousElementSibling;
    let nextSibling = buttons[index].nextElementSibling;
    if(previousSibling){
        previousSibling.classList.add('border-bottom-right');
    }
    if(nextSibling){
        nextSibling.classList.add('border-top-right');
    }

    previous = buttons[index]

    // if (index > -1) {
    //     buttons[index - 1].classList.add('border-bottom-right');
    // }

    // if (index < buttons.length - 1) {
    //     buttons[index + 1].classList.add('border-top-right');
    // }
}

const back = document.getElementById('back');

back.addEventListener('click' , function(){
    if (functionDiv.classList.contains('function--active')) {
        functionDiv.classList.remove('function--active');
    }
    wDiv.classList.remove('bg__color--active');
});
const back2 = document.getElementById('back-2');
back2.addEventListener('click' , function(){
    if (toggleButton2.classList.contains('tabs__item-button--active')) {
        if(orderDiv.classList.contains('order--profile-or-burger--active')){
            orderDiv.classList.remove('order--profile-or-burger--active'); 
            if (!functionDiv.classList.contains('function--active')) {
                functionDiv.classList.add('function--active');
            }
        } 
    }else if (toggleButton3.classList.contains('tabs__item-button--active')) {
        if(orderDiv.classList.contains('order--profile-or-burger--active')){
            orderDiv.classList.remove('order--profile-or-burger--active'); 
            if (!profileDiv.classList.contains('profile--active')) {
                profileDiv.classList.add('profile--active');
            }
        }     
    }
});

const back3 = document.getElementById('back-3');
back3.addEventListener('click' , function(){
    if(informationDiv.classList.contains('information--active')){
        informationDiv.classList.remove('information--active'); 
        if (!functionDiv.classList.contains('function--active')) {
            functionDiv.classList.add('function--active');
        }
    } 
});

const back4 = document.getElementById('back-4');
back4.addEventListener('click', function () {
    if (windowItemActive.classList.contains('window__item--active')) {
        windowItemActive.classList.remove('window__item--active');
    }
    wDiv.classList.remove('bg__color--active');
});

const back5 = document.getElementById('back-5');
back5.addEventListener('click', function () {
    if (profileDiv.classList.contains('profile--active')) {
        profileDiv.classList.remove('profile--active');
    }
    wDiv.classList.remove('bg__color--active');
});
