FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV PORT=5000
EXPOSE 5000
HEALTHCHECK --interval=30s --timeout=10s \
  CMD curl -f http://localhost:5000/health || exit 1
CMD ["npm", "start"]

