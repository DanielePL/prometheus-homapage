export default function PrivacyPolicy() {
  return (
    <article>
      <h1 className="text-3xl font-bold font-heading mb-2">Privacy Policy</h1>
      <p className="text-sm text-[#666] mb-12">Last updated: February 18, 2026</p>

      <div className="space-y-10 text-[#999] leading-relaxed">
        {/* Introduction */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">1. Introduction</h2>
          <p>
            PeakForce O&Uuml; (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the
            Prometheus Coach mobile application and website (collectively, the
            &quot;Service&quot;). This Privacy Policy explains how we collect, use, disclose,
            and safeguard your information when you use our Service.
          </p>
          <p className="mt-3">
            We are committed to protecting your personal data in accordance with the General
            Data Protection Regulation (GDPR) and other applicable data protection laws.
          </p>
        </section>

        {/* Data Controller */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">2. Data Controller</h2>
          <ul className="space-y-1">
            <li><strong className="text-white">Company:</strong> PeakForce O&Uuml;</li>
            <li><strong className="text-white">Address:</strong> Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 5, 10117, Estonia</li>
            <li><strong className="text-white">Registry Code:</strong> 17082451</li>
            <li><strong className="text-white">Email:</strong>{' '}
              <a href="mailto:hello@prometheus.coach" className="text-accent hover:underline">
                hello@prometheus.coach
              </a>
            </li>
          </ul>
        </section>

        {/* Data We Collect */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">3. Data We Collect</h2>

          <h3 className="text-white font-semibold mt-4 mb-2">Account Data</h3>
          <p>Email address, name, age, gender, profile picture, and authentication tokens.</p>

          <h3 className="text-white font-semibold mt-4 mb-2">Physical &amp; Health Data</h3>
          <p>
            Weight, height, body measurements (e.g. chest, waist, arms), body fat percentage,
            activity level, training experience, and medical conditions or injuries you
            voluntarily provide.
          </p>

          <h3 className="text-white font-semibold mt-4 mb-2">Fitness &amp; Training Data</h3>
          <p>
            Workout logs, exercise performance, personal records, velocity-based training (VBT)
            metrics (velocity, power, force, range of motion), training goals, and AI-generated
            coaching data.
          </p>

          <h3 className="text-white font-semibold mt-4 mb-2">Nutrition Data</h3>
          <p>
            Food logs, meal photos, macro- and micronutrient intake, dietary preferences,
            food allergies, and nutrition plans.
          </p>

          <h3 className="text-white font-semibold mt-4 mb-2">Camera &amp; Media</h3>
          <p>
            Videos recorded for exercise form analysis and VBT tracking. Progress photos
            (front, side, back) if you choose to take them. Media is stored in the cloud
            only when you explicitly save it.
          </p>

          <h3 className="text-white font-semibold mt-4 mb-2">Wearable &amp; Health Connect Data</h3>
          <p>
            If you connect a wearable device or Health Connect, we may read heart rate,
            sleep data (duration, stages), weight, body fat, and VO2max. This data is used
            solely to personalize your coaching and recovery recommendations.
          </p>

          <h3 className="text-white font-semibold mt-4 mb-2">Community &amp; Social Data</h3>
          <p>
            If you use community features: display name, bio, posts, comments, likes, and
            follower relationships. You control the visibility of your posts (public,
            followers-only, or private).
          </p>

          <h3 className="text-white font-semibold mt-4 mb-2">Device &amp; Usage Data</h3>
          <p>
            Device type, operating system, app version, crash logs (via Firebase Crashlytics),
            and general usage analytics to improve the Service.
          </p>
        </section>

        {/* How We Use Your Data */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">4. How We Use Your Data</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide and personalize AI-powered fitness coaching</li>
            <li>Analyze exercise form and velocity-based training via camera</li>
            <li>Track nutrition, generate meal plans, and analyze meal photos</li>
            <li>Sync health data from wearables and Health Connect for recovery insights</li>
            <li>Process payments and manage subscriptions via Google Play Billing</li>
            <li>Monitor app stability and fix crashes (Firebase Crashlytics)</li>
            <li>Improve and optimize the Service</li>
            <li>Communicate with you about your account or the Service</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        {/* Legal Basis */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">5. Legal Basis for Processing</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Contract:</strong> Processing necessary to provide the Service you signed up for</li>
            <li><strong className="text-white">Consent:</strong> For health/fitness data processing and camera usage</li>
            <li><strong className="text-white">Legitimate Interest:</strong> Analytics, security, and Service improvement</li>
            <li><strong className="text-white">Legal Obligation:</strong> Tax records, fraud prevention</li>
          </ul>
        </section>

        {/* Third Parties */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">6. Third-Party Services</h2>
          <p className="mb-4">We share data with the following processors, all of whom are contractually bound to protect your data:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Supabase</strong> (EU) &mdash; Database hosting, authentication, and file storage</li>
            <li><strong className="text-white">Anthropic</strong> (USA) &mdash; AI coaching engine (text and image analysis, with appropriate safeguards)</li>
            <li><strong className="text-white">Google</strong> (USA) &mdash; Play Store services, Google Play Billing (payments), ML Kit (on-device pose detection, barcode scanning, text recognition), Firebase Crashlytics (crash reporting), and Health Connect API</li>
            <li><strong className="text-white">USDA FoodData Central</strong> (USA) &mdash; Public nutrition database for food lookups</li>
            <li><strong className="text-white">Meta / Facebook SDK</strong> (USA) &mdash; Instagram Story sharing (only when you explicitly share content)</li>
          </ul>
          <p className="mt-4">
            For transfers outside the EU/EEA, we rely on Standard Contractual Clauses (SCCs) or
            equivalent legal mechanisms to ensure adequate data protection.
          </p>
        </section>

        {/* Data Retention */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">7. Data Retention</h2>
          <p>
            We retain your personal data for as long as your account is active or as needed to
            provide the Service. After account deletion, your data is permanently removed within
            30 days, except where retention is required by law (e.g., tax records for up to 7
            years).
          </p>
        </section>

        {/* Your Rights */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">8. Your Rights (GDPR)</h2>
          <p className="mb-4">Under the GDPR, you have the right to:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Access</strong> &mdash; Request a copy of your personal data</li>
            <li><strong className="text-white">Rectification</strong> &mdash; Correct inaccurate or incomplete data</li>
            <li><strong className="text-white">Erasure</strong> &mdash; Request deletion of your data (&quot;right to be forgotten&quot;)</li>
            <li><strong className="text-white">Restriction</strong> &mdash; Restrict processing in certain circumstances</li>
            <li><strong className="text-white">Portability</strong> &mdash; Receive your data in a portable format</li>
            <li><strong className="text-white">Objection</strong> &mdash; Object to processing based on legitimate interest</li>
            <li><strong className="text-white">Withdraw Consent</strong> &mdash; Withdraw consent at any time without affecting prior processing</li>
          </ul>
          <p className="mt-4">
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:hello@prometheus.coach" className="text-accent hover:underline">
              hello@prometheus.coach
            </a>
            . We will respond within 30 days.
          </p>
        </section>

        {/* Data Security */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">9. Data Security</h2>
          <p>
            We implement industry-standard security measures including encryption in transit
            (TLS), encryption at rest, access controls, and regular security audits. However,
            no method of transmission over the Internet is 100% secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        {/* Children */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">10. Children&apos;s Privacy</h2>
          <p>
            The Service is not intended for children under 16 years of age. We do not knowingly
            collect data from children under 16. If you believe we have collected data from a
            child, please contact us immediately.
          </p>
        </section>

        {/* Changes */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            material changes by posting the new policy on this page and updating the &quot;Last
            updated&quot; date. Your continued use of the Service after any changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">12. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your data
            protection rights, please contact us:
          </p>
          <ul className="mt-3 space-y-1">
            <li><strong className="text-white">Email:</strong>{' '}
              <a href="mailto:hello@prometheus.coach" className="text-accent hover:underline">
                hello@prometheus.coach
              </a>
            </li>
            <li><strong className="text-white">Company:</strong> PeakForce O&Uuml;</li>
            <li><strong className="text-white">Address:</strong> Harju maakond, Tallinn, Kesklinna linnaosa, Narva mnt 5, 10117, Estonia</li>
          </ul>
          <p className="mt-4">
            You also have the right to lodge a complaint with the Estonian Data Protection
            Inspectorate (Andmekaitse Inspektsioon) or your local supervisory authority.
          </p>
        </section>
      </div>
    </article>
  )
}
