# NxNextMonoRepoRouting

This repo was created to show how you can run multiple next.js applications inside a nx.js workspace .

home app starts on localhost:4200 and blog app starts on localhost:5200

All requests to /blog from home is proxied to port http://localhost:5200 ,refer next.confif.js files in both apps for details of url rewrites.

## Running apps

nx serve home
nx serve blog

## Navigating between apps

1. Open a browser and enter http://localhost:4200
2. click on differnt links to navigate between home and blog pages.
