# syntax=docker/dockerfile:1.3
FROM node:17-alpine3.14
USER root
WORKDIR /app
COPY --chown=root:root . /app/
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
