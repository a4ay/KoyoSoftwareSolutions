import React, { useState } from 'react';
import './AddPopup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
// import { makeStyles } from '@material-ui/core/styles';
// import { useForm } from 'react-hook-form';
// import TableContainer from '@material-ui/core/TableContainer';
// import Paper from '@material-ui/core/Paper';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import axios from 'axios'

// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         border: '1px solid gray',
//     },
// }));

const AddPopup = (props) => {
    

    const [productId, setProductId] = useState(null)
    // const classes = useStyles();
    // const [gender, setGender] = useState('');

    // const handleChange = (event) => {
        // setGender(event.target.value);
    // };
    
    // upload image
    // const [image, setImage] = useState('')
    // const [loading, setLoading] = useState(false)

    // const uploadImage = async (e) => {
    //     const files = e.target.files
    //     const data = new FormData()
    //     data.append('file', files[0])
    //     data.append('upload-preset', 'TTS')
    //     setLoading(true)
    //     const res = await fetch(

    //     )
    // }

    const [selectedFile, setSelectedFile] = useState(null)

    const onChangeHandler = event => {
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0])
        // console.log(event.target.files[0].name)
        // fetch('http://localhost:4400/uploadImage', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'image/png'
        //     },
        //     body: event.target.files[0]
        // })
    }
    // const [imageFile, setImageFile] = useState({fileName: ''})
    // const onClickUpload = () => {
    //     console.log(selectedFile)
    //     // fetch('http://localhost:4400/uploadImage', {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'Content-Type': 'image/png'
    //     //     },
    //     //     body: selectedFile
    //     // })
    //     const myFileInputs = document.querySelector("input[type='file']")
 
    //     const formData = new FormData()
    //     formData.append('myFile', myFileInputs.files[0])
 
    //     fetch('http://localhost:4500/uploadfile', {
    //         method: 'POST',
    //         body: formData
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setImageFile({fileName: data.originalname})
    //     })
    // }

    const handleAdd = (data) => {
        const formData = new FormData(data.target)
        const productDetails = {}
        formData.append('image', selectedFile)
        data.preventDefault()

        for (let entry of formData.entries()) {
            productDetails[entry[0]] = entry[1]
        }
        productDetails['img'] = selectedFile.name

        console.log(productDetails);
        fetch('http://localhost:4400/addBuyerServices', {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            body: JSON.stringify(productDetails)
        })
        .then(res => {
            if (res.ok) {
                alert('Product Added.')
                return Promise.resolve('Product Added.');
            } else {
                alert('An error occurred.')
                return Promise.reject('An error occurred.');
            }
            // res.json()
        })
        .then(data => {
            setProductId(data._id)
            console.log(data._id);
        })
    }

    

    
    return (
        <div className='editPopup'>
            <div className='editPopup_inner '>
                <div className="container customPopupDiv">

                    <div className="text-right">
                        <button className="customCrossBtn" onClick={props.closePopup}>
                            <FontAwesomeIcon icon={faWindowClose} />
                            {/* X */}
                        </button>
                    </div>


                    <h5 className="text-center projectMainColor projectBoldText">Add Product</h5>
                    <br />

                    {/* form data */}
                    <form method="post" id="input-wrapper">
                    <div class="d-flex justify-content-between" >
                        <div className="form-group" style={{ width: '45%' }}>
                            {/* <form method="POST" action="http://localhost:4400/uploadImage" enctype="multipart/form-data"> */}
                            {/* <div> */}
                                <input
                                    type="file"
                                    className="form-control"
                                    name="img"
                                    id="img"
                                    placeholder="image"
                                    onChange={onChangeHandler}
                                />
                            {/* </form> */}
                            {/* </div> */}
                            {/* <button className="form-control" onClick={onClickUpload}>Upload</button> */}
                        </div>
                        <div className="form-group" style={{ width: '45%' }}>
                                {/* <input type="submit" value="Upload" className="form-control" onClick={onClickUpload} /> */}
                            {/* <img src="" alt=""/> */}
                        </div>
                    </div>
                    <div class="d-flex justify-content-between" >
                    <div className="form-group" style={{ width: '45%' }}>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                id="title"
                                placeholder="title"
                                // defaultValue={props.title}
                                // readonly="readonly"
                            />
                        </div>
                        <div className="form-group" style={{ width: '45%' }}>
                            <input
                                type="text"
                                className="form-control"
                                name="description"
                                id="description"
                                placeholder="description"
                                // defaultValue={props.description}
                                // readonly="readonly"
                            />
                        </div>
                    </div>
                    <div class="d-flex justify-content-between" >
                        <div className="form-group" style={{ width: '45%' }}>
                            <input
                                type="text"
                                className="form-control center"
                                name="price"
                                id="price"
                                placeholder="price"
                                // defaultValue={props.price}
                                // readonly="readonly"
                            />
                        </div>
                        <div className="form-group" style={{ width: '45%' }}>
                            <input
                                type="text"
                                className="form-control"
                                name="stock"
                                id="stock"
                                placeholder="stock"
                                // defaultValue={props.stock}
                                // readonly="readonly"
                            />
                        </div>
                        {/* <div className="form-group" style={{ width: '45%' }}>
                            <input
                                type="text"
                                className="form-control center"
                                name="icon"
                                id="icon"
                                readonly="readonly"
                            />
                        </div> */}
                    </div>
                    
                    {/* show data end */}
                    

                    {/* <form className="text-center" onSubmit={handleSubmit} id="input-wrapper">
                        <div className="text-right">
                            <button type="submit" className="popupSendBtn">Send</button>
                        </div>
                    </form> */}
                    <div>
                        <div className="text-center">
                            <button type="submit" className="addPopupBtn" onClick={handleAdd}>Submit</button>
                        </div>
                    </div>
                    </form>
                    <br />
                    {
                        productId && alert(`Thank you for submit your appointment. Your appointment id is: ${productId}`)
                    }
                    {/* {
                        productId && <div>
                            <h3>Thank you for submit your appointment</h3>
                            <p>Your appointment id is: {productId}</p>
                        </div>
                    } */}


                    {/* <br/>
                    <br/>
                    <br/> */}
                </div>
            </div>
        </div>
    );
};

export default AddPopup;