import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect} from "react"
import { GeistProvider, CssBaseline } from '@geist-ui/react'
import { Page,Button,Checkbox,Spacer,Container,Col,Text,Grid,Row} from '@geist-ui/react'
import ReactHTMLDatalist from "react-html-datalist";
import Center from './components/Center'
import axios from 'axios';
function App() {
  let [themeType,setThemeType]=useState("light");
  const themeChanger=function(){
    setThemeType(themeType=="light"?"dark":"light");
    console.log(themeType);
  }

 let [curr_district,setDistrict]=useState("");

 let districtChange=function(e){
   setDistrict(e.target.text);
 }

 let showCenters=function(){
   console.log(curr_district);
   if(curr_district==""){
     allCenters();
   }else{
     districtCenters(curr_district);
   }
 }

 let [centers,setCenters]=useState([{"title":"Sample"}]);

let allCenters=function(){
  axios.get("https://covidtestcenterapi.herokuapp.com/api/all").then(res=>{setCenters(res.data);})
}
let districtCenters=function(district){
  axios.get("https://covidtestcenterapi.herokuapp.com/api/district?district="+district).then(res=>{setCenters(res.data)})
}
 useEffect(()=>{
  allCenters();

 },[]);


  return (
    <GeistProvider themeType={themeType}>
    <CssBaseline /> 
    <Page size='large'>
    <Text h1>Covid Test Center Locator</Text>
    <Container>
    <Col style={{ background: '#F9F9F9 ' }} />
    <Spacer x={5}/>
    <Checkbox checked={false} onClick={themeChanger}>Dark Mode</Checkbox>
    </Container> 
    <Spacer x={30}></Spacer>
    
    <ReactHTMLDatalist
            name={"district"}
            
            onChange={districtChange}
            classNames={"classone classtwo"}
            options={[
              { text: "Thiruvananthapuram", value: "" },
              { text: "Kollam", value: "" },
              { text: "Pathanamthitta", value: "" },
              { text: "Kottayam", value: "" },
              {text:"Alappuzha",value:""},
              {text:"Ernakulam",value:""},
              {text:"Idukki",value:""},
              {text:"Kannur",value:""},
              {text:"Kasargod",value:""},
              {text:"Wayanad",value:""},
              {text:"Kozhikode",value:""},
              {text:"Malappuram",value:""},
              {text:"Palakkad",value:""},
              {text:"Thrissur",value:""},

            ]}
      />
      <Spacer x={30}/>
      <Button onClick={showCenters}>Click me</Button>
      <Spacer x={10}></Spacer>
      <Grid.Container gap={2} justify="center">
            {centers?.map(function(center){return <Center title={center.name} address={center.address}
            district={center.district} test_type={center.test_type} lab_type={center.lab_type} latitude={center.latitude} longitude={center.longitude}
            
            ></Center>})}

      </Grid.Container>
    
     </Page>
    </GeistProvider>
  );
}

export default App;
