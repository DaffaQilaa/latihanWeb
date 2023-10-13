document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const daftarButton = document.getElementById("daftar");

  daftarButton.addEventListener("click", function () {
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const alamat = document.getElementById("alamat").value;

    if (!nama || !email || !alamat) {
      alert("Anda harus mengisi data yang lengkap!");
    } else {
      alert("Pendaftaran sukses!");
    }
  });
});
