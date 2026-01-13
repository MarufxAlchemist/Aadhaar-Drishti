import { KPICard } from "@/components/dashboard/KPICard";
import { UFITrendChart } from "@/components/dashboard/UFITrendChart";
import { StateHeatmap } from "@/components/dashboard/StateHeatmap";
import { GapAnalysisChart } from "@/components/dashboard/GapAnalysisChart";
import { AnomalyAlerts } from "@/components/dashboard/AnomalyAlerts";
import { LifeEventSignals } from "@/components/dashboard/LifeEventSignals";
import { FilterState } from "@/components/filters/GlobalFilters";
import { calculateFilteredMetrics, formatNumber } from "@/utils/filterUtils";
import { useMemo } from "react";

interface OverviewSectionProps {
  filters?: FilterState;
}

export function OverviewSection({ filters }: OverviewSectionProps) {
  // Calculate metrics based on filters
  const metrics = useMemo(() => calculateFilteredMetrics(filters), [filters]);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Decision Context Banner */}
      <div className="border-l-4 border-blue-600 bg-blue-50 p-4 rounded-r">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong className="text-gray-900">Decision Context:</strong> This dashboard identifies regions and periods exhibiting unusual update activity patterns relative to enrolment trends, supporting administrative resource allocation and process review. Metrics are presented as comparative indicators, not performance judgments.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <KPICard
          title="Total Enrolments"
          value={formatNumber(metrics.totalEnrolments)}
          trend="up"
          trendValue={metrics.enrolmentTrend}
          subtitle="vs previous year"
          tooltip="Total new Aadhaar registrations during the selected period. Growth indicates expanding coverage in previously underserved demographics."
          interpretation="Reflects cumulative coverage across all states and union territories"
        />
        <KPICard
          title="Total Updates"
          value={formatNumber(metrics.totalUpdates)}
          trend="up"
          trendValue={metrics.updatesTrend}
          subtitle="vs previous year"
          tooltip="Total demographic, biometric, and contact updates processed. Higher update volume reflects active platform engagement."
          interpretation="Indicates ongoing demographic maintenance activity"
        />
        <KPICard
          title="Update Friction Index"
          value={metrics.updateFrictionIndex.toString()}
          trend="down"
          trendValue={metrics.ufiTrend}
          subtitle="national average"
          tooltip="Ratio measuring update complexity. Values above 1.0 suggest users require multiple visits or attempts to complete updates, indicating potential administrative friction."
          interpretation="Suggests relative ease of completing update transactions"
        />
        <KPICard
          title="Enrolment-Update Gap"
          value={formatNumber(metrics.enrolmentUpdateGap)}
          trend="neutral"
          trendValue={metrics.gapTrend}
          subtitle="net difference"
          tooltip="Difference between enrolments and updates. Negative values indicate a mature system where updates outpace new registrations, typical for high-saturation regions."
          interpretation="Highlights potential service delivery considerations"
        />
      </div>

      {/* Observed Signal Card */}
      <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-5">
        <div className="flex items-start gap-3">
          <svg className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2 text-sm">
              Observed Signal (Illustrative)
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              States with higher enrolment density show proportionally lower update friction indices, suggesting potential correlation with service infrastructure maturity. This pattern warrants administrative review but does not establish causation or predict outcomes.
            </p>
          </div>
        </div>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <UFITrendChart />
        <StateHeatmap selectedState={filters?.state} />
      </div>

      {/* Gap Analysis */}
      <GapAnalysisChart />

      {/* Signals and Anomalies */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LifeEventSignals />
        <AnomalyAlerts />
      </div>
    </div>
  );
}
