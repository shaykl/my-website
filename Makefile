# Define variables
PROJECT_NAME=my-website
DOCKER_IMAGE_NAME=my-website-image
CONTAINER_NAME=my-website-container
PORTS=-p 3322:22
VOLUMES=-v $(PWD):/home/shayk/my-website

# Build the Docker image
build:
	docker build -t $(DOCKER_IMAGE_NAME) .

# Run the Docker container
run:
	docker run -d --name $(CONTAINER_NAME) $(PORTS) $(VOLUMES) $(DOCKER_IMAGE_NAME)

# Stop and remove the Docker container
clean:
	docker stop $(CONTAINER_NAME)
	docker rm $(CONTAINER_NAME)

# Remove the Docker image
clean-image:
	docker rmi $(DOCKER_IMAGE_NAME)

# Rebuild and run the container
rebuild: clean run

# Default command
all: run

.PHONY: build run clean clean-image rebuild all
