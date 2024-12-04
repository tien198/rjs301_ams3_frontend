// css
import classes from '../CartLayout.module.scss';

function Checkout() {
    return (
        <div className={classes['cart-layout']}>
            <div className={classes['cart']} />
            <div className={classes['total']} />
            <div className={classes['rest']} />
        </div>
    );
}

export default Checkout;