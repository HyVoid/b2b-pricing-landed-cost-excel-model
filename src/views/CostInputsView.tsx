import React from 'react';
import { useApp } from '../context/AppContext';
import { InsightBlock } from '../components/InsightBlock';
import { Truck } from 'lucide-react';

export const CostInputsView: React.FC = () => {
  const { state, updateCostInput } = useApp();
  const { costInputs } = state;

  return (
    <div className="space-y-6 animate-fade-up">
      {/* Title */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-serif-heading text-xl font-bold text-[var(--color-primary)]">
            04_Cost Inputs — Operational & Activity Cost Driver Rates (tbl_CostInputs)
          </h2>
          <p className="text-xs text-[var(--color-muted)] mt-0.5">
            Freight tariffs, 3PL warehousing fees, transport linehauls, sales commissions, and credit bad-debt reserves.
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="saas-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="saas-table">
            <thead>
              <tr>
                <th>Country</th>
                <th className="text-right">Ocean Freight (40HQ)</th>
                <th className="text-right">Marine Ins. Rate</th>
                <th className="text-right">WH Rent / Pallet / Mo</th>
                <th className="text-right">Handling / Pallet</th>
                <th className="text-right">Linehaul / Ton·KM</th>
                <th className="text-right">Last-Mile Drop Base</th>
                <th className="text-right">Last-Mile / KG</th>
                <th className="text-right">Sales Comm. %</th>
                <th className="text-right">Bad Debt Res. %</th>
              </tr>
            </thead>
            <tbody>
              {costInputs.map((item) => (
                <tr key={item.countryCode} className="hover:bg-[rgba(34,81,255,0.02)]">
                  <td className="font-mono font-bold text-[var(--color-primary)] text-sm">
                    {item.countryCode}
                  </td>

                  {/* Ocean Freight */}
                  <td className="text-right">
                    <input
                      type="number"
                      step="50"
                      value={item.oceanFreightFeu}
                      onChange={(e) => updateCostInput(item.countryCode, { oceanFreightFeu: parseFloat(e.target.value) || 0 })}
                      className="text-xs p-1 rounded-[4px] editable-cell w-20 text-right font-mono font-bold"
                    />
                  </td>

                  {/* Marine Insurance */}
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.0005"
                      value={item.marineInsuranceRate}
                      onChange={(e) => updateCostInput(item.countryCode, { marineInsuranceRate: parseFloat(e.target.value) || 0 })}
                      className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                    />
                  </td>

                  {/* WH Rent */}
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.5"
                      value={item.warehouseRentPalletMo}
                      onChange={(e) => updateCostInput(item.countryCode, { warehouseRentPalletMo: parseFloat(e.target.value) || 0 })}
                      className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                    />
                  </td>

                  {/* Handling Fee */}
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.2"
                      value={item.handlingFeePallet}
                      onChange={(e) => updateCostInput(item.countryCode, { handlingFeePallet: parseFloat(e.target.value) || 0 })}
                      className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                    />
                  </td>

                  {/* Linehaul */}
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.005"
                      value={item.linehaulPerTonKm}
                      onChange={(e) => updateCostInput(item.countryCode, { linehaulPerTonKm: parseFloat(e.target.value) || 0 })}
                      className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                    />
                  </td>

                  {/* Drop Base */}
                  <td className="text-right">
                    <input
                      type="number"
                      step="1"
                      value={item.lastMileDropBaseFee}
                      onChange={(e) => updateCostInput(item.countryCode, { lastMileDropBaseFee: parseFloat(e.target.value) || 0 })}
                      className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                    />
                  </td>

                  {/* Drop Rate / KG */}
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.01"
                      value={item.lastMileRatePerKg}
                      onChange={(e) => updateCostInput(item.countryCode, { lastMileRatePerKg: parseFloat(e.target.value) || 0 })}
                      className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                    />
                  </td>

                  {/* Sales Commission */}
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.005"
                      value={item.salesCommissionRate}
                      onChange={(e) => updateCostInput(item.countryCode, { salesCommissionRate: parseFloat(e.target.value) || 0 })}
                      className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                    />
                  </td>

                  {/* Bad Debt */}
                  <td className="text-right">
                    <input
                      type="number"
                      step="0.005"
                      value={item.badDebtReserveRate}
                      onChange={(e) => updateCostInput(item.countryCode, { badDebtReserveRate: parseFloat(e.target.value) || 0 })}
                      className="text-xs p-1 rounded-[4px] editable-cell w-16 text-right font-mono"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <InsightBlock title="Cost Allocation Zero-Hardcoding Rule">
        All freight and fulfillment calculations call these structured drivers via dynamic lookups. If container ocean freight spikes (e.g. from $3,200 to $6,500), editing the cell above propagates immediately to all Landed Cost lines and Sensitivity stress matrices.
      </InsightBlock>
    </div>
  );
};
