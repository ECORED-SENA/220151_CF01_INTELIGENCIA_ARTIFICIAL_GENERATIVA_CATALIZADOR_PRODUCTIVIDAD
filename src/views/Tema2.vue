<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Taxonomía y ecosistema de plataformas de IAG
      .color___box_1
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2.fit___box_8(data-aos="fade-right")
                p.mb-0 La rápida evolución del ecosistema de la inteligencia artificial generativa (IAG) exige que el profesional identifique no solo las herramientas disponibles, sino también la arquitectura y el propósito específico para el cual fueron diseñadas. Esta clasificación técnica permite optimizar la selección de recursos tecnológicos de acuerdo con los objetivos de productividad organizacional.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/t2/img1.png", alt="alt").m-auto
          #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.1 Clasificación por funcionalidad y tipo de contenido
          p.mb-5 La clasificación de las herramientas de IAG se fundamenta en su capacidad para procesar y generar distintas modalidades de datos, es decir, según la naturaleza del #[i output]. Aunque las plataformas más reconocidas operan mediante modelos de lenguaje de gran escala (#[i Large Language Models] [LLM]), el ecosistema actual incorpora arquitecturas especializadas orientadas a diferentes tipos de contenido. Las plataformas de IAG pueden clasificarse en las siguientes categorías funcionales:
          .bg___slider.mb-5
            .px-5
              .ajuste-slider(data-aos="zoom-in")
                SlyderA(tipo="b")
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Generadores de texto (LLM y #[i chatbots])
                      p Especializados en Procesamiento de Lenguaje Natural (#[i Natural Language Processing] [NLP]). Estas plataformas constituyen el núcleo de la interacción humano-máquina contemporánea, ya que generan respuestas coherentes mediante la predicción probabilística de #[i tokens]. 
                      p.mb-0 Entre las principales referencias se encuentran ChatGPT (OpenAI), Claude (Anthropic), Gemini (Google) y DeepSeek. Actualmente, muchas de estas plataformas evolucionan hacia modelos multimodales que integran visión artificial, procesamiento de voz y generación de imágenes.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Generadores de imagen (modelos de difusión)
                      p Operan mediante arquitecturas que asocian descripciones semánticas con patrones visuales. A partir de instrucciones textuales (#[i prompts]), estos sistemas generan contenido gráfico original. 
                      p.mb-0 En el ecosistema profesional destacan Midjourney, DALL-E y Stable Diffusion como referentes especializados en modelos de difusión.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Generadores de código (asistentes de programación)
                      p Son herramientas optimizadas para el desarrollo de #[i software]. Permiten generar funciones completas, realizar depuración de errores (#[i debugging]), traducir lógica entre distintos lenguajes de programación y ofrecer asistencia en tiempo real dentro de entornos de desarrollo integrados (#[i Integrated Development Environments] [IDE]). 
                      p.mb-0 Un referente destacado es GitHub Copilot, basado en el modelo Codex y entrenado con grandes repositorios de código abierto.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
                  .row.justify-content-center.align-items-center
                    .col-xl-6.mb-4
                      h4 Generadores de voz y audio
                      p Corresponden a sistemas entrenados para síntesis de voz (#[i Text-to-Speech]) con entonaciones naturales o para la creación de música y paisajes sonoros a partir de parámetros técnicos.
                      p.mb-0 En la industria actual destacan plataformas como ElevenLabs, especializada en generación de voz, y Suno o MusicLM, orientadas a generación de audio y música.
                    .col-xl-6
                      figure
                        img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_3.fit___box_7(data-aos="fade-right")
            p.mb-0 La expansión de estas categorías evidencia que la IAG no constituye una única tecnología, sino un ecosistema de arquitecturas especializadas que convergen hacia modelos multimodales cada vez más integrados. Esta evolución incrementa las posibilidades de automatización, asistencia técnica y creación de contenido en múltiples sectores productivos.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img7.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t2/img8.svg', alt='' style="width: 75px")
          p.mb-0 De igual manera, la selección adecuada de una plataforma depende del tipo de tarea, del nivel de precisión requerido y de las condiciones de seguridad, trazabilidad y gobernanza de la información dentro de cada organización.
      .color___box_2
        .px-5
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 3.
            span Clasificación de herramientas de IAG por funcionalidad y tipo de contenido
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t2/img9.png', alt='Esquema de clasificación de herramientas de inteligencia artificial generativa según categorías como generación de texto, imágenes, código y audio. ').m-auto
          Separador
          #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.2 Análisis comparativo de plataformas y ámbito de aplicación
          p.mb-5 Para realizar una selección técnica rigurosa de plataformas de inteligencia artificial generativa (IAG), es necesario considerar las condiciones mínimas de funcionamiento, las capacidades especializadas y los requerimientos de seguridad asociados a cada herramienta disponible en el mercado actual (Dantart, 2025).
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img10.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p.mb-0 En el sector productivo, la elección de una plataforma no debe fundamentarse únicamente en su popularidad, sino también en criterios técnicos como el tipo de arquitectura implementada (paramétrica o consultiva), la protección de datos, la capacidad de procesamiento de contexto y el nivel de integración con entornos empresariales.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
            .col
              h3 Plataformas de propósito general y especializadas
          p.mb-5 A continuación, se sintetizan las principales plataformas y sus ámbitos de especialización:
      .bg___carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img11.png' style="max-width: 190px").m-auto
              h4.mb-3.estilo-text ChatGPT (OpenAI)
              p.mb-0.text-center Destaca por su versatilidad y por la integración de modelos como GPT-4o y GPT-5, optimizados para razonamiento lógico y multimodalidad nativa.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img12.png' style="max-width: 190px").m-auto
              h4.mb-3.estilo-text Claude (#[i Anthropic])
              p.mb-0.text-center Se caracteriza por una amplia ventana de contexto, adecuada para procesar libros y documentos técnicos extensos, además de un fuerte enfoque en seguridad y ética constitucional del modelo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img13.png' style="max-width: 190px").m-auto
              h4.mb-3.estilo-text Gemini (Google)
              p.mb-0.text-center Integra capacidades avanzadas de búsqueda y conexión con ecosistemas de productividad en la nube.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img14.png' style="max-width: 190px").m-auto
              h4.mb-3.estilo-text Perplexity AI
              p.mb-0.text-center Funciona como un motor de búsqueda conversacional orientado a IA consultiva, fundamentando sus respuestas mediante citas verificables y reduciendo alucinaciones factuales.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img15.png' style="max-width: 190px").m-auto
              h4.mb-3.estilo-text DeepSeek y Llama (Meta)
              p.mb-0.text-center Modelos orientados a despliegues locales o configuraciones personalizadas para organizaciones que priorizan soberanía y control de datos.
          p.mb-5 Las siguientes plataformas representan referentes especializados en modelos de código abierto y soluciones de IA consultiva para entornos corporativos y jurídicos.
      .bg___carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img16.png' style="max-width: 190px").m-auto
              h4.mb-3.estilo-text Mistral y Qwen
              p.mb-0.text-center Referentes en modelos de código abierto con alta eficiencia en procesamiento de #[i embeddings] y recuperación de información.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img17.png' style="max-width: 190px").m-auto
              h4.mb-3.estilo-text Harvey y Protégé
              p.mb-0.text-center Plataformas de IA consultiva especializadas en el ámbito jurídico y corporativo, diseñadas bajo el paradigma de “archivero experto”.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img18.png' style="max-width: 190px").m-auto
              h4.mb-3.estilo-text Lexis+ AI y Westlaw AI-AR
              p.mb-0.text-center Herramientas de investigación jurídica basadas en arquitecturas RAG para fundamentar respuestas en bases legislativas verificadas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t2/img19.png' style="max-width: 190px").m-auto
              h4.mb-3.estilo-text ChatLaw y Legal Assist AI
              p.mb-0.text-center Soluciones diseñadas para sistemas judiciales específicos, integradas con grafos de conocimiento y jerarquías normativas como la Pirámide de Kelsen (Dantart, 2025).
          p.mb-5 La diversidad de plataformas evidencia que el ecosistema de IAG evoluciona hacia modelos cada vez más especializados, capaces de responder a necesidades concretas de diferentes sectores económicos y profesionales.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
        .col
          h3 Ámbitos de aplicación en el sector productivo
      p.mb-5 A continuación, se presenta un video de los principales ámbitos de aplicación de la inteligencia artificial generativa y su impacto estratégico en sectores clave de la economía, la educación y la transformación digital.
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/Y4cN6Yk3ArM" title="Aplicaciones estratégicas de la IA generativa en sectores productivos y sociales" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption.fit___figcaption-video #[b Video]. Aplicaciones estratégicas de la IA generativa en sectores productivos y sociales
      p.mb-5 La adopción de plataformas de IAG en estos sectores incrementa la capacidad de análisis, reduce tiempos operativos y fortalece la toma de decisiones fundamentadas en datos y conocimiento contextualizado.
      .box___style_6(data-aos="zoom-in").mb-5
        h5 Caso de uso: selección de plataforma para el desarrollo de #[b #[i software]]
        p A continuación, se presenta un escenario aplicado relacionado con migración tecnológica en una empresa de base tecnológica.
        .row.justify-content-center.align-items-center.mb-3
          .col-xl.mb-4.mb-lg-0
            ul.fa-ul.estilo___ul.mb-3
              li.mb-3
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Escenario:] una organización requiere migrar un sistema legado desarrollado en COBOL hacia Python.
            p El proceso técnico contempla las siguientes etapas:
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span A
                | 
                p.mb-0 Se descarta el uso de modelos de propósito general sin integración con entornos de desarrollo integrados (#[i Integrated Development Environments] [IDE]), debido a riesgos asociados a seguridad y privacidad del código fuente. 
              li 
                .lista-ol--cuadro__vineta
                  span B
                | 
                p.mb-0 Se selecciona una herramienta especializada en generación de código, como GitHub Copilot, configurada bajo un modelo SaaS corporativo que garantice protección de la información propietaria. 
              li 
                .lista-ol--cuadro__vineta
                  span C
                | 
                p.mb-0 Se ejecutan instrucciones técnicas orientadas a identificar la lógica de negocio presente en el código heredado y generar equivalencias funcionales en Python, siguiendo principios de arquitectura limpia y mantenibilidad del sistema. 
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/t2/img20.png", alt="alt").m-auto
        ul.fa-ul.estilo___ul.mb-3
          li.mb-3
            span.fa-li
              i.fas.fa-check-circle
            | #[b Resultado:] se logra una reducción aproximada del 40 % en el esfuerzo manual requerido para la migración, permitiendo que el equipo de ingeniería concentre sus actividades en validación lógica, pruebas de integración y control de calidad del nuevo sistema. (Brynjolfsson et al., 2023).
      p.mb-0 Este tipo de implementación evidencia cómo la IAG puede integrarse estratégicamente en procesos de modernización tecnológica, acelerando ciclos de desarrollo y fortaleciendo la productividad organizacional.

</template>

<script>
export default {
  name: 'Tema2',
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
