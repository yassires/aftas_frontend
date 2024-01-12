FROM  maven:3.9.6-eclipse-temurin-21-jammy AS build

WORKDIR /app

COPY ./pom.xml ./pom.xml

COPY ./src ./src

RUN mvn clean package  -DskipTests

FROM openjdk:17-jdk-slim

WORKDIR /app

EXPOSE 8081

CMD ["java", "-jar", "app.jar"]
