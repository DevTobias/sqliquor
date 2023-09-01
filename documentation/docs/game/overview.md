# Spieldokumentation

## Beginn des Spiels

SQLiquor ist eine webbasierte SQL Lernplattform. Es verbindet spielerische Aspekte mit dem erlernen von Wissen über sequentielle Datenbanken und stellt somit ein interaktives Schulungsprogramm für Schüler:innen, Studierende, aber auch Berufstätige, die sich weiterbilden wollen dar.

Achtung: bei den folgenden Screenshots ist der Hintergrund vereinfacht, da hier lediglich die Spiellogik erklärt wird, und dies von der 3D Umgebung unabhängig läuft. Dies dient nur der Vereinfachung, und kann auf der eigentlichen Website anders aussehen.

Startet man die Website `sqliqour.de`, so sieht man folgenden Screen

![Home Screen](/screenshots/home_screen.png)

Hier hat man nun die Möglichkeit, sich beim Klicken auf einen der `Anmelden` Buttons, sich einen neuen Account zu erstellen, oder sich anzumelden. Bevor das Spiel gestartet werden kann, muss das auch getan werden. Man sieht, das alles geklappt hat, nachdem der Button oben rechts verschwindet, und ein kleines Profilicon erscheint. Über dieses kann man sich dann auch wieder Abmelden.

![Register](/screenshots/register.png)

Nach erfolgreicher Registrierung bzw. Anmeldung, kann man auf den großen `Spielen` Button in der Mitte drücken, um das Spiel letztendlich zu starten.

## Spielprinzip

Das Spiel ist rundenbasiert. Das bedeutet konkret, es gibt mehrere Level, die jeweils aus mehreren Tagen bestehen. Die Level gruppieren verschiedene Themengebiete zusammen. Zu Beginn jedes Level kommt ein ausführliches Tutorial, welches die Konzepte, welche in den folgenden Tagen von dem SPieler gefordert werden, erklärt werden.

![Tutorial](/screenshots/tutorial.png)

Jeder Tag läuft eine bestimmte und unterschiedliche Zeit lang. Ist diese Zeit abgelaufen, so hat man den Tag geschafft und man gelangt in den nächsten Tag, bzw in das nächste Level. Die Zeit, das aktuelle Level kann man jederzeit am oberen Bildschirmrand sehen.

![Display](/screenshots/controls.png)

Das klingt jedoch einfacher als es ist. Während der Arbeitstag in der Cocktailbar läuft, treten immer wieder zufällige Ereignisse auf, um die sich gekümmert werden muss. Jedes einzelne Ereignis, hat eine bestimmte Zeit, in der es erledigt werden muss. Ist diese abgelaufen, so ist das Spiel vorbei, und man kann neustarten. Derzeitig aktive Ereignisse und deren Timer kann man im unteren rechten Rand zu jederzeit sehen.

![Events](/screenshots/events.png)

Doch wie kümmert man sich um diese Ereignisse? Klickt man eines von denen an, so öffnet sich ein Fenster, in dem man die Aufgabe lesen kann.

![Aufgabe](/screenshots/task.png)

Um diese Aufgabe mittels SQL zu lösen, kann man über der Aufgabe auf den Button mit den Sprachblasen drücken. Das Aufgabenfenster verwandelt sich dann in ein Chat Fenster. Mit dem gleichen Knopf, kommt man auch wieder zurück.

![Chat](/screenshots/chat.png)

Hier findest du einen Chatbot namens Caroline. Hier kannst du beliebige SQL Abfragen schreiben und abschicken. Diese laufen direkt auf deiner eigenen Cocktail-Datenbank. Das Ziel ist es nun, die Aufgabe zu lösen. Bist du der Meinung, dass du die Aufgabe gelöst hast, dann klicke auf die Nachricht mit der korrekten SQL Abfrage um sie zu markieren. Wenn du das gemacht hast, kannst du wieder oben, neben dem Knopf mit dem du zum Chat gekommen bist, kannst du deine Lösung überprüfen lassen. Wurde die Datenbank wie gewünscht verändert, bzw. die SELECT Anweisung hat das richtige Ergebnis produziert, so ist die Aufgabe fertig und verschwindet.

Hast du irgendwann man ein Problem und kommst nicht weiter, kannst du Caroline auch direkt fragen. Schreib einfach `Hey Caroline` gefolgt von deiner Frage in den Chat und guck, ob sie dir helfen kann. Sie kennt auch die Datenbank und sollte dir bei Problemen immer behilflich sein können.

Diese immer schwieriger werdenden Aufgaben löst du jetzt solange, bis bei einer die Zeit abläuft und das Spiel somit vorbei ist. Aber denk daran, du bist der Chef. Das heißt, kein SQL ist verboten (außer es steht explizit in der Aufgabenstellung). Du könntest z.B. Trigger schreiben, welche automatisch Zutaten nachbestellen. Der Kreativität steht nichts im Wege.
