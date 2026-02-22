This is a minimal standalone Next.js app for the `fun.colincassell.com` subdomain.

To run locally:

1. Copy the image used for the background into `apps/personal/public/fun/turtwig.png`:

   ```sh
   mkdir -p apps/personal/public/fun
   cp public/fun/turtwig.png apps/personal/public/fun/turtwig.png
   ```

2. Install dependencies and run:

   ```sh
   cd apps/personal
   npm install
   npm run dev
   ```

This app intentionally contains only the standalone Chillin page. Deploy it separately
(or point your hosting to this folder) and map `fun.colincassell.com` to this deployment.
