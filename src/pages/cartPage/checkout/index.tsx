// css
import classes from '../CartLayout.module.scss';
import BillingDetail from './BillingDetail';

function Checkout() {
    return (
        <div className={classes['cart-layout']}>
            <BillingDetail className={classes['cart']} />
            <div className={classes['total']} />
            <div className={classes['rest']} />
        </div>
    );
}

export default Checkout;