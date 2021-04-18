import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvents = () => {
    const textarea = {
        width: "50%",
        height: "100px",
        padding: "5px 10px",
        boxSizing: "border-box",
        border: "2px solid #ccc",
        borderRadius: "4px",
        backgroundColor: "#f8f8f8",
        fontSize: "16px",
        resize: "none"
      }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            description: data.description,
            imageURL: imageURL

        };
        const url = `https://stark-woodland-81526.herokuapp.com/addEvent`;
        
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
        <div className="p-5 bg-color">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Add Service</h2>
                <br/>
                <br/>
                <input type="text" name="name" {...register("name")} placeholder="Service title" />
                <br/>
                <br/>
                <input type="text" style={textarea} name="description" {...register("description")} placeholder="Service description" />
                <br/>
                <br/>
                <h4>Image</h4>
                <input type="file" onChange={handleImageUpload} />
                <br/>
                <br/>
                <input type="submit" />
            </form>
        </div>
        
    );
};

export default AddEvents;