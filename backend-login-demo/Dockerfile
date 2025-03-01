FROM registry.redhat.io/ubi8/openjdk-17-runtime:1.21-1.1739757884
 
USER root
RUN mkdir -p /deployments 

EXPOSE 8080
 
COPY target/ms-login-backend.jar /deployments/backend-login-demo.jar
CMD ["java", "-jar", "/deployments/backend-login-demo.jar", "--spring.config.location=file:///deployments/config/application.properties"]

