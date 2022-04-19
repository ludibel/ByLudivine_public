# ce Dockerfile n'est pas à utiliser en environnement de production
ARG NODE_VERSION=16

# Installation d'un conteneur Node sous Alpine Linux
FROM node:${NODE_VERSION}-alpine AS node
# https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine pour comprendre pourquoi la librairie licb6-compat est nécessaire
RUN apk add --no-cache libc6-compat
# Paramétrage du répertoire par défaut de notre conteneur
WORKDIR /app
# Copie tous les fichiers du répertoire courant (code du projet) dans ce nouveau conteneur
COPY . .

EXPOSE 3000

ENV PORT 3000