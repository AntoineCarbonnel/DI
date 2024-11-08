# 🚀 React + TypeScript + Vite

Ce projet est une configuration minimale pour démarrer avec React et TypeScript en utilisant Vite

## 🛠️ Installation

1. Clonez le dépôt :
   ```sh
   git clone https://github.com/AntoineCarbonnel/DI-front.git
   cd DI-front
   ```

2. Installez les dépendances :
   ```sh
   npm install
   ```

## 🚀 Démarrage du projet

Pour démarrer le projet en mode développement :

   ```sh
   npm  run dev
   ```

## 🔧 Configuration de l'environnement

1. Copiez le fichier `.env.example` en `.env` :
   ```sh
   cp .env.example .env
   ```

2. Modifiez les variables d'environnement dans le fichier `.env` selon vos besoins.

### 🧪 Exécution des tests Cypress

Pour exécuter les tests Cypress, suivez les étapes ci-dessous :

1. Assurez-vous que l'API est en cours d'exécution. 

2. Assurez-vous que le projet est en cours d'exécution. Vous pouvez démarrer le projet en utilisant la commande
   suivante :
   ```sh
   npm run dev
   ```

3. Une fois que l'API et le projet sont en cours d'exécution, vous pouvez exécuter les tests Cypress en utilisant la
   commande suivante :
   ```sh
   npx cypress open
   ```
4. Dans l'interface de Cypress, sélectionnez le fichier de test `cypress/e2e/user-parkour.cy.js` pour exécuter le
   test.