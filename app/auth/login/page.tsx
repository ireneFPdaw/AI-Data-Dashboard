import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

async function loginAction(formData: FormData) {
  'use server'
  const store = await cookies()
  store.set('demo-auth', '1', { path: '/', httpOnly: false, maxAge: 60 * 60 })
  const from = formData.get('from')?.toString() || '/dashboard'
  redirect(from)
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>
}) {
  const { from = '/dashboard' } = await searchParams

  return (
    <div className="mx-auto max-w-sm border rounded p-6">
      <h1 className="text-xl font-semibold mb-4">Iniciar sesión</h1>
      <form action={loginAction} className="space-y-3">
        <input required name="email" placeholder="email@example.com" className="w-full border rounded px-3 py-2" />
        <input required type="password" name="password" placeholder="********" className="w-full border rounded px-3 py-2" />
        <input type="hidden" name="from" value={from} />
        <button className="w-full bg-black text-white rounded py-2">Entrar</button>
      </form>
    </div>
  )
}
