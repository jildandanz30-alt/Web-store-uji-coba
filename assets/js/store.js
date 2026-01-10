function toggleFeature(id, btn) {
  const box = document.getElementById(id);

  if (!box) return;

  box.classList.toggle("hidden");

  btn.innerText = box.classList.contains("hidden")
    ? "Detail Rank"
    : "Sembunyikan Detail";
}
