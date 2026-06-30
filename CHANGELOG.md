# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

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
