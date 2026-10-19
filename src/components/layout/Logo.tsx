import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export function Logo({
  className,
  variant = "light",
  showTagline = true,
}: LogoProps) {
  const isLight = variant === "light";
  const logoSrc = isLight ? "/images/logo.png" : "/images/logo-hero.png";

  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-3 sm:gap-3.5 group select-none transition-transform hover:scale-[1.01] shrink-0",
        className
      )}
      aria-label="Emanuel FN Asesoría - Inicio"
    >
      {/* Contenedor del Logo con tamaño visible y destacado (48-56px) */}
      <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 flex items-center justify-center">
        <Image
          src={logoSrc}
          alt="Emanuel FN Asesoría"
          width={56}
          height={56}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Identidad tipográfica legible y bien alineada */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 sm:gap-2 leading-none">
          <span
            className={cn(
              "text-lg sm:text-xl md:text-2xl font-black tracking-tight font-sans transition-colors",
              isLight ? "text-[#01276D] group-hover:text-[#0A5AA0]" : "text-white"
            )}
          >
            EMANUEL FN
          </span>
          <span
            className={cn(
              "text-[10px] sm:text-[11px] font-bold px-1.5 py-0.5 rounded border tracking-wide uppercase",
              isLight
                ? "bg-[#0A5AA0]/10 text-[#0A5AA0] border-[#0A5AA0]/25"
                : "bg-[#46B4F0]/20 text-[#46B4F0] border-[#46B4F0]/35"
            )}
          >
            ASESORÍA
          </span>
        </div>
        {showTagline && (
          <span
            className={cn(
              "text-[10px] sm:text-[11px] font-medium tracking-wider uppercase mt-1 leading-tight",
              isLight ? "text-slate-500" : "text-slate-300"
            )}
          >
            Gestión del Riesgo & Continuidad
          </span>
        )}
      </div>
    </Link>
  );
}

