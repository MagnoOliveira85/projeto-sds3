import DataTable from "componets/datatable";
import Footer from "componets/footer";
import NavBar from "componets/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Mundo!</h1>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
