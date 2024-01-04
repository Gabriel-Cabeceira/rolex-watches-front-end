# Usa a imagem oficial do Node.js para construir o aplicativo
FROM node:14 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Cria um contêiner Nginx para servir os arquivos build
FROM nginx:latest

# Remove a configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos build do contêiner do construtor para o diretório padrão do Nginx
COPY --from=builder /app/build/ /usr/share/nginx/html/

# Copia o arquivo de configuração do Nginx para lidar com rotas no React Router
COPY nginx.conf /etc/nginx/conf.d/default.conf