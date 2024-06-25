import BasicChart from './BasicChart';
import buildings from '../../data/buildings.js';

function BasicChartWrapper() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <BasicChart data={buildings} />
    </div>
  );
}

export default BasicChartWrapper;
