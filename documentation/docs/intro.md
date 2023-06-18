---
sidebar_position: 1
slug: /
---

# Einleitung

Hier gibt es die gesamte Dokumentation für das Praxisprojekt.

```mermaid
erDiagram
  USER {
    uuid      id                PK
    string    email             UK
    string    username          UK
    string    password
    string[]  tokens                  "[]"
    boolean   sandboxCreated          "false"
    uuid      sandboxPassword
    string[]  sandboxHistory          "[]"
  }
```

