# Rohentwurf: Ein Paket, eine Entscheidung

> **Status:** Rohentwurf aus der Ernte vom 27.08.2026. Noch nicht in HTML, noch nicht zweisprachig, Quellen noch nicht geprüft.
> **Slug-Vorschlag:** `paket-eine-entscheidung`
> **Kategorie:** KI & Arbeitsweise
> **Blockreihenfolge:** neue Ordnung seit 26.08.2026 (Einordnung vor "Was ich verändert habe")
> **Abgrenzung zu bestehenden Artikeln:** `ki-agenten-kategorien` beantwortet, *ob* eine Aufgabe an einen Agenten geht. Dieser Text beginnt danach und behandelt den Zuschnitt des Auftrags. `kos-zwei-schleifen` (Draft) behandelt das Zurücklesen, nicht den Zuschnitt.
> **Wortzahl Blöcke 1 bis 5:** rund 1.150

---

## TL;DR

Ein Auftrag an eine KI scheitert selten am Modell und fast immer am Zuschnitt. Drei Fehler kosten mich messbar Zeit: eine Aufgabe mit mehr als einer offenen Entscheidung, ein Ticket, das den vorhandenen Recherchestand nicht kennt, und eine Delegation von Bewertung statt von Ausführung. Der Test dafür ist billig: Wer den Auftrag nicht ohne Rückfrage zu Ende bringen kann, hat ihn falsch geschnitten.

---

## Block 1 — Kernbotschaft + Problem

Seit ich Aufgaben systematisch an eine KI übergebe, verschiebt sich mein Engpass. Er liegt nicht mehr in der Ausführung, sondern in der Formulierung des Auftrags. Ich brauche Minuten pro Paket, die KI Stunden. Genau deshalb entscheidet die Qualität dieser Minuten über den Wert der Stunden.

Der teuerste Fehler ist dabei nicht ein falsches Ergebnis. Ein falsches Ergebnis sehe ich. Teurer ist ein Ergebnis, das formal korrekt aussieht und trotzdem nicht trägt, weil die Frage schon beantwortet war, weil mitten in der Arbeit eine Entscheidung fällig wurde oder weil ich etwas delegiert habe, das ich selbst hätte beurteilen müssen.

---

## Block 2 — Fundierung

### Ein Paket, eine offene Entscheidung

Am 17.08.2026 habe ich meine Aufgabenliste für ein Produktprojekt in 19 Arbeitspakete zerlegt und als Tickets angelegt. Sieben davon habe ich am selben Tag wieder geschlossen. Vier waren Verfeinerungen ohne Auftrag, eines war dauerhaft blockiert und zwei waren am Tag ihrer Anlage bereits erledigt, weil eine Recherche vier Tage vorher die Frage schon beantwortet hatte.

Der gemeinsame Nenner ist nicht Schludrigkeit beim Schreiben. Es ist ein fehlender Test vor dem Anlegen. Ein Paket ist dann richtig geschnitten, wenn genau eine Entscheidung offen ist und diese Entscheidung **vor** der Arbeit fällt, nicht mitten darin. Muss die KI unterwegs fragen, war der Zuschnitt falsch. Die Entscheidung gehört dann nach vorne, in einen sichtbaren Wartet-auf-Slot und nicht in einen Kommentar auf Seite drei.

Das klingt nach Projektmanagement-Folklore. Der Unterschied zur klassischen Ticketarbeit ist die Asymmetrie: Bei menschlichen Kolleginnen ist die Rückfrage ein normaler Teil der Zusammenarbeit. Bei einem Agenten ist sie ein Abbruch. Er wartet nicht sinnvoll, er rät oder er liefert ein halbes Ergebnis mit vollem Selbstbewusstsein.

### Der Bestand kommt vor dem Ticket

Aus denselben zwei überflüssigen Tickets folgt eine zweite Regel, die noch billiger ist. Bevor ein neues Paket entsteht, prüfe ich, ob der vorhandene Recherchestand die Frage schon beantwortet. Das kostet eine Suche und spart im schlechten Fall Stunden Arbeit an einer Frage, die niemand mehr hat.

Der Effekt wächst mit der Menge. Je produktiver eine KI recherchiert, desto schneller veraltet der eigene Überblick über das, was schon da ist. Die Ticketliste beschreibt dann nicht mehr den Stand der Arbeit, sondern den Stand meines Wissens über die Arbeit. Das ist ein Unterschied, der sich nicht ansagt.

### Ausführung delegieren, Bewertung behalten

Der dritte Punkt ist der unangenehmste, weil er eine Grenze zieht, die ich lieber nicht hätte. Beim Bauen ist die KI schnell und belastbar: Website, Prototyp, Datenaufbereitung, Recherchestrecken. Beim Entwerfen von Kennzahlen liefert sie Tabellen, die formal vollständig sind und inhaltlich nichts entscheiden.

Eine zweite Beobachtung aus derselben Woche zeigt dieselbe Bruchlinie aus einem anderen Winkel. Eine Rechercheaufgabe hatte an zehn Stellen protokolliert, es gebe keine belastbare Quelle. Bei der Nachprüfung fielen sieben dieser zehn Negativaussagen. Die positiven Funde waren sauber. Die schwächste Achse war die Aussage über das, was nicht existiert, und genau diese Schwäche war im Ergebnis nirgends sichtbar.

Beides ist derselbe Befund: Eine KI ist stark darin, etwas herzustellen und schwach darin, den Wert des Hergestellten zu beurteilen. Wo Urteil gefragt ist, bleibt das Urteil bei mir. Was ich abgeben kann, ist die Vorbereitung des Urteils, also Optionen, Belege und eine Empfehlung.

---

## Block 3 — Kritische Einordnung

Meine Belegdichte ist dünn. Diese drei Regeln stützen sich auf zwei sauber dokumentierte Beobachtungen und einige Nebenfunde aus derselben Woche, nicht auf eine Serie über Monate. Ich hatte mir vorgenommen, pro Session eine Zeile mitzuschreiben. Tatsächlich stehen nach zehn Wochen zwei Einträge in der Datei, beide nachträglich notiert. Die Mitschreib-Pflicht hing an keinem Ritual, deshalb ist sie nicht passiert. Das schwächt die Aussagekraft dieses Textes und ist gleichzeitig der ehrlichste Befund darin.

Dazu kommt der Kontext. Ich arbeite allein an eigenen Projekten, nicht in einem Team mit geteilter Ticketkultur. Was bei mir als sauberer Zuschnitt gilt, kann in einem Team, das ohnehin klein schneidet, längst Standard sein. Und die Grenze zwischen Ausführung und Bewertung ist keine Eigenschaft der Technik, sondern ein Stand. Sie verschiebt sich mit jedem Modellsprung und ich habe sie zuletzt im Juni geprüft.

---

## Block 4 — Was ich mir vornehme

Der Zuschnitt-Test ist gesetzt und läuft: Jedes Paket, das ich anlege, enthält genau eine offene Entscheidung und ein prüfbares Akzeptanzkriterium. Nicht "gut gemacht", sondern eine Bedingung, an der man den Abschluss ablesen kann. Die Arbeitsteilung steht seit dem 17.08. in einem eigenen Steuerungs-Index, der nur Titel, Owner, Status und die offene Frage zeigt und die Inhalte bewusst nicht dupliziert.

Zwei Dinge ändere ich jetzt zusätzlich. Erstens hänge ich die Bestandsprüfung fest an das Anlegen eines Pakets, nicht an meine Aufmerksamkeit. Zweitens formuliere ich Aufträge, bei denen es um Bewertung geht, um: Die KI liefert Optionen mit Belegen und eine Empfehlung, die Entscheidung bleibt sichtbar bei mir.

Und ich hänge das Mitschreiben an das Ritual, das ohnehin stattfindet, statt an den Vorsatz. Eine Zeile am Ende einer Session, an einer festen Stelle in einem festen Ablauf. Ob das trägt, sehe ich in drei Monaten an der Zahl der Einträge.

---

## Block 5 — Was bleibt für jeden Tag

**Wer nachfragen muss, hat einen schlechten Auftrag bekommen.**
Die Rückfrage ist das Symptom, der Zuschnitt ist die Ursache. Entscheidungen gehören vor die Arbeit.

**Vor dem neuen Ticket in den Bestand schauen.**
Eine Suche kostet eine Minute. Ein überflüssiges Paket kostet Stunden und macht die Liste unglaubwürdig.

**Ausführung geht raus, Urteil bleibt da.**
Was hergestellt werden kann, kann delegiert werden. Was bewertet werden muss, nicht.

**Eine Regel ohne festen Ort im Ablauf ist ein Vorsatz.**
Dokumentationspflichten, die an Aufmerksamkeit hängen statt an einem Ritual, brechen leise.

---

## Quellen (offen, vor Publikation zu prüfen)

> **Wichtig:** In dieser Session wurde **keine** externe Quelle aufgerufen oder verifiziert. Der Text steht bisher ausschließlich auf eigenen, datierten Beobachtungen. Vor der Publikation entweder echte Quellen prüfen und einbauen oder den Text bewusst als reinen Erfahrungsbericht führen.

Kandidaten, die inhaltlich passen könnten und **einzeln zu verifizieren** sind (Autor, Titel, Jahr als reale Kombination, Link aufrufen):
1. Farooq / Rajwani, Agenten-Kategorien, Lenny's Newsletter. Bereits im eigenen Artikel `ki-agenten-kategorien` verwendet, dort steht die geprüfte Fassung. Als Anschluss zitierbar.
2. Literatur zu Aufgabenzuschnitt und Übergabepunkten in der Mensch-Maschine-Zusammenarbeit. Noch keine konkrete Quelle geprüft.
3. Belege zu Overconfidence und fehlender Kalibrierung bei LLM-Ausgaben, passend zum Negativaussagen-Befund. Noch keine konkrete Quelle geprüft.

**Interne Belege (verifiziert, im Vault datiert):**
- Aufgabenpakete-Index vom 17.08.2026, inklusive der sieben am selben Tag geschlossenen Tickets
- Nachprüf-Lauf vom 18.08.2026, sieben von zehn Negativaussagen widerlegt
- Learnings-Eintrag vom 19.06.2026 zur Bruchlinie zwischen Bauen und strategischem Entwerfen

---

## Glossar (Entwurf)

- **Agent** — KI-System, das eine Aufgabe mehrschrittig und ohne Zwischensteuerung bearbeitet.
- **Akzeptanzkriterium** — prüfbare Bedingung, an der ablesbar ist, ob ein Arbeitspaket fertig ist.
- **Arbeitspaket** — abgegrenzte Aufgabe mit Ziel, Begründung und Abnahmebedingung.
- **Delegation** — Übergabe der Ausführung bei gleichbleibender Verantwortung für das Urteil.
- **Negativaussage** — Behauptung, dass etwas nicht existiert oder nicht auffindbar ist.
- **Zuschnitt** — Art und Weise, wie eine Aufgabe in ein bearbeitbares Paket geschnitten wird.

---

## Offene Punkte vor dem HTML-Bau

- [ ] Quellenfrage entscheiden (echte Quellen prüfen oder als Erfahrungsbericht führen)
- [ ] Kernerkenntnis-Quote setzen, Vorschlag: "Wer nachfragen muss, hat einen schlechten Auftrag bekommen."
- [ ] Datenvisualisierung prüfen: Kennzahl-Highlights bieten sich an (19 Pakete / 7 geschlossen / 2 bereits erledigt, sowie 7 von 10 Negativaussagen gefallen). Maximal 2 Stück.
- [ ] EN-Fassung nach Modus 2
- [ ] Writing-Style-Guide-Check für beide Sprachen
- [ ] Datenschutz-Perspektive: Text nennt nur eigene Projekte, keine Arbeitgeberdaten. Beim finalen Lauf gegenprüfen.
