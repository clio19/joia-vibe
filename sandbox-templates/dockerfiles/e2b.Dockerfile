# You can use most Debian-based base images
FROM node:21-slim

# Install curl
RUN apt-get update && apt-get install -y curl && apt-get clean && rm -rf /var/lib/apt/lists/*

# Copy and set up compile script
COPY compile_page.sh /usr/local/bin/compile_page.sh
RUN chmod +x /usr/local/bin/compile_page.sh

# Set up the workspace directory
WORKDIR /home/user

# Install dependencies and customize sandbox directly in the final location
RUN npx --yes create-next-app@15.3.3 . --yes \
    && npx --yes shadcn@2.6.3 init --yes -b neutral --force \
    && npx --yes shadcn@2.6.3 add --all --yes
