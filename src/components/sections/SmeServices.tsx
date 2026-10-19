import Link from "next/link";
import {
  Droplets,
  Store,
  Home,
  CheckCircle2,
  ArrowRight,
  Activity,
  Layers,
  MapPin,
} from "lucide-react";

interface SmeServiceItem {
  id: string;
  icon: typeof Droplets;
  tag: string;
  title: string;
  description: string;
  points: string[];
  focus: string;
}

const SME_SERVICES: SmeServiceItem[] = [
  {
    id: "ssr-agricola",
    icon: Droplets,
    tag: "Ley N° 20.998 • SSR & Agro",
    title: "Servicios Sanitarios Rurales (SSR / ex APR) y Sector Agrícola",
    focus: "Continuidad del suministro de agua potable y faena rural",
    description:
      "Planes de Continuidad Operacional para el suministro de agua potable (Ley N° 20.998), con protocolos de respuesta inmediata ante cortes de energía, sequía, contaminación o fallas en la matriz.",
    points: [
      "Planes de Continuidad Operacional para comités y cooperativas de agua potable (Ley N° 20.998)",
      "Protocolos de respuesta inmediata ante cortes de energía, sequía o fallas en la matriz",
      "Planes de contingencia ante incendios forestales y eventos climáticos extremos en predios",
    ],
  },
  {
    id: "pymes-comercio",
    icon: Store,
    tag: "Comercio & Pequeña Empresa",
    title: "Continuidad Operacional y Gestión de Crisis para PyMEs",
    focus: "Mitigación de riesgos operacionales y protección de procesos",
    description:
      "Desarrollo e implementación de Planes de Contingencia y Continuidad del Negocio para asegurar la operatividad ante emergencias, catástrofes o fallas críticas.",
    points: [
      "Planes de Emergencia y Evacuación adaptados a locales comerciales y oficinas",
      "Auditoría de Vulnerabilidad Operacional y Continuidad del Negocio",
      "Capacitación práctica para equipos de trabajo en toma de decisiones ante crisis",
    ],
  },
  {
    id: "particulares-comunidades",
    icon: Home,
    tag: "Condominios & Parcelaciones",
    title: "Planes de Emergencia Normativos y Evacuación para Comunidades",
    focus: "Organización comunitaria y protocolos de respuesta ante emergencias",
    description:
      "Desarrollo de Planes de Emergencia y Evacuación para condominios, parcelaciones y loteos residenciales, con organización vecinal y sensores de alerta temprana.",
    points: [
      "Planes de Emergencia y Evacuación para condominios, loteos y parcelaciones",
      "Consultoría técnica e integración en televigilancia comunitaria, sensores y alertas",
      "Simulacros prácticos y organización comunitaria ante sismos e incendios",
    ],
  },
];

export function SmeServices() {
  return (
    <section
      id="sectores"
      className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-b border-slate-200/80 scroll-mt-20 relative overflow-hidden"
    >
      {/* Patrón sutil de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(#0A5AA0_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera de la Sección */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#E67E22]/15 text-[#D35400] border border-[#E67E22]/30 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#E67E22]" />
            <span>Sectores Productivos & Comunidad</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#01276D] tracking-tight">
            Servicios para SSR, Sector Agrícola, PyMEs y Comunidades
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Soluciones adaptadas a la realidad operativa de los Servicios Sanitarios Rurales (SSR),
            la agroindustria, el comercio local y los condominios residenciales
          </p>
        </div>

        {/* Grid de 3 Cards en Desktop, 1 Columna en Móvil */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16">
          {SME_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#46B4F0]/60 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Acento sutil en el borde superior al hacer hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#01276D] via-[#46B4F0] to-[#E67E22] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Encabezado de la Card: Icono y Tag */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#01276D]/5 text-[#0A5AA0] flex items-center justify-center border border-[#01276D]/10 group-hover:bg-[#01276D] group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#01276D] bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">
                      {service.tag}
                    </span>
                  </div>

                  {/* Título de la Card */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#01276D] group-hover:text-[#0A5AA0] transition-colors leading-snug mb-3">
                    {service.title}
                  </h3>

                  {/* Foco principal */}
                  <p className="text-xs text-[#0A5AA0] font-medium mb-3 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 shrink-0" />
                    <span>{service.focus}</span>
                  </p>

                  {/* Descripción requerida */}
                  <p className="text-xs text-slate-600 font-normal leading-relaxed mb-4 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    {service.description}
                  </p>

                  {/* Lista de Puntos */}
                  <ul className="space-y-3 mb-6">
                    {service.points.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0A5AA0] shrink-0 mt-0.5" />
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
                    <span>Solicitar asesoría en esta área</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Respaldo de Cobertura Territorial */}
        <div className="mt-12 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#46B4F0]/15 text-[#0A5AA0] flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#0A5AA0]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#01276D]">
                Cobertura en Terreno y Asesoría Remota a Nivel Nacional
              </p>
              <p className="text-xs text-slate-500">
                Inspecciones operacionales en sistemas SSR, predios agrícolas, centros de distribución, locales comerciales y comunidades residenciales.
              </p>
            </div>
          </div>

          <Link
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-2 text-xs font-bold text-[#E67E22] hover:text-[#D35400] transition-colors"
          >
            <span>Coordinar visita técnica</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
