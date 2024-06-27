alert("Hai, ini Website sederhanaaa yang putraaa buat!!");
let isIta = false;

  while (!isIta) {
    if (confirm("Kamuuu pastii itaaaa kan?!")) {
      alert(
        "yaaaaayyyy selamat datang itaaaaa, ini bungaaa buat kamuuu semogaaa kamu sukaaa!!!"
      );
      isIta = true;
    } else {
      alert("harus itaa, kalo bukan pergi ajaaa!");
    }
  }

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
