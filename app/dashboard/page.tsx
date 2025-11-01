import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

async function logoutAction() {
  'use server'
  const store = await cookies()
  store.delete('demo-auth')
  redirect('/auth/login')
}

export default function Dashboard() {
  return (
    <section className="space-y-3">
      <h1 className="text-2xl font-bold">Dashboard ✅</h1>
      <form action={logoutAction}>
        <button className="rounded border px-3 py-1">Cerrar sesión</button>
      </form>
    </section>
  )
}
