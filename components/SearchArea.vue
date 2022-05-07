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
        <select id="destiny" v-model="destiny" class="text-black hover:border-gray border-black">
          <option hidden />
          <option v-for="code in availableDestinationsByOriginCode" :key="code.id">
            {{ code.code }}
          </option>
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
import { mapMutations, mapActions } from 'vuex'
import { Actions } from '~/store/Codes/actions-types'
import { Mutations } from '~/store/Codes/mutations-types'
import { Code } from '~/store/Codes/state-types'

export default Vue.extend({
  name: 'SearchArea',
  data () {
    return {
      origin: null as null|number,
      destiny: null as null|number
    }
  },
  computed: {
    codes (): Code[] {
      return this.$store.state.Codes.codes
    },
    availableDestinationsByOriginCode (): Code[] {
      return this.$store.state.Codes.availableDestinationsByOriginCode
    }
  },
  watch: {
    origin (code) {
      if (code) {
        this.setOriginCode(code)
        this.getAvailableDestinationsByOriginCode()
      }
    }
  },
  created () {
    this.getAllCodes()
  },
  methods: {
    ...mapMutations('Codes', {
      setOriginCode: Mutations.SET_ORIGIN_CODE
    }),
    ...mapActions('Codes', {
      getAllCodes: Actions.GET_ALL_CODES,
      getAvailableDestinationsByOriginCode: Actions.GET_AVAILABLE_DESTINATIONS_BY_ORIGIN_CODE
    })
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
