import { createSlice } from "@reduxjs/toolkit";

const initialAllProducts = [
  {
    Id: 1,
    productName: "Green Apple",
    brand: "Hormel Black",
    imgUrl:
      "https://5.imimg.com/data5/SELLER/Default/2022/6/MF/PZ/JD/110228461/white-pear-2-768x576-500x500.jpg",
    price: 40,
    actualPrice:40,
    quantity: 2,
    status: null,
    reason:null,
    approved:false
  },
  {
    Id: 2,
    productName: "Orange Fruit",
    brand: "Hormel Black",
    imgUrl: "https://hips.hearstapps.com/hmg-prod/images/orange-1558624428.jpg",
    price: 65,
    actualPrice:65,
    quantity: 4,
    status: null,
    reason:null,
    approved:false
  },
  {
    Id: 3,
    productName: "Dragun Fruit",
    brand: "Hormel Black",
    imgUrl: "https://www.color-meanings.com/wp-content/uploads/Pitaya.jpeg",
    price: 60,
    quantity: 6,
    actualPrice:60,
    status: null,
    reason:null,
    approved:false
  },
  {
    Id: 4,
    productName: "Mango",
    brand: "Hormel Black",
    imgUrl: "https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg",
    price: 25,
    actualPrice:25,
    quantity: 2,
    status: null,
    reason:null,
    approved:false
  },
  {
    Id: 5,
    productName: "Pineapple",
    brand: "hormel Black",
    imgUrl:
      "https://5.imimg.com/data5/PW/ND/MY-46595757/fresh-pineapple-281kg-29.png",
    price: 50,
    actualPrice:50,
    quantity: 1,
    status: null,
    reason:null,
    approved:false
  },
  {
    Id: 6,
    productName: "Strauberry",
    brand: "Hormel Black",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/800px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg",
    price: 90,
    actualPrice:90,
    quantity: 2,
    status: null,
    reason:null,
    approved:false
  },
  {
    Id: 7,
    productName: "Banana",
    brand: "Hormel Black",
    imgUrl:
      "https://m.media-amazon.com/images/I/41Y2eoT3OTL._AC_UF894,1000_QL80_.jpg",
    price: 45,
    actualPrice:45,
    quantity: 2,
    status: null,
    reason:null,
    approved:false
  },
  {
    Id: 8,
    productName: "Grapes",
    brand: "Hormel Black",
    imgUrl:
      "https://www.aishcart.in/4354-large_default/sweet-green-grapes-case-14kg.jpg",
    price: 29,
    actualPrice:29,
    quantity: 5,
    status: null,
    reason:null,
    approved:false
  },
  {
    Id: 9,
    productName: "Guava",
    brand: "Hormel Black",
    imgUrl:
      "https://malgudi.in/cdn/shop/products/GuavaWhite500x500.jpg?v=1636897798",
    price: 24,
    actualPrice:24,
    quantity: 2,
    status: null,
    reason:null,
    approved:false
  },
  {
    Id: 10,
    productName: "Kiwi fruit",
    brand: "Hormel Black",
    imgUrl:
      "https://shop.organicmandya.com/cdn/shop/products/1y79UWGdIyhJsKIJOPUtusB17UwyLxWjO_5fce89fb-6f56-405f-8042-f24c5bd65454_783x700.jpg?v=1608550660",
    price: 60,
    actualPrice:60,
    quantity: 1,
    status: null,
    reason:null,
    approved:false
  },
];

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: initialAllProducts,
  },
  reducers: {
    updateStatus: (state, action) => {
      state.allProducts = state.allProducts.map((eachItem) => {
        if (eachItem.Id === action.payload.idValue) {
          return { ...eachItem, status: action.payload.reason,approved:action.payload.isApproved };
        }
        return eachItem;
      });
    },
    updateEditedData:(state,action)=>{
      state.allProducts = state.allProducts.map((eachItem) => {
      if (eachItem.Id === action.payload.Id) {
        return { ...eachItem,...action.payload};
      }
      return eachItem;
    })},
    updateProduct: (state, action) => {
      state.allProducts = state.allProducts.map((eachItem) => {
        if (eachItem.Id === action.payload.Id) {
          return { ...eachItem, ...action.payload };
        }
        return eachItem;
      });
    },
  },
});

export const {updateEditedData, updateProduct, updateStatus } = productsSlice.actions;
