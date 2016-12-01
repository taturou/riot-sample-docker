# Riot.js を簡単に試すための Docker イメージ

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
```

## コマンド実行

以下で、docker 内で任意のコマンド <command> を実行します。

```bash
$ ./exe <command> <args>
```

例)

```bash
$ ./exe riot -v

  riot-cli:      3.0.0 - https://github.com/riot/cli
  riot-compiler: 3.0.0 - https://github.com/riot/compiler

$
```

### dumb-init

初期プロセスに dumb-init を使用しているので、コマンド終了直後にホストのシェルに戻ってきます。

```bash
$ time ./exe echo ""


real    0m0.415s
user    0m0.008s
sys     0m0.004s
$
```

## コード等の置き場

`./volumes/app` にコード、npmパッケージ一式を置いてください。
デフォルトで `./volumes/app` がカレントディレクトリにマウントされています。

たとえば、以下を実行すると:

```bash
$ ./exe npm install --save <package>
```

`./volumes/app/node_modules` にパッケージがインストールされます。

