<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Optimización de instrucciones y automatización de tareas
      .color___box_3
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2.fit___box_8(data-aos="fade-right")
                p.mb-0 La integración de la inteligencia artificial generativa (IAG) en el sector productivo trasciende la ejecución de comandos aislados. El profesional debe desarrollar la capacidad de orquestar flujos de trabajo en los cuales la IA no solo responda consultas, sino que también actúe como un mecanismo de automatización y refinamiento orientado a incrementar la eficiencia organizacional.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/t5/img1.png", alt="alt").m-auto
          p.mb-5 En este contexto, la calidad de las instrucciones suministradas al modelo de lenguaje de gran escala (#[i Large Language Model] [LLM]) determina el nivel de precisión, coherencia y utilidad de los resultados obtenidos.
          #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.1 Iteración y refinamiento de comandos según objetivos de productividad
          p.mb-5 La obtención de resultados de alta calidad en modelos de lenguaje profundo rara vez depende de un único intento. Por el contrario, requiere un proceso continuo de iteración y refinamiento. Este ciclo operativo consiste en evaluar el #[i output] inicial generado por la IA y aplicar ajustes progresivos a las instrucciones, con el propósito de alinear la respuesta con los objetivos de productividad establecidos.
          .row.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_1.fit___box_5.fit___box_13(data-aos="fade-right")
                p.mb-0 Dentro de este proceso, se implementan estrategias de reflexión y autocrítica, mediante las cuales el modelo actúa como su propio editor, revisando la coherencia lógica y la precisión factual de sus respuestas antes de generar una versión final. A continuación, se presentan algunas de las principales estrategias utilizadas en el refinamiento de instrucciones:
            .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/t5/img2.jpg", alt="").m-auto
          .bg___slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Iteración progresiva
                      p.mb-0 Consiste en ajustar el #[i prompt] después de evaluar el resultado inicial, corrigiendo ambigüedades o ampliando instrucciones para mejorar la precisión de la respuesta.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img3.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Reflexión y autocrítica
                      p.mb-0 Se instruye al modelo para revisar su propia respuesta y verificar coherencia, precisión y alineación con criterios previamente definidos.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img4.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 #[i Question Refinement] (refinamiento de preguntas)
                      p.mb-0 Técnica mediante la cual se solicita al modelo sugerir mejoras al #[i prompt] original, reduciendo ambigüedad y aumentando la pertinencia del resultado generado.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t5/img5.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 La implementación de estas estrategias incrementa la calidad de las respuestas y permite construir flujos de trabajo más eficientes, consistentes y adaptados a necesidades específicas del entorno organizacional.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Instrucciones funcionales para necesidades de búsqueda complejas
      p.mb-5 En sectores de alta densidad informativa, como el jurídico, administrativo o de salud, la IA puede utilizarse como un motor avanzado de búsqueda y recuperación de información. Esta técnica se conoce como Retrieval #[i Prompting]. El propósito consiste en transformar al LLM en un “archivero experto”, capaz de navegar, sintetizar y extraer información crítica desde grandes volúmenes documentales.
      .row.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_1.fit___box_6.fit___box_14(data-aos="fade-right")
            p.mb-0 La efectividad de este tipo de búsquedas depende de la aplicación de principios de estructuración del #[i prompt], especialmente el uso de delimitadores para separar claramente la base documental de las instrucciones de análisis. Esta práctica evita que el modelo interprete los datos de entrada como órdenes directas y contribuye a reducir alucinaciones factuales durante el procesamiento de información.
        .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/t5/img6.png", alt="").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
        .col
          h3 Caso de uso: optimización de búsqueda en el sector salud
      p.mb-5 En el siguiente caso aplicado, se analiza un proceso de recuperación y síntesis de información clínica: 
      .box___style_6(data-aos="zoom-in").mb-5
        .row.justify-content-center.align-items-center
          .col-xl.mb-4.mb-lg-0
            ul.fa-ul.estilo___ul.mb-3
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Escenario:] un profesional de la salud requiere sintetizar las contraindicaciones de un conjunto de fármacos a partir de un repositorio de protocolos clínicos de 500 páginas.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Proceso técnico:] se implementa un #[i super-prompt] que combina el patrón Persona (farmacólogo clínico)  con una técnica de #[i Chain-of-Thought]. La instrucción aplicada es:
            p.fit___p_box_6 #[b  “Analice secuencialmente cada protocolo; identifique interacciones críticas; genere un cuadro comparativo de riesgos”.]
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Resultado:] el profesional reduce el tiempo de investigación manual de varias horas a pocos minutos, obteniendo una síntesis técnica útil para apoyar la toma de decisiones clínicas.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/t5/img7.png", alt="alt").m-auto
      .color___box_3
        .px-5
          p.mb-0 La combinación entre técnicas de refinamiento, recuperación documental y razonamiento estructurado permite optimizar procesos de análisis en entornos de alta complejidad informativa. Estas capacidades convierten a la IAG en una herramienta estratégica para automatización, apoyo experto y mejora continua dentro de organizaciones orientadas a la transformación digital.
          Separador
          #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.3 Introducción a la automatización de flujos de trabajo mediante #[i prompts]
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_3.fit___box_7(data-aos="fade-right")
                p.mb-0 La automatización representa el nivel más avanzado de madurez tecnológica en el uso de la inteligencia artificial generativa (IAG). Este enfoque se fundamenta en el patrón #[i Output Automater], donde el resultado del #[i prompt] no corresponde únicamente a una respuesta narrativa, sino a un artefacto técnico capaz de ejecutar acciones en otros sistemas de forma automatizada.
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t5/img8.jpg', alt='').m-auto
            .col-xl
              figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/temas/t5/img9.svg', alt='' style="width: 75px")
              p.mb-0 Estos artefactos pueden incluir #[i scripts] de programación, archivos estructurados o instrucciones técnicas orientadas a interactuar con sistemas operativos, bases de datos o interfaces de programación de aplicaciones (#[i Application Programming Interfaces] [API]).
          p.mb-5 Mediante la ingeniería de #[i prompts], es posible diseñar flujos de trabajo destinados a automatizar tareas repetitivas de baja complejidad cognitiva y alto consumo de tiempo operativo. A continuación, se presentan algunos ejemplos de automatización mediante IA:
          .bg___carrusel
            .px-5
              SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Renombrado masivo de archivos
                  p.mb-0.text-center Organización automatizada de documentos según criterios específicos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Generación de pruebas de #[i software]
                  p.mb-0.text-center Creación automática de casos de prueba y validaciones funcionales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Estructuración de reportes financieros
                  p.mb-0.text-center Generación de informes organizados a partir de datos contables o administrativos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img13.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Automatización documental
                  p.mb-0.text-center Clasificación y distribución de archivos mediante reglas predefinidas.
              p.mb-5 En este contexto, el aprendiz debe desarrollar la capacidad de instruir al modelo para generar #[i scripts], por ejemplo en PowerShell o Python, que interactúen con sistemas operativos o servicios externos para optimizar procesos reales de la organización.
              .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
                .col-lg-auto
                  figure
                    img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
                .col
                  h3 Caso de uso: automatización en apoyo administrativo
              p.mb-5 Para comprender este contexto, se presenta un escenario aplicado asociado a la automatización documental en procesos administrativos: 
      .box___style_6(data-aos="zoom-in").mb-5
        .row.justify-content-center.align-items-center
          .col-xl.mb-4.mb-lg-0
            ul.fa-ul.estilo___ul.mb-3
              li.mb-3
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Escenario:] una empresa requiere clasificar diariamente cientos de facturas digitales y organizarlas en carpetas según proveedor y fecha de vencimiento.
              li.mb-3
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Proceso técnico:] se suministra una plantilla técnica a la IA junto con una muestra de datos. Posteriormente, se instruye al modelo para generar un #[i script] automatizado que lea los metadatos de los archivos y ejecute el movimiento jerarquizado dentro del servidor local.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Resultado:] se elimina el error humano asociado a la clasificación manual y se reduce el esfuerzo operativo en un 95 %, permitiendo que el personal administrativo concentre sus actividades en supervisión y gestión de proveedores. (McKinsey y Company, 2025). 
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/t5/img14.png", alt="alt").m-auto
      p.mb-0 La automatización mediante #[i prompts] permite transformar la IA en un componente activo dentro de los procesos organizacionales, incrementando eficiencia, trazabilidad y capacidad operativa en entornos empresariales de alta demanda documental y administrativa.

</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
