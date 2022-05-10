RUN npm install
RUN npm run build --prod
WORKDIR /app
COPY . .

FROM nginx:alpine
COPY  /app/dist/a3-ang /usr/share/nginx/html

# FROM nginx:alpine
# RUN ls
# RUN pwd
# # RUN npm install
# # RUN ng build --prod
# COPY dist/a3-ang /usr/share/nginx/html
# # COPY StudentSurvey.war /usr/share/nginx/html
# # RUN cp a3-ang /usr/share/nginx/html
