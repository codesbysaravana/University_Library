# --- Base Stage ---
FROM node:20-alpine AS base
WORKDIR /app
ENV NODE_ENV=production
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install

# --- Build Stage ---
FROM base AS build
COPY . .
RUN npm run build

# --- Production Runner ---
FROM node:20-alpine AS runner
WORKDIR /app

# Only copy needed files
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3000
ENV PORT 3000
CMD ["npm", "start"]
