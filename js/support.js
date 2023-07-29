
const li1 = document.querySelectorAll('.li-1');
const tab = document.querySelectorAll('.tabs__item-button');
const icn = document.querySelectorAll('.style-icons');
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

toggleButton2.addEventListener('click', function(e) {
    functionDiv.classList.toggle('function--active');
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

toggleButton3.addEventListener('click', function(e){
    profileDiv.classList.toggle('profile--active');

    if (toggleButton3.classList[1] !== 'tabs__item-button--active') {
        functionDiv.classList.remove('function--active');
        windowItemActive.classList.remove('window__item--active');
        if (wDiv.classList[0] !== 'bg__color--active') {
            wDiv.classList.add('bg__color--active');
        }
    }else{
        if (wDiv.classList[1] === 'bg__color--active') {
            wDiv.classList.remove('bg__color--active');
        }
    functionDiv.classList.remove('function--active');
    windowItemActive.classList.remove('window__item--active');
    }
    console.log(profileDiv.classList[1] !== 'profile--active');
    if(profileDiv.classList[1] !== 'profile--active'){
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



toggleButton2.addEventListener('click', function(){
    if (toggleButton2.classList[1] !== 'tabs__item-button--active') {
        if (wDiv.classList[0] !== 'bg__color--active') {
            wDiv.classList.add('bg__color--active');
        }
        profileDiv.classList.remove('profile--active');
        windowItemActive.classList.remove('window__item--active');
    }else{
        if (wDiv.classList[1] === 'bg__color--active') {
        wDiv.classList.remove('bg__color--active');
    }
    profileDiv.classList.remove('profile--active');
    windowItemActive.classList.remove('window__item--active');
    }
});
const clientDiv = document.getElementById('clientDiv');

tButton.addEventListener('click', function(){
    let localstorageElements = JSON.parse(localStorage.getItem('products')) || [];
    console.log(localstorageElements);
    if (localstorageElements.length === 0) {
        if (tButton.classList[1] !== 'tabs__item-button--active') {
            profileDiv.classList.remove('profile--active');
            functionDiv.classList.remove('function--active');
            clientDiv.classList.remove('client--orders--active');
            if (wDiv.classList[0] !== 'bg__color--active') {
                wDiv.classList.add('bg__color--active');
            }
        }else{
            if (wDiv.classList[1] === 'bg__color--active') {
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

const toggleButton4 = document.getElementById('toggleButton-4');
const toggleButton5 = document.getElementById('toggleButton-5');
const toggleButton6 = document.getElementById('toggleButton-6');
const toggleButton7 = document.getElementById('toggleButton-7');
const toggleButton8 = document.getElementById('toggleButton-8');

toggleButton4.addEventListener('click', function(){
    if (wDiv.classList[1] === 'bg__color--active') {
        wDiv.classList.remove('bg__color--active')
    };
    profileDiv.classList.remove('profile--active');
    functionDiv.classList.remove('function--active');
    windowItemActive.classList.remove('window__item--active');
});
toggleButton5.addEventListener('click', function(){
    if (wDiv.classList[1] === 'bg__color--active') {
        wDiv.classList.remove('bg__color--active')
    };
    profileDiv.classList.remove('profile--active');
    functionDiv.classList.remove('function--active');
    windowItemActive.classList.remove('window__item--active');
});
toggleButton6.addEventListener('click', function(){
    if (wDiv.classList[1] === 'bg__color--active') {
        wDiv.classList.remove('bg__color--active')
    };
    profileDiv.classList.remove('profile--active');
    functionDiv.classList.remove('function--active');
    windowItemActive.classList.remove('window__item--active');
});
toggleButton7.addEventListener('click', function(){
    if (wDiv.classList[1] === 'bg__color--active') {
        wDiv.classList.remove('bg__color--active')
    };
    profileDiv.classList.remove('profile--active');
    functionDiv.classList.remove('function--active');
    windowItemActive.classList.remove('window__item--active');
});
toggleButton8.addEventListener('click', function(){
    if (wDiv.classList[1] === 'bg__color--active') {
        wDiv.classList.remove('bg__color--active')
    };
    profileDiv.classList.remove('profile--active');
    functionDiv.classList.remove('function--active');
    windowItemActive.classList.remove('window__item--active');
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
    console.log(orderDiv);
    functionDiv.classList.remove('function--active');
    console.log(functionDiv);
});

wDiv.addEventListener('click', function() {
    wDiv.classList.remove('bg__color--active');
    orderDiv.classList.remove('order--profile-or-burger--active');
});

let total = 0;
function AddOrder(name, price, count, id, img) {
    let getIdByCart = JSON.parse(localStorage.getItem('products')) || [];
    let existingItem = getIdByCart.findIndex((item) => item.id === id);

    if(existingItem !== -1){
        if (getIdByCart[existingItem].id === "1") {
            if (getIdByCart[existingItem].countable !== 20) {
                getIdByCart[existingItem].countable++;
                let amount1 = parseFloat(getIdByCart[existingItem].amount);
                let price1 = parseFloat(getIdByCart[existingItem].price);
                amount1 += price1;
                getIdByCart[existingItem].amount = amount1;
            }else{
                alert(`${getIdByCart[existingItem].name}`+' maximum 20');
            }
        }
        if (getIdByCart[existingItem].id === "2") {
            if (getIdByCart[existingItem].countable !== 11) {
                getIdByCart[existingItem].countable++;
                let amount1 = parseFloat(getIdByCart[existingItem].amount);
                let price1 = parseFloat(getIdByCart[existingItem].price);
                amount1 += price1;
                getIdByCart[existingItem].amount = amount1;
            }else{
                alert(`${getIdByCart[existingItem].name}` + ' maximum 11');
            }
        }
        if (getIdByCart[existingItem].id === "3") {
            if (getIdByCart[existingItem].countable !== 16) {
                getIdByCart[existingItem].countable++;
                let amount1 = parseFloat(getIdByCart[existingItem].amount);
                let price1 = parseFloat(getIdByCart[existingItem].price);
                amount1 += price1;
                getIdByCart[existingItem].amount = amount1;
            }else{
                alert(`${getIdByCart[existingItem].name}` + 'maximum 16');
            }
        }
        if (getIdByCart[existingItem].id === "4") {
            if (getIdByCart[existingItem].countable !== 22) {
                getIdByCart[existingItem].countable++;
                let amount1 = parseFloat(getIdByCart[existingItem].amount);
                let price1 = parseFloat(getIdByCart[existingItem].price);
                amount1 += price1;
                getIdByCart[existingItem].amount = amount1;
            }else{
                alert(`${getIdByCart[existingItem].name}` + 'maximum 22');
            }
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
            amount: price
        });
    };
    console.log(total);

    localStorage.setItem('products', JSON.stringify(getIdByCart));

}


function createProduct(pro) {
    let amountAll = '';
    if (pro.countable !== 1) {
        amountAll = pro.amount.toFixed(2);
    }else{
        amountAll = pro.amount;
    }
    return`
    <div class="order__section" id="order--head">
        <div class="order__section--product">
            <div class="order-product">
                <img class="order-product-img" src="${pro.img}" alt="">
                <p class="order-product-text">${pro.name}</p>
            </div>
            <div class="order-product-price">
                <p class="order-product-price-p">$${pro.price}</p>
            </div>
        </div>
        <div class="order--count">
                <div class="order--count-bacground">
                    <button class="btn-background">
                        <img class="img-background" src="images/minus.png" alt="">
                    </button>
                    <p class="order-number">${pro.countable}</p>
                    <button class="btn-background">
                        <img class="img-background" src="images/plus.png" alt="">
                    </button>
                </div>
            <div class="order-count">
                <p class="order-count-amount">$${amountAll}</p> 
            </div>
        </div>
        <div class="input-order">
            <input placeholder="Please, just a little bit spicy only." class="description" type="">
            <button class="delete">
                <img class="img-background-1" src="images/Delete.svg" alt="">
            </button>
        </div>
    </div>`;
}
function createProductHtml() {
    let selectProduct = JSON.parse(localStorage.getItem('products')) || [];
    const productHtml = selectProduct.map(createProduct).join(' ');


    let totalSum = document.querySelector('.total-sum');
    let sum = calculateTotalAllProducts();
    totalSum.textContent = sum;

    let createProductDiv = document.querySelector('.create-product');
    createProductDiv.innerHTML = '';
    createProductDiv.insertAdjacentHTML('beforeend', productHtml);
}

function calculateTotalAllProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    let total = 0;
  
    for (const product of products) {
      const price = product.price;
      const countable = product.countable;
      let sum = price * countable;
      total += sum;
    }
  
    console.log(total);
    return total.toFixed(2);
}
