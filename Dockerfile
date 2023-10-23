# ベースとなるイメージの指定
FROM node:18

# ワークディレクトリの設定
WORKDIR /app

# 依存関係ファイルのコピー
COPY package.json package-lock.json ./

# 依存関係のインストール
RUN npm install

# ソースコードのコピー
COPY . .

# Prisma Clientの生成
RUN npx prisma generate

# アプリケーションの起動コマンド
CMD ["npm", "run", "dev"]