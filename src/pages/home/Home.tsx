import Chartbox from '../../components/ChartBox/chartbox';
import Topbox from '../../components/TopBox/Topbox';
import BarChartBox from '../../components/barChartBox/BarChartBox';
import BigChartBox from '../../components/bigChartBox/bigChartBox';
import PieChartBox from '../../components/pieCartBox/pieChartBox';
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../dummy_data';
import './Home.scss'
function Home() {
    
    return (
        <div className='home'>
           <div className='box box1'><Topbox/></div>
           <div className='box box2'><Chartbox {...chartBoxUser} /></div>
           <div className='box box3'><Chartbox {...chartBoxProduct}/></div>
           <div className='box box4'><PieChartBox /></div>
           <div className='box box5'><Chartbox {...chartBoxConversion}/></div>
           <div className='box box6'><Chartbox {...chartBoxRevenue}/></div>
           <div className='box box7'><BigChartBox /></div>
           <div className='box box8'><BarChartBox {...barChartBoxVisit} /></div>
           <div className='box box9'><BarChartBox {...barChartBoxRevenue}/></div>
        </div>
    );
}

export default Home;