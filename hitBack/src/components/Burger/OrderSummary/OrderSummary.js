import React, { Component } from 'react';
import Button from '../../UI/Button/Button';
import Auxiliar from '../../../hoc/Auxiliar';

class OrderSummary extends Component{

    // no es necesario que sea una clase puede ser un funcinal component

    componentWillUpdate(){
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
       }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}> 
                        {igKey}
                    </span>: {this.props.ingredients[igKey]} 
                 </li>
        });

        return (
            <Auxiliar>
                <h3> Your order </h3>
                <p> A delicius burger with the following ingredient: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p> <strong> Total Price: {this.props.price.toFixed(2)} </strong></p>
                <p> Continuo to checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>
                    CANCEL</Button>

                <Button btnType="Success" clicked={this.props.purchaseContinue}>
                    CONTINUE</Button>
            </Auxiliar>

        );
    }

}

export default OrderSummary;