import { GlobalFilters, FilterState } from "@/components/filters/GlobalFilters";
import { ThemeToggle } from "./ThemeToggle";
// Header component with branding and theme toggle
import { Menu } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  title: string;
  subtitle?: string;
  onFilterChange?: (filters: FilterState) => void;
  onMenuClick?: () => void;
}

export function Header({ title, subtitle, onFilterChange, onMenuClick }: HeaderProps) {
  const isMobile = useIsMobile();

  return (
    <header className="bg-card/95 border-b border-border backdrop-blur-md">
      <div className="px-4 md:px-6 py-4 md:py-5 border-b border-border/50 bg-gradient-to-r from-card to-muted/20">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {isMobile && (
              <button
                onClick={onMenuClick}
                className="p-2 hover:bg-accent/10 rounded-lg transition-colors flex-shrink-0"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-foreground" />
              </button>
            )}
            <img
              src="/aadhaar-logo.png"
              alt="Aadhaar Drishti"
              className="h-10 md:h-12 w-auto drop-shadow-lg flex-shrink-0"
            />
            <div className="min-w-0">
              <h1 className="text-lg md:text-2xl font-bold text-foreground gradient-text truncate">{title}</h1>
              {subtitle && (
                <p className="text-xs md:text-sm text-muted-foreground mt-1 line-clamp-1">{subtitle}</p>
              )}
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
      <GlobalFilters onFilterChange={onFilterChange} />
    </header>
  );
}
