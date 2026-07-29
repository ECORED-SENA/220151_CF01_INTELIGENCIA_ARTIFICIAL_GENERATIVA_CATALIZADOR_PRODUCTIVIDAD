export default {
  global: {
    Name: 'Ingeniería de <em>prompts</em> y ecosistema de la IA generativa para la productividad',
    Description:
      'Este componente formativo profundiza en la arquitectura, clasificación y configuración de la Inteligencia Artificial generativa (IAG). Se enfoca en la aplicación avanzada de la ingeniería de <em>prompts</em> para potenciar la productividad. El aprendiz desarrollará habilidades técnicas para operar plataformas de manera estratégica, garantizando la eficiencia y la seguridad de la información en el entorno productivo.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-4.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos y arquitectura de la IA generativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Evolución tecnológica y conceptos de la IAG',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Arquitectura técnica: tokens y modelos de lenguaje de gran escala (LLM)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Arquitectura RAG frente a la IA paramétrica: del “oráculo creativo” al “archivero experto”',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Infraestructura base y requerimientos técnicos del sistema',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Taxonomía y ecosistema de plataformas de IAG',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación por funcionalidad y tipo de contenido',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Análisis comparativo de plataformas y ámbito de aplicación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Configuración técnica, gobernanza de datos y marco normativo en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Configuración inicial, registro y niveles de permisos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Gestión de privacidad y almacenamiento de la información',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Protocolos de uso ético y responsabilidad corporativa',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Marco normativo y de política pública de IA en Colombia',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ingeniería de <em>prompts</em> (<em>Prompt Engineering</em>)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Anatomía y estructura técnica de un <em>prompt</em>',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de <em>prompting</em>',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Optimización de instrucciones y automatización de tareas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Iteración y refinamiento de comandos según objetivos de productividad',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Instrucciones funcionales para necesidades de búsqueda complejas',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo:
              'Introducción a la automatización de flujos de trabajo mediante <em>prompts</em>',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/11220159_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'API',
      significado:
        'interfaz que permite la comunicación y transferencia de datos entre diferentes aplicaciones o servicios de <em>software</em>.',
    },
    {
      termino: 'Bases de datos vectoriales',
      significado:
        'sistemas de almacenamiento que organizan información mediante representaciones numéricas llamadas embeddings para búsqueda semántica.',
    },
    {
      termino: '<em>Embeddings</em>',
      significado:
        'representaciones vectoriales de alta dimensión que capturan el significado semántico y las relaciones entre palabras o conceptos.',
    },
    {
      termino: 'IA generativa',
      significado:
        'rama de la inteligencia artificial capaz de crear contenido original (texto, imágenes, código) a partir de patrones aprendidos.',
    },
    {
      termino: 'IDE',
      significado:
        'entorno de desarrollo integrado que proporciona herramientas completas (editor, depurador) para escribir y probar código de programación.',
    },
    {
      termino: 'JSON',
      significado:
        'formato de intercambio de datos ligero y fácil de leer, utilizado comúnmente para enviar información entre un servidor y una IA.',
    },
    {
      termino: 'LLM',
      significado:
        'modelos de lenguaje de gran escala entrenados con volúmenes masivos de datos para predecir y generar secuencias de texto.',
    },
    {
      termino: '<em>Machine learning</em>',
      significado:
        'subcampo de la IA enfocado en algoritmos que permiten a las computadoras aprender y mejorar a partir de datos.',
    },
    {
      termino: 'NLP',
      significado:
        'procesamiento de lenguaje natural; disciplina que permite a las máquinas entender, interpretar y generar lenguaje humano.',
    },
    {
      termino: '<em>Prompt</em>',
      significado:
        'instrucción o estímulo de texto proporcionado a un modelo de IA para guiar su respuesta hacia un objetivo específico.',
    },
    {
      termino: 'RAG',
      significado:
        'técnica (Generación Aumentada por Recuperación) que combina la IA con fuentes externas para ofrecer respuestas precisas y actualizadas.',
    },
    {
      termino: '<em>Token</em>',
      significado:
        'unidad mínima de procesamiento en un modelo de lenguaje, que puede represe.',
    },
  ],
  referencias: [
    {
      referencia:
        'UBAderecho, IALAB. (2024). Evaluación del impacto de la inteligencia artificial generativa en el trabajo. IALAB.',
      link: '',
    },
    {
      referencia:
        'academia-ia.com. (2024). Introducción a prompt engineering. El club de la IA. ',
      link: 'https://academia-ia.com/wp-content/uploads/2024/03/PROMPT-ENGINEERING-LA-NOTA.pptx.pdf',
    },
    {
      referencia:
        'Dantart, A. (2025). Inteligencia artificial jurídica y el desafío de la veracidad: análisis de alucinaciones, optimización de RAG y principios para una integración responsable. arXiv. ',
      link: 'https://arxiv.org/pdf/2509.09467',
    },
    {
      referencia:
        'Departamento Nacional de Planeación, República de Colombia. (2025). Documento CONPES 4144: Política nacional de inteligencia artificial. ',
      link: 'https://colaboracion.dnp.gov.co/CDT/Conpes/Econ%C3%B3micos/4144.pdf',
    },
    {
      referencia: 'IBM. (s.f.). Azul profundo. ',
      link: 'https://www.ibm.com/history/deep-blue',
    },
    {
      referencia:
        'Jara Rey, A. (2024). Legal prompts: guía práctica de instrucciones para uso de IA generativa. ISBN 978-987-03-4830-6.',
      link: '',
    },
    {
      referencia:
        'Méndez Solano, A., Durán Campos, J., & Quirós Artiñano, D. (2024). Ingeniería de prompts. Zenodo. ',
      link: 'https://zenodo.org/records/14285388/files/Ingenier%C3%ADa%20de%20prompts.pdf',
    },
    {
      referencia:
        'Ministerio de Ciencia, Innovación y Universidades, España. (2019). Estrategia española de I+D+I en inteligencia artificial. ',
      link: 'https://www.ciencia.gob.es/dam/jcr:5af98ba2-166c-4e63-9380-4f3f68db198e/Estrategia_Inteligencia_Artificial_IDI.pdf',
    },
    {
      referencia:
        'Prompt Engineering Guide. (s.f.). Guía de ingeniería de prompt. ',
      link: 'https://www.promptingguide.ai/es',
    },
    {
      referencia:
        'República de Colombia. (2012). Ley Estatutaria 1581 de 2012. ',
      link: 'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Microsoft. (2026). Agents, human agency, and the opportunity for every organization: 2026 Work Trend Index Annual Report. Microsoft.',
      link: 'https://assets-c4akfrf5b4d3f4b7.z01.azurefd.net/assets/2026/05/2026_Work_Trend_Index_Annual_Report_070726_6a4e59bd9c9c3.pdf',
    },
    {
      referencia:
        'Brynjolfsson, E., Li, D., & Raymond, L. R. (2023). Generative AI at Work (Working Paper No. 31161). National Bureau of Economic Research.',
      link: 'https://doi.org/10.3386/w31161',
    },
    {
      referencia:
        'McKinsey y Company. (2025). The state of AI: How organizations are rewiring to capture value.',
      link: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06. Responsable del Ecosistema Virtual de Recursos Educativos Digitales ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
