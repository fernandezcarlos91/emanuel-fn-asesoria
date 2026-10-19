import Link from "next/link";
import {
  ShieldAlert,
  Activity,
  Cpu,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  FileCheck2,
  Droplets,
} from "lucide-react";

interface CorporateServiceItem {
  id: string;
  icon: typeof ShieldAlert;
  tag: string;
  title: string;
  description: string;
  points: string[];
  highlight?: string;
}

const CORPORATE_SERVICES: CorporateServiceItem[] = [
  {
    id: "continuidad-operacional",
    icon: Activity,
    tag: "BCP / COOP",
    title: "Continuidad Operacional y Gestión de Crisis (BCP / COOP)",
    description:
      "Desarrollo e implementación de Planes de Contingencia y Continuidad del Negocio para asegurar la operatividad ante emergencias, catástrofes o fallas críticas. Acompañamiento en el ciclo completo: Prevención, Respuesta y Recuperación.",
    highlight: "Prevención, Respuesta y Recuperación Operacional",
    points: [
      "Planes de Contingencia y Continuidad del Negocio ante fallas críticas",
      "Análisis de Impacto en el Negocio (BIA) y estimación de RTO y RPO",
      "Protocolos de respuesta inmediata para infraestructura crítica",
      "Acompañamiento en el ciclo completo: Prevención, Respuesta y Recuperación",
    ],
  },
  {
    id: "servicios-sanitarios-rurales",
    icon: Droplets,
    tag: "Ley N° 20.998 - SSR",
    title: "Servicios Sanitarios Rurales (SSR / ex APR)",
    description:
      "Planes de Continuidad Operacional para el suministro de agua potable (Ley N° 20.998), con protocolos de respuesta inmediata ante cortes de energía, sequía, contaminación o fallas en la matriz.",
    highlight: "Continuidad del suministro de agua potable rural",
    points: [
      "Planes de Continuidad Operacional para comités y cooperativas SSR (Ley N° 20.998)",
      "Protocolos de respuesta inmediata ante cortes de energía eléctrica",
      "Mitigación y contingencia ante sequía, contaminación o fallas en la matriz",
      "Respaldo energético y redundancia operativa en sistemas de bombeo",
    ],
  },
  {
    id: "planes-emergencia-normativos",
    icon: ShieldAlert,
    tag: "Ley N° 21.364 - SENAPRED",
    title: "Planes de Emergencia Normativos y Gestión del Riesgo",
    description:
      "Elaboración de Planes Comunales de Emergencia y Anexos por Amenaza (Ley N° 21.364 - SENAPRED) para municipios. Desarrollo del Plan Integral de Seguridad Escolar (PISE) y Planes de Emergencia y Evacuación para condominios, parcelaciones y PyMEs.",
    highlight: "Cumplimiento normativo SINAPRED y PISE",
    points: [
      "Planes Comunales de Emergencia y Anexos por Amenaza (Ley N° 21.364 - SENAPRED)",
      "Diseño y actualización del Plan Integral de Seguridad Escolar (PISE)",
      "Planes de Emergencia y Evacuación para condominios, parcelaciones y PyMEs",
      "Mapas de amenazas, vías de evacuación y coordinación con primeros respondedores",
    ],
  },
  {
    id: "integracion-tecnologica",
    icon: Cpu,
    tag: "Consultoría Neutral",
    title: "Consultoría e Integración Tecnológica Independiente",
    description:
      "Consultoría neutral, inspección técnica y diseño de proyectos tecnológicos clave, incluyendo videovigilancia IP con analítica e Inteligencia Artificial, centrales de televigilancia, sensores de alerta temprana, radiocomunicaciones y redundancia energética (UPS/Generadores).",
    highlight: "Diseño técnico independiente de marcas y proveedores",
    points: [
      "Videovigilancia IP con analítica avanzada e Inteligencia Artificial",
      "Diseño e inspección técnica de centrales de televigilancia y salas de monitoreo",
      "Sensores de alerta temprana y redes de radiocomunicaciones críticas",
      "Redundancia energética y respaldo crítico (UPS y grupos generadores)",
    ],
  },
  {
    id: "capacitacion-tecnica",
    icon: Users,
    tag: "Entrenamiento & Docencia",
    title: "Capacitación y Formación Técnica",
    description:
      "Programas de capacitación, talleres, docencia y simulacros prácticos para desarrollar competencias en la toma de decisiones críticas ante emergencias, dirigidos a equipos operativos, directivos, funcionarios públicos, docentes, comunidades y primeros respondedores.",
    highlight: "Metodología Sistema de Comando de Incidentes (SCI)",
    points: [
      "Talleres prácticos y docencia en toma de decisiones críticas ante emergencias",
      "Metodología del Sistema de Comando de Incidentes (SCI) para liderazgo operacional",
      "Programas para directivos, funcionarios públicos y personal operativo",
      "Simulacros y formación técnica para docentes, comunidades y primeros respondedores",
    ],
  },
];

export function CorporateServices() {
  return (
    <section
      id="servicios"
      className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-b border-slate-200/80 scroll-mt-20 relative overflow-hidden"
    >
      {/* Patrón sutil de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(#01276D_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de la Sección */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#46B4F0]/15 text-[#0A5AA0] border border-[#46B4F0]/30 shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-[#0A5AA0]" />
            <span>Servicios Oficiales de Consultoría</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#01276D] tracking-tight">
            Servicios Especializados de Consultoría y Continuidad
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Soluciones normativas, técnicas y estratégicas para Municipios, Organismos Públicos,
            Servicios Sanitarios Rurales, Establecimientos Educacionales y Empresas
          </p>
        </div>

        {/* Grid de servicios: 3 columnas en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
          {CORPORATE_SERVICES.map((service, index) => {
            const Icon = service.icon;
            const isWideCard = index === 4;

            return (
              <div
                key={service.id}
                className={`group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#46B4F0]/60 transition-all duration-300 flex flex-col justify-between ${
                  isWideCard ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Acento sutil en el borde superior al hacer hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#01276D] via-[#0A5AA0] to-[#46B4F0] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Encabezado de la Card: Icono y Tag */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#01276D]/5 text-[#0A5AA0] flex items-center justify-center border border-[#01276D]/10 group-hover:bg-[#01276D] group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#E67E22] bg-[#E67E22]/10 px-2.5 py-1 rounded-md border border-[#E67E22]/20">
                      {service.tag}
                    </span>
                  </div>

                  {/* Título de la Card */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#01276D] group-hover:text-[#0A5AA0] transition-colors leading-snug mb-3">
                    {service.title}
                  </h3>

                  {/* Descripción Oficial Requerida */}
                  <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed mb-4 bg-slate-50/80 p-3 rounded-lg border border-slate-100">
                    {service.description}
                  </p>

                  {/* Lista de Puntos */}
                  <ul className="space-y-2.5 mb-6">
                    {service.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#46B4F0] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer de la Card: Enlace de acción contextual */}
                <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between text-xs font-semibold text-[#0A5AA0] group-hover:text-[#01276D]">
                  <Link
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 hover:underline"
                  >
                    <span>Consultar por este servicio</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                  {service.highlight && (
                    <span className="hidden sm:inline-block text-[11px] text-slate-500 font-normal">
                      {service.highlight}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Inferior de Respaldo B2G / Mercado Público */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#001E5A] to-[#01276D] text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#46B4F0]">
              <FileCheck2 className="w-4 h-4" />
              <span>Compras Públicas & Mercado Público</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              ¿Requiere asesoría técnica para licitaciones o convenios marco?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Apoyamos en la elaboración de Términos de Referencia (TDR), bases
              técnicas operacionales y tecnológicas, y evaluación de ofertas en Mercado Público y
              Compra Ágil.
            </p>
          </div>

          <Link
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E67E22] hover:bg-[#D35400] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all"
          >
            <span>Contactar Asesoría</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
