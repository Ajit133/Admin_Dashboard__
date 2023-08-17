import { singleProduct } from '../../dummy_data';
import './product.scss';
import Single from '../../components/Single/Single';

const Porduct = () => {
    return (
        <div className='product'>
            <Single {...singleProduct} />
        </div>
    );
}; 

export default Porduct;