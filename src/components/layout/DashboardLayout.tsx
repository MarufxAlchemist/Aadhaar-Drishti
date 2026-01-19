import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { cn } from "@/lib/utils";
import { FilterState } from "@/components/filters/GlobalFilters";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  onSectionChange: (section: string) => void;
  onFilterChange?: (filters: FilterState) => void;
}

const sectionTitles: Record<string, { title: string; subtitle: string }> = {
  overview: {
    title: "Aadhaar Drishti",
    subtitle: "Societal Signals from Enrolment and Update Data",
  },
  enrolment: {
    title: "Enrolment Analysis",
    subtitle: "Tracking new Aadhaar registrations across demographics and regions",
  },
  updates: {
    title: "Update Behaviour Analysis",
    subtitle: "Understanding patterns in demographic and biometric update requests",
  },
  signals: {
    title: "Societal Signals",
    subtitle: "Detecting life events and migration patterns through data clusters",
  },
  anomalies: {
    title: "Anomaly Detection",
    subtitle: "Early warning system for unusual activity patterns",
  },
  insights: {
    title: "Visual Insights",
    subtitle: "Export-ready charts and infographics for reports",
  },
  methodology: {
    title: "Methodology & Transparency",
    subtitle: "Data sources, processing methods, and analytical framework",
  },
};

export function DashboardLayout({
  children,
  activeSection,
  onSectionChange,
  onFilterChange,
}: DashboardLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  const { title, subtitle } = sectionTitles[activeSection] || sectionTitles.overview;

  const handleSectionChange = (section: string) => {
    onSectionChange(section);
    // Auto-close drawer on mobile when navigation item is clicked
    if (isMobile) {
      setMobileDrawerOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        collapsed={sidebarCollapsed}
        onCollapsedChange={setSidebarCollapsed}
        mobileOpen={mobileDrawerOpen}
        onMobileOpenChange={setMobileDrawerOpen}
      />
      <main
        className={cn(
          "transition-all duration-300",
          isMobile ? "ml-0" : sidebarCollapsed ? "ml-16" : "ml-64"
        )}
      >
        <Header
          title={title}
          subtitle={subtitle}
          onFilterChange={onFilterChange}
          onMenuClick={() => setMobileDrawerOpen(true)}
        />
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
