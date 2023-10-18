import React, { useState } from 'react';
import {Container, FormGroup, Input} from 'reactstrap';


export default function UploadingImages(props) {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadImage = async (e) =>{
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "images");
        setLoading(true);
        const res= await fetch( "https://api.cloudinary.com/v1_1/dludaspiw/image/upload",
        {
            method: "POST",
            body: data,
        }
        )
        const file = await res.json();
       // console.log(res)
        setImage(file.secure_url)
        setLoading(false)
    }
  return (
    <div>
        <Container style={{textAlign: 'center'}}>
            <h1>Subiendo Imagenes</h1>
            <FormGroup>
                <Input 
                type="file"
                name="file"
                placeholder= "Sube tu imagen aqui"
                onChange= {uploadImage}
                 />
                 {loading ? (<h1>Cargando Imagenes...</h1>): (<img src={image} style={{width: "300px"}}/>)}
            </FormGroup>
        </Container>
    </div>
  )
}
