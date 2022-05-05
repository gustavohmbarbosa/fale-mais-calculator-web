<template>
  <div class="search-area">
    <div class="search-items">
      <div class="item origin">
        <label for="origin">Qual o DDD de onde você vai ligar?</label>
        <select id="origin" v-model="origin" class="text-black hover:border-gray border-black">
          <option hidden />
          <option v-for="code in codes" :key="code.id">
            {{ code.code }}
          </option>
        </select>
      </div>

      <div class="item destiny">
        <label for="destiny">Qual o DDD de destino?</label>
        <select id="destiny" class="text-black hover:border-gray border-black">
          <option hidden />
          <option>012</option>
          <option>014</option>
        </select>
      </div>

      <div class="item price text-black">
        Custo por minuto <strong>R$ 10</strong>
      </div>
    </div>

    <div class="item minutes">
      <label for="minutes">Quantos minutos você pretende usar? </label>
      <input id="minutes" class="text-black hover:border-gray border-black">
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import { Actions } from '~/store/Codes/actions-types'

export default Vue.extend({
  name: 'SearchArea',
  data () {
    return {
      origin: ''
    }
  },
  computed: mapState('Codes', ['codes']),
  created () {
    this.$store.dispatch(`Codes/${Actions.GET_ALL_CODES}`)
  }
})
</script>

<style scoped>
  .search-area {
    padding: 0.5rem;
    padding-top: 3rem;
    border-radius: 8px;
    border-color: black;
  }

  .search-area .title{
    margin-top: 0;
    margin-bottom: 12px;
    text-align: center;
    font-weight: 400;
  }

  .search-items {
    display: flex;
    justify-content: space-between;
  }

  .item.minutes {
    margin-top: 10px;
    margin-bottom: 0;
  }

  .item.price strong {
    border-bottom: solid;
  }

  select {
    appearance: none;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    cursor: pointer;
    line-height: inherit;
    border: none;
    border-bottom: solid;
    outline: none;
    margin: 0;
  }

  select::-ms-expand {
    display: none;
  }

  input {
    appearance: none;
    background-color: transparent;
    font-size: inherit;
    cursor: pointer;
    line-height: inherit;
    border: none;
    border-bottom: solid;
    outline: none;
    margin: 0;
    max-width: 45px;
  }

  @media screen and (max-width: 900px) {
    .search-items {
      display: block;
    }

    .item {
      margin-bottom: 20px;
    }
  }
</style>
