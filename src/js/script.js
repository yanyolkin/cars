"use strict";

const cars = [
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto1.png",
    category: "Car and Minivan",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto2.png",
    category: "Car and Minivan",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto3.png",
    category: "Car and Minivan",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto4.png",
    category: "Electrified",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto5.png",
    category: "Electrified",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto6.png",
    category: "Electrified",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto7.png",
    category: "Trucks",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto8.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto9.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto10.png",
    category: "Trucks",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto11.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto12.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto1.png",
    category: "Car and Minivan",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto2.png",
    category: "Car and Minivan",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto3.png",
    category: "Car and Minivan",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto4.png",
    category: "Electrified",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto5.png",
    category: "Electrified",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto6.png",
    category: "Electrified",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto7.png",
    category: "Trucks",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto8.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto9.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto10.png",
    category: "Trucks",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto11.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto12.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto1.png",
    category: "Car and Minivan",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto2.png",
    category: "Car and Minivan",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto3.png",
    category: "Car and Minivan",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto4.png",
    category: "Electrified",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto5.png",
    category: "Electrified",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto6.png",
    category: "Electrified",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto7.png",
    category: "Trucks",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto8.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto9.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto10.png",
    category: "Trucks",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto11.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto12.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto1.png",
    category: "Car and Minivan",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto2.png",
    category: "Car and Minivan",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto3.png",
    category: "Car and Minivan",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto4.png",
    category: "Electrified",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto5.png",
    category: "Electrified",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto6.png",
    category: "Electrified",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto7.png",
    category: "Trucks",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto8.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto9.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto10.png",
    category: "Trucks",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto11.png",
    category: "Crossovers & SUVs",
  },
  {
    name: "Toyota Crown 2023",
    price: 39900,
    pay: 650,
    img: "img/auto12.png",
    category: "Crossovers & SUVs",
  },
];

console.log(cars.length);

const newCars = cars.map((car, i) => {
  return { ...car, id: i, number: 1 };
});

console.log(newCars);

// const html = `<div class="catalog__item">
// <div class="catalog__item-img">
//   <img src="img/auto1.png" alt="auto1" />
// </div>
// <div class="catalog__item-content">
//   <h2 class="catalog__item-name title title_h2">
//     Toyota Crown 2023
//   </h2>
//   <p class="catalog__item-price text">starting from $ 39900</p>
//   <p class="catalog__item-pay title title_h2">$ 650/mo</p>
//   <button class="catalog__item-btn text">see details</button>
// </div>
// </div>`;

let currPage = 1;
let currPageItems = 5;
let numberPages = Math.ceil(cars.length / currPageItems);

const maxPages = 5;

console.log(numberPages);

function pages(num, maxP, page) {
  document.querySelector(".pages").innerHTML = "";
  if (num <= maxP) {
    for (let i = 1; i <= num; i++) {
      if (i === 1) {
        document
          .querySelector(".pages")
          .insertAdjacentHTML(
            "beforeend",
            `<p class="page page_active text">${i}</p>`
          );
      } else {
        document
          .querySelector(".pages")
          .insertAdjacentHTML("beforeend", `<p class="page text">${i}</p>`);
      }
    }
  } else {
    if (page <= 2) {
      const arrNum = [1, 2, "...", num - 1, num];
      console.log(arrNum);
      arrNum.forEach((val) => {
        const html = `<p class="page page_active text">${val}</p>`;
        document.querySelector(".pages").insertAdjacentHTML("beforeend", html);
      });
    } else if (page >= num - 1) {
      const arrNum = [1, 2, "...", num - 1, num];
      console.log(arrNum);
      arrNum.forEach((val) => {
        const html = `<p class="page page_active text">${val}</p>`;
        document.querySelector(".pages").insertAdjacentHTML("beforeend", html);
      });
    } else {
      const arrNum = [1, "...", +page - 1, +page, +page + 1, "...", num];
      console.log(arrNum);
      arrNum.forEach((val) => {
        const html =
          val === 1
            ? `<p class="page page_active text">${val}</p>`
            : `<p class="page text">${val}</p>`;
        document.querySelector(".pages").insertAdjacentHTML("beforeend", html);
      });
    }
  }
}

pages(numberPages, maxPages, currPage);

function showPage(page, arr) {
  const pageS = page * currPageItems - currPageItems;
  const pageE = page * currPageItems;
  document.querySelector(".catalog__items").innerHTML = "";
  arr.slice(pageS, pageE).forEach((car) => {
    const html = `<div class="catalog__item" data-id=${car.id}>
  <div class="catalog__item-img">
    <img src=${car.img} alt="auto1" />
  </div>
  <div class="catalog__item-content">
    <h2 class="catalog__item-name title title_h2">
      Toyota Crown 2023
    </h2>
    <p class="catalog__item-price text">starting from $ 39900</p>
    <p class="catalog__item-pay title title_h2">$ 650/mo</p>
    <button class="catalog__item-btn text">see details</button>
  </div>
  </div>`;
    document
      .querySelector(".catalog__items")
      .insertAdjacentHTML("beforeend", html);
  });
}

showPage(currPage, newCars);

document.querySelector(".pages").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("page")) {
    console.log(e.target.textContent);
    currPage = e.target.textContent;
    document
      .querySelectorAll(".page")
      .forEach((page) => page.classList.remove("page_active"));
    e.target.classList.add("page_active");
    pages(numberPages, maxPages, currPage);
    showPage(currPage, newCars);
  }
});

let category;

// cars.forEach((car) => {
//   const html = `<div class="catalog__item">
// <div class="catalog__item-img">
//   <img src=${car.img} alt="auto1" />
// </div>
// <div class="catalog__item-content">
//   <h2 class="catalog__item-name title title_h2">
//     Toyota Crown 2023
//   </h2>
//   <p class="catalog__item-price text">starting from $ 39900</p>
//   <p class="catalog__item-pay title title_h2">$ 650/mo</p>
//   <button class="catalog__item-btn text">see details</button>
// </div>
// </div>`;
//   document
//     .querySelector(".catalog__items")
//     .insertAdjacentHTML("beforeend", html);
// });

document.querySelector(".catalog__tabs").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("catalog__tab")) {
    console.log("ok");
    document
      .querySelectorAll(".catalog__tab")
      .forEach((tab) => (tab.style.color = "black"));
    e.target.style.color = "blue";
    if (e.target.dataset.category) {
      console.log(e.target.dataset.category);
      document.querySelector(".catalog__items").innerHTML = "";
      console.log(category);
      category = e.target.dataset.category;
      console.log(category);
      console.log(cars);
      const carsFilter = newCars.filter((car) => car.category === category);
      numberPages = Math.ceil(carsFilter.length / currPageItems);
      pages(numberPages, maxPages, currPage);
      console.log(carsFilter);
      currPage = 1;
      showPage(currPage, carsFilter);
      //       cars
      //         .filter((car) => car.category === category)
      //         .forEach((car) => {
      //           const html = `<div class="catalog__item">
      // <div class="catalog__item-img">
      //   <img src=${car.img} alt="auto1" />
      // </div>
      // <div class="catalog__item-content">
      //   <h2 class="catalog__item-name title title_h2">
      //     Toyota Crown 2023
      //   </h2>
      //   <p class="catalog__item-price text">starting from $ 39900</p>
      //   <p class="catalog__item-pay title title_h2">$ 650/mo</p>
      //   <button class="catalog__item-btn text">see details</button>
      // </div>
      // </div>`;
      //           document
      //             .querySelector(".catalog__items")
      //             .insertAdjacentHTML("beforeend", html);
      //         });
    }
  }
});

document.querySelector(".catalog__button").addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelectorAll(".catalog__tab")
    .forEach((tab) => (tab.style.color = "black"));
  document.querySelector(".catalog__items").innerHTML = "";
  currPage = 1;
  numberPages = Math.ceil(cars.length / currPageItems);
  pages(numberPages, maxPages, currPage);

  showPage(currPage, newCars);
  // cars.forEach((car) => {
  //   const html = `<div class="catalog__item">
  //     <div class="catalog__item-img">
  //       <img src=${car.img} alt="auto1" />
  //     </div>
  //     <div class="catalog__item-content">
  //       <h2 class="catalog__item-name title title_h2">
  //         Toyota Crown 2023
  //       </h2>
  //       <p class="catalog__item-price text">starting from $ 39900</p>
  //       <p class="catalog__item-pay title title_h2">$ 650/mo</p>
  //       <button class="catalog__item-btn text">see details</button>
  //     </div>
  //     </div>`;
  //   document
  //     .querySelector(".catalog__items")
  //     .insertAdjacentHTML("beforeend", html);
  // });
});

function showCart(arr) {
  document.querySelector(".cart").innerHTML = "";
  arr.forEach((value) => {
    const html = ` <div class="cart__item">
    <div class="catalog__item-img">
      <img src=${value.img} alt="auto1" />
    </div>
    <div class="catalog__item-content">
      <h2 class="catalog__item-name title title_h2">Toyota Crown 2023 <strong>${value.number} </strong></h2>
      <p class="catalog__item-price text">starting from $ 39900</p>
      <p class="catalog__item-pay title title_h2">$ 650/mo</p>
      <button class="catalog__item-btn text">see details</button>
    </div>
  </div>`;
    document.querySelector(".cart").insertAdjacentHTML("beforeend", html);
  });
}

let cart = [];

document.querySelector(".catalog__items").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("catalog__item-btn")) {
    console.log(e.target.closest(".catalog__item").dataset.id);
    const id = e.target.closest(".catalog__item").dataset.id;
    const buyCar = newCars.find((car) => car.id === +id);
    console.log(buyCar);
    console.log(cart);
    if (cart.some((value) => value.id === buyCar.id)) {
      cart = cart.map((value) =>
        value.id === buyCar.id ? { ...value, number: value.number + 1 } : value
      );
    } else {
      cart.push(buyCar);
    }
    console.log(cart);
    showCart(cart);
  }
});
