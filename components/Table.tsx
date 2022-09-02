import React from "react";

const Table: React.FC<Props> = ({ thead, tdata, className }) => {
  return (
    <div className={className}>
      <table className="content-table">
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

type bodyData = {
  id: string;
  items: string[];
};

interface Props {
  thead: string[];
  tdata: bodyData[];
  className: string;
}

export default Table;