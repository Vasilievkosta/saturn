import { Provider } from "react-redux";

import { Router } from "@/router";
import { store } from "@/services/store";
import { Layout } from "./components/ui/layout/layout";

export function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Router />
      </Layout>
    </Provider>
  );
}
