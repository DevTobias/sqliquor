---
sidebar_position: 1
slug: /
---

# Übersicht

Die webbasierte SQL Lernplattform SQLiquor ist ein interaktives Schulungsprogramm, das darauf abzielt, SQL-Kenntnisse durch praktische Anwendung zu entwickeln bzw. zu festigen.

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
    DateTime  createdAt               "now()"
    DateTime  updatedAt               "now()"
  }

  SANDBOX_HISTORY_ENTRY {
    uuid      id                PK
    string    query
    json      output
    DateTime  createdAt               "now()"
  }

  LEVEL {
    uuid      id                PK
    int       order
    int       difficulty
    string    title
    string    description
  }

  TASK {
    int       id                PK    "autoincrement()"
    int       order
    string    task
    string[]  hints                   "[]"
    json      goal
    int       experience
  }

  USER ||--o{ SANDBOX_HISTORY_ENTRY : persists
  USER }o--o{ TASK : completed
  LEVEL ||--|{ TASK : contains
```

```mermaid
erDiagram
  EMPLOYEE {
    uuid      id                PK
    string    firstname
    string    lastname
    DateTime  employedSince           "now()"
    string    phone
    float     salary
    string    occupation
    int       workingHours
  }

  ADDRESS {
    uuid      id                PK
    string    street
    string    postalCode
    string    city
    string    country
  }

  SUPPLIER {
    uuid      id                PK
    string    name
  }

  INGREDIENTS {
    uuid      id                PK
    string    name
    string[]  tags
    string    unit
  }

  INGREDIENT_MARKT {
    float     price
    int       deliverTime
  }

  COCKTAIL {
    uuid      id                PK
    string    name
    int       alcoholRating
    string[]  tags
  }

  COCKTAIL_INGREDIENTS {
    int       number
  }

  COCKTAIL_STEP {
    int       id                PK    "autoincrement()"
    string    title
    string    description
  }

  BILL {
    string    uuid
    float     price
  }

  CUSTOMER {
    uuid      id
    string    firstname
    string    lastname
  }

  DINING_TABLE {
    uuid      id
    int       seats
  }

  ORDER {
    uuid      id
  }

  EMPLOYEE ||--|{ ADDRESS : lives_at
  SUPPLIER ||--|{ ADDRESS : located_at

  SUPPLIER ||--|{ INGREDIENT_MARKT : offers
  INGREDIENT_MARKT }|--|| INGREDIENTS : offers
  COCKTAIL ||--|{ COCKTAIL_INGREDIENTS : contains
  INGREDIENTS ||--|{ COCKTAIL_INGREDIENTS : is
  
  COCKTAIL ||--|{ COCKTAIL_STEP : mixed_by
  
  BILL ||--|{ COCKTAIL : contains
  BILL }|--|| EMPLOYEE : serves

  CUSTOMER }|--|| DINING_TABLE : sits
  CUSTOMER ||--|{ BILL : pays

  ORDER }|--|| DINING_TABLE: places
  ORDER }|--|{ COCKTAIL: contains
```

- Tische

- Bewertungen
- Angebote
- bestellungen

- Lagerbestand
