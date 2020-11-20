<template>
<div id="nasa-wrap">
  <div class="d-flex justify-content-center" v-if="!state.isLoading">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>

  <div class="card" v-if="state.isLoading">
    <div class="card-header">
      {{ state.planetary.date }}
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <img :src="state.planetary.url" class="card-img-top" :alt="state.planetary.title" v-show="state.planetary.url">
        <p>{{ state.planetary.explanation }}</p>
        <footer class="blockquote-footer">{{ state.planetary.title }}</footer>
      </blockquote>
    </div>
  </div>
</div>
</template>

<script>
  import { defineComponent, reactive, computed, onMounted } from 'vue';
  import { useStore } from 'vuex';

  export default {
    setup() {
      const store = useStore();
      const state = reactive({
        isLoading: computed(() => store.state.nasa.isLoading),
        planetary: computed(() => store.state.nasa.planetary),
      });

      onMounted(async () => {
        console.log(isEmptyObject(state.planetary));
        if(isEmptyObject(state.planetary)) {
          state.isLoading ? await store.commit('handleLoading') : '';
          await store.dispatch('handleNasaApi');
          await store.commit('handleLoading');
        }
      });

      const isEmptyObject = (obj) => {
        return Object.keys(obj).length === 0 && JSON.stringify(obj) === JSON.stringify({})
      }

      // const getData = async (): Promise<void> => {
      //   await axios({
      //     method: 'get',
      //     url: NASA_API,
      //     params: {},
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     state.planetary = res.data;
      //     state.isLoading = !state.isLoading;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   })
      // };

      // onMounted(() => {
      //   console.log(state.isLoading);
      //   // state.isLoading != state.isLoading;
      //   getData();
      // });

      return {
        state,
      }
    }
  }
</script>

<style scoped>
#nasa-wrap {
  padding: 30px;
}
</style>