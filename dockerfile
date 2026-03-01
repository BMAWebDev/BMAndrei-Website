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

ARG NEXT_PUBLIC_DEV_SERVER_PASSWORD
ARG NEXT_PUBLIC_DEV_SERVER_PASSWORD_ENABLED
ARG GTAG_ANALYTICS_ID
ARG RESEND_API_KEY
ARG WEBSITE_URL

ENV NEXT_PUBLIC_DEV_SERVER_PASSWORD=$NEXT_PUBLIC_DEV_SERVER_PASSWORD
ENV NEXT_PUBLIC_DEV_SERVER_PASSWORD_ENABLED=$NEXT_PUBLIC_DEV_SERVER_PASSWORD_ENABLED
ENV GTAG_ANALYTICS_ID =$GTAG_ANALYTICS_ID 
ENV RESEND_API_KEY=$RESEND_API_KEY
ENV WEBSITE_URL=$WEBSITE_URL

# Build app (remove if not needed)
RUN yarn build

# Expose your app port (change if needed)
EXPOSE 3000

# Start app
CMD ["yarn", "start"]