# Example to upload documentation to NPM

This package console displays a random message among a list of messages it has in an array.

The code to be executed is found in the index and is executed from `/bin/global.js`.

In the `package.json` you can see a special configuration so that the package can be installed as a dependency.

## Installation

It can be published in NPM and installed as a global dependency or local dependency, fot this we locate ourselves in the directory and execute

```shell
npm publish
```

It can also be installed locally with the command

```shell
npm link
```

## Use

After installed the following command will display a random message on the console

```shell
random-msg
```

## Author

Edwin García  
spark.com.co@gmail.com

## License

[MIT](./LICENSE)