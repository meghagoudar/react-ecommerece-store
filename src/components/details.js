import React from 'react'
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './button';

 class Details extends React.Component {
    render() {
        return (
           <ProductConsumer>
               {value => {
                   const {id,company,img,info,price,title,incart}=value.detailProduct;
                   return(
                       <div className="container py-5">
                           {/* title */}
                           <div className="row">
                               <div className="col-10 mx-auto col-md-6 text-center text-slanted text-blue my-5">
                                <img src={img} className="img-fluid" alt="product" />                                   
                               </div>
                               {/* product text  */}
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                   <h2>model:{title}</h2>
                                   <h4 className="text-title text-uppercase  text-muted mt-3 mb-2">made by :
                                    <span className="text-uppercase">{company}</span></h4>
                                    <h4 className="text-blue"><strong>price:<span>$</span>{price}</strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        some info about product :
                                    </p>
                                    <p className="text-muted lead ">{info }</p>
                                    {/* buttons */}
                                    <div>
                                        <Link to="/"><ButtonContainer>back to products</ButtonContainer></Link>
                                        <ButtonContainer 
                                        cart
                                        disabled ={incart?true:false}
                                         onClick={()=>{
                                             value.addToCart(id);
                                             value.openModal(id);

                                             }}>
                                             {incart?'incart ': 'add to cart'}
                                             </ButtonContainer>
                                    </div>  
                               </div>
                           </div>
                       </div>
                   )
               }}
           </ProductConsumer>
        )
    }
}
export default Details;
