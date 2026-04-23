# Use Node.js 20 Alpine for a lightweight image
FROM node:22-alpine

# Prisma requires OpenSSL to be installed on Alpine Linux
RUN apk add --no-cache openssl

# Set the working directory inside the container
WORKDIR /backend

# Copy dependency files first (for Docker caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Prisma schema and the rest of your application code
COPY prisma ./prisma/
COPY . .

# Generate the Prisma Client
# Generate the Prisma Client with a dummy URL to bypass the build-time error
RUN DATABASE_URL="postgresql://dummy:dummy@dummy:5432/dummy" npx prisma generate
# Build the application (for TypeScript)
# IMPORTANT: If you are using plain JavaScript, delete or comment out the line below!
RUN npm run build

# Railway dynamically assigns a PORT environment variable. 
# We set a default of 3000 just in case.
ENV PORT=3000
EXPOSE ${PORT}

# The Startup Command
# 1. Runs your database migrations against Supabase (using DIRECT_URL)
# 2. Starts your Node server
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]