import Circle from './Circle';

function CircleWrapper() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <Circle />
    </div>
  );
}

export default CircleWrapper;
