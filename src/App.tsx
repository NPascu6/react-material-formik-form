import { DefaultForm } from "./DefaultForm"


const App = () => {
  return (
    <div style={{ display: 'center' }}>
      <DefaultForm onSubmit={({ firstName, lastName, email, password }) => {
        console.log(firstName, lastName, email, password)
      }} />
    </div>
  );
}

export default App;
