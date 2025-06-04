# 📦 MongoDB Intermediate Concepts

![Platform](https://img.shields.io/badge/Platform-Node.js-green?logo=nodedotjs) ![Framework](https://img.shields.io/badge/Framework-Express.js-lightgreen?logo=express) ![Database](https://img.shields.io/badge/Database-MongoDB-darkgreen?logo=mongodb) ![Tool](https://img.shields.io/badge/API%20Testing-ThunderClient-purple?logo=thunderclient) ![Language](https://img.shields.io/badge/Language-JavaScript-yellow?logo=javascript)

---

## 📑 Table of Contents

- [📦 MongoDB Intermediate Concepts](#-mongodb-intermediate-concepts)
  - [📑 Table of Contents](#-table-of-contents)
  - [📌 Introduction](#-introduction)
  - [📁 Project Structure](#-project-structure)
  - [🧠 Concepts Covered](#-concepts-covered)
    - [1. MongoDB Aggregation](#1-mongodb-aggregation)
      - [✅ Examples](#-examples)
    - [2. Referencing and Populating](#2-referencing-and-populating)
  - [🛠️ How to Run the Project](#️-how-to-run-the-project)
    - [Prerequisites](#prerequisites)
    - [1. Clone the repo](#1-clone-the-repo)
    - [2. Install dependencies](#2-install-dependencies)
    - [3. Run MongoDB locally or provide a MongoDB URI in `.env`](#3-run-mongodb-locally-or-provide-a-mongodb-uri-in-env)
    - [4. Start the server](#4-start-the-server)
  - [✅ Conclusion](#-conclusion)

---

## 📌 Introduction

This project demonstrates **intermediate MongoDB concepts** using Node.js, Express, and Mongoose. It focuses on **Aggregation Pipelines**, and **referencing documents with `populate()`**, commonly used when designing normalized schemas in MongoDB. This is a backend-only setup ideal for learners and intermediate developers.

---

## 📁 Project Structure

```md
.
├── controllers/
│ ├── controller-product.js
│ └── controller-book.js
├── models/
│ ├── model-Product.js
│ ├── model-Author.js
│ └── model-Book.js
├── sample/
│ ├── data-authors.json
│ ├── data-books.json
│ └── data-products.json
├── routes/
│ └── route-products.js
│ └── route-books.js
├── server.js
└── package.json
```

---

## 🧠 Concepts Covered

### 1. MongoDB Aggregation

Aggregation framework allows transforming and combining documents using stages like:

- `$match`: Filters documents.
- `$group`: Aggregates values by group.
- `$project`: Reshapes documents.
- `$sum`, `$avg`, `$min`, `$max`: Accumulators for metrics.

#### ✅ Examples

- Fetch in-stock products with `price > 500`, then group by category.
- For electronics, get `totalRevenue`, `avgPrice`, and `priceRange`.

---

### 2. Referencing and Populating

This method connects two collections using ObjectId references.

- A `Book` references an `Author` via `author: { type: ObjectId, ref: 'Author' }`.
- `populate("author")` fetches the author details when querying the book.

---

## 🛠️ How to Run the Project

### Prerequisites

- Node.js installed
- MongoDB running (local or cloud)
- Thunder Client / Postman for testing

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mongodb-intermediate-concepts.git
cd mongodb-intermediate-concepts
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run MongoDB locally or provide a MongoDB URI in `.env`

```env
MONGO_URI=mongodb://localhost:27017/mydb
```

### 4. Start the server

```bash
npm start or npm run dev
```

---

## ✅ Conclusion

This project showcases how MongoDB's aggregation and population features are applied in real-world scenarios. It’s ideal for building eCommerce dashboards, analytics engines, and normalized document relations in scalable applications.
