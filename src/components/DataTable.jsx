/* eslint-disable react/prop-types */
import InfiniteScroll from "react-infinite-scroll-component";
import "./DataTable.css";

const DataTable = ({ data, fetchData, hasMore }) => {
  return (
    <div id="scrollableDiv" className="data-table-container">
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4 className="data-table--loading">Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <table className="data-table">
          <thead className="data-table__header">
            <tr>
              <th className="data-table__cell">Index</th>
              <th className="data-table__cell">Identifier</th>
              <th className="data-table__cell">Name</th>
              <th className="data-table__cell">Address</th>
              <th className="data-table__cell">Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((record, index) => (
              <tr key={index} className="data-table__row">
                <td className="data-table__cell">{record.index}</td>
                <td className="data-table__cell">{record.identifier}</td>
                <td className="data-table__cell">{record.name}</td>
                <td className="data-table__cell">{record.address}</td>
                <td className="data-table__cell">{record.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </InfiniteScroll>
    </div>
  );
};

export default DataTable;
