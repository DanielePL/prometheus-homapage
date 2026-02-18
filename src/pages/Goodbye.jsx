import { Trash2, Mail, Clock, ShieldCheck } from 'lucide-react'

export default function Goodbye() {
  return (
    <article>
      <h1 className="text-3xl font-bold font-heading mb-2">Account &amp; Data Deletion</h1>
      <p className="text-sm text-[#666] mb-12">How to delete your account and what happens to your data</p>

      <div className="space-y-10 text-[#999] leading-relaxed">
        {/* What Gets Deleted */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Trash2 className="text-accent mt-1 shrink-0" size={22} />
            <h2 className="text-xl font-bold text-accent">What Gets Deleted</h2>
          </div>
          <p className="mb-4">
            When you delete your account, the following data is permanently removed:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Account information</strong> &mdash; Email, name, profile picture, authentication data</li>
            <li><strong className="text-white">Training data</strong> &mdash; All workout logs, exercise history, VBT metrics, and personal records</li>
            <li><strong className="text-white">AI coaching data</strong> &mdash; Conversation history, recommendations, and personalized coaching data</li>
            <li><strong className="text-white">Nutrition data</strong> &mdash; Food logs, meal photos, nutrition plans, and dietary preferences</li>
            <li><strong className="text-white">Health data</strong> &mdash; Body measurements, medical conditions, injuries, and Health Connect data</li>
            <li><strong className="text-white">Community data</strong> &mdash; Posts, comments, likes, and follower relationships</li>
            <li><strong className="text-white">Media</strong> &mdash; Progress photos, form analysis videos, and any other saved media</li>
          </ul>
        </section>

        {/* What May Be Retained */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <ShieldCheck className="text-accent mt-1 shrink-0" size={22} />
            <h2 className="text-xl font-bold text-accent">What May Be Retained</h2>
          </div>
          <p className="mb-4">
            In certain cases, limited data may be retained after account deletion:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Legal obligations</strong> &mdash; Payment/transaction records required by tax law (up to 7 years)</li>
            <li><strong className="text-white">Anonymized data</strong> &mdash; Fully anonymized, aggregated usage statistics that cannot be linked back to you</li>
            <li><strong className="text-white">Fraud prevention</strong> &mdash; Minimal data necessary to prevent abuse, as permitted by law</li>
          </ul>
        </section>

        {/* How to Delete */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-6">How to Delete Your Account</h2>

          {/* Method 1: Email */}
          <div className="bg-dark/50 border border-dark-border rounded-lg p-5">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <span className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-white">1</span>
              Via Email
            </h3>
            <p>
              Send a deletion request to{' '}
              <a href="mailto:hello@prometheus.coach" className="text-accent hover:underline">
                hello@prometheus.coach
              </a>{' '}
              from the email address associated with your account. Include &quot;Account
              Deletion Request&quot; in the subject line. We will confirm receipt and process
              your request within 30 days as required by GDPR.
            </p>
          </div>
        </section>

        {/* Processing Time */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Clock className="text-accent mt-1 shrink-0" size={22} />
            <h2 className="text-xl font-bold text-accent">Processing Time</h2>
          </div>
          <ul className="list-disc list-inside space-y-2">
            <li>We will confirm receipt of your deletion request within 48 hours.</li>
            <li>Your data will be permanently deleted within <strong className="text-white">30 days</strong>, as required by GDPR.</li>
            <li>You will receive an email confirmation once the deletion is complete.</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Mail className="text-accent mt-1 shrink-0" size={22} />
            <h2 className="text-xl font-bold text-accent">Questions?</h2>
          </div>
          <p>
            If you have questions about data deletion or need assistance, contact us at{' '}
            <a href="mailto:hello@prometheus.coach" className="text-accent hover:underline">
              hello@prometheus.coach
            </a>.
          </p>
          <p className="mt-3">
            For full details on how we handle your data, see our{' '}
            <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
          </p>
        </section>
      </div>
    </article>
  )
}
