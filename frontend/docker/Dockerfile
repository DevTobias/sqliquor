FROM node:20 AS base

#! Install dependencies

FROM base AS builder
# RUN apk add --no-cache libc6-compat
WORKDIR /frontend

COPY package.json yarn.lock* ./
COPY app/package.json app/package.json
COPY modules/eslint-config/package.json modules/eslint-config/package.json
COPY modules/prettier-config/package.json modules/prettier-config/package.json

RUN yarn --frozen-lockfile

COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN yarn turbo build

#! Start the production image

FROM node:20-alpine AS runner
WORKDIR /frontend

ENV NODE_ENV production

COPY --from=builder /frontend/app/.next/standalone .
COPY --from=builder /frontend/app/public ./public
COPY --from=builder /frontend/app/.next/static ./app/public/_next/static

EXPOSE 8082
ENV PORT 8082
ENV HOSTNAME "0.0.0.0"

CMD ["node", "app/server.js"]
