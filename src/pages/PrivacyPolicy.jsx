export default function PrivacyPolicy() {
  return (
    <article>
      <h1 className="text-3xl font-bold font-heading mb-2">Privacy Policy</h1>
      <p className="text-sm text-[#666] mb-12">Last updated: July 28, 2026</p>

      <div className="space-y-10 text-[#999] leading-relaxed">
        {/* Introduction */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">1. Introduction</h2>
          <p>
            PeakForce O&Uuml; (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the Prometheus
            mobile applications for iOS and Android &mdash; the Prometheus member app and
            the Prometheus Coach app &mdash; together with the Prometheus web applications
            and this website (collectively, the &quot;Service&quot;). This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when
            you use our Service.
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
            Device type, operating system, app version, crash logs (on Android via Firebase
            Crashlytics; on iOS only through Apple&apos;s own crash reporting, if you opted
            in to share it with developers), and general usage analytics to improve the
            Service.
          </p>
        </section>

        {/* How We Use Your Data */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">4. How We Use Your Data</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide and personalize AI-powered fitness coaching</li>
            <li>Analyze exercise form and velocity-based training via camera</li>
            <li>Track nutrition, generate meal plans, and analyze meal photos</li>
            <li>Sync health data from wearables, Apple Health and Health Connect for recovery insights</li>
            <li>Process payments and manage subscriptions via Apple In-App Purchase (iOS) and Google Play Billing (Android)</li>
            <li>Monitor app stability and fix crashes (Firebase Crashlytics)</li>
            <li>Improve and optimize the Service</li>
            <li>Communicate with you about your account or the Service</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="mt-4">
            The AI-powered features listed above are provided by a third party. Section 5
            describes exactly which data is disclosed to that provider and on what basis.
          </p>

          <h3 className="text-white font-semibold mt-6 mb-2">Anonymized Research &amp; Data Partnerships</h3>
          <p>
            We may aggregate and anonymize training data collected through the Service and
            share the resulting datasets with third-party partners, including research
            institutions, healthcare organizations, technology companies, and sports
            organizations. These partnerships serve purposes such as scientific research,
            product development, clinical studies, biomechanical analysis, and training
            analytics.
          </p>
          <p className="mt-3">
            <strong className="text-white">Health data is excluded from these partnerships.</strong>{' '}
            We never disclose to any partner &mdash; anonymized or otherwise &mdash; data read
            from Apple Health / HealthKit or Android Health Connect (including heart rate,
            sleep, heart rate variability, resting heart rate, VO2max, body weight and body
            fat), nor the health profile you provide in the app (medical conditions, injuries,
            allergies). Data obtained through HealthKit is used solely to provide and improve
            your own coaching, recovery and health-management features inside the Service. It
            is never sold, never used for advertising or marketing, and never shared with
            insurers, advertising networks, or data brokers.
          </p>
          <p className="mt-3">
            All anonymization is performed within Prometheus systems prior to any external
            disclosure. The resulting datasets cannot reasonably be used to identify any
            individual and therefore do not constitute personal data within the meaning of the
            GDPR. Our anonymization processes follow industry-standard techniques such as
            aggregation, generalization, and suppression of identifying attributes.
          </p>
          <p className="mt-3">
            Although the GDPR does not apply to fully anonymized data, we offer you the ability
            to opt out of having your data included in our anonymization and data partnership
            pipelines at any time by contacting us at{' '}
            <a href="mailto:hello@prometheus.coach" className="text-accent hover:underline">
              hello@prometheus.coach
            </a>
            . Opting out does not affect your ability to use the Service.
          </p>
        </section>

        {/* AI Processing / Anthropic */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">
            5. AI Features &mdash; Data Shared with Anthropic
          </h2>
          <p>
            Some features of the Service are powered by a third-party artificial
            intelligence provider, <strong className="text-white">Anthropic, PBC</strong>{' '}
            (&quot;Anthropic&quot;), located in the United States. To provide these
            features we transmit personal data, including health and fitness data, to
            Anthropic. This section describes that disclosure in detail.
          </p>

          <h3 className="text-white font-semibold mt-6 mb-2">Affected Features</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Prometheus Coach</strong> &mdash; AI chat coaching based on your training profile</li>
            <li><strong className="text-white">Form Analysis</strong> &mdash; movement analysis of workout videos</li>
            <li><strong className="text-white">Nutrition Scan</strong> &mdash; meal recognition from photos</li>
          </ul>

          <h3 className="text-white font-semibold mt-6 mb-2">Data Transmitted to Anthropic</h3>
          <p className="mb-3">
            Depending on the feature you use, the following data is transmitted to
            Anthropic:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Your chat messages and the recent conversation history with the AI coach</li>
            <li>Your display name, age, gender, height, weight, body measurements and body fat percentage</li>
            <li>Health profile data you provided, including medical conditions, injuries, allergies and dietary preferences</li>
            <li>Training data: workout history, exercise performance, personal records, velocity-based training (VBT) metrics, training goals, active training programs and competition history</li>
            <li>Nutrition data: food logs, macro- and micronutrient intake, and nutrition plans</li>
            <li>Health and wearable data read from Apple Health / Health Connect, where you have granted that permission: body weight, body fat, sleep duration and sleep stages, heart rate variability, resting heart rate and VO2max</li>
            <li>Still image frames extracted from workout videos, for Form Analysis</li>
            <li>Photos of meals, for Nutrition Scan</li>
          </ul>
          <p className="mt-3">
            We do <strong className="text-white">not</strong> transmit payment or billing
            data, authentication tokens, passwords, or location data to Anthropic.
            Requests are not sent from your device directly; they are routed through our
            own servers hosted at Supabase in the EU and forwarded to Anthropic&apos;s API.
          </p>

          <h3 className="text-white font-semibold mt-6 mb-2">Purpose</h3>
          <p>
            The sole purpose of this disclosure is to generate the AI output you
            requested: coaching responses, movement feedback, or recognition of the food
            in a photo. We do not disclose your data to Anthropic for advertising,
            profiling, or any purpose unrelated to the feature you invoked.
          </p>

          <h3 className="text-white font-semibold mt-6 mb-2">Your Consent &mdash; AI Features Are Optional</h3>
          <p>
            No personal data is sent to Anthropic unless you have first granted explicit,
            separate consent in the app. Before the first use of any AI feature, the app
            presents a consent screen naming Anthropic, the data categories involved and
            the purpose, and you must actively accept it. If you decline, no data is sent
            to Anthropic and you can continue to use every other part of the Service.
          </p>
          <p className="mt-3">
            You may withdraw this consent at any time, as easily as you gave it: open the
            app and turn off <strong className="text-white">Account &rarr; Settings &rarr;
            AI Features</strong>. No email, no request, no waiting period. You can also
            contact us at{' '}
            <a href="mailto:hello@prometheus.coach" className="text-accent hover:underline">
              hello@prometheus.coach
            </a>
            {' '}if you prefer. Withdrawal takes effect immediately, disables the AI features
            and stops any further disclosure to Anthropic; it does not affect the lawfulness
            of processing carried out before the withdrawal.
          </p>

          <h3 className="text-white font-semibold mt-6 mb-2">Anthropic&apos;s Role and Retention</h3>
          <p>
            Anthropic acts as our processor and is bound by Anthropic&apos;s Commercial
            Terms of Service and its Data Processing Addendum. Under those terms,
            Anthropic does not use data submitted through its commercial API to train its
            models, and retains such data only for a limited period for abuse monitoring
            and operational purposes before deleting it. Anthropic&apos;s own privacy
            policy is available at{' '}
            <a
              href="https://www.anthropic.com/legal/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              anthropic.com/legal/privacy
            </a>
            .
          </p>

          <h3 className="text-white font-semibold mt-6 mb-2">International Transfer</h3>
          <p>
            Anthropic processes this data in the United States. The transfer takes place
            on the basis of your explicit consent pursuant to Art. 49(1)(a) GDPR and is
            additionally covered by Standard Contractual Clauses (SCCs). Health data is
            special category data under Art. 9 GDPR; we process and disclose it solely on
            the basis of your explicit consent pursuant to Art. 9(2)(a) GDPR.
          </p>
        </section>

        {/* Legal Basis */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">6. Legal Basis for Processing</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Contract:</strong> Processing necessary to provide the Service you signed up for</li>
            <li><strong className="text-white">Consent:</strong> For health/fitness data processing and camera usage</li>
            <li><strong className="text-white">Explicit Consent (AI features):</strong> Art. 6(1)(a), Art. 9(2)(a) and Art. 49(1)(a) GDPR for the disclosure of your data, including health data, to Anthropic in the USA (see section 5)</li>
            <li><strong className="text-white">Legitimate Interest:</strong> Analytics, security, and Service improvement</li>
            <li><strong className="text-white">Legal Obligation:</strong> Tax records, fraud prevention</li>
            <li><strong className="text-white">Data Partnerships:</strong> Data shared with third-party partners is fully anonymized within Prometheus systems before disclosure and does not constitute personal data under the GDPR. No legal basis under Art. 6 or Art. 9 GDPR is required for these datasets.</li>
          </ul>
        </section>

        {/* Third Parties */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">7. Third-Party Services</h2>
          <p className="mb-4">We share data with the following processors, all of whom are contractually bound to protect your data:</p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong className="text-white">Supabase</strong> (EU) &mdash; Database hosting, authentication, and file storage</li>
            <li>
              <strong className="text-white">Anthropic, PBC</strong> (USA) &mdash; AI engine
              for the Prometheus Coach chat, Form Analysis and Nutrition Scan features.
              Receives chat messages, your training and health profile, health and
              wearable data, workout video frames and meal photos. Disclosed only with
              your explicit prior consent &mdash; see section 5 for the full description.
            </li>
            <li>
              <strong className="text-white">Apple</strong> (USA / EU) &mdash; iOS app
              distribution via the App Store, In-App Purchase and subscription billing,
              HealthKit (read access to the health data you approve), and push notifications
              via the Apple Push Notification service. Apple receives purchase and device
              data under its own privacy policy; HealthKit data is read on your device and
              is not passed to Apple by us.
            </li>
            <li><strong className="text-white">Google</strong> (USA) &mdash; Sign in with Google (both platforms), and on Android: Play Store services, Google Play Billing (payments), ML Kit (on-device pose detection, barcode scanning, text recognition), Firebase Crashlytics (crash reporting), and the Health Connect API</li>
            <li><strong className="text-white">USDA FoodData Central</strong> (USA) &mdash; Public nutrition database for food lookups</li>
            <li><strong className="text-white">Meta</strong> (USA) &mdash; Instagram Story sharing, only when you explicitly share content. On Android this uses the Facebook SDK; on iOS the image is handed to the Instagram app through the operating system and no Meta SDK is embedded in our app.</li>
          </ul>
          <p className="mt-4">
            For transfers outside the EU/EEA, we rely on Standard Contractual Clauses (SCCs) or
            equivalent legal mechanisms to ensure adequate data protection.
          </p>
        </section>

        {/* Data Retention */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">8. Data Retention</h2>
          <p>
            We retain your personal data for as long as your account is active or as needed to
            provide the Service. After account deletion, your data is permanently removed within
            30 days, except where retention is required by law (e.g., tax records for up to 7
            years).
          </p>
        </section>

        {/* Your Rights */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">9. Your Rights (GDPR)</h2>
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
          <h2 className="text-xl font-bold text-accent mb-4">10. Data Security</h2>
          <p>
            We implement industry-standard security measures including encryption in transit
            (TLS), encryption at rest, access controls, and regular security audits. However,
            no method of transmission over the Internet is 100% secure, and we cannot guarantee
            absolute security.
          </p>
        </section>

        {/* Children */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">11. Children&apos;s Privacy</h2>
          <p>
            The Service is not intended for children under 16 years of age. We do not knowingly
            collect data from children under 16. If you believe we have collected data from a
            child, please contact us immediately.
          </p>
        </section>

        {/* Changes */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any
            material changes by posting the new policy on this page and updating the &quot;Last
            updated&quot; date. Your continued use of the Service after any changes constitutes
            acceptance of the updated policy.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h2 className="text-xl font-bold text-accent mb-4">13. Contact Us</h2>
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
