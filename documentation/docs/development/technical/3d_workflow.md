# Der 3D Workflow

![3D Workflow](/images/3d_workflow.png)

## Konzeptionierung
Die Konzeptionierungsphase diente innerhalb dieses Projektes lediglich zur Festigung der grundlegenden Idee des Settings und des Art-Styles. Aufgrund der geringen Teamgröße und des Mangels an Künstler:innen, die Konzeptzeichnungen anfertigen können, wurden direkt 3D Prototypen erstellt. Diese Prototypen wurden im Laufe des Projektes in mehreren Iterationen angepasst und verbessert und letztendlich als Assets im Endprodukt verwendet.

## Art Style
Der Low-Poly-Stil ist ein charakteristischer Stil in der 3D-Grafik, der sich durch die Verwendung einer begrenzten Anzahl von Polygonen in 3D-Modellen auszeichnet. Im Vergleich zu detaillierten High-Poly-Modellen zeichnet sich dieser Stil durch vereinfachte Geometrie, klare Kantenbetonung, flache, stilisierte Texturen, die Verwendung von Farbblöcken und eine abstrakte Darstellung aus. Low-Poly-Modelle sind oft kantig und stilisiert, weniger realistisch, aber ästhetisch ansprechend. Sie werden in Videospielen, Animationen, Kunst und Design eingesetzt und bieten den Vorteil der effizienten Echtzeitdarstellung sowie des geringeren Speicherbedarfs. Dieser Stil ermöglicht kreative, stilisierte Darstellungen und kann von minimalistisch bis kunstvoll variieren, abhängig von den gestalterischen Zielen.

### Inspiration
![Inspiration Brianna Jaeger](/images/inspiration-brianna-jaeger.jpg)
[**Low Poly Bedroom** by Brianna Jaeger](https://brijaeger.artstation.com/projects/zLrbq)

![Inspiration Spline](/images/inspiration-spline.png)
[**Mini House** by Spline](https://app.spline.design/file/238e4899-74e6-4bcc-835c-21e3b4ccf91c)

## Verwendete Software & Ressourcen
Alle Aspekte unseres 3D Workflows wurden ausschließlich mit der Open-Source Software Blender bearbeitet. Des Weiteren wurden frei zur Verfügung gestellte Assets von Poly by Google und dem pmndrs marketplace verwendet.

## Modellierung
Die in diesem Projekt verwendeten Assets wurden mit der Herangehensweise des Box- bzw. Subdivision-Modellings erstellt. Dabei startet man mit einem der primitiven Körper (meistens Würfel oder "Boxen") und formt durch manipulation des Meshes ein neues Objekt. Die Form und Gestalt des Objektes wird durch viele iterative Umformungen und Unterteilungen (subdivisions) verfeinert. In Betracht des angedachten Low-Poly-Stils ist zu beachten, dass dem Mesh mit jeder Iteration mehr Polygone hinzugefügt werden. Um einen einheitlichen Stil zu gewährleisten und vor allem auch technische Limitierungen zu beachten, sollte die Anzahl an Polygonen möglichst auf das Minderste reduziert werden.

## Materials
Materialien in Blender beschreiben die optischen Eigenschaften an bestimmten Teilen eines oder mehrerer Objekte. Zusätzlich können verschiedene Texturen Materialien beeinflussen, um die uniforme Oberfläche eines Objekts "aufzubrechen" und realistischere Verhältnisse zu schaffen. Eine Anwendung für eine solche Manipulation durch Texturen findet sich bspw. beim Holzboden in der Bar von SQLiquor. Dort wurde stilisiert die Maserung des Holzes angedeutet um sich besser von anderen Oberflächen und Objekten abzugrenzen.

![Material Beispiel](/images/materials.png)

## UV Mapping
UV-Mapping beschreibt den Prozess, die Oberfläche eines 3D-Modells zu "entfalten", um ein auseinandergefaltetes, flaches 2D-Bild zu erstellen, auf dem die Textur aufgetragen werden kann. UVs definieren ein zweidimensionales Texturkoordinatensystem, basierend auf den Achsen U und V, die bei der Platzierung von Bildtexturkarten auf einem 3D-Modell helfen. Um ein 3D-Mesh zu entfalten, müssen Nähte im gesamten Modell platziert werden. Eine gute Methode, um herauszufinden, wo die Nähte platziert werden sollten, ist sich vorzustellen, dass die Textur wie Geschenkpapier um das Modell liegt und dabei berücksichtigt wird, wo die Nähte natürlich auftreten würden. Es ist ratsam, sie dort zu platzieren, wo sie am besten versteckt oder weniger sichtbar sind.

![UV Map](/images/uv_map.png)

## Texture Baking
Im letzten Abschnitt wurde die benötigte Vorarbeit beschrieben, die es braucht um Texturen korrekt auf 3D-Meshes zu projezieren. Wenn wir bereits Materialien definiert haben, aus denen die Objekte bestehen, warum brauchen wir dann überhaupt Texturen? Das nutzen von Texturen hat vor allem zur Implementierung im Web viele Vorteile. Zum einen lassen sich diverse technische Limitierungen umgehen. Bspw. lassen sich komplexe Blender Materialien nicht ohne weiteres in Three.js importieren. Texturen speichern hingegen das Aussehen des Objekts in einem Zustand, der universell einlesbar ist. Außerdem lassen sich, mit Hilfe von Texturen schwerwiegende Performancelimitierungen umgehen. Vor allem in einer Nacht-Szene wie sie in SQLiquor zu finden ist, verbrauchen Licht- und Schattenberechnungen in Echtzeit eine erhebliche Menge an Grafikspeicher. Diese lassen sich nahezu komplett einsparen, in dem der Einfluss von Licht und Schatten im vorhinein auf statische Objekte "gebacken" wird. Bspw. handelt es sich bei den Straßenlaternen in SQLiquor nicht um echte Lichtquellen, sondern um statische Texturen, die vorher in Blender generiert und in die jeweiligen betroffenen Objekte eingebacken wurden. Des Weiteren können verschiedene Sets an Texturen mit unterschiedlichen Auflösungen generiert werden. Bedeutet, dass bspw. Objekte die sich eher weit entfernt oder außerhalb des Kamerafokus befinden in einer niedrigereren Auflösung gerendert werden können um Perfomance zu sparen. In SQLiquor wurde für jedes Objekt eine 4096x4096 px Textur gerendert und anschließend auf 2048x2048 px runterskaliert. 

![Baked Textures](/images/texture_map.png)
