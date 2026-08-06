# 学習記録アプリ

## 概要

学習内容と時間を記録し、可視化するためのアプリケーションです

## 機能

- 学習内容、学習時間を記録することができる
- 記録した学習内容、学習時間を一覧表示できる

## 使用技術

- React（TypeScript）
- Hono（TypeScript）
- RDS for PostgreSQL（Database）
- Vite

## セットアップ

### 1. リポジトリをクローン

```bash
git clone https://github.com/Seripro/study-record-app6.git
cd study-record-app6
```

### 2. 依存関係のインストール

```bash
cd frontend
npm install
```

```bash
cd backend
npm install
```

### 3. 環境変数

./backend/.envを作成し、`DATABASE_URL`を記入してください。

### 4. マイグレーション

```bash
cd backend
npx prisma migrate dev --name init
npx prisma generate
```

## テーブル設計

このアプリでは `Record` テーブルを使用します

| カラム名 | 説明     |
| -------- | -------- |
| id       | 主キー   |
| title    | 学習内容 |
| time     | 学習時間 |

## 起動方法

```bash
# フロントエンド
cd frontend
npm run dev
```

```bash
# バックエンド
cd backend
npm run dev
```
