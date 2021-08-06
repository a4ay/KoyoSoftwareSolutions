import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import EditPopup from '../EditPopup/EditPopup'


const useStyles = makeStyles({
    table: {
        minWidth: 850,
    },
    tableHead: {
        backgroundColor: "#fff",
        position: "sticky",
        top: 0
    }
});

// function createData(_id, img, title, description, price, stock) {
//     return { _id, img, title, description, price, stock };
// }

//get data
// const rows = [];
// fetch('http://localhost:4400/getBuyerServices')
// .then(res => res.json())
// .then(data => {
//     // console.log(data.length)
//     // displayProducts(data)
//     for (let i = 0; i < data.length; i++) {
//         const e = data[i];
//         // console.log(e);
//         const row = createData(e._id, e.img, e.title, e.description, e.price, e.stock)
//         rows.push(row)
//     }  
// })

// const rows = [
//     createData('https://betanews.com/wp-content/uploads/2015/02/Container-software-box.jpg', 'Product Name', 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.', '$120', '60 Available'),
//     createData('https://www.orcaconfig.com/wp-content/uploads/2015/03/Orca-box-of-benefits-no-background.png', 'Product Name', 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.', '$120', '60 Available'),
//     createData('https://www.morgan.k12.ga.us/uploaded/PAL/images/mccss_it.png', 'Product Name', 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.', '$120', '60 Available'),
// ];


// if (rows.length === 0) { window.location = window.location}

const RecentAppointments = () => {
    const [popupData, setPopupData] = useState(null)
    // const [dataLoadSuccess, setDataLoadSuccess] = useState(null)
    
    // const componentDidMount = () => {
    //     fetch('https://backend-doctors-portal.herokuapp.com/getAppointments')
    //         .then(response => response.json())
    //         .then(data => setDataLoadSuccess({ dataLoadSuccess: data }));
    // }
    const classes = useStyles();
    let rowCount = 0;

    // const [appointments, setAppointments] = useState([]);
    // useEffect(() => {
    //     fetch('http://localhost:4400/getBuyerServices')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAppointments(data.data)
    //             // console.log(data.data)
    //         })
    // }, [])
    const rows1 = [];
    // for (let i = 0; i < appointments.length; i++) {
    //     const e = appointments[i];
    //     const row1 = createData(e._id, e.img, e.title, e.description, e.price, e.stock)
    //     rows1.push(row1)
    // }

    const [showPopup, setShowPopup] = useState(false)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead className={classes.tableHead}>
                    <TableRow>
                        <TableCell style={{ color: '#8b8888', fontWeight: 'bold'}} >Sr. No</TableCell>
                        <TableCell style={{color: '#8b8888', fontWeight: 'bold'}} align="center">Image</TableCell>
                        <TableCell style={{color: '#8b8888', fontWeight: 'bold'}} align="center">Title</TableCell>
                        <TableCell style={{color: '#8b8888', fontWeight: 'bold'}} align="center">Description</TableCell>
                        <TableCell style={{color: '#8b8888', fontWeight: 'bold'}} align="center">Price</TableCell>
                        <TableCell style={{color: '#8b8888', fontWeight: 'bold'}} align="center">Stock</TableCell>
                        <TableCell style={{color: '#8b8888', fontWeight: 'bold'}} align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {rows.length !== 0 ? selectedList = rows : selectedList = rows1} */}
                    {
                        
                        

                        rows1.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell style={{fontWeight: 'bold'}} component="th" scope="row">
                                {rowCount+=1}
                            </TableCell>
                            <TableCell style={{fontWeight: 'bold'}} align="center" className="productImg">
                                {/* <img src={row.img} alt="" style={{width: '50%'}} /> */}
                                {row.img}
                            </TableCell>
                            <TableCell style={{fontWeight: 'bold'}} align="center">{row.title}</TableCell>
                            <TableCell style={{fontWeight: 'bold'}} align="center">{row.description}</TableCell>
                            <TableCell style={{fontWeight: 'bold'}} align="center">{row.price}</TableCell>
                            <TableCell style={{fontWeight: 'bold'}} align="center">{row.stock}</TableCell>
                            {/* <TableCell style={{fontWeight: 'bold'}} align="center">
                                {   
                                    row.prescription === "View" ?
                                    <button className="getAppointmentBtn">{row.prescription}</button>
                                    :
                                    row.prescription
                                }
                            </TableCell> */}
                            <TableCell style={{fontWeight: 'bold'}} align="center">
                                {/* {
                                    row.action === "Pending" ?
                                        <button className="getAppointmentBtn" 
                                                onClick={()=>{
                                                    togglePopup()
                                                    setPopupData([row.date, row.time, row.name, row.contact])
                                                }}
                                            style={{ backgroundImage: 'linear-gradient(#3aa3f0, #3aa3f0)' }}
                                        >{row.action}</button>
                                    : (row.action === "Approved" ?
                                        <button className="getAppointmentBtn" 
                                                onClick={() => {
                                                    togglePopup()
                                                    setPopupData([row.date, row.time, row.name, row.contact])
                                                }}
                                            style={{ backgroundImage: 'linear-gradient(#0e9a6a, #0e9a6a)' }}
                                        >{row.action}</button>
                                    :
                                        <button className="getAppointmentBtn" 
                                                onClick={() => {
                                                    togglePopup()
                                                    setPopupData([row.date, row.time, row.name, row.contact])
                                                }}
                                            style={{ backgroundImage: 'linear-gradient(#f63e3e, #f63e3e)' }}
                                        >{row.action}</button>
                                    )
                                } */}
                                
                                <button className="editBtn" onClick={()=>{
                                        togglePopup()
                                        setPopupData([row._id, row.img, row.title, row.description, row.price, row.stock])
                                    }}
                                >
                                    <FontAwesomeIcon icon={faEdit} />
                                </button>
                                    
                            </TableCell>
                            
                        </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
            {
                showPopup ?
                    <EditPopup
                        _id={popupData[0]}
                        img={popupData[1]}
                        title={popupData[2]}
                        description={popupData[3]}
                        price={popupData[4]}
                        stock={popupData[5]}
                        closePopup={togglePopup.bind()}
                    />
                    : null
            }
        </TableContainer>

        
        
    );
};

export default RecentAppointments;


