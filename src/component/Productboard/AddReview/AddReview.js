import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {

    const textarea = {
        width: "100%",
        height: "100px",
        padding: "5px 10px",
        boxSizing: "border-box",
        border: "2px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#f8f8f8",
        fontSize: "16px",
        resize: "none"
      }
    const { register, handleSubmit} = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            description: data.description,
            imageURL: imageURL

        };
        const url = `https://stark-woodland-81526.herokuapp.com/review`;
        
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side respons', res))
    };
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'bb4771dd8adeb442ab08f3e2d272b05e')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <div className="">
            <h1>Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" name="name" {...register("name")} placeholder="Your Name" />
                <br/>
                <input type="text" style={textarea} name="description" {...register("description")} placeholder="description" />
                <br/>
                <input type="file" onChange={handleImageUpload} />
                <br/>
                <input type="submit" />
            </form>
        </div>
        
    );
};

export default AddReview;