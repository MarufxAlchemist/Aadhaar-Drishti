import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  RefreshCw,
  Activity,
  AlertTriangle,
  BarChart3,
  FileText,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect } from "react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "overview", label: "Overview", icon: LayoutDashboard },
  { id: "enrolment", label: "Enrolment Analysis", icon: Users },
  { id: "updates", label: "Update Behaviour Analysis", icon: RefreshCw },
  { id: "signals", label: "Societal Signals", icon: Activity },
  { id: "anomalies", label: "Anomaly Detection", icon: AlertTriangle },
  { id: "insights", label: "Visual Insights", icon: BarChart3 },
  { id: "methodology", label: "Methodology & Transparency", icon: FileText },
];

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  collapsed: boolean;
  onCollapsedChange: (collapsed: boolean) => void;
  mobileOpen?: boolean;
  onMobileOpenChange?: (open: boolean) => void;
}

export function Sidebar({
  activeSection,
  onSectionChange,
  collapsed,
  onCollapsedChange,
  mobileOpen = false,
  onMobileOpenChange,
}: SidebarProps) {
  const isMobile = useIsMobile();

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobile && mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobile, mobileOpen]);

  const sidebarContent = (
    <aside
      className={cn(
        "h-screen bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col",
        isMobile ? "w-64 fixed left-0 top-0 z-50" : "fixed left-0 top-0 z-50",
        !isMobile && (collapsed ? "w-16" : "w-64"),
        isMobile && !mobileOpen && "-translate-x-full"
      )}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-sidebar-accent/10 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="p-4 border-b border-sidebar-border relative z-10">
        <div className={cn("flex items-center gap-3", collapsed && !isMobile && "justify-center")}>
          <div className="w-8 h-8 flex items-center justify-center">
            <img
              src="/compass-icon.png"
              alt="Aadhaar Compass"
              className="w-8 h-8 drop-shadow-lg"
            />
          </div>
          {(!collapsed || isMobile) && (
            <div className="flex flex-col flex-1">
              <span className="text-sidebar-foreground font-bold text-sm leading-tight">
                Aadhaar Insights
              </span>
              <span className="text-sidebar-foreground/60 text-xs">Engine v1.0</span>
            </div>
          )}
          {isMobile && (
            <button
              onClick={() => onMobileOpenChange?.(false)}
              className="p-2 hover:bg-sidebar-accent/50 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-sidebar-foreground" />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto relative z-10">
        <ul className="space-y-1 px-2">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <li key={item.id} style={{ animationDelay: `${index * 50}ms` }} className="animate-fade-in">
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-lg shadow-sidebar-accent/20"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground hover:translate-x-1"
                  )}
                  title={collapsed && !isMobile ? item.label : undefined}
                >
                  <Icon className={cn("w-5 h-5 flex-shrink-0", isActive && "drop-shadow-md")} />
                  {(!collapsed || isMobile) && <span>{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Developer Credit */}
      {(!collapsed || isMobile) && (
        <div className="px-4 py-3 border-t border-sidebar-border relative z-10">
          <p className="text-xs text-sidebar-foreground/50 text-center">
            Developed by <span className="font-semibold text-sidebar-foreground/70">Maruf Nadaf</span>
          </p>
        </div>
      )}

      {/* Collapse Toggle - Desktop only */}
      {!isMobile && (
        <div className="p-2 border-t border-sidebar-border relative z-10">
          <button
            onClick={() => onCollapsedChange(!collapsed)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 transition-all duration-200"
          >
            {collapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <>
                <ChevronLeft className="w-4 h-4" />
                <span className="text-xs font-medium">Collapse</span>
              </>
            )}
          </button>
        </div>
      )}
    </aside>
  );

  return (
    <>
      {sidebarContent}
      {/* Backdrop overlay for mobile */}
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => onMobileOpenChange?.(false)}
          aria-label="Close menu"
        />
      )}
    </>
  );
}
