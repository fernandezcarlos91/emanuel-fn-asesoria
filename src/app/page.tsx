import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { About } from "@/components/sections/About";
import { CorporateServices } from "@/components/sections/CorporateServices";
import { SmeServices } from "@/components/sections/SmeServices";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* 1. SECCIÓN HERO (Presentación de Alto Impacto) */}
      <Hero />

      {/* 2. BARRA DE CONFIANZA & ACREDITACIONES */}
      <TrustBadges />

      {/* 3. SECCIÓN SOBRE / PERFIL PROFESIONAL */}
      <About />

      {/* 4. SECCIÓN: SERVICIOS CORPORATIVOS E INSTITUCIONALES */}
      <CorporateServices />

      {/* 5. SECCIÓN: SERVICIOS PARA PYMES, SECTOR AGRÍCOLA Y PARTICULARES */}
      <SmeServices />

      {/* 6. SECCIÓN: CONTACTO & CALENDLY */}
      <Contact />
    </main>
  );
}
