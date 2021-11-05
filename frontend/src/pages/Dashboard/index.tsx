import BarChart from "componets/barchart";
import DataTable from "componets/datatable";
import DonutChart from "componets/donutchart";
import Footer from "componets/footer";
import NavBar from "componets/NavBar";

const Dashboard = () => {
    return (
        <>

            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de vendas</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-segundary">Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-segundary">Todas vendas</h5>
                        <DonutChart />
                    </div>
                </div>


                <div className="py-3">
                    <h2 className="text-primary">Todas vendas</h2>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>

    );
}

export default Dashboard;