<script setup lang="ts">
import { onMounted } from 'vue'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import tigerFactory, { TigerTokenAuthProvider } from '@gooddata/sdk-backend-tiger'
import '@gooddata/sdk-ui-ext/styles/css/main.css'
import { InsightView } from '@gooddata/sdk-ui-ext'

const backend = tigerFactory()
    .onHostname(import.meta.env.VITE_HOSTNAME)
    .withAuthentication(
        new TigerTokenAuthProvider(import.meta.env.VITE_GD_API_TOKEN)
    )

onMounted(() => {
  const node = document.getElementById('gooddata-chart')
  const props = {
    workspace: import.meta.env.VITE_WORKSPACE_ID,
    insight: import.meta.env.VITE_INSIGHT_ID,
    backend
  }

  if (node) {
    // Weird problem with InsightView type and ReactComponent type
    // @ts-ignore
    ReactDOM.render(React.createElement(InsightView, props), node)
  }
})
</script>

<template>
  <main>
    <h1>GoodData Chart in Vue.js</h1>
    <div id="gooddata-chart"></div>
  </main>
</template>

<style scoped>
#gooddata-chart {
  width: 100%;
  height: 400px;
}
</style>