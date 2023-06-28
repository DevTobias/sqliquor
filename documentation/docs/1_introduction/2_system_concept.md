# Systemkonzeption

## Allgemeine Anforderungsanalyse

SQLiquor soll als webbasierte SQL Lernplattform ein interaktives Schulungsprogramm werden, welches darauf abzielt, SQL-Kenntnisse durch praktische Anwendung zu entwickeln bzw. zu festigen. Die Plattform soll in Form eines Spieles bereitgestellt werden, in der die Benutzer:innen eine Cocktailbar verwalten und betreiben müssen, indem sie sinnvolle SQL-Abfragen entwickeln und verwenden.

Durch die Verwendung von realistischen Szenarien und einer intuitiven Benutzeroberfläche in Form eines Videospiels, wird es die Plattform den Benutzer:innen ermöglichen, ihre SQL-Fähigkeiten in einer praxisnahen Umgebung auf die Probe zu stellen. Dafür werden zukünftig eine Vielzahl von Übungen und Herausforderungen mit ansteigender Schwierigkeit bereitgestellt. Diese können sowohl von Anfängern, als auch von Fortgeschrittenen Nutzer:innen gelöst werden. 

SQLiquor wird zusätzlich dazu Lernressourcen wie Tutorials, Beispiele und Referenzmaterialien, um die Nutzer:innen bei der Verbesserung ihrer SQL-Kenntnisse zu unterstützen. Darüber hinaus wird eine interaktive und kollaborative Lernumgebung geschaffen, in der Nutzer:innen ihre Fortschritte verfolgen, ihre Leistung bewerten und Herausforderungen mit anderen teilen können.

Die SQL Anfragen sollen außerhalb vom Browser in einer MariaDB Instanz aufgelöst werden, um erweiterte Features zu ermöglichen. Dafür wird eine Benutzerauthentifizierung eingerichtet. Somit wird gewährleistet, dass jede(r) Benutzer:in exklusiven Zugriff auf seine/ihre Datenbank hat und zahlreiche Abfragen an diese Stellen kann. Ebenfalls können somit SPielstände und andere Fortschritte in der Cloud dem(r) Nutzer:in zugeordnet und persistiert werden.

Es wird umfangreiche Backupstrategien und Schutzmechanismen der Spielstände und Nutzerspezifischen Tabellen geben, falls ein(e) Nutzer:inn beim ausprobieren in der Lernumgebung diese für weitere Spielinhalte korrumpiert. 

## Zielgruppe

SQLiquor ist eine ideale Plattform für Studierende, Auszubildende, (zukünftige) Datenbankadministrator:innen, Entwickler:innen und alle anderen, die ihre SQL-Kenntnisse verbessern möchten, indem sie praktische Erfahrungen in der Verwaltung einer virtuellen Cocktailbar sammeln.
