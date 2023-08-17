import { singleUser } from '../../dummy_data';
import './user.scss';
import Single from '../../components/Single/Single';

const User = () => {
    return (
        <div className='user'>
            <Single {...singleUser}  />
        </div>
    );
};

export default User;