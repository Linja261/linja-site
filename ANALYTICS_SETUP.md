# Analytics-Setup linja.me (Umami, cookieless)

Tracking-Code, Funnels, Datenschutz-Text und Dashboard sind **fertig im Code**. Es fehlt nur die
einmalige Scharfschaltung. Solange die Website-ID nicht gesetzt ist, lädt `analytics.js` bewusst
**nichts** — die Seite bleibt tracking-frei, kein Fehler.

## Deine 3 Schritte (≈ 10 Min, einmalig)

### 1. Umami-Account + Website anlegen
- Auf **https://cloud.umami.is** registrieren (kostenloser Hobby-Tarif).
  → Beim Erstellen **EU-Region** wählen, wenn angeboten (DSGVO/Datenstandort).
- Neue Website hinzufügen: Name „linja.me", Domain „linja.me".
- Aus den Tracking-Anweisungen die **Website-ID** kopieren (UUID, sieht aus wie `xxxxxxxx-xxxx-...`).

### 2. Website-ID in den Code setzen
In `analytics.js` (Repo-Root) die eine Zeile ersetzen:
```js
var WEBSITE_ID = '__UMAMI_WEBSITE_ID__';   // ← hier echte ID rein
```
Wenn du in Schritt 1 die **EU-Region** gewählt hast, zusätzlich:
```js
var SCRIPT_SRC = 'https://eu.umami.is/script.js';
```
Dann committen + pushen (oder Claude macht das auf Zuruf).

### 3. API-Key für den Wochen-Report hinterlegen
Damit Claude dir 1x/Woche die Zahlen ziehen und das Dashboard füllen kann:
- In Umami: **Settings → API Keys → Create** → Key kopieren.
- Lokal auf dem Mac anlegen (liegt **nie** im Repo):
```bash
mkdir -p ~/.claude-analytics
cat > ~/.claude-analytics/.env <<'EOF'
UMAMI_API_KEY=DEIN_API_KEY
UMAMI_WEBSITE_ID=DEINE_WEBSITE_ID
UMAMI_API_BASE=https://api.umami.is/v1
EOF
```

Fertig. Ab dann: Daten laufen ein, und im Freitags-Check-out (oder per `/analytics`) baue ich das
Dashboard unter **linja.me/office/analytics.html** und melde dir die Funnel-Trends.

## Was getrackt wird
- **Alle** öffentlichen + versteckten Seiten (Blog, Angebote, ag-service-Pilot, Recht-Seiten).
- **Ausgenommen:** dein privates `office/`-Cockpit (verfälscht die Zahlen sonst).
- Events: Kontakt-Klicks (Mail/Tel/CTA), Angebots-CTAs, Reader-Audio-Play, DE/EN-Wechsel,
  Artikel-zu-Ende-gelesen (75%), Termin-Buchung, Outbound (LinkedIn/Substack).
- **Cookieless** → kein Consent-Banner nötig. Datenschutzerklärung ist bereits angepasst.

## Opt-out für dich selbst (optional)
Falls du auf einer öffentlichen Seite mal nicht gezählt werden willst, in der Browser-Konsole:
```js
localStorage.setItem('linja-no-track','1')
```
