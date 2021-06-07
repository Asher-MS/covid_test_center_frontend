import React,{useState,useEffect} from "react"
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { Page,Button,Checkbox,Spacer,Container,Col,Text,Grid,Card,Row } from '@geist-ui/react'
import ReactHTMLDatalist from "react-html-datalist";




export default (props)=>{
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
                <Row justify="center"></Row>
        
            </Card>
        </Grid>
    )
}