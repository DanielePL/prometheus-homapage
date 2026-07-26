import { createContext, useContext, useState, useCallback } from 'react'
import { X, ArrowRight, Loader2, Check, CalendarCheck } from 'lucide-react'
import supabase from '../lib/supabase'

const DemoModalContext = createContext({ openDemo: () => {} })

export function useDemoModal() {
  return useContext(DemoModalContext)
}

export function DemoModalProvider({ children }) {
  const [open, setOpen] = useState(false)
  const openDemo = useCallback(() => setOpen(true), [])

  return (
    <DemoModalContext.Provider value={{ openDemo }}>
      {children}
      {/* No AnimatePresence: the modal unmounts immediately on close. An exit
          animation isn't worth a lead-generating form that can fail to appear
          (see .modal-card in index.css). */}
      {open && <DemoModal onClose={() => setOpen(false)} />}
    </DemoModalContext.Provider>
  )
}

function DemoModal({ onClose }) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [state, setState] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setState('loading')
    setError('')
    try {
      const { error } = await supabase.from('demo_requests').insert({
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        message: form.message,
        source: 'prometheus.coach',
      })
      if (error) throw error
      setState('success')
    } catch (err) {
      setError('Etwas ist schiefgelaufen. Schreiben Sie uns direkt an hello@prometheus.coach.')
      setState('error')
    }
  }

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Demo anfragen"
      className="modal-scrim fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="modal-card glass-strong relative w-full max-w-2xl rounded-3xl p-7 md:p-9 shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Schließen"
        >
          <X size={20} />
        </button>

        {state === 'success' ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-5">
              <Check size={30} className="text-accent" />
            </div>
            <h3 className="font-display text-2xl font-bold mb-2">Danke, wir melden uns.</h3>
            <p className="text-white/60 max-w-md mx-auto">
              Wir richten Ihnen eine Demo-Umgebung mit Ihren Zahlen ein und kommen innerhalb eines
              Werktags auf Sie zu.
            </p>
            <button
              onClick={onClose}
              className="mt-7 px-6 h-12 rounded-xl bg-accent text-white font-semibold hover:bg-accent-light transition-colors"
            >
              Schließen
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 mb-1">
              <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/25 flex items-center justify-center">
                <CalendarCheck size={20} className="text-accent" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">Demo anfragen</span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-2">
              Sehen Sie Prometheus an Ihren Zahlen.
            </h3>
            <p className="text-white/60 mb-7">
              30 Minuten, kein Verkaufsdruck. Wir zeigen Ihren Betrieb von der Rezeption bis zur Zentrale
              und beantworten alles zu Migration, Preis und Datenschutz.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Field label="Studio / Unternehmen" value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="E-Mail" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                <Field label="Telefon" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">Worum geht es? (optional)</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="z. B. Kette mit 4 Standorten, Wechsel vom Altsystem geplant"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-base text-white placeholder-white/30 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                />
              </div>
              {state === 'error' && <p className="text-sm text-red-400">{error}</p>}
              <button
                type="submit"
                disabled={state === 'loading'}
                className="w-full h-12 flex items-center justify-center gap-2 rounded-xl bg-accent text-white font-semibold text-base hover:bg-accent-light transition-all hover:shadow-[0_0_30px_rgba(230,126,34,0.35)] disabled:opacity-60"
              >
                {state === 'loading' ? <Loader2 size={18} className="animate-spin" /> : <>Demo anfragen <ArrowRight size={18} /></>}
              </button>
              <p className="text-xs text-white/40 text-center">
                Ihre Daten bleiben bei uns. Kein Newsletter, keine Weitergabe.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}

function Field({ label, type = 'text', value, onChange, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-white/70 mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 px-4 rounded-xl bg-white/[0.04] border border-white/10 text-base text-white placeholder-white/30 focus:outline-none focus:border-accent/50 transition-colors"
      />
    </div>
  )
}
