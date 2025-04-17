# Use official Node.js image
FROM node:18

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@latest --activate

# Create app directory
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

WORKDIR /app/apps/backend

# Copy dependency files and install
COPY apps/backend ./
RUN pnpm install --frozen-lockfile

# Expose the port used by the Express app
EXPOSE 8080

# Start the app
CMD ["pnpm", "start"]
