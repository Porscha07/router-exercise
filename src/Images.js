import React, { Component } from 'react';
import $ from 'jquery';



function Images(props){
	const localimages=[]
	props.imagesArray.map((image, index)=>{ 
		localimages.push(<img src={image}/>)
	})
	return(
		<div>
			{localimages}
		</div>
	)
}

export default Images;