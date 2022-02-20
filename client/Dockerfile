# syntax=docker/dockerfile:1.3
FROM node:17-alpine3.14
WORKDIR /app
RUN chown -R node:node /app/
USER node
EXPOSE 3000
CMD [ "npm", "run", "dev" ]
