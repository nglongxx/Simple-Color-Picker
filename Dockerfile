# Định nghĩa main Image
FROM node:16-alpine3.14

# chỉ định thư mục làm việc
WORKDIR /var/www

#copy toan bo source vao thu muc goc
COPY package*.json /var/www

#Install cac thu vien
RUN npm install

#copy toan bo source vao thu muc goc
COPY . /var/www/

#Chi thi container se start o port nao
EXPOSE 3000

#chay npm start
CMD ["npm", "start"]
