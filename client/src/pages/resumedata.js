import React from 'react';
import './resumedata.css';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Axios from 'axios';

function Resumed() {


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id0 = searchParams.get('id');
    const id1 = id0;
    
    const [divs, setDivs] = useState([]);
    const handleButtonClick = () => {
        const newDiv = <div key={divs.length} className="created-div">Created Div</div>;
        setDivs([...divs, newDiv]);
      };
    
    const login5 = () => {
        Axios.post('http://localhost:3001/log/', { id1: id1 }).then((response) => {
            console.log(response);
            const id = response.data[1].id;
            const user_id = response.data[1].user_id;
            const project1 = response.data[1].project1;
            const project2 = response.data[1].project2;
            const project3 = response.data[1].project3;
            const projectlinks1 = response.data[1].projectlinks1;
            const projectlinks2 = response.data[1].projectlinks2;
            const projectlinks3 = response.data[1].projectlinks3;
            const social_link1 = response.data[1].social_link1;
            const social_link2 = response.data[1].social_link2;
            const social_link3 = response.data[1].social_link3;
            const social_link4 = response.data[1].social_link4;
            const social_link5 = response.data[1].social_link5;
            const contact_address = response.data[1].contact_address;
            const contact_number = response.data[1].contact_number;
            const email = response.data[1].email;
            const software_tool1 = response.data[1].software_tool1;
            const software_tool2 = response.data[1].software_tool2;
            const software_tool3 = response.data[1].software_tool3;
            const software_tool4 = response.data[1].software_tool4;
            const software_tool5 = response.data[1].software_tool5;
            const software_tool6 = response.data[1].software_tool6;
            const software_tool7 = response.data[1].software_tool7;
            const software_tool8 = response.data[1].software_tool8;
            const software_tool9 = response.data[1].software_tool9;
            const software_tool10 = response.data[1].software_tool10;
            const skills1 = response.data[1].skills1;
            const skills2 = response.data[1].skills2;
            const skills3 = response.data[1].skills3;
            const skills4 = response.data[1].skills4;
            const skills5 = response.data[1].skills5;
            const languages1 = response.data[1].languages1;
            const languages2 = response.data[1].languages2;
            const languages3 = response.data[1].languages3;
            const languages4 = response.data[1].languages4;
            const languages5 = response.data[1].languages5;
            const education1 = response.data[1].education1;
            const education2 = response.data[1].education2;
            const education3 = response.data[1].education3;
            const education4 = response.data[1].education4;
            const education5 = response.data[1].education5;
            const education_year_start1 = response.data[1].education_year_start1;
            const education_year_start2 = response.data[1].education_year_start2;
            const education_year_start3 = response.data[1].education_year_start3;
            const education_year_start4 = response.data[1].education_year_start4;
            const education_year_start5 = response.data[1].education_year_start5;
            const education_year_end1 = response.data[1].education_year_end1;
            const education_year_end2 = response.data[1].education_year_end2;
            const education_year_end3 = response.data[1].education_year_end3;
            const education_year_end4 = response.data[1].education_year_end4;
            const education_year_end5 = response.data[1].education_year_end5;
            const college1 = response.data[1].college1;
            const college2 = response.data[1].college2;
            const college3 = response.data[1].college3;
            const college4 = response.data[1].college4;
            const college5 = response.data[1].college5;
            const area_of_interests = response.data[1].area_of_interests;
            const id11 = response.data[0].id;
            const user_id11 = response.data[0].user_id;
            const project11 = response.data[0].project1;
            const project12 = response.data[0].project2;
            const project13 = response.data[0].project3;
            const projectlinks11 = response.data[0].projectlinks1;
            const projectlinks12 = response.data[0].projectlinks2;
            const projectlinks13 = response.data[0].projectlinks3;
            const social_link11 = response.data[0].social_link1;
            const social_link12 = response.data[0].social_link2;
            const social_link13 = response.data[0].social_link3;
            const social_link14 = response.data[0].social_link4;
            const social_link15 = response.data[0].social_link5;
            const contact_address11 = response.data[0].contact_address;
            const contact_number11 = response.data[0].contact_number;
            const email11 = response.data[0].email;
            const software_tool11 = response.data[0].software_tool1;
            const software_tool12 = response.data[0].software_tool2;
            const software_tool13 = response.data[0].software_tool3;
            const software_tool14 = response.data[0].software_tool4;
            const software_tool15 = response.data[0].software_tool5;
            const software_tool16 = response.data[0].software_tool6;
            const software_tool17 = response.data[0].software_tool7;
            const software_tool18 = response.data[0].software_tool8;
            const software_tool19 = response.data[0].software_tool9;
            const software_tool20 = response.data[0].software_tool10;
            const skills11 = response.data[0].skills1;
            const skills12 = response.data[0].skills2;
            const skills13 = response.data[0].skills3;
            const skills14 = response.data[0].skills4;
            const skills15 = response.data[0].skills5;
            const languages11 = response.data[0].languages1;
            const languages12 = response.data[0].languages2;
            const languages13 = response.data[0].languages3;
            const languages14 = response.data[0].languages4;
            const languages15 = response.data[0].languages5;
            const education11 = response.data[0].education1;
            const education12 = response.data[0].education2;
            const education13 = response.data[0].education3;
            const education14 = response.data[0].education4;
            const education15 = response.data[0].education5;
            const education_year_start11 = response.data[0].education_year_start1;
            const education_year_start12 = response.data[0].education_year_start2;
            const education_year_start13 = response.data[0].education_year_start3;
            const education_year_start14 = response.data[0].education_year_start4;
            const education_year_start15 = response.data[0].education_year_start5;
            const education_year_end11 = response.data[0].education_year_end1;
            const education_year_end12 = response.data[0].education_year_end2;
            const education_year_end13 = response.data[0].education_year_end3;
            const education_year_end14 = response.data[0].education_year_end4;
            const education_year_end15 = response.data[0].education_year_end5;
            const college11 = response.data[0].college1;
            const college12 = response.data[0].college2;
            const college13 = response.data[0].college3;
            const college15 = response.data[1].college5;
            const area_of_interests1 = response.data[1].area_of_interests;


        });
        

    };


    if (id0 === "0") {
        return (
            <>
                <br /><br /><br />
            </>
        )
    }
    else {
        return (
            <>
                <br /><br /><br />
                <div>
                    <h1>Click the button to create a div</h1>
                    <button onClick={handleButtonClick}>Create Div</button>
                    {divs.map(div => div)}
                </div>

            </>
        )
    };
}
export default Resumed;