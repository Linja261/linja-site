# Praxis-Setup: Dein eigener KI-Kontext fürs Studium

> Begleitmaterial zum Praxisteil des Vortrags „KI im Studium bewusst steuern".
> Online: **linja.me/ki-studium/setup**
> Stand: Juni 2026 · Alles funktioniert in der Gratis-Version von ChatGPT und Claude, komplett im Browser.

**Kernbotschaft:** KI darfst Du nutzen. Aber sie nimmt Dir die Vorarbeit nicht ab. Du baust den Kontext (vor allem *wer Du bist* und *wie Du arbeitest*), damit das Einordnen und Argumentieren danach halb automatisch auf *Deinem* Material läuft. Einmal Zeit investieren, dann trägst Du pro Arbeit nur noch die Quellen nach.

---

## 1 · Wohin kommt der Kontext?

Beide Tools haben dauerhafte Speicher plus den Chat selbst. Ordne Dein Wissen in Schichten:

| Schicht aus dem Vortrag | ChatGPT (gratis) | Claude (gratis) |
|---|---|---|
| **System-Rahmen** (Arbeitsvertrag, gilt immer) | Einstellungen → Personalisierung → **Custom Instructions** (2 Felder) | Einstellungen → **Profil** → „Welche persönlichen Präferenzen soll Claude berücksichtigen?" |
| **Identity** (wer Du bist, Stärken, Stil) | **Memory** (standardmäßig an) + Custom Instructions | **Memory** (seit März 2026 auch gratis) + Profil |
| **Knowledge** (Lektüre, Quellen, Notizen) | **Projects** → Projekt anlegen, Dateien hochladen, Projekt-Instruktion | **Projects** (bis zu 5) → Dateien hochladen (bis 20/Chat, 500 MB) |
| **Arbeitsgedächtnis** (die konkrete Aufgabe) | der Chat im Projekt | der Chat im Projekt |

**Faustregel:** Wer Du bist → einmal zentral (Custom Instructions / Profil + Memory). Die Quellen pro Thema → ins Projekt. Die konkrete Frage → in den Chat.

### So richtest Du es ein

**ChatGPT (gratis)**

1. **Custom Instructions** öffnen (Einstellungen → Personalisierung). Feld 1 „Was soll ChatGPT über Dich wissen?" = Dein Profil (Abschnitt 2a). Feld 2 „Wie soll ChatGPT antworten?" = der Arbeitsvertrag (Abschnitt 2b). Lädt in jeden Chat.
2. **Memory** ist standardmäßig an. „Merk dir: …" speichert Fakten dauerhaft. Bearbeiten/Löschen unter Einstellungen → Personalisierung → Memory.
3. **Projects** anlegen (eins pro Hausarbeit). Projekt-Instruktion = Arbeitsvertrag. Dateien hochladen: Pflichtlektüre, eigene Notizen, Deine These. Im Projekt chatten.

**Claude (gratis)**

1. **Profil-Präferenzen** öffnen (Einstellungen → Profil). Hier kommt Dein Profil + der Arbeitsvertrag rein. Lädt in jeden Chat.
2. **Memory** (seit März 2026 auch gratis) merkt sich Deinen Kontext über Chats hinweg.
3. **Projects** anlegen (bis zu 5). Custom Instructions = Arbeitsvertrag. Dateien hochladen (bis 20/Chat). Web-Suche ist verfügbar.

### Welches Tool für mich?

Beide können dasselbe. Nimm das, mit dem Du Dich wohler fühlst:

- **ChatGPT:** sehr verbreitet, starker Allrounder, viele Integrationen, schnelles Hin und Her. Gut, wenn Du ein Tool für vieles willst.
- **Claude:** stark bei langen Texten und Dokumenten, gilt als sorgfältig beim Schreiben, Argumentieren und beim Befolgen genauer Vorgaben. Gut für Hausarbeiten mit viel Lektüre.

**App oder Browser?** Beides läuft komplett in der **Webversion im Browser** (chatgpt.com bzw. claude.ai), inklusive Custom Instructions, Memory und Projects. Eine App brauchst Du nicht, sie ist nur Komfort fürs Handy.

---

## 2 · Setup bauen: Dein Profil + Dein Arbeitsvertrag

Zwei Dinge legst Du **einmal zentral** ab, beide an dieselbe Stelle (Custom Instructions / Profil): **wer Du bist** (Identity) und **wie die KI arbeiten soll** (der Arbeitsvertrag, Dein System-Rahmen). Das lädt danach in jeden Chat.

### 2a. Identity-Profil per Interview-Prompt

In einem **neuen Chat** einfügen. Die KI interviewt Dich und baut am Ende einen sauberen Block, den Du in die Einstellungen kopierst.

```
Du bist mein Onboarding-Assistent für wissenschaftliches Arbeiten mit KI.
Ziel: Hilf mir, ein kompaktes „Über mich"-Profil zu erstellen, das ich dauerhaft in
Deinen Einstellungen speichere, damit Du mich in jeder zukünftigen Unterhaltung kennst.

Gehe so vor:
1. Stelle mir die folgenden Fragen EINZELN, eine nach der anderen, und warte jeweils
   auf meine Antwort. Frag nach, wenn etwas unklar oder zu knapp ist.
2. Themenblöcke:
   - Studium: Studiengang, Fachsemester, Hochschule, Schwerpunkt.
   - Stärken und Schwächen beim wissenschaftlichen Arbeiten (Strukturieren,
     Argumentieren, Literatur, Schreiben, Zeitmanagement).
   - Arbeitsweise: Wie arbeitest Du am liebsten? Was hilft Dir, was blockiert Dich?
   - Schreibstil: Wie klingen Deine Texte? (Gib mir gern ein, zwei Beispielsätze von Dir.)
   - Aktuelles Projekt: Um welche Arbeit/welches Thema geht es gerade? Gibt es schon
     eine These oder Fragestellung?
   - Vorgaben: Welche Regeln gibt der Lehrstuhl vor (Zitierstil, Umfang, Sprache)?
   - Was die KI für Dich tun und NICHT tun soll.
3. Wenn Du genug weißt, fasse alles in einem strukturierten Markdown-Block unter der
   Überschrift „## Mein Kontext" zusammen: kurze Stichpunkte, keine Romane.
4. Sag mir am Ende in einem Satz, wo ich diesen Block speichere und was besser in ein
   Projekt gehört.

Starte jetzt mit der ersten Frage.
```

**Speichern:**

- **ChatGPT:** Den „## Mein Kontext"-Block in Custom Instructions (Feld 1) einfügen. Optional: „Speichere das in deine Erinnerungen."
- **Claude:** Den Block in die Profil-Präferenzen einfügen. Optional ins Memory übernehmen.

### 2b. Arbeitsvertrag mit der KI (für wissenschaftliches Arbeiten)

Copy-paste in **Custom Instructions Feld 2 / Profil / Projekt-Instruktion**.

```
## Arbeitsvertrag für wissenschaftliches Arbeiten

Rolle: Sei mein kritischer Sparringspartner, nicht mein Ghostwriter. Du hilfst mir
zu denken, Du denkst nicht für mich.

Ehrlichkeit:
- Erfinde niemals Quellen, Autoren, Titel, Jahreszahlen oder Zitate. Wenn Du eine
  Quelle nicht sicher kennst, sag das ausdrücklich.
- Markiere klar, was gesichertes Wissen ist und was Vermutung oder Plausibilität.
- Sag „das weiß ich nicht" oder „das kann ich nicht prüfen", statt etwas zu erfinden.
- Weise mich darauf hin, wenn Dein Wissen veraltet sein könnte (Knowledge Cutoff).

Vorgehen:
- Frag nach, bevor Du Annahmen triffst.
- Fordere meine These heraus, statt mir zuzustimmen. Zeig mir Gegenargumente und
  Schwachstellen.
- Liefere nicht das fertige Ergebnis, sondern Fragen, Strukturen und Kritik, mit
  denen ich selbst weiterkomme.

Grenzen:
- Schreib keine fertigen Textpassagen für meine Abgabe.
- Ersetze nicht den Forschungsstand; verweise mich auf das Prüfen echter Quellen.
- Erinnere mich daran, KI-Nutzung gemäß Prüfungsordnung kenntlich zu machen.
- Schlag Änderungen vor, statt meinen Text oder meine Argumentation eigenmächtig
  umzuschreiben. Mitdenken ja, eigenmächtig ändern nein.

Gegenprüfung:
- Dein Output wird am Ende von einem zweiten KI-System kritisch gegengelesen
  (zum Beispiel Codex oder dem jeweils anderen Modell). Rechne damit, dass jeder
  Fehler, jede erfundene Quelle und jede unsaubere Argumentation dort auffällt.
  Arbeite so sorgfältig, dass diese Prüfung nichts findet.

Stil: Antworte auf Deutsch, knapp und strukturiert. Lieber eine klare Rückfrage als
zehn Optionen.
```

---

## 3 · Mit Deinem Kontext weiterarbeiten

Jetzt steht Dein Kontext. Ab hier arbeitest Du **im Projekt**, damit Profil, Arbeitsvertrag und Deine hochgeladenen Quellen automatisch dabei sind. Die KI kennt Dich, Dein Thema und Deine Regeln jetzt, also nutzt Du Prompts, die **gezielt darauf zugreifen**, statt alles neu zu erklären.

### So arbeitest Du (Routine)

1. **Im Projekt arbeiten**, nicht im leeren Chat. Dann sind Deine Dateien und der Arbeitsvertrag automatisch dabei.
2. **Pro Aufgabe nur die relevante Schicht geben:** die konkrete These + die 1–2 Quellen, um die es geht. Nicht „alles" auf einmal.
3. **Rolle setzen:** „Sei mein Kritiker. Greif diese These an: …" statt „Schreib mir …".
4. **Quellen-Disziplin:** Jede genannte Quelle selbst prüfen (Katalog / Scholar / DOI). Auch wenn die KI Deinen Kontext nutzt, gilt: Link ≠ gelesen ≠ sagt das ≠ passende Quelle.
5. **Iterieren:** Antwort zerlegen, nachschärfen, Gegenfragen stellen. Das beste Ergebnis entsteht im Dialog, nicht im ersten Output.
6. **Kontext pflegen:** Was Du Neues über Dich oder das Thema lernst, ins Memory/Projekt nachtragen. Veraltetes löschen.

### Prompts, die auf Deinen hinterlegten Kontext zugreifen

Diese Prompts funktionieren gut, **weil** Du vorher Profil, Arbeitsvertrag und Quellen abgelegt hast. Sie verweisen bewusst auf „mein Profil", „dieses Projekt", „meine hochgeladenen Quellen", statt das Thema neu zu erklären.

```
Du kennst aus meinem Profil mein Thema und meine Schwächen beim wissenschaftlichen
Arbeiten. Hier ist meine These: [...]. Greif sie auf Basis der Quellen in diesem
Projekt an: Wo ist sie zu breit, wo ist sie nicht gedeckt? Nenne nur Quellen, die
du sicher belegen kannst.
```

```
Nutze die Dateien in diesem Projekt. Ich habe [Quelle] gelesen und so verstanden:
[...]. Wo widerspreche ich der Quelle oder überdehne ich sie? Frag nach, wenn Dir
mein Verständnis unklar ist.
```

```
Auf Basis meiner hochgeladenen Gliederung und meiner These: Wo springt meine
Argumentation? Stell mir vor Deiner Antwort die drei Fragen, die ein Gutachter
stellen würde.
```

```
Vergleiche meine Notizen im Projekt mit meiner aktuellen These. Welche unausgesprochene
Annahme steckt drin, die ich aus meiner Lektüre noch nicht belegt habe?
```

**Merksatz:** Ein guter Prompt erklärt nicht alles neu, er zeigt auf Deinen Kontext. „Greif **meine** These an" schlägt „Erkläre mir das Thema".

---

## 4 · Häufige Fragen

**Darf ich KI überhaupt für Hausarbeiten nutzen?**
Ja, sofern Lehrstuhl/Prüfungsordnung es erlauben und Du es kenntlich machst. Vorab klären. Es geht um das Wie, nicht das Ob.

**Ist das nicht Schummeln?**
Schummeln heißt, fremde Leistung als eigene auszugeben. Hier baust Du den Kontext selbst und triffst die Urteile. Die KI ist Werkzeug, nicht Autor.

**Brauche ich die Bezahlversion?**
Nein. Custom Instructions, Memory und Projects gibt es in beiden Gratis-Versionen. Bezahlung bringt nur höhere Limits und Komfort.

**Wie viel Zeit kostet das Setup?**
Einmal Zeit investieren für Profil + Arbeitsvertrag. Danach pro Arbeit nur noch ein Projekt mit den jeweiligen Quellen.

**Halluziniert die KI dann nicht mehr?**
Doch, sie kann weiter halluzinieren. Guter Kontext senkt das Risiko, ersetzt aber nicht das Prüfen. Quellen immer selbst checken.

**Was ist mit Datenschutz/Urheberrecht beim Hochladen?**
Eigene Notizen: unkritisch. Fremde Volltexte: sparsam, Lizenz/AGB beachten. Keine sensiblen personenbezogenen Daten hochladen. Im Zweifel Lehrstuhl fragen.

**Nutzt die KI meine Texte zum Training?**
Bei kostenlosen Accounts je nach Anbieter möglich. In den Datenschutz-Einstellungen lässt sich das meist deaktivieren. Keine Geheimnisse/sensiblen Daten reingeben.

**Muss ich das für jede Hausarbeit neu machen?**
Nein. Profil + Arbeitsvertrag gelten dauerhaft. Pro Arbeit nur ein neues Projekt mit den passenden Quellen.

**Was, wenn der Lehrstuhl KI verbietet?**
Respektieren. Das Profil hilft trotzdem beim Lernen und Verstehen, nur nicht an der Abgabe selbst.

**Welches Tool soll ich nehmen?**
Egal, beide können es. Nimm das, mit dem Du Dich wohler fühlst. Das Prinzip ist dasselbe.
