# 1단계: 실행 환경만 준비 (Nginx)
FROM nginx:stable-alpine

# GitHub Actions에서 이미 빌드된 dist 폴더를 Nginx의 정적 파일 경로로 복사
# (Vite 기준 dist, Create React App 기준 build 폴더)
COPY dist /usr/share/nginx/html

# 핵심: 작성하신 nginx.conf를 Nginx 설정 디렉토리로 복사
#COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginx 기본 포트
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]