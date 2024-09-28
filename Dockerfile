# First stage: Use Maven to build the project
FROM maven:3.8.8-eclipse-temurin-17 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the pom.xml and the entire source code to the container
COPY ./backend/pom.xml ./pom.xml
COPY ./backend/src ./src

# Run Maven package command to build the project and create a jar file
RUN mvn clean package -DskipTests

# Second stage: Use a smaller JDK image to run the built application
FROM eclipse-temurin:17-jdk-jammy

# Set the working directory for the application
WORKDIR /app

# Copy the jar file from the previous build stage
COPY --from=build /app/target/*.jar app.jar

# Expose port 8080
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]
