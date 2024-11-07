export const form = document.querySelector(".grocery-form");
export const grocery = document.getElementById("grocery");
export const list = document.querySelector(".grocery-list");
export const container = document.querySelector(".grocery-container");
const alert = document.querySelector(".alert");
export const submitBtn = document.querySelector(".submit-btn");
export const clearBtn = document.querySelector(".clear-btn");

export const displayAlert = (text, action) => {
  //* Dışarıdan parametre ile gelen texti alert classlı p etiketinin içerisine aktar
  alert.textContent = text;
  //* Dışarıdan parametre ile gelen class ismini ekle
  alert.classList.add(`alert-${action}`);
  //* 3sn sonra içerisindeki fonksiyonu çalıştırır
  setTimeout(() => {
    //* alertin içerisini boşalt
    alert.textContent = "";
    //* alertin classını sil
    alert.classList.remove(`alert-${action}`);
  }, 2000);
};
