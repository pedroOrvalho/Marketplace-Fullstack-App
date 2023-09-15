import React from 'react'

import cloth from "../../images/clothes.jpg"
import { useState } from 'react';
import UserPreviewSidebar from '../../components/create-listing/UserPreviewSidebar';
import {Product} from "../../components/types/type"




export default function UsersPageListing() {
  const [productItem, setProductItem] = useState<Product[]>([]);
 


  const [userInput, setUserInput]=useState<Product>({
    _id:"",
    title:"",
    price:123,
    category:"",
    image:[""],
    description:"",
    userId:"",
    sold:true

  })

    //  color: [""];

const changeTitle=(event:React.ChangeEvent<HTMLInputElement>)=>{
  setUserInput({...userInput, title:event.target.value})
}
const changePrice=(event:React.ChangeEvent<HTMLInputElement>)=>{
setUserInput({
  ...userInput, price:parseInt(event.target.value)
})
}
const changeCategory=(event:React.ChangeEvent<HTMLInputElement >)=>{
  setUserInput({...userInput, category:event.target.value})
}
const changeDescription=(event:React.ChangeEvent<HTMLInputElement>)=>{
setUserInput({...userInput, description:event.target.value})
}
const changeImage=(event:React.ChangeEvent<HTMLInputElement>)=>{
const file= event.target.files?.[0]
if(file){
  const reader =new FileReader()
  reader.readAsDataURL(file)
  reader.onload=()=>{
    const base64Image= reader.result as string

    setUserInput({...userInput, image:[base64Image]})
  }
}


}

  const submitProduct = () => {
    setProductItem([...productItem, userInput]);
    setUserInput({
      _id: "",
      title: "",
      price: 123,
      category: "",
      image: [],
      description: "",
      userId:"",
      sold:true
     
    });
  };
  return (
    <div className="main-div">
      <div className="user-sidebar">
        <UserPreviewSidebar
          submitProduct={submitProduct}
          changeImage={changeImage}
          changeTitle={changeTitle}
          changePrice={changePrice}
          changeDescription={changeDescription}
          changeCategory={changeCategory}
          userInput={userInput}
        />
      </div>
       {productItem.map((item)=>{
          return (
            <div className="user-preview" key={item.title}>
              <div>
                <h2>Preview Image before uploading</h2>
                <div className="Image-preview">
                  <img src={item.image[0]} alt="cloth" width={450} />
                </div>
              </div>
              <div>
                <h2>preview other details</h2>
                <div className="preview-item">
                  <p>Title  {item.title}</p>
                  <p>price  {item.price}</p>
                  <p>category {item.category}</p>

                  <p>sellers description   {item.description} </p>
                </div>
              </div>
            </div>
          );
        })}
    
    </div>
  );
}
