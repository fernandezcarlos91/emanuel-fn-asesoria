import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionPlaceholderProps {
  id: string;
  badge?: string;
  title: string;
  subtitle: string;
  description: string;
  icon?: LucideIcon;
  bgColor?: "white" | "alt" | "primary" | "deep";
  children?: React.ReactNode;
}

export function SectionPlaceholder({
  id,
  badge,
  title,
  subtitle,
  description,
  icon: Icon,
  bgColor = "white",
  children,
}: SectionPlaceholderProps) {
  const bgStyles = {
    white: "bg-white text-slate-900 border-b border-slate-100",
    alt: "bg-slate-50 text-slate-900 border-b border-slate-200/60",
    primary: "bg-[#01276D] text-white border-b border-[#0A5AA0]/30",
    deep: "bg-[#001E5A] text-white border-b border-white/10",
  };

  const isDark = bgColor === "primary" || bgColor === "deep";

  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-24 relative overflow-hidden scroll-mt-20",
        bgStyles[bgColor]
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          {badge && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#46B4F0]/15 text-[#0A5AA0] border border-[#46B4F0]/30">
              {Icon && <Icon className="w-3.5 h-3.5 text-[#0A5AA0]" />}
              <span>{badge}</span>
            </div>
          )}

          <h2
            className={cn(
              "text-3xl sm:text-4xl font-extrabold tracking-tight",
              isDark ? "text-white" : "text-[#01276D]"
            )}
          >
            {title}
          </h2>

          <p
            className={cn(
              "text-lg sm:text-xl font-medium",
              isDark ? "text-[#46B4F0]" : "text-[#0A5AA0]"
            )}
          >
            {subtitle}
          </p>

          <p
            className={cn(
              "text-sm sm:text-base leading-relaxed max-w-2xl",
              isDark ? "text-slate-300" : "text-slate-600"
            )}
          >
            {description}
          </p>

          <div
            className={cn(
              "mt-8 w-full p-8 rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-2",
              isDark
                ? "border-white/20 bg-white/5 text-slate-300"
                : "border-slate-300 bg-white/80 text-slate-500 shadow-sm"
            )}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-[#E67E22]">
              [Sección en desarrollo - Fase 2]
            </span>
            <span className="text-sm font-medium">
              Estructura base lista para inyectar contenido y componentes definitivos.
            </span>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

