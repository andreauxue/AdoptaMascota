import { useState } from "react";

export default function AuthForm({ mode = "login", onSubmit, loading = false, error = "" }) {
  const isLogin = mode === "login";
  const [form, setForm] = useState({
    name: "", email: "", password: "", phone: "",
    birthDay: "", birthMonth: "", birthYear: ""
  });

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="w-full max-w-md mx-auto bg-white/90 rounded-2xl shadow-lg p-6">
      <h1 className="text-2xl font-bold text-center mb-4">{isLogin ? "Iniciar Sesión" : "Crea una cuenta"}</h1>

      {!isLogin && (
        <>
          <label className="block text-sm mb-1">Nombre</label>
          <input name="name" value={form.name} onChange={handle}
                 className="w-full mb-3 input input-bordered border rounded-lg px-3 py-2 bg-white"
                 placeholder="Nombre" />
          <label className="block text-sm mb-1">Fecha de Nacimiento</label>
          <div className="flex gap-2 mb-3">
            <input name="birthDay" value={form.birthDay} onChange={handle} placeholder="Día" className="w-1/3 border rounded-lg px-3 py-2"/>
            <input name="birthMonth" value={form.birthMonth} onChange={handle} placeholder="Mes" className="w-1/3 border rounded-lg px-3 py-2"/>
            <input name="birthYear" value={form.birthYear} onChange={handle} placeholder="Año" className="w-1/3 border rounded-lg px-3 py-2"/>
          </div>
          <label className="block text-sm mb-1">Número</label>
          <input name="phone" value={form.phone} onChange={handle}
                 placeholder="Número" className="w-full mb-3 border rounded-lg px-3 py-2" />
        </>
      )}

      <label className="block text-sm mb-1">Correo</label>
      <input name="email" type="email" value={form.email} onChange={handle}
             placeholder="usuario@correo.com" className="w-full mb-3 border rounded-lg px-3 py-2" />

      <label className="block text-sm mb-1">Contraseña</label>
      <input name="password" type="password" value={form.password} onChange={handle}
             placeholder="••••••••" className="w-full mb-4 border rounded-lg px-3 py-2" />

      {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

      <button
        onClick={() => onSubmit(form)}
        disabled={loading}
        className="w-full rounded-lg py-2 font-semibold shadow border bg-gray-100 hover:bg-gray-200 active:scale-[.99] transition"
      >
        {loading ? "Procesando..." : (isLogin ? "Iniciar Sesión" : "Registrarte")}
      </button>
    </div>
  );
}
