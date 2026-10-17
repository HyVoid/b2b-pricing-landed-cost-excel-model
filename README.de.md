[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# B2B-Vertriebspreis- und Rentabilitäts-Engine: Excel-Modell für Landed Cost, Cost-to-Serve und Großhandelsmarge
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/b608987f-c43c-4b99-b5f0-807f5ef96257" />

**Ein B2B-Großhandelspreisrechner für grenzüberschreitenden Handel, ein Landed-Cost-Simulator und eine Mehr-Länder-Vorlage zur Rentabilitätsmodellierung für internationale Distributoren und kommerzielle Finanzteams.**

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2563EB)
![Tool Type: Pricing & Financial Model](https://img.shields.io/badge/Tool-Pricing%20%26%20Financial%20Model-0F766E)

**Die B2B-Vertriebspreis- und Rentabilitäts-Engine ist ein kostenloser browserbasierter Rechner und ein wiederverwendbares Excel-Finanzmodell für grenzüberschreitende Großhändler, Importeure und B2B-Distributoren. Er wandelt rohe FOB-Angebote von Lieferanten in Landed Costs auf SKU-Ebene, Cost-to-Serve-Kennzahlen (CTS) für Kunden, Pocket-Margin-Preiswasserfälle, Vergleiche mehrstufiger Erfüllung und Cashflow-Prognosen des Working Capital um — und verhindert so Margenerosion durch nicht kalkulierte Frachtkosten, Zölle, Zahlungsbedingungen und Wechselkursschwankungen.**

> **Zugang zum interaktiven Preissimulator oder Download des Excel-Modells**
>
> - **[🌐 Den kostenlosen webbasierten B2B-Landed-Cost- und Preisrechner starten](https://hyvoid.github.io/b2b-pricing-landed-cost-excel-model/)** — Führen Sie sofortige grenzüberschreitende Margensimulationen in Ihrem Browser aus — ohne Installation oder Registrierung.
> - **[📥 Das wiederverwendbare B2B-Excel-Arbeitsbuch für Vertriebspreise und Rentabilität herunterladen (.xlsx)](https://theseusworkshop.com/l/mzjxa?utm_source=github&utm_medium=GitHub%20README)** — Erhalten Sie das vollständige Offline-Tabellenmodell für individuelle SKU-Kataloge, dauerhafte Finanzaudits und Vorstands-Preisüberprüfungen.



---

## Zentrale kommerzielle und finanzielle Tracking-Funktionen: Von der Schwachstelle zur Lösung

Für kommerzielle Analysten und Großhandelsbetreiber, die eine zuverlässige **Landed-Cost-Tabelle** oder eine **B2B-Margin-Wasserfall-Vorlage** suchen, überbrückt dieses Framework die Lücke zwischen Brutto-Rechnungsaufschlägen und tatsächlich realisierter Nettorentabilität:

| Schwachstelle im grenzüberschreitenden Vertrieb | Häufige Suchabsicht / Modul | Wie diese Finanz- und Preis-Engine sie löst |
| :--- | :--- | :--- |
| **Versteckte Import- und Logistikkosten untergraben die Bruttomarge** | **Landed-Cost- und Einfuhrzoll-Rechner auf SKU-Ebene** | Trennt die FOB/EXW-Einkaufspreise der Lieferanten von See-/Luftfracht, Transportversicherung, nicht einziehbaren Einfuhrzöllen, Zollabfertigungsgebühren und lokalem Kurzstreckentransport nach Land. |
| **Vertriebsmitarbeiter gewähren Rabatte unter rentable Mindestgrenzen** | **B2B-Preiswasserfall und Mindestpreis-Schutzmodell** | Etabliert klare kommerzielle Stufen — mit Vergleich von Standard-Listenpreis, Zielverkaufspreis und Mindestakzeptpreis (MAP) auf Basis harter Deckungsbeitrags-Untergrenzen. |
| **Nicht kalkulierte Kundenzugeständnisse zerstören Deal-Ökonomie** | **Cost-to-Serve-Analysator (CTS) und Pocket-Margin-Analyse** | Quantifiziert, wie kleine Bestellmengen (MOQ-Verstöße), verlängerte Zahlungsziele (DSO-Finanzierungskosten), Rabatte und Letzte-Meile-Lieferung die realisierte Nettodeckungsbeitragsmarge aushöhlen. |
| **Suboptimales Design des Lager- und Versandsnetzes** | **Mehrstufiges Erfüllungs- und Logistik-Crossover-Modell** | Vergleicht Stückökonomie über ein regionales Distributionszentrum (RDC), länderbezogene lokale/Freilager und direkte Drop-Shipping-Zustellung, um Volumen-Crossover-Punkte zu finden. |
| **Überschüssiges Working Capital in langsam rotierendem Bestand gebunden** | **Bestandsnachschub-, Sicherheitsbestands- und Cash-Zyklus-Tracker** | Verknüpft Nachfrageprognosen, Beschaffungszeiten, Sicherheitsbestandspuffer, Bestellpunkte (ROP) und optimale Bestellmengen (EOQ) direkt mit Kapitalbindung und Working-Capital-Exposure. |
| **Wechselkursvolatilität und lokale Kreditkosten verzerren regionalen P&L** | **Multi-Währungs-Länder-P&L- und FX-Sensitivitätsmodell** | Konsolidiert Umsatz, COGS, Deckungsbeitrag, lokale WACC-/Finanzierungskosten und Währungsumrechnung über vier zentralamerikanische Märkte in eine einheitliche Berichtswährung. |

---

## Schritt-für-Schritt-Anleitung: Wie man verteidigungsfähige B2B-Preise aufbaut und Rentabilitätsszenarien durchführt

Das Finanzmodell arbeitet mit einer wiederholbaren 4-stufigen kommerziellen Governance-Schleife: makroökonomische Leitplanken konfigurieren, SKU- und Länderstammdaten pflegen, Kunden-Deal-Ökonomie Stresstests unterziehen und konsolidierten Cashflow prüfen.

### Schritt 1: Globale kommerzielle Leitplanken und WACC-Parameter konfigurieren
**Aktion:** Legen Sie Ihre Basis-Finanzziele und Risikoschwellen im Parameter-Modul fest.
Definieren Sie Ihr aktives Nachfrageszenario, die Basis-Berichtswährung (z. B. USD), Ziel- und Mindestdeckungsbeitragsprozentsätze, die gewichteten durchschnittlichen Kapitalkosten (WACC), Ziel-Umlauf-Servicelevel, Rabatt-Eskalationsschwellen und Warntrigger für Bestandstage (DOH).

### Schritt 2: SKU-Stammdaten, Einfuhrzölle und Länder-Steuerwerte befüllen
**Aktion:** Geben Sie Lieferantenkataloge, Volumengewichtsspezifikationen und länderspezifische Handelsregeln ein.
Erfassen Sie SKU-Lieferantenangebote, Paletten-/Container-Verpackungsspezifikationen, länderspezifische Wechselkurse, HS-Code-Einfuhrzollsätze, VAT/GST-Erstattungsregeln, lokale kurzfristige Kreditzinssätze und Lagerhandhabungsgebühren. Aktualisieren Sie diese Werte, sobald sich Spediteurangebote oder Notenbankzinsen ändern.

### Schritt 3: Landed Cost, Cost-to-Serve und Kunden-Deal-Untergrenzen berechnen
**Aktion:** Führen Sie die Preis-Engine aus, um vorgeschlagene Kundenangebote vor der Unterzeichnung kommerzieller Verträge zu bewerten.
Prüfen Sie vollständig belastete Landed Costs und Cost-to-Serve auf Auftragsebene, bevor Sie Preise festlegen. Gleichen Sie vorgeschlagene Verkaufsrabatte, Bestellmengen, Kreditkonditionen (z. B. Net 30 vs. Net 90) und Frachtkonditionen (CIF/DDP) mit den Mindestmargen-Leitplanken und den MOQ-Richtlinien (Mindestbestellmenge) ab.

### Schritt 4: Länder-P&L Stresstest unterziehen und zum wiederverwendbaren Excel-Arbeitsbuch übergehen
**Aktion:** Prüfen Sie konsolidierte Rentabilität, Working-Capital-Finanzierungslücken und makroökonomische Sensitivität.
Untersuchen Sie Ländergewinne, Druck auf den Cash Conversion Cycle (CCC) und die Margensensitivität gegenüber Containerfracht-Spitzen, Nachfragerückgängen oder lokalen Währungsabwertungen, um kommerzielle Konditionen zu kennzeichnen, die eine Eskalation auf Vorstandsebene erfordern.

> **Bereit, vom Szenario-Test im Browser zu wiederholbarer unternehmerischer Preisgovernance überzugehen?**  
> Nachdem Sie die Methodik in der Web-App validiert haben, **[laden Sie das vollständige B2B-Vertriebspreis- und Rentabilitäts-Excel-Modell herunter (.xlsx)](https://theseusworkshop.com/l/mzjxa?utm_source=github&utm_medium=GitHub%20README)**, um Ihren proprietären SKU-Katalog einzupflegen, historische Deal-Angebote zu speichern und Offline-Quartals-Preislisten-Updates in Microsoft Excel durchzuführen.

---

## Warum ein dediziertes Landed-Cost- und Cost-to-Serve-Modell statt einfacher Aufschlagskalkulation?

In der **grenzüberschreitenden B2B-Großhandelsdistribution** wirkt die Produktpreisgestaltung auf dem Papier oft rentabel, wenn kommerzielle Teams sich auf einen einfachen **Lieferanteneinkaufspreis plus Standard-Aufschlag** verlassen. Die finanziellen Leckagen zeigen sich erst, nachdem der Bestand die physische Lieferkette und den Kreditzyklus durchlaufen hat.

Zwischen Werktor und endgelagertem Zahlungseingang absorbiert eine einzelne SKU **internationale See-/Luftfracht, Transportversicherung, nicht einziehbare Einfuhrzölle, Hafenstandzeiten, Zollabfertigung, Binnentransport, Zollagerung, Kommissionier- und Packarbeit, Letzte-Meile-Lieferung, Vertriebsprovisionen und Finanzierungskosten für Forderungen (AR)**. Der Betrieb in mehreren Ländern bringt zudem divergierende Wechselkurse, VAT-Strukturen, lokale Working-Capital-Kreditkosten und Länderrisiken mit sich.

Wenn Frachttabellen, Zolltarife und Verkaufsangebote in getrennten Tabellen leben, sieht ein Vertriebsmitarbeiter eine gesunde **Bruttomarge von 40 %**, während das Unternehmen auf Ebene der **Netto-Pocket-Margin** tatsächlich Geld verliert — durch eine nicht kalkulierte Kombination aus Volumenrabatten, Net-90-Zahlungsbedingungen und LTL-Lieferung (Less-Than-Truckload) an einen entfernten Käufer.

Diese **B2B-Vertriebspreis- und Rentabilitäts-Engine** ersetzt Faustregel-Aufschläge durch **produktisiertes kommerzielles Denken**:
1. Sie bildet echte **Landed Costs auf SKU-Ebene** je Zielmarkt und Erfüllungspfad ab.
2. Sie legt **auftragsspezifische Cost-to-Serve-Kosten (CTS)** darauf — inklusive Logistik-Handling und den Zeitwert-Finanzierungskosten verlängerter Kundenkreditkonditionen.
3. Sie erzwingt harte **Deckungsbeitrags-Untergrenzen** über einen transparenten Preiswasserfall, bevor Rabatte freigegeben werden.
4. Sie verbindet kommerzielle Preisentscheidungen direkt mit der **Bestandsnachschub-Mathematik (ROP/Sicherheitsbestand)** und den **Working-Capital-Geldbedarfen über mehrere Länder**.

Das Ziel ist nicht, Ihr Buchhaltungs-ERP oder WMS zu ersetzen. Es geht darum, die echte Stückökonomie grenzüberschreitender kommerzieller Entscheidungen *aufzudecken, bevor* verbindliche Angebote und Lieferzusagen unterzeichnet werden.

---

## Traditionelle Cost-Plus-Aufschlagstabellen vs. integrierte B2B-Preiswasserfall-Modellierung

| Kommerzielle und finanzielle Dimension | Ohne dieses Tool (statische Cost-Plus-Aufschlagstabellen) | Mit diesem Tool (integrierte Landed-Cost- und Preiswasserfall-Engine) |
| :--- | :--- | :--- |
| **Genauigkeit der ausgelieferten Stückkosten** | **Naiver FOB-Aufschlag:** Die Kalkulation basiert auf Werkseinkaufskosten plus Pauschalaufschlag — ohne Seefrachtspitzen, HS-Zollsätze, Hafenabfertigung und Lagerhaltung. | **Granularer Landed-Cost-Aufbau:** Detailliert explizit Produkteinkauf, internationale Fracht, Transportversicherung, Zölle und lokale Erfüllung je SKU und Land. |
| **Rabatt- und Zugeständnis-Governance** | **Unkontrolliertes Margenleck:** Vertriebsmitarbeiter stapeln Rechnungsrabatte, Gratisversand und verlängerte Kreditkonditionen, ohne die kumulierte Auswirkung auf die Netto-Pocket-Margin zu sehen. | **Erzwungene Deckungsbeitrags-Untergrenzen:** Bewertet die Netto-Rechnungsrealisierung gegen Zielpreis, Mindestakzeptpreis (MAP) und Eskalationsschwellen der Geschäftsführung. |
| **Leistungsvergleich über mehrere Länder** | **Verzerrte Regionalmargen:** Der Vergleich von Bruttomargen über Länder hinweg ignoriert lokale Währungsabwertung, unterschiedliche Zollregime und lokale Zinssätze. | **FX-bereinigter konsolidierter P&L:** Normalisiert länderspezifische Zölle, VAT-Behandlung und lokale WACC-Finanzierungskosten in eine einheitliche Berichtswährung für einen fairen Vergleich. |
| **Erfüllungs- und Lagernetz-Strategie** | **Statisches Logistikrouting:** Die Wahl zwischen regionalem Hub, lokalen Länderlagern oder Direktversand erfolgt nach Bauchgefühl statt nach volumenbasierter Stückökonomie. | **Dynamische Logistik-Crossover-Modellierung:** Simuliert Kostenstrukturen über Zentralhub, lokales Lager und Direktversand, um Volumen-Break-even-Punkte zu identifizieren. |
| **Ausrichtung von Bestand und Working Capital** | **Silo-Beschaffung und -Finanzen:** Bestandsplaner bestellen nach groben Durchschnitten und binden überschüssige Liquidität im Sicherheitsbestand, ohne die bilanziellen Finanzierungskosten zu sehen. | **Integrierte ROP-, Sicherheitsbestands- und Cash-Modellierung:** Verknüpft Beschaffungszeiten, Nachfragevariabilität, Servicelevel und Lieferanten-MOQs direkt mit Working-Capital-Geldbedarfen. |
| **Rentabilität vs. Cashflow-Realität** | **Bilanzieller Gewinnschein:** P&L zeigen positive betriebliche Gewinne, während das Unternehmen durch langsame Lagerumschläge und lange DSO-Forderungen schwere Liquiditätsengpässe erleidet. | **Working-Capital-bereinigte Deal-Ökonomie:** Zieht die Finanzierungskosten von Lagerhaltung und Kundenkreditkonditionen direkt von den Deckungsbeiträgen auf Transaktionsebene ab. |

---

## Ideale Anwender, kommerzielle Rollen und Großhandels-Branchenanwendungsfälle

### Für wen das gedacht ist (Rolle zu Arbeitsablauf)

- **B2B-Pricing-Manager und Commercial Directors**, die eine **B2B-Preiswasserfall- und Rabattfreigabe-Excel-Vorlage** suchen, um verteidigungsfähige Listenpreise, Zielpreise und Verhandlungs-Untergrenzen über mehrländische Vertriebsteams hinweg festzulegen.
- **Importeure, Regional-Großhändler und Handelsfirmeninhaber**, die eine **Einfuhr-Landed-Cost- und Zollrechner-Tabelle** benötigen, um Container- und Palettenlieferungen grenzüberschreitend präzise zu kalkulieren, ohne Marge an Zölle und Frachtvolatilität zu verlieren.
- **Commercial-Finance-, FP&A-Analysten und Controller**, die ein **Cost-to-Serve-Finanzmodell (CTS) und Kundenrentabilitätsmodell** suchen, um zu prüfen, wie Zahlungsbedingungen (DSO), Bestellgrößen und Logistikzugeständnisse Nettooperativgewinn und Working Capital beeinflussen.
- **Supply-Chain-Planer und Logistikmanager**, die ein **mehrstufiges Erfüllungs- und Bestandsnachschubmodell** benötigen, um regionale Distributionshubs gegen lokale Lagerhaltung zu bewerten und die Cash-Exposition des Sicherheitsbestands zu berechnen.
- **Interim-CFOs und Pricing-Berater**, die ein **wiederverwendbares, auditfähiges B2B-Entscheidungsunterstützungssystem für den Vertrieb** für KMU-Großhandelskunden ohne unternehmensweite CPQ- oder Pricing-Software aufbauen.

### Ziel-Distributionssektoren und grenzüberschreitende Anwendungsfälle

Dieses Finanzmodellierungs-Framework ist speziell für **multi-ländliche B2B-Distribution, Import/Export-Handel und regionale Großhandelsbetriebe** gebaut (nativ modelliert mit einer regionalen Fallstudie über 4 zentralamerikanische Märkte, anpassbar an jeden Mehr-Länder-Korridor):
- **Distributoren für Industriebedarf, MRO, Eisenwaren und Baumaterialien**
- **Grenzüberschreitende Importeure von Konsumgütern (FMCG), Lebensmitteln und Getränken**
- **Großhändler für Chemikalien, Agrarinputs und Spezialrohstoffe**
- **Regionale Master-Distributoren für Medizinprodukte, Pharma und Gewerbeausrüstung**
- **Netzwerke für Kfz-Aftermarket-Teile und Nutzfahrzeugkomponenten**

### Modellumfang und operative Grenzen

Um schnell, transparent und ohne IT-Integration sofort nutzbar zu bleiben:
- **Was es ist:** Eine strategische Simulations-Engine vor der Transaktion für Preise, Landed Cost, Erfüllung und Working Capital.
- **Was es nicht ist:** Es ist **kein** transaktionsverarbeitendes ERP (SAP, NetSuite, Microsoft Dynamics), keine gesetzliche Steueranmeldungs- oder automatisierte Zolltarifklassifizierungs-Engine (HTS/HS-Compliance) und keine automatisierte EDI-Fakturierungsplattform. Genaue Entscheidungsergebnisse hängen von validierten kommerziellen, Fracht- und Zollinputs ab.

---

## Über die Architektur: Produktisiertes kommerzielles Denken in Excel und Web

Komplexe Distributionsgeschäfte bluten oft Margen nicht aus Datenmangel, sondern weil **Einkaufsdaten, Frachttarife, Lagerpreise, Vertriebsrabatte und Finanzierungskosten in fünf getrennten Tabellen liegen**.

Dieses Projekt versteht Tabellen-Engineering als **produktisiertes kommerzielles Denken** um eine Kernfrage herum:

> *"Welche exakten Kosten-, Logistik- und Finanzierungsvariablen müssen in einer Ansicht verknüpft sein, damit ein kommerzielles Team einen Preis freigeben, einen Kunden kalkulieren oder einen Erfüllungsweg mit vollem Vertrauen wählen kann?"*

Die **B2B-Vertriebspreis- und Rentabilitäts-Engine** verknüpft **Lieferanten-FOB-Kosten → Grenzüberschreitende Landed Costs → Cost-to-Serve auf Auftragsebene → Preiswasserfall-Leitplanken → Bestands-Working Capital → Multi-Länder-konsolidierter P&L** in einem transparenten, prüffähigen Modell — und gibt Distributoren damit Pricing-Disziplin auf Unternehmensniveau ohne die Kosten von Unternehmenssoftware.

## Technische Details

<details>
<summary>Für technische Prüfer, Excel-Praktiker und Mitwirkende</summary>

<details>
<summary><strong>Arbeitsbuch-Architektur</strong></summary>

Das Arbeitsbuch besteht aus sechs funktionalen Modulen und 16 Geschäftsarbeitsblättern. Seine Architektur folgt einer entscheidungsorientierten Sequenz: Stammdaten legen die Annahmen fest, Kosten-Engines bestimmen die Ökonomie, kommerzielle Regeln setzen Preisgrenzen, operative Modelle testen die Erfüllungsfeasibility, die Finanzanalyse bewertet die Konsequenzen, und die Endausgaben unterstützen Management-Review und Kundenkommunikation.

| Modul | Arbeitsblätter | Hauptverantwortung |
|---|---|---|
| Stammdaten-Fundament | `01_Control Panel`, `02_Product Master`, `03_Country Master`, `04_Cost Inputs` | Zentralisierung von Modelleinstellungen, SKU-Attributen, Länderannahmen und operativen Kostenstandards. |
| Nachfrage- und dynamische Kosten-Engine | `05_Demand & Orders`, `06_Landed Cost Engine`, `07_Cost-to-Serve Engine` | Übersetzung von Nachfrageannahmen in Landed Cost und Erfüllungsökonomie auf Kundenebene. |
| Preis- und Handelspolitik-Engine | `08_Pricing Engine`, `09_Pricing Matrix`, `10_MOQ & Order Policy` | Festlegung von Preisgrenzen, Bewertung kombinierter kommerzieller Zugeständnisse und Berechnung von Auftragsschwellen. |
| Supply-Chain- und Erfüllungssimulation | `11_Logistics Scenarios`, `12_Inventory & Purchasing` | Vergleich von Distributionsrouten und Ableitung von Nachschubanforderungen unter Nachfrage- und Durchlaufzeit-Unsicherheit. |
| Finanzmodellierung und Sensitivität | `13_Financial Model`, `14_Sensitivity` | Bewertung länderbezogener und konsolidierter Rentabilität, Working Capital, Finanzierungslücken und Negativszenarien. |
| Executive-Dashboard und Preislisten | `15_Decision Dashboard`, `16_Customer Price Lists` | Aufbereitung von Entscheidungsalerts und Erstellung kundenorientierter Preislisten ohne Offenlegung interner Kosten- und Margendaten. |

<details>
<summary><strong>Datenfluss</strong></summary>

```text
Product Master ─────────┐
Country Master ─────────┼──> Landed Cost Engine
Cost Inputs ────────────┘             │
                                     ▼
Demand & Orders ─────────────> Cost-to-Serve Engine
                                     │
                                     ▼
                               Pricing Engine
                                     │
                      ┌──────────────┼──────────────┐
                      ▼              ▼              ▼
                Pricing Matrix   Order Policy   Logistics Scenarios
                      │              │              │
                      └──────────────┴──────┬───────┘
                                            ▼
                                  Inventory & Purchasing
                                            │
                                            ▼
                                      Financial Model
                                            │
                                            ▼
                                       Sensitivity
                                            │
                                            ▼
                               Decision Dashboard
                                            │
                                            ▼
                                  Customer Price Lists
```

Das Abhängigkeitsdiagramm beschreibt den beabsichtigten analytischen Fluss. Einzelne Formeln können direkt auf mehrere vorgelagerte Tabellen verweisen; das Diagramm behauptet nicht, dass jedes Arbeitsblatt ausschließlich vom unmittelbar vorherigen abhängt.

</details>

<details>
<summary><strong>Zentrale Designprinzipien</strong></summary>

- **Single Source of Truth:** Globale Annahmen gehören ins Kontrollzentrum, länderspezifische Annahmen in den Länderstamm, operative Sätze in die Kosteneingabetabelle.
- **Strukturierte Daten:** Standard-Excel-Tabellen nutzen die Namenskonvention `tbl_`. Strukturierte Referenzen reduzieren die Notwendigkeit, sich ändernde Zellbereiche manuell zu pflegen.
- **Dynamische Berechnungen:** Microsoft-365-Funktionen wie `LET`, `XLOOKUP`, `FILTER`, `UNIQUE`, `SORT`, `SWITCH` und `HSTACK` unterstützen Szenarioauswahl, Nachschlagevorgänge und dynamisch erzeugte Ausgaben.
- **Währungstrennung:** Produkt- und Betriebsökonomie kann in USD bewertet werden, während Local-Currency-Beträge mit den relevanten Wechselkursannahmen abgeleitet werden.
- **Steuerliche Trennung:** Nicht einziehbare Einfuhrzölle sind in den Landed Cost einbezogen. Erstattbare VAT wird separat verfolgt statt automatisch als ökonomische Kosten behandelt.
- **Entscheidungsorientierte Ausgaben:** Preise, Auftragsschwellen, Erfüllungsempfehlungen und Finanz-Alerts sollen operative Trade-offs sichtbar machen, bevor kommerzielle Zusagen erfolgen.

</details>

<details>
<summary><strong>Verantwortlichkeiten der Arbeitsblätter</strong></summary>

| Arbeitsblatt | Haupteingaben | Hauptausgaben |
|---|---|---|
| `01_Control Panel` | Aktives Szenario, Berichtswährung, WACC, Margenziele, Rabattgrenzen, Servicelevel-Einstellungen | Globale Berechnungsannahmen und Stammdaten-Gesundheitschecks |
| `02_Product Master` | SKU, Beschreibung, Kategorie, Kartonmenge, Einheitsvolumen, Gewicht, FOB-Preis, Lieferanten-MOQ, Mindesthaltbarkeit | Kartonvolumen, Kartongewicht, geschätzte Containerkapazität |
| `03_Country Master` | Ländercode, Währung, Wechselkurs, Zoll- und VAT-Annahmen, Finanzierungssatz, Länder-Margenaufschlag | Finanz- und Handelsparameter auf Länderebene |
| `04_Cost Inputs` | Fracht, Versicherung, Lagerung, Handhabung, Hauptlauf, Letzte-Meile-Lieferung, Provision, Forderungsausfallraten | Standard-Kostentreiber des Betriebs |
| `05_Demand & Orders` | Land, SKU, Wochennachfrage, Szenarioanpassungen, Bestellgröße, Zahlungsbedingungen | Aktive Nachfrage und annualisierte Auftragsschätzungen |
| `06_Landed Cost Engine` | Land/SKU-Kombinationen und Stammdatenreferenzen | CIF, Zoll, Frachtzuordnung, Hafenkosten, Landed Cost, Local-Currency-Kosten, VAT-Referenz |
| `07_Cost-to-Serve Engine` | Land/SKU-Kombinationen und Erfüllungsannahmen | Lagerung, Handhabung, Lieferung, Finanzierung, Forderungsausfallrückstellung, Gesamtausgelieferte Kosten |
| `08_Pricing Engine` | Ausgelieferte Kosten, Zielmarge, Mindestmarge, Länder-Risikoaufschlag | Mindestpreis, Zielpreis, Listenpreis, maximal zulässiger Rabatt |
| `09_Pricing Matrix` | Vorgeschlagene Bestellmenge, Zahlungsbedingungen, Lieferform, kommerzielle Zugeständnisse | Effektiver Rechnungspreis, realisierte Marge, Freigabestatus |
| `10_MOQ & Order Policy` | Lieferkosten, Zielmarge, Kartonbeschränkungen, Lieferantenbeschränkungen | Kunden-MOQ, Mindestbestellwert, Gratisliefer-Schwelle |
| `11_Logistics Scenarios` | Nachfrage, fixe Lagerkosten, Transport- und Erfüllungskostenannahmen | Logistik-Crossover-Volumen und Routenempfehlung |
| `12_Inventory & Purchasing` | Wochennachfrage, Durchlaufzeit, Servicelevel-Einstellungen, Bestands- und Lieferantenbeschränkungen | Sicherheitsbestand, Bestellpunkt, vorgeschlagene Bestellmenge |
| `13_Financial Model` | Nachfrage, Preise, Kosten, Betriebs- und Working-Capital-Annahmen | Länder-P&L, konsolidierte Ergebnisse, NWC, Finanzierungslücken-Indikatoren |
| `14_Sensitivity` | Basisfall-Annahmen und ausgewählte Negativ-/Positivschocks | Szenariovergleiche und Änderungen von Gewinn und Geldbedarf |
| `15_Decision Dashboard` | Ausgewähltes Land oder konsolidierte Sicht, vorgelagerte Modellausgaben | Rentabilitätsindikatoren, Ausnahmelisten, Freigabe-Alerts |
| `16_Customer Price Lists` | Ausgewähltes Land und Angebotswährung | Kundenorientierte Produktpreise, Bestellmengen, kommerzielle Hinweise |

</details>

<details>
<summary><strong>Länder- und Währungsmodell</strong></summary>

Der Länderstamm deckt vier Märkte ab:

| Code | Land | Lokale Währung | Illustrativer Wechselkurs in der Implementierungsspezifikation |
|---|---|---|---:|
| GT | Guatemala | GTQ | 7.8000 |
| SV | El Salvador | USD | 1.0000 |
| HN | Honduras | HNL | 24.6000 |
| NI | Nicaragua | NIO | 36.8000 |

Die Wechselkurskonvention lautet **Einheiten der lokalen Währung je USD**. Diese Werte sind Implementierungsbeispiele, keine verifizierten Live-Wechselkurse oder aktuellen Steuerrichtlinien. Der Produktionseinsatz erfordert aktuelle, freigegebene Finanz- und gesetzliche Eingaben.

</details>

</details>

<details>
<summary><strong>Drei Fallen, die selbst erfahrene Distributionsmanager erwischen</strong></summary>

<details>
<summary><strong>Falle 1 — Ein positiver Aufschlag beweist keinen profitablen Auftrag</strong></summary>

**1. Entscheidung:** Einen Kundenpreis freigeben, weil er über dem FOB-Einkaufspreis des Lieferanten liegt.

**2. Verdeckter Fehler:** Die Berechnung ignoriert die Kosten, das Produkt in den Zielmarkt zu bringen und an den Kunden zu liefern.

**3. Warum sich die Empfehlung ändert:** Einfuhrzoll, Fracht, Versicherung, Zollabfertigung, Lagerung, Lieferung und Finanzierung können den scheinbaren Aufschlag verzehren.

**4. Warum die Argumentation scheitert:** FOB ist eine Beschaffungsreferenz, kein vollständiges Maß für die Ökonomie eines ausgelieferten Kundenauftrags.

**5. Korrigierter Ansatz:** Zuerst den Landed Cost festlegen, dann die anwendbaren Cost-to-Serve-Komponenten hinzufügen. Den vorgeschlagenen Verkaufspreis mit den resultierenden Kosten und der erforderlichen Marge vergleichen.

**6. Entscheidungsergebnis:** Ein Preis, der beim Einkaufspreis-Aufschlag akzeptabel erschien, kann ein höheres Angebot, eine andere Lieferform, eine größere Bestellung oder eine explizite kommerzielle Ausnahme erfordern.

| Illustrative Stückökonomie | Betrag |
|---|---:|
| Lieferanten-FOB-Preis | $10.00 |
| Fracht, Versicherung, Zoll und Hafenkosten | $3.00 |
| Landed Cost | $13.00 |
| Zusätzliche Erfüllungs- und Finanzierungskosten | $2.00 |
| Gesamtausgelieferte Kosten | $15.00 |
| Vorgeschlagener Verkaufspreis | $16.00 |
| Deckungsbeitrag vor zusätzlichen nicht modellierten Kosten | $1.00 |

Das Beispiel ist illustrativ. Es zeigt, warum dieselbe Differenz von $6 über den FOB-Kosten keine Deckung von $6 nach der Erfüllung darstellt.

<details>
<summary>Formelreferenz — Landed Cost und ausgelieferte Kosten</summary>

```excel
Unit_CIF_USD =
    FOB_Price_USD
    + Unit_Freight_USD
    + Unit_Insurance_USD
```

```excel
Unit_Duty_DAI_USD =
    Unit_CIF_USD * Import_Duty_Rate
```

```excel
Unit_Landed_Cost_USD =
    Unit_CIF_USD
    + Unit_Duty_DAI_USD
    + Unit_Port_Drayage_USD
```

```excel
Total_Delivered_Cost_USD =
    Unit_Landed_Cost_USD
    + Total_Cost_to_Serve_USD
```

**Logikhinweis:** Erstattbare VAT wird im spezifizierten Landed-Cost-Design als separater Steuerreferenzbetrag geführt. Bestätigen Sie die lokale Steuerbehandlung, bevor Sie das Modell auf tatsächliche Transaktionen anwenden.

</details>

</details>

<details>
<summary><strong>Falle 2 — Rabatt, Zahlungsbedingungen und Lieferung können nicht unabhängig bewertet werden</strong></summary>

**1. Entscheidung:** Einen Volumenrabatt und längere Zahlungsbedingungen gewähren, während der Gratisversand erhalten bleibt.

**2. Verdeckter Fehler:** Jedes Zugeständnis erscheint für sich handhabbar, aber das kombinierte Paket senkt den realisierten Umsatz und erhöht die Service- oder Finanzierungskosten.

**3. Warum sich die Empfehlung ändert:** Der tatsächliche Deckungsbeitrag kann unter die Mindestakzeptmarge fallen, selbst wenn der Rechnungspreis über der nominellen Untergrenze bleibt, die für Standardkonditionen berechnet wurde.

**4. Warum die Argumentation scheitert:** Kommerzielle Zugeständnisse interagieren. Ein Rabatt wirkt auf den Umsatz; verlängerter Kredit ändert das Working-Capital-Exposure; Lieferkonditionen wirken auf die Erfüllungskosten.

**5. Korrigierter Ansatz:** Den effektiven Rechnungspreis und die relevanten Kosten auf Auftragsebene bewerten, nachdem alle vorgeschlagenen kommerziellen Konditionen angewendet wurden.

**6. Entscheidungsergebnis:** Das Paket nur freigeben, wenn es innerhalb der definierten Handelspolitik bleibt, oder zur expliziten Freigabe eskalieren.

| Prüfungsdimension | Unvollständiger Ansatz | Korrigierter Ansatz |
|---|---|---|
| Volumenrabatt | Nur den Rabatt bewerten | Alle Preiszugeständnisse einbeziehen |
| Zahlungsbedingungen | Den Rechnungswert als Cash-äquivalent behandeln | Das anwendbare Finanzierungs-Exposure einbeziehen |
| Lieferung | Die Lieferung als Standard-Gemeinkosten behandeln | Relevante Erfüllungskosten dem Auftrag zuordnen |
| Freigabe | Nur mit dem Listenpreis vergleichen | Die realisierte Ökonomie mit der erforderlichen Untergrenze und den Freigaberegeln vergleichen |

<details>
<summary>Formelreferenz — Preis- und Margengrenzen</summary>

```excel
Floor_Price_USD =
    Unit_Delivered_Cost_USD
    / (1 - Required_Floor_Margin)
```

```excel
Target_Price_USD =
    Unit_Delivered_Cost_USD
    / (1 - Required_Target_Margin)
```

```excel
Max_Allowable_Discount_% =
    (List_Price_USD - Floor_Price_USD)
    / List_Price_USD
```

Diese Ausdrücke setzen eine Marge als Prozentsatz des Verkaufspreises und gültige Margeneingaben unter 100 % voraus. Die Margin auf Auftragsebene muss weiterhin mit dem effektiven Verkaufspreis und den für diese Transaktion relevanten Kosten berechnet werden.

</details>

</details>

<details>
<summary><strong>Falle 3 — Positiver Operativgewinn garantiert keine ausreichende Liquidität</strong></summary>

**1. Entscheidung:** Die Distribution ausbauen, weil der projektierte Länder-P&L einen positiven Operativgewinn zeigt.

**2. Verdeckter Fehler:** Wachstum erfordert mehr Bestand und kann Kundenforderungen erhöhen, bevor Lieferantenzahlungen und Kundeneinzüge ausgeglichen sind.

**3. Warum sich die Empfehlung ändert:** Das Unternehmen kann zusätzliche Finanzierung für Bestand und Forderungen benötigen, selbst während sein projektiertes Operationsergebnis positiv bleibt.

**4. Warum die Argumentation scheitert:** Rentabilität und Liquidität messen unterschiedliche Dinge. Umsatzerfassung und Operativgewinn belegen nicht, dass an jedem Punkt des Betriebszyklus ausreichend Cash verfügbar ist.

**5. Korrigierter Ansatz:** Die Operationsergebnisse zusammen mit Bestand, Forderungen, Verbindlichkeiten und dem resultierenden Working-Capital-Bedarf prüfen. Negativschocks bei Nachfrage sowie Fracht- oder Währungsschocks testen.

**6. Entscheidungsergebnis:** Die Expansion kann überarbeitete Kreditkonditionen, kleinere oder gestaffelte Einkaufszusagen, andere Bestandsrichtlinien oder zusätzliche Finanzierung erfordern.

<details>
<summary>Formelreferenz — Working Capital und Finanzierungs-Exposure</summary>

```excel
Net_Working_Capital =
    Accounts_Receivable
    + Inventory
    - Accounts_Payable
```

Ein vereinfachtes Finanzierungslücken-Maß kann die modellierten Finanzierungsbedarfe mit der verfügbaren Finanzierungskapazität vergleichen. Die exakte Berechnung hängt von den Finanzierungsannahmen des Arbeitsbuchs und den im Finanzmodell implementierten Feldern ab.

Ein positiver Working-Capital-Bedarf ist nicht automatisch ein Kreditdefizit. Eine Finanzierungslücke besteht nur, wenn der relevante Finanzierungsbedarf die verfügbare Finanzierungskapazität nach den Definitionen des Modells übersteigt.

</details>

</details>

</details>

<details>
<summary><strong>Beispielszenario</strong></summary>

Betrachten Sie eine illustrative SKU, die zu einem FOB-Preis von $10.00 pro Einheit geliefert wird. Das Produkt wird in einen der modellierten Märkte verschickt und unter einer definierten Liefer- und Zahlungsvereinbarung an einen Kunden verkauft.

Das folgende Beispiel demonstriert die Entscheidungssequenz. Die Zahlen sind hypothetisch und keine Prognose für ein bestimmtes Land oder Produkt.

| Eingabe oder Berechnung | Illustrativer Wert |
|---|---:|
| FOB-Einkaufspreis | $10.00 |
| Zugeordnete internationale Fracht und Versicherung | $1.00 |
| CIF-Wert | $11.00 |
| Einfuhrzoll bei angenommenen 10% | $1.10 |
| Zugeordnete Hafen- und Zollkosten | $0.40 |
| Landed Cost | $12.50 |
| Erfüllungs- und Finanzierungskosten | $1.50 |
| Gesamtausgelieferte Kosten | $14.00 |
| Erforderliche Ziel-Deckungsbeitragsmarge | 25% |
| Erforderliche Mindest-Deckungsbeitragsmarge | 12% |

Gemäß der auf dem Verkaufspreis basierenden Margenkonvention lautet der Zielpreis:

\[
P_{\text{target}}=\frac{14.00}{1-0.25}=\$18.67
\]

Der Mindestpreis lautet:

\[
P_{\text{floor}}=\frac{14.00}{1-0.12}=\$15.91
\]

Ein vorgeschlagener Verkaufspreis von $17.00 würde einen Deckungsbeitrag von $3.00 pro Einheit erzeugen, bevor zusätzliche Kosten anfallen, die in der modellierten ausgelieferten Kostenzahl nicht enthalten sind. Seine Deckungsbeitragsmarge läge bei etwa 17,65 %.

Der Vorschlag würde die illustrative Untergrenze überschreiten, aber unter dem Zielpreis bleiben. Das ist eine materiell andere Schlussfolgerung als die bloße Beobachtung, dass $17.00 höher als der FOB-Preis von $10.00 ist.

Die nächste Entscheidung ist nicht automatisch, die Transaktion abzulehnen. Es geht darum zu bestimmen, ob Bestellvolumen, Kundenkonditionen, Lieferform und strategischer Kontext die Annahme einer unter dem Ziel, aber über der Untergrenze liegenden Transaktion gemäß der anwendbaren Freigaberichtlinie rechtfertigen.

</details>

<details>
<summary><strong>Formelreferenz</strong></summary>

Die folgenden Formeln dokumentieren die wichtigsten Berechnungsmuster und ihren Geschäftszweck. Sie basieren auf der Implementierungsspezifikation. Vor dem Produktionseinsatz gleichen Sie jeden Ausdruck mit den tatsächlichen Tabellennamen, Spalten und Formelzellen des finalen Arbeitsbuchs ab.

<details>
<summary>1. Stammdaten, Nachfrageszenarien und dynamische Nachschlagelookups</summary>

**Zweck:** Konsistente Schlüssel und Annahmen etablieren, bevor kommerzielle Ausgaben berechnet werden.

#### SKU-Containerkapazität

```excel
=LET(
    feu_cbm, Control_Panel!$C$12,
    sku_cbm, [@[Unit_CBM]],
    IF(sku_cbm > 0, INT(feu_cbm / sku_cbm), 0)
)
```

Dies schätzt die Anzahl der Einheiten, die in die konfigurierte Containervolumen-Zuteilung passen. Es ist eine volumenbasierte Schätzung, kein vollständiger Ladeplan: Gewichts­grenzen, Palettierung, Verpackungsgeometrie und operative Auslastung können die tatsächliche Kapazität reduzieren.

#### Aktive Nachfrage je Szenario

```excel
=LET(
    scenario, Control_Panel!$C$4,
    base_qty, [@[Base_Demand_Qty]],
    high_rate, [@[High_Scenario_Uplift_%]],
    low_rate, [@[Low_Scenario_Downside_%]],
    SWITCH(
        scenario,
        "Base", base_qty,
        "High", ROUND(base_qty * (1 + high_rate), 0),
        "Low", ROUND(base_qty * (1 + low_rate), 0),
        base_qty
    )
)
```

Das aktive Szenario bestimmt, welche Nachfragemenge die nachgelagerten Berechnungen speist.

#### Annualisierte Bestellfrequenz

```excel
=LET(
    batch, [@[Order_Batch_Units]],
    demand, [@[Active_Demand_Qty]],
    IF(batch > 0, (demand * 52) / batch, 0)
)
```

Die Berechnung schätzt jährliche Auftragsläufe aus der modellierten Wochennachfrage und der typischen Bestellgröße. Ihre Genauigkeit hängt von konsistenten Nachfrageeinheiten und einer gültigen Bestell-Los-Annahme ab.

#### Allgemeines Nachschlage-Schema

```excel
=XLOOKUP(
    [@[Country_Code]],
    tbl_CountryMaster[Country_Code],
    tbl_CountryMaster[FX_Rate_to_USD],
    0
)
```

Verwenden Sie einen konsistenten Geschäftsschlüssel, um einen Länderparameter abzurufen. Eine Null oder ein anderer Fallback darf nicht als Beleg dafür interpretiert werden, dass die zugrunde liegenden Stammdaten gültig sind; Prüfungen auf fehlende Schlüssel sollten separat erfolgen.

</details>

<details>
<summary>2. Landed Cost, steuerliche Trennung und Cost-to-Serve</summary>

**Zweck:** Die Kosten der Produkteinfuhr und der Kundenbedienung festlegen.

#### Frachtzuordnung

```excel
=LET(
    feu_freight,
        XLOOKUP(
            [@[Country_Code]],
            tbl_CostInputs[Country_Code],
            tbl_CostInputs[Ocean_Freight_FEU],
            0
        ),
    cap_units, [@[Container_Cap_Units]],
    IF(cap_units > 0, feu_freight / cap_units, 0)
)
```

Das spezifizierte Modell verteilt die Containerfracht auf die geschätzte Einheitskapazität. Die resultierenden Stückkosten hängen von der angenommenen Ladeauslastung ab.

#### Versicherung und CIF

```excel
=LET(
    ins_rate,
        XLOOKUP(
            [@[Country_Code]],
            tbl_CostInputs[Country_Code],
            tbl_CostInputs[Marine_Insurance_Rate],
            0
        ),
    ([@[FOB_Price_USD]] + [@[Unit_Freight_USD]]) * ins_rate
)
```

```excel
=[@[FOB_Price_USD]]
 + [@[Unit_Freight_USD]]
 + [@[Unit_Insurance_USD]]
```

Der zweite Ausdruck erzeugt den CIF-Referenzwert des Modells aus FOB, Fracht und Versicherung.

#### Einfuhrzoll und Landed Cost

```excel
=[@[Unit_CIF_USD]] * [@[Import_Duty_Rate]]
```

```excel
=[@[Unit_CIF_USD]]
 + [@[Unit_Duty_DAI_USD]]
 + [@[Unit_Port_Drayage_USD]]
```

Die spezifizierte Landed-Cost-Definition umfasst CIF, Einfuhrzoll sowie zugewiesene Hafen- und Kurzstreckentransportkosten. Weitere importbezogene Kosten sind zu ergänzen, wenn sie anwendbar sind und im aktuellen Modell fehlen.

#### Erstattbare VAT-Referenz

```excel
=LET(
    vat_rate,
        XLOOKUP(
            [@[Country_Code]],
            tbl_CountryMaster[Country_Code],
            tbl_CountryMaster[VAT_Rate],
            0
        ),
    taxable_base,
        [@[Unit_CIF_USD]] + [@[Unit_Duty_DAI_USD]],
    taxable_base * vat_rate
)
```

Diese Formel illustriert die VAT-Referenzberechnung der Implementierung. Die tatsächliche VAT-Erstattbarkeit, Bemessungsgrundlage, Zollwert und lokale Behandlung müssen anhand der Regeln des jeweiligen Landes verifiziert werden.

#### Gesamtkosten Cost-to-Serve und ausgelieferte Kosten

```excel
=SUM(
    [@[Unit_Storage_Cost_USD]]:
    [@[Unit_BadDebt_Cost_USD]]
)
```

```excel
=[@[Unit_Landed_Cost_USD]]
 + [@[Total_Cost_to_Serve_USD]]
```

Die Cost-to-Serve-Aggregation umfasst Lagerung, Handhabung, Letzte-Meile-Lieferung, Finanzierung und die modellierte Forderungsausfallrückstellung.

</details>

<details>
<summary>3. Preise, Auftragspolitik und Freigabekontrollen</summary>

**Zweck:** Vollkosten-Ökonomie in umsetzbare kommerzielle Grenzen übersetzen.

#### Zielpreis und Mindestpreis

```excel
=LET(
    cost, [@[Unit_Delivered_Cost_USD]],
    target_margin, [@[Required_Target_Margin]],
    IF(target_margin < 1, cost / (1 - target_margin), 0)
)
```

```excel
=LET(
    cost, [@[Unit_Delivered_Cost_USD]],
    floor_margin, [@[Required_Floor_Margin]],
    IF(floor_margin < 1, cost / (1 - floor_margin), 0)
)
```

Diese Ausdrücke setzen voraus, dass Ziel- und Mindestmargen auf den Verkaufspreis und nicht auf die Kosten bezogen sind.

#### Maximal zulässiger Rabatt

```excel
=LET(
    list_p, [@[List_Price_USD]],
    floor_p, [@[Floor_Price_USD]],
    IF(list_p > 0, (list_p - floor_p) / list_p, 0)
)
```

Die Berechnung misst die prozentuale Reduktion vom Listenpreis zum Mindestpreis. Sie autorisiert nicht eigenständig einen Rabatt: Kommerzielle Freigabeschwellen und Margenprüfungen auf Auftragsebene bleiben separate Kontrollen.

#### Ökonomischer Kunden-MOQ

```excel
=LET(
    fixed_fee, [@[Fixed_Drop_Order_Fee]],
    margin_unit, [@[Unit_Margin_Contribution]],
    pack_carton,
        XLOOKUP(
            [@[SKU_Code]],
            tbl_ProductMaster[SKU_Code],
            tbl_ProductMaster[Units_Per_Carton],
            1
        ),
    break_even_units,
        IF(margin_unit > 0, CEILING(fixed_fee / margin_unit, 1), 1),
    CEILING(break_even_units, pack_carton)
)
```

Die spezifizierte Formel schätzt die Bestellmenge, die zur Deckung einer festen Liefer- oder Auftragskostenposition erforderlich ist, und rundet dann auf eine volle Kartonmenge. Die Definition von `Unit_Margin_Contribution` des Modells und die in diesem Deckungsbeitrag enthaltenen Kosten müssen geprüft werden, bevor man sich auf das Ergebnis verlässt.

#### Mindestbestellwert und Gratisliefer-Schwelle

```excel
=[@[Customer_Economic_MOQ]]
 * [@[Target_Price_USD]]
```

```excel
=LET(
    drop_fee, [@[Fixed_Drop_Order_Fee]],
    target_margin, Control_Panel!$C$7,
    IF(target_margin > 0, ROUNDUP(drop_fee / target_margin, -1), 0)
)
```

Der Mindestbestellwert folgt dem ökonomischen MOQ. Die Gratisliefer-Schwelle ist eine vereinfachte Richtlinienschätzung auf Basis der festen Drop-Fee und der Zielmargen-Annahme; validieren Sie ihr Verhalten anhand der tatsächlichen Handelspolitik vor dem Einsatz.

#### Freigabestatus

```excel
=LET(
    margin, [@[Actual_Net_Margin_%]],
    min_floor, Control_Panel!$C$8,
    list_p, [@[Base_List_Price_USD]],
    net_p, [@[Net_Effective_Price_USD]],
    discount_rate,
        IF(list_p > 0, (list_p - net_p) / list_p, 0),
    max_disc_limit, Control_Panel!$C$10,
    IFS(
        margin < min_floor,
            "🚨 Below minimum margin",
        discount_rate > max_disc_limit,
            "⚠️ Approval required",
        TRUE,
            "✅ Within policy"
    )
)
```

Die angezeigten englischen Statuslabels sind erklärende Entsprechungen der chinesischen Statuslabels der Originalimplementierung. Wenn das Arbeitsbuch in nachgelagerten Formeln exakte Textübereinstimmung verwendet, bewahren Sie die Original-Strings des Arbeitsbuchs oder aktualisieren Sie alle abhängigen Referenzen gemeinsam.

</details>

<details>
<summary>4. Logistik, Bestand und Nachschub</summary>

**Zweck:** Erfüllungsstrukturen vergleichen und Nachfrageannahmen in Beschaffungsentscheidungen übersetzen.

#### Logistik-Crossover-Prinzip

Ein vereinfachter Crossover zwischen Fixkosten und variablen Kosten kann wie folgt ausgedrückt werden:

\[
Q^*=\frac{\Delta F}{S}
\]

Wobei:

- \(Q^*\) das ungefähre Jahresvolumen ist, ab dem das alternative Erfüllungsmodell wettbewerbsfähig wird.
- \(\Delta F\) die zusätzlichen jährlichen Fixkosten der Alternative sind.
- \(S\) die Stückeinsparung bei variablen Kosten ist.

Die Berechnung ist nur sinnvoll, wenn die Alternative tatsächlich variable Kosten spart (\(S>0\)). Ist die Einsparung null oder negativ, gibt es in dieser vereinfachten Formulierung keinen endlichen positiven Crossover.

Die Implementierungsspezifikation verwendet in ihrem Crossover-Beispiel eine Fixkostenannahme für das Lager und ein Rundungsincrement von 100 Einheiten. Solche Annahmen sollten in kontrollierte Parameter überführt werden, wenn sie je Land oder Betriebsstruktur variieren müssen.

#### Dynamischer Sicherheitsbestand und Bestellpunkt

Das beabsichtigte Modell nutzt einen Ziel-Servicelevel, Nachfragevariabilität und Durchlaufzeit, um Schutz gegen Nachfrage- und Beschaffungsunsicherheit aufzubauen.

Eine gängige analytische Formulierung ist:

\[
SS = z \times \sigma_d \times \sqrt{L}
\]

\[
ROP = \bar d L + SS
\]

Wobei:

- \(SS\) der Sicherheitsbestand ist.
- \(z\) der Servicelevel-Faktor ist.
- \(\sigma_d\) die Standardabweichung der Nachfrage pro Periode ist.
- \(L\) die Durchlaufzeit in denselben Periodeneinheiten ist.
- \(\bar d\) die durchschnittliche Nachfrage pro Periode ist.
- \(ROP\) der Bestellpunkt ist.

Diese Gleichungen beschreiben die Standardformulierung mit unabhängigen Periodennachfragen. Sie ersetzen nicht die Prüfung der im finalen Arbeitsbuch implementierten Formel. Sind Nachfrage und Durchlaufzeit beide variabel oder ist die Nachfrage saisonal, kann die Unsicherheitsberechnung eine andere Behandlung erfordern.

#### Vorgeschlagene Bestellmenge

Die Beschaffungsempfehlung sollte berücksichtigen:

- die Menge, die erforderlich ist, um den Bestand zum gewählten Bestandsziel zurückzuführen;
- den aktuellen verfügbaren Bestand und relevante offene Bestellungen;
- den Lieferanten-MOQ;
- Karton- oder andere Verpackungsmultipel;
- die verbleibende Mindesthaltbarkeit und das Risiko von Überbeständen.

Eine vorgeschlagene Bestellmenge darf nicht als Beschaffungsfreigabe interpretiert werden. Der Einkauf muss tatsächlichen Bestand, offene Bestellungen, Lieferantenbeschränkungen und Nachfrageannahmen prüfen, bevor eine Bestellung ausgelöst wird.

</details>

<details>
<summary>5. Finanzmodellierung, Sensitivität und Management-Reporting</summary>

**Zweck:** Kommerzielle Entscheidungen mit Operativgewinn und Finanzierungsbedarf verbinden.

#### Länder- und konsolidiertes Finanzmodell

Die Implementierung folgt einem Gewinnwasserfall:

```text
Net Revenue
    - Cost of Goods Sold
    = Gross Profit
    - Fulfillment Operating Expenses
    = Contribution Margin
    - Sales Commission and Bad-Debt Allowance
    = Operating EBIT
```

Die exakte Zuordnung jeder Kostenposition zu COGS, Erfüllungsaufwand oder kommerziellem Aufwand muss mit der Rechnungslegungsrichtlinie der Organisation konsistent bleiben. Dieselbe Kostenposition darf nicht sowohl im Landed Cost als auch in den Betriebsaufwand eingerechnet werden.

#### Working Capital

```excel
=[@[Accounts_Receivable_USD]]
 + [@[Inventory_Capital_USD]]
 - [@[Accounts_Payable_USD]]
```

Dies drückt die Definition des Netto-Working-Capital des Modells aus. Finanzierungsbedarfe und Kreditverfügbarkeit sollten getrennt von der Operativgewinn-Berechnung bewertet werden.

#### Nachfragesensitivität

Die Implementierung vergleicht niedrigere, Basis- und höhere Nachfrageszenarien. Die Spezifikation verwendet illustrative Nachfrage-Multiplikatoren von 0.80, 1.00 und 1.20.

Eine vereinfachte Szenarioberechnung skaliert Nettoerlös und COGS mit der Nachfrage und trennt dabei die modellierten variablen Erfüllungskosten von den fixen Lagerkosten. Damit soll der operative Leverage sichtbar werden: weniger Verkäufe reduzieren die Fixkosten nicht notwendig proportional.

#### Fracht- und Rabattsensitivität

Das Modell enthält einen Zwei-Variablen-Stresstest, der Frachtkosten- und kommerzielle Rabattannahmen variiert. Ziel ist es, Kombinationen zu identifizieren, die die realisierte Marge unter akzeptable Niveaus fallen lassen.

Der Frachtschock sollte auf eine klar definierte Frachtbasis und eine konsistente Zuordnungsbasis angewendet werden. Eine Szenariomatrix ist nur so zuverlässig wie diese zugrunde liegenden Annahmen.

#### Währungssensitivität

Das Modell testet auch die Abwertung der lokalen Währung. Die resultierende Auswirkung hängt von der Währungsdenominierung von Umsatz, Lieferanteneinkäufen, Schulden und Betriebskosten ab.

Ein Währungsschock darf nicht als vollständiges Devisenrisikomodell interpretiert werden, sofern diese Exposures und ihr Zeitpunkt nicht explizit abgebildet sind.

#### Dashboard- und Kundenangebot-Ausgaben

Das Dashboard konsolidiert Kennzahlen des ausgewählten Landes oder der Gruppe, Produktrentabilitätsstatus, Erfüllungsempfehlungen und überprüfungsbedürftige Angebote.

Die Ausgabe der Kundenpreisliste ist so gestaltet, dass Produktkennungen, Beschreibungen, Bestellmengen, Preisstufen und kommerzielle Hinweise sichtbar sind, während interne FOB-Kosten, Zolldetails, Betriebskostensätze und interne Margenindikatoren ausgeklammert bleiben.

</details>

</details>

<details>
<summary><strong>Validierungsregeln</strong></summary>

Die folgenden Prüfungen definieren die minimalen Kontrollen, die für eine zuverlässige Implementierung erforderlich sind. Einige sind in der Quelle explizit spezifiziert; andere sind empfohlene Schutzmaßnahmen zur Validierung der deklarierten Berechnungslogik. Eine empfohlene Schutzmaßnahme sollte erst nach Verifikation als bereits implementierte Arbeitsbuch-Funktion behandelt werden.

| Feld oder Kontrolle | Validierungsregel | Erforderliches Fehlerverhalten |
|---|---|---|
| `SKU_Code` | Muss befüllt und im Produktstamm eindeutig sein. | Duplikate kennzeichnen und mehrdeutige SKU-Lookups verhindern. |
| `Country_Code` | Muss einem freigegebenen Ländercode entsprechen: `GT`, `SV`, `HN` oder `NI`. | Ungültige oder nicht zugeordnete Codes kennzeichnen. |
| `Units_Per_Carton` | Muss eine positive Ganzzahl sein. | Null-, negative oder gebrochene Mengen ablehnen oder kennzeichnen. |
| `Unit_CBM` | Muss für die volumenbasierte Frachtzuordnung größer als null sein. | Fehlende oder nicht positive Werte kennzeichnen; Nullkapazität nicht als gültiges Ladeergebnis behandeln. |
| `Unit_Weight_KG` | Muss nicht-negativ und konsistent mit der Produktspezifikation sein. | Fehlende oder ungültige Gewichtsdaten kennzeichnen, bevor gewichtsbasierte Kostenzuordnung erfolgt. |
| `Supplier_FOB_USD` | Muss ein gültiger nicht-negativer Einkaufspreis in der angegebenen Währung sein. | Fehlende oder negative Werte kennzeichnen; Währungskonsistenz prüfen. |
| `FX_Rate_to_USD` | Muss positiv sein und der Konvention lokaler Währungseinheiten je USD folgen. | Fehlende, null oder negative Kurse kennzeichnen; eine ungültige Umrechnung nicht stillschweigend akzeptieren. |
| `Import_Duty_Rate` und `VAT_Rate` | Müssen gültige Prozenteingaben sein, die von aktuellen länderspezifischen Annahmen gestützt werden. | Außerhalb des Bereichs liegende oder unverifizierte Eingaben kennzeichnen; Prüfung der gesetzlichen Behandlung einfordern. |
| `VAT_Recoverable` | Muss ein expliziter Boolescher Wert sein, der zur anwendbaren Steuerbehandlung passt. | Fehlende oder inkonsistente Steuerkonfiguration kennzeichnen. |
| `Annual WACC` und lokale Kreditzinssätze | Müssen gültige Sätze sein, konsistent mit der vorgesehenen Finanzierungsberechnung. | Ungültige Sätze kennzeichnen und prüfen, dass der richtige Satz für das relevante Exposure verwendet wird. |
| Ziel- und Mindestmargen | Müssen für die spezifizierten Preisformeln unter 100 % liegen. | Keinen irreführenden Preis berechnen, wenn der Nenner null oder negativ ist. |
| `Order_Units` | Muss für ein gültiges Angebot eine positive Menge sein. | Null- oder negative Bestellmengen kennzeichnen. |
| `Terms_Days` | Muss einer der unterstützten Zahlungsziel-Werte sein: 0, 30, 60 oder 90 Tage, sofern das Modell nicht bewusst erweitert wurde. | Nicht unterstützte Konditionen kennzeichnen oder an eine explizit definierte Regel weiterleiten. |
| `Delivery_Method` | Muss den unterstützten Werten entsprechen, z. B. `Delivered` oder `ExWorks`. | Nicht erkannte Lieferkonditionen kennzeichnen, statt eine Standardroute anzunehmen. |
| `Active_Demand_Qty` | Muss mit dem ausgewählten Szenario und der Basisnachfrage-Eingabe konsistent sein. | Fehlende Szenariowerte und ungültige Nachfragemengen kennzeichnen. |
| Lieferanten-MOQ und Kartonbeschränkungen | Vorgeschlagene PO-Mengen müssen anwendbare Mindestmengen und Verpackungsmultipel beachten. | Mengen kennzeichnen, die die Einkaufsbeschränkungen des Lieferanten nicht erfüllen können. |
| Preis- und Margenausgaben | Müssen auf zugeordneten Land/SKU-Schlüsseln und gültigen Kostendaten basieren. | Fehlende Zuordnungen kennzeichnen; eine von einem Lookup gelieferte Null darf nicht stillschweigend als verifizierte Kosten gelten. |
| `Net_Effective_Price_USD` | Muss vor Margenberechnungen positiv sein. | Nicht positive Preise kennzeichnen und eine fabrizierte Marge vermeiden. |
| Rabattfreigabe | Tatsächlicher Rabatt und Deckungsbeitrag müssen gegen die konfigurierten Richtlinien-Schwellen geprüft werden. | Transaktionen unter der Untergrenze oder über der Freigabeschwelle kennzeichnen. |
| Finanzmodell | Umsatz, COGS, Aufwand, EBIT und Working Capital müssen konsistenten Definitionen ohne doppelte Kostenzuordnung folgen. | Abstimmungsdifferenzen zur Prüfung kennzeichnen. |
| Dynamische Array-Ausgaben | Überlaufbereiche müssen frei bleiben. | `#SPILL!` durch Entfernen konfliktierender Inhalte oder verbundener Zellen beheben. |
| Formelintegrität | Berechnete Spalten müssen Formeln bleiben und sich beim Wachstum ihrer Excel-Tabellen ausdehnen. | Überschriebene Formeln oder Zeilen außerhalb des vorgesehenen Tabellenbereichs kennzeichnen. |
| Kundenpreisliste | Muss interne Beschaffungskosten, Zolldetails, Betriebskostensätze und interne Margenkennzahlen ausschließen. | Die exportierte kundenorientierte Ausgabe auf unbeabsichtigte interne Offenlegung prüfen. |

<details>
<summary><strong>Modellintegritätsprüfungen</strong></summary>

Bevor Sie sich auf das Arbeitsbuch verlassen, prüfen Sie Folgendes:

1. Alle 29 angenommenen Eingabefelder der Implementierungsspezifikation haben ein definiertes Ziel und eine dokumentierte nachgelagerte Abhängigkeit.
2. Alle 24 Schlüsselausgabefelder haben eine definierte Berechnungsquelle und eine klare Geschäftsinterpretation.
3. Länder/SKU-Kombinationsschlüssel liefern die beabsichtigten Datensätze und erzeugen keine mehrdeutigen Treffer.
4. Steuer-, Währungs-, Kostenzuordnungs- und Margendefinitionen sind über die Kosten-Engines und das Finanzmodell hinweg konsistent.
5. Die Dashboard-Alerts stimmen mit den zugrunde liegenden Preis- und Freigabeberechnungen überein.
6. Das kundenorientierte Angebot enthält nur die für die externe Weitergabe vorgesehenen Informationen.
7. Das Modell wurde nach wesentlichen Änderungen an Annahmen oder Stammdaten neu berechnet und geprüft.

Die Implementierungsspezifikation beschreibt den 29-Input-/24-Output-Gegenprüfkontext als vollständig. Diese dokumentierte Designaussage ist von einer unabhängigen Verifikation eines fertigen Arbeitsbuchs zu unterscheiden: tatsächliche Formelintegrität, numerische Genauigkeit und Betriebsverhalten erfordern Tests gegen die implementierte Datei und repräsentative Testfälle.

</details>

</details>

</details>


## Geschäftslogik und Methodik

Die Engine behandelt grenzüberschreitende Distribution als ein vernetztes kommerzielles System statt als eine Folge isolierter Aufschlagsberechnungen. Der zentrale Grundsatz ist, die Ökonomie von Produkt, Kunden-Transaktion, Lieferform und Finanzierungsbedarf gemeinsam zu bewerten.

- **Vollkosten-Kalkulation:** Einfuhrkosten und Erfüllungsaufwand werden bewertet, bevor eine Verkaufspreisempfehlung festgelegt wird. Das reduziert das Risiko, eine Transaktion freizugeben, die im Vergleich zu den Lieferantenkosten profitabel wirkt, aber die Kosten der Kundenbedienung nicht deckt.
- **Deckungsbeitrags-Grenzen:** Ziel- und Mindestmargenanforderungen schaffen eine Unterscheidung zwischen dem bevorzugten kommerziellen Ergebnis und der niedrigsten akzeptablen Transaktionsökonomie. Rabattgrenzen und Freigaberegeln helfen, Ausnahmen explizit zu machen.
- **Auftragsökonomie:** Volumen, Zahlungsbedingungen und Lieferformen werden gemeinsam bewertet. Dadurch werden die Kosten von Zugeständnissen sichtbar und Mindestbestell- und Lieferpolitiken werden unterstützt, die die tatsächliche Betriebsökonomie widerspiegeln.
- **Szenario- und Logistikvergleich:** Alternative Nachfrageniveaus und Erfüllungsstrukturen werden anhand ihrer Kostenimplikationen bewertet. Der resultierende Vergleich hilft zu erkennen, wann zentrale Distribution, lokale Lagerhaltung oder Direktversand weiterer Untersuchung wert sind.
- **Rentabilitäts- und Liquiditätsanalyse:** Länder-P&L werden zusammen mit Bestand, Forderungen, Verbindlichkeiten und Finanzierungs-Exposure betrachtet. So lässt sich leichter unterscheiden, ob ein Operativplan rentabel ist oder mehr Working Capital benötigt, als das Unternehmen finanzieren kann.

Das kommerzielle Ergebnis ist ein wiederholbarer Entscheidungsprozess: validierte Annahmen etablieren, ausgelieferte Ökonomie berechnen, Preisgrenzen anwenden, operative Alternativen testen und die resultierenden Gewinn- und Finanzierungsimplikationen prüfen, bevor eine Entscheidung freigegeben wird.

## Weitere Tools dieser Serie

Entdecken Sie weitere leichte Excel- und browserbasierte Entscheidungsunterstützungstools im [HyVoid GitHub-Profil](https://github.com/HyVoid).

- **Bauprojekt-Controlling:** Kosten schätzen, Budgets steuern und Projektlieferung überwachen.
- **Finanzmodellierung:** Betriebsannahmen, Finanzberichte und Investitionsentscheidungen verbinden.
- **Bestands- und Kapazitätsplanung:** Nachschubbedarf und operative Restriktionen bewerten.

## Lizenz

Dieses Projekt wird unter der **Apache-Lizenz 2.0** vertrieben. Die vollständigen Lizenzbedingungen finden Sie in der Datei [`LICENSE`](LICENSE).
