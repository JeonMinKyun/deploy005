# 1단계: 실행 환경만 준비 (Java 21 JRE)
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# GitHub Actions에서 이미 빌드된 jar 파일만 복사
# 빌드 결과물 위치가 target/ 폴더임을 가정합니다.
COPY target/*.jar app.jar

# 서버 포트 노출
EXPOSE 8080

# 타임존 설정 및 실행
ENTRYPOINT ["java", "-jar", "-Duser.timezone=Asia/Seoul", "app.jar"]
