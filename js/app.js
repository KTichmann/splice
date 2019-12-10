$(document).foundation();

const navbarFunc = () => {
  const toggleSearchIcon = () => {
    const searchIcon = document.querySelector("#search-bar-icon i");
    searchIcon.addEventListener("click", () => {
      if (searchIcon.classList.contains("fa-close")) {
        searchIcon.classList.remove("fa-close");
        searchIcon.classList.add("fa-search");
      } else {
        searchIcon.classList.remove("fa-search");
        searchIcon.classList.add("fa-close");
      }
    });
  };

  const handleScroll = () => {
    const toolbar = document.getElementById("toolbar-wrapper");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        toolbar.classList.add("fixed");
      } else {
        toolbar.classList.remove("fixed");
      }

      const menu = document.getElementById("main-menu-wrapper");
      if (window.scrollY < 70) {
        menu.classList.remove("fixed");
      } else {
        menu.classList.add("fixed");
      }
    });
  };

  toggleSearchIcon();
  handleScroll();
};

const handleBasket = () => {
  let products = [
    { id: "berry", price: 36.0, qty: 0 },
    { id: "sundried", price: 72.0, qty: 0 },
    { id: "veg", price: 22.0, qty: 0 },
    { id: "man", price: 292.0, qty: 0 }
  ];

  let total = 0;

  const init = () => {
    document
      .querySelectorAll(".add-to-cart")
      .forEach(node => node.addEventListener("click", addToCart));

    document
      .querySelectorAll(".delete-product")
      .forEach(node => node.addEventListener("click", removeFromCart));
  };

  const addToCart = e => {
    const value = e.target.value;
    products.forEach(product => {
      if (product.id === value) {
        if(product.qty === 0){
          showProduct(value)
        }
        product.qty++;
        udpateQty(value, product.qty);
      }
    });

    updateTotal(value)
    updateCountDisplay(countProducts(products))
  };

  const removeFromCart = e => {
    const value = e.target.dataset.value;
    products.forEach(product => {
      if (product.id === value) {
        product.qty--;
        udpateQty(value, product.qty);
        if(product.qty < 1){
          hideProduct(value)
        }
      }
    });
    updateTotal(value, '-')
    updateCountDisplay(countProducts(products))
  };

  const countProducts = (prodArr) => {
    let count = 0;
    prodArr.forEach(prod => count += prod.qty)
    return count;
  }

  const udpateQty = (prodId, value) => {
    document.querySelector(`#${prodId}-product .qty`).innerHTML = `${value}`
  }

  const hideProduct = (prodKey) => {
    const product = document.getElementById(`${prodKey}-product`)
    if(product){
      product.classList.add('hidden')
    }
  }

  const showProduct = (prodKey) => {
    const product = document.getElementById(`${prodKey}-product`);
    if(product){
      product.classList.remove('hidden')
    }
  }

  const updateTotal = (value, direction = '+') => {
    const price = products.filter(product => product.id === value)[0].price
    direction === '+' ? total += price : total -= price;

    updateTotalDisplay(total);
  }

  const updateTotalDisplay = (total) => {
    document.querySelector('.total-amount').innerHTML = `${total}`;
  }

  const updateCountDisplay = (count) => {
    document.querySelectorAll('.total-count').forEach(node => node.innerHTML = `${count}`);
  }

  init();
};

$(document).ready(function() {
  navbarFunc();
  handleBasket();
});
