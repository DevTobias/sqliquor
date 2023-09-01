# Systemarchitektur

Das System soll auf allen gängigen Computern sowie auf Mobilgeräten bzw. Tablets lauffähig sein. Aus diesem Grund wird das Projekt als Webapplikation umgesetzt. Dadurch wird garantiert, dass es nur eine zu pflegende Codebasis gibt und Benutzer keine Installationsprobleme, Versionskonflikte oder sonstige Probleme haben können. Das System muss somit lediglich auf verschiedenen Geräten und Internetbrowsern getestet und für diese optimiert werden, um vollste Kompatibilität und Responsiveness zu gewährleisten.

**Frontend**

Für das Frontend wird ein etabliertes JavaScript-Framework React verwendet. Dieses Frameworks ermöglicht die Entwicklung einer ansprechenden und interaktiven Benutzeroberfläche, die Benutzerfreundlichkeit und eine nahtlose Benutzererfahrung gewährleistet.

Da Skalierbarkeit und Performance eine wichtige Rolle spielen, sollte das ausgewählte Framework Server-Side-Rendering unterstützen. Dadurch wird ein schneller Zugriff von allen Geräten aus, auch wenn diese wenig Leistung besitzen, garantiert. Das als Framework React ausgewählt wurde, wird die Anwendung mit dem Next.js Framework unter Verwendung von React implementiert. Next.js bietet eine solide Unterstützung für Server-Side Rendering, um die Performance zu optimieren. React und Next.js haben beide eine der größten Communities hinter sich und haben sich schon viele Jahre in der Branche etabliert. Es ist demnach ein stabiles und ausgereiftes Framework.

Die größte technische Hürde im Frontend ist die eigentliche Spielumgebung, welche dreidimensional sein soll. Eine Implementierung von Grund auf mittels WebGL wäre möglich und effizient, aber schwierig in der gegebenen Zeit zu managen. Deswegen wird diese Oberfläche mit einem WebGL Framework namens three.js implementiert.

**Backend**

Die erste Version des Spieles beinhaltet keinerlei kompetitive Features. Die Spiellogik und Steuerung passiert somit ausschließlich im Frontend, da es hier egal ist, ob Benutzer schummeln oder nicht. Im Prinzip behindern sie dann nur ihren Lernerfolg. Somit besteht das Backend nur aus Authentifizierungs- und Remote Query Execution Engine für eine Datenbank. Implementiert wird dabei eine RESTful API, um die Kommunikation zwischen dem Frontend und den Backend zu ermöglichen.

Da dieses Projekt mit wenigen Entwicklern realisiert wird, sollte das Ziel stets sein, die Anzahl an verschiedenen Programmiersprachen und Frameworks zu minimieren. Deswegen ist die Wahl auf eine JavaScript backend Umgebung gefallen. Genauer gesagt, wurde die neue und sehr optimierte JavaScript Laufzeit bun ausgewählt, um optimale Performance auch ohne Skalierung des Servers zu erzielen.

**Deployment**

Das System soll gegebenenfalls Verwendung in öffentlichen Einrichtungen finden. Ein Deployment auf den gängigen Cloud-Plattformen wie AWS, Microsoft Azure oder Google Cloud kommen demnach aufgrund von Datenschutzrechtlichen Bedenken nicht in Frage. Andere Dienstleister wie IONOS Cloud besitzen DSGVO Zertifizierungen und kommen somit eher in Frage.

Alle Dienste werden somit isoliert unter Verwendung von Container-Technologien wie Docker bereitgestellt. Für die Orchestrierung der Container werden Tools wie Kubernetes benutzt werden, um eine skalierbare und zuverlässige Infrastruktur bereitzustellen. Diese kann dann sehr einfach sowohl auf gängigen Cloud Plattformen, als auch in ein eigenes Servernetzwerk integriert werden.
