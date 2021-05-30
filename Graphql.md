
# Introduction + Setup + Hello World

STT|Content|
:---:|---|
**I**|[GraphQL What? & Why?](#why)<br><br>[1. GraphQL?](#what)<br> [ 2. RESTful vs GraphQL](#sosanh)<br>[3. Pros & Cons](#uukhuyet)
**II**|[Setup](#setup)
**III**|[Run App](#hello)

<br>

## I. What and Why <a id="why"></a>:
### 1. GraphQL ???<a id="what"></a>
&emsp; ❌ GraphQL is **not** a programing language<br>
&emsp; ❌ GraphQL is **not** a lib.<br>
&emsp; ✅ GraphQL is a [query language](# "Là tên gọi chung để chỉ các ngôn ngữ máy tính được dùng để tạo các truy vấn trong các cơ sở dữ liệu và các hệ thống thông tin.") for API. Execute bases on [HTTP](https://www.digistar.vn/http-la-gi-tim-hieu-ve-giao-thuc-http-va-https/ "Http (HyperText Transfer Protocol) là giao thức truyền tải siêu văn bản được sử dụng trong www dùng để truyền tải dữ liệu giữa Web server đến các trình duyệt Web và ngược lại.") (Request/Response)
> HYou can understand it's an API standard like RESTful.

### <a id="sosanh"></a>2. RESTful vs GraphQL.
suppose we have a page like:

![](./image/cart.png)

##### a. You must to call the requests to API endpoint like:
RESTful|GraphQL|
---|---|
`localhost/carts/1` => *Get cart info*<br>`localhost/products/1`=> *Get product #1*<br>`localhost/products/2`=> *Get product  #2*<br>`localhost/products/3`=> *Get product  #3*|`localhost/graphql`=> *Get all data info that you need*
<span style="color:red">RESTful you must to call multiple request to get these data</span>|<span style="color:blue">GraphQL Just only a request to get them</span>
<br>

##### b. Request & Response của API:
.|RESTful|GraphQL|
:---:|---|---|
**Request**|`localhost/products/1`|`localhost/grapgql`
**Request Payload**|| query: {<br>&emsp;product(id: "1") {<br>&emsp;&emsp;id<br>&emsp;&emsp;name<br>&emsp;&emsp;prize<br>&emsp;&emsp;provider<br>&emsp;&emsp;quantity<br>&emsp;&emsp;discount<br>&emsp;}<br>}
**Response**|{<br>&emsp;`"id": "1"`,<br>&emsp;`"name": "Xem Máy Honda SH 300i ABS Việt Nam 2018 - Trắng đen"`,<br>&emsp;`"prize": "270870000"`,<br>&emsp;`"provider": "Hệ thống HEAD Phát Tiến"`,<br>&emsp;`"quantity": "2"`,<br>&emsp;`"discount": "10%"`,<br>&emsp;<br>&emsp;<span style="color:red; background:#E6D8D8"> "region": "TPHCM"</span>,<br>&emsp;<span style="color:red; background:#E6D8D8"> "country": "Japan"</span>,<br>&emsp;<span style="color:red; background:#E6D8D8"> "weight": "169kg"</span>,<br>&emsp;<span style="color:red; background:#E6D8D8"> "brand": "Honda"</span>,<br>&emsp;<span style="color:red; background:#E6D8D8"> "detail": "Có ABS"</span><br>}|{<br>&emsp;`"id": "1"`,<br>&emsp;`"name": "Xem Máy Honda SH 300i ABS Việt Nam 2018 - Trắng đen"`,<br>&emsp;`"prize": "270870000"`,<br>&emsp;`"provider": "Hệ thống HEAD Phát Tiến"`,<br>&emsp;`"quantity": "2"`,<br>&emsp;`"discount": "10%"`<br><br><br><br><br><br><br>}
**=>**|<span style="color:red">Response of RESTful has many redundant data. <br>**(Server trả về thế nào, Client phải nhận thế ấy, không được ý kiến)**</span>|<span style="color:blue">GraphQL you can get the data that you need<br>**(Nothing more, nothing less)**</span>
<br>

### 3. Pros vs Cons GraphQL<a id="uukhuyet"></a>

* ***Ưu điểm:***

Ưu điểm|GraphQL
:---|---
**Fast**| Chỉ request đến 1 endpoint duy nhất, nên tốc độ sẽ nhanh hơn. Không cần phải request nhiều lần.
**Flexible**| Cùng 1 API có thể customize data cần thiết cho từng client. (Desktop cần nhiều fields, mobile cần ít fields ...) => Performance cao.
**Easy to use & maintain**| - Khi có thay đổi của model từ phía client. Client chỉ cần update câu query là đủ. Server API không cần làm gì cả. <br> - Trường hợp khi API từ phía server có sự thay đổi cần thêm 1 số dữ liệu mới. Sự ảnh hưởng đến các client là không có. API vẫn tương thích ngược được với các Client cũ.
**Hỗ trợ Subcription**|Một yêu cầu quan trọng khác đối với nhiều ứng dụng đó chính là realtime, để có thể kết nối đến máy chủ để có được thông tin về các event ngay lập tức. Trong trường hợp này, GraphQL cung cấp các khái niệm gọi là subscriptions. Khi 1 client subscriptions một event, nó cũng bắt đầu và giữ các kết nối đến server. Bất cứ khi nào sự kiện đó xảy ra, server sẽ đẩy dữ liệu tương ứng đến client.


<br>

* ***Khuyết điểm:***
So với với RESTful, GraphQL có nhiều ưu điểm hơn để giải quyết các về, tuy nhiên GrapghQL không phải là toàn diện nó vẫn còn những mặc hạn chế sau:

Khuyết điểm|GraphQL
:---|---
Everything is POST|- Tất cả các request đều sử dụng phương thức POST => Việc implement [HTTP caching](https://viblo.asia/p/http-caching-6BAMYknzvnjz "Kỹ thuật HTTP Caching chính là việc bạn chuyển một bản copy các tài nguyên tĩnh phía Server xuống lưu ở dưới Client. Về cơ bản, người dùng sẽ cảm nhận thấy một độ trễ rất thấp khi yêu cầu các tài nguyên tĩnh này từ phía Server, lưu lượng truyền đi ít hơn, số request đến Server ít hơn, do vậy Server sẽ nhàn hơn để dùng sức của mình vào những việc khác.") rất phức tạp.
JSON|- Chỉ hỗ trợ định dạng JSON
Performance|- Bởi vì cho phép client tùy ý lấy các field mong muốn, nên sẽ có những vấn đề liên quan đến performance khi client yêu cầu quá nhiều field lồng nhau.

----


## II. Setup <a id="setup"></a>:
 **1. Environemt:**
 - [Nodejs and npm](https://nodejs.org/en/)
 - [git](https://git-scm.com/)

 **2. Edit server.js**
 ```js
const { ApolloServer } = require('apollo-server-express');
const {typeDefs} = require("./src/graphql/shema")
const {resolvers} = require("./src/graphql/resolvers")

...
...

const server = new ApolloServer({ typeDefs, resolvers });
server.start();
const app = express();
server.applyMiddleware({ app });

...
...

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log(`🚀 Server ready at http://localhost:8080${server.graphqlPath}`);
});

 ```

 **3. Add schema file**
 - Tạo thư mục **graphql** trong /src/:
 - Tạo mới file có tên **shema.js** trong thư mục **graphql** vừa tạo
```graphql
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Product {
    id: String!
    name:String!,
    description:String!,
    category:String!,
    brand:String!,
    price: Int!,
    quantity:Int!
  },
  input ProductInput {
    name:String!,
    description:String!,
    category:String!,
    brand:String!,
    price: Int!,
    quantity:Int!
  },
  type Query {
    hello: String!,
    product(id: String!): Product
  },
  type Mutation {
    createProduct(input: ProductInput): Product
  }
`;

module.exports = { typeDefs }
```

 **4. Tạo file resolvers**
- Tạo mới file có tên **resolvers.js** trong thư mục **graphql** vừa tạo
```js
const { createProduct, getById } = require("../services/product.service")
const resolvers = {

  Query: {
    hello: () => {
      return 'Hello World!'
    },
    product: (obj, args, context, info) => {
      return getById(args.id)
    }
  },
  Mutation: {
    createProduct: (obj, args, context, info) => {
      return createProduct(args.input)
    }
  }
};

module.exports = {
  resolvers
}
```


 **5. Edit file  product.repository.js**
 ```js
 ...
 ...

 const getById = (id) => {
  try {
    return Product.findById(id)
  } catch (error) {
    throw new Error(`An error occurs when get product id ${id} : ${error.message}`);
  }
}

module.exports = {
  saveProduct,
  getById
}
 ```

**6. Edit file  product.service.js**
```js
...
...

  const getById = (id) => {
  return prodrepository.getById(id);
}

module.exports = {
  createProduct,
  getById
}
  ```


----
## III. Run App <a id="hello"></a>:
- Run app
```js
yarn start
  ```

- Truy vào đường dẫn
http://localhost:8080/graphql


- Tận hưởng thành quả

----