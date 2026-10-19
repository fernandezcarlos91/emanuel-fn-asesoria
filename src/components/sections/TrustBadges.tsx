import { ShieldCheck, Award, MapPin } from "lucide-react";

interface TrustItem {
  icon: typeof ShieldCheck;
  category: string;
  title: string;
  detail: string;
}

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: ShieldCheck,
    category: "Acreditación Oficial",
    title: "Acreditación OS10 (120 hrs) • Gestión Operativa y Control de Emergencias",
    detail: "Carabineros de Chile • Gestión Operativa y Coordinación de Incidentes",
  },
  {
    icon: Award,
    category: "Certificación Estatal",
    title: "Certificación Oficial Academia SENAPRED (Ley 21.364 / SINAPRED / PISE / SCI)",
    detail: "Gestión del Riesgo de Desastres y Sistema de Comando de Incidentes",
  },
  {
    icon: MapPin,
    category: "Despliegue Técnico",
    title: "Licencias Profesionales y Cobertura Multirregional",
    detail: "Inspecciones en terreno y asesoría estratégica en todo el territorio nacional",
  },
];

export function TrustBadges() {
  return (
    <section
      aria-label="Acreditaciones y Confianza"
      className="relative z-20 bg-slate-50 border-b border-slate-200/80 py-8 lg:py-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-xl bg-white border border-slate-200/70 shadow-sm hover:shadow-md hover:border-[#46B4F0]/40 transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-[#01276D]/5 text-[#01276D] flex items-center justify-center shrink-0 border border-[#01276D]/10">
                  <Icon className="w-6 h-6 text-[#0A5AA0]" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#E67E22] block">
                    {item.category}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-[#01276D] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

