import "./Slide.css";

 

export default function Slide(props) {
 

	const {name,alt,image,url}=props.categories
	return (
		<>
			<div className="item">
				<div className="category-item">
				
						<img
							className="img-fluid custom-slick-img"
						
							src={image==null ? 'img/category.png':image}
							alt={alt}
							
					 />
						<h6 style={{fontWeight:'700'}}>
							
							<a href={url} style={{color:"#fcb800"}}> {name} </a>
							  
						</h6>
					
				 
				</div>
			</div>
		</>
	);
}
