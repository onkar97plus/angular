FROM node:latest as node
WORKDIR /app
COPY . .

RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY  --from=node /app/dist/a3-ang /usr/share/nginx/html

# FROM nginx:alpine
# RUN ls
# RUN pwd
# # RUN npm install
# # RUN ng build --prod
# COPY dist/a3-ang /usr/share/nginx/html
# # COPY StudentSurvey.war /usr/share/nginx/html
# # RUN cp a3-ang /usr/share/nginx/html
