# Riot.js を簡単に試すための Docker イメージ

ホストPCに開発に必要なソフトウェアをインストールしなくても、Riot.js + Node.jsを使用したアプリを開発できるようにするDockerイメージです。

## 使用条件

docker、docker-compose がインストールされていること。

以下のバージョンで動作確認しています。

* Docker version 1.12.3, build 6b644ec
* docker-compose version 1.7.1, build 0a9ab35

docker-compose.yml version2 以降が使えればOK。

## インストール

```bash
$ git clone https://github.com/taturou/riot-sample-docker.git
$ cd riot-sample-docker
$ docker-compose build
$ ./dexe npm install
```

## サーバ実行

デフォルトで、以下のサーバを起動します。

* ポート 3000 で待ち受ける
* カレントディレクトリのHTMLを表示する

このサーバは Bowser-sync で動いています。

### 起動

以下のコマンドでサーバを起動してバックグラウンドで常駐します。

```bash
$ docker-compose up -d
```

### 終了

```bash
$ docker-compose down
```

## コマンド実行

docker 内で任意のコマンドを実行するための shell script を用意しています。
3種類あります。

### cexe

docker-composeによりサーバを起動中は `cexe` を使用します。
以下で、docker 内で任意のコマンド <command> を実行します。

```bash
$ ./cexe <command> <args>
```

例)

```bash
$ ./cexe node -v
v7.2.1
$
```

### dexe

サーバを起動していないときは `dexe` を使用します。
以下で、docker 内で任意のコマンド <command> を実行します。

```bash
$ ./dexe <command> <args>
```

例)

```bash
$ ./dexe npm riot -v
3.10.10
$
```

### pexe

`dexe` に加えて、ポート番号 3000 を listen します。

例)

```bash
$ ./pexe npm run server
```

## インストール済みのソフトウェアモジュール

* Node.js

    ```bash
    $ ./dexe node -v
    v7.2.1
    $ ./dexe npm -v
    3.10.10
    ```

* dumb-init

    初期プロセスに dumb-init を使用しているので、コマンド終了直後にホストのシェルに戻ってきます。

    ```bash
    $ time ./dexe echo ""


    real    0m0.415s
    user    0m0.008s
    sys     0m0.004s
    $
    ```

## アプリのコード等の置き場

カレントディレクトリにコード、npmパッケージ一式を置いてください。
たとえば、以下を実行すると:

```bash
$ ./dexe npm install --save <package>
```

`./node_modules` にパッケージがインストールされます。

