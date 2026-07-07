# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

## [0.4.0] - 2026-07-07

### Agregado
- Despliegue en Cloudflare Pages con auto-deploy desde GitHub (rama main).
- Dominio personalizado delgadoyrautomotriz.com y www conectados con SSL.
- Redirect 301 de www a sin-www via Cloudflare Redirect Rules.
- Google Analytics 4 (G-VBDQKCT9B8) instalado.
- GA4 event tracking: click_whatsapp, click_telefono, click_instagram, click_navegacion, click_email, click_externo — con parámetros link_location y servicio/producto. Un solo listener en main.js, sin tocar cada link del HTML.
- Links de Instagram en sección Nosotros (botón pill) y sección Contacto (botón outlined).
- .gitignore actualizado: .wrangler/, .env, dist/, .cache/, .idea/.

### Cambiado
- Canonical, og:url, og:image y schema LocalBusiness actualizados a URL sin www.
- Sitemap actualizado a URL sin www y reenviado en Google Search Console.
- Labels de contacto con mayor opacidad (45% → 75%).
- Links de teléfono e Instagram en sección Nosotros con estilo pill (borde + hover).

## [0.3.0] - 2026-07-06

### Agregado
- SEO: Schema LocalBusiness (AutoRepair) con dirección exacta, código postal 30109, coordenadas, horario y teléfono con código de país.
- SEO: Schema FAQPage con 5 preguntas frecuentes.
- SEO: Canonical tag y meta Open Graph completos (og:title, og:description, og:image, og:locale es_CR).
- SEO: Preload de imagen hero con fetchpriority="high" para mejorar LCP.
- SEO: Google Fonts cargando de forma no bloqueante (rel="preload" + onload + noscript fallback).
- SEO: lazy loading en 17 imágenes debajo del fold.
- SEO: sitemap.xml con lastmod actualizado.
- Sección FAQ en acordión (5 preguntas, primera abierta por defecto, solo una abierta a la vez) reemplaza la sección "Garantía real".
- Mapa con botones Google Maps y Waze dentro del mapa en la esquina inferior.
- Sección de contacto rediseñada: layout 2 columnas en desktop, info en grid 3 columnas (dirección, WhatsApp, horario).
- Carrusel de testimonios en mobile: scroll horizontal con snap, auto-scroll cada 3.5s, dots indicadores y pausa al tocar.
- Servicio de Reparación de aros (reemplaza Grúas) con foto real.
- Favicons completos: apple-touch-icon.png (180x180), android-chrome 192px y 512px, favicon-16x16.png, favicon-32x32.png, favicon.ico.
- site.webmanifest actualizado con iconos Android/PWA y maskable icon.

### Cambiado
- 18 imágenes convertidas de JPG a WebP (calidad 82), JPGs originales eliminados. Ahorro ~35% de peso.
- Botón WhatsApp en sección de contacto: blanco sólido (#F5F4F1) sobre fondo rojo para máximo contraste.
- Imágenes renombradas a lowercase (arreglo-de-aros.webp, arreglo-frontal-bocho.webp).
- theme-color unificado a #8C1F1F en HTML y webmanifest.
- H2 de sección de contacto con referencia geográfica "Ubicados en Caballo Blanco, Cartago".

### Resuelto (pendientes de versión anterior)
- Mapa con coordenadas exactas (9.851807, -83.899495) y dirección: 700 metros sur y 75 norte del McDonald's de Dulce Nombre.
- Favicon y site.webmanifest con iconos reales para Android e iOS.
- Testimonios con nombres reales de clientes.

### Pendiente
- Páginas individuales por servicio (SEO Fase 2): /enderezado-y-pintura, /mecanica-rapida, /soldadura-carroceria, /reparacion-de-aros, /tramites-aseguradoras.
- Formulario de cotización con foto (Fase 3).

## [0.2.0] - 2026-06-30

### Cambiado
- Rediseno completo del sitio inspirado en la estructura de repaut.com (competencia), con variaciones propias para no copiar.
- Tipografia cambiada de Anton + IBM Plex Sans a Montserrat (titulares y texto).
- Header con logo y nav mas grandes, nav centrado, sin boton "presupuesto gratis" (el flotante de WhatsApp cubre esa accion).
- Hero rediseñado: foto de fondo a sangre completa con efecto Ken Burns, overlay oscuro, texto alineado a la izquierda, boton "Contactenos" que enlaza a la seccion de contacto (no directo a WhatsApp), badges de confianza (garantia, anos de experiencia, seguidores, PYME, tarjeta y tasa 0).
- Servicios como tarjetas con foto y overlay hover (mezcla de tarjetas con foto y solidas, sin numeracion visible) en vez de grid plano.
- Nueva seccion "Quienes somos" con collage de fotos superpuestas y estadisticas animadas (count-up).
- Ticker de marcas con scroll infinito (texto, sin logos).
- Nueva seccion dedicada "Antes y despues" con slider grande arrastrable + grid de fotos con toggle al click.
- Seccion "Por que elegirnos" sin numeracion (01-04 removidos), solo linea decorativa.
- Footer reorganizado en columnas (marca, taller, enlaces) + credito con enlace a alternativostudio.com.
- Footer responsive en 2 columnas en mobile (antes apilado en una sola columna larga).
- Tarjetas de servicio mas altas en mobile con texto limitado a la mitad inferior de la tarjeta.

### Corregido
- Todas las faltas de ortografia y tildes faltantes en el contenido en español (incluyendo "anos" -> "años").
- Bug de contraste: numeros invisibles sobre fondo del mismo color en tarjetas de servicio.
- Icono de menu hamburguesa en mobile (le faltaba flex-direction: column).
- Badge del footer cortado por overflow en mobile, y boton flotante de WhatsApp tapandolo.

### Agregado
- Estructura base del sitio (HTML/CSS/JS estatico, sin framework).
- Boton flotante de WhatsApp con animacion de pulso.
- Galeria con fotos reales del taller renombradas y organizadas (antes/despues, proceso, trabajos terminados).
- Animaciones: scroll-reveal, Ken Burns en hero, header transparente a solido en scroll, contador animado, marquee infinito, hover-reveal en tarjetas.
- Menu movil con toggle funcional y animacion de icono a X.

### Pendiente
- Mapa de Google Maps embebido con direccion exacta (actualmente busqueda generica por texto).
- Testimonios reales de clientes (actualmente placeholder honesto, sin inventar).
- Pagina individual de Enderezado y Pintura (SEO).
- Favicon, site.webmanifest con iconos reales.
- Formulario de cotizacion con foto (Fase 3).

## [0.1.0] - 2026-06-29

### Agregado
- Estructura base del sitio (HTML/CSS/JS estatico, sin framework).
- Home con secciones: hero, servicios, galeria antes/despues, por que elegirnos, testimonios, contacto.
- Identidad visual aplicada: tipografia Anton (titulares) + IBM Plex Sans (texto), paleta rojo carroceria / carbon / gris.
- Boton flotante de WhatsApp con animacion de pulso.
- Galeria con fotos reales del taller renombradas y organizadas (antes/despues, proceso, trabajos terminados).
- Animaciones de scroll-reveal y hover en tarjetas, fotos y testimonios.
- Menu movil con toggle funcional.

### Pendiente
- Mapa de Google Maps embebido (falta direccion exacta).
- Testimonios reales de clientes (actualmente placeholder).
- Pagina individual de Enderezado y Pintura (SEO).
- Favicon, site.webmanifest con iconos reales.
