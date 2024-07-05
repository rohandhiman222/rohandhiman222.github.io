(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{409:function(t,a,s){"use strict";s.r(a);var n=s(14),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"streams-and-buffers-in-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#streams-and-buffers-in-node-js"}},[t._v("#")]),t._v(" Streams and Buffers in Node.js")]),t._v(" "),a("p",[t._v("Streams and buffers are fundamental concepts in Node.js that play a crucial role in handling data efficiently, especially when dealing with large amounts of data or data that needs to be processed incrementally. Here's an in-depth explanation of both concepts:")]),t._v(" "),a("h2",{attrs:{id:"streams-in-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#streams-in-node-js"}},[t._v("#")]),t._v(" Streams in Node.js")]),t._v(" "),a("h3",{attrs:{id:"what-are-streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-streams"}},[t._v("#")]),t._v(" What are Streams?")]),t._v(" "),a("p",[t._v("Streams are objects that allow you to read data from a source or write data to a destination in a continuous fashion. They enable handling of data in chunks, which is more memory-efficient and faster than reading or writing the entire data at once.")]),t._v(" "),a("h3",{attrs:{id:"types-of-streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#types-of-streams"}},[t._v("#")]),t._v(" Types of Streams")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Readable Streams")]),t._v(": Streams from which data can be read. Examples include "),a("code",[t._v("fs.createReadStream()")]),t._v(" for file reading and "),a("code",[t._v("http.IncomingMessage")]),t._v(" for handling HTTP requests.")]),t._v(" "),a("li",[a("strong",[t._v("Writable Streams")]),t._v(": Streams to which data can be written. Examples include "),a("code",[t._v("fs.createWriteStream()")]),t._v(" for file writing and "),a("code",[t._v("http.ServerResponse")]),t._v(" for sending HTTP responses.")]),t._v(" "),a("li",[a("strong",[t._v("Duplex Streams")]),t._v(": Streams that are both readable and writable. Examples include TCP sockets.")]),t._v(" "),a("li",[a("strong",[t._v("Transform Streams")]),t._v(": A type of duplex stream where the output is computed based on the input. Examples include file compression/decompression streams (e.g., zlib streams).")])]),t._v(" "),a("h3",{attrs:{id:"working-with-streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-streams"}},[t._v("#")]),t._v(" Working with Streams")]),t._v(" "),a("p",[t._v("Streams use event-driven APIs to notify when data is available or when operations are complete. Common events include:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("data")]),t._v(": Emitted when a chunk of data is available to read.")]),t._v(" "),a("li",[a("code",[t._v("end")]),t._v(": Emitted when there is no more data to read.")]),t._v(" "),a("li",[a("code",[t._v("error")]),t._v(": Emitted when an error occurs.")]),t._v(" "),a("li",[a("code",[t._v("finish")]),t._v(": Emitted when all data has been flushed to the underlying system.")])]),t._v(" "),a("h4",{attrs:{id:"example-of-using-readable-and-writable-streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-using-readable-and-writable-streams"}},[t._v("#")]),t._v(" Example of Using Readable and Writable Streams")]),t._v(" "),a("p",[t._v("Here's an example of reading from a file and writing to another file using streams:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a readable stream")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" readableStream "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReadStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create a writable stream")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" writableStream "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWriteStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"destination.txt"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Pipe the readable stream to the writable stream")]),t._v("\nreadableStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("writableStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nreadableStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"end"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"File copied successfully"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nreadableStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwritableStream"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"finish"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Write completed."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"benefits-of-using-streams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-using-streams"}},[t._v("#")]),t._v(" Benefits of Using Streams")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Efficiency")]),t._v(": Streams process data piece-by-piece, reducing memory consumption compared to loading the entire data into memory.")]),t._v(" "),a("li",[a("strong",[t._v("Speed")]),t._v(": Processing data in chunks can be faster, especially with large datasets.")]),t._v(" "),a("li",[a("strong",[t._v("Modularity")]),t._v(": Streams can be easily composed and reused, promoting code modularity.")]),t._v(" "),a("li",[a("strong",[t._v("Scalability")]),t._v(": Streams handle large data sets and real-time data efficiently, making applications more scalable.")])]),t._v(" "),a("h2",{attrs:{id:"buffers-in-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffers-in-node-js"}},[t._v("#")]),t._v(" Buffers in Node.js")]),t._v(" "),a("h3",{attrs:{id:"what-are-buffers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-are-buffers"}},[t._v("#")]),t._v(" What are Buffers?")]),t._v(" "),a("p",[t._v("Buffers are used to handle binary data in Node.js. A buffer is a chunk of memory allocated outside the V8 JavaScript engine, used for storing raw binary data. This is particularly useful when dealing with binary data streams such as TCP streams or file system operations.")]),t._v(" "),a("h3",{attrs:{id:"creating-buffers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-buffers"}},[t._v("#")]),t._v(" Creating Buffers")]),t._v(" "),a("p",[t._v("You can create buffers in several ways:")]),t._v(" "),a("ol",[a("li",[a("p",[a("strong",[t._v("Allocating a Buffer")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alloc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates a buffer of 10 bytes, initialized with zeros")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("Allocating an Unsafe Buffer")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("allocUnsafe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates a buffer of 10 bytes, without initializing")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("From an Array")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates a buffer from an array of bytes")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("From a String")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Creates a buffer from a string")]),t._v("\n")])])])])]),t._v(" "),a("h3",{attrs:{id:"working-with-buffers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-with-buffers"}},[t._v("#")]),t._v(" Working with Buffers")]),t._v(" "),a("p",[t._v("Buffers provide various methods to manipulate binary data, such as reading and writing data, slicing, and concatenation.")]),t._v(" "),a("h4",{attrs:{id:"example-of-buffer-manipulation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-buffer-manipulation"}},[t._v("#")]),t._v(" Example of Buffer Manipulation")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Accessing buffer elements")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Outputs: 72 (ASCII code for 'H')")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Modifying buffer elements")]),t._v("\nbuf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("74")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Changes 'H' to 'J'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Outputs: Jello, World!")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Slicing buffers")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" slicedBuf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("slicedBuf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Outputs: Jello")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Concatenating buffers")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, "')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" buf2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" concatenatedBuf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("buf1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" buf2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("concatenatedBuf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Outputs: Hello, World!")]),t._v("\n")])])]),a("h3",{attrs:{id:"benefits-of-using-buffers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#benefits-of-using-buffers"}},[t._v("#")]),t._v(" Benefits of Using Buffers")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Performance")]),t._v(": Buffers allow efficient handling and manipulation of binary data, which is essential for high-performance applications.")]),t._v(" "),a("li",[a("strong",[t._v("Compatibility")]),t._v(": Buffers provide a way to interact with binary data streams and perform operations like reading from or writing to files, network sockets, and other data sources.")]),t._v(" "),a("li",[a("strong",[t._v("Control")]),t._v(": Buffers give fine-grained control over the allocation and management of memory, which can be crucial for certain applications.")])]),t._v(" "),a("h2",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),a("p",[t._v("Streams and buffers are essential components in Node.js for handling data efficiently. Streams enable the processing of data in chunks, making them ideal for large or continuous data flows. Buffers provide a way to handle binary data directly, offering performance benefits and fine-grained control over memory management. Understanding these concepts is crucial for building high-performance, scalable applications in Node.js.")])])}),[],!1,null,null,null);a.default=e.exports}}]);