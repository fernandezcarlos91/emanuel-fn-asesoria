import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  FileCheck,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CREDENTIAL_BADGES = [
  {
    icon: ShieldCheck,
    label: "Acreditación OS10 (120 hrs)",
  },
  {
    icon: Award,
    label: "Academia SENAPRED (Ley 21.364)",
  },
  {
    icon: CheckCircle2,
    label: "Comando de Incidentes (SCI)",
  },
  {
    icon: FileCheck,
    label: "Continuidad BCP & ISO 22301",
  },
];

export function About() {
  return (
    <section
      id="sobre-mi"
      className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-100 scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Columna Izquierda: Fotografía profesional con marco institucional */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decoración de fondo */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#01276D]/10 via-[#46B4F0]/15 to-[#E67E22]/10 rounded-3xl blur-lg pointer-events-none" />

              {/* Contenedor de la imagen */}
              <div className="relative aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/10 bg-slate-100">
                <Image
                  src="/images/emanuel-perfil.jpg"
                  alt="Emanuel Isaac Fernández Noriega - Capacitación y Asesoría en Gestión del Riesgo"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                  className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Overlay inferior con ficha del consultor */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#001E5A]/95 via-[#001E5A]/70 to-transparent p-5 text-white">
                  <p className="text-sm font-bold tracking-tight text-white">
                    Emanuel Isaac Fernández Noriega
                  </p>
                  <p className="text-xs text-[#46B4F0] font-medium mt-0.5">
                    Consultor Especialista en GRD, Continuidad Operacional y Capacitación
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Contenido y Perfil */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            {/* Tag superior */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#46B4F0]/15 text-[#0A5AA0] border border-[#46B4F0]/30">
              <UserCheck className="w-3.5 h-3.5 text-[#0A5AA0]" />
              <span>Perfil Profesional & Consultoría</span>
            </div>

            {/* Título requerido */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#01276D] tracking-tight leading-tight">
              Consultoría Especializada en Gestión del Riesgo y Resiliencia Operacional
            </h2>

            {/* Párrafos de contenido requeridos */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                Emanuel FN Asesoría es una firma de consultoría estratégica y
                capacitación operacional dedicada a fortalecer la resiliencia de
                instituciones públicas, empresas privadas, la industria agrícola y
                establecimientos educacionales.
              </p>

              <p>
                Liderada por{" "}
                <strong className="text-slate-900 font-semibold">
                  Emanuel Isaac Fernández Noriega
                </strong>
                , profesional de la administración pública y especialista en
                Gestión del Riesgo de Desastres (GRD), la consultora integra una
                visión técnica e integral que abarca desde la auditoría de
                cumplimiento normativo (Ley 21.364 / Ley 20.998), la integración
                tecnológica en televigilancia y monitoreo, hasta el despliegue de
                planes de continuidad operacional (BCP / COOP) y la capacitación
                técnica para equipos bajo presión.
              </p>

              <p>
                Respaldados por certificaciones oficiales de la Academia
                SENAPRED, acreditación OS10 y una trayectoria comprobada en
                coordinación de emergencias y supervisión operacional
                multirregional, entregamos soluciones realistas, fundamentadas y
                alineadas con los más altos estándares legales e internacionales.
              </p>
            </div>

            {/* Badges pequeños requeridos */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                Acreditaciones y Estándares de Aplicación:
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {CREDENTIAL_BADGES.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-50 text-[#01276D] border border-slate-200/90 shadow-2xs hover:bg-slate-100 transition-colors"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#0A5AA0] shrink-0" />
                      <span>{badge.label}</span>
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Acciones de contacto rápido */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Button
                asChild
                variant="cta"
                size="default"
                className="bg-[#E67E22] hover:bg-[#D35400] text-white font-bold"
              >
                <Link href="#contacto" className="gap-2">
                  <span>Coordinar Evaluación</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="default"
                className="text-[#01276D] border-slate-300 hover:bg-slate-50 font-semibold"
              >
                <Link href="#servicios">Explorar Servicios</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

