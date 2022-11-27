import BookAppointment from './components/molecules/appointment';
import Modal from './components/molecules/modal';

function App() {
  return (
    <div>
      Hello World
      <Modal show={true}>
        <BookAppointment />
      </Modal>
    </div>
  );
}

export default App;
