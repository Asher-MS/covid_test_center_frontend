import React,{useState,useEffect} from "react"
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { Page,Button,Checkbox,Spacer,Container,Col,Text,Grid,Card,Row } from '@geist-ui/react'
import ReactHTMLDatalist from "react-html-datalist";




export default (props)=>{
    // let map_url='https://www.google.co.in/maps/@'+props.latitude+','+props.longitude+"15z";
    let map_url="https://maps.google.com/?q="+props.latitude+","+props.longitude;
    return(
        <Grid xs={8}>
            <Card shadow>
                <h3>{props.title}</h3>
                <p>Address : {props.address}</p>
                <p>District : {props.district}</p>
                <p>Test Type : {props.test_type}</p>
                <p>Lab Type : {props.lab_type}</p>
                <p>Latitude : {props.latitude}</p>
                <p>Longitude : {props.longitude}</p>
                <Row justify="center"><a href={map_url}><Button type='secondary'>Location</Button></a></Row>
                
            </Card>
        </Grid>
    )
}