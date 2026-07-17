<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Ingeniería de #[i prompts] (#[i Prompt Engineering])
      .color___box_3
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2.fit___box_11(data-aos="fade-right")
                p.mb-0 La Ingeniería de #[i Prompts] (#[i Prompt Engineering]) se define técnicamente como el área especializada en diseñar, optimizar y refinar los estímulos o instrucciones (#[i prompts]) suministrados en lenguaje natural a un modelo de lenguaje de gran escala (#[i Large Language Model] [LLM]).
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/t4/img1.png", alt="alt").m-auto
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img2.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p.mb-0 Su objetivo principal consiste en orientar la interacción con la inteligencia artificial para maximizar el rendimiento del sistema y la relevancia de los resultados generados. En este sentido, el #[i prompting] funciona como un puente de programación entre el lenguaje humano y el lenguaje computacional (Méndez Solano, Durán Campos y Quirós Artiñano, 2024).
          p.mb-0 La calidad de un #[i prompt] influye directamente en la precisión, coherencia y utilidad del #[i output] producido por el modelo, especialmente en contextos técnicos, académicos y empresariales donde la reducción del margen de error resulta crítica.
          Separador
          #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.1 Anatomía y estructura técnica de un #[i prompt]
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_2.fit___box_1.fit___box_13(data-aos="fade-right")
                p.mb-0 La efectividad de un modelo de lenguaje de gran escala no depende exclusivamente de su capacidad computacional, sino también de la calidad y precisión de las instrucciones suministradas por el usuario. Un #[i prompt] de alto impacto se define como una estructura organizada de mensajes que especifica qué información es relevante y cómo debe generarse el producto final (#[i output]). En términos técnicos, el #[i prompting] constituye el mecanismo mediante el cual los modelos son “programados” para ejecutar tareas complejas con altos niveles de precisión y coherencia.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/t4/img3.png", alt="alt").m-auto
      p.mb-5 Un #[i prompt] no corresponde a una simple pregunta aislada. Por el contrario, se compone de múltiples elementos que condicionan el comportamiento y la salida del modelo. Los siguientes componentes conforman la estructura básica de un #[i prompt] técnico:
      .row.justify-content-center.mb-5
        .col-xl-6
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 4.
            span Estructura de #[i promt]
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t4/img4.svg', alt='Diagrama sobre la anatomía de un prompt que incluye componentes como instrucción, contexto, datos, formato y audiencia. ').m-auto
      .color___box_1
        .px-5
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t4/img5.png", alt="" ).m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Instrucción").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Corresponde a la declaración imperativa que define la tarea principal que el modelo debe ejecutar, por ejemplo: “Analice”, “Redacte”, “Clasifique” o “Depure”. Una instrucción clara reduce ambigüedades y orienta el procesamiento hacia el objetivo esperado. 
                .row(titulo="Contexto").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Proporciona antecedentes, entorno y condiciones relacionadas con la tarea. Incluir contexto permite que la predicción probabilística del modelo sea más específica y menos genérica. En esta sección también se asignan roles o perfiles, como “Actúe como un analista de datos sénior”, lo cual condiciona el nivel técnico y el vocabulario utilizado por el sistema.
                .row(titulo="Datos").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Constituyen la información base sobre la cual operará la IA, como documentos, fragmentos de código, reportes o bases de datos. Se recomienda utilizar delimitadores como ### o """ para separar claramente los datos de las instrucciones.
                .row(titulo="Formato").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Definen la estructura y presentación de la respuesta. Pueden incluir solicitudes de listas, cuadros comparativos, tablas, formato JSON o Markdown para integración en flujos automatizados.
                .row(titulo="Audiencia").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 El tono determina el estilo lingüístico de la respuesta, por ejemplo, técnico, académico o persuasivo. La audiencia establece el perfil del receptor final, permitiendo ajustar el nivel de complejidad del lenguaje y la profundidad conceptual (Jara Rey, 2024).
          p.mb-5 La combinación adecuada de estos componentes incrementa significativamente la calidad de las respuestas generadas por la IA y mejora la eficiencia en procesos de automatización, análisis y producción de contenido. En entornos corporativos y productivos, el diseño estratégico de prompts permite transformar modelos generalistas en herramientas altamente especializadas, capaces de responder a necesidades técnicas concretas con mayor precisión y trazabilidad.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
            .col
              h3 Delimitadores
          p.mb-5 Los delimitadores corresponden a secuencias de caracteres especiales o signos de puntuación utilizados para separar claramente las distintas secciones de un #[i prompt], como:
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 2.
                span Símbolos utilizados para estructurar #[i prompts]
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Símbolo
                      th.texto-left Significado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold ###
                      td.texto-left Se usa para crear encabezados o separar secciones dentro del #[i prompt].
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold """
                      td.texto-left Delimita bloques de texto, documentos extensos o contenido que debe analizarse como una unidad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold ---
                      td.texto-left Marca divisiones temáticas o separa bloques de información.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold < >
                      td.texto-left Funciona como marcador estructurado, similar a XML o HTML, para delimitar etiquetas o categorías de contenido.
          p.mb-5 Su función principal consiste en establecer fronteras precisas entre instrucciones, contexto, datos de entrada y ejemplos, permitiendo que el modelo de lenguaje de gran escala (#[i Large Language Model] [LLM]) procese cada bloque de información de manera organizada y eficiente. Dentro de la ingeniería de prompts, los delimitadores desempeñan las siguientes funciones:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Optimización de claridad y precisión
                  p.mb-0 Permiten identificar dónde inicia y termina cada sección del #[i prompt], reduciendo ambigüedades y evitando confusión entre instrucciones y datos de entrada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Organización sistemática del contenido
                  p.mb-0 Facilitan la estructuración de información compleja mediante encabezados como ### Instrucción ### o ### Ejemplo ###, mejorando la lógica interna del #[i prompt].
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Facilitación del procesamiento técnico
                  p.mb-0 El uso de delimitadores para aislar preguntas, contexto y datos constituye uno de los principios identificados para mejorar la calidad y relevancia de las respuestas generadas por IA (academia-ia.com, 2024).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Control del flujo de datos
                  p.mb-0 En aplicaciones avanzadas, delimitadores como las triples comillas """ permiten encapsular documentos completos para que el modelo los trate como objetos de análisis y no como instrucciones directas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img9.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 En términos técnicos, los delimitadores funcionan como un mecanismo de programación en lenguaje natural, permitiendo organizar la arquitectura del #[i prompt] de forma más coherente, precisa y eficiente. Su correcta implementación reduce errores interpretativos, mejora la calidad del #[i output] y fortalece la capacidad del modelo para ejecutar tareas complejas dentro de contextos profesionales y productivos.
      .color___box_3
        .px-5
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
            .col
              h3 Ejemplo: arquitectura de un #[i prompt] para la productividad
          p.mb-5 A continuación, se presenta la aplicación práctica de la anatomía de un #[i prompt] en un escenario orientado a la mejora continua dentro del sector administrativo. El objetivo consiste en estructurar instrucciones precisas que permitan al modelo de lenguaje de gran escala generar resultados coherentes, contextualizados y técnicamente útiles para la toma de decisiones organizacionales.
          TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
            .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 1. Contexto")
              .row.align-items-center
                .col-lg.order-1.mb-4.mb-lg-0
                  h4 Paso 1. Contexto
                  p.mb-0 ### Contexto ### Actúe como un consultor sénior en gestión de calidad y procesos organizacionales, con amplia experiencia en implementación de normas ISO.
                .col-lg-auto.order-2
                  figure
                    img(src="@/assets/curso/temas/t4/img10.svg", alt="" style="max-width: 130px").m-auto
            .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 2. Instrucción")
              .row.align-items-center
                .col-lg.order-1.mb-4.mb-lg-0
                  h4 Paso 2. Instrucción
                  p.mb-0 ### Instrucción ### Analice el siguiente informe de hallazgos de una auditoría interna e identifique los tres riesgos de mayor impacto para la continuidad del negocio. Posteriormente, proponga medidas correctivas inmediatas para cada caso.
                .col-lg-auto.order-2
                  figure
                    img(src="@/assets/curso/temas/t4/img11.svg", alt="" style="max-width: 130px").m-auto
            .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 3. Datos de entrada")
              .row.align-items-center
                .col-lg.order-1.mb-4.mb-lg-0
                  h4 Paso 3. Datos de entrada
                  p.mb-0 ### Datos de Entrada ### """ 1. Se detectó una falta de actualización en los respaldos de la base de datos de clientes desde hace 45 días. 2. El 30 % del personal nuevo no ha completado el módulo de capacitación sobre seguridad de la información. 3. El proveedor principal de suministros presenta retrasos logísticos recurrentes en la última milla. """
                .col-lg-auto.order-2
                  figure
                    img(src="@/assets/curso/temas/t4/img12.svg", alt="" style="max-width: 130px").m-auto
            .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 4. Indicadores de formato")
              .row.align-items-center
                .col-lg.order-1.mb-4.mb-lg-0
                  h4 Paso 4. Indicadores de formato
                  p.mb-0 ### Indicadores de Formato ### Presente los resultados en un cuadro con tres columnas: “Riesgo identificado”, “Impacto potencial” y “Acción correctiva sugerida”. No exceda las 200 palabras en total.
                .col-lg-auto.order-2
                  figure
                    img(src="@/assets/curso/temas/t4/img13.svg", alt="" style="max-width: 130px").m-auto
            .tarjeta.color-acento-botones--borde.p-4(titulo="Paso 5. Tono y audiencia")
              .row.align-items-center
                .col-lg.order-1.mb-4.mb-lg-0
                  h4 Paso 5. Tono y audiencia
                  p.mb-0 ### Tono y Audiencia ### Utilice un tono profesional, ejecutivo y directo. El informe está dirigido a la junta directiva de la organización, por lo que debe enfatizar la mitigación de riesgos operativos.
                .col-lg-auto.order-2
                  figure
                    img(src="@/assets/curso/temas/t4/img14.svg", alt="" style="max-width: 130px").m-auto
          p.mb-0 La estructuración adecuada de estos componentes incrementa la precisión de la respuesta y permite obtener resultados alineados con objetivos técnicos y estratégicos.
          Separador
          #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 4.2 Técnicas de #[i prompting]
          p.mb-5 Las técnicas de #[i prompting] se definen como estrategias metodológicas aplicadas al lenguaje natural para guiar el proceso de inferencia de la inteligencia artificial. Su propósito es asegurar que la salida generada sea pertinente, coherente y verificable. Estas técnicas se clasifican según su nivel de complejidad y el tipo de razonamiento que exigen al modelo (academia-ia.com, 2024).
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
            .col
              h3 Técnicas basadas en el aprendizaje por ejemplos
          p.mb-5 Estas técnicas determinan cuánta información previa recibe el modelo para realizar una tarea específica mediante reconocimiento de patrones. A continuación, se presentan las principales técnicas basadas en ejemplos:
      .bg___slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 #[i Zero-Shot Prompting]
                  p.mb-0 Consiste en suministrar una instrucción directa sin ejemplos previos. Es útil para tareas de creatividad, lluvia de ideas o consultas generales en las que se espera que el modelo trabaje a partir de su conocimiento paramétrico.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 #[i One-Shot Prompting]
                  p.mb-0 Proporciona un único ejemplo o contexto para guiar la respuesta. Es efectivo para estandarizar estilo, tono o formato de salida, por ejemplo, cuando se requiere redactar un documento siguiendo un modelo institucional específico.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 #[i Few-Shot Prompting]
                  p.mb-0 Suministra un pequeño conjunto de ejemplos etiquetados, usualmente entre 2 y 5. Es una técnica robusta para tareas que requieren precisión técnica y consistencia, ya que permite al LLM identificar reglas complejas y adaptarse a dominios especializados, como el jurídico o el desarrollo de #[i software], sin reentrenamiento masivo (Méndez Solano, Durán Campos y Quirós Artiñano, 2024).
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img17.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Estas estrategias permiten ajustar el comportamiento del modelo mediante ejemplos progresivos, lo que mejora la consistencia del #[i output] en tareas repetitivas o altamente especializadas.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
        .col
          h3 Técnicas de razonamiento lógico
      p.mb-5 Estas estrategias orientan al modelo para estructurar mejor sus procesos de inferencia, facilitar la revisión de los resultados y reducir errores asociados a respuestas no fundamentadas.  El razonamiento lógico integra diversas técnicas fundamentales, entre las que se destacan las siguientes: 
      AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in").mb-4
        .row(titulo="<em>Chain-of-Thought</em> (CoT - cadena de pensamiento)").ajuste-cajaAcordion.ajuste-vineta
          p.mb-3 Instruye al modelo para resolver un problema mediante pasos intermedios. Al descomponer una tarea compleja en una secuencia lógica, mejora la precisión en razonamientos aritméticos, deductivos o procedimentales.
        .row(titulo="<em>Tree of Thoughts</em> (ToT - árbol de pensamiento)").ajuste-cajaAcordion.ajuste-vineta
          p.mb-3 Representa una evolución del CoT. Permite explorar varias rutas de razonamiento y comparar soluciones tentativas antes de consolidar una respuesta final. Es útil en resolución deliberada de problemas complejos.
        .row(titulo="<em>Self-Consistency</em> (autoconsistencia)").ajuste-cajaAcordion.ajuste-vineta
          p.mb-3 El modelo genera varias rutas de solución para un mismo #[i prompt] y luego selecciona la respuesta más consistente. Esta técnica permite estimar la estabilidad de la respuesta generada.
        .row(titulo="<em>Skeleton-of-Thought</em> (esqueleto de pensamiento)").ajuste-cajaAcordion.ajuste-vineta
          p.mb-3 Consiste en construir primero una estructura general o esquema base, que luego se desarrolla con mayor detalle. Es útil para producir documentos extensos, organizados y coherentes.
      p.mb-5 El uso adecuado de estas técnicas fortalece la calidad de las respuestas generadas por la IA, especialmente en tareas que requieren precisión, trazabilidad y razonamiento estructurado.
      .box___style_2.fit___box_1(data-aos="zoom-in").mb-5
        p.mb-0 Los invitamos a revisar este podcast, el cual sintetiza los principales contenidos desarrollados en el componente formativo. Este audio fue creado con la herramienta de inteligencia artificial #[i NotebookLM], evidenciando una aplicación práctica del uso de la IA en escenarios educativos y de generación de contenido.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t1/img36.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Síntesis componente formativo"
                  :audio="audio2"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t4/img18.png" ).m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
        .col
          h3 Técnicas de control y seguridad
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_3.fit___box_14(data-aos="fade-right")
            p.mb-0 En implementaciones avanzadas de inteligencia artificial generativa (IAG), resulta fundamental establecer mecanismos de control que mantengan al modelo de lenguaje de gran escala (#[i Large Language Model] [LLM]) dentro de parámetros temáticos, éticos y operativos previamente definidos.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img19.jpg', alt='').m-auto
        .col-xl
          p.mb-0 Estas técnicas permiten reducir riesgos asociados a desinformación, respuestas irrelevantes o generación de contenido no autorizado, fortaleciendo así la confiabilidad y seguridad de los sistemas de IA en entornos productivos. A continuación, se presentan algunas de las principales técnicas de control y seguridad utilizadas en ingeniería de #[i prompts]:
      .color___box_2
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .box___style_h4_p.h-100
                h4.mb-0.text-center.fit___h4_card #[i Rails] temáticos
                .box___card_p
                  p.mb-0 Mantienen al modelo enfocado estrictamente en el dominio o tema solicitado, evitando desviaciones hacia información irrelevante o fuera de contexto.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_h4_p.h-100
                h4.mb-0.text-center.fit___h4_card #[i Rails] de verificación
                .box___card_p
                  p.mb-0 Orientan al LLM para que genere respuestas fundamentadas exclusivamente en evidencia documental o fuentes verificadas, reduciendo afirmaciones especulativas o no sustentadas.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .box___style_h4_p.h-100
                h4.mb-0.text-center.fit___h4_card Instrucciones de silencio estratégico
                .box___card_p
                  p.mb-0 Indican al modelo que debe abstenerse de responder cuando no dispone de información suficiente o cuando las fuentes recuperadas son ambiguas o contradictorias.
          p.mb-5 La incorporación de estas estrategias mejora la estabilidad del sistema, fortalece la trazabilidad de las respuestas y reduce significativamente el riesgo de alucinaciones generadas por el modelo.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
            .col
              h3 ¿Qué son los '#[i rails]' o vías de control en los #[i prompts]?
          p.mb-5 En el contexto de la ingeniería de #[i prompts], los #[i rails] o vías de control corresponden a guías, directrices y límites técnicos definidos dentro de una instrucción para restringir el comportamiento de un modelo de lenguaje de gran escala.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img20.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p.mb-0 El propósito principal de esta técnica consiste en limitar el espacio de posibles respuestas del modelo, garantizando que #[b el #[i output]] permanezca dentro de parámetros temáticos, éticos y de veracidad previamente establecidos.
          p.mb-5 En términos operativos, los #[i rails] funcionan como principios de control codificados mediante instrucciones explícitas y mandatos imperativos dentro del #[i prompt]. Estas restricciones orientan el razonamiento del modelo y reducen riesgos asociados a desinformación, respuestas especulativas o generación de contenido inseguro.
          .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
            h4.mb-0 Clasificación técnica de los #[i rails]
          p.mb-5 En entornos corporativos y de alta precisión, los #[i rails] se clasifican en diferentes categorías según su propósito funcional. Los siguientes tipos de #[i rails] son utilizados con frecuencia en implementaciones avanzadas:
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .box___style_h4_p.h-100
                h4.mb-0.text-center.fit___h4_card #[i Rails] temáticos
                .box___card_p
                  p.mb-0 Mantienen el enfoque del modelo dentro de un dominio específico, evitando que el sistema incorpore información ajena al objetivo de la instrucción inicial.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_h4_p.h-100
                h4.mb-0.text-center.fit___h4_card #[i Rails] de verificación de hechos (#[i fact-checking])
                .box___card_p
                  p.mb-0 Restringen las respuestas a información basada en evidencia documental verificable, especialmente en arquitecturas RAG. Desincentivan afirmaciones especulativas o sustentadas únicamente en conocimiento paramétrico.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .box___style_h4_p.h-100
                h4.mb-0.text-center.fit___h4_card #[i Rails] anti-evasión
                .box___card_p
                  p.mb-0 Impiden que el modelo produzca respuestas destinadas a eludir restricciones operativas, políticas de seguridad o directrices éticas. Son esenciales para garantizar un uso seguro y responsable de la IA.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              p La implementación adecuada de #[i rails] fortalece la gobernanza de sistemas de IA y mejora la confiabilidad de las respuestas generadas en contextos empresariales, jurídicos, académicos y administrativos.
              .box___style_1(data-aos="fade-right")
                p.mb-0 Asimismo, estas técnicas constituyen un componente fundamental en arquitecturas modernas orientadas a minimizar riesgos de alucinación, proteger información sensible y garantizar un comportamiento alineado con criterios éticos y regulatorios.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/t4/img21.png", alt="alt").m-auto
      .color___box_4
        .px-5
          .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
            h4.mb-0 Implementación y el “silencio estratégico”
          p.mb-5 Una de las aplicaciones más avanzadas de los #[i rails] es la instrucción de abstención o silencio estratégico. En lugar de permitir que el modelo “rellene los vacíos” con información inventada ante la falta de datos, se le ordena explícitamente indicar cuando la información proporcionada es insuficiente para responder con un alto grado de confianza. A continuación, se presenta un ejemplo de directriz técnica:
          .row.justify-content-center.mb-5
            .col-xl-10
              .box___style_5(data-aos="zoom-in")
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t4/img22.jpg', alt='').m-auto
                  .col-xl.fit___box_container
                    h5 Silencio estratégico
                    p.mb-0 “Si la información contenida en los extractos adjuntos no es suficiente para responder la consulta, indíquelo explícitamente y no utilice su memoria interna”.
          .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
            h4.mb-0 Aplicación en el sector productivo 
          p.mb-5 En sectores de alta responsabilidad, como el jurídico o el de salud, los #[i rails] constituyen una capa de seguridad indispensable.
          .row.justify-content-center.mb-5
            .col-xl-8
              .box___style_5.fit___box_4(data-aos="zoom-in")
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t4/img23.jpg', alt='').m-auto
                  .col-xl.fit___box_container
                    p.mb-0 #[b Por ejemplo:] al solicitar el análisis de un contrato, pueden aplicarse #[i rails] de veracidad exigiendo que el modelo cite textualmente el fragmento exacto que respalda cada conclusión.
          p.mb-5 Esto no solo mejora la precisión, sino que también facilita la auditoría y la supervisión humana experta, que continúa siendo el pilar de la integración responsable de la IA.
          .row.justify-content-center.mb-0
            .col-xl-8
              .box___style_5.fit___box_4(data-aos="zoom-in")
                .row.align-items-center
                  .col-xl-auto
                    figure
                      img(src='@/assets/curso/temas/t4/img24.jpg', alt='').m-auto
                  .col-xl.fit___box_container
                    h5 Ejemplo de #[i prompt] con #[i rails]
                    p.mb-0 Escriba un resumen técnico sobre la energía solar, enfocándose únicamente en sus beneficios ambientales. Evite discutir costos, desafíos tecnológicos o menciones a la energía eólica.

</template>

<script>
import audio2 from '@/assets/componentes/audios/Sintesis_componente_formativo.m4a'
export default {
  name: 'Tema4',
  data: () => ({
    audio2,
    mostrarIndicadorTarjetaAudio: true,
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
