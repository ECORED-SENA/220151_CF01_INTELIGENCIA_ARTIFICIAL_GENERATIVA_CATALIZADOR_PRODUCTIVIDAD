<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Fundamentos y arquitectura de la IA generativa
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_7(data-aos="fade-right")
            p.mb-0 La inteligencia artificial generativa (IAG) surge como una evolución de la inteligencia artificial tradicional, impulsada por avances en computación, matemáticas y procesamiento de datos. Su desarrollo se fundamenta en décadas de investigación orientadas a crear sistemas capaces de simular capacidades cognitivas humanas. A diferencia de los modelos convencionales, que se limitan a clasificar o predecir información, la IAG puede generar contenido original, como texto, imágenes, audio o código, a partir de patrones aprendidos en grandes volúmenes de datos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/t1/img1.png", alt="alt").m-auto
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Evolución tecnológica y conceptos de la IAG
      .color___box_1
        .px-5
          p.mb-5 La #[b inteligencia artificial] surge como una disciplina científica orientada a emular capacidades cognitivas humanas mediante sistemas computacionales. Su evolución histórica ha estado marcada por avances conceptuales y tecnológicos que dieron origen a la actual #[b inteligencia artificial generativa (IAG)].
          LineaTiempoE.color-acento-contenido(data-aos="zoom-in").mb-5
            .row(titulo="1912" subtitulo="")
              .col-lg-6.mb-4.mb-lg-0
                p #[b Leonardo Torres Quevedo] desarrolla el autómata ajedrecista, precursor de la automatización lógica y la cibernética.
              .col-lg-6(data-aos="fade-left")
                figure
                  img(src="@/assets/curso/temas/t1/img2.png", alt="alt").m-auto
            .row(titulo="1950" subtitulo="")
              .col-lg-6.mb-4.mb-lg-0
                p #[b Alan Turing] publica #[i Computing Machinery and Intelligence] y propone el #[b #[i test] de #[i Turing]] como criterio para evaluar comportamiento inteligente en máquinas.
              .col-lg-6(data-aos="fade-left")
                figure
                  img(src="@/assets/curso/temas/t1/img3.png", alt="alt").m-auto
            .row(titulo="1956" subtitulo="")
              .col-lg-6.mb-4.mb-lg-0
                p #[b John McCarthy] acuña el término “inteligencia artificial” durante la #[b Conferencia de Dartmouth].
              .col-lg-6(data-aos="fade-left")
                figure
                  img(src="@/assets/curso/temas/t1/img4.png", alt="alt").m-auto
            .row(titulo="Décadas posteriores" subtitulo="")
              .col-lg-6.mb-4.mb-lg-0
                p Investigadores como #[b Marvin Minsky] y #[b Claude Shannon] impulsan el desarrollo interdisciplinar de la IA mediante matemáticas, estadística y ciencias cognitivas.
              .col-lg-6(data-aos="fade-left")
                figure
                  img(src="@/assets/curso/temas/t1/img5.png", alt="alt").m-auto
            .row(titulo="Actualidad" subtitulo="")
              .col-lg-6.mb-4.mb-lg-0
                p Se consolida la #[b inteligencia artificial generativa (IAG)], enfocada en la creación de contenido como texto, imágenes, audio y código.
              .col-lg-6(data-aos="fade-left")
                figure
                  img(src="@/assets/curso/temas/t1/img6.png", alt="alt").m-auto
          p.mb-5 La siguiente comparación permite identificar las diferencias entre la #[b IA tradicional o discriminativa] y la #[b inteligencia artificial generativa (IAG)].
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3.text-white
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img7.png', alt="" ).m-auto
              h4 IA tradicional o discriminativa
              .box___card_sinbordes_p
                p.mb-0 Clasifica, reconoce patrones o predice etiquetas a partir de datos de entrada.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100.box___card_sinbordes_color_2
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img8.png', alt="" ).m-auto
              h4 Inteligencia artificial generativa (IAG)
              .box___card_sinbordes_p
                p.mb-0 Genera contenido original mediante modelos de aprendizaje automático (#[i machine learning]) entrenados con grandes volúmenes de información.
      p.mb-5 La #[b IAG] utiliza criterios probabilísticos para identificar estructuras profundas y producir nuevos resultados, especialmente en tareas de #[b procesamiento de lenguaje natural (NLP)]. En el sector productivo, esta tecnología no solo automatiza procesos, sino que también fortalece la productividad, optimiza flujos de trabajo y favorece la innovación tecnológica (Ministerio de Ciencia, Innovación y Universidades de España, 2019).
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
        .col
          h3  El salto exponencial: de la IA tradicional a la generativa
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p.mb-0 Durante décadas, la inteligencia artificial (IA) se enfocó en sistemas basados en reglas y en aprendizaje discriminativo, orientado a la clasificación de datos existentes. Un punto de inflexión significativo en la percepción pública de la potencia algorítmica ocurrió en 1997, cuando el programa Deep Blue, de IBM, superó al campeón mundial de ajedrez Garry Kasparov (IBM Corporation, s. f.). Este hecho evidenció el potencial del procesamiento masivo en tareas lógicas complejas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/t1/img10.png", alt="alt").m-auto
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Figura 1.
            span Miembros del equipo Deep Blue en el partido de 1996
          figure(data-aos="zoom-in").mb-1
            img(src='@/assets/curso/temas/t1/img11.png', alt='Fotografía histórica del equipo desarrollador de Deep Blue durante el enfrentamiento de ajedrez contra Garry Kasparov, relacionada con la evolución de la inteligencia artificial. ').m-auto
          figcaption(data-aos="zoom-in") #[b Nota.] Tomado de IBM Corporation. (s. f.). Deep Blue. IBM.
      .color___box_2
        .px-5
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              .box___style_3.fit___box_8(data-aos="fade-right")
                p.mb-0 Sin embargo, la transición hacia la inteligencia artificial generativa (IAG) se ha producido de manera exponencial durante la última década, impulsada por la arquitectura de redes neuronales profundas y la aparición de los modelos de lenguaje de gran escala (#[i Large Language Models] [LLM]).
            .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img12.jpg', alt='').m-auto
            .col-xl
              figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
                img(src='@/assets/curso/temas/t1/img13.svg', alt='' style="width: 75px")
              p.mb-0 La historia reciente de la IAG tiene un hito disruptivo en noviembre de 2022, con el lanzamiento de ChatGPT. Este evento catalizó la atención global y evidenció la capacidad de estos sistemas para generar contenido original, como texto, código e imágenes, con una fluidez técnica y una coherencia probabilística sin precedentes.
          p.mb-5 Este desarrollo no representa un cambio incremental, sino un salto cualitativo en la interfaz de comunicación entre el lenguaje natural humano y el lenguaje computacional.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
            .col
              h3 La nueva revolución industrial y el impacto en la productividad
          p.mb-5 La eclosión de la inteligencia artificial generativa (IAG) se define técnicamente como una revolución tecnológica que está reconfigurando la estructura económica y social del siglo XXI. A diferencia de las revoluciones industriales previas, centradas principalmente en la mecanización de tareas manuales, esta nueva fase impacta de manera directa el sector del conocimiento y la gestión de la información.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img14.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p.mb-0 En este contexto, la IAG actúa como un catalizador de la productividad en industrias tan diversas como la salud, el #[i marketing], el derecho y el desarrollo de #[i software]. Su capacidad para automatizar procesos cognitivos, optimizar flujos de trabajo y generar contenido especializado está transformando la manera en que las organizaciones producen valor y toman decisiones.
          p.mb-5 Desde una perspectiva de mejora continua, se estima que para el año 2030 el impacto económico global de la IA podría alcanzar los 14 billones de euros, duplicando las tasas de crecimiento económico en los países que logren integrar estas herramientas de manera estratégica. A continuación, se sintetizan algunos de los principales impactos de la inteligencia artificial generativa (IAG) en distintos sectores productivos:
          .bg___carrusel
            .px-5
              .row.align-items-center.mb-5
                .col-xl-4(data-aos="fade-right")
                  figure.d-none.d-xl-block
                    img(src='@/assets/curso/temas/t1/img15.png', alt='' style="max-width: 350px").m-auto
                .col-xl-8(data-aos="fade-left")
                  SlyderF(columnas="col-lg-6 col-xl-6")
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t1/img16.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Salud
                      p.mb-0.text-center Optimización de diagnósticos, análisis de datos clínicos y apoyo en medicina personalizada.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t1/img17.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text #[i Marketing]
                      p.mb-0.text-center Generación automatizada de contenidos, segmentación avanzada y análisis predictivo del comportamiento del consumidor.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t1/img18.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Derecho
                      p.mb-0.text-center Automatización de revisión documental, análisis normativo y asistencia en procesos jurídicos.
                    .tarjeta.color-acento-botones.p-4
                      .row.justify-content-center.mb-3
                        .col-8
                          img(src='@/assets/curso/temas/t1/img19.svg' style="max-width: 90px").m-auto
                      h4.mb-3.estilo-text Desarrollo de #[i software]
                      p.mb-0.text-center Generación de código, detección de errores y aceleración de ciclos de desarrollo tecnológico.
              p.mb-0 Esta transformación exige que el aprendiz desarrolle competencias avanzadas no solo en la operación de herramientas basadas en IA, sino también en la comprensión ética, crítica y técnica de los algoritmos que sustentan esta nueva era industrial.
              Separador
              #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
                h2 1.2 Arquitectura técnica: #[i tokens] y modelos de lenguaje de gran escala (LLM)
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_1(data-aos="fade-right")
            p.mb-0 La arquitectura base de la inteligencia artificial generativa (IAG) actual se fundamenta en los modelos de lenguaje de gran escala (#[i Large Language Models] [LLM]). Técnicamente, estos modelos son sistemas entrenados para realizar tareas de predicción de cadenas de texto mediante el cálculo de la probabilidad de ocurrencia de una unidad mínima de información denominada #[i token].
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/t1/img20.png", alt="alt").m-auto
      p.mb-5 Un #[i token] puede representar un carácter, una palabra o una porción de esta. El proceso operativo de un LLM no implica “comprensión” en el sentido biológico, sino una predicción estadística basada en el contexto anterior o circundante de los datos (Jara Rey, 2024). Esta arquitectura se fundamenta en dos paradigmas principales:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .box___style_4.h-100
            .row.justify-content-center.mb-3.text-white
              .col-12
                figure.mb-4(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t1/img21.svg', alt="" style="max-width: 90px")
              h4 IA generativa de propósito general
              p.mb-0 Opera mediante conocimiento paramétrico “congelado” durante el entrenamiento. Está optimizada para la fluidez conversacional y la coherencia estadística.
        .col-xl-6.col-md-9(data-aos="zoom-in")
          .box___style_4.h-100.box___style_4_color_2
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t1/img22.svg', alt="" style="max-width: 90px")
              h4 IA consultiva (#[i Retrieval-Augmented Generation] [RAG])
              p.mb-0 Implementa generación aumentada por recuperación, donde el modelo consulta fuentes externas, curadas y autorizadas antes de generar una respuesta.
      p.mb-5 Los #[i tokens] pueden entenderse como las unidades mínimas o “átomos” de procesamiento de la información. Es un error común considerar que el modelo procesa palabras completas como lo hace un humano. En realidad, los sistemas de IA descomponen el lenguaje natural en segmentos numéricos denominados #[i tokens] (Jara Rey, 2024).
      .row.justify-content-center.mb-5
        .col-xl-10
          .box___style_5(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t1/img23.jpg', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 Si el texto se asimila a una construcción compleja, los #[i tokens] corresponden a las piezas individuales o bloques que, al combinarse bajo rigurosas reglas estadísticas y patrones de datos, permiten generar contenido coherente. La operación de un LLM se define técnicamente como un sistema de predicción de cadenas de texto.
      p.mb-5 Cuando recibe un estímulo (#[i prompt]), el modelo analiza la secuencia previa de #[i tokens] y calcula, con base en miles de millones de parámetros, cuál es el siguiente token con mayor probabilidad de ocurrencia dentro de un contexto específico. Es fundamental subrayar que este proceso no implica una “comprensión” biológica, sino una asociación probabilística de alta precisión aprendida durante el entrenamiento.
      .box___style_6(data-aos="zoom-in")
        h5 Ejemplo técnico de tokenización: optimización en la gestión administrativa y jurídica
        p La aplicación práctica de esta arquitectura resulta especialmente relevante en sectores con alta densidad de información, como el apoyo administrativo y el sector jurídico, donde el potencial de transformación mediante IA es altamente significativo. A continuación, se describe un escenario aplicado:
        .row.justify-content-center.align-items-center.mb-3
          .col-xl.mb-4.mb-lg-0
            ul.fa-ul.estilo___ul.mb-4
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Escenario de productividad:] se requiere elaborar una síntesis de un contrato de prestación de servicios de 40 páginas para identificar cláusulas de incumplimiento. 
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Proceso técnico:]
            ol.lista-ol--cuadro.mb-0
              li
                .lista-ol--cuadro__vineta
                  span A
                | 
                p.mb-0 #[b Entrada:] el sistema recibe el documento convertido en una secuencia masiva de #[i tokens]. 
              li 
                .lista-ol--cuadro__vineta
                  span B
                | 
                p.mb-0 #[b Análisis de patrones:] el LLM identifica la recurrencia de #[i tokens] relacionados semánticamente con términos como “sanción”, “incumplimiento” y “plazos”. 
              li 
                .lista-ol--cuadro__vineta
                  span C
                | 
                p.mb-0 #[b Generación de salida:] gracias a su arquitectura predictiva, el modelo selecciona los #[i tokens] que mejor sintetizan los puntos críticos, manteniendo la fluidez y la terminología técnica requerida. 
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src="@/assets/curso/temas/t1/img24.png", alt="alt").m-auto
        ul.fa-ul.estilo___ul.mb-3
          li.mb-3
            span.fa-li
              i.fas.fa-check-circle
            | #[b Resultado:] el profesional administrativo reduce el tiempo de revisión manual en un 60 %, permitiendo que el esfuerzo humano se concentre en la toma de decisiones estratégicas y en la validación de la información generada. 
        .box___style_7
          p.mb-0 En implementaciones avanzadas, como la IA consultiva (RAG), el modelo no depende exclusivamente de su entrenamiento previo. En estos casos, la predicción de #[i tokens] se “ancla” a fuentes de información externas y verificadas, como bases de datos legislativas o repositorios institucionales, lo que reduce significativamente el riesgo de generar información falsa o “alucinaciones” (Jara Rey, 2024).
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Arquitectura RAG frente a la IA paramétrica: del "oráculo creativo" al "archivero experto"
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_1(data-aos="fade-right")
            p.mb-0 La evolución de la inteligencia artificial generativa ha dado lugar a dos paradigmas arquitectónicos con propósitos, mecanismos y perfiles de riesgo claramente diferenciados. Para una integración responsable en el entorno laboral, resulta indispensable distinguir entre los modelos de propósito general y los sistemas especializados fundamentados en la recuperación de información.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/t1/img25.png", alt="alt").m-auto
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
        .col
          h3 IA paramétrica: el conocimiento de “libro cerrado”
      p.mb-5 La IA generativa de propósito general, como las versiones base de ChatGPT o Claude, opera mediante conocimiento paramétrico. Esto significa que toda la información que el modelo posee quedó “congelada” en sus pesos y parámetros durante su fase de entrenamiento masivo con datos provenientes de internet. A continuación, se describen sus principales características técnicas:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3.text-white
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img26.png', alt="" ).m-auto
              h4 Mecanismo
              .box___card_sinbordes_p
                p.mb-0 Estos modelos funcionan como un “imitador avanzado” que predice la siguiente palabra más probable con base en patrones estadísticos. No consultan fuentes en tiempo real; en su lugar, ensamblan texto plausible a partir de lo aprendido durante el entrenamiento.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100.box___card_sinbordes_color_2
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img27.png', alt="" ).m-auto
              h4 Limitación técnica
              .box___card_sinbordes_p
                p.mb-0 Al tratarse de un sistema de “libro cerrado”, su conocimiento es estático y susceptible a la desactualización. Además, cuando carece de información específica, el modelo tiende a las denominadas “alucinaciones”, generando hechos o referencias inexistentes para mantener la fluidez conversacional.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
        .col
          h3 IA Consultiva (RAG): el paradigma de "libro abierto"
      p.mb-5 La Generación Aumentada por Recuperación (#[i Retrieval-Augmented Generation] [RAG]) representa un cambio de paradigma, ya que desacopla el proceso de generación de lenguaje del almacenamiento de conocimiento factual. En este enfoque, el sistema actúa como un “archivero experto” que investiga antes de construir una respuesta. Sus principales componentes operativos son los siguientes:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3.text-white
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img28.png', alt="" ).m-auto
              h4 Mecanismo
              .box___card_sinbordes_p
                p.mb-0 Ante una consulta, el sistema no inicia generando texto. Primero realiza una búsqueda en un corpus documental externo, curado y autorizado, como bases de datos jurídicas, manuales técnicos empresariales o repositorios científicos. Posteriormente, el LLM sintetiza una respuesta fundamentada estrictamente en las fuentes recuperadas.
        .col-xl-6.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100.box___card_sinbordes_color_2
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img29.png', alt="" ).m-auto
              h4 Ventaja competitiva
              .box___card_sinbordes_p
                p.mb-0 Este enfoque de “libro abierto” permite acceder a información dinámica y actualizada sin necesidad de reentrenar continuamente el modelo base, reduciendo costos computacionales y mejorando la trazabilidad de la información.
      p.mb-5 La siguiente tabla presenta un contraste técnico entre la IA paramétrica generativa y la IA consultiva basada en #[i Retrieval-Augmented Generation] (RAG), destacando sus diferencias en objetivos, fuentes de información, transparencia y riesgos asociados durante la generación de respuestas.
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 1.
        span Cuadro comparativo de paradigmas técnicos
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Característica
              th.ajuste-border-tabla.texto-left IA paramétrica generativa
              th.texto-left IA consultiva (RAG)
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Objetivo principal
              td.ajuste-border-tabla.texto-left Fluidez y coherencia conversacional.
              td.texto-left Precisión, fiabilidad y fundamentación.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Fuente de datos
              td.ajuste-border-tabla.texto-left Paramétrica, interna y estática.
              td.texto-left Externa, curada y dinámica.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Transparencia
              td.ajuste-border-tabla.texto-left Baja, debido al efecto de “caja negra”.
              td.texto-left Alta, gracias a la capacidad de citar fuentes.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Riesgo de error
              td.ajuste-border-tabla.texto-left Alto, por fabricación de hechos “por diseño”.
              td.texto-left Bajo en fabricación; persiste un riesgo residual de síntesis.
      .titles___box_cuarto_nivel.mb-5(data-aos="fade-right")   
        h4.mb-0 Veracidad y trazabilidad en la productividad 
      p.mb-5 En el sector productivo, la diferencia entre ambos paradigmas resulta crítica para la toma de decisiones. La capacidad de verificar la procedencia de la información puede determinar la confiabilidad de procesos administrativos, jurídicos o industriales. En el siguiente escenario aplicado, se requiere identificar la última actualización de un protocolo de seguridad industrial:
      .row.justify-content-center.mb-5
        .col-xl-6.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .box___card_sinbordes.h-100
            .row.justify-content-center.mb-3.text-white
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img30.png', alt="" ).m-auto
              h4 IA paramétrica
              .box___card_sinbordes_p
                p.mb-0 Podría responder con base en protocolos de 2024, correspondientes a su fecha de corte de entrenamiento, o incluso combinar normativas de diferentes países para producir una respuesta coherente, pero técnicamente errónea, incurriendo en fabricación de autoridad. 
        .col-xl-6.col-md-9(data-aos="fade-left")
          .box___card_sinbordes.h-100.box___card_sinbordes_color_2
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t1/img31.png', alt="" ).m-auto
              h4 IA consultiva (RAG)
              .box___card_sinbordes_p
                p.mb-0 El sistema identifica la consulta, busca el documento más reciente en la base de datos interna de la empresa, recupera los apartados pertinentes y genera una respuesta contextualizada, por ejemplo: “Según el protocolo interno versión 4.2 de marzo de 2026…”. Este enfoque permite al profesional verificar, auditar y validar la información utilizada en la respuesta.
      p.mb-0 La incorporación de arquitecturas RAG en ambientes empresariales fortalece la confiabilidad operativa, mejora la trazabilidad documental y reduce significativamente los riesgos asociados a la desinformación automatizada.
      .color___box_1
        .px-5
          Separador
          #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 1.4 Infraestructura base y requerimientos técnicos del sistema
          p.mb-5 La implementación de soluciones basadas en inteligencia artificial generativa (IAG) en el sector productivo trasciende la simple interacción con un #[i chat]. Este proceso requiere una arquitectura robusta que garantice escalabilidad, seguridad y procesamiento eficiente de grandes volúmenes de datos.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img32.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p.mb-0 En términos técnicos, la operación de modelos de lenguaje de gran escala (#[i Large Language Models] [LLM]) demanda infraestructuras de altas prestaciones, capaces de soportar cargas computacionales intensivas y operaciones de procesamiento paralelo.
          .row.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              p.mb-0 Aunque es posible implementar servidores locales de propiedad personal o empresarial, actualmente la infraestructura de IA se gestiona, en la mayoría de los casos, mediante modelos de computación en la nube. Estos modelos se clasifican principalmente en Infraestructura como Servicio (#[i Infrastructure as a Service] [IaaS]) y #[i Software as a Service] (SaaS).
            .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
              figure
                img(src="@/assets/curso/temas/t1/img33.svg", alt="" ).m-auto
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
            .col
              h3 IA como Infraestructura (IaaS: #[i Infrastructure as a Service])
          p.mb-5 El modelo IaaS proporciona los recursos de #[i hardware] subyacentes necesarios para entrenar, ajustar o desplegar modelos de lenguaje de gran escala. En un nivel técnico avanzado, es fundamental comprender que el “motor” de la IAG no opera sobre unidades centrales de procesamiento (CPU) convencionales, sino sobre #[i hardware] especializado en cálculo paralelo masivo. A continuación, se describen los principales componentes de esta infraestructura:
          .row.align-items-center.mb-5
            .col-xl-auto(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src="@/assets/curso/temas/t1/img34.png", alt="" ).m-auto
            .col-xl
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
                .row(titulo="Unidades de procesamiento (GPU y TPU)").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 La infraestructura se apoya en Unidades de Procesamiento Gráfico (GPU), como las arquitecturas H100 de NVIDIA, y en Unidades de Procesamiento de Tensores (TPU) de Google. Estos componentes están diseñados para optimizar operaciones matriciales complejas propias de las redes neuronales profundas.
                .row(titulo="Almacenamiento vectorial").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 Las implementaciones empresariales incorporan bases de datos vectoriales, como FAISS, Qdrant o Chroma. Estas tecnologías permiten almacenar e indexar #[i embeddings], es decir, representaciones numéricas del significado semántico de la información.
                .row(titulo="Redes de alta velocidad").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 El entrenamiento distribuido y el despliegue de modelos masivos requieren interconectividad de baja latencia, como InfiniBand, para sincronizar parámetros entre múltiples nodos de cómputo.
                .row(titulo="Gobernanza y privacidad").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 La infraestructura debe incorporar protocolos de registro, control de acceso y niveles de permisos que protejan la información sensible de la organización e impidan su utilización en el reentrenamiento de modelos públicos (Dantart, 2025).
      p.mb-5 La integración adecuada de estos componentes permite construir entornos de IA escalables, seguros y alineados con las exigencias operativas de las organizaciones modernas. Además, fortalece la capacidad institucional para gestionar información crítica, optimizar procesos y garantizar la trazabilidad de los datos utilizados por los sistemas inteligentes.
      .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
        .col
          h3 IA como #[i software] (SaaS: #[i Software as a Service])
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .box___style_2.fit___box_2(data-aos="fade-right")
            p.mb-0 El modelo SaaS permite al sector productivo acceder a capacidades avanzadas de inteligencia artificial generativa (IAG) sin necesidad de gestionar infraestructura física ni administrar el ciclo de vida del #[i hardware]. Este enfoque democratiza el acceso a la tecnología mediante interfaces listas para el usuario final o mediante interfaces de programación de aplicaciones (#[i Application Programming Interfaces] [API]) orientadas al desarrollo de soluciones personalizadas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/t1/img25.png", alt="alt").m-auto
      p.mb-5 A continuación, se presenta una explicación sobre las principales modalidades de implementación del modelo SaaS en entornos de inteligencia artificial y su aplicación en plataformas conversacionales, consumo vía API e IA consultiva especializada.
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.box___podcast(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t1/img36.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Modalidades de implementación SaaS en entornos de inteligencia artificial"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t1/img37.png" ).m-auto
      p.mb-5 La adopción del modelo SaaS facilita la incorporación de capacidades avanzadas de IA sin requerir inversiones elevadas en infraestructura propia. Además, permite escalar servicios de manera flexible, acelerar procesos de innovación y reducir tiempos de implementación tecnológica.
      .color___box_2
        .px-5
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img38.jpg')})` }")
            .bloque-texto-g__texto.p-4
              p.mb-0 No obstante, este modelo también exige criterios sólidos de #[b gobernanza digital], especialmente en aspectos relacionados con #[b privacidad de datos], dependencia tecnológica, cumplimiento normativo y control sobre la información procesada por plataformas externas.
          .titles___box_tercer_nivel.mb-5(data-aos="fade-right")
            .col-lg-auto
              figure
                img(src="@/assets/curso/temas/t1/img9.svg" style="max-width: 60px").m-auto
            .col
              h3 Caso de uso: hibridación para la mejora continua
          p.mb-5 A continuación, se presenta un escenario aplicado en el sector de desarrollo de #[i software], donde una organización busca implementar un asistente técnico privado orientado al apoyo de aprendices y desarrolladores. El objetivo de esta arquitectura híbrida consiste en combinar las ventajas de la infraestructura privada (IaaS) con las capacidades avanzadas de procesamiento lingüístico proporcionadas por servicios SaaS, garantizando productividad, seguridad y eficiencia operativa.
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 2.
                span Arquitectura híbrida de IA consultiva basada en RAG y servicios en la nube
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t1/img39.png', alt='Diagrama de arquitectura híbrida de inteligencia artificial que integra infraestructura IaaS, bases de datos vectoriales, servicios SaaS y modelos de lenguaje para procesamiento seguro de información empresarial. ').m-auto
          .row.justify-content-center.mb-5
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
              .box___style_h4_p.h-100
                h4.mb-0.text-center.fit___h4_card Capa IaaS
                .box___card_p
                  p.mb-0 La organización despliega una instancia de base de datos vectorial, como Pinecone o FAISS, en un servidor privado. Esta infraestructura permite almacenar de forma segura documentación técnica, manuales internos y código fuente propietario.
            .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
              .box___style_h4_p.h-100
                h4.mb-0.text-center.fit___h4_card Capa SaaS
                .box___card_p
                  p.mb-0 Se utiliza el modelo GPT-4o mediante consumo vía API. El sistema no envía la totalidad del código ni la documentación sensible a la IA pública. Primero recupera, desde la base de datos vectorial local, únicamente los fragmentos relevantes y posteriormente los envía al modelo para generar una respuesta contextualizada y fundamentada.
            .col-xl-4.col-md-9(data-aos="fade-left")
              .box___style_h4_p.h-100
                h4.mb-0.text-center.fit___h4_card Resultado operativo
                .box___card_p
                  p.mb-0 Se obtiene una solución de IA consultiva que maximiza la productividad, minimiza el riesgo de filtración de información sensible y reduce costos asociados al mantenimiento de infraestructura especializada para inferencia de modelos.
      p.mb-0 Este modelo híbrido constituye una estrategia cada vez más utilizada en organizaciones que requieren aprovechar capacidades avanzadas de inteligencia artificial sin comprometer la seguridad de sus activos digitales. Además, fortalece la trazabilidad de la información y facilita la integración de sistemas inteligentes en entornos corporativos de alta criticidad técnica.

</template>

<script>
import audio1 from '@/assets/componentes/audios/Modalidades_implementacion_SaaS_entornos_inteligencia_artificial.mp3'
export default {
  name: 'Tema1',
  data: () => ({
    audio1,
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
