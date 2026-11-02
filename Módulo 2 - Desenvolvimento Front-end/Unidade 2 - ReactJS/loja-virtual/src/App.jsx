import { ProductList } from "./ProductList";

function App() {
  return (
    <div className="min-h-screen surface-ground">
      <header className="surface-card shadow-1 py-3 px-4 mb-4">
        <div className="max-w-screen-xl mx-auto flex align-items-center justify-content-between">
          <div className="flex align-items-center gap-2">
            <i className="pi pi-shopping-bag text-2xl text-primary"></i>
            <h1 className="text-2xl font-bold m-0 text-900">FakeStore React</h1>
          </div>
          <span className="text-sm text-600">
            PrimeReact + PrimeFlex + Axios
          </span>
        </div>
      </header>

      <main className="px-3 pb-6">
        <ProductList />
      </main>
    </div>
  );
}

export default App;
