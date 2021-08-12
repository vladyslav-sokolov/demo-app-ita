FROM node:14.16.0-alpine

# Create application directory
WORKDIR /app

# Install application data
COPY . .

# Install application dependencies
RUN npm install
RUN npm run build

CMD [ "npm", "start" ]
