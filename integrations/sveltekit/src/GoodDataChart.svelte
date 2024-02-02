<script>
    import { onMount } from 'svelte';
    import * as React from 'react';
    import * as ReactDOM from 'react-dom';
    import tigerFactory, { TigerTokenAuthProvider } from '@gooddata/sdk-backend-tiger';
    import "@gooddata/sdk-ui-ext/styles/css/main.css";

    const backend = tigerFactory()
        .onHostname(import.meta.env.VITE_HOSTNAME)
        .withAuthentication(
            new TigerTokenAuthProvider(import.meta.env.VITE_GD_API_TOKEN)
        );

    onMount(async () => {
        const { InsightView } = await import('@gooddata/sdk-ui-ext');
        const node = document.getElementById('gooddata-chart');
        const props = {
            workspace: import.meta.env.VITE_WORKSPACE_ID,
            insight: import.meta.env.VITE_INSIGHT_ID,
            backend
        };

        if (node) {
            ReactDOM.render(React.createElement(InsightView, props), node);
        }
    });
</script>

<style>
    #gooddata-chart {
        width: 100%;
        height: 400px
    }
    .insight-view-container, .insight-view-visualization {
        width: 100%;
        height: 400px;
    }
</style>
<h1>Where people buy our fruits?</h1>
<div id="gooddata-chart"></div>