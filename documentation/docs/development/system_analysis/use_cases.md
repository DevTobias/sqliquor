# Anwendungsfälle

Anwendungsfälle sind auf oberster Ebene direkt als Sequenzdiagramme definiert, um mögliche Abhängigkeiten zu klären und einige Prozesse bereits zu definieren (Außerdem untersützt das Diagramm Tool Mermaid.js noch keinen Anwendungsfalldiagramme :D).

Diese Diagramme stellen nicht das ganze System dar, sondern dienen lediglich dazu, einen groben Überblick über die Flows in dem System zu bekommen.

## Content Creator

```mermaid
sequenceDiagram
  par Level erstellen
    Creator->>CMS: Spielevents anlegen
    Creator->>CMS: Neues Level anlegen
  end
  par Level konfigurieren
    Creator-->>CMS: Tutorial für Level schreiben
    Creator->>CMS: Mögliche Events auswählen
  end
```

## Spieler:innen

```mermaid
sequenceDiagram
  alt bereits registriert
    Spieler->>Website: Anmelden
  else neuer Benutzer
    Spieler->>Website: Registrieren
  end

  Spieler->>Website: Spiel starten

  loop Jede Sekunde
    Website-->Website: Zufallsevent wählen
    Website-->Website: Nächstes Level
  end

  Spieler->>Website: Event öffnen
  Spieler->>Website: Aufgabe ansehen
  Spieler->>Website: SQL Anfrage stellen
  Spieler->>Website: KI fragen
  Spieler->>Website: SQL Query auswählen
  Spieler->>Website: Überprüfung anfragen
```
