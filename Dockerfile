# Stage 1: build
FROM node:20 AS builder
WORKDIR /app

# Copia package.json e package-lock.json
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia todo o código
COPY . .

# Build do Next.js
RUN npm run build

# Stage 2: production
FROM node:20-alpine
WORKDIR /app

# Copia apenas arquivos necessários da build
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Expõe a porta que o Next.js vai rodar
EXPOSE 4000

# Comando para rodar em produção
CMD ["npx", "next", "start", "-p", "4000"]
