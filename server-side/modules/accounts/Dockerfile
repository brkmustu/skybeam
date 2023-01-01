FROM node:19.3-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Set the command to start the app
CMD ["npm", "start"]