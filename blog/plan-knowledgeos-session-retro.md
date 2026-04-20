# Artikelplan: Memory allein reicht nicht. Warum mein KnowledgeOS zwei Lernschleifen braucht.

> **Slug:** `knowledgeos-session-retro` (oder kürzer: `kos-zwei-schleifen`)
> **Ziel-Veröffentlichung:** Mai 2026
> **Modus:** Erfahrungsbericht + Systemreflexion (Writing Style Guide Modus 1–2 Mix)
> **Lernfeld:** KI-gestütztes Produktmanagement, Knowledge Management, Mensch-KI-Kollaboration
> **Format:** Eigener Bau dokumentiert. Konkret genug, um nachbaubar zu sein.
> **Status:** Draft. Wird live während der Session-Retros weitergefüllt.

---

## Kernthese (Stand 2026-04-20)

Ein persönliches KnowledgeOS speichert zwei Dinge: **was du weißt** und **wie du arbeitest**. Das meiste geht beim Ersten gut – Notizen, Wikis, Zweitgehirne. Das Zweite ist härter: Arbeitsmuster, Frustsignale, unausgesprochene Erwartungen. Sie zeigen sich nur im Tun, nicht im Denken. Wer das nicht regelmäßig zurückliest, trainiert seine KI-Assistenz mit halben Daten.

---

## Artikelstruktur (5 Blöcke nach Baukasten)

### Block 1: Kernbotschaft + Problem (~100 Wörter)
Vor drei Monaten habe ich angefangen, meine Zusammenarbeit mit Claude systematisch zu trainieren – über Memory-Files, Regeln, Slash-Commands. Es funktioniert gut. Aber es hat eine blinde Stelle: Alles, was in Memory steht, musste ich vorher aussprechen. Die Dinge, die ich nie ausspreche – wie ich Sätze anfange, wann ich kurz angebunden werde, welche Formate ich kommentarlos wegwische – tauchen dort nie auf. Also trainiert sich die KI auf halbe Daten.

### Block 2: Fundierung (~400-600 Wörter)
**Darstellungsformat:** Prosa mit 3 Subsections

**Subsection 2a: Deklarative vs. prozedurale Erinnerung**
- Cognitive Science kennt den Unterschied: **Deklaratives Wissen** (Fakten, Regeln, "ich weiß, dass") vs. **prozedurales Wissen** (Fertigkeiten, Gewohnheiten, "ich weiß, wie"). ¹
- Knowledge-Management-Systeme adressieren fast ausschließlich das Deklarative: Notizen, Karteikarten, Zweitgehirne. Das Prozedurale wird ignoriert, weil es schwer formalisierbar ist.
- Für Mensch-KI-Kollaboration ist das aber die wichtigere Hälfte. Die KI muss nicht nur wissen, was du weißt – sie muss wissen, wie du arbeitest.

**Subsection 2b: Explizite vs. implizite Signale**
- Explizit: "Bitte keine Emojis", "Deutsch im Chat", "direkt auf main arbeiten". Das landet in Memory, funktioniert gut.
- Implizit: Wiederkehrende Formulierungen ("eigentlich frage ich mich…"), Abbruchsignale, akzeptierte-aber-nicht-gelobte Formate, Zeit-Muster.
- Dazwischen: Die **Bestätigung ohne Worte**. Wenn ich drei Sessions lang keinen Einspruch gegen einen Ansatz erhebe, ist das ein Signal – aber kein Memory-Eintrag.

**Subsection 2c: Die zwei Loops, die ein lebendes KOS braucht**
- **Explicit Loop (Freitags-Review):** Ich ziele auf beobachtbare Skills und Methoden. Was habe ich diese Woche neu gelernt? Was soll ins CV? – Das ist der bewusste Akt des Weiterlernens.
- **Implicit Loop (Monats-Retro):** Die KI scannt alte Sessions und extrahiert Muster, die ich selbst nicht gesehen habe. Frust-Signale, Workflow-Übergänge, Anti-Patterns. – Das ist der Blick auf mich von außen.
- Beide zusammen: Deklarativ + prozedural. Das KOS lernt, wie ich denke UND wie ich arbeite.

---

### Block 3: Was ich verändert habe (~100-200 Wörter)
**Reifegrad:** EXPERIMENT (eingeführt am 2026-04-20, Wirkung offen).

Ich habe einen neuen Skill gebaut: `/session-retro`. Er läuft einmal im Monat, im Morgen-Check-in (weil ich da Zeit habe, nicht im Stress). Er macht drei Dinge:
1. **Muster extrahieren:** Ein Sub-Agent liest alte Sessions und sucht nach impliziten Signalen, die nicht in Memory stehen.
2. **Kandidaten präsentieren:** Maximal sieben Muster pro Lauf, jedes mit Evidenz. Ich entscheide pro Kandidat: speichern, ergänzen, verwerfen.
3. **Aufräumen:** Sessions älter als 30 Tage wandern ins Archiv. Die Seitenleiste wird wieder übersichtlich.

Der Skill ersetzt kein Feedback im Moment. Er fängt nur das ab, was im Alltag durchrutscht.

---

### Block 4: Kritische Einordnung (~100-150 Wörter)
- **Beobachter-Bias:** Ein Agent, der Muster sucht, findet welche. Die Frage ist, ob sie echt sind. Deshalb die harte Regel: nur übernehmen, was ich bestätige – niemals Auto-Save.
- **Survivor Bias bei Sessions:** Nicht jede Session ist gleich aussagekräftig. Kurze Ping-Pong-Sessions zeigen wenig; lange Iterations-Sessions mehr. Mining muss das gewichten.
- **Meta-Overhead:** Jede Review-Schleife kostet Zeit. Wenn der Retro monatlich länger als 30 Minuten dauert, zahlt er sich vermutlich nicht aus. Wenn er nichts findet, auch nicht.
- **Nicht übertragbar auf Teams.** Das hier ist Solo-Arbeit. Im Team-Kontext verschwimmen implizite Muster, weil mehrere Leute dieselbe KI unterschiedlich trainieren.

---

### Block 5: Was bleibt für jeden Tag (~50-100 Wörter)
- **Explizit + Implizit = echtes Gedächtnis.** Memory allein ist die halbe Miete.
- **Bestätigung ist auch Feedback.** Was du drei Mal ohne Einwand akzeptiert hast, ist Teil deines Stils.
- **Archivierung ist kein Admin, sondern Hygiene.** Eine volle Session-Liste macht blind für das, was aktuell zählt.

---

## Kernerkenntnis-Quote

"Eine KI, die nur weiß, was ich ihr gesagt habe, kennt mich nur halb. Die andere Hälfte steht in dem, was ich nie aussprach."

---

## Quellen (vorläufig)

1. **Cohen, N. J. & Squire, L. R. (1980).** *Preserved learning and retention of pattern-analyzing skill in amnesia: Dissociation of knowing how and knowing that.* Science. – Deklarativ vs. prozedural.
2. Noch offen: Quelle zu impliziter Kommunikation in Mensch-KI-Kollaboration (Anthropic-Blog, Teresa Torres, Ethan Mollick?). **→ Vor Publikation ergänzen.**
3. Noch offen: Quelle zu "quiet acceptance" als Feedback-Signal. **→ Vor Publikation ergänzen.**

---

## Glossar (vorläufig)

- **Deklaratives Wissen** — Wissen, das in Worte zu fassen ist (Fakten, Regeln).
- **Prozedurales Wissen** — Wissen, das sich im Tun zeigt (Fertigkeiten, Gewohnheiten).
- **Memory (in Claude Code)** — Persistenter Speicher für Fakten, Präferenzen, Projekte, die über Sessions hinweg erinnert werden.
- **Session** — Einzelne Unterhaltung mit Claude, gespeichert als JSONL-Datei unter `~/.claude/projects/…`.
- **Skill / Slash-Command** — Auslösbarer Workflow (`/checkin`, `/session-retro`), der über eine Markdown-Datei definiert ist.

---

## Live-Beobachtungen (werden während der Retros weitergefüllt)

> Claude ergänzt hier bei jedem Session-Retro neue Beobachtungen – was beim Retro-Lauf aufgefallen ist, welche KOS-Stärken und -Schwächen sichtbar wurden.

### 2026-04-20 – Setup-Session (Initial-Build)

**Was funktioniert am KOS:**
- **Drei-Ebenen-Trennung** (CLAUDE.md / Rules / Skills) + Memory ist klar und redundanzarm. Jede neue Funktion findet sauber ihren Platz – für `/session-retro` war die Ablage in 5 Minuten klar.
- **Bestehender `/checkout` hat bereits Skill-Beobachtung (4g).** Das Muster "Claude schlägt vor, Linja entscheidet" ist etabliert – `/session-retro` konnte es direkt übernehmen. Gutes Zeichen: Das System hat Idiome.
- **Der Slash-Command-Layer wächst organisch.** 16 Commands ohne Overengineering-Gefühl. Jeder hat einen klaren Auslöser.

**Was an Schwäche sichtbar wurde:**
- **CLAUDE.md sagt "Skills liegen in `.claude/skills/*/SKILL.md`", tatsächlich leben die auslösbaren Commands aber in `.claude/commands/*.md`.** Kleine Dokumentations-Drift – nicht weltbewegend, aber verwirrend beim Navigieren. **Kandidat für nächste Aufräumrunde.**
- **Kein systematisches Session-Hygiene-Konzept vorher.** Die Seitenleiste ist vollgelaufen, bis es nervte. Die Archivfunktion war überfällig – sie hätte von Anfang an Teil des Setup-Guides sein können.
- **Der Wochenloop (`/checkout` 4g) ist gut, fängt aber nur bewusstes Verhalten.** Ohne monatlichen impliziten Loop bleibt ein ganzes Signal-Band dunkel. Dieser Artikel ist die Dokumentation, dass ich die Lücke gesehen habe.

**Meta-Beobachtung zum Bauen selbst:**
- **Die Konversation, in der dieser Skill entstanden ist, war selbst eine Demo.** Ich habe nicht per Brief-Spec gebaut, sondern im Dialog – Claude hat Trade-offs explizit gemacht (Background vs. gemeinsam, Archiv-Ort, Insights-Sammlung). Das ist prototypisches KI-gestütztes PM: Werkzeug, Gesprächspartner, Co-Builder in einer Session.

### [Nächster Retro – Datum]
_wird ergänzt_

---

## To-Do vor Publikation
- Mindestens 1 Session-Retro tatsächlich durchlaufen und Erkenntnisse einpflegen
- 2–3 konkrete Muster-Beispiele aus echten Retros einbauen (mit Zitat-Anonymisierung, falls nötig)
- Quellen ergänzen (siehe Quellen-Liste)
- Entscheiden: Ein längerer Artikel über das KOS-Gesamtkonzept – oder dieser fokussierte über die zwei Loops?
- Writing-Style-Guide-Check durchlaufen
