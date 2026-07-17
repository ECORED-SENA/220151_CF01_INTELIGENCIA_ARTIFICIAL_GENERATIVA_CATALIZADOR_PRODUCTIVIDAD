<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5 La #[b inteligencia artificial generativa (IAG)] representa un cambio de paradigma en la interacción entre el lenguaje humano y el computacional, permitiendo la creación de contenido original (texto, imagen, código y voz) mediante sistemas entrenados con volúmenes masivos de datos. En este componente, se analizan los fundamentos técnicos de los #[b modelos de lenguaje de gran escala (LLM)], su arquitectura predictiva basada en tokens y la taxonomía de las plataformas líderes en el mercado actual.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La capacidad de utilizar la IAG se ha convertido en una competencia esencial para la innovación y la competitividad en sectores como la salud, la manufactura y el desarrollo de #[i software]. La implementación estratégica de estas herramientas permite automatizar tareas complejas, mejorar la toma de decisiones y reducir significativamente el esfuerzo operativo, actuando como un motor de #[b mejora continua] en el sector productivo.
      .row.align-items-center
        .col-xl.mb-4.mb-lg-0
          .box___style_1(data-aos="fade-right")
            p.mb-0 El contenido se desarrolla bajo una óptica técnica y operativa, partiendo de la configuración inicial y gobernanza de datos para asegurar el uso ético y la privacidad de la información. Se estudiará profundamente la #[b ingeniería de #[i prompts]], explorando técnicas avanzadas como #[i Few-shot, Chain-of-Thought] y patrones de diseño instruccional, aplicadas a casos de uso reales que demuestran el potencial de la IA para transformar los flujos de trabajo actuales.
        .col-xl-auto.d-none.d-xl-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/temas/intro/img2.svg", alt="").m-auto
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
