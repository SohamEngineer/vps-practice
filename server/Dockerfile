FROM node:22-alpine
WORKDIR /app

#Copy package files first (cache optimization)
COPY package*.json ./

#Install dependencies
RUN npm install --production

#  Copy rest of the backend code
COPY . .

# 6️⃣ Expose backend port
EXPOSE 5000

# 7️⃣ Start the server
CMD ["node", "server.js"]