# Artikelplan: Beim Ergebnis anfangen

> **Slug:** `ergebnis-first`
> **Ziel-Veröffentlichung:** April 2026
> **Modus:** Konzeptionell (Writing Style Guide Modus 2)
> **Lernfeld:** Produktentwicklung, iteratives Arbeiten, KI-gestütztes Building
> **Live-Beispiel:** linja.me Aufbau als Case Study

---

## Kernthese

Die meisten Produktteams bauen von innen nach außen: Datenmodell, Backend, API, dann irgendwann die Oberfläche. KI dreht das um. Wer am sichtbaren Ergebnis anfängt, iteriert schneller, kommuniziert klarer und trifft bessere Entscheidungen. Wie bei einer IKEA-Anleitung: Die Aufbauschritte machen nur Sinn, wenn du das Endergebnis kennst.

---

## Artikelstruktur (5 Blöcke nach Baukasten)

### Block 1: Kernbotschaft + Problem (~100 Wörter)
Es klingt kontraintuitiv: Bau zuerst das Sichtbare, dann den Rest. Aber genau so entstehen bessere Produkte. Jenny Wen nutzt das Bild der IKEA-Anleitung: Ohne das Bild des fertigen Regals auf Seite 1 sind die 47 Schritte danach sinnlos. Beim Bauen von Produkten gilt dasselbe. Wer am Ergebnis anfängt, sieht sofort, was funktioniert und was nicht. Nicht in der Theorie, sondern am lebenden Objekt. KI macht diesen Ansatz zum ersten Mal wirklich praktikabel.

### Block 2: Fundierung (~400-600 Wörter)
**Darstellungsformat:** Prosa mit 3 Subsections

**Subsection 2a: Warum "Inside-Out" das Standardmodell ist (und warum es bremst)**
- Klassische Softwareentwicklung: Requirements → Architektur → Backend → Frontend → Launch
- Problem: Die Oberfläche (das, was Nutzer sehen) kommt zuletzt. Feedback auf das Sichtbare erst spät im Prozess.
- Wasserfall-Logik auch in agilen Teams: Sprint-Planung oft nach technischer Abhängigkeit, nicht nach User-Sichtbarkeit
- Folge: Produktentscheidungen werden abstrakt getroffen, ohne das Ergebnis zu sehen

**Subsection 2b: Das Gegenmodell: Ergebnis-First**
- **Amazon "Working Backwards":** Bevor eine Zeile Code geschrieben wird, schreibe die Pressemitteilung und das FAQ. Zwinge dich, das Endprodukt zu beschreiben, bevor du es baust.
- **IKEA-Anleitung-Analogie (Jenny Wen):** Seite 1 zeigt das fertige Regal. Dann die Schritte. Nicht umgekehrt. Beim Produktbau: Zeige erst das Ergebnis (Mockup, Prototyp, Landing Page), dann bau den Weg dahin.
- **KI als Enabler:** Vor KI war "Ergebnis zuerst" teuer, weil Mockups und Prototypen Designzeit brauchten. Jetzt kannst du in Stunden eine funktionierende Oberfläche bauen und von dort iterieren.
- **Psychologischer Effekt:** Wenn du siehst, was du baust, triffst du andere Entscheidungen als wenn du nur darüber nachdenkst. Visuelles Feedback verändert die Priorisierung.

**Subsection 2c: Case Study: linja.me**
- Der Aufbau von linja.me als reales Beispiel für Ergebnis-First:
  - Kein Wireframe, kein Design-System zuerst. Stattdessen: direkt am lebenden HTML gebaut.
  - Jede Iteration war sofort sichtbar und testbar.
  - Entscheidungen wurden AM Produkt getroffen, nicht auf dem Whiteboard.
  - Schritte dokumentieren: Was haben wir wann gebaut? Warum in dieser Reihenfolge?
  - Was wäre passiert, wenn wir klassisch vorgegangen wären? (Schätzung: 3x länger, weniger Iteration)

### Block 3: Was ich verändert habe (~100-200 Wörter)
Konkret: Wie Linja jetzt an Projekte rangeht. "Erst das Sichtbare, dann die Logik." Wie sich das auf linja.me, CV-Site und MatGrid ausgewirkt hat. Was sich verändert hat, seit KI das möglich macht.

### Block 4: Kritische Einordnung (~100-150 Wörter)
- Funktioniert nicht für alles. Sicherheitskritische Systeme, komplexe Backend-Logik, regulierte Branchen brauchen andere Reihenfolgen.
- Risiko: "Schöne Fassade, nichts dahinter." Ergebnis-First heißt nicht UI-Only. Es heißt, das Sichtbare als Steuerungsinstrument nutzen.
- Skaliert das in großen Teams? Oder ist es ein Solo/Kleinteam-Ansatz?
- Design Debt: Wenn du direkt am Ergebnis baust, entsteht technische und Design-Schuld.

### Block 5: Was bleibt für jeden Tag (~50-100 Wörter)
- **Zeige das Ergebnis, bevor du den Weg erklärst.** Stakeholder, Teams und du selbst profitieren vom Sichtbaren.
- **Bau zuerst, was Nutzer sehen.** Alles andere folgt aus dem, was funktioniert.
- **KI macht Sichtbarkeit billig.** Nutze das. Ein Prototyp in 2 Stunden ist besser als ein Konzept in 2 Wochen.

---

## Recherche-Grundlage (vorab aufbereitet)

### Amazon "Working Backwards"
- Methode: Interne Pressemitteilung (PR/FAQ) schreiben, bevor Entwicklung beginnt
- Erfunden von Werner Vogels / popularisiert durch Jeff Bezos
- Buch: "Working Backwards" von Colin Bryar & Bill Carr (2021)
- Kernprinzip: "Start with the customer experience and work backwards to the technology" (Steve Jobs, adaptiert von Amazon)
- Pressemitteilung zwingt Klarheit: Wer ist der Kunde? Was ist der Benefit? Warum jetzt?
- FAQ zwingt zur Auseinandersetzung mit kritischen Fragen vorab

### IKEA-Anleitung-Analogie (Jenny Wen)
- Seite 1 jeder IKEA-Anleitung: Bild des fertigen Möbelstücks
- Ohne dieses Bild: Die einzelnen Schritte sind schwer zu interpretieren
- Übertragung: Wenn Teams Features bauen, ohne das Gesamtbild zu kennen, entstehen inkohärente Ergebnisse
- Lösung: Immer erst das Endergebnis zeigen/definieren, dann die Einzelschritte planen

### Pretotyping (Alberto Savoia, Google)
- Buch: "The Right It" (2019)
- Kernidee: Baue das "Pretend Product" bevor du den Prototyp baust. Teste Nachfrage bevor du irgendetwas baust.
- Passt zum Ergebnis-First-Ansatz: Zeige die Oberfläche, teste ob jemand will, dann bau den Rest.

### Shape Up (Ryan Singer, Basecamp)
- Der "Pitch" enthält immer einen "Fat Marker Sketch" — bewusst grob aber das Endergebnis zeigend
- Appetite (Zeitbudget) ist fix, Scope variabel, aber man startet mit dem, was der Nutzer sieht
- Demo-Driven Development: Einige Teams (Stripe, Linear) bauen die Demo zuerst, dann machen sie sie real

### Visuelles Feedback und Entscheidungsqualität
- Dual Coding Theory (Allan Paivio): Menschen verarbeiten visuelle und verbale Informationen in getrennten Kanälen. Visuelles Feedback aktiviert zusätzliche kognitive Ressourcen.
- Rapid Prototyping Forschung: Teams, die früh visuelle Prototypen sehen, machen weniger kostspielige Fehlentscheidungen (Stanford d.school Studien)
- "Show, don't tell": In Product Reviews funktionieren Demos besser als Slides

### linja.me Case Study (aus Vault-Kontext)
- Direkt am HTML gebaut mit KI-Unterstützung (Claude Code)
- Iterations-Log: Nav, Footer, Blog-Seite, Einzelartikel, CV-Integration
- Keine Figma-Phase, kein Design-System als Startpunkt
- Ergebnis: Funktionierende Site in wenigen Sessions statt Wochen

---

## Interview-Fragen für Linja

### Zum Prinzip
1. Wann hast du zum ersten Mal bewusst "am Ergebnis angefangen"? War das vor KI oder erst damit?
2. Jenny Wen nutzt die IKEA-Analogie. Wie erklärst du das Prinzip deinen Stakeholdern oder Teams?
3. Was ist der größte Vorteil, wenn du das Ergebnis siehst, bevor du den Weg planst?

### Zur Case Study linja.me
4. Walk me through: Wie hast du linja.me aufgebaut? Was war der erste Schritt?
5. Was war der Moment, wo du gemerkt hast: "Weil ich es sehe, treffe ich jetzt eine andere Entscheidung"?
6. Was hättest du anders gemacht, wenn du klassisch (Wireframe → Design → Code) vorgegangen wärst?
7. Wie viel Zeit hat der Ergebnis-First-Ansatz gespart? (Schätzung reicht)

### Zur Übertragung
8. Funktioniert das nur für Websites, oder auch für komplexere Produkte?
9. Wie setzt du das in einem Team-Kontext um? Nicht jedes Team hat KI-Tools.
10. Was sagst du Teams, die sagen "wir müssen erst die Architektur planen"?
11. Amazon hat "Working Backwards" institutionalisiert. Glaubst du, "Ergebnis-First" kann auch ein Teamprozess werden?

### Zur kritischen Reflexion
12. Wo hat der Ansatz NICHT funktioniert? Gab es Momente, wo du doch erst die Logik brauchtest?
13. Wie gehst du mit Design Debt um, das durch schnelles Ergebnis-First entsteht?

---

## Optionale Datenvisualisierungen (max 2)

1. **Vergleichs-Cards:** Klassisch (Requirements → Backend → Frontend, Feedback nach 6 Wochen) vs. Ergebnis-First (Sichtbar in 2h, Feedback sofort)
2. **Kennzahl-Highlights:** linja.me Metriken, z.B. "X Sessions bis Live" oder "Erste sichtbare Version nach Yh"

---

## Quellen (zur weiteren Recherche)
- Colin Bryar & Bill Carr: "Working Backwards" (2021)
- Jenny Wen: IKEA-Anleitung-Analogie (Quelle noch verifizieren: Podcast/Talk)
- Allan Paivio: Dual Coding Theory (1971)
- Stanford d.school: Rapid Prototyping Research
- Teresa Torres: "Continuous Discovery Habits" (2021)
- Steve Jobs: "Start with the customer experience" (WWDC 1997)

## Glossar-Kandidaten
- Working Backwards, PR/FAQ, Ergebnis-First, Prototyp, Design Debt, Dual Coding Theory, Rapid Prototyping, Wireframe
