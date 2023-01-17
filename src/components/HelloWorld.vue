<template>
  <div class="greetings">
    <div class="characters">
      <div class="hero1">
        <img class="hero" src="../assets/redSora1.png" width="240">
        <div class="heroXP">Sora {{ heroName }} (nível {{ heroLevel }})</div>
        <div class="enemyHP">Pontos de vida: 20{{ heroHP }}</div>
        <div class="heroXP">Próximo nível: {{ count }}</div>
      </div>
      <div class="enemy1">
        <img class="enemy" src="../assets/redShadow.png" width="240" type="button" @click="increment">
        <div class="enemyHP">Shadow {{ enemyName }} {{ enemyLevel }}</div>
        <div class="enemyHP">Pontos de vida: 1{{ enemyHP }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { mapActions, storeToRefs } from 'pinia';
import { useCounterStore } from '../stores/counter';


const counter = useCounterStore()

const { count, heroLevel } = storeToRefs(counter)

const { increment } = mapActions(useCounterStore, ["increment"])

</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.characters {
  display: flex;
  justify-content: space-around;
}

.heroXP, .enemyHP {
  margin-left: 20%;
}

.enemy1 {
  margin-top: 2.5%;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

</style>
