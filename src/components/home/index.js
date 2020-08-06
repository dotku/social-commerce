import React from "react";
import Providers from "../vendors";
import { Typography, Divider } from "@material-ui/core";

function Home() {
  const body = `proudct:%0D%0Anumber in need:%0D%0Atargeted price:%0D%0Atargeted location:%0D%0A`;
  return (
    <div className="App">
      <div style={{ padding: "20px" }}>
        <Typography variant="h6">About</Typography>
        <p>We provide varied PPE products and support global needs.</p>
        <Divider />
        <Typography variant="h6">Providers</Typography>
        <Providers />
        <Divider />
        <Typography variant="h6">Contact</Typography>
        <p>Please contact for more detail:</p>
        <ul>
          <li>
            Email:{" "}
            <a
              href={`mailto:jay.lin@ppewholesale.us?subject=purchase query&body=${body}`}
            >
              jay.lin@ppewholesale.us
            </a>
          </li>
          <li>wechat: weijingjaylin</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;