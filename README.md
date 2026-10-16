# B2B Distribution Pricing & Profitability Engine

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2563EB)
![Tool Type: Decision Support](https://img.shields.io/badge/Tool-Decision%20Support-0F766E)

**Turn cross-border distribution costs into defensible pricing, discount limits, fulfillment decisions, and country-level profitability insights — with a free browser-based workflow and a reusable Excel decision model.**

> **Choose how to work**
>
> - **[🌐 Open in Browser](BROWSER_DEMO_URL)** — Use the web-based version without installation or signup.
> - **[📥 Get the Excel Version](EXCEL_PURCHASE_URL)** — Use the offline workbook for repeatable analysis, financial records, and internal review.
>
> No signup. No installation. Free browser access. The Excel version supports a more persistent, reusable analysis workflow.
>
> *Publication note: Replace `BROWSER_DEMO_URL` and `EXCEL_PURCHASE_URL` with the actual distribution URLs before publishing.*

## What It Helps You Track

- **True delivered cost by SKU and country** — Separate product acquisition, international freight, insurance, non-recoverable import duties, customs handling, and downstream fulfillment costs.
- **Defensible price boundaries** — Compare standard list prices, target selling prices, and minimum acceptable prices before commercial concessions are approved.
- **The real cost of customer terms** — Quantify how order size, payment terms, delivery arrangements, and discounts affect realized contribution margin.
- **The economics of fulfillment choices** — Compare a regional distribution hub, country-level warehouses, and direct shipment to identify the conditions under which a different logistics model becomes more attractive.
- **Inventory and working-capital exposure** — Connect demand assumptions, lead times, safety stock, reorder points, purchasing quantities, and cash requirements.
- **Country-level and consolidated profitability** — Examine revenue, cost of goods sold, operating profit, currency translation, and financing pressure across four Central American markets.

## Quick Start Workflow

The model is designed around a repeatable process: establish the commercial assumptions, maintain the source data, evaluate the economics, and refresh the analysis when conditions change.

### 1. Set the decision parameters

Establish the active demand scenario, reporting currency, target and minimum contribution margins, cost-of-capital assumptions, service-level target, discount approval threshold, and inventory warning criteria.

These parameters define the commercial boundaries against which the model evaluates pricing, purchasing, fulfillment, and profitability.

### 2. Maintain the product and country inputs

Enter the SKU master data, supplier prices, packaging specifications, country-specific exchange rates, import duties, VAT treatment, local financing rates, and operating cost assumptions.

Update the underlying assumptions when supplier quotations, freight rates, tax treatment, exchange rates, or local operating costs change.

### 3. Evaluate costs and commercial terms

Review landed cost and cost-to-serve before evaluating prices. Compare the resulting price boundaries with proposed discounts, customer order quantities, payment terms, delivery arrangements, and minimum-order policies.

Use the logistics and inventory analyses to test whether a proposed commercial decision remains operationally and financially viable.

### 4. Review profitability and stress scenarios

Inspect country-level and consolidated financial results, working-capital requirements, financing gaps, and sensitivity to demand changes, freight increases, and exchange-rate movements.

Use the results to identify decisions that need revision, escalation, or further verification.

**Set the assumptions. Maintain the inputs. Evaluate the economics. Refresh when conditions change.**

## Why I Built This

Cross-border distribution can look profitable when pricing decisions rely primarily on supplier purchase prices and a standard markup. The problem appears after the product enters the actual operating system.

A shipment may carry import duties, insurance, port handling, inland transport, warehousing, picking, last-mile delivery, sales commissions, credit exposure, and financing costs. Different countries also introduce different currencies, tax treatments, local borrowing rates, and commercial risks.

When these costs are maintained in separate spreadsheets, a sales representative may see a healthy product margin while the business absorbs an uneconomic combination of discounts, extended payment terms, and expensive delivery.

Consider a distributor evaluating a customer order. The product appears profitable using its supplier purchase price and a standard markup. However, the order requires a small shipment, a long payment term, and delivery to a remote customer.

The original price calculation may omit the incremental delivery cost and the financing cost of the receivable. The apparent margin therefore overstates the economics of the transaction.

A more defensible decision starts with the product's landed cost, adds the cost of serving that particular order, and then evaluates the proposed selling price against a defined contribution-margin floor.

The question changes from *"Does this price include a markup?"* to *"Does this transaction cover its relevant costs and satisfy the business's minimum return requirements?"*

I designed this project as **productized reasoning**: a reusable decision framework that applies the same commercial logic across SKUs, customers, countries, demand scenarios, and fulfillment arrangements. The purpose is not to replace an ERP or execute transactions. It is to make the economic consequences of commercial decisions visible before commitments are made.

## Common B2B Distribution Problems This Solves

| Problem | Without This Tool | With This Tool |
|---|---|---|
| Understated delivered cost | Purchase-price markup overlooks import, handling, storage, delivery, or financing costs. | Landed cost and cost-to-serve are evaluated separately and combined into a delivered-cost view. |
| Discounts destroy contribution margin | Individually reasonable discounts accumulate with payment and delivery concessions. | Effective invoice economics can be compared against the minimum acceptable margin and approval threshold. |
| Country comparisons are misleading | Different currencies, duties, financing rates, and operating costs make headline margins difficult to compare. | Country-specific assumptions support local analysis and consolidated reporting in a common currency. |
| Fulfillment infrastructure is poorly matched to demand | A central warehouse, local inventory, or direct shipment is selected without comparing their cost structures. | Logistics scenarios can be compared against volume assumptions and potential crossover points. |
| Inventory consumes more cash than expected | Forecast demand, replenishment timing, safety stock, and supplier order constraints are evaluated separately. | Purchasing and inventory assumptions feed into replenishment calculations and working-capital analysis. |
| Reported profit hides financing pressure | Accounting profitability is reviewed without examining the cash tied up in receivables and inventory. | Financial modeling connects operating performance with working-capital needs and potential financing gaps. |

## Who This Is For

This framework is intended for B2B distributors, regional wholesalers, pricing managers, commercial finance teams, supply-chain planners, and business owners managing cross-border product flows.

It is especially relevant when multiple countries share a supplier base but differ in import costs, local currency, financing conditions, customer terms, and delivery economics.

It is less suited to businesses seeking a transaction-processing ERP, a tax-filing system, a substitute for customs classification advice, or a model that can produce reliable decisions without validated inputs.

**No spreadsheet expertise is needed to begin with the browser version.** The Excel implementation is designed for teams that want a reusable model they can inspect, adapt, and operate with their own assumptions.

## About

I build lightweight trackers and decision-support tools for situations with too many moving parts to manage reliably in separate spreadsheets or in memory.

The recurring question is straightforward: **What information needs to be in one place to make the next decision confidently?**

The B2B Distribution Pricing & Profitability Engine applies that approach to international distribution. It connects product economics, country-level operating conditions, commercial policy, fulfillment choices, and financial exposure without attempting to replace the organization's core transaction systems.

## Technical Details

<details>
<summary>For technical reviewers, Excel practitioners, and collaborators</summary>

### Workbook Architecture

The workbook consists of six functional modules and 16 business worksheets. Its architecture follows a decision-oriented sequence: master data establishes the assumptions, cost engines determine the economics, commercial rules establish pricing boundaries, operational models test fulfillment feasibility, financial analysis evaluates the consequences, and the final outputs support management review and customer communication.

| Module | Worksheets | Primary responsibility |
|---|---|---|
| Master Foundation | `01_Control Panel`, `02_Product Master`, `03_Country Master`, `04_Cost Inputs` | Centralize model settings, SKU attributes, country assumptions, and operating cost standards. |
| Demand & Dynamic Cost Engine | `05_Demand & Orders`, `06_Landed Cost Engine`, `07_Cost-to-Serve Engine` | Translate demand assumptions into landed cost and customer-level fulfillment economics. |
| Pricing & Commercial Policy Engine | `08_Pricing Engine`, `09_Pricing Matrix`, `10_MOQ & Order Policy` | Establish price boundaries, evaluate combined commercial concessions, and calculate order thresholds. |
| Supply Chain & Fulfillment Simulation | `11_Logistics Scenarios`, `12_Inventory & Purchasing` | Compare distribution routes and derive replenishment requirements under demand and lead-time uncertainty. |
| Financial Modeling & Sensitivity | `13_Financial Model`, `14_Sensitivity` | Evaluate country-level and consolidated profitability, working capital, financing gaps, and downside scenarios. |
| Executive Dashboard & Price Lists | `15_Decision Dashboard`, `16_Customer Price Lists` | Surface decision alerts and produce customer-facing price lists without exposing internal cost and margin data. |

#### Data flow

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

The dependency diagram describes the intended analytical flow. Specific formulas may reference multiple upstream tables directly; the diagram is not a claim that every worksheet depends exclusively on the immediately preceding worksheet.

#### Core design principles

- **Single source of truth:** Global assumptions belong in the control panel, country-specific assumptions in the country master, and operational rates in the cost inputs table.
- **Structured data:** Standard Excel Tables use the `tbl_` naming convention. Structured references reduce the need to maintain changing cell ranges manually.
- **Dynamic calculations:** Microsoft 365 functions such as `LET`, `XLOOKUP`, `FILTER`, `UNIQUE`, `SORT`, `SWITCH`, and `HSTACK` support scenario selection, lookups, and dynamically generated outputs.
- **Currency separation:** Product and operating economics can be evaluated in USD while local-currency amounts are derived using the relevant country exchange-rate assumptions.
- **Tax treatment separation:** Non-recoverable import duties are included in landed cost. Recoverable VAT is tracked separately rather than automatically treated as an economic cost.
- **Decision-oriented outputs:** Prices, order thresholds, fulfillment recommendations, and financial alerts are intended to make operational trade-offs visible before commercial commitments are made.

#### Worksheet responsibilities

| Worksheet | Main inputs | Main outputs |
|---|---|---|
| `01_Control Panel` | Active scenario, reporting currency, WACC, margin targets, discount limits, service-level settings | Global calculation assumptions and master-data health checks |
| `02_Product Master` | SKU, description, category, carton quantity, unit volume, weight, FOB price, supplier MOQ, shelf life | Carton volume, carton weight, estimated container capacity |
| `03_Country Master` | Country code, currency, exchange rate, duty and VAT assumptions, financing rate, country margin uplift | Country-level financial and commercial parameters |
| `04_Cost Inputs` | Freight, insurance, warehousing, handling, linehaul, last-mile delivery, commission, bad-debt rates | Standard operating cost drivers |
| `05_Demand & Orders` | Country, SKU, weekly demand, scenario adjustments, order size, payment terms | Active demand and annualized order-run estimates |
| `06_Landed Cost Engine` | Country/SKU combinations and master-data references | CIF, duty, freight allocation, port costs, landed cost, local-currency cost, VAT reference |
| `07_Cost-to-Serve Engine` | Country/SKU combinations and fulfillment assumptions | Storage, handling, delivery, financing, bad-debt allowance, total delivered cost |
| `08_Pricing Engine` | Delivered cost, target margin, floor margin, country risk uplift | Floor price, target price, list price, maximum discount allowance |
| `09_Pricing Matrix` | Proposed order quantity, payment terms, delivery arrangement, commercial concessions | Effective invoice price, realized margin, approval status |
| `10_MOQ & Order Policy` | Delivery cost, target margin, carton constraints, supplier constraints | Customer MOQ, minimum order value, free-delivery threshold |
| `11_Logistics Scenarios` | Demand, fixed warehouse costs, transport and fulfillment cost assumptions | Logistics crossover volume and route recommendation |
| `12_Inventory & Purchasing` | Weekly demand, lead time, service-level settings, stock and supplier constraints | Safety stock, reorder point, suggested purchase quantity |
| `13_Financial Model` | Demand, pricing, cost, operating and working-capital assumptions | Country P&L, consolidated results, NWC, financing-gap indicators |
| `14_Sensitivity` | Base-case assumptions and selected downside/upside shocks | Scenario comparisons and changes in profit and cash requirements |
| `15_Decision Dashboard` | Selected country or consolidated view, upstream model outputs | Profitability indicators, exception lists, approval alerts |
| `16_Customer Price Lists` | Selected country and quotation currency | Customer-facing product prices, order quantities, commercial notes |

#### Country and currency model

The country master covers four markets:

| Code | Country | Local currency | Illustrative FX rate in the implementation specification |
|---|---|---|---:|
| GT | Guatemala | GTQ | 7.8000 |
| SV | El Salvador | USD | 1.0000 |
| HN | Honduras | HNL | 24.6000 |
| NI | Nicaragua | NIO | 36.8000 |

The exchange-rate convention is **local currency units per USD**. These values are implementation examples, not verified live exchange rates or current tax guidance. Production use requires current, approved financial and statutory inputs.

### Three Traps That Catch Even Experienced Distribution Managers

#### Trap 1 — A positive markup is not proof of a profitable order

**1. Decision:** Approve a customer price because it exceeds the supplier's FOB purchase price.

**2. Hidden flaw:** The calculation ignores the cost of getting the product into the destination market and delivering it to the customer.

**3. Why the recommendation changes:** Import duty, freight, insurance, customs handling, storage, delivery, and financing can consume the apparent markup.

**4. Why the reasoning fails:** FOB is a procurement reference, not a complete measure of the economics of a delivered customer order.

**5. Corrected approach:** Establish landed cost first, then add the applicable cost-to-serve components. Compare the proposed selling price with the resulting cost and required margin.

**6. Decision outcome:** A price that looked acceptable under purchase-price markup may require a higher quote, a different delivery arrangement, a larger order, or an explicit commercial exception.

| Illustrative unit economics | Amount |
|---|---:|
| Supplier FOB price | $10.00 |
| Freight, insurance, duty and port costs | $3.00 |
| Landed cost | $13.00 |
| Additional fulfillment and financing costs | $2.00 |
| Total delivered cost | $15.00 |
| Proposed selling price | $16.00 |
| Contribution before any additional unmodeled costs | $1.00 |

The example is illustrative. It shows why the same $6 spread over FOB cost does not represent a $6 contribution after fulfillment.

<details>
<summary>Formula reference — landed cost and delivered cost</summary>

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

**Logic note:** Recoverable VAT is maintained as a separate tax-reference amount in the specified landed-cost design. Confirm local tax treatment before applying the model to actual transactions.
</details>

#### Trap 2 — Discount, payment terms, and delivery cannot be assessed independently

**1. Decision:** Grant a volume discount and longer payment terms while retaining free delivery.

**2. Hidden flaw:** Each concession appears manageable in isolation, but the combined package reduces realized revenue and increases service or financing costs.

**3. Why the recommendation changes:** The actual contribution can fall below the minimum acceptable margin even when the invoice price remains above the nominal floor calculated for standard terms.

**4. Why the reasoning fails:** Commercial concessions interact. A discount affects revenue; extended credit changes working-capital exposure; delivery terms affect fulfillment costs.

**5. Corrected approach:** Evaluate the effective invoice price and the relevant order-level cost after applying all proposed commercial conditions.

**6. Decision outcome:** Approve the package only when it remains within the defined commercial policy, or escalate it for explicit approval.

| Review dimension | Incomplete approach | Corrected approach |
|---|---|---|
| Volume discount | Assess the discount alone | Include all price concessions |
| Payment terms | Treat the invoice value as cash-equivalent | Include the applicable financing exposure |
| Delivery | Treat delivery as a standard overhead | Allocate relevant fulfillment costs to the order |
| Approval | Compare only with list price | Compare realized economics with the required floor and approval rules |

<details>
<summary>Formula reference — price and margin boundaries</summary>

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

These expressions assume a margin defined as a percentage of selling price and valid margin inputs below 100%. The order-level margin must still be calculated using the effective selling price and the costs relevant to that transaction.
</details>

#### Trap 3 — Positive operating profit does not guarantee adequate liquidity

**1. Decision:** Expand distribution because the projected country P&L shows positive operating profit.

**2. Hidden flaw:** Growth requires more inventory and may increase customer receivables before supplier payments and customer collections settle.

**3. Why the recommendation changes:** The company may need additional funding to carry inventory and receivables even while its projected operating result remains positive.

**4. Why the reasoning fails:** Profitability and liquidity measure different things. Revenue recognition and operating profit do not establish that sufficient cash is available at every point in the operating cycle.

**5. Corrected approach:** Review operating results together with inventory, accounts receivable, accounts payable, and the resulting working-capital requirement. Test downside demand and freight or currency shocks.

**6. Decision outcome:** Expansion may require revised credit terms, smaller or staged purchasing commitments, different inventory policies, or additional financing.

<details>
<summary>Formula reference — working capital and financing exposure</summary>

```excel
Net_Working_Capital =
    Accounts_Receivable
    + Inventory
    - Accounts_Payable
```

A simplified funding-gap measure can compare modeled funding requirements with available financing capacity. The precise calculation depends on the workbook's financing assumptions and the fields implemented in the financial model.

A positive working-capital requirement is not automatically a credit shortfall. A financing gap exists only when the relevant funding requirement exceeds the available funding capacity under the model's definitions.
</details>

### Example Scenario

Consider an illustrative SKU supplied at an FOB price of $10.00 per unit. The product is shipped to one of the modeled markets and sold to a customer under a defined delivery and payment arrangement.

The following example demonstrates the decision sequence. The figures are hypothetical and are not a forecast for any particular country or product.

| Input or calculation | Illustrative value |
|---|---:|
| FOB purchase price | $10.00 |
| Allocated international freight and insurance | $1.00 |
| CIF value | $11.00 |
| Import duty at an assumed 10% | $1.10 |
| Allocated port and customs costs | $0.40 |
| Landed cost | $12.50 |
| Fulfillment and financing cost | $1.50 |
| Total delivered cost | $14.00 |
| Required target contribution margin | 25% |
| Required floor contribution margin | 12% |

Under a selling-price-based margin convention, the target price is:

\[
P_{\text{target}}=\frac{14.00}{1-0.25}=\$18.67
\]

The floor price is:

\[
P_{\text{floor}}=\frac{14.00}{1-0.12}=\$15.91
\]

A proposed selling price of $17.00 would produce a contribution of $3.00 per unit before any additional costs not represented in the modeled delivered-cost figure. Its contribution margin would be approximately 17.65%.

The proposal would exceed the illustrative floor but remain below the target price. That is a materially different conclusion from merely observing that $17.00 is higher than the $10.00 FOB price.

The next decision is not automatically to reject the transaction. It is to determine whether the order volume, customer terms, delivery arrangement, and strategic context justify accepting a below-target but above-floor transaction, subject to the applicable approval policy.

</details>

### Formula Reference

The formulas below document the principal calculation patterns and their business purpose. They are based on the implementation specification. Before production deployment, reconcile each expression with the final workbook's actual table names, columns, and formula cells.

<details>
<summary>1. Master data, demand scenarios, and dynamic lookups</summary>

**Purpose:** Establish consistent keys and assumptions before calculating commercial outputs.

#### SKU container capacity

```excel
=LET(
    feu_cbm, Control_Panel!$C$12,
    sku_cbm, [@[Unit_CBM]],
    IF(sku_cbm > 0, INT(feu_cbm / sku_cbm), 0)
)
```

This estimates the number of units that fit within the configured container-volume allowance. It is a volume-based estimate, not a complete loading plan: weight limits, palletization, packaging geometry, and operational utilization may reduce actual capacity.

#### Active demand by scenario

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

The active scenario determines which demand quantity feeds the downstream calculations.

#### Annualized order frequency

```excel
=LET(
    batch, [@[Order_Batch_Units]],
    demand, [@[Active_Demand_Qty]],
    IF(batch > 0, (demand * 52) / batch, 0)
)
```

The calculation estimates annual order runs from the modeled weekly demand and typical order size. Its accuracy depends on consistent demand units and a valid order-batch assumption.

#### General lookup pattern

```excel
=XLOOKUP(
    [@[Country_Code]],
    tbl_CountryMaster[Country_Code],
    tbl_CountryMaster[FX_Rate_to_USD],
    0
)
```

Use a consistent business key to retrieve a country parameter. A zero or other fallback must not be interpreted as evidence that the underlying master data is valid; missing-key checks should be performed separately.

</details>

<details>
<summary>2. Landed cost, tax separation, and cost-to-serve</summary>

**Purpose:** Establish the cost of importing the product and serving the customer.

#### Freight allocation

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

The specified model allocates container freight over the estimated unit capacity. The resulting unit cost depends on the assumed loading utilization.

#### Insurance and CIF

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

The second expression produces the model's CIF reference value from FOB, freight, and insurance.

#### Import duty and landed cost

```excel
=[@[Unit_CIF_USD]] * [@[Import_Duty_Rate]]
```

```excel
=[@[Unit_CIF_USD]]
 + [@[Unit_Duty_DAI_USD]]
 + [@[Unit_Port_Drayage_USD]]
```

The specified landed-cost definition includes CIF, import duty, and allocated port and drayage charges. Other import-related costs should be added if they are applicable and absent from the current model.

#### Recoverable VAT reference

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

This formula illustrates the implementation's VAT reference calculation. Actual VAT recoverability, taxable base, customs valuation, and local treatment must be verified against the relevant country's rules.

#### Total cost-to-serve and delivered cost

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

The cost-to-serve aggregation includes storage, handling, last-mile delivery, financing, and the modeled bad-debt allowance.

</details>

<details>
<summary>3. Pricing, order policy, and approval controls</summary>

**Purpose:** Convert full-cost economics into actionable commercial boundaries.

#### Target price and floor price

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

These expressions assume the target and floor margins are defined against selling price rather than cost.

#### Maximum discount allowance

```excel
=LET(
    list_p, [@[List_Price_USD]],
    floor_p, [@[Floor_Price_USD]],
    IF(list_p > 0, (list_p - floor_p) / list_p, 0)
)
```

The calculation measures the percentage reduction from list price to floor price. It does not independently authorize a discount: commercial approval thresholds and order-level margin checks remain separate controls.

#### Customer economic MOQ

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

The specified formula estimates the order quantity needed to cover a fixed delivery or order cost, then rounds to a full-carton quantity. The model's `Unit_Margin_Contribution` definition and the costs included in that contribution must be checked before relying on the result.

#### Minimum order value and free-delivery threshold

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

The minimum order value follows the economic MOQ. The free-delivery threshold is a simplified policy estimate based on the fixed drop fee and target margin assumption; validate its behavior against the actual commercial policy before deployment.

#### Approval status

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

The displayed English status labels are explanatory equivalents of the original implementation's Chinese status labels. If the workbook uses exact text matching in downstream formulas, preserve the workbook's original strings or update all dependent references together.

</details>

<details>
<summary>4. Logistics, inventory, and replenishment</summary>

**Purpose:** Compare fulfillment structures and translate demand assumptions into purchasing decisions.

#### Logistics crossover principle

A simplified fixed-cost versus variable-cost crossover can be expressed as:

\[
Q^*=\frac{\Delta F}{S}
\]

Where:

- \(Q^*\) is the approximate annual volume at which the alternative fulfillment model becomes competitive.
- \(\Delta F\) is the additional annual fixed cost of the alternative.
- \(S\) is the per-unit variable cost saving.

The calculation is meaningful only when the alternative actually saves variable cost (\(S>0\)). If the saving is zero or negative, there is no finite positive crossover under this simplified formulation.

The implementation specification uses a fixed warehouse-cost assumption and a 100-unit rounding increment in its crossover example. Such assumptions should be moved into controlled parameters when they need to vary by country or operating structure.

#### Dynamic safety stock and reorder point

The intended model uses a target service level, demand variability, and lead time to establish protection against demand and supply uncertainty.

A common analytical formulation is:

\[
SS = z \times \sigma_d \times \sqrt{L}
\]

\[
ROP = \bar d L + SS
\]

Where:

- \(SS\) is safety stock.
- \(z\) is the service-level factor.
- \(\sigma_d\) is the standard deviation of demand per period.
- \(L\) is lead time expressed in the same period units.
- \(\bar d\) is average demand per period.
- \(ROP\) is the reorder point.

These equations describe the standard independent-period-demand formulation. They are not a substitute for checking the final workbook's implemented formula. If demand and lead time are both variable, or demand is seasonal, the uncertainty calculation may require a different treatment.

#### Suggested purchase quantity

The purchase recommendation should account for:

- the quantity needed to restore stock toward the selected inventory target;
- current available stock and relevant open orders;
- supplier MOQ;
- carton or other packaging multiples;
- remaining shelf life and excess-inventory risk.

A suggested purchase quantity must not be interpreted as a purchase authorization. Procurement should validate actual stock, open purchase orders, supplier constraints, and demand assumptions before releasing an order.

</details>

<details>
<summary>5. Financial modeling, sensitivity, and management reporting</summary>

**Purpose:** Connect commercial decisions to operating profit and funding requirements.

#### Country and consolidated financial model

The implementation follows a profit waterfall:

```text
Net Revenue
    - Cost of Goods Sold
    = Gross Profit
    - Fulfillment Operating Expenses
    = Contribution Margin
    - Sales Commission and Bad-Debt Allowance
    = Operating EBIT
```

The precise mapping of each cost to COGS, fulfillment expense, or commercial expense must remain consistent with the organization's accounting policy. The same expense must not be counted in both landed cost and operating expenses.

#### Working capital

```excel
=[@[Accounts_Receivable_USD]]
 + [@[Inventory_Capital_USD]]
 - [@[Accounts_Payable_USD]]
```

This expresses the model's net working-capital definition. Funding requirements and credit availability should be evaluated separately from the operating-profit calculation.

#### Demand sensitivity

The implementation compares lower, base, and higher demand scenarios. The specification uses illustrative demand multipliers of 0.80, 1.00, and 1.20.

A simplified scenario calculation scales net revenue and COGS with demand while separating modeled variable fulfillment costs from fixed warehouse costs. This is intended to expose operating leverage: lower sales do not necessarily reduce fixed costs proportionally.

#### Freight and discount sensitivity

The model includes a two-variable stress test that varies freight cost and commercial discount assumptions. The objective is to identify combinations that cause the realized margin to fall below acceptable levels.

The freight shock should be applied to a clearly defined freight baseline and a consistent allocation basis. A scenario matrix is only as reliable as those underlying assumptions.

#### Currency sensitivity

The model also tests local-currency depreciation. The resulting impact depends on the currency denomination of revenue, supplier purchases, debt, and operating costs.

A currency shock should not be interpreted as a complete foreign-exchange risk model unless those exposures and their timing are represented explicitly.

#### Dashboard and customer quotation output

The dashboard consolidates selected-country or group-level metrics, product profitability status, fulfillment recommendations, and quotations requiring review.

The customer price-list output is designed to expose product identifiers, descriptions, order quantities, price tiers, and commercial notes while excluding internal FOB costs, import duties, operating cost rates, and internal margin indicators.

</details>

### Validation Rules

The following checks define the minimum controls required for a dependable implementation. Some are explicitly specified in the source; others are recommended safeguards for validating the stated calculation logic. A recommended safeguard should not be treated as an already implemented workbook feature until verified.

| Field or control | Validation rule | Required error behavior |
|---|---|---|
| `SKU_Code` | Must be populated and unique in the product master. | Flag duplicates and prevent ambiguous SKU lookups. |
| `Country_Code` | Must match an approved country code: `GT`, `SV`, `HN`, or `NI`. | Flag invalid or unmatched codes. |
| `Units_Per_Carton` | Must be a positive integer. | Reject or flag zero, negative, or fractional quantities. |
| `Unit_CBM` | Must be greater than zero for volume-based freight allocation. | Flag missing or non-positive values; do not treat zero capacity as a valid loading result. |
| `Unit_Weight_KG` | Must be non-negative and consistent with the product specification. | Flag missing or invalid weight data before weight-based cost allocation. |
| `Supplier_FOB_USD` | Must be a valid non-negative purchase price in the stated currency. | Flag missing or negative values; verify currency consistency. |
| `FX_Rate_to_USD` | Must be positive and use the convention of local currency units per USD. | Flag missing, zero, or negative rates; do not silently accept an invalid conversion. |
| `Import_Duty_Rate` and `VAT_Rate` | Must be valid percentage inputs supported by current country-specific assumptions. | Flag out-of-range or unverified inputs; require review of statutory treatment. |
| `VAT_Recoverable` | Must be an explicit Boolean value consistent with the applicable tax treatment. | Flag missing or inconsistent tax configuration. |
| `Annual WACC` and local borrowing rates | Must be valid rates consistent with the intended financing calculation. | Flag invalid rates and verify that the correct rate is used for the relevant exposure. |
| Target and floor margins | Must be below 100% for the specified price formulas. | Do not calculate a misleading price when the denominator is zero or negative. |
| `Order_Units` | Must be a positive quantity for a valid quotation. | Flag zero or negative order quantities. |
| `Terms_Days` | Must be one of the supported payment-term values: 0, 30, 60, or 90 days, unless the model is deliberately extended. | Flag unsupported terms or route them to an explicitly defined rule. |
| `Delivery_Method` | Must match the supported values, such as `Delivered` or `ExWorks`. | Flag unrecognized delivery terms rather than assuming a default route. |
| `Active_Demand_Qty` | Must be consistent with the selected scenario and the base-demand input. | Flag missing scenario values and invalid demand quantities. |
| Supplier MOQ and carton constraints | Suggested PO quantities must respect applicable minimums and packaging multiples. | Flag quantities that cannot satisfy the supplier's purchasing constraints. |
| Price and margin outputs | Must be based on matched country/SKU keys and valid cost data. | Flag missing matches; a zero returned by a lookup must not silently be treated as a verified cost. |
| `Net_Effective_Price_USD` | Must be positive before margin calculations. | Flag non-positive prices and avoid reporting a fabricated margin. |
| Discount approval | Actual discount and contribution margin must be checked against the configured policy thresholds. | Flag transactions below the floor or exceeding the approval threshold. |
| Financial model | Revenue, COGS, expenses, EBIT, and working capital must follow consistent definitions without duplicate cost allocation. | Flag reconciliation differences for review. |
| Dynamic-array outputs | Spill ranges must remain unobstructed. | Resolve `#SPILL!` by removing conflicting content or merged cells. |
| Formula integrity | Calculated columns must remain formulas and extend when their Excel Tables expand. | Flag overwritten formulas or rows outside the intended table range. |
| Customer price list | Must exclude internal procurement costs, duty details, operating cost rates, and internal margin measures. | Review the exported customer-facing output for unintended internal disclosure. |

#### Model integrity checks

Before relying on the workbook, verify the following:

1. All 29 assumed input fields identified in the implementation specification have a defined destination and a documented downstream dependency.
2. All 24 key output fields have a defined calculation source and a clear business interpretation.
3. Country/SKU composite keys return the intended records and do not produce ambiguous matches.
4. Tax, currency, cost allocation, and margin definitions are consistent across the cost engines and financial model.
5. The dashboard's alerts agree with the underlying pricing and approval calculations.
6. The customer-facing quotation contains only the information intended for external distribution.
7. The model has been recalculated and checked after material changes to assumptions or master data.

The implementation specification describes the 29-input and 24-output cross-check as complete. That documented design assertion should be distinguished from independent verification of a finished workbook: actual formula integrity, numerical accuracy, and operational behavior require testing against the implemented file and representative test cases.

</details>

## The Business Logic & Methodology

The engine treats cross-border distribution as a connected commercial system rather than a sequence of isolated markup calculations. The central principle is to evaluate the economics of the product, the customer transaction, the delivery arrangement, and the funding requirement together.

- **Full-cost pricing:** Import costs and fulfillment expenses are evaluated before a selling-price recommendation is established. This reduces the risk of approving a transaction that looks profitable against supplier cost but fails to cover the cost of serving the customer.
- **Contribution-margin boundaries:** Target and minimum margin requirements create a distinction between the preferred commercial outcome and the lowest acceptable transaction economics. Discount limits and approval rules help make exceptions explicit.
- **Order economics:** Volume, payment terms, and delivery arrangements are assessed together. This makes the cost of concessions visible and supports minimum-order and delivery policies that reflect actual operating economics.
- **Scenario and logistics comparison:** Alternative demand levels and fulfillment structures are evaluated against their cost implications. The resulting comparison helps identify when centralized distribution, local stocking, or direct shipment deserves further investigation.
- **Profitability and liquidity analysis:** Country P&Ls are considered alongside inventory, receivables, payables, and financing exposure. This makes it easier to distinguish a profitable operating plan from one that may require more working capital than the business can fund.

The commercial outcome is a repeatable decision process: establish validated assumptions, calculate delivered economics, apply pricing boundaries, test operational alternatives, and review the resulting profit and funding implications before approving a decision.

## Other Tools in This Series

Explore additional lightweight Excel and browser-based decision-support tools on the [HyVoid GitHub profile](https://github.com/HyVoid).

- **Construction project controls:** Estimate costs, manage budgets, and monitor project delivery.
- **Financial modeling:** Connect operating assumptions, financial statements, and investment decisions.
- **Inventory and capacity planning:** Evaluate replenishment needs and operational constraints.

## License

This project is distributed under the **Apache License 2.0**. See the [`LICENSE`](LICENSE) file for the full license terms.
