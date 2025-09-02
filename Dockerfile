# Usa Node.js como base
FROM node:20

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia package.json e instala dependências
COPY package*.json ./
RUN npm install

# Copia todos os arquivos da VPS para dentro do container
COPY . .

# Expõe a porta interna do container
EXPOSE 4000

# Comando para iniciar o app
CMD ["npm", "start"]
