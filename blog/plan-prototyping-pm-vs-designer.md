# Artikelplan: Wie prototype ich als PM?

> **Slug:** `prototyping-pm`
> **Ziel-Veröffentlichung:** April 2026
> **Modus:** Konzeptionell (Writing Style Guide Modus 2)
> **Lernfeld:** PM-Handwerk, Abgrenzung PM vs. Designer, KI-demokratisiertes Prototyping
> **Bezug:** Ergänzt den DT-Sprint-Artikel, steht aber eigenständig

---

## Kernthese

KI gibt PMs die Werkzeuge, die früher Designern vorbehalten waren. Aber gleiche Werkzeuge bedeuten nicht gleiche Perspektive. Ein PM prototypiert, um eine Hypothese zu testen. Ein Designer prototypiert, um eine Erfahrung zu gestalten. Die Stärke des PMs liegt nicht im Pixel, sondern im Framing: Was bauen wir, für wen, und warum gerade das?

---

## Artikelstruktur (5 Blöcke nach Baukasten)

### Block 1: Kernbotschaft + Problem (~100 Wörter)
Durch KI-Tools wie v0, Bolt und Claude kann heute jeder einen Prototyp bauen. Die Grenze zwischen PM und Designer verschwimmt. Das klingt nach Demokratisierung, schafft aber eine neue Frage: Wenn alle prototypen können, was macht den PM-Prototyp anders als den Designer-Prototyp? Die Antwort liegt nicht im Tool, sondern in der Intention dahinter.

### Block 2: Fundierung (~400-600 Wörter)
**Darstellungsformat:** Prosa mit 3 Subsections

**Subsection 2a: Zwei Perspektiven auf denselben Prototyp**

| Dimension | PM-Perspektive | Designer-Perspektive |
|-----------|---------------|---------------------|
| **Frage** | "Löst das ein echtes Problem?" | "Fühlt sich das richtig an?" |
| **Fokus** | Business Viability + User Value | Usability + Ästhetik + Emotion |
| **Prototyp-Ziel** | Hypothese validieren, Stakeholder überzeugen | Erlebnis testen, Interaktion verfeinern |
| **Detailgrad** | Bewusst niedrig (nur was nötig ist) | Bewusst hoch (Pixel-perfekt wo nötig) |
| **Erfolgsmetrik** | "Würden Nutzer dafür zahlen/wechseln?" | "Finden Nutzer den Weg?" |
| **Typischer Output** | Klickbare Landing Page, Fake-Door-Test, Wizard-of-Oz | Interaktiver Figma-Prototyp, Micro-Interactions |
| **Risiko bei Fehlstellung** | Over-engineered Prototyp, zu viel Detail zu früh | Schöne Lösung für das falsche Problem |

**Subsection 2b: Warum die Verschmelzung trügerisch ist**
- KI macht beide fähig, die Artefakte des anderen zu erstellen
- Aber: Fähigkeit ≠ Perspektive. Ein PM, der einen Figma-Prototyp baut, denkt trotzdem wie ein PM (hoffentlich)
- Die Gefahr: PMs, die sich in Design-Details verlieren, statt die richtigen Fragen zu stellen
- Die Chance: PMs, die schnell genug bauen können, um ihre Hypothesen selbst zu testen, ohne auf Design-Ressourcen zu warten
- Marty Cagan: "Product Discovery is about answering four questions: Value, Usability, Feasibility, Business Viability." PM fokussiert auf Value + Viability, Designer auf Usability.

**Subsection 2c: Die PM-Prototyping-Superkraft**
- **Framing-Kompetenz:** Der PM entscheidet, WAS prototypiert wird. Das ist die wertvollste Entscheidung.
- **Hypothesendenken:** Jeder Prototyp hat eine falsifizierbare Hypothese. "Wenn wir X zeigen, erwarten wir Y."
- **Scope-Disziplin:** Der PM weiß, was man NICHT bauen muss, um eine Antwort zu bekommen.
- **Business-Kontext:** Der PM verbindet den Prototyp mit Markt, Wettbewerb und Strategie.
- **Entscheidungsgrundlage:** Der PM-Prototyp ist ein Werkzeug zur Entscheidungsfindung, nicht zur Produktentwicklung.

### Block 3: Was ich verändert habe (~100-200 Wörter)
Wie Linja als PM prototypiert. Welche Tools sie nutzt. Was sie bewusst NICHT macht (Pixel-Perfection, Micro-Interactions). Wie sich ihr Prototyping verändert hat, seit KI verfügbar ist.

### Block 4: Kritische Einordnung (~100-150 Wörter)
- Risiko: PMs, die "auch Designer spielen" und dabei weder richtig PM noch richtig Designer sind
- Nicht jeder PM sollte prototypen. In großen Teams mit starkem Design ist es verschwendete Zeit.
- Die Verschmelzung funktioniert vor allem in kleinen Teams, Startups, Solo-Kontexten
- Designer haben Ausbildung in visueller Kommunikation, Typografie, Interaktionsdesign, die kein KI-Tool ersetzt

### Block 5: Was bleibt für jeden Tag (~50-100 Wörter)
- **Prototype die Frage, nicht die Antwort.** Ein PM-Prototyp muss nicht schön sein, er muss eine Hypothese testen.
- **Dein Vorteil ist das Framing.** Gleiche Tools, andere Perspektive. Nutze sie.
- **Scope ist eine Superkraft.** Wissen, was man NICHT bauen muss, ist wertvoller als schnell bauen können.

---

## Recherche-Grundlage (vorab aufbereitet)

### PM vs. Designer: Rollendefinition

**Product Manager:**
- Verantwortlich für: Was wird gebaut? Warum? Für wen? Wie messen wir Erfolg?
- Kernkompetenz: Problemdefinition, Priorisierung, Stakeholder-Management, Business-Case
- Prototyping-Modus: Hypothesengetrieben, Low-Fidelity bevorzugt, Fokus auf "Will anyone use this?"
- Denkt in: Outcomes, Metriken, Trade-offs, Opportunity Cost

**Product Designer:**
- Verantwortlich für: Wie fühlt sich das an? Wie sieht es aus? Wie funktioniert die Interaktion?
- Kernkompetenz: User Research, Informationsarchitektur, Visual Design, Interaction Design, Usability
- Prototyping-Modus: Erfahrungsgetrieben, Fidelity steigt mit Reife, Fokus auf "Can they use this?"
- Denkt in: User Flows, Cognitive Load, Affordances, Design Patterns

**Wo sie überlappen:**
- User Research (beide brauchen Kundennähe)
- Problemverständnis (beide definieren "das Problem")
- Iteration (beide arbeiten in Feedback-Loops)

**Wo sie sich unterscheiden:**
- PM sagt "Was": Welches Problem lösen wir? Welchen Markt bedienen wir?
- Designer sagt "Wie": Wie lösen wir es? Wie fühlt sich die Lösung an?
- PM optimiert für Business Value + User Value
- Designer optimiert für Usability + Desirability

### Marty Cagan: Product Discovery
- Vier Risiken, die Discovery adressiert: Value, Usability, Feasibility, Business Viability
- PM ownt Value + Viability, Designer ownt Usability, Engineering ownt Feasibility
- "The inconvenient truth about product is that at least half of your ideas are not going to work."
- Prototyping als günstigstes Mittel, Risiken früh zu reduzieren

### Teresa Torres: Continuous Discovery
- Opportunity Solution Trees als Struktur
- Hypothesengetriebene Experimente
- PM-Prototyp = Experiment zur Validierung einer Opportunity

### Julie Zhuo: Design Leadership
- Buch: "The Making of a Manager" (2019)
- Perspektive der Design-Seite: Designer denken in Craft, Empathie auf Interaktionsebene, UI-Systeme
- Schlüsselunterschied: PM-Prototyp darf hässlich aber strategisch scharf sein. Designer-Prototyp darf strategisch unklar aber nutzbar und schön sein.

### Pretotyping (Alberto Savoia, Google)
- "Build the pretend product before the prototype"
- Fake-Door-Tests, Wizard-of-Oz: typische PM-Prototyping-Methoden
- Buch: "The Right It" (2019)

### Shape Up (Ryan Singer, Basecamp)
- "Fat Marker Sketch": Bewusst grobe Skizze des Endergebnisses
- Appetite (Zeitbudget) ist fix, Scope ist variabel
- Immer mit dem starten, was der Nutzer sieht

### Prototyping-Stufen (Fidelity)
| Stufe | Beispiel | PM-Einsatz | Designer-Einsatz |
|-------|---------|-----------|-----------------|
| **Sketch** | Papier, Whiteboard | Ja (Kommunikation) | Ja (Ideation) |
| **Wireframe** | Einfache Layouts | Ja (Stakeholder) | Ja (Struktur) |
| **Klickbar** | Figma, InVision | Selten direkt | Ja (Usability Tests) |
| **Coded** | v0, Bolt, HTML | Ja (Fake-Door, MVP) | Selten (eher Figma) |
| **Funktional** | Working Software | Nein (das ist Delivery) | Nein |

---

## Interview-Fragen für Linja

### Zur eigenen Praxis
1. Wie prototypierst du konkret als PM? Welche Tools, welche Fidelity, in welchen Situationen?
2. Was baust du selbst, was lässt du Designer bauen?
3. Hat sich das durch KI-Tools verändert? Was machst du jetzt, was du früher nicht gemacht hättest?

### Zum Unterschied PM vs. Designer
4. Hattest du Situationen, in denen du als PM einen Prototyp gebaut hast und ein Designer gesagt hat "das ist aber nicht gut"? Was war der Kern des Konflikts?
5. Was kann ein Designer, das du als PM nicht kannst, auch mit KI nicht?
6. Was kannst du als PM beim Prototyping, das ein Designer typischerweise nicht mitbringt?
7. Wo siehst du die Grenze? Wann sollte ein PM NICHT prototypen?

### Zur Verschmelzung durch KI
8. Wenn KI alle in die Lage versetzt, Prototypen zu bauen: Was unterscheidet dann noch den PM vom Designer?
9. Siehst du die Gefahr, dass PMs sich in Design-Details verlieren?
10. Wie bleibst du als PM bei deiner Stärke (Framing, Hypothese, Scope), auch wenn du jetzt selbst bauen kannst?
11. Jenny Wen, Shreyas Doshi und andere sprechen von "Product Sense" als Differenziator. Wie hängt Prototyping damit zusammen?

---

## Optionale Datenvisualisierungen (max 2)

1. **Vergleichs-Cards:** PM-Prototyp (Hypothese → Test → Entscheidung) vs. Designer-Prototyp (Erlebnis → Iteration → Polish)
2. **Datentabelle:** Prototyping-Stufen mit PM- vs. Designer-Einsatz (siehe Recherche oben)

---

## Quellen (zur weiteren Recherche)
- Marty Cagan: "Inspired" (2018) und "Empowered" (2020)
- Teresa Torres: "Continuous Discovery Habits" (2021)
- Shreyas Doshi: Product Sense Dekomposition (im Vault)
- Jake Knapp: Sprint (2016) — Prototyping-Tag
- Nielsen Norman Group: "Design Thinking" Research

## Glossar-Kandidaten
- Prototyp, Fidelity, Wireframe, Fake-Door-Test, Wizard-of-Oz, Product Discovery, Hypothese, Opportunity Solution Tree, Affordance, Cognitive Load
