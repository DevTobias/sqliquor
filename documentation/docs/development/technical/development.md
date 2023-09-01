# Entwicklung

Um die Entwicklungsumgebung einzurichten, müssen zunächst die folgenden Tools auf dem System installiert sein. Achtung: Bun kann im Moment nur auf Linux-basierten Systemen installiert werden. Unter windows müssen alle Schritte innerhalb einer WSL2 Instanz ausgeführt werden.

- [docker](https://www.docker.com/)
- [nodejs](https://nodejs.org/de) mit [yarn](https://yarnpkg.com/getting-started/install)
- [bun](https://bun.sh/)
- (optional) [Taskfile](https://taskfile.dev/installation/) - Wenn Taskfile nicht installiert ist muss jeder Befehl, den man eigentlich aus der `Taskfile.yml` Datei verwenden möchte, manuell in die Kommandozeile eingegeben werden. Es wird also empfohlen dieses Dienstprogramm zu verwenden.

Alle Abhängigkeiten der Projekte `backend`, `frontend` und `documentation` können einfach mit diesem Befehl installiert werden: `task run -- install`. Wenn nicht alle Abhängigkeiten aller Projekte installieren sollen, kann man einfach in das geschwünschte Unterprojekt navigieren und `bun install` für das Backend und die Dokumentation und `yarn install` für das frontend ausführen.

Nun müssen noch die Datenbanken eingerichtet werden. Damit das funktioniert, müssen eine Datei `backend/app/.env.development` erstellt werden, die alle Geheimnisse wie Datenbankpasswörter, Api-Tokens und andere Dinge enthält, die geheim gehalten werden sollen. Am einfachsten geht das, indem man die `backend/app/.env.template` Datei kopiert und die leeren Stellen ausfüllt beziehungsweise nach belieben anpasst. Danach können alle Container mit `task setup` gestartet werden.

Wenn die Datenbank bereit ist, kann nun der eigentliche Backend-Entwicklungsserver im Verzeichnis `backend/app` mit `bun start` gestartet werden.

Wenn der Server erfolgreich gestartet wurde, kann das Frontend gestartet werden. Dafür einfach im `frontend` Verzeichnis `yarn turbo dev` ausführen, um den Next.js Entwicklungsserver zu starten.

Möchte man noch die Dokumentation starten, so kann man einfach in das `documentation` Verzeichnis navigieren und `bun run dev` ausführen.
