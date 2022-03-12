FROM fusuf/whatsasena:latest

RUN git clone https://github.com/RIPPER-SER/Bixby_Mowl_ /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Farhan-dqz/media

CMD ["node", "bot.js"]
