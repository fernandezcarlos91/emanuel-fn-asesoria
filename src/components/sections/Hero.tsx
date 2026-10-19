import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative py-20 lg:py-28 bg-gradient-to-b from-[#001E5A] via-[#01276D] to-[#001E5A] text-white overflow-hidden scroll-mt-20"
    >
      {/* Patrón sutil de fondo y acentos lumínicos */}
      <div className="absolute inset-0 bg-[radial-gradient(#46B4F0_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute -top-36 -right-36 w-96 h-96 bg-[#46B4F0]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-36 -left-36 w-96 h-96 bg-[#E67E22]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 items-center">
          {/* Columna Izquierda: Título, subtítulo, CTAs y puntos de soporte */}
          <div className="lg:col-span-7 space-y-7 order-1">
            {/* Título principal requerido */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12] text-white">
              Gestión del Riesgo,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#46B4F0] to-[#E67E22]">
                Continuidad Operacional
              </span>{" "}
              y Resiliencia Organizacional
            </h1>

            {/* Subtítulo requerido */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
              Protegemos la continuidad operativa de su organización, el valor de su
              infraestructura y la resiliencia de sus operaciones frente a escenarios
              críticos, emergencias y eventos disruptivos.
            </p>

            {/* Botones de acción (CTAs) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                asChild
                variant="cta"
                size="lg"
                className="gap-2.5 font-bold shadow-lg shadow-[#E67E22]/20 hover:shadow-xl hover:shadow-[#E67E22]/30 text-white bg-[#E67E22] hover:bg-[#D35400] transition-all"
              >
                <Link href="#contacto">
                  <Calendar className="w-5 h-5 shrink-0" />
                  <span>Solicitar Diagnóstico Técnico</span>
                  <ArrowRight className="w-4 h-4 ml-0.5 shrink-0" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/25 hover:border-white/40 backdrop-blur-sm font-semibold transition-all"
              >
                <Link href="#servicios">Ver Portafolio de Servicios</Link>
              </Button>
            </div>

            {/* Puntos clave de soporte */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-white/15 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#46B4F0] shrink-0" />
                <span>Acreditado OS10 & SENAPRED</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#46B4F0] shrink-0" />
                <span>Planes BCP, COOP y PISE</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#46B4F0] shrink-0" />
                <span>Sectores B2B, B2G, SSR y PyMEs</span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Logo completo de Emanuel FN */}
          <div className="lg:col-span-5 flex items-center justify-center order-2 py-4 lg:py-0">
            <div className="relative flex items-center justify-center">
              {/* Halo lumínico sutil que realza el diamante azul y texto blanco */}
              <div className="absolute inset-0 bg-radial from-[#46B4F0]/25 via-[#0A5AA0]/10 to-transparent blur-3xl scale-125 pointer-events-none" />
              <Image
                src="/images/logo-hero.png"
                alt="Emanuel FN Asesoría - Consultor Técnico en Emergencia y Continuidad Operativa"
                width={340}
                height={340}
                className="relative z-10 w-[240px] sm:w-[280px] lg:w-[320px] xl:w-[340px] h-auto object-contain drop-shadow-2xl select-none"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

