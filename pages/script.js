const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const editBtn = document.getElementById("edit-btn");
const saveBtn = document.getElementById("save-btn");
const cancelBtn = document.getElementById("cancel-btn");

let tempData = {};

editBtn.addEventListener("click", () => {
  // Simpan data lama
  tempData = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value
  };

  // Aktifkan input
  nameInput.disabled = false;
  emailInput.disabled = false;
  phoneInput.disabled = false;

  // Tampilkan tombol simpan & batal
  saveBtn.style.display = "inline-block";
  cancelBtn.style.display = "inline-block";
  editBtn.style.display = "none";
});

cancelBtn.addEventListener("click", () => {
  // Kembalikan data lama
  nameInput.value = tempData.name;
  emailInput.value = tempData.email;
  phoneInput.value = tempData.phone;

  // Kunci input
  nameInput.disabled = true;
  emailInput.disabled = true;
  phoneInput.disabled = true;

  // Atur tombol
  saveBtn.style.display = "none";
  cancelBtn.style.display = "none";
  editBtn.style.display = "inline-block";
});

saveBtn.addEventListener("click", () => {
  // Di sini kamu bisa tambahkan request ke server kalau butuh
  alert("Data berhasil disimpan!");

  // Kunci input lagi
  nameInput.disabled = true;
  emailInput.disabled = true;
  phoneInput.disabled = true;

  saveBtn.style.display = "none";
  cancelBtn.style.display = "none";
  editBtn.style.display = "inline-block";
});
