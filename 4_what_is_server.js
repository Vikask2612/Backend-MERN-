// what is server?



/*

What is a Server in Coding? (Simple Explanation)

In coding, a server is a program or computer that listens for requests from 
clients (like web browsers or mobile apps) and sends back responses.


---

✅ Example:

You open a website like www.google.com in your browser (client).

Your browser sends a request to Google's server.

The server checks what you asked for.

It sends back the web page (response) to your browser.



---

🔄 How it works (Real-Life Example):

Think of it like a restaurant:

You (Client) ask the waiter (Request) for food.

The kitchen (Server) prepares the food.

The waiter brings your order back (Response).



---

💡 In Code:

In Node.js, you can create a simple server like this:

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello from the server!');
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

📌 This code:

Creates a server.  

Listens on port 3000.

Responds with "Hello from the server!" when accessed.



---

🧠 Key Points:

Term	Meaning

Server	Program or machine that sends data on request
Client	User's app or browser that sends the request
Request	What the client asks the server to do
Response	What the server sends back to the client

*/