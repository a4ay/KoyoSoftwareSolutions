import React from 'react';
import './EditPopup.css'
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


// const useStyles = makeStyles((theme) => ({
//     formControl: {
//         border: '1px solid gray',
//     },
// }));

const EditPopup = (props) => {
    // const [productId, setProductId] = useState(null)
    const productId = null;
    const [formData, updateFormData] = React.useState(props);
    // const classes = useStyles();
    // const [gender, setGender] = useState('');

    const handleChange = (event) => {
        updateFormData({
            ...formData,
      
            // Trimming any whitespace
            [event.target.name]: event.target.value.trim()
          });
    };



    const handleUpdate = (data) => {
        data.preventDefault()
        console.log(formData)
        fetch('http://localhost:4400/updateBuyerServices/'+props._id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (res.ok) {
                alert('Product Updated.')
                return Promise.resolve('Product Updated.');
            } else {
                alert('An error occurred.')
                return Promise.reject('An error occurred.');
            }
        })
        .then(res => console.log(res));
    }

    const handleDelete = (data) => {
        data.preventDefault()
        fetch('http://localhost:4400/deleteBuyerServices/'+props._id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if (res.ok) {
                alert('Product deleted.')
                return Promise.resolve('Product deleted.');
            } else {
                alert('An error occurred.')
                return Promise.reject('An error occurred.');
            }
        })
        .then(res => console.log(res));
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


                    <h5 className="text-center projectMainColor projectBoldText">Edit the action</h5>
                    <br />

                    {/* show data */}
                    <form id="input-wrapper" method="post">
                    <div class="d-flex justify-content-between" >
                        <div className="form-group" style={{ width: '45%' }}>
                            <input
                                type="text"
                                className="form-control"
                                name="img"
                                id="img"
                                // placeholder="image"
                                defaultValue={props.img}
                                onChange={handleChange}
                                // readonly="readonly"
                            />
                        </div>
                        <div className="form-group" style={{ width: '45%' }}>
                            <input
                                type="text"
                                className="form-control"
                                name="title"
                                id="title"
                                // placeholder="title"
                                defaultValue={props.title}
                                onChange={handleChange}
                                // readonly="readonly"
                            />
                        </div>
                    </div>
                    <div class="d-flex justify-content-between" >
                        <div className="form-group" style={{ width: '45%' }}>
                            <input
                                type="text"
                                className="form-control"
                                name="description"
                                id="description"
                                // placeholder="description"
                                defaultValue={props.description}
                                onChange={handleChange}
                                // readonly="readonly"
                            />
                        </div>
                        <div className="form-group" style={{ width: '45%' }}>
                            <input
                                type="text"
                                className="form-control center"
                                name="price"
                                id="price"
                                // placeholder="price"
                                defaultValue={props.price}
                                onChange={handleChange}
                                // readonly="readonly"
                            />
                        </div>
                    </div>
                    <div class="d-flex justify-content-between" >
                        <div className="form-group" style={{ width: '45%' }}>
                            <input
                                type="text"
                                className="form-control"
                                name="stock"
                                id="stock"
                                // placeholder="stock"
                                defaultValue={props.stock}
                                onChange={handleChange}
                                // readonly="readonly"
                            />
                        </div>
                        <div className="form-group" style={{ width: '45%' }}>
                            {/* <input
                                type="text"
                                className="form-control center"
                                name="icon"
                                id="icon"
                                // placeholder="icon"
                                // defaultValue={props.icon}
                                onChange={handleChange}
                                readonly="readonly"
                            /> */}
                        </div>
                    </div>
                    {/* show data end */}
                    


                    {/* <form className="text-center" onSubmit={handleSubmit} id="input-wrapper">
                        <div className="text-right">
                            <button type="submit" className="popupSendBtn">Send</button>
                        </div>
                    </form> */}
                    <div class="d-flex justify-content-between">
                        {/* <div className="text-right">
                            <button type="submit" className="editPopupPendingBtn" onClick={handleSubmit}>Pending</button>
                        </div> */}
                        <div className="text-right">
                            <button type="submit" className="editPopupApprovedBtn" onClick={handleUpdate}>Update</button>
                        </div>
                        <div className="text-right">
                            <button type="submit" className="editPopupCanceledBtn" onClick={handleDelete}>Delete</button>
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

export default EditPopup;