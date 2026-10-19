"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  Mail,
  Calendar,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Barra superior de contacto rápido y credibilidad corporativa (desktop) */}
      <div className="hidden lg:block bg-[#001E5A] text-white text-xs border-b border-white/10 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <ShieldCheck className="w-4 h-4 text-[#46B4F0]" />
              Gestión del Riesgo & Continuidad Operacional en Chile
            </span>
            <span className="text-white/20">|</span>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#46B4F0]" />
              {SITE_CONFIG.contact.email}
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`tel:${SITE_CONFIG.contact.phoneClean}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#46B4F0]" />
              {SITE_CONFIG.contact.phone}
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="text-slate-300">B2B / B2G / PYMES / Agrícola</span>
            <a
              href={SITE_CONFIG.contact.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#46B4F0] hover:text-white font-semibold transition-colors flex items-center gap-1"
            >
              Agendar reunión 30 min
              <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Barra de navegación principal */}
      <div
        className={`w-full transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80"
            : "bg-white border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />

            {/* Menú de navegación Desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {SITE_CONFIG.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold text-slate-700 hover:text-[#01276D] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0A5AA0] hover:after:w-full after:transition-all after:duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Botón CTA Desktop */}
            <div className="hidden md:flex items-center gap-4">
              <Button
                asChild
                variant="cta"
                size="default"
                className="font-bold gap-2 tracking-wide text-white"
              >
                <a
                  href={SITE_CONFIG.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="w-4 h-4" />
                  {SITE_CONFIG.cta.label}
                </a>
              </Button>
            </div>

            {/* Botón menú móvil */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:text-[#01276D] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#0A5AA0] transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Abrir menú de navegación"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-5 pt-4 pb-6 space-y-4">
            <nav className="flex flex-col space-y-2">
              {SITE_CONFIG.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#01276D] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex flex-col gap-2 text-sm text-slate-600 px-3">
                <a
                  href={`tel:${SITE_CONFIG.contact.phoneClean}`}
                  className="flex items-center gap-2 text-slate-700 hover:text-[#01276D]"
                >
                  <Phone className="w-4 h-4 text-[#0A5AA0]" />
                  <span>{SITE_CONFIG.contact.phone}</span>
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-center gap-2 text-slate-700 hover:text-[#01276D]"
                >
                  <Mail className="w-4 h-4 text-[#0A5AA0]" />
                  <span>{SITE_CONFIG.contact.email}</span>
                </a>
              </div>

              <div className="pt-2">
                <Button
                  asChild
                  variant="cta"
                  className="w-full text-center justify-center font-bold"
                  size="lg"
                >
                  <a
                    href={SITE_CONFIG.cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Calendar className="w-4 h-4" />
                    {SITE_CONFIG.cta.label}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

