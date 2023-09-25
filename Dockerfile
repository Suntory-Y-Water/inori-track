# 最新の安定版のNode.jsイメージを指定します。
FROM node:18

# アプリケーションのディレクトリを作成します。
WORKDIR /usr/src/app

# プロジェクトの依存関係をコピーします。
COPY package*.json ./

# 依存関係のインストールします。
RUN npm install

# プロジェクトのソースコードをコピーします。
COPY . .

# アプリケーションが動くポート番号をExposeします。
EXPOSE 3000

# アプリケーションの起動コマンドを指定します。
CMD ["npm", "run", "dev"]