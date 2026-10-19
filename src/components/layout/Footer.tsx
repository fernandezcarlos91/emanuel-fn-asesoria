import Link from "next/link";
import {
  Mail,
  Phone,
  Calendar,
  ArrowUpRight,
  MapPin,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";

// Componentes de iconos SVG limpios y consistentes para las redes sociales solicitadas
function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.5 1.5 0 0 0 0-3 1.5 1.5 0 0 0 0 3m1.37 9.74v-8.37H5.1v8.37h2.73z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02V8.5l5.75 3.26-5.75 3.26z" />
    </svg>
  );
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.16 1.19 2.07 2.37 2.21 1.06.16 2.18-.21 2.87-.99.55-.57.84-1.35.84-2.14V4.05c0-1.34 0-2.69 0-4.03z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = 2026;

  const socialLinks = [
    {
      name: "LinkedIn",
      href: SITE_CONFIG.social.linkedin,
      icon: LinkedInIcon,
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "Instagram",
      href: SITE_CONFIG.social.instagram,
      icon: InstagramIcon,
      color: "hover:text-[#E4405F]",
    },
    {
      name: "Facebook",
      href: SITE_CONFIG.social.facebook,
      icon: FacebookIcon,
      color: "hover:text-[#1877F2]",
    },
    {
      name: "YouTube",
      href: SITE_CONFIG.social.youtube,
      icon: YouTubeIcon,
      color: "hover:text-[#FF0000]",
    },
    {
      name: "TikTok",
      href: SITE_CONFIG.social.tiktok,
      icon: TikTokIcon,
      color: "hover:text-white",
    },
  ];

  return (
    <footer className="bg-[#001E5A] text-white border-t border-white/10 relative overflow-hidden">
      {/* Detalle visual sutil de fondo */}
      <div className="absolute inset-0 bg-radial from-[#01276D]/40 to-transparent pointer-events-none" />

      {/* Franja superior de llamado a la acción / diagnóstico */}
      <div className="border-b border-white/10 bg-[#01276D]/60 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-[#46B4F0] font-bold">
                Continuidad Operacional & Resiliencia Estratégica
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                ¿Preparado para asegurar la continuidad de su operación?
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Diagnóstico inicial de riesgos operacionales y planes de mitigación
                personalizados para empresas, agroindustria y sector público.
              </p>
            </div>
            <a
              href={SITE_CONFIG.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#E67E22] hover:bg-[#D35400] text-white font-bold text-sm shadow-lg hover:shadow-orange-500/20 transition-all shrink-0 active:scale-95"
            >
              <Calendar className="w-4 h-4" />
              {SITE_CONFIG.cta.label}
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Columna 1: Identidad y propuesta */}
          <div className="lg:col-span-5 space-y-5">
            <Logo variant="dark" />
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Asesoría profesional de alto impacto liderada por{" "}
              <strong className="text-white font-semibold">
                {SITE_CONFIG.fullName}
              </strong>
              . Especialista en matrices de riesgo crítico, planes de
              contingencia BCP/COOP y resiliencia operacional para
              organizaciones en todo Chile.
            </p>

            <div className="flex flex-col gap-2 pt-1 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#46B4F0]" />
                Enfoque B2B, B2G, SSR, PyMEs y Sector Agrícola
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#46B4F0]" />
                {SITE_CONFIG.contact.location}
              </span>
            </div>

            {/* Redes Sociales con los links reales provistos */}
            <div className="pt-3">
              <span className="block text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                Conecta con Emanuel FN en redes
              </span>
              <div className="flex items-center gap-2.5">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Perfil oficial de ${item.name}`}
                      className={`w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 ${item.color} hover:bg-white/10 hover:border-[#46B4F0]/40 transition-all`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Columna 2: Navegación rápida */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SITE_CONFIG.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-[#46B4F0] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-white/30 group-hover:text-[#46B4F0] transition-colors">
                      ›
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
              Canales de Contacto Directo
            </h4>
            <div className="space-y-3.5 text-sm">
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#46B4F0]/40 transition-colors group"
              >
                <div className="p-2 rounded bg-[#01276D] text-[#46B4F0] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Correo Electrónico</span>
                  <span className="text-white font-medium group-hover:text-[#46B4F0] transition-colors">
                    {SITE_CONFIG.contact.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${SITE_CONFIG.contact.phoneClean}`}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#46B4F0]/40 transition-colors group"
              >
                <div className="p-2 rounded bg-[#01276D] text-[#46B4F0] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Teléfono / Móvil</span>
                  <span className="text-white font-medium group-hover:text-[#46B4F0] transition-colors">
                    {SITE_CONFIG.contact.phone}
                  </span>
                </div>
              </a>

              <a
                href={SITE_CONFIG.contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#46B4F0]/40 transition-colors group"
              >
                <div className="p-2 rounded bg-[#01276D] text-[#E67E22] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-400">Reunión de 30 minutos</span>
                  <span className="text-white font-medium group-hover:text-[#E67E22] transition-colors">
                    Agendar por Calendly
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Copyright */}
      <div className="border-t border-white/10 bg-[#001744] py-6 relative z-10 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left">
            © {currentYear} <strong>{SITE_CONFIG.name}</strong>. Todos los
            derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span>{SITE_CONFIG.fullName}</span>
            <span className="text-white/20">•</span>
            <span>Chile</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

