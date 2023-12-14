import express from "express";
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(express.json());

// reading files using fs modele 
let index = fs.readFileSync("index.html", "utf-8");
let carts = fs.readFileSync("./data/carts.json", "utf-8");
let comments = fs.readFileSync("./data/comments.json", "utf-8");
let posts = fs.readFileSync("./data/products.json", "utf-8");
let products = fs.readFileSync("./data/carts.json", "utf-8");
let quotes = fs.readFileSync("./data/quotes.json", "utf-8");
let todos = fs.readFileSync("./data/todos.json", "utf-8");
let users = fs.readFileSync("./data/users.json", "utf-8");


// routes for GET request

app.get("/", (req, res)=>{
res.setHeader("Content-Type", "text/html");
res.send(index);
});


app.get("/products", (req, res)=>{
res.setHeader("Content-Type", "application/json")
res.send(products);

});
app.get("/carts", (req, res)=>{
    res.setHeader("Content-Type", "application/json")
    res.send(carts);
});
app.get("/users", (req, res)=>{
    res.setHeader("Content-Type", "application/json")
    res.send(users);
});
app.get("/posts", (req, res)=>{
    res.setHeader("Content-Type", "application/json")
    res.send(posts);
});
app.get("/comments", (req, res)=>{
    res.setHeader("Content-Type", "application/json")
    res.send(comments);
});
app.get("/quotes", (req, res)=>{
    res.setHeader("Content-Type", "application/json")
    res.send(quotes);
});
app.get("/todos", (req, res)=>{
    res.setHeader("Content-Type", "application/json")
    res.send(todos);
});

app.listen(8080, ()=>{
    console.log("Server is running on port 8080.")
});
