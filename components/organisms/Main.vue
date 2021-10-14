<template>
  <main class="mt-4">
    <Logo />
    <section class="text-gray-600 body-font mx-4">
      <div class="container mx-auto flex flex-col py-10 justify-center items-center">
        <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-6 object-cover object-center rounded" alt="Developers" src="@/assets/img/developers.svg">
        <div class="w-full md:w-2/3 flex flex-col my-6 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">A 1° comunidade tech de Bela Vista de Goiás.</h1>
          <p class="leading-relaxed">Nosso propósito é estreitar o caminho para o universo da tecnologia, e fazemos isso por meio de discussões sobre desenvolvimento de software, mercado de trabalho, marketing pessoal e outros temas voltados a TI.</p>
        </div>
      </div>
    </section>

    <section class="max-w-xl mx-auto mb-20">
      <div class="relative p-6 mx-4 text-white bg-primary rounded-md">
        <h2 class="text-xl font-bold">Quer fazer parte dessa comunidade?</h2>
        <p class="my-4 text-base font-normal">Clique no botão abaixo e preencha o formulário</p>
        <a :href="formsUrl" target="_blank" rel="noopener" class="py-1 px-4 bg-secondary text-white rounded-md">Quero fazer parte</a>
        <img class="absolute -top-16 -right-12 -rotate-30 md:w-56 hidden md:block" src="@/assets/img/victory.png" alt="Vitória!">
        <img class="absolute -bottom-4 right-1 -rotate-30 w-24  md:hidden" src="@/assets/img/victory.png" alt="Vitória!">
      </div>
    </section>
    <!-- <section class="grid grid-cols-4 bg-primary max-w-2xl mx-auto rounded-md">
      <div class="col-span-3 p-6 text-white">
        <h2 class="text-2xl font-bold">Quer fazer parte dessa comunidade?</h2>
        <p class="my-4">Clique no botão abaixo e preencha o formulário</p>
        <button class="py-1 px-4 bg-secondary text-white rounded-md">Quero fazer parte</button>
      </div>
      <div class="col-span-1">
        <img class="object-right" src="@/assets/img/victory.png" alt="Vitória!">
      </div>
    </section> -->
  </main>
  
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      formsUrl: 'https://forms.gle/EKAs4yq1CRdNaUYA7',
    };
  },
});
</script>

