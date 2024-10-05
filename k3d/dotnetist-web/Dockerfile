# Stage 1: Build the Angular app
FROM node:20-alpine as build
WORKDIR /app

# Copy package.json and package-lock.json (if available) to avoid re-installing dependencies unnecessarily
COPY package*.json ./

# Install Angular CLI globally and project dependencies
RUN npm install -g @angular/cli@18.2.0
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app for production
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine
# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built app from the previous stage to the Nginx web directory
COPY --from=build /app/dist/dotnetist-web/browser /usr/share/nginx/html

# Expose port 80 to serve the app
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
