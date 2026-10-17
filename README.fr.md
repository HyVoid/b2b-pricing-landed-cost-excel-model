[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Moteur de tarification et de rentabilité pour la distribution B2B : modèle Excel de coût de revient rendu, coût de service et marge de gros
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/b608987f-c43c-4b99-b5f0-807f5ef96257" />

**Une calculatrice de tarification B2B transfrontalière en gros, un simulateur de coût de revient rendu (landed cost) et un modèle de modélisation de rentabilité multi-pays pour les distributeurs internationaux et les équipes de finance commerciale.**

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2563EB)
![Tool Type: Pricing & Financial Model](https://img.shields.io/badge/Tool-Pricing%20%26%20Financial%20Model-0F766E)

**Le Moteur de tarification et de rentabilité pour la distribution B2B est une calculatrice gratuite accessible depuis le navigateur et un modèle financier Excel réutilisable conçu pour les grossistes transfrontaliers, les importateurs et les distributeurs B2B. Il transforme les devis FOB bruts des fournisseurs en coûts de revient rendus au niveau SKU, en indicateurs de coût de service client (CTS), en cascades de prix à marge nette, en comparaisons d'exécution multi-échelons et en prévisions de trésorerie du besoin en fonds de roulement — évitant ainsi l'érosion de la marge due au fret non tarifié, aux droits de douane, aux conditions de paiement et à la volatilité des changes.**

> **Accédez au simulateur de tarification interactif ou téléchargez le modèle Excel**
>
> - **[🌐 Lancez la calculatrice web gratuite de coût de revient rendu et de tarification B2B](https://hyvoid.github.io/b2b-pricing-landed-cost-excel-model/)** — Exécutez des simulations instantanées de marge transfrontalière dans votre navigateur, sans installation ni inscription.
> - **[📥 Téléchargez le classeur Excel réutilisable de tarification et de rentabilité pour la distribution B2B (.xlsx)](https://theseusworkshop.com/l/mzjxa?utm_source=github&utm_medium=GitHub%20README)** — Obtenez le modèle de tableur complet hors ligne pour des catalogues SKU personnalisés, un audit financier permanent et des revues tarifaires exécutives.



---

## Capacités de suivi commercial et financier essentielles : des points de douleur aux solutions

Pour les analystes commerciaux et les opérateurs grossistes à la recherche d'une **feuille de calcul fiable de coût de revient rendu** ou d'un **modèle de cascade de marges B2B**, ce cadre comble l'écart entre les majorations brutes sur facture et la rentabilité nette réellement réalisée :

| Point de douleur de la distribution transfrontalière | Intention de recherche fréquente / Module | Comment ce moteur financier et tarifaire la résout |
| :--- | :--- | :--- |
| **Les coûts cachés d'importation et de logistique érodent la marge brute** | **Calculatrice de coût de revient rendu et de droits de douane au niveau SKU** | Sépare les prix d'achat FOB/EXW des fournisseurs du fret maritime/aérien, de l'assurance maritime, des droits d'importation non récupérables, des frais de transitaire en douane et du transport local, pays par pays. |
| **Les commerciaux accordent des remises inférieures aux planchers rentables** | **Cascade de prix B2B et modèle de garde-fou du prix plancher** | Établit des paliers commerciaux clairs — comparant le Prix de Liste Standard, le Prix de Vente Cible et le Prix Minimum Acceptable (MAP) sur la base de planchers stricts de marge sur coûts variables. |
| **Les concessions clients non tarifiées détruisent l'économie des deals** | **Analyseur de coût de service client (CTS) et de marge nette encaissée** | Quantifie comment les petites commandes (violations du MOQ), les conditions de paiement étendues (coût de financement DSO), les rabais et la livraison du dernier kilomètre grignotent la marge sur coûts variables nette réalisée. |
| **Conception sous-optimale du réseau d'entrepôts et d'expédition** | **Modèle multi-échelons d'exécution et de basculement logistique** | Compare l'économie unitaire entre un Centre de Distribution Régional (RDC), des entrepôts locaux/under bond au niveau national et la drop-shipping directe pour identifier les points de basculement de volume. |
| **Capital de travail excédentaire immobilisé dans des stocks à rotation lente** | **Suivi du réapprovisionnement, du stock de sécurité et du cycle de trésorerie** | Relie les prévisions de demande, les délais fournisseurs, les tampons de stock de sécurité, les points de commande (ROP) et les quantités économiques de commande (EOQ) directement à l'immobilisation de trésorerie et à l'exposition du fonds de roulement. |
| **Volatilité des changes et taux d'emprunt locaux faussent le P&L régional** | **Modèle de P&L multi-devises par pays et sensibilité au change** | Consolide le chiffre d'affaires, le COGS, la marge sur coûts variables, les coûts locaux de financement/WACC et la conversion des devises de quatre marchés d'Amérique centrale dans une monnaie de reporting unique. |

---

## Tutoriel pas à pas : comment construire une tarification B2B défendable et exécuter des scénarios de rentabilité

Le modèle financier fonctionne sur une boucle de gouvernance commerciale répétable en 4 étapes : configurer les garde-fous macroéconomiques, maintenir les données de référence SKU et pays, tester sous contrainte l'économie des deals clients et auditer la trésorerie consolidée.

### Étape 1 : Configurer les garde-fous commerciaux mondiaux et les paramètres de WACC
**Action :** Définissez vos objectifs financiers de référence et vos seuils de risque dans le module Paramètres.
Définissez le scénario de demande actif, la monnaie de reporting de base (par ex. USD), les pourcentages de marge sur coûts variables cible et plancher, le Coût Moyen Pondéré du Capital (WACC), les niveaux de service de cycle cibles, les seuils d'escalade des remises et les déclencheurs d'alerte de jours de stock (DOH).

### Étape 2 : Alimenter les données de référence SKU, les droits d'importation et les entrées fiscales par pays
**Action :** Saisissez les catalogues fournisseurs, les spécifications de poids volumétrique et les règles commerciales propres à chaque pays.
Saisissez les devises fournisseurs des SKU, les spécifications d'emballage palettes/conteneurs, les taux de change propres à chaque pays, les taux de droits d'importation par code HS, les règles de récupérabilité de la TVA/GST, les taux d'emprunt locaux à court terme et les frais de manutention d'entrepôt. Actualisez ces entrées chaque fois que les devis des transitaires ou les taux des banques centrales évoluent.

### Étape 3 : Calculer le coût de revient rendu, le coût de service et les planchers des deals clients
**Action :** Exécutez le moteur de tarification pour évaluer les devis clients proposés avant de signer les contrats commerciaux.
Examinez le coût de revient rendu entièrement chargé et le coût de service au niveau de la commande avant de fixer les prix. Comparez les remises de vente proposées, les quantités de commande, les conditions de crédit (par ex. Net 30 contre Net 90) et les conditions de fret (CIF/DDP) aux planchers de marge minimaux et aux politiques de quantité minimale de commande (MOQ).

### Étape 4 : Tester sous contrainte le P&L multi-pays et passer au classeur Excel réutilisable
**Action :** Auditez la rentabilité consolidée, les besoins de financement du fonds de roulement et la sensibilité macroéconomique.
Inspectez le résultat d'exploitation pays par pays, la pression du cycle de conversion de trésorerie (CCC) et la sensibilité de la marge aux pics de fret conteneurisé, aux chutes de demande ou aux dévaluations de la monnaie locale pour signaler les conditions commerciales nécessitant une escalade exécutive.

> **Prêt à passer des tests de scénarios dans le navigateur à une gouvernance tarifaire d'entreprise répétable ?**  
> Une fois la méthodologie validée dans l'application web, **[téléchargez le modèle Excel complet de tarification et de rentabilité pour la distribution B2B (.xlsx)](https://theseusworkshop.com/l/mzjxa?utm_source=github&utm_medium=GitHub%20README)** pour intégrer votre catalogue SKU propriétaire, sauvegarder les devis de deals historiques et exécuter les mises à jour trimestrielles du catalogue de prix hors ligne dans Microsoft Excel.

---

## Pourquoi un modèle dédié de coût de revient rendu et de coût de service plutôt qu'une tarification à majoration basique ?

Dans la **distribution grossiste B2B transfrontalière**, la tarification des produits semble souvent rentable sur le papier lorsque les équipes commerciales se fient à un simple **prix d'achat fournisseur majoré d'un pourcentage standard**. La fuite financière ne se révèle qu'après le passage du stock dans la chaîne d'approvisionnement physique et le cycle de crédit.

Entre la sortie d'usine et l'encaissement final, un seul SKU absorbe **le fret maritime/aérien international, l'assurance marchandises, les droits d'importation non récupérables, la surestie portuaire, le dédouanement, le transport intérieur, l'entreposage sous douane, la main-d'œuvre de préparation de commandes, la livraison du dernier kilomètre, les commissions de vente et les coûts de financement des créances clients (AR)**. L'activité multi-pays ajoute des taux de change divergents, des structures de TVA, des coûts locaux d'emprunt du fonds de roulement et des risques de crédit souverain.

Lorsque les tables de fret, les tarifs douaniers et les devis commerciaux vivent dans des feuilles de calcul disconnectées, un commercial voit une **marge brute saine de 40 %**, tandis que l'entreprise perd en réalité de l'argent au niveau de la **marge nette encaissée** en raison d'une combinaison non tarifiée de remises sur volume, de conditions de paiement Net 90 et d'une livraison LTL (moins que camion complet) à un acheteur éloigné.

Ce **Moteur de tarification et de rentabilité pour la distribution B2B** remplace les majorations empiriques par un **raisonnement commercial productisé** :
1. Il construit le véritable **coût de revient rendu au niveau SKU** par marché de destination et voie d'exécution.
2. Il superpose le **coût de service propre à la commande (CTS)**, incluant la manutention logistique et le coût de financement de la valeur temps des conditions de crédit clients étendues.
3. Il impose des **planchers stricts de marge sur coûts variables** via une cascade de prix transparente avant l'approbation des remises.
4. Il relie directement les décisions tarifaires commerciales aux **calculs de réapprovisionnement (ROP/stock de sécurité)** et aux **besoins de trésorerie du fonds de roulement multi-pays**.

L'objectif n'est pas de remplacer votre ERP comptable ni votre WMS. Il s'agit d'exposer la véritable économie unitaire des décisions commerciales transfrontalières *avant* la signature de devis engageants et d'engagements d'approvisionnement.

---

## Feuilles de calcul traditionnelles coût plus majoration contre modélisation intégrée de cascade de prix B2B

| Dimension commerciale et financière | Sans cet outil (feuilles statiques coût plus majoration) | Avec cet outil (moteur intégré de coût de revient rendu et de cascade de prix) |
| :--- | :--- | :--- |
| **Exactitude du coût unitaire livré** | **Majoration FOB naïve :** la tarification repose sur le coût d'achat usine plus une majoration forfaitaire, ignorant les pics de fret maritime, les taux de droits HS, la manutention portuaire et le stockage d'entrepôt. | **Construction granulaire du coût de revient rendu :** détaille explicitement l'acquisition produit, le fret international, l'assurance maritime, les droits de douane et l'exécution locale par SKU et par pays. |
| **Gouvernance des remises et concessions** | **Fuite de marge incontrôlée :** les commerciaux empilent remises sur facture, livraison gratuite et crédit étendu sans voir l'impact cumulé sur la marge nette encaissée. | **Planchers de marge sur coûts variables appliqués :** évalue la réalisation nette de facture par rapport au Prix Cible, au Prix Minimum Acceptable (MAP) et aux seuils d'escalade direction. |
| **Benchmarking de performance multi-pays** | **Marges régionales faussées :** comparer les marges brutes affichées entre pays ignore la dépréciation de la monnaie locale, des régimes douaniers différents et des taux d'intérêt locaux. | **P&L consolidé ajusté du change :** normalise les droits propres à chaque pays, le traitement de la TVA et les coûts locaux de financement WACC dans une monnaie de reporting unifiée pour une comparaison équitable. |
| **Stratégie de réseau d'exécution et d'entrepôts** | **Routage logistique statique :** le choix entre un hub régional, des entrepôts locaux ou l'expédition directe se fait à l'intuition plutôt que sur l'économie unitaire fondée sur le volume. | **Modélisation dynamique du basculement logistique :** simule les structures de coûts entre les modèles Hub Central, Entrepôt Local et Expédition Directe pour identifier les points morts de volume. |
| **Alignement inventaire et fonds de roulement** | **Achats et finance en silos :** les planificateurs commandent sur des moyennes approximatives, immobilisant de la trésorerie excédentaire en stock de sécurité sans visibilité sur les coûts de financement au bilan. | **Modélisation intégrée ROP, stock de sécurité et trésorerie :** relie les délais, la variabilité de la demande, les niveaux de service et les MOQ fournisseurs directement aux besoins de trésorerie du fonds de roulement. |
| **Rentabilité contre réalité de la trésorerie** | **Illusion du profit comptable :** les états P&L affichent un résultat d'exploitation comptable positif pendant que l'entreprise subit de graves crises de trésorerie dues à la lente rotation des stocks et aux longs délais de recouvrement DSO. | **Économie des deals ajustée du fonds de roulement :** déduit le coût de financement de la détention de stock et du crédit client directement des marges sur coûts variables au niveau de la transaction. |

---

## Utilisateurs idéaux, rôles commerciaux et cas d'usage de l'industrie grossiste

### Pour qui c'est destiné (correspondance rôle / flux de travail)

- **Responsables tarification B2B et directeurs commerciaux** cherchant un **modèle Excel de cascade de prix B2B et d'approbation des remises** pour fixer des prix de liste, prix cibles et prix planchers défendables sur des équipes de vente multi-pays.
- **Importateurs, grossistes régionaux et propriétaires de sociétés de négoce** ayant besoin d'une **feuille de calcul de coût d'importation et de calculatrice de droits** pour tarifer précisément des expéditions conteneurs et palettes à travers les frontières sans perdre de marge en droits de douane et en volatilité de fret.
- **Analystes finance commerciale, FP&A et contrôleurs de gestion** cherchant un **modèle financier de coût de service (CTS) et de rentabilité clients** pour auditer comment les conditions de paiement (DSO), les tailles de commande et les concessions logistiques impactent le résultat d'exploitation net et le fonds de roulement.
- **Planificateurs de chaîne d'approvisionnement et responsables logistique** nécessitant un **modèle multi-échelons d'exécution et de réapprovisionnement** pour évaluer les hubs de distribution régionaux contre le stockage local et calculer l'exposition de trésorerie du stock de sécurité.
- **CFO fractionnaires et consultants en tarification** construisant un **système d'aide à la décision de distribution B2B réutilisable et prêt pour l'audit** pour des clients grossistes PME dépourvus de logiciels d'entreprise CPQ ou de tarification.

### Secteurs de distribution cibles et cas d'usage transfrontaliers

Ce cadre de modélisation financière est spécialement conçu pour la **distribution B2B multi-pays, le négoce import/export et les opérations grossistes régionales** (modélisé nativement avec une étude de cas régionale de 4 marchés d'Amérique centrale, adaptable à tout corridor multi-pays) :
- **Distributeurs de fournitures industrielles, MRO, quincaillerie et matériaux de construction**
- **Importateurs transfrontaliers de biens de consommation (FMCG), denrées alimentaires et boissons**
- **Grossistes en produits chimiques, intrants agricoles et matières premières spécialisées**
- **Distributeurs maîtres régionaux de dispositifs médicaux, produits pharmaceutiques et équipements commerciaux**
- **Réseaux de pièces automobiles après-vente et de composants poids lourds**

### Périmètre du modèle et limites opérationnelles

Pour rester rapide, transparent et immédiatement utilisable sans intégration informatique :
- **Ce qu'il est :** un moteur de simulation stratégique pré-transaction pour la tarification, le coût de revient rendu, l'exécution et le fonds de roulement.
- **Ce qu'il n'est pas :** ce n'est **pas** un ERP de traitement transactionnel (SAP, NetSuite, Microsoft Dynamics), ni un moteur automatisé de classification douanière ou de déclaration fiscale légale (conformité HTS/HS), ni une plateforme automatisée de facturation EDI. Des résultats de décision exacts dépendent d'entrées commerciales, de fret et douanières validées.

---

## À propos de l'architecture : un raisonnement commercial productisé dans Excel et le web

Les activités de distribution complexes saignent souvent leur marge non pas par manque de données, mais parce que **les données d'achat, les tarifs de fret, les prix d'entrepôt, les remises commerciales et les coûts de financement résident dans cinq feuilles de calcul distinctes**.

Ce projet aborde l'ingénierie des feuilles de calcul comme un **raisonnement commercial productisé** centré sur une question fondamentale :

> *« Quelles variables exactes de coût, de logistique et de financement doivent être reliées dans une seule vue pour qu'une équipe commerciale puisse approuver un prix, chiffrer un client ou choisir une voie d'exécution en toute confiance ? »*

Le **Moteur de tarification et de rentabilité pour la distribution B2B** relie **Coûts FOB fournisseurs → Coûts de revient rendus transfrontaliers → Coût de service au niveau de la commande → Garde-fous de cascade de prix → Fonds de roulement stock → P&L consolidé multi-pays** en un seul modèle transparent et auditable — offrant aux distributeurs une discipline tarifaire de niveau entreprise sans le surcoût des logiciels d'entreprise.

## Détails techniques

<details>
<summary>Pour les relecteurs techniques, praticiens Excel et collaborateurs</summary>

<details>
<summary><strong>Architecture du classeur</strong></summary>

Le classeur se compose de six modules fonctionnels et de 16 feuilles de calcul métier. Son architecture suit une séquence orientée décision : les données de référence établissent les hypothèses, les moteurs de coûts déterminent l'économie, les règles commerciales fixent les bornes de tarification, les modèles opérationnels testent la faisabilité de l'exécution, l'analyse financière évalue les conséquences et les sorties finales appuient la revue de direction et la communication client.

| Module | Feuilles de calcul | Responsabilité principale |
|---|---|---|
| Fondation de données de référence | `01_Control Panel`, `02_Product Master`, `03_Country Master`, `04_Cost Inputs` | Centraliser les paramètres du modèle, les attributs SKU, les hypothèses pays et les standards de coûts opérationnels. |
| Moteur de demande et de coûts dynamiques | `05_Demand & Orders`, `06_Landed Cost Engine`, `07_Cost-to-Serve Engine` | Traduire les hypothèses de demande en économie de coût de revient rendu et d'exécution au niveau client. |
| Moteur de tarification et de politique commerciale | `08_Pricing Engine`, `09_Pricing Matrix`, `10_MOQ & Order Policy` | Établir les bornes de prix, évaluer les concessions commerciales combinées et calculer les seuils de commande. |
| Simulation de chaîne d'approvisionnement et d'exécution | `11_Logistics Scenarios`, `12_Inventory & Purchasing` | Comparer les routes de distribution et dériver les besoins de réapprovisionnement sous incertitude de demande et de délai. |
| Modélisation financière et sensibilité | `13_Financial Model`, `14_Sensitivity` | Évaluer la rentabilité par pays et consolidée, le fonds de roulement, les besoins de financement et les scénarios dégradés. |
| Tableau de bord exécutif et listes de prix | `15_Decision Dashboard`, `16_Customer Price Lists` | Faire remonter les alertes de décision et produire des listes de prix orientées client sans exposer les données internes de coût et de marge. |

<details>
<summary><strong>Flux de données</strong></summary>

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

Le diagramme de dépendances décrit le flux analytique visé. Des formules spécifiques peuvent référencer directement plusieurs tables en amont ; le diagramme n'affirme pas que chaque feuille dépend exclusivement de la feuille immédiatement précédente.

</details>

<details>
<summary><strong>Principes de conception fondamentaux</strong></summary>

- **Source unique de vérité :** les hypothèses globales appartiennent au panneau de contrôle, les hypothèses pays au référentiel pays et les tarifs opérationnels à la table des entrées de coûts.
- **Données structurées :** les tables Excel standard utilisent la convention de nommage `tbl_`. Les références structurées réduisent le besoin de maintenir manuellement des plages de cellules changeantes.
- **Calculs dynamiques :** les fonctions Microsoft 365 telles que `LET`, `XLOOKUP`, `FILTER`, `UNIQUE`, `SORT`, `SWITCH` et `HSTACK` prennent en charge la sélection de scénarios, les recherches et les sorties générées dynamiquement.
- **Séparation des devises :** l'économie produit et opérationnelle peut être évaluée en USD tandis que les montants en monnaie locale sont dérivés à l'aide des hypothèses de change du pays concerné.
- **Séparation du traitement fiscal :** les droits d'importation non récupérables sont inclus dans le coût de revient rendu. La TVA récupérable est suivie séparément plutôt que traitée automatiquement comme un coût économique.
- **Sorties orientées décision :** prix, seuils de commande, recommandations d'exécution et alertes financières visent à rendre visibles les arbitrages opérationnels avant tout engagement commercial.

</details>

<details>
<summary><strong>Responsabilités des feuilles de calcul</strong></summary>

| Feuille de calcul | Entrées principales | Sorties principales |
|---|---|---|
| `01_Control Panel` | Scénario actif, monnaie de reporting, WACC, objectifs de marge, limites de remise, réglages de niveau de service | Hypothèses globales de calcul et contrôles de santé des données de référence |
| `02_Product Master` | SKU, description, catégorie, quantité par carton, volume unitaire, poids, prix FOB, MOQ fournisseur, durée de conservation | Volume carton, poids carton, capacité conteneur estimée |
| `03_Country Master` | Code pays, devise, taux de change, hypothèses de droits et TVA, taux de financement, majoration de marge pays | Paramètres financiers et commerciaux au niveau pays |
| `04_Cost Inputs` | Fret, assurance, entreposage, manutention, transport principal, livraison dernier kilomètre, commission, taux d'impayés | Inducteurs standards de coûts opérationnels |
| `05_Demand & Orders` | Pays, SKU, demande hebdomadaire, ajustements de scénario, taille de commande, conditions de paiement | Demande active et estimations annualisées de cycles de commande |
| `06_Landed Cost Engine` | Combinaisons pays/SKU et références de données de référence | CIF, droits, allocation de fret, coûts portuaires, coût de revient rendu, coût en monnaie locale, référence TVA |
| `07_Cost-to-Serve Engine` | Combinaisons pays/SKU et hypothèses d'exécution | Stockage, manutention, livraison, financement, provision pour impayés, coût total livré |
| `08_Pricing Engine` | Coût livré, marge cible, marge plancher, majoration de risque pays | Prix plancher, prix cible, prix de liste, remise maximale autorisée |
| `09_Pricing Matrix` | Quantité de commande proposée, conditions de paiement, modalité de livraison, concessions commerciales | Prix effectif de facture, marge réalisée, statut d'approbation |
| `10_MOQ & Order Policy` | Coût de livraison, marge cible, contraintes carton, contraintes fournisseur | MOQ client, valeur minimale de commande, seuil de livraison gratuite |
| `11_Logistics Scenarios` | Demande, coûts fixes d'entrepôt, hypothèses de transport et d'exécution | Volume de basculement logistique et recommandation de route |
| `12_Inventory & Purchasing` | Demande hebdomadaire, délai, réglages de niveau de service, contraintes de stock et fournisseur | Stock de sécurité, point de commande, quantité d'achat suggérée |
| `13_Financial Model` | Demande, tarification, coûts, hypothèses opérationnelles et de fonds de roulement | P&L pays, résultats consolidés, NWC, indicateurs de besoin de financement |
| `14_Sensitivity` | Hypothèses du cas de base et chocs dégradés/favorables sélectionnés | Comparaisons de scénarios et variations de profit et de besoins de trésorerie |
| `15_Decision Dashboard` | Pays sélectionné ou vue consolidée, sorties du modèle en amont | Indicateurs de rentabilité, listes d'exceptions, alertes d'approbation |
| `16_Customer Price Lists` | Pays sélectionné et devise de devis | Prix produits orientés client, quantités de commande, notes commerciales |

</details>

<details>
<summary><strong>Modèle de pays et de devises</strong></summary>

Le référentiel pays couvre quatre marchés :

| Code | Pays | Devise locale | Taux de change illustratif dans la spécification d'implémentation |
|---|---|---|---:|
| GT | Guatemala | GTQ | 7.8000 |
| SV | Salvador | USD | 1.0000 |
| HN | Honduras | HNL | 24.6000 |
| NI | Nicaragua | NIO | 36.8000 |

La convention de taux de change est **unités de monnaie locale par USD**. Ces valeurs sont des exemples d'implémentation, et non des taux de change vérifiés en direct ou des orientations fiscales actuelles. L'usage en production exige des entrées financières et réglementaires actuelles et approuvées.

</details>

</details>

<details>
<summary><strong>Trois pièges qui attrapent même les responsables distribution expérimentés</strong></summary>

<details>
<summary><strong>Piège 1 — Une majoration positive ne prouve pas qu'une commande est rentable</strong></summary>

**1. Décision :** Approuver un prix client parce qu'il dépasse le prix d'achat FOB du fournisseur.

**2. Défaut caché :** Le calcul ignore le coût d'amener le produit sur le marché de destination et de le livrer au client.

**3. Pourquoi la recommandation change :** Les droits d'importation, le fret, l'assurance, la gestion douanière, le stockage, la livraison et le financement peuvent consommer la majoration apparente.

**4. Pourquoi le raisonnement échoue :** Le FOB est une référence d'achat, pas une mesure complète de l'économie d'une commande client livrée.

**5. Approche corrigée :** Établir d'abord le coût de revient rendu, puis ajouter les composantes de coût de service applicables. Comparer le prix de vente proposé au coût obtenu et à la marge requise.

**6. Issue de la décision :** Un prix qui semblait acceptable sur la base d'une majoration du prix d'achat peut nécessiter un devis plus élevé, une modalité de livraison différente, une commande plus grande ou une exception commerciale explicite.

| Économie unitaire illustrative | Montant |
|---|---:|
| Prix FOB fournisseur | $10.00 |
| Fret, assurance, droits et coûts portuaires | $3.00 |
| Coût de revient rendu | $13.00 |
| Coûts additionnels d'exécution et de financement | $2.00 |
| Coût total livré | $15.00 |
| Prix de vente proposé | $16.00 |
| Contribution avant coûts additionnels non modélisés | $1.00 |

L'exemple est illustratif. Il montre pourquoi le même écart de $6 sur le coût FOB ne représente pas une contribution de $6 après exécution.

<details>
<summary>Référence des formules — coût de revient rendu et coût livré</summary>

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

**Note logique :** la TVA récupérable est maintenue comme un montant de référence fiscal séparé dans la conception spécifiée du coût de revient rendu. Confirmez le traitement fiscal local avant d'appliquer le modèle à des transactions réelles.

</details>

</details>

<details>
<summary><strong>Piège 2 — Remise, conditions de paiement et livraison ne peuvent être évaluées indépendamment</strong></summary>

**1. Décision :** Accorder une remise sur volume et des conditions de paiement plus longues en conservant la livraison gratuite.

**2. Défaut caché :** Chaque concession paraît gérable isolément, mais le lot combiné réduit le chiffre d'affaires réalisé et augmente les coûts de service ou de financement.

**3. Pourquoi la recommandation change :** La contribution réelle peut tomber sous la marge minimale acceptable même lorsque le prix de facture reste au-dessus du plancher nominal calculé pour des conditions standard.

**4. Pourquoi le raisonnement échoue :** Les concessions commerciales interagissent. Une remise affecte le chiffre d'affaires ; le crédit étendu modifie l'exposition du fonds de roulement ; les conditions de livraison affectent les coûts d'exécution.

**5. Approche corrigée :** Évaluer le prix effectif de facture et le coût pertinent au niveau de la commande après application de toutes les conditions commerciales proposées.

**6. Issue de la décision :** Approuver le lot uniquement s'il reste dans la politique commerciale définie, ou l'escalader pour une approbation explicite.

| Dimension de revue | Approche incomplète | Approche corrigée |
|---|---|---|
| Remise sur volume | Évaluer la remise seule | Inclure toutes les concessions de prix |
| Conditions de paiement | Traiter la valeur de facture comme équivalente à de la trésorerie | Inclure l'exposition de financement applicable |
| Livraison | Traiter la livraison comme une charge standard | Affecter à la commande les coûts d'exécution pertinents |
| Approbation | Comparer uniquement au prix de liste | Comparer l'économie réalisée au plancher requis et aux règles d'approbation |

<details>
<summary>Référence des formules — bornes de prix et de marge</summary>

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

Ces expressions supposent une marge définie en pourcentage du prix de vente et des entrées de marge valides inférieures à 100 %. La marge au niveau de la commande doit toujours être calculée avec le prix de vente effectif et les coûts pertinents de cette transaction.

</details>

</details>

<details>
<summary><strong>Piège 3 — Un résultat d'exploitation positif ne garantit pas une liquidité suffisante</strong></summary>

**1. Décision :** Étendre la distribution parce que le P&L projeté du pays affiche un résultat d'exploitation positif.

**2. Défaut caché :** La croissance exige plus de stock et peut accroître les créances clients avant que les paiements fournisseurs et les encaissements clients ne soient réglés.

**3. Pourquoi la recommandation change :** L'entreprise peut avoir besoin de financement supplémentaire pour porter le stock et les créances même si son résultat d'exploitation projeté reste positif.

**4. Pourquoi le raisonnement échoue :** Rentabilité et liquidité mesurent des choses différentes. La reconnaissance du chiffre d'affaires et le résultat d'exploitation n'établissent pas qu'une trésorerie suffisante est disponible à chaque point du cycle d'exploitation.

**5. Approche corrigée :** Examiner les résultats opérationnels avec le stock, les créances clients, les dettes fournisseurs et le besoin en fonds de roulement qui en résulte. Tester les chocs de demande dégradée et de fret ou de devise.

**6. Issue de la décision :** L'expansion peut nécessiter des conditions de crédit révisées, des engagements d'achat plus petits ou échelonnés, des politiques de stock différentes ou un financement additionnel.

<details>
<summary>Référence des formules — fonds de roulement et exposition de financement</summary>

```excel
Net_Working_Capital =
    Accounts_Receivable
    + Inventory
    - Accounts_Payable
```

Une mesure simplifiée de déficit de financement peut comparer les besoins de financement modélisés à la capacité de financement disponible. Le calcul précis dépend des hypothèses de financement du classeur et des champs implémentés dans le modèle financier.

Un besoin positif en fonds de roulement n'est pas automatiquement un déficit de crédit. Un déficit de financement n'existe que lorsque le besoin de financement pertinent dépasse la capacité de financement disponible selon les définitions du modèle.

</details>

</details>

</details>

<details>
<summary><strong>Scénario d'exemple</strong></summary>

Considérez un SKU illustratif fourni à un prix FOB de $10.00 l'unité. Le produit est expédié vers l'un des marchés modélisés et vendu à un client selon une modalité de livraison et de paiement définie.

L'exemple suivant démontre la séquence de décision. Les chiffres sont hypothétiques et ne constituent pas une prévision pour un pays ou un produit particulier.

| Entrée ou calcul | Valeur illustrative |
|---|---:|
| Prix d'achat FOB | $10.00 |
| Fret et assurance internationaux alloués | $1.00 |
| Valeur CIF | $11.00 |
| Droits d'importation à 10 % supposés | $1.10 |
| Coûts portuaires et douaniers alloués | $0.40 |
| Coût de revient rendu | $12.50 |
| Coût d'exécution et de financement | $1.50 |
| Coût total livré | $14.00 |
| Marge de contribution cible requise | 25% |
| Marge de contribution plancher requise | 12% |

Selon la convention de marge fondée sur le prix de vente, le prix cible est :

\[
P_{\text{target}}=\frac{14.00}{1-0.25}=\$18.67
\]

Le prix plancher est :

\[
P_{\text{floor}}=\frac{14.00}{1-0.12}=\$15.91
\]

Un prix de vente proposé de $17.00 produirait une contribution de $3.00 par unité avant tout coût additionnel non représenté dans le chiffre modélisé du coût livré. Sa marge de contribution serait d'environ 17,65 %.

La proposition dépasserait le plancher illustratif mais resterait sous le prix cible. C'est une conclusion matériellement différente de la simple observation que $17.00 est supérieur au prix FOB de $10.00.

La décision suivante n'est pas de rejeter automatiquement la transaction. Il s'agit de déterminer si le volume de commande, les conditions client, la modalité de livraison et le contexte stratégique justifient d'accepter une transaction sous la cible mais au-dessus du plancher, conformément à la politique d'approbation applicable.

</details>

<details>
<summary><strong>Référence des formules</strong></summary>

Les formules ci-dessous documentent les principaux schémas de calcul et leur finalité métier. Elles sont basées sur la spécification d'implémentation. Avant tout déploiement en production, rapprochez chaque expression des noms réels de tables, colonnes et cellules de formule du classeur final.

<details>
<summary>1. Données de référence, scénarios de demande et recherches dynamiques</summary>

**Objectif :** Établir des clés et hypothèses cohérentes avant de calculer les sorties commerciales.

#### Capacité conteneur par SKU

```excel
=LET(
    feu_cbm, Control_Panel!$C$12,
    sku_cbm, [@[Unit_CBM]],
    IF(sku_cbm > 0, INT(feu_cbm / sku_cbm), 0)
)
```

Ceci estime le nombre d'unités tenant dans la dotation de volume conteneur configurée. C'est une estimation fondée sur le volume, pas un plan de chargement complet : les limites de poids, la palettisation, la géométrie d'emballage et l'utilisation opérationnelle peuvent réduire la capacité réelle.

#### Demande active par scénario

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

Le scénario actif détermine quelle quantité de demande alimente les calculs en aval.

#### Fréquence de commande annualisée

```excel
=LET(
    batch, [@[Order_Batch_Units]],
    demand, [@[Active_Demand_Qty]],
    IF(batch > 0, (demand * 52) / batch, 0)
)
```

Le calcul estime les cycles annuels de commande à partir de la demande hebdomadaire modélisée et de la taille de commande typique. Son exactitude dépend d'unités de demande cohérentes et d'une hypothèse de lot de commande valide.

#### Schéma général de recherche

```excel
=XLOOKUP(
    [@[Country_Code]],
    tbl_CountryMaster[Country_Code],
    tbl_CountryMaster[FX_Rate_to_USD],
    0
)
```

Utilisez une clé métier cohérente pour récupérer un paramètre pays. Un zéro ou toute autre valeur de repli ne doit pas être interprété comme la preuve que les données de référence sous-jacentes sont valides ; les contrôles de clés manquantes doivent être effectués séparément.

</details>

<details>
<summary>2. Coût de revient rendu, séparation fiscale et coût de service</summary>

**Objectif :** Établir le coût d'importation du produit et de service au client.

#### Allocation du fret

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

Le modèle spécifié alloue le fret conteneur sur la capacité unitaire estimée. Le coût unitaire résultant dépend de l'utilisation de chargement supposée.

#### Assurance et CIF

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

La seconde expression produit la valeur de référence CIF du modèle à partir du FOB, du fret et de l'assurance.

#### Droits d'importation et coût de revient rendu

```excel
=[@[Unit_CIF_USD]] * [@[Import_Duty_Rate]]
```

```excel
=[@[Unit_CIF_USD]]
 + [@[Unit_Duty_DAI_USD]]
 + [@[Unit_Port_Drayage_USD]]
```

La définition spécifiée du coût de revient rendu inclut le CIF, les droits d'importation et les frais portuaires et de transport local alloués. D'autres coûts liés à l'importation doivent être ajoutés s'ils sont applicables et absents du modèle actuel.

#### Référence de TVA récupérable

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

Cette formule illustre le calcul de référence de TVA de l'implémentation. La récupérabilité réelle de la TVA, la base imposable, la valeur en douane et le traitement local doivent être vérifiés selon les règles du pays concerné.

#### Coût total de service et coût livré

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

L'agrégation du coût de service inclut le stockage, la manutention, la livraison du dernier kilomètre, le financement et la provision pour impayés modélisée.

</details>

<details>
<summary>3. Tarification, politique de commande et contrôles d'approbation</summary>

**Objectif :** Convertir l'économie à coût complet en bornes commerciales actionnables.

#### Prix cible et prix plancher

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

Ces expressions supposent que les marges cible et plancher sont définies par rapport au prix de vente et non au coût.

#### Remise maximale autorisée

```excel
=LET(
    list_p, [@[List_Price_USD]],
    floor_p, [@[Floor_Price_USD]],
    IF(list_p > 0, (list_p - floor_p) / list_p, 0)
)
```

Le calcul mesure la réduction en pourcentage du prix de liste au prix plancher. Il n'autorise pas à lui seul une remise : les seuils d'approbation commerciale et les contrôles de marge au niveau de la commande restent des contrôles séparés.

#### MOQ économique client

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

La formule spécifiée estime la quantité de commande nécessaire pour couvrir un coût fixe de livraison ou de commande, puis l'arrondit à une quantité de cartons complets. La définition de `Unit_Margin_Contribution` du modèle et les coûts inclus dans cette contribution doivent être vérifiés avant de se fier au résultat.

#### Valeur minimale de commande et seuil de livraison gratuite

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

La valeur minimale de commande suit le MOQ économique. Le seuil de livraison gratuite est une estimation de politique simplifiée fondée sur les frais fixes de drop-shipment et l'hypothèse de marge cible ; validez son comportement contre la politique commerciale réelle avant déploiement.

#### Statut d'approbation

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

Les libellés de statut en anglais affichés sont des équivalents explicatifs des libellés de statut en chinois de l'implémentation d'origine. Si le classeur utilise une correspondance de texte exacte dans les formules en aval, conservez les chaînes d'origine du classeur ou mettez à jour ensemble toutes les références dépendantes.

</details>

<details>
<summary>4. Logistique, stock et réapprovisionnement</summary>

**Objectif :** Comparer les structures d'exécution et traduire les hypothèses de demande en décisions d'achat.

#### Principe du basculement logistique

Un basculement simplifié entre coût fixe et coût variable peut s'exprimer ainsi :

\[
Q^*=\frac{\Delta F}{S}
\]

Où :

- \(Q^*\) est le volume annuel approximatif à partir duquel le modèle d'exécution alternatif devient compétitif.
- \(\Delta F\) est le coût fixe annuel additionnel de l'alternative.
- \(S\) est l'économie de coût variable par unité.

Le calcul n'a de sens que si l'alternative économise réellement du coût variable (\(S>0\)). Si l'économie est nulle ou négative, il n'existe pas de basculement positif fini dans cette formulation simplifiée.

La spécification d'implémentation utilise une hypothèse de coût d'entrepôt fixe et un incrément d'arrondi de 100 unités dans son exemple de basculement. De telles hypothèses devraient être déplacées vers des paramètres contrôlés lorsqu'elles doivent varier par pays ou par structure opérationnelle.

#### Stock de sécurité dynamique et point de commande

Le modèle visé utilise un niveau de service cible, la variabilité de la demande et le délai pour établir une protection contre l'incertitude de demande et d'approvisionnement.

Une formulation analytique courante est :

\[
SS = z \times \sigma_d \times \sqrt{L}
\]

\[
ROP = \bar d L + SS
\]

Où :

- \(SS\) est le stock de sécurité.
- \(z\) est le facteur de niveau de service.
- \(\sigma_d\) est l'écart-type de la demande par période.
- \(L\) est le délai exprimé dans les mêmes unités de période.
- \(\bar d\) est la demande moyenne par période.
- \(ROP\) est le point de commande.

Ces équations décrivent la formulation standard de demande indépendante par période. Elles ne remplacent pas la vérification de la formule implémentée dans le classeur final. Si la demande et le délai sont tous deux variables, ou si la demande est saisonnière, le calcul d'incertitude peut nécessiter un traitement différent.

#### Quantité d'achat suggérée

La recommandation d'achat devrait tenir compte de :

- la quantité nécessaire pour ramener le stock vers la cible d'inventaire sélectionnée ;
- le stock disponible actuel et les commandes ouvertes pertinentes ;
- le MOQ fournisseur ;
- les multiples de carton ou d'autre emballage ;
- la durée de conservation restante et le risque de stock excédentaire.

Une quantité d'achat suggérée ne doit pas être interprétée comme une autorisation d'achat. Les achats doivent valider le stock réel, les commandes d'achat ouvertes, les contraintes fournisseurs et les hypothèses de demande avant de libérer une commande.

</details>

<details>
<summary>5. Modélisation financière, sensibilité et reporting de direction</summary>

**Objectif :** Relier les décisions commerciales au résultat d'exploitation et aux besoins de financement.

#### Modèle financier par pays et consolidé

L'implémentation suit une cascade de profit :

```text
Net Revenue
    - Cost of Goods Sold
    = Gross Profit
    - Fulfillment Operating Expenses
    = Contribution Margin
    - Sales Commission and Bad-Debt Allowance
    = Operating EBIT
```

Le rattachement précis de chaque coût au COGS, aux charges d'exécution ou aux charges commerciales doit rester cohérent avec la politique comptable de l'organisation. La même charge ne doit pas être comptée à la fois dans le coût de revient rendu et dans les charges d'exploitation.

#### Fonds de roulement

```excel
=[@[Accounts_Receivable_USD]]
 + [@[Inventory_Capital_USD]]
 - [@[Accounts_Payable_USD]]
```

Ceci exprime la définition du fonds de roulement net du modèle. Les besoins de financement et la disponibilité du crédit doivent être évalués séparément du calcul du résultat d'exploitation.

#### Sensibilité de la demande

L'implémentation compare les scénarios de demande bas, de base et hauts. La spécification utilise des multiplicateurs de demande illustratifs de 0.80, 1.00 et 1.20.

Un calcul de scénario simplifié ajuste le chiffre d'affaires net et le COGS à la demande tout en séparant les coûts variables d'exécution modélisés des coûts fixes d'entrepôt. L'objectif est d'exposer le levier opérationnel : moins de ventes ne réduit pas nécessairement les coûts fixes proportionnellement.

#### Sensibilité du fret et des remises

Le modèle inclut un test de stress à deux variables faisant varier les hypothèses de coût de fret et de remise commerciale. L'objectif est d'identifier les combinaisons qui font tomber la marge réalisée sous des niveaux acceptables.

Le choc de fret devrait être appliqué à une base de fret clairement définie et à une base d'allocation cohérente. Une matrice de scénarios n'est fiable qu'à la hauteur de ces hypothèses sous-jacentes.

#### Sensibilité de la devise

Le modèle teste également la dépréciation de la monnaie locale. L'impact qui en résulte dépend de la devise de libellé du chiffre d'affaires, des achats fournisseurs, de la dette et des coûts opérationnels.

Un choc de devise ne doit pas être interprété comme un modèle complet de risque de change à moins que ces expositions et leur calendrier soient représentés explicitement.

#### Sorties du tableau de bord et des devis clients

Le tableau de bord consolide les indicateurs du pays sélectionné ou du groupe, le statut de rentabilité des produits, les recommandations d'exécution et les devis nécessitant une revue.

La sortie des listes de prix clients est conçue pour exposer les identifiants produits, les descriptions, les quantités de commande, les paliers de prix et les notes commerciales, tout en excluant les coûts FOB internes, les détails de droits, les tarifs de coûts opérationnels et les indicateurs internes de marge.

</details>

</details>

<details>
<summary><strong>Règles de validation</strong></summary>

Les contrôles suivants définissent les contrôles minimaux requis pour une implémentation fiable. Certains sont explicitement spécifiés dans la source ; d'autres sont des garde-fous recommandés pour valider la logique de calcul énoncée. Un garde-fou recommandé ne doit pas être considéré comme une fonctionnalité déjà implémentée du classeur tant qu'il n'est pas vérifié.

| Champ ou contrôle | Règle de validation | Comportement d'erreur requis |
|---|---|---|
| `SKU_Code` | Doit être renseigné et unique dans le référentiel produits. | Signaler les doublons et empêcher les recherches SKU ambiguës. |
| `Country_Code` | Doit correspondre à un code pays approuvé : `GT`, `SV`, `HN` ou `NI`. | Signaler les codes invalides ou non appariés. |
| `Units_Per_Carton` | Doit être un entier positif. | Rejeter ou signaler les quantités nulles, négatives ou fractionnaires. |
| `Unit_CBM` | Doit être supérieur à zéro pour l'allocation de fret fondée sur le volume. | Signaler les valeurs manquantes ou non positives ; ne pas traiter une capacité nulle comme un résultat de chargement valide. |
| `Unit_Weight_KG` | Doit être non négatif et cohérent avec la spécification produit. | Signaler les données de poids manquantes ou invalides avant l'allocation de coûts fondée sur le poids. |
| `Supplier_FOB_USD` | Doit être un prix d'achat non négatif valide dans la devise indiquée. | Signaler les valeurs manquantes ou négatives ; vérifier la cohérence de devise. |
| `FX_Rate_to_USD` | Doit être positif et utiliser la convention d'unités de monnaie locale par USD. | Signaler les taux manquants, nuls ou négatifs ; ne pas accepter silencieusement une conversion invalide. |
| `Import_Duty_Rate` et `VAT_Rate` | Doivent être des entrées en pourcentage valides appuyées par des hypothèses actuelles propres au pays. | Signaler les entrées hors plage ou non vérifiées ; exiger une revue du traitement réglementaire. |
| `VAT_Recoverable` | Doit être une valeur booléenne explicite cohérente avec le traitement fiscal applicable. | Signaler les configurations fiscales manquantes ou incohérentes. |
| `Annual WACC` et taux d'emprunt locaux | Doivent être des taux valides cohérents avec le calcul de financement visé. | Signaler les taux invalides et vérifier que le taux correct est utilisé pour l'exposition concernée. |
| Marges cible et plancher | Doivent être inférieures à 100 % pour les formules de prix spécifiées. | Ne pas calculer un prix trompeur lorsque le dénominateur est nul ou négatif. |
| `Order_Units` | Doit être une quantité positive pour un devis valide. | Signaler les quantités de commande nulles ou négatives. |
| `Terms_Days` | Doit être l'une des valeurs de conditions de paiement prises en charge : 0, 30, 60 ou 90 jours, sauf extension délibérée du modèle. | Signaler les conditions non prises en charge ou les aiguiller vers une règle explicitement définie. |
| `Delivery_Method` | Doit correspondre aux valeurs prises en charge, telles que `Delivered` ou `ExWorks`. | Signaler les conditions de livraison non reconnues plutôt que de supposer une route par défaut. |
| `Active_Demand_Qty` | Doit être cohérente avec le scénario sélectionné et l'entrée de demande de base. | Signaler les valeurs de scénario manquantes et les quantités de demande invalides. |
| MOQ fournisseur et contraintes carton | Les quantités de bon de commande suggérées doivent respecter les minimums applicables et les multiples d'emballage. | Signaler les quantités ne pouvant satisfaire aux contraintes d'achat du fournisseur. |
| Sorties de prix et de marge | Doivent reposer sur des clés pays/SKU appariées et des données de coûts valides. | Signaler les appariements manquants ; un zéro renvoyé par une recherche ne doit pas être traité silencieusement comme un coût vérifié. |
| `Net_Effective_Price_USD` | Doit être positif avant les calculs de marge. | Signaler les prix non positifs et éviter de rapporter une marge fabriquée. |
| Approbation des remises | La remise réelle et la marge de contribution doivent être contrôlées par rapport aux seuils de politique configurés. | Signaler les transactions sous le plancher ou dépassant le seuil d'approbation. |
| Modèle financier | Le chiffre d'affaires, le COGS, les charges, l'EBIT et le fonds de roulement doivent suivre des définitions cohérentes sans double allocation de coûts. | Signaler les écarts de rapprochement pour revue. |
| Sorties de tableaux dynamiques | Les plages de débordement doivent rester dégagées. | Résoudre `#SPILL!` en supprimant le contenu en conflit ou les cellules fusionnées. |
| Intégrité des formules | Les colonnes calculées doivent rester des formules et s'étendre lorsque leurs tables Excel s'agrandissent. | Signaler les formules écrasées ou les lignes hors de la plage de table prévue. |
| Liste de prix clients | Doit exclure les coûts d'achat internes, les détails de droits, les tarifs de coûts opérationnels et les mesures internes de marge. | Examiner la sortie exportée orientée client à la recherche d'une divulgation interne involontaire. |

<details>
<summary><strong>Contrôles d'intégrité du modèle</strong></summary>

Avant de vous fier au classeur, vérifiez ce qui suit :

1. Les 29 champs d'entrée supposés identifiés dans la spécification d'implémentation ont une destination définie et une dépendance aval documentée.
2. Les 24 champs de sortie clés ont une source de calcul définie et une interprétation métier claire.
3. Les clés composites pays/SKU renvoient les enregistrements prévus et ne produisent pas d'appariements ambigus.
4. Les définitions fiscales, de devise, d'allocation de coûts et de marge sont cohérentes entre les moteurs de coûts et le modèle financier.
5. Les alertes du tableau de bord concordent avec les calculs sous-jacents de tarification et d'approbation.
6. Le devis orienté client ne contient que les informations destinées à la diffusion externe.
7. Le modèle a été recalculé et contrôlé après des modifications substantielles des hypothèses ou des données de référence.

La spécification d'implémentation décrit le contre-contrôle 29 entrées / 24 sorties comme complet. Cette affirmation de conception documentée doit être distinguée de la vérification indépendante d'un classeur achevé : l'intégrité réelle des formules, l'exactitude numérique et le comportement opérationnel exigent des tests contre le fichier implémenté et des cas de test représentatifs.

</details>

</details>

</details>


## Logique métier et méthodologie

Le moteur traite la distribution transfrontalière comme un système commercial connecté plutôt que comme une suite de calculs de majoration isolés. Le principe central consiste à évaluer ensemble l'économie du produit, de la transaction client, de la modalité de livraison et du besoin de financement.

- **Tarification à coût complet :** les coûts d'importation et les charges d'exécution sont évalués avant d'établir une recommandation de prix de vente. Cela réduit le risque d'approuver une transaction qui semble rentable par rapport au coût fournisseur mais qui ne couvre pas le coût de service au client.
- **Bornes de marge sur coûts variables :** les exigences de marge cible et minimale créent une distinction entre le résultat commercial préféré et l'économie de transaction minimale acceptable. Les limites de remise et les règles d'approbation aident à rendre les exceptions explicites.
- **Économie de la commande :** le volume, les conditions de paiement et les modalités de livraison sont évalués ensemble. Cela rend visible le coût des concessions et appuie des politiques de commande minimale et de livraison reflétant l'économie opérationnelle réelle.
- **Comparaison de scénarios et de logistique :** les niveaux de demande alternatifs et les structures d'exécution sont évalués au regard de leurs implications de coûts. La comparaison qui en résulte aide à identifier quand la distribution centralisée, le stockage local ou l'expédition directe méritent une investigation plus poussée.
- **Analyse de rentabilité et de liquidité :** les P&L pays sont examinés avec le stock, les créances, les dettes et l'exposition de financement. Cela facilite la distinction entre un plan opérationnel rentable et un plan qui pourrait exiger plus de fonds de roulement que l'entreprise ne peut en financer.

Le résultat commercial est un processus de décision répétable : établir des hypothèses validées, calculer l'économie livrée, appliquer les bornes de tarification, tester les alternatives opérationnelles et examiner les implications de profit et de financement qui en résultent avant d'approuver une décision.

## Autres outils de cette série

Explorez d'autres outils d'aide à la décision légers pour Excel et le navigateur sur le [profil GitHub de HyVoid](https://github.com/HyVoid).

- **Contrôle de projets de construction :** estimez les coûts, gérez les budgets et suivez la livraison des projets.
- **Modélisation financière :** reliez hypothèses opérationnelles, états financiers et décisions d'investissement.
- **Planification des stocks et des capacités :** évaluez les besoins de réapprovisionnement et les contraintes opérationnelles.

## Licence

Ce projet est distribué sous la **Licence Apache 2.0**. Consultez le fichier [`LICENSE`](LICENSE) pour les termes complets de la licence.
