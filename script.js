function toggleFitur() {
  const f = document.getElementById("fitur");
  f.style.display = f.style.display === "block" ? "none" : "block";
}

function openPayment() {
  document.getElementById("payment").style.display = "block";
}

function closePayment() {
  document.getElementById("payment").style.display = "none";
}

function pay(method) {
  const wa = "6287889358322"; // GANTI nomor admin
  const text = encodeURIComponent(
    "Halo Admin Heavly MC,\n" +
    "Saya sudah bayar Rank VIP\n" +
    "Metode: " + method + "\n" +
    "IGN:\nBukti bayar terlampir."
  );
  window.location.href = `https://wa.me/${wa}?text=${text}`;
}