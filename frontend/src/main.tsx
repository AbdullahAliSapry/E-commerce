import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
import AppRouter from "@routes/AppRouter";
import { Provider } from "react-redux";
import { store } from "@store/Store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store }>
    <AppRouter />
  </Provider>
);
