import {FaBars} from 'react-icons/fa';
const Sidebar = ({children}) => {
    return (
        <div className="container">
            <div className="sidebar">
                <div className="top_section">
                    <h1>Logo</h1>
                    <div className="bars">
                        <FaBars />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Sidebar;