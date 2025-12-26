let products = [
  {id:1, name:"Acc Roblox VIP", price:500, desc:"Có nhiều game pass"},
  {id:2, name:"Acc Roblox Rare", price:900, desc:"Item hiếm"},
];

function render() {
  const s = (document.getElementById("search")?.value||"").toLowerCase();
  const list = document.getElementById("list");
  if (!list) return;
  list.innerHTML = "";
  products.filter(p=>p.name.toLowerCase().includes(s))
    .forEach(p=>{
      list.innerHTML += `
        <div class="card">
          <h3>${p.name}</h3>
          <p>${p.price} coin</p>
          <a href="product.html?id=${p.id}">Xem</a>
        </div>`;
    });
}
render();

function login(){
  localStorage.setItem("user", user.value);
  localStorage.setItem("coin", 1000);
  location.href="index.html";
}

function buy(){
  let coin = +localStorage.getItem("coin");
  if (coin < 500) return alert("Không đủ coin");
  localStorage.setItem("coin", coin-500);
  alert("Mua thành công (fake)");
}
