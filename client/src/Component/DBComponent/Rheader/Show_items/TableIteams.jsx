import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { setproducts } from "../../../../redux-toolkit/reducer/allproduct";
import { deleteproducs, getAllproducs } from "../../../../api";
import { motion } from "framer-motion";
import { buttonclick } from "../../../../Animation";
import { AiTwotoneEdit, AiTwotoneDelete } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
const TableIteams = () => {
  const ExpandedComponent = (prince) => (
    <pre>{JSON.stringify(prince, null, 2)}</pre>
  );
  const datapro = useSelector((state) => state.datapro);
  const dispatch = useDispatch();
  const prince = datapro.products;
  const columns = [
    {
      name: "Id",
      selector: (row) => row.Product_id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => row.Product_name,
      sortable: true,
    },
    {
      name: "price",
      selector: (row) => row.Product_price,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => (
        <div className="border-2 border-sky-200 rounded-full p-1">
          <img
            width={50}
            height={50}
            src={row.Product_Allimage}
            className="w-[50px] h-[50px] rounded-full"
          />
        </div>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div className="gap-2 flex">
          <motion.button
            {...buttonclick}
            onClick={() => alert(row.button)}
            className="px-3 py-2 bg-blue-500 rounded-md"
          >
            <AiTwotoneEdit />
          </motion.button>
          <motion.button
            {...buttonclick}
            onClick={() =>
              deleteproducs(row.Product_id).then((res) => {
                getAllproducs()
                  .then((data) => {
                    dispatch(setproducts(data));
                  })
                  .then(toast.warning("data deleted"));
              })
            }
            className="px-5 py-2 bg-red-500 rounded-md"
          >
            <AiTwotoneDelete />
          </motion.button>
        </div>
      ),
    },
  ];
  const [record, setrecord] = useState([]);
  const handelfilter = (e) => {
    if (datapro.products) {
      const surchdata = prince.filter((row) => {
        return row.Product_name.toLowerCase().includes(
          e.target.value.toLowerCase()
        );
      });
      setrecord(surchdata);
    }
  };
  useEffect(() => {
    if (datapro.products) {
      getAllproducs().then((data) => {
        dispatch(setproducts(data));
      });
    }
  }, []);
  useEffect(() => {
    setrecord(prince);
  }, [prince]);
  return (
    <div className="mt-10 w-auto h-auto overflow-hidden">
      <div className="flex items-end justify-end p-5 gap-2">
        <label htmlFor="surch" className="font-thin">
          search
        </label>
        :
        <input
          type="text"
          onChange={handelfilter}
          className="border border-blue-400 rounded-md text-center"
          placeholder="Enter your Name"
        />
      </div>

      <DataTable
        columns={columns}
        data={record}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        selectableRows
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        highlightOnHover
        pointerOnHover
      />
      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default TableIteams;
