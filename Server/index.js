const express = require("express");
require('dotenv').config({ path: './env' });
require('dotenv').config();
const bodyParser = require("body-parser");
require("./dbDefaultSync");
const order = require("./modal/orderModal");
const product = require("./modal/productModal");
const cors = require("cors");

const data = require("./products");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/getproducts", async (req, res) => {
	//lists all  available products

	let products = await product.getActiveProducts();
	return res.json(products);
});

// get all active products
app.get("/api/addproducts", (req, res) => {
	let productData = data.products;

	productData.map((products) => {
		product.createProduct(products);
	});

	return res.status(200).json({ message: "Products Added Successfully" });
	// Neat!
});

// create a order

app.post("/api/place_order", async (req, res) => {
	let orderData = req.body;

	const orderStatus = await order.createOrder(orderData);

	if (orderStatus) {
		const responseObj = {
			status: true,
			order: orderStatus,
		};

		return res.status(200).json(responseObj);
	} else {
		const responseObj = {
			status: false,
			order: orderStatus,
		};

		return res.status(400).json(responseObj);
	}
});


const PORT = 3001;

app.listen(PORT);
console.log("api runnging on port " + PORT + ": ");
