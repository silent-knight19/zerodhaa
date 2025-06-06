import React from "react";

// ... existing code ...
import { positions } from "../data/data";
// ... existing code ...
const Positions = () => {
  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {positions.map((stock, index) => {
            const curValue = Number(stock.price) * Number(stock.qty);
            const isProfit = curValue - Number(stock.avg) * Number(stock.qty) >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{typeof stock.avg === 'number' ? stock.avg.toFixed(2) : 'N/A'}</td>
                <td>{typeof stock.price === 'number' ? stock.price.toFixed(2) : 'N/A'}</td>
                <td className={profClass}>
                  {!isNaN(curValue - Number(stock.avg) * Number(stock.qty)) ? (curValue - Number(stock.avg) * Number(stock.qty)).toFixed(2) : 'N/A'}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;