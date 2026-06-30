# Delgado & R Automotriz — Contexto del proyecto

Sitio web para un taller de enderezado y pintura ubicado en Caballo Blanco, Cartago, Costa Rica.

## Negocio
- Servicio principal y mas rentable: enderezado y pintura.
- Servicios secundarios: mecanica rapida, soldadura, grua (apoyo al choque, no independiente), tramites con aseguradoras.
- Mayoria de clientes pagan de su bolsillo (no aseguradora).
- Diferenciador: calidad y garantia del trabajo (el miedo principal del cliente es que el color/acabado no combine).
- Canal de contacto principal: WhatsApp Business (8961-3530).
- Clientela: Cartago + GAM (San Jose, Heredia), mezcla amplia de edades.
- Llegan por boca en boca y redes sociales (Instagram: @delgado_y_r_automotriz, ~2700 seguidores).
- Inscrita como PYME. Acepta tarjeta y tasa 0.

## Objetivos del sitio (prioridad)
1. Generar mensajes de WhatsApp (toda la pagina empuja hacia este CTA, no hay formulario de contacto propio).
2. Posicionar en Google ("taller enderezado y pintura" + ciudad).
3. Transmitir confianza/calidad via evidencia visual (seccion dedicada de antes/despues).
4. Futuro: formulario de cotizacion con foto (Fase 3).

## Identidad visual
- Tipografia: Montserrat (titulares y texto, distintos pesos: 400-900).
- Paleta: rojo carroceria oscuro (#8C1F1F), carbon (#1F1F1F), carbon profundo (#161616), gris claro frio (#D6D6D2), blanco hueso (#F5F4F1). Verde WhatsApp (#25D366) reservado solo para el boton flotante de WhatsApp.
- Tono de comunicacion: cercano y de confianza, sin tecnicismos.
- Sin emojis.
- Referencia de diseno: inspirado en la estructura de repaut.com (competencia) pero con variaciones deliberadas para no copiar — paleta propia, mezcla de tarjetas de servicio con foto/solidas (no todas con foto), ticker de marcas en texto (sin logos), seccion de antes/despues dedicada con slider arrastrable + grid con toggle.

## Stack tecnico
- Sitio estatico: HTML puro + CSS + JS (sin framework, sin CMS).
- Estructura de carpetas: index.html, css/styles.css, js/main.js, img/.
- Decision deliberada: no usar WordPress (mantenimiento innecesario para un sitio sin blog ni panel admin).
- Sin formulario de contacto con backend (no hay servidor/CMS para recibirlo) — el CTA de contacto siempre es WhatsApp.
- Animaciones: scroll-reveal (IntersectionObserver), Ken Burns en el fondo del hero, header que pasa de transparente a solido al hacer scroll, contador animado de estadisticas, marquee infinito de marcas, hover-reveal en tarjetas de servicio.

## Estado del contenido
- Fotos reales del taller ya subidas y renombradas en img/ (antes/despues de vocho, furgoneta VW, Datsun naranja, trabajos terminados, foto de equipo, interior del taller).
- Testimonios: pendientes de obtener. El sitio muestra placeholders honestos ("Pendiente: testimonio real del cliente") — nunca se deben inventar nombres ni citas de clientes falsos.
- Mapa: embed generico de Google Maps por busqueda de texto ("Caballo Blanco, Cartago, Costa Rica"), pendiente direccion exacta para un embed mas preciso.
- Footer incluye credito/enlace a alternativostudio.com (estudio que desarrollo el sitio).

## Plan de fases
- Fase 1 (MVP, en curso): Home + seccion antes/despues + Contacto + Google Business optimizado.
- Fase 2: paginas individuales por servicio (SEO).
- Fase 3: formulario de cotizacion con foto, blog si se decide perseguir trafico organico.
