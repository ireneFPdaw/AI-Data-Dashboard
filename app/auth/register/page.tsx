export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-sm border rounded p-6">
      <h1 className="text-xl font-semibold mb-4">Registro</h1>
      <form className="space-y-3">
        <input className="w-full border rounded px-3 py-2" placeholder="Nombre" />
        <input className="w-full border rounded px-3 py-2" placeholder="Email" />
        <input type="password" className="w-full border rounded px-3 py-2" placeholder="Contraseña" />
        <button type="button" className="w-full bg-black text-white rounded py-2 opacity-60 cursor-not-allowed">
          Crear cuenta (en Módulo 4)
        </button>
      </form>
    </div>
  )
}
