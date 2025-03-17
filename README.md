# AbortController showcase

This project shows the reason why you should always use AbortController if your request is made inside ```useEffect```

## How to use

### Clone the repo

```sh
$ git clone git@github.com:Talgeyou/abort-controller-showcase.git
$ cd abort-controller-showcase
```

### Install dependencies
```sh
$ pnpm install
```

### Perfect implementation

1. Switch to ```main``` branch
```sh
$ git checkout main
```
2. Start the application
```sh
$ pnpm dev
```

### Race condition problem illustration

1. Switch to ```race-condition``` branch
```sh
$ git checkout race-condition
```
2. Start the application
```sh
$ pnpm dev
```
3. Visit the link that vite will print in the console
4. Click on the test2 and instantly click on the test1. After this the test1 details will flicker on the right side of the page and then test2 details will be shown after 2 seconds. This is wrong behavior since we want to see test1 details because it's selected now
