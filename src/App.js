import "./styles.css";
import TradingViewWidget from "react-tradingview-widget";
import { useState, useEffect } from "react";

export default function App() {
  const [gridType, setGridType] = useState({ cols: 1, rows: 1 });
  const [ticker, setTicker] = useState("AAPL");
  const setupWidgets = function (cols, rows, symbol) {
    let widgetW = window.innerWidth / parseInt(cols) + "px";
    let widgetH = window.innerHeight / parseInt(rows) + "px";
    console.log(widgetW, widgetH);
    return [...Array(cols * rows)].map((e) => (
      <TradingViewWidget
        symbol={symbol}
        width={widgetW}
        height={widgetH}
        hide_side_toolbar={false}
      />
    ));
  };
  const grid = [
    { cols: 1, rows: 1 },
    { cols: 2, rows: 1 },
    { cols: 2, rows: 2 },
    { cols: 3, rows: 1 },
    { cols: 3, rows: 2 },
    { cols: 3, rows: 3 },
    { cols: 4, rows: 1 },
    { cols: 4, rows: 2 }
  ];
  var to = null;
  function handleChange(e) {
    if (to) {
      console.log("clearTimeout");
      clearTimeout(to);
    }

    to = setTimeout(() => setTicker(e.target.value), 2000);
    console.log("timer create");
  }
  return (
    <div className="App">
      <div className="widgetContainer">
        {setupWidgets(gridType.cols, gridType.rows, ticker)}
      </div>
    </div>
  );
}
