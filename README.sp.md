[ 🌐 عربي ](README.ar.md) | [ 🇩🇪 Deutsch ](README.de.md) | [ 🇫🇷 Français ](README.fr.md) | [ 🇳🇱 Nederlands ](README.nl.md) | [ 🇪🇸 Español ](README.sp.md) | [ 🇬🇧 English ](README.md)

# Motor de Precios y Rentabilidad para Distribución B2B: Modelo Excel de Coste Puesto en Destino, Coste de Servicio y Margen Mayorista
<img width="1920" height="790" alt="image" src="https://github.com/user-attachments/assets/b608987f-c43c-4b99-b5f0-807f5ef96257" />

**Una calculadora de precios mayoristas B2B transfronteriza, un simulador de coste puesto en destino (landed cost) y una plantilla de modelado de rentabilidad multi-país para distribuidores internacionales y equipos de finanzas comerciales.**

[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)
![Platform: Browser + Excel](https://img.shields.io/badge/Platform-Browser%20%2B%20Excel-2563EB)
![Tool Type: Pricing & Financial Model](https://img.shields.io/badge/Tool-Pricing%20%26%20Financial%20Model-0F766E)

**El Motor de Precios y Rentabilidad para Distribución B2B es una calculadora gratuita basada en navegador y un modelo financiero de Excel reutilizable diseñado para mayoristas transfronterizos, importadores y distribuidores B2B. Transforma cotizaciones FOB de proveedores en bruto en costes puestos en destino a nivel de SKU, métricas de coste de servicio al cliente (CTS), cascadas de precios de margen de bolsillo, comparativas de cumplimiento multi-escalón y previsiones de flujo de caja del capital de trabajo, evitando la erosión del margen por flete no tarificado, aranceles, condiciones de pago y volatilidad cambiaria.**

> **Accede al Simulador de Precios Interactivo o descarga el Modelo Excel**
>
> - **[🌐 Lanza la calculadora B2B gratuita de coste puesto en destino y precios basada en web](https://hyvoid.github.io/b2b-pricing-landed-cost-excel-model/)** — Ejecuta simulaciones instantáneas de margen transfronterizo en tu navegador sin instalación ni registro.
> - **[📥 Descarga el libro de Excel reutilizable de precios y rentabilidad para distribución B2B (.xlsx)](https://theseusworkshop.com/l/mzjxa?utm_source=github&utm_medium=GitHub%20README)** — Obtén el modelo de hoja de cálculo completo sin conexión para catálogos de SKU personalizados, auditoría financiera persistente y revisiones ejecutivas de precios.



---

## Capacidades de seguimiento comercial y financiero esenciales: del punto de dolor a la solución

Para analistas comerciales y operadores mayoristas que buscan una **hoja de cálculo fiable de coste puesto en destino** o una **plantilla de cascada de márgenes B2B**, este marco tiende un puente entre los recargos brutos de factura y la rentabilidad neta realmente realizada:

| Punto de dolor de la distribución transfronteriza | Intención de búsqueda frecuente / Módulo | Cómo lo resuelve este motor financiero y de precios |
| :--- | :--- | :--- |
| **Costes ocultos de importación y logística erosionan el margen bruto** | **Calculadora de coste puesto en destino y aranceles a nivel de SKU** | Separa los precios de compra FOB/EXW del proveedor del flete marítimo/aéreo, el seguro marítimo, los aranceles de importación no recuperables, las tasas de agente de aduanas y el transporte local por país. |
| **Los vended conceden descuentos por debajo de los mínimos rentables** | **Cascada de precios B2B y modelo de salvaguarda del precio mínimo** | Establece niveles comerciales claros — comparando el Precio de Lista Estándar, el Precio de Venta Objetivo y el Precio Mínimo Aceptable (MAP) sobre suelos estrictos de margen de contribución. |
| **Concesiones no tarificadas al cliente destruyen la economía del trato** | **Analizador de Coste de Servicio al Cliente (CTS) y Margen de Bolsillo** | Cuantifica cómo los pedidos pequeños (violaciones de MOQ), las condiciones de pago prolongadas (coste de financiación DSO), los descuentos por pronto pago y la entrega de última milla consumen el margen de contribución neto realizado. |
| **Diseño subóptimo de la red de almacenes y envíos** | **Modelo multi-escalón de cumplimiento y cruce logístico** | Compara la economía unitaria entre un Centro de Distribución Regional (RDC), almacenes locales/francos a nivel de país y el envío directo (drop-shipping) para hallar los puntos de cruce de volumen. |
| **Capital de trabajo excedente atrapado en stock de baja rotación** | **Rastreador de reposición de inventario, stock de seguridad y ciclo de caja** | Vincula previsiones de demanda, plazos de aprovisionamiento, colchones de stock de seguridad, puntos de reorden (ROP) y cantidades económicas de pedido (EOQ) directamente con la inmovilización de caja y la exposición del capital de trabajo. |
| **Volatilidad cambiaria y tasas locales de endeudamiento distorsionan la P&L regional** | **Modelo multi-moneda de P&L por país y sensibilidad cambiaria** | Consolida ingresos, COGS, margen de contribución, costes locales de WACC/financiación y conversión de moneda de cuatro mercados centroamericanos en una única moneda de reporte. |

---

## Tutorial paso a paso: cómo construir precios B2B defendibles y ejecutar escenarios de rentabilidad

El modelo financiero opera sobre un bucle repetible de gobernanza comercial en 4 pasos: configurar los salvaguardas macroeconómicos, mantener los datos maestros de SKU y países, someter a prueba de estrés la economía de los tratos con clientes y auditar el flujo de caja consolidado.

### Paso 1: Configurar los salvaguardas comerciales globales y los parámetros de WACC
**Acción:** Define tus objetivos financieros base y umbrales de riesgo en el módulo de Parámetros.
Define el escenario de demanda activo, la moneda base de reporte (p. ej., USD), los porcentajes de margen de contribución objetivo y mínimo, el Costo de Capital Promedio Ponderado (WACC), los niveles de servicio de ciclo objetivo, los umbrales de escalado de descuentos y los disparadores de alerta por días de inventario (DOH).

### Paso 2: Poblar los datos maestros de SKU, los aranceles de importación y las entradas fiscales por país
**Acción:** Introduce catálogos de proveedores, especificaciones de peso volumétrico y reglas comerciales específicas por país.
Introduce las cotizaciones de proveedores de SKU, las especificaciones de embalaje de palés/contenedores, los tipos de cambio específicos por país, las tasas arancelarias de importación por código HS, las reglas de recuperabilidad de VAT/GST, las tasas locales de endeudamiento a corto plazo y las tarifas de manipulación de almacén. Actualiza estas entradas cada vez que cambien las cotizaciones de los transitarios o las tasas de los bancos centrales.

### Paso 3: Calcular el coste puesto en destino, el coste de servicio y los suelos de los tratos con clientes
**Acción:** Ejecuta el motor de precios para evaluar las cotizaciones propuestas a clientes antes de firmar contratos comerciales.
Revisa el coste puesto en destino totalmente cargado y el coste de servicio a nivel de pedido antes de fijar precios. Contrasta los descuentos de venta propuestos, las cantidades de pedido, las condiciones de crédito (p. ej., Net 30 frente a Net 90) y las condiciones de flete (CIF/DDP) con los suelos mínimos de margen y las políticas de cantidad mínima de pedido (MOQ).

### Paso 4: Someter a prueba de estrés la P&L multi-país y pasar al libro de Excel reutilizable
**Acción:** Audita la rentabilidad consolidada, las brechas de financiación del capital de trabajo y la sensibilidad macroeconómica.
Inspecciona el beneficio operativo país por país, la presión del ciclo de conversión de efectivo (CCC) y la sensibilidad del margen a picos de flete de contenedores, caídas de demanda o devaluaciones de moneda local para señalar condiciones comerciales que requieran escalado ejecutivo.

> **¿Listo para pasar de las pruebas de escenarios en el navegador a una gobernanza de precios empresarial repetible?**  
> Una vez validada la metodología en la aplicación web, **[descarga el Modelo Excel completo de precios y rentabilidad para distribución B2B (.xlsx)](https://theseusworkshop.com/l/mzjxa?utm_source=github&utm_medium=GitHub%20README)** para incorporar tu catálogo de SKU propietario, guardar cotizaciones históricas de tratos y ejecutar actualizaciones trimestrales de listas de precios sin conexión en Microsoft Excel.

---

## ¿Por qué usar un modelo dedicado de coste puesto en destino y coste de servicio en lugar de precios con recargo básico?

En la **distribución mayorista B2B transfronteriza**, el precio del producto suele parecer rentable sobre el papel cuando los equipos comerciales confían en un simple **precio de compra al proveedor más un porcentaje estándar de recargo**. La fuga financiera solo aflora después de que el inventario atraviesa la cadena de suministro física y el ciclo de crédito.

Entre la puerta de fábrica y la cobranza final en efectivo, un solo SKU absorbe **flete marítimo/aéreo internacional, seguro de carga, aranceles de importación no recuperables, sobreestadía portuaria, despacho de aduanas, transporte interior, almacenaje en depósito franco, mano de obra de preparación de pedidos, entrega de última milla, comisiones de venta y costes de financiación de cuentas por cobrar (AR)**. Operar en varios países añade tipos de cambio divergentes, estructuras de VAT, costes locales de endeudamiento del capital de trabajo y riesgos de crédito soberano.

Cuando las tablas de fletes, los aranceles aduaneros y las cotizaciones de venta viven en hojas de cálculo desconectadas, un vendedor ve un **margen bruto saludable del 40%**, mientras la empresa en realidad pierde dinero a nivel de **margen de bolsillo neto** por una combinación no tarificada de descuentos por volumen, condiciones de pago Net 90 y entrega LTL (menos que carga completa) a un comprador remoto.

Este **Motor de Precios y Rentabilidad para Distribución B2B** sustituye los recargos por regla general por **razonamiento comercial productizado**:
1. Construye el verdadero **coste puesto en destino a nivel de SKU** por mercado de destino y ruta de cumplimiento.
2. Superpone el **coste de servicio específico del pedido (CTS)**, incluida la manipulación logística y el coste de financiación del valor temporal de las condiciones de crédito extendidas.
3. Impone **suelos estrictos de margen de contribución** mediante una cascada de precios transparente antes de aprobar descuentos.
4. Conecta las decisiones de precios comerciales directamente con el **cálculo de reposición de inventario (ROP/stock de seguridad)** y los **requisitos de caja del capital de trabajo multi-país**.

El objetivo no es reemplazar tu ERP contable ni tu WMS. Es exponer la verdadera economía unitaria de las decisiones comerciales transfronterizas *antes* de firmar cotizaciones vinculantes y compromisos de suministro.

---

## Hojas de cálculo tradicionales de coste más recargo frente a la modelización integrada de cascada de precios B2B

| Dimensión comercial y financiera | Sin esta herramienta (hojas estáticas de coste más recargo) | Con esta herramienta (motor integrado de coste puesto en destino y cascada de precios) |
| :--- | :--- | :--- |
| **Exactitud del coste unitario entregado** | **Recargo FOB ingenuo:** el precio se basa en el coste de compra de fábrica más un recargo plano, ignorando los picos de flete marítimo, las tasas arancelarias HS, la manipulación portuaria y el almacenaje. | **Construcción granular del coste puesto en destino:** desglosa explícitamente la adquisición del producto, el flete internacional, el seguro marítimo, los aranceles aduaneros y el cumplimiento local por SKU y país. |
| **Gobernanza de descuentos y concesiones** | **Fuga de margen sin control:** los vended acumulan descuentos en factura, envío gratuito y crédito extendido sin ver el impacto acumulado en el margen de bolsillo neto. | **Suelos de margen de contribución aplicados:** evalúa la realización neta de factura frente al Precio Objetivo, el Precio Mínimo Aceptable (MAP) y los umbrales de escalado a la dirección. |
| **Benchmarking de rendimiento multi-país** | **Márgenes regionales distorsionados:** comparar márgenes brutos globales entre países ignora la depreciación de la moneda local, regímenes arancelarios distintos y tasas de interés locales. | **P&L consolidado ajustado por tipo de cambio:** normaliza aranceles específicos por país, tratamiento de VAT y costes locales de financiación WACC en una moneda de reporte unificada para comparar en igualdad de condiciones. |
| **Estrategia de red de cumplimiento y almacenes** | **Enrutamiento logístico estático:** elegir entre un hub regional, almacenes locales o envío directo se hace por intuición y no por economía unitaria basada en volumen. | **Modelado dinámico de cruce logístico:** simula estructuras de costes entre los modelos Hub Central, Almacén Local y Envío Directo para identificar puntos de equilibrio de volumen. |
| **Alineación de inventario y capital de trabajo** | **Compras y finanzas aisladas:** los planificadores de inventario piden stock con promedios aproximados, inmovilizando caja excedente en stock de seguridad sin visibilidad de los costes de financiación en balance. | **Modelado integrado de ROP, stock de seguridad y caja:** conecta plazos de aprovisionamiento, variabilidad de demanda, niveles de servicio y MOQ de proveedores directamente con los requisitos de caja del capital de trabajo. |
| **Rentabilidad frente a realidad del flujo de caja** | **Ilusión del beneficio devengado:** los estados de P&L muestran beneficio operativo contable positivo mientras el negocio sufre crisis agudas de caja por rotación lenta de inventario y largos periodos de cobro DSO. | **Economía de tratos ajustada por capital de trabajo:** deduce el coste de financiación de la tenencia de inventario y del crédito a clientes directamente de los márgenes de contribución a nivel de transacción. |

---

## Usuarios ideales, roles comerciales y casos de uso de la industria mayorista

### Para quién es esto (mapeo de rol a flujo de trabajo)

- **Gerentes de precios B2B y directores comerciales** que buscan una **plantilla de Excel de cascada de precios B2B y aprobación de descuentos** para fijar precios de lista, precios objetivo y precios mínimos defendibles en equipos de venta multi-país.
- **Importadores, mayoristas regionales y propietarios de trading companies** que necesitan una **hoja de cálculo de coste de importación y calculadora de aranceles** para fijar con precisión el precio de envíos de contenedores y palés a través de fronteras sin perder margen por aranceles y volatilidad del flete.
- **Analistas de finanzas comerciales, FP&A y controllers** que buscan un **modelo financiero de coste de servicio (CTS) y rentabilidad de clientes** para auditar cómo impactan las condiciones de pago (DSO), los tamaños de pedido y las concesiones logísticas en el beneficio operativo neto y el capital de trabajo.
- **Planificadores de cadena de suministro y gerentes de logística** que requieren un **modelo multi-escalón de cumplimiento y reposición de inventario** para evaluar hubs de distribución regionales frente a almacenamiento local y calcular la exposición de caja del stock de seguridad.
- **CFOs fraccionarios y consultores de precios** que construyen un **sistema de soporte de decisiones de distribución B2B reutilizable y listo para auditoría** para clientes mayoristas de pymes sin software empresarial de CPQ o precios.

### Sectores de distribución objetivo y casos de uso transfronterizos

Este marco de modelización financiera está diseñado específicamente para la **distribución B2B multi-país, el comercio de importación/exportación y las operaciones mayoristas regionales** (modelado de forma nativa con un estudio de caso regional de 4 mercados centroamericanos, adaptable a cualquier corredor multi-país):
- **Distribuidores de suministros industriales, MRO, ferretería y materiales de construcción**
- **Importadores transfronterizos de bienes de consumo (FMCG), alimentos y bebidas**
- **Mayoristas de productos químicos, insumos agrícolas y materias primas especializadas**
- **Distribuidores maestros regionales de dispositivos médicos, farmacéuticos y equipos comerciales**
- **Redes de recambios de automoción en posventa y componentes de servicio pesado**

### Alcance del modelo y límites operativos

Para mantenerse rápido, transparente e inmediatamente utilizable sin integración de TI:
- **Lo que es:** un motor de simulación estratégico previo a la transacción para precios, coste puesto en destino, cumplimiento y capital de trabajo.
- **Lo que no es:** **no** es un ERP de procesamiento de transacciones (SAP, NetSuite, Microsoft Dynamics), ni un motor de clasificación aduanera automatizada o de presentación fiscal estatutaria (cumplimiento legal HTS/HS), ni una plataforma automatizada de facturación EDI. Los resultados precisos de decisión dependen de entradas comerciales, de flete y arancelarias validadas.

---

## Sobre la arquitectura: razonamiento comercial productizado en Excel y web

Los negocios de distribución complejos suelen sangrar margen no por falta de datos, sino porque **los datos de compra, los aranceles de flete, las tarifas de almacén, los descuentos de venta y los costes de financiación residen en cinco hojas de cálculo separadas**.

Este proyecto aborda la ingeniería de hojas de cálculo como **razonamiento comercial productizado** centrado en una pregunta esencial:

> *"Qué variables exactas de coste, logística y financiación deben conectarse en una sola vista para que un equipo comercial pueda aprobar un precio, cotizar a un cliente o elegir una ruta de cumplimiento con total confianza"*

El **Motor de Precios y Rentabilidad para Distribución B2B** enlaza **Costes FOB de proveedores → Costes puestos en destino transfronterizos → Coste de servicio a nivel de pedido → Salvaguardas de cascada de precios → Capital de trabajo de inventario → P&L consolidado multi-país** en un solo modelo transparente y auditable, otorgando a los distribuidores disciplina de precios de nivel empresarial sin la sobrecarga del software empresarial.

## Detalles técnicos

<details>
<summary>Para revisores técnicos, profesionales de Excel y colaboradores</summary>

<details>
<summary><strong>Arquitectura del libro</strong></summary>

El libro consta de seis módulos funcionales y 16 hojas de trabajo comerciales. Su arquitectura sigue una secuencia orientada a decisiones: los datos maestros establecen los supuestos, los motores de coste determinan la economía, las reglas comerciales fijan los límites de precios, los modelos operativos prueban la viabilidad del cumplimiento, el análisis financiero evalúa las consecuencias y los resultados finales apoyan la revisión directiva y la comunicación con clientes.

| Módulo | Hojas de trabajo | Responsabilidad principal |
|---|---|---|
| Fundación de datos maestros | `01_Control Panel`, `02_Product Master`, `03_Country Master`, `04_Cost Inputs` | Centralizar configuraciones del modelo, atributos de SKU, supuestos por país y estándares de costes operativos. |
| Motor de demanda y costes dinámicos | `05_Demand & Orders`, `06_Landed Cost Engine`, `07_Cost-to-Serve Engine` | Traducir los supuestos de demanda en economía de coste puesto en destino y de cumplimiento a nivel de cliente. |
| Motor de precios y política comercial | `08_Pricing Engine`, `09_Pricing Matrix`, `10_MOQ & Order Policy` | Establecer límites de precio, evaluar concesiones comerciales combinadas y calcular umbrales de pedido. |
| Simulación de cadena de suministro y cumplimiento | `11_Logistics Scenarios`, `12_Inventory & Purchasing` | Comparar rutas de distribución y derivar requisitos de reposición bajo incertidumbre de demanda y plazo. |
| Modelización financiera y sensibilidad | `13_Financial Model`, `14_Sensitivity` | Evaluar rentabilidad por país y consolidada, capital de trabajo, brechas de financiación y escenarios adversos. |
| Cuadro de mando ejecutivo y listas de precios | `15_Decision Dashboard`, `16_Customer Price Lists` | Mostrar alertas de decisión y producir listas de precios orientadas a clientes sin exponer datos internos de coste y margen. |

<details>
<summary><strong>Flujo de datos</strong></summary>

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

El diagrama de dependencias describe el flujo analítico previsto. Fórmulas concretas pueden hacer referencia directamente a varias tablas aguas arriba; el diagrama no afirma que cada hoja dependa exclusivamente de la hoja inmediatamente anterior.

</details>

<details>
<summary><strong>Principios de diseño fundamentales</strong></summary>

- **Fuente única de verdad:** los supuestos globales pertenecen al panel de control, los supuestos por país al maestro de países y las tarifas operativas a la tabla de entradas de costes.
- **Datos estructurados:** las tablas estándar de Excel usan la convención de nombres `tbl_`. Las referencias estructuradas reducen la necesidad de mantener manualmente rangos de celdas cambiantes.
- **Cálculos dinámicos:** funciones de Microsoft 365 como `LET`, `XLOOKUP`, `FILTER`, `UNIQUE`, `SORT`, `SWITCH` y `HSTACK` soportan la selección de escenarios, búsquedas y salidas generadas dinámicamente.
- **Separación de monedas:** la economía de producto y operación puede evaluarse en USD mientras los importes en moneda local se derivan con los supuestos de tipo de cambio del país correspondiente.
- **Separación del tratamiento fiscal:** los aranceles de importación no recuperables se incluyen en el coste puesto en destino. El VAT recuperable se rastrea por separado en lugar de tratarse automáticamente como coste económico.
- **Salidas orientadas a decisiones:** precios, umbrales de pedido, recomendaciones de cumplimiento y alertas financieras buscan hacer visibles los compromisos operativos antes de asumir obligaciones comerciales.

</details>

<details>
<summary><strong>Responsabilidades de las hojas de trabajo</strong></summary>

| Hoja de trabajo | Entradas principales | Salidas principales |
|---|---|---|
| `01_Control Panel` | Escenario activo, moneda de reporte, WACC, objetivos de margen, límites de descuento, ajustes de nivel de servicio | Supuestos globales de cálculo y comprobaciones de salud de los datos maestros |
| `02_Product Master` | SKU, descripción, categoría, cantidad por caja, volumen unitario, peso, precio FOB, MOQ del proveedor, vida útil | Volumen de caja, peso de caja, capacidad estimada de contenedor |
| `03_Country Master` | Código de país, moneda, tipo de cambio, supuestos de arancel y VAT, tasa de financiación, incremento de margen por país | Parámetros financieros y comerciales a nivel de país |
| `04_Cost Inputs` | Flete, seguro, almacenaje, manipulación, transporte principal, entrega de última milla, comisión, tasas de morosidad | Inductores estándar de costes operativos |
| `05_Demand & Orders` | País, SKU, demanda semanal, ajustes de escenario, tamaño de pedido, condiciones de pago | Demanda activa y estimaciones anualizadas de ciclos de pedido |
| `06_Landed Cost Engine` | Combinaciones país/SKU y referencias de datos maestros | CIF, arancel, asignación de flete, costes portuarios, coste puesto en destino, coste en moneda local, referencia de VAT |
| `07_Cost-to-Serve Engine` | Combinaciones país/SKU y supuestos de cumplimiento | Almacenaje, manipulación, entrega, financiación, provisión por morosidad, coste total entregado |
| `08_Pricing Engine` | Coste entregado, margen objetivo, margen mínimo, incremento de riesgo por país | Precio mínimo, precio objetivo, precio de lista, descuento máximo permitido |
| `09_Pricing Matrix` | Cantidad de pedido propuesta, condiciones de pago, modalidad de entrega, concesiones comerciales | Precio efectivo de factura, margen realizado, estado de aprobación |
| `10_MOQ & Order Policy` | Coste de entrega, margen objetivo, restricciones de caja, restricciones del proveedor | MOQ del cliente, valor mínimo de pedido, umbral de envío gratuito |
| `11_Logistics Scenarios` | Demanda, costes fijos de almacén, supuestos de transporte y cumplimiento | Volumen de cruce logístico y recomendación de ruta |
| `12_Inventory & Purchasing` | Demanda semanal, plazo de entrega, ajustes de nivel de servicio, restricciones de stock y proveedor | Stock de seguridad, punto de reorden, cantidad de compra sugerida |
| `13_Financial Model` | Demanda, precios, costes, supuestos operativos y de capital de trabajo | P&L por país, resultados consolidados, NWC, indicadores de brecha de financiación |
| `14_Sensitivity` | Supuestos del caso base y choques adversos/favorables seleccionados | Comparativas de escenarios y cambios en beneficio y requisitos de caja |
| `15_Decision Dashboard` | País seleccionado o vista consolidada, salidas del modelo aguas arriba | Indicadores de rentabilidad, listas de excepciones, alertas de aprobación |
| `16_Customer Price Lists` | País seleccionado y moneda de cotización | Precios de producto orientados a clientes, cantidades de pedido, notas comerciales |

</details>

<details>
<summary><strong>Modelo de países y monedas</strong></summary>

El maestro de países cubre cuatro mercados:

| Código | País | Moneda local | Tipo de cambio ilustrativo en la especificación de implementación |
|---|---|---|---:|
| GT | Guatemala | GTQ | 7.8000 |
| SV | El Salvador | USD | 1.0000 |
| HN | Honduras | HNL | 24.6000 |
| NI | Nicaragua | NIO | 36.8000 |

La convención de tipo de cambio es **unidades de moneda local por USD**. Estos valores son ejemplos de implementación, no tipos de cambio verificados en vivo ni orientación fiscal vigente. El uso en producción requiere entradas financieras y estatutarias actuales y aprobadas.

</details>

</details>

<details>
<summary><strong>Tres trampas que atrapan incluso a gerentes de distribución experimentados</strong></summary>

<details>
<summary><strong>Trampa 1 — Un recargo positivo no prueba que un pedido sea rentable</strong></summary>

**1. Decisión:** Aprobar un precio a cliente porque supera el precio de compra FOB del proveedor.

**2. Fallo oculto:** El cálculo ignora el coste de llevar el producto al mercado de destino y entregarlo al cliente.

**3. Por qué cambia la recomendación:** El arancel de importación, el flete, el seguro, la gestión aduanera, el almacenaje, la entrega y la financiación pueden consumir el recargo aparente.

**4. Por qué falla el razonamiento:** FOB es una referencia de aprovisionamiento, no una medida completa de la economía de un pedido entregado al cliente.

**5. Enfoque corregido:** Establecer primero el coste puesto en destino y luego añadir los componentes de coste de servicio aplicables. Comparar el precio de venta propuesto con el coste resultante y el margen requerido.

**6. Resultado de la decisión:** Un precio que parecía aceptable con el recargo sobre el precio de compra puede requerir una cotización más alta, una modalidad de entrega distinta, un pedido mayor o una excepción comercial explícita.

| Economía unitaria ilustrativa | Importe |
|---|---:|
| Precio FOB del proveedor | $10.00 |
| Flete, seguro, arancel y costes portuarios | $3.00 |
| Coste puesto en destino | $13.00 |
| Costes adicionales de cumplimiento y financiación | $2.00 |
| Coste total entregado | $15.00 |
| Precio de venta propuesto | $16.00 |
| Contribución antes de costes adicionales no modelados | $1.00 |

El ejemplo es ilustrativo. Muestra por qué el mismo diferencial de $6 sobre el coste FOB no representa una contribución de $6 tras el cumplimiento.

<details>
<summary>Referencia de fórmulas — coste puesto en destino y coste entregado</summary>

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

**Nota lógica:** el VAT recuperable se mantiene como un importe de referencia fiscal separado en el diseño especificado de coste puesto en destino. Confirma el tratamiento fiscal local antes de aplicar el modelo a transacciones reales.

</details>

</details>

<details>
<summary><strong>Trampa 2 — Descuento, condiciones de pago y entrega no pueden evaluarse de forma independiente</strong></summary>

**1. Decisión:** Conceder un descuento por volumen y condiciones de pago más largas manteniendo el envío gratuito.

**2. Fallo oculto:** Cada concesión parece manejable por separado, pero el paquete combinado reduce los ingresos realizados y aumenta los costes de servicio o financiación.

**3. Por qué cambia la recomendación:** La contribución real puede caer por debajo del margen mínimo aceptable incluso cuando el precio de factura permanece por encima del suelo nominal calculado para condiciones estándar.

**4. Por qué falla el razonamiento:** Las concesiones comerciales interactúan. Un descuento afecta a los ingresos; el crédito extendido cambia la exposición del capital de trabajo; las condiciones de entrega afectan a los costes de cumplimiento.

**5. Enfoque corregido:** Evaluar el precio efectivo de factura y el coste relevante a nivel de pedido tras aplicar todas las condiciones comerciales propuestas.

**6. Resultado de la decisión:** Aprobar el paquete solo cuando permanezca dentro de la política comercial definida, o escalarlo para su aprobación explícita.

| Dimensión de revisión | Enfoque incompleto | Enfoque corregido |
|---|---|---|
| Descuento por volumen | Evaluar solo el descuento | Incluir todas las concesiones de precio |
| Condiciones de pago | Tratar el valor de factura como equivalente a caja | Incluir la exposición de financiación aplicable |
| Entrega | Tratar la entrega como gasto general estándar | Asignar al pedido los costes de cumplimiento relevantes |
| Aprobación | Comparar solo con el precio de lista | Comparar la economía realizada con el suelo requerido y las reglas de aprobación |

<details>
<summary>Referencia de fórmulas — límites de precio y margen</summary>

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

Estas expresiones asumen un margen definido como porcentaje del precio de venta y entradas de margen válidas por debajo del 100%. El margen a nivel de pedido debe seguir calculándose con el precio de venta efectivo y los costes relevantes de esa transacción.

</details>

</details>

<details>
<summary><strong>Trampa 3 — Beneficio operativo positivo no garantiza liquidez adecuada</strong></summary>

**1. Decisión:** Expandir la distribución porque la P&L proyectada del país muestra beneficio operativo positivo.

**2. Fallo oculto:** El crecimiento requiere más inventario y puede incrementar las cuentas por cobrar antes de que se liquiden los pagos a proveedores y las cobranzas de clientes.

**3. Por qué cambia la recomendación:** La empresa puede necesitar financiación adicional para sostener inventario y cuentas por cobrar incluso mientras su resultado operativo proyectado sigue siendo positivo.

**4. Por qué falla el razonamiento:** Rentabilidad y liquidez miden cosas distintas. El reconocimiento de ingresos y el beneficio operativo no garantizan que haya efectivo suficiente en cada punto del ciclo operativo.

**5. Enfoque corregido:** Revisar los resultados operativos junto con inventario, cuentas por cobrar, cuentas por pagar y el requisito resultante de capital de trabajo. Probar choques adversos de demanda y de flete o moneda.

**6. Resultado de la decisión:** La expansión puede requerir condiciones de crédito revisadas, compromisos de compra menores o escalonados, políticas de inventario diferentes o financiación adicional.

<details>
<summary>Referencia de fórmulas — capital de trabajo y exposición de financiación</summary>

```excel
Net_Working_Capital =
    Accounts_Receivable
    + Inventory
    - Accounts_Payable
```

Una medida simplificada de brecha de financiación puede comparar los requisitos de financiación modelados con la capacidad de financiación disponible. El cálculo preciso depende de los supuestos de financiación del libro y de los campos implementados en el modelo financiero.

Un requisito positivo de capital de trabajo no es automáticamente un déficit de crédito. Solo existe brecha de financiación cuando el requisito relevante supera la capacidad de financiación disponible según las definiciones del modelo.

</details>

</details>

</details>

<details>
<summary><strong>Escenario de ejemplo</strong></summary>

Considera un SKU ilustrativo suministrado a un precio FOB de $10.00 por unidad. El producto se envía a uno de los mercados modelados y se vende a un cliente bajo una modalidad de entrega y pago definida.

El siguiente ejemplo demuestra la secuencia de decisión. Las cifras son hipotéticas y no constituyen una previsión para ningún país o producto concreto.

| Entrada o cálculo | Valor ilustrativo |
|---|---:|
| Precio de compra FOB | $10.00 |
| Flete y seguro internacional asignados | $1.00 |
| Valor CIF | $11.00 |
| Arancel de importación con un 10% supuesto | $1.10 |
| Costes portuarios y aduaneros asignados | $0.40 |
| Coste puesto en destino | $12.50 |
| Coste de cumplimiento y financiación | $1.50 |
| Coste total entregado | $14.00 |
| Margen de contribución objetivo requerido | 25% |
| Margen de contribución mínimo requerido | 12% |

Bajo la convención de margen basada en el precio de venta, el precio objetivo es:

\[
P_{\text{target}}=\frac{14.00}{1-0.25}=\$18.67
\]

El precio mínimo es:

\[
P_{\text{floor}}=\frac{14.00}{1-0.12}=\$15.91
\]

Un precio de venta propuesto de $17.00 produciría una contribución de $3.00 por unidad antes de costes adicionales no representados en la cifra modelada de coste entregado. Su margen de contribución sería aproximadamente del 17.65%.

La propuesta superaría el suelo ilustrativo pero permanecería por debajo del precio objetivo. Es una conclusión materialmente distinta de simplemente observar que $17.00 es mayor que el precio FOB de $10.00.

La siguiente decisión no es rechazar automáticamente la transacción. Es determinar si el volumen del pedido, las condiciones del cliente, la modalidad de entrega y el contexto estratégico justifican aceptar una transacción por debajo del objetivo pero por encima del suelo, conforme a la política de aprobación aplicable.

</details>

<details>
<summary><strong>Referencia de fórmulas</strong></summary>

Las fórmulas siguientes documentan los patrones de cálculo principales y su propósito de negocio. Se basan en la especificación de implementación. Antes del despliegue en producción, concilia cada expresión con los nombres reales de tablas, columnas y celdas de fórmula del libro final.

<details>
<summary>1. Datos maestros, escenarios de demanda y búsquedas dinámicas</summary>

**Propósito:** Establecer claves y supuestos coherentes antes de calcular las salidas comerciales.

#### Capacidad de contenedor por SKU

```excel
=LET(
    feu_cbm, Control_Panel!$C$12,
    sku_cbm, [@[Unit_CBM]],
    IF(sku_cbm > 0, INT(feu_cbm / sku_cbm), 0)
)
```

Estima el número de unidades que caben dentro de la asignación configurada de volumen de contenedor. Es una estimación basada en volumen, no un plan de carga completo: los límites de peso, la paletización, la geometría del embalaje y la utilización operativa pueden reducir la capacidad real.

#### Demanda activa por escenario

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

El escenario activo determina qué cantidad de demanda alimenta los cálculos aguas abajo.

#### Frecuencia de pedido anualizada

```excel
=LET(
    batch, [@[Order_Batch_Units]],
    demand, [@[Active_Demand_Qty]],
    IF(batch > 0, (demand * 52) / batch, 0)
)
```

El cálculo estima los ciclos anuales de pedido a partir de la demanda semanal modelada y el tamaño típico de pedido. Su exactitud depende de unidades de demanda coherentes y de un supuesto válido de lote de pedido.

#### Patrón general de búsqueda

```excel
=XLOOKUP(
    [@[Country_Code]],
    tbl_CountryMaster[Country_Code],
    tbl_CountryMaster[FX_Rate_to_USD],
    0
)
```

Usa una clave de negocio coherente para recuperar un parámetro de país. Un cero u otro valor de respaldo no debe interpretarse como prueba de que los datos maestros subyacentes son válidos; las comprobaciones de claves ausentes deben realizarse por separado.

</details>

<details>
<summary>2. Coste puesto en destino, separación fiscal y coste de servicio</summary>

**Propósito:** Establecer el coste de importar el producto y de servir al cliente.

#### Asignación de flete

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

El modelo especificado asigna el flete de contenedor sobre la capacidad unitaria estimada. El coste unitario resultante depende de la utilización de carga supuesta.

#### Seguro y CIF

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

La segunda expresión produce el valor de referencia CIF del modelo a partir de FOB, flete y seguro.

#### Arancel de importación y coste puesto en destino

```excel
=[@[Unit_CIF_USD]] * [@[Import_Duty_Rate]]
```

```excel
=[@[Unit_CIF_USD]]
 + [@[Unit_Duty_DAI_USD]]
 + [@[Unit_Port_Drayage_USD]]
```

La definición especificada de coste puesto en destino incluye CIF, arancel de importación y costes portuarios y de transporte local asignados. Deben añadirse otros costes relacionados con la importación si son aplicables y están ausentes del modelo actual.

#### Referencia de VAT recuperable

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

Esta fórmula ilustra el cálculo de referencia de VAT de la implementación. La recuperabilidad real del VAT, la base imponible, la valoración aduanera y el tratamiento local deben verificarse contra las reglas del país correspondiente.

#### Coste total de servicio y coste entregado

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

La agregación de coste de servicio incluye almacenaje, manipulación, entrega de última milla, financiación y la provisión modelada por morosidad.

</details>

<details>
<summary>3. Precios, política de pedidos y controles de aprobación</summary>

**Propósito:** Convertir la economía de coste completo en límites comerciales accionables.

#### Precio objetivo y precio mínimo

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

Estas expresiones asumen que los márgenes objetivo y mínimo se definen sobre el precio de venta y no sobre el coste.

#### Descuento máximo permitido

```excel
=LET(
    list_p, [@[List_Price_USD]],
    floor_p, [@[Floor_Price_USD]],
    IF(list_p > 0, (list_p - floor_p) / list_p, 0)
)
```

El cálculo mide la reducción porcentual del precio de lista al precio mínimo. No autoriza por sí solo un descuento: los umbrales de aprobación comercial y las comprobaciones de margen a nivel de pedido siguen siendo controles separados.

#### MOQ económico del cliente

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

La fórmula especificada estima la cantidad de pedido necesaria para cubrir un coste fijo de entrega o pedido, y luego la redondea a una cantidad de cajas completas. La definición de `Unit_Margin_Contribution` del modelo y los costes incluidos en esa contribución deben revisarse antes de confiar en el resultado.

#### Valor mínimo de pedido y umbral de envío gratuito

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

El valor mínimo de pedido sigue al MOQ económico. El umbral de envío gratuito es una estimación simplificada de política basada en la tarifa fija de envío directo y el supuesto de margen objetivo; valida su comportamiento contra la política comercial real antes del despliegue.

#### Estado de aprobación

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

Las etiquetas de estado en inglés mostradas son equivalentes explicativos de las etiquetas de estado en chino de la implementación original. Si el libro usa coincidencia de texto exacta en fórmulas aguas abajo, conserva las cadenas originales del libro o actualiza juntas todas las referencias dependientes.

</details>

<details>
<summary>4. Logística, inventario y reposición</summary>

**Propósito:** Comparar estructuras de cumplimiento y traducir los supuestos de demanda en decisiones de compra.

#### Principio de cruce logístico

Un cruce simplificado entre coste fijo y coste variable puede expresarse como:

\[
Q^*=\frac{\Delta F}{S}
\]

Donde:

- \(Q^*\) es el volumen anual aproximado a partir del cual el modelo de cumplimiento alternativo se vuelve competitivo.
- \(\Delta F\) es el coste fijo anual adicional de la alternativa.
- \(S\) es el ahorro de coste variable por unidad.

El cálculo solo tiene sentido cuando la alternativa realmente ahorra coste variable (\(S>0\)). Si el ahorro es cero o negativo, no existe un cruce positivo finito bajo esta formulación simplificada.

La especificación de implementación usa un supuesto de coste fijo de almacén y un incremento de redondeo de 100 unidades en su ejemplo de cruce. Tales supuestos deberían moverse a parámetros controlados cuando necesiten variar por país o estructura operativa.

#### Stock de seguridad dinámico y punto de reorden

El modelo previsto usa un nivel de servicio objetivo, la variabilidad de demanda y el plazo de entrega para establecer protección contra la incertidumbre de demanda y suministro.

Una formulación analítica común es:

\[
SS = z \times \sigma_d \times \sqrt{L}
\]

\[
ROP = \bar d L + SS
\]

Donde:

- \(SS\) es el stock de seguridad.
- \(z\) es el factor de nivel de servicio.
- \(\sigma_d\) es la desviación estándar de la demanda por periodo.
- \(L\) es el plazo de entrega expresado en las mismas unidades de periodo.
- \(\bar d\) es la demanda media por periodo.
- \(ROP\) es el punto de reorden.

Estas ecuaciones describen la formulación estándar de demanda independiente por periodo. No sustituyen a la comprobación de la fórmula implementada en el libro final. Si la demanda y el plazo de entrega son ambos variables, o la demanda es estacional, el cálculo de incertidumbre puede requerir un tratamiento distinto.

#### Cantidad de compra sugerida

La recomendación de compra debería considerar:

- la cantidad necesaria para restaurar el stock hacia el objetivo de inventario seleccionado;
- el stock disponible actual y los pedidos abiertos relevantes;
- el MOQ del proveedor;
- los múltiplos de caja u otro embalaje;
- la vida útil restante y el riesgo de inventario excedente.

Una cantidad de compra sugerida no debe interpretarse como una autorización de compra. Compras debe validar el stock real, los pedidos de compra abiertos, las restricciones de proveedores y los supuestos de demanda antes de liberar un pedido.

</details>

<details>
<summary>5. Modelización financiera, sensibilidad y reporting directivo</summary>

**Propósito:** Conectar las decisiones comerciales con el beneficio operativo y los requisitos de financiación.

#### Modelo financiero por país y consolidado

La implementación sigue una cascada de beneficios:

```text
Net Revenue
    - Cost of Goods Sold
    = Gross Profit
    - Fulfillment Operating Expenses
    = Contribution Margin
    - Sales Commission and Bad-Debt Allowance
    = Operating EBIT
```

El mapeo preciso de cada coste a COGS, gasto de cumplimiento o gasto comercial debe mantenerse coherente con la política contable de la organización. El mismo gasto no debe contarse tanto en el coste puesto en destino como en los gastos operativos.

#### Capital de trabajo

```excel
=[@[Accounts_Receivable_USD]]
 + [@[Inventory_Capital_USD]]
 - [@[Accounts_Payable_USD]]
```

Esto expresa la definición de capital de trabajo neto del modelo. Los requisitos de financiación y la disponibilidad de crédito deben evaluarse por separado del cálculo del beneficio operativo.

#### Sensibilidad de demanda

La implementación compara escenarios de demanda inferior, base y superior. La especificación usa multiplicadores de demanda ilustrativos de 0.80, 1.00 y 1.20.

Un cálculo de escenario simplificado escala los ingresos netos y el COGS con la demanda, separando los costes variables de cumplimiento modelados de los costes fijos de almacén. El objetivo es exponer la palanca operativa: menos ventas no reducen necesariamente los costes fijos de forma proporcional.

#### Sensibilidad de flete y descuento

El modelo incluye una prueba de estrés de dos variables que varía los supuestos de coste de flete y descuento comercial. El objetivo es identificar combinaciones que hagan caer el margen realizado por debajo de niveles aceptables.

El choque de flete debería aplicarse a una base de flete claramente definida y a una base de asignación coherente. Una matriz de escenarios solo es tan fiable como esos supuestos subyacentes.

#### Sensibilidad de moneda

El modelo también prueba la depreciación de la moneda local. El impacto resultante depende de la denominación de moneda de los ingresos, las compras a proveedores, la deuda y los costes operativos.

Un choque de moneda no debe interpretarse como un modelo completo de riesgo cambiario a menos que esas exposiciones y su calendario estén representados explícitamente.

#### Salidas del cuadro de mando y de cotizaciones a clientes

El cuadro de mando consolida métricas del país seleccionado o del grupo, el estado de rentabilidad de productos, las recomendaciones de cumplimiento y las cotizaciones que requieren revisión.

La salida de listas de precios a clientes está diseñada para exponer identificadores de producto, descripciones, cantidades de pedido, tramos de precio y notas comerciales, excluyendo los costes FOB internos, los detalles de aranceles, las tarifas de costes operativos y los indicadores internos de margen.

</details>

</details>

<details>
<summary><strong>Reglas de validación</strong></summary>

Las comprobaciones siguientes definen los controles mínimos requeridos para una implementación fiable. Algunas están especificadas explícitamente en la fuente; otras son salvaguardas recomendadas para validar la lógica de cálculo declarada. Una salvaguarda recomendada no debe tratarse como una funcionalidad ya implementada del libro hasta que se verifique.

| Campo o control | Regla de validación | Comportamiento de error requerido |
|---|---|---|
| `SKU_Code` | Debe estar poblado y ser único en el maestro de productos. | Señalar duplicados y evitar búsquedas de SKU ambiguas. |
| `Country_Code` | Debe coincidir con un código de país aprobado: `GT`, `SV`, `HN` o `NI`. | Señalar códigos inválidos o no coincidentes. |
| `Units_Per_Carton` | Debe ser un entero positivo. | Rechazar o señalizar cantidades cero, negativas o fraccionarias. |
| `Unit_CBM` | Debe ser mayor que cero para la asignación de flete basada en volumen. | Señalizar valores ausentes o no positivos; no tratar la capacidad cero como un resultado de carga válido. |
| `Unit_Weight_KG` | Debe ser no negativo y coherente con la especificación del producto. | Señalizar datos de peso ausentes o inválidos antes de la asignación de costes basada en peso. |
| `Supplier_FOB_USD` | Debe ser un precio de compra no negativo válido en la moneda indicada. | Señalizar valores ausentes o negativos; verificar la coherencia de moneda. |
| `FX_Rate_to_USD` | Debe ser positivo y usar la convención de unidades de moneda local por USD. | Señalizar tasas ausentes, cero o negativas; no aceptar silenciosamente una conversión inválida. |
| `Import_Duty_Rate` y `VAT_Rate` | Deben ser entradas porcentuales válidas respaldadas por supuestos vigentes específicos del país. | Señalizar entradas fuera de rango o no verificadas; exigir revisión del tratamiento estatutario. |
| `VAT_Recoverable` | Debe ser un valor booleano explícito coherente con el tratamiento fiscal aplicable. | Señalizar configuraciones fiscales ausentes o incoherentes. |
| `Annual WACC` y tasas locales de endeudamiento | Deben ser tasas válidas coherentes con el cálculo de financiación previsto. | Señalizar tasas inválidas y verificar que se use la tasa correcta para la exposición relevante. |
| Márgenes objetivo y mínimo | Deben estar por debajo del 100% para las fórmulas de precio especificadas. | No calcular un precio engañoso cuando el denominador es cero o negativo. |
| `Order_Units` | Debe ser una cantidad positiva para una cotización válida. | Señalizar cantidades de pedido cero o negativas. |
| `Terms_Days` | Debe ser uno de los valores de condición de pago admitidos: 0, 30, 60 o 90 días, salvo que el modelo se extienda deliberadamente. | Señalizar condiciones no admitidas o derivarlas a una regla definida explícitamente. |
| `Delivery_Method` | Debe coincidir con los valores admitidos, como `Delivered` o `ExWorks`. | Señalizar condiciones de entrega no reconocidas en lugar de asumir una ruta por defecto. |
| `Active_Demand_Qty` | Debe ser coherente con el escenario seleccionado y la entrada de demanda base. | Señalizar valores de escenario ausentes y cantidades de demanda inválidas. |
| MOQ del proveedor y restricciones de caja | Las cantidades de OC sugeridas deben respetar los mínimos aplicables y los múltiplos de embalaje. | Señalizar cantidades que no puedan satisfacer las restricciones de compra del proveedor. |
| Salidas de precio y margen | Deben basarse en claves país/SKU coincidentes y datos de coste válidos. | Señalizar coincidencias ausentes; un cero devuelto por una búsqueda no debe tratarse silenciosamente como un coste verificado. |
| `Net_Effective_Price_USD` | Debe ser positivo antes de los cálculos de margen. | Señalizar precios no positivos y evitar reportar un margen fabricado. |
| Aprobación de descuentos | El descuento real y el margen de contribución deben comprobarse contra los umbrales de política configurados. | Señalizar transacciones por debajo del suelo o que excedan el umbral de aprobación. |
| Modelo financiero | Ingresos, COGS, gastos, EBIT y capital de trabajo deben seguir definiciones coherentes sin asignación duplicada de costes. | Señalizar diferencias de conciliación para su revisión. |
| Salidas de matriz dinámica | Los rangos de derrame deben permanecer sin obstrucción. | Resolver `#SPILL!` eliminando contenido conflictivo o celdas combinadas. |
| Integridad de fórmulas | Las columnas calculadas deben permanecer como fórmulas y extenderse cuando sus tablas de Excel se expandan. | Señalizar fórmulas sobrescritas o filas fuera del rango previsto de tabla. |
| Lista de precios a clientes | Debe excluir costes internos de aprovisionamiento, detalles de aranceles, tarifas de costes operativos y medidas internas de margen. | Revisar la salida exportada orientada a clientes en busca de divulgación interna no intencionada. |

<details>
<summary><strong>Comprobaciones de integridad del modelo</strong></summary>

Antes de confiar en el libro, verifica lo siguiente:

1. Los 29 campos de entrada asumidos identificados en la especificación de implementación tienen un destino definido y una dependencia aguas abajo documentada.
2. Los 24 campos de salida clave tienen una fuente de cálculo definida y una interpretación de negocio clara.
3. Las claves compuestas país/SKU devuelven los registros previstos y no producen coincidencias ambiguas.
4. Las definiciones fiscales, de moneda, de asignación de costes y de margen son coherentes entre los motores de coste y el modelo financiero.
5. Las alertas del cuadro de mando concuerdan con los cálculos subyacentes de precios y aprobación.
6. La cotización orientada a clientes contiene solo la información prevista para distribución externa.
7. El modelo se ha recalculado y comprobado tras cambios materiales en supuestos o datos maestros.

La especificación de implementación describe la verificación cruzada de 29 entradas y 24 salidas como completa. Esa afirmación de diseño documentada debe distinguirse de la verificación independiente de un libro terminado: la integridad real de las fórmulas, la exactitud numérica y el comportamiento operativo requieren pruebas contra el archivo implementado y casos de prueba representativos.

</details>

</details>

</details>


## Lógica de negocio y metodología

El motor trata la distribución transfronteriza como un sistema comercial conectado en lugar de una secuencia de cálculos de recargo aislados. El principio central es evaluar juntas la economía del producto, la transacción con el cliente, la modalidad de entrega y el requisito de financiación.

- **Precios a coste completo:** los costes de importación y los gastos de cumplimiento se evalúan antes de establecer una recomendación de precio de venta. Esto reduce el riesgo de aprobar una transacción que parece rentable frente al coste del proveedor pero que no cubre el coste de servir al cliente.
- **Límites de margen de contribución:** los requisitos de margen objetivo y mínimo crean una distinción entre el resultado comercial preferido y la economía de transacción mínima aceptable. Los límites de descuento y las reglas de aprobación ayudan a hacer explícitas las excepciones.
- **Economía del pedido:** el volumen, las condiciones de pago y las modalidades de entrega se evalúan conjuntamente. Esto hace visible el coste de las concesiones y apoya políticas de pedido mínimo y de entrega que reflejen la economía operativa real.
- **Comparación de escenarios y logística:** los niveles de demanda alternativos y las estructuras de cumplimiento se evalúan frente a sus implicaciones de coste. La comparación resultante ayuda a identificar cuándo la distribución centralizada, el stock local o el envío directo merecen mayor investigación.
- **Análisis de rentabilidad y liquidez:** las P&L por país se consideran junto con inventario, cuentas por cobrar, cuentas por pagar y exposición de financiación. Esto facilita distinguir un plan operativo rentable de uno que puede requerir más capital de trabajo del que el negocio puede financiar.

El resultado comercial es un proceso de decisión repetible: establecer supuestos validados, calcular la economía entregada, aplicar los límites de precios, probar alternativas operativas y revisar las implicaciones resultantes de beneficio y financiación antes de aprobar una decisión.

## Otras herramientas de esta serie

Explora herramientas adicionales ligeras de soporte de decisiones en Excel y navegador en el [perfil de GitHub de HyVoid](https://github.com/HyVoid).

- **Controles de proyectos de construcción:** estima costes, gestiona presupuestos y monitorea la entrega de proyectos.
- **Modelización financiera:** conecta supuestos operativos, estados financieros y decisiones de inversión.
- **Planificación de inventario y capacidad:** evalúa necesidades de reposición y restricciones operativas.

## Licencia

Este proyecto se distribuye bajo la **Licencia Apache 2.0**. Consulta el archivo [`LICENSE`](LICENSE) para conocer los términos completos de la licencia.
