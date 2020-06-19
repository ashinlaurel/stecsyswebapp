import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";

const TableData = () => {
  const SORT_OPTIONS = {
    NAME_ASC: { column: "name", direction: "asc" },
    NAME_DESC: { column: "name", direction: "desc" },
    DATE_ASC: { column: "time", direction: "desc" },
    DATE_DESC: { column: "time", direction: "asc" },
  };

  const [showModal, setShowModal] = useState(false);
  const [modaldata, setModalData] = useState([]);
  const [order, setOrder] = useState([]);
  const [sortBy, setSortBy] = useState("NAME_ASC");
  const [refresh, setRefresh] = useState(false);
  const [searchinp, setSearchInp] = useState("");
  const [searchpass, setSearchPass] = useState("");
  const todaydate = new Date();
  const [datesel, setDateSel] = useState(todaydate);
  const [datedrop, setDateDrop] = useState(false);

  // useEffect(() => {
  //   setSortBy("DATE_DESC");
  //   return () => {};
  // }, []);

  const Modalpop = (doc) => {
    setModalData(doc);
    setShowModal(true);
  };

  const onDateSelection = (date) => {
    setDateSel(date);
    setDateDrop(!datedrop);
  };

  const dateselectbutton = () => {
    setDateDrop(!datedrop);
  };

  const toggleStatus = (id, stat) => {
    let nextStat;
    if (stat === "active") nextStat = "completed";
    else nextStat = "active";
    axios
      .post("/togglestatus", { id: id, status: nextStat })
      .then(() => {
        setRefresh(!refresh);
        console.log("res");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    setSearchPass(searchinp);
  };

  const Sorter = () => {
    let neworder = order;
    let direction = SORT_OPTIONS[sortBy].direction;
    let column = SORT_OPTIONS[sortBy].column;
    if (direction === "asc") {
      neworder.sort((a, b) => {
        if (a[column] < b[column]) {
          return 1;
        }
        if (a[column] > b[column]) {
          return -1;
        }
        return 0;
      });
    } else if (direction === "desc") {
      neworder.sort((a, b) => {
        if (a[column] < b[column]) {
          return -1;
        }
        if (a[column] > b[column]) {
          return 1;
        }
        return 0;
      });
    }

    setOrder(neworder);
  };

  const onSortToggle = (e) => {
    setSortBy(e.currentTarget.value);
    Sorter();
    // console.log(neworder);
  };

  let sortdetails = {
    details: sortBy,
    date: datesel.toDateString(),
    search: searchpass,
  };
  useEffect(() => {
    // console.log("useeffect rerun");
    axios
      .post("/output", sortdetails)
      .then((res) => {
        const neworder = res.data;
        setOrder(neworder);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [refresh, datesel, searchpass]);

  return (
    <body class="antialiased font-sans ">
      <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
          <div className="flex justify-start items-center">
            <div>
              <h2 class="text-3xl leading-tight">Orders</h2>
            </div>
          </div>
          <div>{datesel.toDateString()}</div>
          <div class="my-2 flex sm:flex-row flex-col">
            <div class="flex flex-row mb-1 sm:mb-0">
              <div id="zdropdown" className="relative">
                <button
                  onClick={dateselectbutton}
                  className="h-full rounded-l border block appearance-none w-44 bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                >
                  {datesel.toDateString()}
                </button>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>

                {datedrop ? (
                  <div className=" w-64 absolute bg-white p-8 rounded-lg">
                    <Calendar onChange={onDateSelection} value={datesel} />
                  </div>
                ) : null}
              </div>

              <div class="relative">
                <select
                  class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                  value={sortBy}
                  onChange={onSortToggle}
                >
                  <option value="NAME_ASC">Name(A-Z)</option>
                  <option value="NAME_DESC">Name(Z-A)</option>
                  <option value="DATE_ASC">Date(Latest)</option>
                  <option value="DATE_DESC">Date(Oldest)</option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div class="block relative">
              <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                <svg
                  viewBox="0 0 24 24"
                  class="h-4 w-4 fill-current text-gray-500"
                >
                  <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
                </svg>
              </span>
              <form
                onSubmit={(e) => {
                  searchSubmit(e);
                }}
              >
                <input
                  value={searchinp}
                  onChange={(e) => setSearchInp(e.target.value)}
                  placeholder="Search"
                  class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </form>
            </div>
            <button
              className="ml-5 bg-blue-500 text-white hover:bg-blue-700 font-bold uppercase text-base px-4 py-1 rounded shadow-md hover:shadow-lg outline-none focus:outline-none "
              type="button"
              style={{ transition: "all .15s ease" }}
              onClick={() => {
                setRefresh(!refresh);
                setSearchPass(searchinp);
              }}
            >
              <i className="fa fa-refresh"></i> Refresh
            </button>
          </div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Created At
                    </th>

                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Phone
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Company
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Order
                    </th>
                    <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((doc) => (
                    <tr
                      key={doc.id}
                      onClick={(doc) => {
                        Modalpop(doc);
                      }}
                      className="hover:bg-white cursor-pointer "
                    >
                      <td className="border-b border-gray-300  px-4 py-2 text-sm">
                        <div>{doc.time}</div>
                        <div>{doc.createdat}</div>
                      </td>

                      <td className="border-b border-gray-300 px-4 py-2 ">
                        {doc.name}
                      </td>
                      <td className="border-b border-gray-300 px-4 py-2 ">
                        {doc.phone}
                      </td>
                      <td className="border-b border-gray-300 px-4 py-2 ">
                        {doc.email}
                      </td>
                      <td className="border-b border-gray-300 px-4 py-2 ">
                        {doc.companyname}
                      </td>
                      <td className="border-b border-gray-300 px-4 py-2 ">
                        {doc.orders}
                      </td>
                      <td className="border-b border-gray-300 px-4 py-2 ">
                        <span
                          onClick={() => toggleStatus(doc.id, doc.status)}
                          class="cursor-pointer relative inline-block px-3 py-1 font-semibold text-green-900  leading-tight"
                        >
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full "
                          ></span>
                          <span class="relative">{doc.status}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                <span class="text-xs xs:text-sm text-gray-900">
                  Showing Entries
                </span>
                <div class="inline-flex mt-2 xs:mt-0">
                  <button class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                    Prev
                  </button>
                  <button class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-3xl font-semibold">Order Details</h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div>
                    <div className="text-sm px-6 mt-2 text-gray-600">
                      Created At :{modaldata.time} {modaldata.createdat}
                    </div>
                    <div className="relative px-6 flex-auto">
                      <div className="text-gray-600 text-lg leading-relaxed">
                        Name:{modaldata.name}
                      </div>
                      <div className="text-gray-600 text-lg leading-relaxed">
                        Company Name:{modaldata.companyname}
                      </div>
                      <div className="text-gray-600 text-lg leading-relaxed">
                        Phone:{modaldata.phone}
                      </div>
                      <div className="text-gray-600 text-lg leading-relaxed">
                        Email:{modaldata.email}
                      </div>
                      <p className=" text-gray-600 text-lg leading-relaxed">
                        Order:{modaldata.order}
                      </p>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </body>
  );
};

export default TableData;
