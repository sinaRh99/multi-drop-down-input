import { Dropdown } from './components';

function App() {
  return (
    <div
      style={{
        border: '1px solid red',
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Dropdown placeholder="New interest" />
    </div>
  );
}

export default App;
