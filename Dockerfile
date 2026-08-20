FROM node:22-alpine AS production
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=4000
COPY . .
EXPOSE 4000
CMD ["node", "server/index.js"]
