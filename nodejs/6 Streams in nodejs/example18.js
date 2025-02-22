// example showing the concept of duplex stream
const { Duplex } = require('stream');
/*
Duplex Stream:
A duplex stream is a stream that supports both reading and writing simultaneously. Examples of duplex streams in Node.js are net.Socket and custom duplex streams created using the stream module. The pipe() method facilitates connecting readable and writable streams, but it does not make them duplex.

To include a duplex stream in your code, you would typically use the stream.Duplex class.
*/
const duplexStream = new Duplex({
  write(chunk) {
    console.log(`Writing: ${chunk.toString()}`);
  },
  read() {
    this.push('Hello from duplex stream!');
    this.push(null); // End the readable stream
  }
});

// Writing to the duplex stream
duplexStream.write('Writing to duplex stream');

// Reading from the duplex stream
duplexStream.on('data', (chunk) => {
  console.log(`Reading: ${chunk.toString()}`);
});

/*
The this.push() method in a readable stream (or the readable side of a duplex stream) is used to add data to the internal buffer of the stream, making it available for reading.
*/