# Next.js

Integrating GoodData into Next.js is easier than it seems, even without native support. Let’s dive in and go over the four step process:

1. Installing Dependencies
1. Setting up Environment Variables
1. Setting up the Code Base
1. Managing CORS


# Step 1: Dependencies

First things first, you would need to add a few things to your dependencies.

There's not much to comment here, so here are the needed dependencies:

```bash
npm install --save react@^18.2.0 react-dom@^18.2.0 @gooddata/sdk-ui-all @gooddata/sdk-backend-tiger
```

As I'd like this article to be as concise as possible - less time reading = more time coding - I won't go into the dirty details about the dependencies, but if you would like to learn more about them, here is the [GoodData.UI architecture overview](https://www.gooddata.com/docs/gooddata-ui/latest/architecture/architecture_overview/).


And just for the completeness here are the TypeScript dependencies:

```bash
npm install --save-dev @types/react@^18.2.0 @types/react-dom@^18.2.0
```

Now that is out of the way, let's look at the code!

## Step 2: Set environment variables
Make sure you have your [.env](./.env) and [.env.local](./.env.local.template) files with correct values. After you clone the repository, you will see a [.env.local.template](./.env.local.template) file in the /clients/next.js folder. You need to remove “template” from the filename in order to set up everything correctly.

For .env, you will need to define four variables:
```
# GoodData host
NEXT_PUBLIC_HOSTNAME=""

# GoodData workspace id

NEXT_PUBLIC_WORKSPACE_ID=""


# GoodData insight id

NEXT_PUBLIC_INSIGHT_ID=""
```

If you open a GoodData dashboard, you can find the HOSTNAME and WORKSPACE_ID in the URL:

`https://<HOSTNAME>/dashboards/#/workspace/<WORKSPACE_ID>/dashboard/<DASHBOARD_ID>`

For INSIGHT_ID you will have to navigate to the Analyze tab and then navigate to one of the visualizations. There you would find INSIGHT_ID like this:

`https://<HOSTNAME>/dashboards/#/workspace/<WORKSPACE_ID>/<INSIGHT_ID>/edit`

For .env.local, you will need only one variable:

```
# GoodData API token
NEXT_PUBLIC_GD_API_TOKEN=""
```
Check [Create an API token](https://www.gooddata.com/developers/cloud-native/doc/cloud/getting-started/create-api-token/) documentation for more information.

In case you would like to use this in your production, we highly recommend to use OAuth, as you could potentially leak your API_TOKEN.

## Step 3: Set up the Code

To quickly embed GoodData Visualizations, you would need to create a backend in the form of `tigerFactory()`:

```typescript
const backend = tigerFactory()
  .onHostname( process.env.NEXT_PUBLIC_GD_HOSTNAME )
  .withAuthentication(
    new TigerTokenAuthProvider( process.env.NEXT_PUBLIC_GD_API_TOKEN )
  );
```

Then just simply export it with the `GoodDataChart` component:

```typescript
export default function GoodDataChart() {
    return (
        <BackendProvider backend={backend} >
        <div className="gooddata-chart">
        <WorkspaceProvider workspace= { process.env.NEXT_PUBLIC_GD_WORKSPACE_ID } >
        <InsightView insight= { process.env.NEXT_PUBLIC_GD_INSIGHT_ID } />
    </WorkspaceProvider>
    </div>
    </BackendProvider>
);
}
```

Now you can simply have a `<GoodDataChart/>` and it would render the Visualization!

Here is a simple template:

```html
<template>
 <main>
   <h1>Next.js with GoodData</h1>
   <GoodDataChart />
 </main>
</template>
```
Now you can just add styling and you are set! Just for simplicity, let's just go with a minimal one:

```html
<style scoped>
#gooddata-chart {
 width: 100%;
 height: 400px;
}
</style>
```

Here is a GitHub repo you can easily start with!

## Step 4: Manage CORS
And that is all for code! Quite simple, isn't it? ;)

Now the only thing that would be missing is to take care of CORS. This is quite simple in GoodData:
1. Navigate to your GoodData Instance,
1. Go to the settings
1. Add allowed origins to the CORS.

Note: For detailed information about CORS, refer to the [official documentation](https://www.gooddata.com/docs/cloud/manage-organization/set-up-cors-for-organization/).

And that is it! If you would like to have a backend to try this against, use our [free trial](https://www.gooddata.com/trial/).