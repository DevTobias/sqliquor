# Anforderungen

## Benutzerrollen

| Benutzerrolle    | Aufgabe                                                                                                                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Barkeeper        | wird vom Spieler gesteuert / übernimmt die Interaktionen mit den Kunden / mischt die Getränke / serviert die Bestellungen / kümmert sich um die Lagerbestände / entwirft neue Getränkemixturen |
| Kunde            | Akteur mit welchem der Spieler interagiert / stellt Aufgaben, dessen Grundstruktur entworfen wurden, aber zufällige Werte zugewiesen werden                                                    |
| KI-Unterstützung | gibt Hilfestellung / antwortet auf die Fragen der Spieler:innen                                                                                                                                |

## Funktionale Anforderungen (Backlog)

✅ Als Content Creator erwarte ich eine benutzerfreundliche Oberfläche, in der ich nach einem bestimmten Schema Inhalte erstellen kann.

✅ Als Benutzer erwarte ich, dass ich mir Hilfe z.B. von einer KI holen kann, wenn ich nicht weiter weiß.

🚧 Als Benutzer erwarte ich, dass mir nur geholfen, mir aber nie die komplette Lösung gezeigt wird.

✅ Als Benutzer erwarte ich, dass ich mich sicher registrieren bzw. danach in das System anmelden kann.

🚧 Als Benutzer erwarte ich, dass ich in das Spiel eingeführt werde.

✅ Als Benutzer, der noch nie mit SQL gearbeitet hat, erwarte ich, dass vor Einführung neuer Themen, diese auch intuitiv erklärt werden.

✅ Als Benutzer erwarte ich, dass ich verschiedene Level nacheinander Spielen kann, und diese in der Komplexität zunehmen.

✅ Als Benutzer erwarte ich, dass ich eigene Datenbankabfragen stellen kann, und die echten Daten erhalte.

✅ Als Benutzer erwarte ich, dass ich das Spiel starten kann, wann ich möchte.

✅ Als Benutzer erwarte ich, dass bereits eine frische Datenbank inklusive Daten existiert, wenn ich das Spiel (neu)starte.

🚧 Als Benutzer erwarte ich, dass ich das Spiel pausieren kann, wenn ich möchte.

✅ Als Benutzer erwarte ich, dass ich stets zwischen den aktiven Aufgaben wechseln kann.

✅ Als Benutzer erwarte ich, dass mir angezeigt wird, wie viel Zeit ich noch für die Aufgaben habe-

✅ Als Benutzer erwarte ich, dass ich stets meinen Fortschritt begutachten kann.

## Nicht-Funktionale Anforderungen

Anforderungen and das Spiel:

- Das Spiel soll als Webapplikation implementiert werden, sodass ein einfacher Zugriff gewährt werden kann.
- Die durch Spieler:innen generierten Daten müssen persistent gesichert werden.
- Das Spiel muss es Spieler:innen ermöglichen den individuellen Spielfortschritt zu speichern.
- Das Spiel muss auf einen angemessenen Niveau sein, sodass sich Schüler:innen und Studierende passend herausgefordert, aber nicht überfordert werden.
- Das Spiel soll einen Wiederspielwert haben.
- Das Spiel muss einen steigenden Schwierigkeitsgrad haben, sodass die SQL-Kenntnisse gefordert werden.

Anforderungen an das Deployment:

**Sicherheit und Datenschutz** : Das System sollte eine sichere und zuverlässige Möglichkeit bieten, den Zugriff auf personenbezogene Daten zu kontrollieren und zu verwalten.

**Skalierbarkeit**: Das System sollte in der Lage sein, mit einem steigenden Nutzeraufkommen und einer wachsenden Menge an Daten umzugehen.

**Performance**: Da das Spiel zeitgesteuert abläuft, sollte das System schnell und effizient arbeiten und die Antwortzeiten sollten akzeptabel sein, um eine positive Spielerfahrung zu gewährleisten

**Benutzerfreundlichkeit**: Das System sollte eine intuitive und barrierefreie Benutzeroberfläche bieten, um allen Interessierten ein nahtloses Spielerlebnis bieten zu können. Die Oberfläche des CMS sollte leicht erlernbar sein, um den Schulungsaufwand der Content Creator zu minimieren.

**Zuverlässigkeit und Verfügbarkeit**: Das System sollte hochverfügbar sein, damit Benutzer die Anwendung auch z.B. während Lehrveranstaltungen zusammen nutzen können.

**Ausfallsicherheit**: Das System sollte über Mechanismen verfügen, um Datenverluste oder Systemausfälle zu minimieren und eine schnelle Wiederherstellung im Falle eines Ausfalls zu ermöglichen.
