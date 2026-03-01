# Use stable LTS
FROM node:25

# Set working directory
WORKDIR /app

# Copy dependency files first (better caching)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy rest of the project
COPY . .

# Build app (remove if not needed)
RUN yarn build

# Expose your app port (change if needed)
EXPOSE 3000

# Start app
CMD ["yarn", "start"]