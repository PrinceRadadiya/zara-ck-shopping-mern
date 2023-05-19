import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllproducs } from "../../../api";
import { setproducts } from "../../../redux-toolkit/reducer/allproduct";
import DataTable from "react-data-table-component";

const Users = () => {
  const user = useSelector((state) => state.user);
  const data = [user]
  console.log(data)
  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <div className="border-2 border-sky-200 rounded-full p-1">
          <img
            width={50}
            height={50}
            src={row?.user.picture}
            className="w-[50px] h-[50px] rounded-full"
          />
        </div>
      ),
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row?.user.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row?.user.email,
      sortable: true,
    },
  ];
  const dispatch = useDispatch();
  const [record, setrecord] = useState(data);
  console.log(record);
  useEffect(() => {
    if (user) {
      getAllproducs().then((data) => {
        dispatch(setproducts({ data }));
      });
    }
  }, []);

  console.log(record);
  return (
    <div className="mt-10 w-auto h-auto overflow-hidden">
      <div className="flex items-end justify-end p-5 gap-2">
        <label htmlFor="surch" className="font-thin">
          search
        </label>
        :
        {/* <input
          type="text"
          onChange={handelfilter}
          className="border border-blue-400 rounded-md text-center"
          placeholder="Enter your Name"
        /> */}
      </div>

      <DataTable
        columns={columns}
        data={record}
        // pagination
        // fixedHeader
        // fixedHeaderScrollHeight="450px"
        // selectableRows
        // expandableRows
        // expandableRowsComponent={ExpandedComponent}
        // highlightOnHover
        // pointerOnHover
      />
      <div></div>
    </div>
  );
};

export default Users;
