# Prometheus Homepage — CLAUDE.md

Die Marketing-Website auf `prometheus.coach`. **Nicht** die Produkt-App (die
liegt auf `enterprise.prometheus.coach`). Dieses Repo verkauft das Ökosystem,
es ist kein Teil davon.

**Chat-/Antwortsprache: Deutsch.** Der Website-Text ist aktuell Deutsch;
EN/FR sollen folgen (siehe „Offene Punkte").

## Stack

React 19 · Vite 7 · Tailwind v4 (`@tailwindcss/vite`) · framer-motion ·
lucide-react · react-router-dom 7 · Supabase-Client (nur für Auth-Callback).

```
npm run dev      # Vite Dev-Server
npm run build    # Production-Build nach dist/
npm run preview  # Build lokal prüfen
```

Deployment: **Render** (`render.yaml`), Apex-DNS zeigt dorthin.

### Nicht anfassen — bricht die Mobile-Apps

`public/.well-known/apple-app-site-association` und
`public/.well-known/assetlinks.json` müssen byte-identisch am Apex-Origin
ausgeliefert werden. Sonst brechen Universal Links (iOS) und App Links
(Android) in beiden Member-Apps. Details in
`Prometheus-Enterprise/docs/DOMAINS.md`.

`public/_headers` steuert das Ausliefern dieser Dateien mit.

---

## Das Ökosystem — alle Repos

Prometheus ist **ein Backend, eine Identität, viele Oberflächen**. Wer an der
Website arbeitet, holt Produktwahrheit aus diesen Repos — nie aus dem
Gedächtnis und nie aus alten Marketing-Texten.

| Rolle | Pfad |
|---|---|
| **Enterprise Web** (Studio-Cockpit, HQ, CEO-Pulse, Desk, Tablets) | `/Users/danielepauli/Desktop/Prometheus-Enterprise` |
| **Coach Web** (PT-Arbeitsplatz + Studio Light Backoffice) | `/Users/danielepauli/AndroidStudioProjects/prometheus_coach` |
| **Coach Mobile (Android)** | `/Users/danielepauli/AndroidStudioProjects/PrometheusCoachMobile` |
| **Coach Mobile (iOS)** | `/Users/danielepauli/iOSProjects/PrometheusCoach` |
| **Member App (Android)** | `/Users/danielepauli/AndroidStudioProjects/Prometheus/Prometheus_V1` |
| **Member App (iOS)** | `/Users/danielepauli/iOSProjects/Prometheus_iOS` |
| **LED Pro Studio (Android)** | `/Users/danielepauli/AndroidStudioProjects/LED_PRO` |
| **LED Pro Web/HQ-Portal** | `/Users/danielepauli/AndroidStudioProjects/ledpro-web` |
| **Admin „The Forge"** (intern) | `/Users/danielepauli/AndroidStudioProjects/prometheus-admin` |
| **Diese Website** | `/Users/danielepauli/Desktop/prometheus-homepage` |

Wurzel des Member-Android-Projekts ist `…/AndroidStudioProjects/Prometheus/`
(enthält `Prometheus_V1`, `androidApp`, `wear`, `shared`, `backend`,
`supabase`). Die App selbst liegt in **`Prometheus_V1`** — mit Unterstrich.

Weitere Repos existieren (`prometheus-saas`, `Cointracker`, …), gehören aber
nicht zum Produkt.

### Was davon auf die Website darf

- **The Forge** (`prometheus-admin`) ist intern — **nie** auf der Website zeigen.
- **LED Pro: aktuell NICHT auf der Website** (Entscheidung 2026-07-24, „vorerst
  raus"). Die fertige Sektion liegt geparkt in
  `src/components/site/LedProSection.jsx` — gebaut, aber absichtlich nicht in
  `HomePage.jsx` eingebunden. Vor dem Wiedereinbinden mit Daniele klären.
  Inhaltlich gilt dann weiter: LED Pro ist ein eigenes Produkt derselben Firma
  (Peakforce), in Enterprise **integrierbar** — nicht als ausgeliefertes
  Enterprise-Feature darstellen.

---

## Quellen der Wahrheit (Reihenfolge zählt)

Bei Widersprüchen gewinnt **Code vor Doc, neueres Doc vor älterem**.

1. `Prometheus-Enterprise/src/config/plans.ts` — Enterprise-Preise, an Stripe
   verdrahtet. **Das ist die Preis-Wahrheit.**
2. `Prometheus-Enterprise/docs/INVESTOR_BRIEFING_EN.pdf` (+ `.md`) — aktueller
   Stand von Produkt, Vertrieb und Pipeline. **Vertraulich** — Inhalte nicht
   ungeprüft veröffentlichen.
3. `Prometheus-Enterprise/docs/WEBSITE_REDESIGN_BRIEF_JESSE.md` — der
   Website-Brief: Positionierung, Tonalität, Brand-Tokens, IA. Vom 26.05.2026,
   in Teilen von neueren Dokumenten überholt.
4. `prometheus_coach/docs/COACH_PRODUCT_PRICING.md` — Coach-Preise.
5. `Prometheus/PRICING.md` — Member-App-Preise (B2C).
6. `prometheus_coach/docs/STUDIO_LIGHT_LAUNCH.md` — Studio-Light-Umfang und
   was noch fehlt.
7. `dev_log.md` in `prometheus_coach` und `PrometheusCoachMobile` — was zuletzt
   wirklich gebaut wurde.

### Preis-Wahrheit (Stand 2026-07-23)

**Enterprise** — aus `plans.ts`, Stripe-verdrahtet. Alle Tiers haben **alle**
Features; gestaffelt wird nur nach Größe.

| Tier | Preis | Aktive Mitglieder | Multi-Standort |
|---|---|---|---|
| Starter | 149 | bis 250 | – |
| Studio ★ | 249 | bis 1'000 | – |
| Pro | 399 | unbegrenzt | ✓ pro Standort |

Währung: **EUR** für DE/AT, **CHF** für CH — gleiche Zahl. 30 Tage Trial.

**Coach** — aus `COACH_PRODUCT_PRICING.md`, in USD, gestaffelt nach
Klientenzahl: Basic $29 / $59 / $89 / $129 (10 / 25 / 50 / 100 Klienten),
Pro (mit AI) $69 / $119 / $169 / $229. 14 Tage Pro-Trial.

**Member-App** — aus `Prometheus/PRICING.md`, B2C, zahlt das Mitglied:
Free $0 · Premium $5.90/Mt ($59/Jahr) · Elite $9.90/Mt ($99/Jahr) ·
Titan $199 einmalig (limitiert auf 500 Slots).

**Studio Light** — $129/Mt laut `PRICING_SHEET.md`, aber **nicht in
`plans.ts`**. Vor dem Veröffentlichen einer Zahl gegen den Code prüfen.

> ⚠️ **Bekannter Widerspruch:** `Prometheus-Enterprise/docs/PRICING_SHEET.md`
> (26.06.) nennt Enterprise in **USD** und Coach Pro mit $49/79/119/189. Beides
> widerspricht `plans.ts` (EUR/CHF) bzw. `COACH_PRODUCT_PRICING.md`
> ($69/119/169/229). Bis Daniele das auflöst gilt: **Code vor Doc.** Auf der
> Website eher Einstiegspreise („ab €149", „ab $29") zeigen als volle Tabellen.

---

## Inhaltsregeln — hart

Aus dem Website-Brief §2/§6, und sie gelten weiter:

- **Keine erfundenen Zahlen.** Keine „Lines of Code", keine „< 1s Sync",
  keine „99,9% Uptime", keine Prozentzahlen ohne Beleg im Repo. Wenn eine Zahl
  auf die Seite soll, muss sie aus Code oder einem Doc kommen — mit Fundstelle.
- **Keine Wettbewerbernamen.** Nie Magicline, EGYM, Perfectgym, Mindbody,
  Glofox o.ä. Stattdessen „die etablierten Anbieter", „die Alternative".
- **Keine Kundenlogos, -namen oder Zitate ohne schriftliche Freigabe.** Die
  Pipeline im Investor-Briefing (Let's Go Fitness, Prime Time Fitness, …) sind
  **Prospects, keine unterschriebenen Kunden** — nicht öffentlich nennen, bis
  Daniele freigibt. **Auch die Vertriebspartner (LED Pro Solutions, neweffect
  GmbH) stehen aktuell nicht auf der Seite** — am 2026-07-24 bewusst entfernt
  („vorerst raus"). Die Seite nennt damit derzeit **keine** Dritten. Erst nach
  Freigabe wieder aufnehmen.
- **Keine unausgelieferten Compliance-Versprechen.** Deutsche Kassensicherung
  (KassenSichV/TSE via fiskaly) ist **nicht verdrahtet**
  (`pos_v2_seed_de.sql:33` → `is_active=false`;
  `STUDIO_LIGHT_LAUNCH.md` → „separat via fiskaly nach Launch"). Also nicht
  behaupten. Schweizer Buchhaltung (LSV+/PostFinance, TWINT, CHF,
  MWST-Abrechnung, Bilanz/Erfolgsrechnung) ist real.
- **Kein „API / Integrationen / Marketplace".** Das geschlossene System ist
  Absicht und Verkaufsargument.
- **Member-App nie „kostenlos" nennen** — sie ist Freemium: „kostenlos
  starten".

---

## Design

Brand-Tokens aus dem Produkt (`src/index.css`), damit der Übergang
Website → Trial sich wie dieselbe Firma anfühlt.

- **Akzent: genau eine Farbe** — warmes Orange `#E67E22`
  (`--color-accent`), hell `#F39C12`, dunkel `#D35400`.
  **Keine zweite Akzentfarbe einführen.** Kein Indigo, kein Emerald, kein
  Purple. Rot ist ausschließlich für Schmerz-/Fehlerzustände erlaubt.
- **Dunkel als Basis**, Glassmorphism: `.glass` / `.glass-strong` in
  `src/index.css` (halbtransparente Füllung + `backdrop-filter: blur()` +
  1px Rand). **Keine flachen grauen Karten.**
- **Schrift:** `font-display` = Space Grotesk (Headlines),
  `font-body` = Poppins (Fließtext). Beide via Google Fonts in `index.html`.
- **Signature-Glow:** `0 0 30px rgba(230,126,34,0.3)` — sparsam, nur auf
  aktiven CTAs und fokussierten Hero-Elementen.
- **Motion:** framer-motion, zurückhaltend. Das Ökosystem-Diagramm darf
  auffallen, sonst nichts. Kein Karussell-Kitsch.
  **Ausnahme Hero:** dort läuft die Einblendung über die CSS-Klasse
  `.hero-rise` und **nicht** über framer-motion. Grund: framer-motion animiert
  per `requestAnimationFrame`, das in einem gedrosselten oder im Hintergrund
  liegenden Tab stillsteht — der Inhalt bleibt dann auf `opacity: 0` hängen.
  CSS-Animationen sind zeitbasiert und zeigen den Endzustand trotzdem. Was
  über der Falz liegt, darf nie von einer JS-Animation abhängen.
- **Screenshots:** echte Produkt-Screenshots aus `public/images/surfaces/` und
  `public/images/screenshots/` — nie in CSS nachgebaute Fake-Dashboards.
  Alle `dark-*.webp` sind auf 1600 px Breite gerechnet und als WebP abgelegt
  (zusammen ~560 KB). Neue Aufnahmen bitte genauso behandeln, nicht als PNG
  einchecken.

### Screenshots — Herkunft und Prüfpflicht

Die Aufnahmen stammen aus
`Prometheus-Enterprise/docs/presentation-screens/`. **Vor dem Einbinden jedes
Bild öffnen und prüfen**, ob es Kundenmarken oder Personendaten zeigt:

- `prime-gold/` — Demo-Kette „Studio Apex", unbedenklich. Quelle für HQ, CEO,
  Dashboard, Onboard.
- `letsgo-blue/` — **trägt echtes Kundenbranding.** Nur die Bilder ohne
  Kopfzeile verwendbar (Facility, Accounting, Social). Kiosk und HQ zeigen den
  Kundennamen; der Kiosk-Shot ist deshalb oben beschnitten.
- `jesse-brief/` — heller Orange-Wash, passt nicht zur dunklen Seite. Nicht
  mehr verwendet.

Beim Zuschneiden von Demo-Bannern und Kopfzeilen half `PIL`; `sips --cropOffset`
funktioniert auf diesem Rechner nicht.

### Farb-Vereinheitlichung (Stand 2026-07-24)

Der Kunde störte sich an gemischten Screenshot-Farben (orange „Studio Apex"
neben blau „Let's Go"). Behandlung:

- **Orange (bereits so):** hq, dashboard, ceo, desk, coach, onboard, welcome.
- **Blau → Orange umgefärbt** per `ffmpeg -vf "hue=h=168"` (Blau-Hue ~220 auf
  Orange ~28): **accounting, kiosk**. Klappt nur bei reinem UI; QR-Codes bleiben
  schwarzweiß. Kommt aus `letsgo-blue/`-Originalen.
- **Bleibt blau — Recolor scheitert an Fotos/Statusfarben:** `facility`
  (rot/grün/blau Status-Chips drehen auf falsche Farben), `social` (Gym-Fotos
  werden türkis), **Mitglieder-App** (`public/images/screenshots/*`, Foodfotos).
  Diese brauchen eine **Neuaufnahme gegen den orangen Demo-Mandanten**.

**Neuaufnahme in Orange:** Die Markenfarbe im Capture kommt vom Demo-Mandanten,
nicht von einem Flag — „Studio Apex" rendert orange, „Let's Go" blau (siehe
`Prometheus-Enterprise/scripts/capture-presentation-screens.ts`, seedet nur
`prometheus_demo_mode` + `theme=dark`). Für orange Desktop-Shots also gegen den
Studio-Apex-Mandanten laufen. Die **Member-App-Screens stammen aus der Mobile-App**
(`Prometheus/Prometheus_V1` bzw. `Prometheus_iOS`) und müssen dort im
Orange-Build aufgenommen werden — nicht über das Web-Capture-Script.

### 3D-Geräte-Mockups („bring to life")

Der Video-Look (schwebende, gekippte iPhone-Mockups mit Tiefe/Glow) ist **im
Code** gebaut, nicht per Bildgenerator — echter Screenshot + 3D-Rahmen, die
Pixel bleiben unangetastet (keine erfundenen Zahlen). CSS-Klassen in
`index.css`: `.device-stage` (Perspektive), `.device-float` (Bob-Animation),
`.phone-shell` / `.phone-screen` / `.phone-island` (Geräterahmen),
`.device-shadow` (Bodenschatten). Verwendet in `MemberSection.jsx` (gefächerte
Phones) und `SurfacesSection.jsx` (Phone-Oberflächen).

> **Warum kein Gemini:** Bildgeneratoren malen die Produkt-UI neu und erfinden
> Zahlen/Text — verstößt gegen „keine erfundenen Zahlen" und stellt das Produkt
> falsch dar. Automatischer Upload zu Gemini scheitert ohnehin am nativen
> Datei-Dialog (kein `<input type=file>` im DOM ansteuerbar).

### Komponenten

`src/components/site/` — die Homepage-Sektionen. `Section.jsx` liefert
`<Section>`, `<SectionHeader>` und `<Reveal>`; neue Sektionen bauen darauf auf,
statt Abstände neu zu erfinden.

`src/components/` (Wurzel) enthält die **alte** Seite (Hero.jsx, Technology.jsx,
Team.jsx …). Wird von `HomePage.jsx` nicht mehr benutzt — noch nicht gelöscht,
weil `GrowthPitch.jsx` teilweise darauf zugreift. Nicht als Vorlage nehmen.

`src/context/DemoModalContext.jsx` — `useDemoModal().openDemo()` öffnet das
Demo-Formular. Jeder „Demo buchen"-CTA geht darüber.

---

## Offene Punkte

- **Sprachen:** Seite ist DE-only. Die toten DE/EN/FR-Schalter im Footer sind
  entfernt. Englisch ist als eigener Schritt geplant (i18n-Layer, nicht
  Copy-Paste) und wegen des internationalen CrossFit-Rollouts relevant.
- **Unterseiten** aus dem Brief fehlen: `/studios`, `/coach`, `/app`.
  Der 3-Türen-Router im Hero scrollt derzeit nur zu Ankern.
- **Hell-Modus:** Der Brief fordert einen Umschalter (Produkt kann beides).
  Nicht gebaut.
- **Preis-Widerspruch** oben — Daniele muss `PRICING_SHEET.md` gegen
  `plans.ts` auflösen. Studio Light steht deshalb auf „auf Anfrage".
- **Frische Aufnahmen** würden am meisten bringen: `scripts/capture-presentation-screens.ts`
  gegen „Studio Apex" im Dunkelmodus, ohne Trial-Onboarding-Overlay und ohne
  Demo-Banner. Dann entfällt das Zuschneiden.
- **Der Buchhaltungs-Screenshot nennt den KI-Anbieter** („Claude reads the
  fields"). Falls das nicht öffentlich sein soll, neu aufnehmen.
