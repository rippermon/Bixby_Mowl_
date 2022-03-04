FROM ripper/BixbyMowl:beta

RUN git clone https://github.com/RIPPER-SER/_Bixby_Mowl_ /root/Bixby
WORKDIR /root/Bixby/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/ripperser/database

CMD ["node", "bot.js"]
