"use client";

import React, { createContext, useContext, useState } from "react";

// 🏷️ Language types
type Lang = "en" | "es" | "de" | "fr";
type Keys =
  | "about"
  | "portfolio"
  | "contact"
  | "welcome"
  | "about_title"
  | "about_intro1"
  | "about_intro2"
  | "about_image_alt"
  | "about_experience1"
  | "about_experience2"
  | "about_countries"
  | "about_flight_hours"
  | "about_views"
  | "about_gear_title"
  | "gear_fpv_alt"
  | "gear_fpv_title"
  | "gear_fpv_text"
  | "gear_gimbal_alt"
  | "gear_gimbal_title"
  | "gear_gimbal_text"
  | "gear_drone_alt"
  | "gear_drone_title"
  | "gear_drone_text"
  | "about_approach1"
  | "about_approach2"
  | "about_gallery1"
  | "about_gallery2"
  | "about_gallery3"
  | "my_expertise" 
| "fpv_title" 
| "fpv_text" 
| "city_title" 
| "city_text" 
| "music_title" 
| "music_text" 
| "unreachable_title" 
| "unreachable_text"
|"contact_hero_title"
  | "contact_hero_text"
  | "contact_name"
  | "contact_name_placeholder"
  | "contact_email"
  | "contact_email_placeholder"
  | "contact_subject"
  | "contact_subject_placeholder"
  | "contact_message"
  | "contact_message_placeholder"
  | "contact_send_button";


// 🌍 Translation dictionary
const translations: Record<Lang, Record<Keys, string>> = {
  en: {
    about: "About",
    portfolio: "Portfolio",
    contact: "Contact",
    welcome: "Welcome to my website",
    about_title: "Who is Alex?",
    about_intro1: "I’m a 32-year-old German filmmaker with a master’s degree in engineering and a professional focus on cinematic drone and ground videography. My expertise lies in pushing creative and technical boundaries — from high-precision FPV flights to large-scale tourism productions.",
    about_intro2: "I specialize in capturing environments that are typically inaccessible, using cutting-edge drone technology and advanced camera systems to deliver world-class, production-ready visuals.",
    about_image_alt: "Alex Portrait",
    about_experience1: "Over the past years, I’ve filmed across more than 40 countries — combining technical skill, cultural understanding, and cinematic storytelling. From dense urban centers to remote mountain regions, I adapt to any environment while maintaining consistent image quality and creative vision.",
    about_experience2: "My focus is on precision and control — ensuring every shot, every flight, and every transition aligns with a cohesive visual narrative that feels immersive and authentic.",
    about_countries: "Countries Filmed",
    about_flight_hours: "Flight Hours Logged",
    about_views: "Organic Views Worldwide",
    about_gear_title: "Professional Gear",
    gear_fpv_alt: "FPV Drone Flywoo Flylens 85",
    gear_fpv_title: "FPV Drone – Flywoo Flylens 85 O4 Pro",
    gear_fpv_text: "The Flywoo Flylens 85 O4 Pro is an ultra-light FPV drone weighing under 100g, equipped with DJI’s O4 Air Unit Pro. It records ultra-stable 4K video with low latency, making it ideal for high-speed indoor and outdoor sequences. Its small size allows flight in tight spaces while maintaining professional-grade image quality.",
    gear_gimbal_alt: "Sony FX30 and DJI RS4 Mini Gimbal",
    gear_gimbal_title: "Cinema Camera & Gimbal Rig",
    gear_gimbal_text: "My main ground setup consists of the Sony FX30 with the DJI RS4 Mini gimbal. This combination delivers cinematic-quality 10-bit 4:2:2 footage with perfect stabilization. I use multiple lenses tailored to different shooting environments — from wide-angle cinematic landscapes to tight, portrait-style storytelling.",
    gear_drone_alt: "DJI Mavic 3 Pro",
    gear_drone_title: "Cinematic Drone – DJI Mavic 3 Pro",
    gear_drone_text: "The DJI Mavic 3 Pro is my main cinematic aerial system. Featuring triple lenses with Hasselblad color science and up to 5.1K resolution recording, it ensures flexibility for every creative angle — from wide establishing shots to telephoto details. The camera’s precision allows for cinematic motion and consistent tone across all production styles.",
    about_approach1: "My work combines engineering-level precision with artistic storytelling. Every scene is designed to bring the audience closer to the real experience — visually and emotionally.",
    about_approach2: "From concept to final color grade, I maintain a consistent, professional workflow that ensures quality across commercial, cinematic, and travel projects.",
    about_gallery1: "Filming in remote locations",
    about_gallery2: "Drone cinematography",
    about_gallery3: "Travel filmmaking",
    my_expertise: "My Expertise",
    fpv_title: "FPV Drone Cinematics",
    fpv_text: "I use the ultra-light Flywoo Flylens 85 paired with the DJI O4 Air Unit Pro — a sub-100g FPV drone that delivers smooth, color-graded footage in both indoor and outdoor environments. Its agility allows me to film tight spaces and dynamic angles that larger drones can’t reach.",
    city_title: "City Showreels & Tourism Board Films",
    city_text: "I produce cinematic city and tourism films that highlight key attractions, atmosphere, and identity in a clear and engaging way. The goal is to help destinations stand out and attract visitors through high-quality visual storytelling. My cinematic Thailand video has already reached more than 115,000 viewers and received over 1,000 positive comments from people who resonated with the story.",
    music_title: "Creating Music Videos",
    music_text: "I build edits with precise timing and clean structure. Every cut is intentional — driven by story and purpose, not random beats. This approach delivers videos that are clear, engaging, and professionally finished for commercial use.",
    unreachable_title: "Reaching the Unreachable",
    unreachable_text: "Using the DJI Mavic 3 Pro, I access peaks, islands, and remote corners that are otherwise unreachable. I capture cinematic aerial perspectives with precision and clarity, delivering visuals that were previously impossible to film.",
    contact_hero_title: "Get in Touch",
  contact_hero_text: "Let’s collaborate on something cinematic. Whether you’re a tourism board, a brand, or an artist — I create visuals that tell your story with emotion, precision, and impact.",
  contact_name: "Name",
  contact_name_placeholder: "Your name",
  contact_email: "Email",
  contact_email_placeholder: "your@email.com",
  contact_subject: "Subject",
  contact_subject_placeholder: "Project idea, collaboration, etc.",
  contact_message: "Message",
  contact_message_placeholder: "Tell me more about your vision...",
  contact_send_button: "Send Message",
  },
  es: {
    about: "Sobre mí",
    portfolio: "Portafolio",
    contact: "Contacto",
    welcome: "Bienvenido a mi sitio web",
    about_title: "¿Quién es Alex?",
    about_intro1: "Soy un cineasta alemán de 32 años con un máster en ingeniería y un enfoque profesional en cinematografía con drones y cámara en tierra. Mi experiencia se centra en superar los límites creativos y técnicos — desde vuelos FPV de alta precisión hasta producciones turísticas a gran escala.",
    about_intro2: "Me especializo en capturar entornos que normalmente son inaccesibles, usando tecnología de drones de última generación y sistemas avanzados de cámara para entregar imágenes de nivel profesional listas para producción.",
    about_image_alt: "Retrato de Alex",
    about_experience1: "En los últimos años he filmado en más de 40 países — combinando habilidad técnica, comprensión cultural y narrativa cinematográfica. Desde centros urbanos densos hasta regiones montañosas remotas, me adapto a cualquier entorno manteniendo calidad de imagen y visión creativa consistente.",
    about_experience2: "Mi enfoque está en la precisión y el control — asegurando que cada toma, cada vuelo y cada transición se alinee con una narrativa visual cohesiva que resulte inmersiva y auténtica.",
    about_countries: "Países Filmados",
    about_flight_hours: "Horas de Vuelo Registradas",
    about_views: "Vistas Orgánicas en Todo el Mundo",
    about_gear_title: "Equipo Profesional",
    gear_fpv_alt: "Dron FPV Flywoo Flylens 85",
    gear_fpv_title: "Dron FPV – Flywoo Flylens 85 O4 Pro",
    gear_fpv_text: "El Flywoo Flylens 85 O4 Pro es un dron FPV ultraligero de menos de 100g, equipado con la unidad aérea DJI O4 Pro. Graba video 4K ultraestable con baja latencia, ideal para secuencias rápidas en interiores y exteriores. Su tamaño permite volar en espacios reducidos manteniendo calidad profesional.",
    gear_gimbal_alt: "Sony FX30 y Gimbal DJI RS4 Mini",
    gear_gimbal_title: "Cámara de Cine y Rig Gimbal",
    gear_gimbal_text: "Mi configuración principal consiste en la Sony FX30 con el gimbal DJI RS4 Mini. Esta combinación entrega video cinematográfico 10-bit 4:2:2 con estabilización perfecta. Uso múltiples lentes adaptadas a diferentes entornos de filmación — desde paisajes amplios hasta storytelling en estilo retrato.",
    gear_drone_alt: "DJI Mavic 3 Pro",
    gear_drone_title: "Dron Cinemático – DJI Mavic 3 Pro",
    gear_drone_text: "El DJI Mavic 3 Pro es mi principal sistema aéreo cinematográfico. Con lentes triples y ciencia de color Hasselblad y grabación hasta 5.1K, asegura flexibilidad para cada ángulo creativo — desde tomas amplias hasta detalles en telefoto. La precisión de la cámara permite movimientos cinematográficos y tono consistente en toda la producción.",
    about_approach1: "Mi trabajo combina precisión de ingeniería con narrativa artística. Cada escena está diseñada para acercar al público a la experiencia real — visual y emocionalmente.",
    about_approach2: "Desde el concepto hasta el color final, mantengo un flujo de trabajo profesional consistente que garantiza calidad en proyectos comerciales, cinematográficos y de viajes.",
    about_gallery1: "Filmando en ubicaciones remotas",
    about_gallery2: "Cinematografía con dron",
    about_gallery3: "Filmación de viajes",
    my_expertise: "Mi experiencia",
    fpv_title: "Cinemática con Dron FPV",
    fpv_text: "Uso el ultraligero Flywoo Flylens 85 junto con la DJI O4 Air Unit Pro — un dron FPV de menos de 100 g que entrega imágenes fluidas y con corrección de color tanto en interiores como exteriores. Su agilidad me permite filmar en espacios reducidos y ángulos dinámicos que drones más grandes no pueden alcanzar.",
    city_title: "Showreels de Ciudades y Videos para Oficinas de Turismo",
    city_text: "Produzco films cinematográficos de ciudades y turismo que destacan las principales atracciones, la atmósfera y la identidad de manera clara y atractiva. El objetivo es ayudar a los destinos a destacarse y atraer visitantes mediante narrativas visuales de alta calidad. Mi video de Tailandia ya alcanzó más de 115,000 vistas y recibió más de 1,000 comentarios positivos.",
    music_title: "Creación de Videoclips Musicales",
    music_text: "Construyo ediciones con tiempos precisos y estructura limpia. Cada corte es intencional — impulsado por la historia y el propósito, no por ritmos aleatorios. Este enfoque produce videos claros, atractivos y profesionalmente terminados para uso comercial.",
    unreachable_title: "Alcanzando lo Inalcanzable",
    unreachable_text: "Usando el DJI Mavic 3 Pro, accedo a picos, islas y rincones remotos que de otro modo serían inalcanzables. Capturo perspectivas aéreas cinematográficas con precisión y claridad, entregando imágenes que antes eran imposibles de filmar.",
    contact_hero_title: "Ponte en Contacto",
  contact_hero_text: "Colaboremos en algo cinematográfico. Ya seas una oficina de turismo, una marca o un artista — creo imágenes que cuentan tu historia con emoción, precisión e impacto.",
  contact_name: "Nombre",
  contact_name_placeholder: "Tu nombre",
  contact_email: "Correo electrónico",
  contact_email_placeholder: "tu@email.com",
  contact_subject: "Asunto",
  contact_subject_placeholder: "Idea de proyecto, colaboración, etc.",
  contact_message: "Mensaje",
  contact_message_placeholder: "Cuéntame más sobre tu visión...",
  contact_send_button: "Enviar Mensaje",
  },
  de: {
    about: "Über mich",
    portfolio: "Portfolio",
    contact: "Kontakt",
    welcome: "Willkommen auf meiner Website",
    about_title: "Wer ist Alex?",
    about_intro1: "Ich bin ein 32-jähriger deutscher Filmemacher mit einem Masterabschluss in Ingenieurwesen und professionellem Fokus auf Drohnen- und Bodenkamera-Filmemachen. Meine Expertise liegt darin, kreative und technische Grenzen zu überschreiten — von hochpräzisen FPV-Flügen bis hin zu großangelegten Tourismusproduktionen.",
    about_intro2: "Ich spezialisiere mich auf das Filmen von Umgebungen, die normalerweise unzugänglich sind, mithilfe modernster Drohnentechnologie und fortschrittlicher Kamerasysteme, um professionelle, produktionstaugliche Bilder zu liefern.",
    about_image_alt: "Alex Porträt",
    about_experience1: "In den letzten Jahren habe ich in über 40 Ländern gefilmt — technische Fähigkeiten, kulturelles Verständnis und filmisches Storytelling kombiniert. Von dicht besiedelten Städten bis zu abgelegenen Bergregionen passe ich mich jeder Umgebung an und behalte dabei durchgehend Bildqualität und kreative Vision bei.",
    about_experience2: "Mein Fokus liegt auf Präzision und Kontrolle — jeder Shot, jeder Flug und jede Transition folgt einer kohärenten visuellen Erzählung, die immersiv und authentisch wirkt.",
    about_countries: "Gefilmte Länder",
    about_flight_hours: "Geflogene Stunden",
    about_views: "Organische Views weltweit",
    about_gear_title: "Professionelles Equipment",
    gear_fpv_alt: "FPV-Drohne Flywoo Flylens 85",
    gear_fpv_title: "FPV-Drohne – Flywoo Flylens 85 O4 Pro",
    gear_fpv_text: "Die Flywoo Flylens 85 O4 Pro ist eine ultraleichte FPV-Drohne unter 100g, ausgestattet mit der DJI O4 Air Unit Pro. Sie nimmt ultra-stabil 4K Videos mit niedriger Latenz auf und eignet sich ideal für schnelle Indoor- und Outdoor-Sequenzen. Die geringe Größe erlaubt Flüge in engen Räumen bei professioneller Bildqualität.",
    gear_gimbal_alt: "Sony FX30 und DJI RS4 Mini Gimbal",
    gear_gimbal_title: "Kamera & Gimbal Rig",
    gear_gimbal_text: "Mein Haupt-Setup besteht aus der Sony FX30 mit dem DJI RS4 Mini Gimbal. Diese Kombination liefert 10-Bit 4:2:2 Cinematic-Footage mit perfekter Stabilisierung. Ich nutze mehrere Objektive für unterschiedliche Umgebungen — von weiten Landschaften bis hin zu engen Porträtaufnahmen.",
    gear_drone_alt: "DJI Mavic 3 Pro",
    gear_drone_title: "Cinematische Drohne – DJI Mavic 3 Pro",
    gear_drone_text: "Die DJI Mavic 3 Pro ist mein Haupt-Cinematic-Luftsystem. Mit Dreifach-Objektiven und Hasselblad-Farbwissenschaft bis zu 5,1K Auflösung bietet sie Flexibilität für jede kreative Perspektive — von Weitwinkelaufnahmen bis Teleobjektiv-Details. Die Präzision der Kamera ermöglicht kinoreife Bewegungen und konsistente Farbgebung.",
    about_approach1: "Meine Arbeit kombiniert ingenieurtechnische Präzision mit künstlerischem Storytelling. Jede Szene soll das Publikum der realen Erfahrung näherbringen — visuell und emotional.",
    about_approach2: "Vom Konzept bis zur finalen Farbkorrektur halte ich einen konsistenten, professionellen Workflow ein, der Qualität in kommerziellen, filmischen und Reiseprojekten sicherstellt.",
    about_gallery1: "Filmen an abgelegenen Orten",
    about_gallery2: "Drohnen-Cinematographie",
    about_gallery3: "Reise-Filmaufnahmen",
    my_expertise: "Meine Expertise",
    fpv_title: "FPV-Drohnen-Cinematographie",
    fpv_text: "Ich verwende die ultraleichte Flywoo Flylens 85 in Kombination mit der DJI O4 Air Unit Pro — eine FPV-Drohne unter 100g, die flüssige, farblich abgestimmte Aufnahmen sowohl drinnen als auch draußen liefert. Ihre Agilität erlaubt es mir, enge Räume und dynamische Winkel zu filmen, die größere Drohnen nicht erreichen.",
    city_title: "City Showreels & Tourismusfilme",
    city_text: "Ich produziere cineastische Stadt- und Tourismusfilme, die Hauptattraktionen, Atmosphäre und Identität klar und ansprechend hervorheben. Ziel ist es, Destinationen hervorzuheben und Besucher durch hochwertige visuelle Erzählungen anzuziehen. Mein Thailand-Video erreichte bereits über 115.000 Zuschauer und erhielt über 1.000 positive Kommentare.",
    music_title: "Musikvideos erstellen",
    music_text: "Ich erstelle Schnitte mit präzisem Timing und klarer Struktur. Jeder Schnitt ist bewusst — getrieben von Geschichte und Zweck, nicht von zufälligen Beats. Dieser Ansatz liefert klare, ansprechende und professionell fertige Videos für kommerzielle Nutzung.",
    unreachable_title: "Das Unzugängliche erreichen",
    unreachable_text: "Mit der DJI Mavic 3 Pro erreiche ich Gipfel, Inseln und abgelegene Orte, die sonst unzugänglich wären. Ich filme cineastische Luftaufnahmen mit Präzision und Klarheit, wodurch zuvor unmögliche Bilder entstehen.",
    contact_hero_title: "Kontakt aufnehmen",
  contact_hero_text: "Lass uns an etwas Cinematischem zusammenarbeiten. Egal, ob du ein Tourismusbüro, eine Marke oder ein Künstler bist — ich erstelle visuelle Inhalte, die deine Geschichte mit Emotion, Präzision und Wirkung erzählen.",
  contact_name: "Name",
  contact_name_placeholder: "Dein Name",
  contact_email: "E-Mail",
  contact_email_placeholder: "deine@email.com",
  contact_subject: "Betreff",
  contact_subject_placeholder: "Projektidee, Zusammenarbeit, etc.",
  contact_message: "Nachricht",
  contact_message_placeholder: "Erzähle mir mehr über deine Vision...",
  contact_send_button: "Nachricht senden",
  },
  fr: {
    about: "À propos",
    portfolio: "Portfolio",
    contact: "Contact",
    welcome: "Bienvenue sur mon site web",
    about_title: "Qui est Alex ?",
    about_intro1: "Je suis un réalisateur allemand de 32 ans avec un master en ingénierie et une spécialisation professionnelle dans la cinématographie par drone et au sol. Mon expertise réside dans le dépassement des limites créatives et techniques — des vols FPV de haute précision aux productions touristiques à grande échelle.",
    about_intro2: "Je me spécialise dans la capture d'environnements généralement inaccessibles, en utilisant la technologie de drone de pointe et des systèmes de caméra avancés pour fournir des images professionnelles prêtes à la production.",
    about_image_alt: "Portrait d'Alex",
    about_experience1: "Au cours des dernières années, j'ai filmé dans plus de 40 pays — combinant compétences techniques, compréhension culturelle et narration cinématographique. Des centres urbains densément peuplés aux régions montagneuses reculées, je m'adapte à tout environnement tout en maintenant une qualité d'image et une vision créative cohérentes.",
    about_experience2: "Mon objectif est la précision et le contrôle — chaque plan, chaque vol et chaque transition suit une narration visuelle cohérente qui paraît immersive et authentique.",
    about_countries: "Pays filmés",
    about_flight_hours: "Heures de vol",
    about_views: "Vues organiques dans le monde",
    about_gear_title: "Équipement professionnel",
    gear_fpv_alt: "Drone FPV Flywoo Flylens 85",
    gear_fpv_title: "Drone FPV – Flywoo Flylens 85 O4 Pro",
    gear_fpv_text: "Le Flywoo Flylens 85 O4 Pro est un drone FPV ultra-léger pesant moins de 100g, équipé de l'unité aérienne DJI O4 Pro. Il enregistre des vidéos 4K ultra-stables avec une faible latence, idéal pour des séquences rapides en intérieur et extérieur. Sa petite taille permet de voler dans des espaces restreints tout en maintenant une qualité professionnelle.",
    gear_gimbal_alt: "Sony FX30 et Gimbal DJI RS4 Mini",
    gear_gimbal_title: "Caméra & Gimbal Rig",
    gear_gimbal_text: "Ma configuration principale consiste en le Sony FX30 avec le gimbal DJI RS4 Mini. Cette combinaison fournit une image 10 bits 4:2:2 de qualité cinématographique avec une stabilisation parfaite. J'utilise plusieurs objectifs adaptés à différents environnements — des paysages larges aux récits de style portrait.",
    gear_drone_alt: "DJI Mavic 3 Pro",
    gear_drone_title: "Drone cinématique – DJI Mavic 3 Pro",
    gear_drone_text: "Le DJI Mavic 3 Pro est mon principal système aérien cinématique. Avec des objectifs triples et la science des couleurs Hasselblad jusqu'à 5,1K, il assure une flexibilité pour chaque angle créatif — des plans larges aux détails en téléobjectif. La précision de la caméra permet des mouvements cinématiques et une tonalité cohérente sur toutes les productions.",
    about_approach1: "Mon travail combine précision d'ingénierie et narration artistique. Chaque scène est conçue pour rapprocher le spectateur de l'expérience réelle — visuellement et émotionnellement.",
    about_approach2: "Du concept à la correction colorimétrique finale, je maintiens un flux de travail professionnel et cohérent garantissant la qualité des projets commerciaux, cinématographiques et de voyage.",
    about_gallery1: "Filmer dans des lieux reculés",
    about_gallery2: "Cinematographie par drone",
    about_gallery3: "Film de voyage",
    my_expertise: "Mon expertise",
    fpv_title: "Cinématique Drone FPV",
    fpv_text: "J'utilise le Flywoo Flylens 85 ultra-léger associé à l'unité aérienne DJI O4 Pro — un drone FPV de moins de 100 g qui offre des images fluides et étalonnées en intérieur comme en extérieur. Son agilité me permet de filmer des espaces restreints et des angles dynamiques inaccessibles aux drones plus grands.",
    city_title: "Showreels de villes & films touristiques",
    city_text: "Je produis des films cinématographiques de villes et de tourisme qui mettent en valeur les attractions principales, l'ambiance et l'identité de manière claire et engageante. L'objectif est d'aider les destinations à se démarquer et à attirer des visiteurs grâce à des narrations visuelles de haute qualité. Ma vidéo cinématique sur la Thaïlande a déjà atteint plus de 115 000 vues et reçu plus de 1 000 commentaires positifs.",
    music_title: "Création de clips musicaux",
    music_text: "Je construis des montages avec un timing précis et une structure claire. Chaque coupe est intentionnelle — guidée par l'histoire et le but, pas par des rythmes aléatoires. Cette approche produit des vidéos claires, engageantes et professionnellement finies pour un usage commercial.",
    unreachable_title: "Atteindre l'inaccessible",
    unreachable_text: "Avec le DJI Mavic 3 Pro, j'accède aux sommets, îles et coins reculés autrement inaccessibles. Je capture des perspectives aériennes cinématographiques avec précision et clarté, produisant des images auparavant impossibles à filmer.",
    contact_hero_title: "Contactez-moi",
  contact_hero_text: "Collaborons sur quelque chose de cinématographique. Que vous soyez un office de tourisme, une marque ou un artiste — je crée des visuels qui racontent votre histoire avec émotion, précision et impact.",
  contact_name: "Nom",
  contact_name_placeholder: "Votre nom",
  contact_email: "Email",
  contact_email_placeholder: "votre@email.com",
  contact_subject: "Sujet",
  contact_subject_placeholder: "Idée de projet, collaboration, etc.",
  contact_message: "Message",
  contact_message_placeholder: "Parlez-moi davantage de votre vision...",
  contact_send_button: "Envoyer le message",
  }
};

// 🟢 Context definition
type I18nContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: Keys) => string;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

// 🟢 Provider
const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: Keys) => translations[lang][key];

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

// 🟢 Hook
const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error("useI18n must be used within I18nProvider");
  return context;
};

// ✅ Named exports
export { I18nProvider, useI18n };
