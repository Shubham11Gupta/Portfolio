# Build stage
FROM node:18-alpine AS build
WORKDIR /app

# Install dependencies (use npm install to handle missing lockfile)
COPY package.json package-lock.json* ./
# use legacy peer deps to avoid common install failures inside minimal build images
ENV npm_config_legacy_peer_deps=true
RUN npm install --silent --no-audit --no-fund

# Copy sources and build
COPY . .
RUN npm run build

# Production stage with nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html

# Copy a minimal nginx config to set headers and avoid directory listing
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
