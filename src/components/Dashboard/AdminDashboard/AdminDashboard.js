import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
// import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
// import {Link} from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, Logout } from './listItems';
import './AdminDashboard.css'
// import Home from '../../Home/Home';
import RecentAppointments from './RecentAppointments';
// import TodayIcon from '@material-ui/icons/Today';
// import ProductCard from '../../Products/ProductCard/ProductCard';
import pychons from '../../../img/BuyerServices/Morder pychons.png'
import money from '../../../img/BuyerServices/money.svg'
import product from '../../../img/BuyerServices/product.svg'
import buy from '../../../img/BuyerServices/buy.svg'
import AddPopup from '../AddPopup/AddPopup';

// const Copyright = () => {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="https://material-ui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // display: '',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        // paddingBottom: theme.spacing(4),
        backgroundColor: '#f4fdfb',
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        borderRadius: '12px',
        // backgroundColor: '#f1536e',
    },
    fixedHeight: {
        height: 550,
    },
}));

const AdminDashboard = () => {
    const dataPass = {
        img: pychons,
        title: "Product Name",
        description: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
        price: "$120",
        stock: "60 Available"
    }

    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);


    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4400/getAppointments')
            .then(res => res.json())
            .then(data => {
                setAppointments(data)
            })
    }, [])
    console.log(appointments)
    // const rows1 = [];
    // let countPending = 0
    // let countTodaysAppointments = 0
    // let totalAppointments = 0
    // let countTotalPatients = 0
    // const dateFromId0 = String(new Date()).split(' ')
    // const dateFromId = `${dateFromId0[1]} ${dateFromId0[2]}, ${dateFromId0[3]}   (${dateFromId0[5]})`
    // for (let i = 0; i < appointments.length; i++) {
    //     const e = appointments[i];
    //     if (e.action === 'Pending'){
    //         countPending += 1
    //     }
    //     if (e.action === 'Approved'){
    //         countTotalPatients += 1
    //     }
    //     if (e.date === dateFromId) {
    //         countTodaysAppointments += 1
    //     }
    //     totalAppointments += 1
        
    //     // const row1 = createData(e.date, e.time, e.name, e.phone, 'View', e.action)
    //     // rows1.push(row1)
    // }


    const [showPopup, setShowPopup] = useState(false)

    const togglePopup = () => {
        setShowPopup(!showPopup)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            
                <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar} style={{backgroundColor: '#3a3a3a'}}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                            Dashboard
                        </Typography>
                        {/* <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton> */}
                    </Toolbar>
                </AppBar>
            <div className="mainSidebar2">
                {/* <br/><br/><br/> */}
                
                <Drawer
                    variant="permanent"

                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >
                <div className="mainSidebar">
                    <div className={classes.toolbarIcon}>
                        <IconButton onClick={handleDrawerClose}>
                                <MenuIcon />
                        </IconButton>
                    </div>
                     {/* <Divider /> */}
                    <List>{mainListItems}</List>
                        <div style={{ paddingTop: '45vh' }}>
                            {/* <Link to="/" style={{textDecoration:'none'}}> */}
                                <List>{Logout}</List>
                            {/* </Link> */}
                        </div>
                </div>
                </Drawer>
            </div>
            
            <main className={classes.content} style={{backgroundColor: '#f4fdfb'}}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                <Grid item xs={12} md={12} lg={12} className="position-relative">
                    <section className="courses my-5" style={{ margin: 0, padding: 0}}>
                        <div className="container">
                            {/* <h1 className="text-center text-magenda">Demo</h1> */}
                            {/* <div className="row my-5" > */}
                                
                                <Grid item xs={11} md={11} lg={11}>
                                    <Paper className={fixedHeightPaper}>
                                        <div className="d-flex bd-highlight mb-3 justify-content-between">
                                            <div className="mr-auto p-4 bd-highlight projectColor projectBoldText">
                                                <h3>Table Name</h3>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <button id="addProductBtn"
                                                    onClick={()=>{
                                                        togglePopup()
                                                    }}
                                                >Add New</button>
                                            </div>
                                        </div>
                                        <RecentAppointments/>
                                    </Paper>
                                    {
                                        showPopup ?
                                            <AddPopup closePopup={togglePopup.bind()}/>
                                        : null
                                    }
                                </Grid>
<br/>
                                <Grid item xs={11} md={11} lg={11} >
                                    {/* <Paper className={fixedHeightPaper}> */}
                                    <div className="col-md-4 mb-3">
                                    <div className="single-course" >
                                        <div className="card">
                                            <img src={dataPass.img} alt="" className="card-img-top"/>
                                            <div className="card-body">
                                                <h5 className="text-magenda">{dataPass.title}</h5>
                                                <p className="descriptionText">{dataPass.description}</p>
                                                <button className="btn btn-success btn-rounded btnAddToCart">
                                                    <img src={buy} alt=""/> Add To Cart</button>
                                                <div className="course-info d-flex justify-content-between mt-3">
                                                    <p>
                                                        <img src={money} alt=""/> {dataPass.price}
                                                    </p>
                                                    <p>
                                                        <img src={product} alt=""/> {dataPass.stock}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </Grid>
                        </div>
                    </section>
                </Grid>
                
                    {/* <Box pt={4}>
                        <Copyright />
                    </Box> */}
                </Container>
            </main>
        </div>
    );
};

export default AdminDashboard;