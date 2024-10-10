import "./App.css";
import Product from "./components/Product";
import ProductList from "./components/ProductList";

function App() {
  return (
    <main className="mx-auto mt-3 px-2 sm:w-1/2">
      <div className="flex items-center justify-around gap-y-4 max-[400px]:flex-col max-[400px]:items-start">
        <ProductList />
        <Product />
      </div>
    </main>
  );
}

export default App;
