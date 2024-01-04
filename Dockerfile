# Utilisez l'image officielle de Node.js
FROM node:18

# Définissez le répertoire de travail à /app
WORKDIR /app

# Copiez le package.json et le package-lock.json dans le conteneur
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposez le port sur lequel votre application s'exécute
EXPOSE 3000

# Commande de démarrage de l'application
CMD ["npm", "start"]
