import React from "react";

const Table: React.FC<Props> = ({ thead, tdata }) => {
  return (
    <div
      style={{
        height: "30vh",
        width: "50vw",
        border: "1px solid black",
        margin: "auto",
      }}
    >
      <table style={{ width: "90%", margin: "10px auto", height: "30vh" }}>
        <thead>
          <tr>
            {thead.map((head) => (
              <td>{head}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {tdata.map((data) => (
            <tr key={data.id}>
              {data.items.map((item) => (
                <td>{item}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;

type bodyData = {
  id: string;
  items: string[];
};
interface Props {
  thead: string[];
  tdata: bodyData[];
}
