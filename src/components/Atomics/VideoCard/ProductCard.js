 


const ProductCard = (props) => {
 
     
   const { id,store, images,name,regular_price,sale_price,permalink}=props.product



 
 

  return (
     
    <>
   

       <div className="card-category-items mt-0 mb-0  " >
     <a href={permalink}>
    <div style={{backgroundColor:"#ede4e4",margin:'0 3px', borderRadius:'10px'}}>
 
      <div >
 
       <img className="img-fluid  " style={{background:'none',marginTop:'5px',borderRadius:'25px'}} src={images[0]==null? 'img/product.png':images[0].src} alt="" />
       </div>
       <div   className="p-3">
 
 
       
       <h5 style={{fontSize:'12px'}}>{
     sale_price==0?<span>{ `৳ ${regular_price}`}  </span>:<span> <strong> { `৳ ${sale_price} `} </strong> <strong style={{textDecoration:'line-through'}}> { `৳ ${regular_price}`}</strong> </span>    
     
   }</h5>
        
       </div>
   
      
      </div> 
      </a>
   </div>
    
 
    
        
    
          
         
    </>
  );
};




export default ProductCard;
