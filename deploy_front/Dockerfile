# 1단계: 실행 환경만 준비 (Nginx)
FROM nginx:stable-alpine

# GitHub Actions에서 이미 빌드된 dist 폴더를 Nginx의 정적 파일 경로로 복사
# (Vite 기준 dist, Create React App 기준 build 폴더)
COPY dist /usr/share/nginx/html

# Nginx 기본 포트
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]