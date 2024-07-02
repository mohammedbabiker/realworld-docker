import axios from "axios";

function App() {
  const get = () => {
    // console.log("Hello its work");
    axios("/api/testapi").then((response) => {
      console.log("response", response);
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-56 ">
        <button onClick={get} className="bg-slate-400 px-5 py-3">
          GET FROM DOCKER
        </button>
      </h1>
    </div>
  );
}

export default App;
