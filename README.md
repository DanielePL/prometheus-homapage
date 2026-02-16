# Prometheus - AI Fitness Coaching Platform

Eine moderne, responsive Website für die Prometheus Fitness-Coaching-App.

## Projektstruktur
```
prometheus-site/
├── index.html          # Hauptseite
├── css/
│   ├── main.css        # Basis-Styles
│   └── animations.css   # Animations
├── js/
│   └── main.js         # JavaScript Funktionalität
├── images/
│   ├── logo.png
│   ├── hero-bg.jpg
│   ├── phone-screens/
│   ├── features/
│   ├── screenshots/
│   └── icons/
├── package.json
├── .gitignore
└── README.md
```

## Installation & Setup

### Voraussetzungen
- [VS Code](https://code.visualstudio.com/) installiert
- Terminal/Command Line Zugriff
- Python 3 (für lokalen Server)

### Schritt 1: Projekt klonen/erstellen
```bash
# Ordner erstellen
mkdir prometheus-site
cd prometheus-site

# VS Code öffnen
code .
```

### Schritt 2: Ordnerstruktur erstellen
```bash
# Im Terminal:
mkdir -p css js images/phone-screens images/features images/screenshots images/icons
```

### Schritt 3: Dateien erstellen
- Kopiere `index.html` in den Ordner
- Erstelle `css/main.css` und kopiere den Code rein
- Erstelle `css/animations.css` und kopiere den Animations-Code rein
- Erstelle `js/main.js` und kopiere den JavaScript-Code rein

### Schritt 4: Bilder speichern
Speichere alle heruntergeladenen Bilder in den entsprechenden `images/` Ordnern.

---

## Lokal testen

### Methode 1: Python Server (einfach)
```bash
# Im Projekt-Ordner
python3 -m http.server 8000

# Dann öffne im Browser:
# http://localhost:8000
```

### Methode 2: VS Code Live Server Extension
1. Installiere die Extension "Live Server" von ritwickdey
2. Rechtsklick auf `index.html` -> "Open with Live Server"

### Methode 3: Node.js http-server
```bash
npm install -g http-server
http-server

# Öffne dann: http://localhost:8080
```

---

## CSS Anpassungen

### Farben ändern
In `css/main.css`, Zeile 13-21:
```css
:root {
    --primary-orange: #FF6B35;  /* Hier ändern */
    --dark-bg: #0f0f0f;
    --dark-gray: #1a1a1a;
    /* ... */
}
```

### Schriftart ändern
In `css/main.css`, Zeile 26:
```css
font-family: 'Deine Schriftart', sans-serif;
```

### Breite Container anpassen
In `css/main.css`, Zeile 52:
```css
.container {
    max-width: 1200px;  /* Hier ändern */
}
```

---

## Deployment

### Option 1: Vercel (Empfohlen - am einfachsten)
```bash
# 1. Vercel CLI installieren
npm install -g vercel

# 2. Im Projekt-Ordner anmelden
vercel login

# 3. Deployen
vercel

# 4. Folge den Anweisungen
# Deine Site ist sofort live!
```

**Deine Site ist dann unter:** `https://prometheus-site.vercel.app/`

### Option 2: Netlify
```bash
# 1. Netlify CLI installieren
npm install -g netlify-cli

# 2. Anmelden und deployen
netlify deploy

# 3. Wähle den Ordner: ./
# Deine Site ist live!
```

### Option 3: GitHub Pages
```bash
# 1. Git Repository initialisieren
git init
git add .
git commit -m "Initial commit"

# 2. Repository auf GitHub erstellen
# https://github.com/new

# 3. Remote hinzufügen
git remote add origin https://github.com/yourusername/prometheus-site.git
git branch -M main
git push -u origin main

# 4. GitHub Settings -> Pages -> main branch
# Deine Site ist unter: https://yourusername.github.io/prometheus-site/
```

---

## Responsive Design

Die Website ist responsive für:
- Mobile (320px - 480px)
- Tablet (481px - 1024px)
- Desktop (1025px+)

---

## Troubleshooting

### Bilder werden nicht angezeigt
- Überprüfe, ob die Dateien in den richtigen `images/` Ordnern sind
- Überprüfe die Pfade in HTML: `src="images/logo.png"`

### CSS wird nicht geladen
- Überprüfe, ob `css/` Ordner und `.css` Dateien vorhanden sind
- Überprüfe den Pfad: `<link rel="stylesheet" href="css/main.css">`

### JavaScript funktioniert nicht
- Öffne DevTools: `Cmd+Option+I` (Mac) oder `F12` (Windows)
- Schau in die Console für Fehler

---

## Lizenz

MIT License - Du kannst diese Website frei verwenden und modifizieren.
