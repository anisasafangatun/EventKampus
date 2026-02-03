import { useState } from "react";

export default function RegisterForm() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    asal: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataLama = JSON.parse(localStorage.getItem("pendaftar")) || [];
    dataLama.push(form);
    localStorage.setItem("pendaftar", JSON.stringify(dataLama));

    alert("Pendaftaran berhasil!");
    setForm({ nama: "", email: "", asal: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Form Pendaftaran Event</h3>

      <input
        type="text"
        name="nama"
        placeholder="Nama Lengkap"
        value={form.nama}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="asal"
        placeholder="Asal Sekolah / Instansi"
        value={form.asal}
        onChange={handleChange}
        required
      />

      <button type="submit">Daftar</button>
    </form>
  );
}
