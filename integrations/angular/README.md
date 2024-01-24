# Angular

Integrating GoodData into Angular is easier than it seems, even without native support. Let’s dive in and go over the four-step process:

1. Installing Dependencies
1. Setting up Environment Variables
1. Setting up the Code Base
1. Managing CORS

# Step 1: Install Dependencies

First things first, you would need to add a few things to your dependencies.

```bash
npm install --save react@^18.2.0 react-dom@^18.2.0 @gooddata/sdk-ui-all @gooddata/sdk-backend-tiger
```

Details about the GoodData.UI SDK is not in the scope of this article, but if you would like to learn more about it, here is the GoodData.UI architecture overview.

And just for completeness here are TypeScript dependencies:

```bash
npm install --save-dev @types/react@^18.2.0 @types/react-dom@^18.2.0
```

Now that is out of the way, let's look at the code!
# Step 2: Set environment variables
Make sure you have your environment.ts and environment.development.ts files with correct values. After you clone the repository, you will see a [.environment.template.ts](./src/environments/environment.template.ts) file in the /clients/angular/src/environments folder. You need to remove “template” from the filename in order to set up everything correctly.

For _environment.ts_, you will need to define four variables:

```
export const environment = {
apiKey: 'API_KEY',
insightID: 'INSIGHT_ID',
workspaceID: 'WORKSPACE_ID',
hostname: 'HOSTNAME',
};
```

If you open a GoodData dashboard, you can find the HOSTNAME and WORKSPACE_ID in the URL:

```
https://<HOSTNAME>/dashboards/#/workspace/<WORKSPACE_ID>/dashboard/<DASHBOARD_ID>
```

For INSIGHT_ID you will have to navigate to the Analyze tab and then navigate to one of the visualizations. There you would find INSIGHT_ID like this:

```
https://<HOSTNAME>/dashboards/#/workspace/<WORKSPACE_ID>/<INSIGHT_ID>/edit
```

Check [Create an API token documentation](https://www.gooddata.com/developers/cloud-native/doc/cloud/getting-started/create-api-token/) for more information about our API tokens.

In case you would like to use this in your production, we highly recommend to use OAuth, as you could potentially leak your API_TOKEN.


# Step 3: Set up the Code

To quickly embed GoodData Visualizations, you would need to create a backend in the form of tigerFactory() in your chart component:

```typescript
const backend = tigerFactory()
  .onHostname(import.meta.env.VITE_HOSTNAME)
  .withAuthentication(
  new TigerTokenAuthProvider(import.meta.env.VITE_GD_API_TOKEN)
)
```

Then just simply fetch the props for the InsightView and feed it with in the  render() method:

```typescripts
// protected getRootDomNode() { ...}

// private isMounted(): boolean { ... }

protected getProps(): IInsightViewProps {
  return {
    workspace: environment.workspaceID,
    insight: environment.insightID,
    backend,
  };
}


protected render() {
  if (this.isMounted()) {
    ReactDOM.render(
    React.createElement(InsightView, this.getProps()),
    this.getRootDomNode()
    );
  }
}
```

Now you can simply have create <gooddata-chart> and it would render the Visualization!

Here is a very simple template:

```html
<h1>Angular with GoodData</h1>
<gooddata-chart></gooddata-chart>

```

Now you can just add styling and you are set! Just for simplicity, let's just go with a minimal one:

```css
#gooddata-chart {
width: 100%;
height: 400px;
}

.insight-view-container, .insight-view-visualization {
width: 100%;
height: 400px;
}
```

Step 4: Manage CORS
And that is all for code! Quite simple, isn't it? ;)

Now the only thing that would be missing is to take care of CORS. This is quite simple in GoodData:

1. Navigate to your GoodData Instance,
1. Go to the settings
1. Add allowed origins to the CORS.


Note: For detailed information about CORS, refer to the official documentation.

For my local development, this was http://localhost:4200:


In case the colors of the visualization don’t fit you, you can always change them.

# Want to Learn more?

If you want to try GoodData, check out our [free trial](https://www.gooddata.com/trial/) - it works well with the GitHub repo! If you would like to discuss embedding, AI, dashboard plugins or whatever you have on your mind, reach out to us on our [community Slack](https://www.gooddata.com/slack/).


