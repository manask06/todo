# Use an OpenJDK 21 image to build the application
FROM openjdk:21-ea-33 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven wrapper and the pom.xml
COPY .mvn/ .mvn
COPY mvnw pom.xml ./

# Download the dependencies without running tests
RUN ./mvnw dependency:go-offline -B

# Copy the rest of the application code
COPY src ./src

# Run the Maven build to package the application
RUN ./mvnw clean package -DskipTests

# Use an official OpenJDK runtime as a parent image
FROM openjdk:21-ea-33

# Set the working directory inside the container
WORKDIR /app

# Copy the jar file from the build stage to the runtime stage
COPY --from=build /app/target/todo-app-0.0.1-SNAPSHOT.jar app.jar

# Expose the port that the application will run on
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
