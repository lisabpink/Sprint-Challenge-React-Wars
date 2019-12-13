  import React from 'react';
  import { Card,  CardText, 
    CardTitle
  } from 'reactstrap';
  
  const StarCard = props => {
  
       console.log(props.character)
       console.log(props.howTall)
       console.log(props.weight)
  
      return(
           <div key = {props.character}>
  

  


             <Card body>
             <CardTitle>{props.character}</CardTitle>
             <CardText> Height: {props.howTall}, Weight: {props.weight}</CardText>           
              </Card>
          
             </div>
      )
  }
  export default StarCard; 