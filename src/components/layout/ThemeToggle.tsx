import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className={cn(
                "relative inline-flex h-8 w-14 items-center rounded-full transition-colors duration-300",
                isDark ? "bg-primary" : "bg-muted"
            )}
            aria-label="Toggle theme"
        >
            <span
                className={cn(
                    "inline-flex h-6 w-6 items-center justify-center rounded-full bg-card shadow-lg transition-transform duration-300",
                    isDark ? "translate-x-7" : "translate-x-1"
                )}
            >
                {isDark ? (
                    <Moon className="h-3.5 w-3.5 text-primary" />
                ) : (
                    <Sun className="h-3.5 w-3.5 text-accent" />
                )}
            </span>
        </button>
    );
}
