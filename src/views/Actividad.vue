<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
import { TRUE } from 'sass'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Desafío en Ingeniería de <em>prompts</em> y ecosistemas de IAG',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar el dominio técnico sobre los fundamentos de los Modelos de Lenguaje de Gran Escala (LLM), el marco normativo colombiano y la aplicación de técnicas avanzadas de ingeniería de <em>prompts</em>.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el criterio técnico propuesto por Alan Turing en 1950 para determinar si una máquina exhibe un comportamiento inteligente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La capacidad de realizar cálculos matemáticos complejos en segundos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El test de Turing, para determinar si el comportamiento de la máquina es indistinguible del humano.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La creación de algoritmos basados en redes neuronales biológicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La integración de la lógica simbólica con el procesamiento de datos masivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto:
            'Lo sentimos, su respuesta no es la correcta. <em>Board</em> del <em>software</em> EAGLE.',
        },
        {
          id: 2,
          texto:
            'En la arquitectura de un LLM, ¿qué es técnicamente un "<em>Token</em>"?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una palabra completa almacenada en un diccionario estático.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La unidad mínima de procesamiento de información, como un carácter o porción de palabra.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Un identificador único que garantiza la privacidad del usuario en la nube.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El resultado final de una predicción probabilística de imagen.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es la principal ventaja competitiva de la arquitectura RAG frente a la IA paramétrica?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Una mayor fluidez conversacional y creatividad narrativa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La capacidad de acceder a información dinámica y actualizada sin reentrenar el modelo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El procesamiento de tokens a una velocidad significativamente mayor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El uso exclusivo de conocimiento interno "congelado" en sus parámetros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Quién propuso en 1950 un criterio técnico para determinar si una máquina puede exhibir un comportamiento inteligente indistinguible del humano?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'John McCarthy.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Leonardo Torres Quevedo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Marvin Minsky.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Alan Turing.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué hito tecnológico en 1997 demostró el potencial del procesamiento masivo en tareas lógicas al vencer a Garry Kasparov?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El lanzamiento de GPT-4.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El programa Deep Blue de IBM.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El autómata ajedrecista español.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La red neuronal de Dartmouth.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la unidad mínima de información que un LLM utiliza para realizar predicciones estadísticas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El parámetro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El bit lógico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El <em>embedding</em>.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El <em>token</em>.',
              esCorrecta: TRUE,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué arquitectura de IA se caracteriza por consultar fuentes externas curadas antes de generar una respuesta?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'IA paramétrica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'IA discriminativa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'IA Consultiva (RAG).',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'IA de propósito general.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'En el modelo IaaS (Infrastructure as a Service), ¿cuál es el <em>hardware</em> especializado para el cálculo paralelo masivo?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'CPUs convencionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Unidades GPU y TPU.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Discos de estado sólido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Memoria RAM volátil.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué nombre reciben las representaciones numéricas del significado semántico almacenadas en bases de datos vectoriales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Tokens.</em>',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Parámetros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<em>Embeddings.</em>',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '<em>Prompts.</em>',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué plataforma se define como un motor de búsqueda conversacional que prioriza la citación de fuentes para reducir alucinaciones?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'ChatGPT.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Perplexity AI.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'DeepSeek.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Midjourney.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es el error común sobre cómo "lee" la información un modelo de lenguaje de gran escala?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Que utiliza solo matemáticas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Que analiza la semántica pura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Que predice el siguiente signo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Que lee palabras completas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Qué modelo de servicio (Cloud) permite acceder a la IA mediante interfaces listas para el usuario final o APIs?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'IaaS.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<em>Hardware</em> as a Service.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'SaaS.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Local Host.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Cuál es una característica principal de la IA Paramétrica o de "libro cerrado"?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tiene conocimiento "congelado".',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Su conocimiento es dinámico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Consulta bases de datos legales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Minimiza siempre las alucinaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cómo se define técnicamente la operación de un LLM al recibir un estímulo o <em>prompt</em>?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Razonamiento lógico-deductivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Comprensión semántica profunda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Predicción de cadenas de texto.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Clasificación de datos sensibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué ventaja competitiva ofrece el enfoque de "libro abierto" (RAG) en una empresa?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Acceso a información actualizada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Mayor velocidad de navegación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducción total de parámetros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminación del uso de <em>tokens</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Un bufete de abogados necesita una IA que no invente leyes y cite el artículo exacto del código civil. ¿Qué arquitectura deben implementar?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'IA Paramétrica básica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generadores de imagen.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Modelo de propósito general.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Arquitectura consultiva RAG.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            'Una empresa de <em>software</em> quiere usar un LLM pero teme que sus datos privados se usen para entrenar modelos públicos. ¿Qué medida técnica es prioritaria?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el número de <em>tokens</em>.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usar solo <em>prompts</em> cortos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Establecer protocolos de registro.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cambiar el idioma del <em>prompt</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Un administrativo debe resumir un contrato de 40 páginas. Al ingresar el texto, el sistema lo descompone en segmentos numéricos. ¿Cómo se llama este proceso?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tokenización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Parametrización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Alucinación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Indexación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Un desarrollador requiere una herramienta que no solo genere texto, sino que depure errores de código dentro de su entorno de trabajo. ¿Qué opción es la ideal?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'DALL-E.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'GitHub Copilot.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'ElevenLabs.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Perplexity AI.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Un investigador nota que su IA responde con datos de 2024 cuando se le pregunta por una norma de 2026, inventando detalles plausibles. ¿A qué fenómeno técnico se enfrenta?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alucinación de la IA.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Error de infraestructura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Latencia de red.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Predicción por <em>tokens</em>.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
