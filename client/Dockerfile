# ---------- Build stage ----------
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


# ---------- Production stage ----------
FROM node:22-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy build output only
COPY --from=build /app/dist ./dist

# Expose serve port
EXPOSE 3000

# Start static server
CMD ["serve", "-s", "dist", "-l", "3000"]
