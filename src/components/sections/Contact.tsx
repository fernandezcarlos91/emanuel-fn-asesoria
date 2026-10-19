"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Mail,
  Phone,
  Calendar,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  MessageCircle,
  ShieldCheck,
  Building,
  User,
  Clock,
  Sparkles,
  Lock,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  YouTubeIcon,
  TikTokIcon,
} from "@/components/ui/SocialIcons";

// Esquema de validación con Zod para el formulario de contacto
const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Ingrese su nombre completo (mínimo 2 caracteres)" }),
  email: z
    .string()
    .min(1, { message: "El correo corporativo es requerido" })
    .email({ message: "Ingrese un correo corporativo válido" }),
  phone: z
    .string()
    .min(8, { message: "Ingrese un teléfono de contacto válido (mínimo 8 dígitos)" }),
  organization: z
    .string()
    .min(2, { message: "Ingrese el nombre de su empresa o institución" }),
  requirementType: z.enum(
    [
      "Continuidad Operacional y Gestión de Crisis (BCP / COOP)",
      "Servicios Sanitarios Rurales (SSR / ex APR)",
      "Planes de Emergencia Normativos y PISE",
      "Consultoría e Integración Tecnológica Independiente",
      "Capacitación y Formación Técnica",
      "Otro requerimiento",
    ],
    {
      message: "Por favor seleccione un tipo de requerimiento",
    }
  ),
  message: z
    .string()
    .min(10, { message: "Por favor detalle su requerimiento (mínimo 10 caracteres)" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const REQUIREMENT_OPTIONS = [
  "Continuidad Operacional y Gestión de Crisis (BCP / COOP)",
  "Servicios Sanitarios Rurales (SSR / ex APR)",
  "Planes de Emergencia Normativos y PISE",
  "Consultoría e Integración Tecnológica Independiente",
  "Capacitación y Formación Técnica",
  "Otro requerimiento",
] as const;

export function Contact() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [submittedData, setSubmittedData] = React.useState<ContactFormData | null>(null);
  const [submitError, setSubmitError] = React.useState<string | null>(null);

  // Integración del widget embebido de Calendly mediante useEffect
  React.useEffect(() => {
    // Inyección de estilos de Calendly para consistencia visual
    const cssUrl = "https://assets.calendly.com/assets/external/widget.css";
    if (!document.querySelector(`link[href="${cssUrl}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = cssUrl;
      document.head.appendChild(link);
    }

    // Inyección del script oficial del widget de Calendly
    const scriptUrl = "https://assets.calendly.com/assets/external/widget.js";
    let script = document.querySelector(`script[src="${scriptUrl}"]`) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Si el script ya existe en el DOM (ej. tras navegación cliente), reinicializar widgets
      const calendlyGlobal = (
        window as unknown as { Calendly?: { initInlineWidgets?: () => void } }
      ).Calendly;
      if (calendlyGlobal?.initInlineWidgets) {
        calendlyGlobal.initInlineWidgets();
      }
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      requirementType: undefined,
      message: "",
    },
  });

  // Envío del formulario oficial a Web3Forms (POST https://api.web3forms.com/submit)
  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    try {
      const payload = {
        access_key: accessKey || "",
        subject: "Nuevo requerimiento desde la web - Emanuel FN Asesoría",
        from_name: "Web Emanuel FN Asesoría",
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        organization: data.organization,
        requirementType: data.requirementType,
        message: data.message,
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmittedData(data);
        setIsSubmitted(true);
      } else {
        setSubmitError(
          result.message ||
            "Ocurrió un error al enviar el requerimiento. Por favor intente nuevamente o contáctenos directamente."
        );
      }
    } catch (error) {
      console.error("Error al enviar formulario a Web3Forms:", error);
      setSubmitError(
        "Hubo un inconveniente de conexión al procesar el envío. Puede escribirnos directamente a emanuelfnasesoria@gmail.com o vía WhatsApp."
      );
    }
  };

  const handleResetForm = () => {
    reset();
    setIsSubmitted(false);
    setSubmittedData(null);
    setSubmitError(null);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: SITE_CONFIG.social.linkedin,
      icon: LinkedInIcon,
      hoverClass: "hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
    },
    {
      name: "Instagram",
      href: SITE_CONFIG.social.instagram,
      icon: InstagramIcon,
      hoverClass: "hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F]",
    },
    {
      name: "Facebook",
      href: SITE_CONFIG.social.facebook,
      icon: FacebookIcon,
      hoverClass: "hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]",
    },
    {
      name: "YouTube",
      href: SITE_CONFIG.social.youtube,
      icon: YouTubeIcon,
      hoverClass: "hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]",
    },
    {
      name: "TikTok",
      href: SITE_CONFIG.social.tiktok,
      icon: TikTokIcon,
      hoverClass: "hover:bg-slate-900 hover:text-white hover:border-slate-900",
    },
  ];

  return (
    <section
      id="contacto"
      className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-b border-slate-200/80 scroll-mt-20 relative overflow-hidden"
    >
      {/* Fondo con diseño institucional sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(#01276D_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#46B4F0]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E67E22]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Cabecera Principal */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-[#E67E22]/10 text-[#D35400] border border-[#E67E22]/30 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E67E22]" />
            <span>Punto de Contacto & Coordinación</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#01276D] tracking-tight">
            Iniciemos la Protección y Resiliencia de su Organización
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Solicite una evaluación técnica personalizada completando el formulario o reserve directamente una reunión de diagnóstico de 30 minutos en nuestro calendario.
          </p>
        </div>

        {/* Contenido en dos columnas (Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 mt-12 lg:mt-16 items-start">
          {/* ============================================================== */}
          {/* COLUMNA IZQUIERDA: Formulario de Captura Técnica (7 cols)       */}
          {/* ============================================================== */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10 relative">
            <div className="mb-6 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-2.5 text-[#01276D] font-bold text-lg sm:text-xl">
                <ShieldCheck className="w-5 h-5 text-[#0A5AA0]" />
                <h3>Solicite una Evaluación o Diagnóstico Técnico</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                Complete los antecedentes requeridos. Analizaremos sus necesidades y le contactaremos con una propuesta preliminar dentro de las próximas 24 horas hábiles.
              </p>
            </div>

            {isSubmitted ? (
              /* Estado de Éxito / Confirmación */
              <div className="py-8 sm:py-12 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2 max-w-md">
                  <h4 className="text-xl font-bold text-[#01276D]">
                    ¡Solicitud de Diagnóstico Recibida!
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Estimado(a){" "}
                    <strong className="text-slate-900 font-semibold">
                      {submittedData?.fullName}
                    </strong>
                    , hemos registrado su requerimiento sobre{" "}
                    <span className="text-[#0A5AA0] font-semibold">
                      {submittedData?.requirementType}
                    </span>
                    . Nos contactaremos a la brevedad al correo corporativo{" "}
                    <span className="text-slate-800 font-medium">
                      {submittedData?.email}
                    </span>{" "}
                    o teléfono{" "}
                    <span className="text-slate-800 font-medium">
                      {submittedData?.phone}
                    </span>
                    .
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 text-left w-full max-w-md space-y-1.5">
                  <p className="font-semibold text-slate-800">
                    Resumen del requerimiento enviado:
                  </p>
                  {submittedData?.organization && (
                    <p>
                      <strong>Empresa / Institución:</strong> {submittedData.organization}
                    </p>
                  )}
                  <p>
                    <strong>Tipo:</strong> {submittedData?.requirementType}
                  </p>
                  <p className="italic text-slate-500 pt-1 border-t border-slate-200 mt-1 line-clamp-3">
                    &quot;{submittedData?.message}&quot;
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleResetForm}
                    className="text-xs font-semibold cursor-pointer"
                  >
                    Enviar otra consulta o requerimiento
                  </Button>
                </div>
              </div>
            ) : (
              /* Formulario Activo con Web3Forms */
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Campos Ocultos para Web3Forms */}
                <input
                  type="hidden"
                  name="access_key"
                  value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""}
                />
                <input
                  type="hidden"
                  name="subject"
                  value="Nuevo requerimiento desde la web - Emanuel FN Asesoría"
                />

                {/* Fila 1: Nombre Completo */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="fullName"
                      type="text"
                      placeholder="ej. Carlos Valenzuela Bravo"
                      {...register("fullName")}
                      className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A5AA0] ${
                        errors.fullName
                          ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                          : "border-slate-300 hover:border-slate-400"
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName.message}</span>
                    </p>
                  )}
                </div>

                {/* Fila 2: Correo Corporativo & Teléfono (2 columnas) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Correo Corporativo <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        placeholder="ej. contacto@empresa.cl"
                        {...register("email")}
                        className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A5AA0] ${
                          errors.email
                            ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                            : "border-slate-300 hover:border-slate-400"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email.message}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                    >
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="ej. +56 9 1234 5678"
                        {...register("phone")}
                        className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A5AA0] ${
                          errors.phone
                            ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                            : "border-slate-300 hover:border-slate-400"
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.phone.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Fila 3: Empresa / Institución */}
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Empresa / Institución <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Building className="w-4 h-4" />
                    </div>
                    <input
                      id="organization"
                      type="text"
                      placeholder="ej. Agrícola del Maipo / SSR El Roble / I. Municipalidad"
                      {...register("organization")}
                      className={`w-full pl-10 pr-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A5AA0] ${
                        errors.organization
                          ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                          : "border-slate-300 hover:border-slate-400"
                      }`}
                    />
                  </div>
                  {errors.organization && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.organization.message}</span>
                    </p>
                  )}
                </div>

                {/* Fila 4: Tipo de Requerimiento (Select) */}
                <div>
                  <label
                    htmlFor="requirementType"
                    className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Tipo de Requerimiento <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="requirementType"
                    {...register("requirementType")}
                    defaultValue=""
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A5AA0] ${
                      errors.requirementType
                        ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                        : "border-slate-300 hover:border-slate-400"
                    }`}
                  >
                    <option value="" disabled>
                      Seleccione una opción de requerimiento...
                    </option>
                    {REQUIREMENT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.requirementType && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.requirementType.message}</span>
                    </p>
                  )}
                </div>

                {/* Fila 5: Mensaje o Detalle del Requerimiento */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs sm:text-sm font-semibold text-slate-700 mb-1.5"
                  >
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Detalle brevemente las características de su instalación, plazos estimados, problemática actual o cantidad de personal a capacitar..."
                    {...register("message")}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 placeholder:text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0A5AA0] resize-y ${
                      errors.message
                        ? "border-red-400 focus:ring-red-400 bg-red-50/20"
                        : "border-slate-300 hover:border-slate-400"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message.message}</span>
                    </p>
                  )}
                </div>

                {/* Banner de Error al enviar */}
                {submitError && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700 flex items-start gap-2.5 animate-in fade-in">
                    <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-semibold text-red-800">No se pudo enviar la solicitud</p>
                      <p className="text-xs text-red-600 leading-relaxed">{submitError}</p>
                    </div>
                  </div>
                )}

                {/* Botón de Envío CTA Naranja */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full text-base font-bold shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Clock className="w-4 h-4 animate-spin" />
                        Enviando solicitud a Emanuel FN Asesoría...
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Solicitar Diagnóstico Técnico
                      </span>
                    )}
                  </Button>
                </div>

                {/* Nota de Privacidad y Confidencialidad */}
                <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500 text-center">
                  <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>
                    Sus datos se gestionan bajo estricta confidencialidad profesional. No compartimos su información con terceros.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* ============================================================== */}
          {/* COLUMNA DERECHA: Agendar Reunión + Widget Oficial Calendly     */}
          {/* ============================================================== */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-7 flex flex-col h-full">
              <div className="space-y-2 mb-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A5AA0] uppercase tracking-wider">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Agendamiento Directo</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#01276D]">
                  ¿Prefiere agendar directamente?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Reserve una reunión de diagnóstico técnico de 30 minutos en el horario que más le acomode con Emanuel Fernández.
                </p>
              </div>

              {/* Botón destacado directo hacia Calendly */}
              <div className="mb-4">
                <a
                  href="https://calendly.com/emanuelfnasesoria/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#01276D] hover:bg-[#001E5A] text-white text-sm font-bold shadow-sm hover:shadow transition-all group"
                >
                  <Calendar className="w-4 h-4 text-[#46B4F0]" />
                  <span>Agendar Reunión de 30 min (Calendly)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/70 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Contenedor del Widget Oficial de Calendly */}
              <div className="relative w-full rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50 shadow-inner flex-1 min-h-[620px] sm:min-h-[660px]">
                <div
                  className="calendly-inline-widget w-full h-full min-h-[620px] sm:min-h-[660px]"
                  data-url="https://calendly.com/emanuelfnasesoria/30min"
                  style={{ minWidth: "320px", height: "660px" }}
                />
              </div>

              <p className="text-[11px] text-slate-400 text-center mt-3">
                Coordinación automática sincronizada con Google Meet / Llamada telefónica.
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BLOQUE DE DATOS DE CONTACTO DIRECTO & REDES (Debajo)            */}
        {/* ============================================================== */}
        <div className="mt-12 lg:mt-16 pt-10 border-t border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* 1. Correo Electrónico Directo */}
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#46B4F0] hover:shadow-md transition-all group flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#01276D]/10 text-[#01276D] flex items-center justify-center shrink-0 group-hover:bg-[#01276D] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Correo Electrónico
                </span>
                <p className="text-sm sm:text-base font-bold text-[#01276D] group-hover:text-[#0A5AA0] transition-colors break-all">
                  {SITE_CONFIG.contact.email}
                </p>
                <p className="text-xs text-slate-500">
                  Respuesta profesional dentro de 24h
                </p>
              </div>
            </a>

            {/* 2. Teléfono & WhatsApp */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#46B4F0] hover:shadow-md transition-all group flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#01276D]/10 text-[#01276D] flex items-center justify-center shrink-0 group-hover:bg-[#01276D] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                  Teléfono & WhatsApp
                </span>
                <p className="text-sm sm:text-base font-bold text-[#01276D]">
                  {SITE_CONFIG.contact.phone}
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneClean}`}
                    className="text-xs font-semibold text-[#0A5AA0] hover:underline inline-flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    Llamar directo
                  </a>
                  <span className="text-slate-300">•</span>
                  <a
                    href={SITE_CONFIG.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-emerald-600 hover:underline inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-3 h-3" />
                    Mensaje WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* 3. Conexión en Redes Sociales */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-1">
                  Canales y Redes Profesionales
                </span>
                <p className="text-xs text-slate-500 mb-3">
                  Siga actualizaciones, normativas y cápsulas técnicas:
                </p>
              </div>

              <div className="flex items-center gap-2 pt-1">
                {socialLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.name}
                      aria-label={`Perfil oficial en ${item.name}`}
                      className={`w-10 h-10 rounded-lg bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-700 transition-all ${item.hoverClass}`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
