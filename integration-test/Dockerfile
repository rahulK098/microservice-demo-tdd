FROM node
WORKDIR /integration-test
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "run", "test"]
