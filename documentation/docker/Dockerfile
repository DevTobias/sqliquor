#! Install dependencies and build project

FROM debian:bullseye-slim AS builder
WORKDIR /build
ENV NODE_ENV=production

# Install system dependencies
RUN apt update
RUN apt install curl unzip -y
RUN curl https://bun.sh/install | bash

COPY package.json bun.lockb ./
RUN /root/.bun/bin/bun install --frozen-lockfile

COPY docs docs
RUN /root/.bun/bin/bun run build


#! Provide static files

FROM nginx:latest
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /build/docs/.vitepress/dist /usr/share/nginx/html/
