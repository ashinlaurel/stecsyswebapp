import React, { useState, useEffect, useMemo, useContext } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import { LoginContext } from "../../Context/LoginContext";
import spinner from "../../assets/spinner3.gif";
let moment = require("moment");

const TableData = () => {
  const SORT_OPTIONS = {
    NAME_ASC: { column: "name_lower", direction: "desc" },
    NAME_DESC: { column: "name_lower", direction: "asc" },
    DATE_ASC: { column: "createdat", direction: "asc" },
    DATE_DESC: { column: "createdat", direction: "desc" },
    TIME_ASC: { column: "sort_date", direction: "asc" },
    TIME_DESC: { column: "sort_date", direction: "desc" },
  };

  const [showModal, setShowModal] = useState(false);
  const [modaldata, setModalData] = useState([]);
  const [order, setOrder] = useState([]);
  const [sortBy, setSortBy] = useState("TIME_ASC");
  const [refresh, setRefresh] = useState(false);
  const [searchinp, setSearchInp] = useState("");
  const [searchpass, setSearchPass] = useState("");
  const todaydate = new Date();
  const [datesel, setDateSel] = useState(moment().format());
  const [datedrop, setDateDrop] = useState(false);
  const [showAll, setShowAll] = useState("Show By Date");
  const [status, setStatus] = useState("all");
  const [loading, setLoading] = useState(false);

  const { Admin } = useContext(LoginContext);

  const Modalpop = (doc) => {
    setModalData(doc);
    setShowModal(true);
  };

  const onDateSelection = (date) => {
    date = moment(date).format();
    console.log(date);
    setDateSel(date);
    // setDateDrop(!datedrop);
  };

  const dateselectbutton = () => {
    setDateDrop(!datedrop);
  };

  const toggleStatus = (id, stat) => {
    // console.log(Admin);
    let nextStat;
    if (stat === "active") nextStat = "completed";
    else nextStat = "active";
    axios
      .post("/togglestatus", { id: id, status: nextStat })
      .then(() => {
        setRefresh(!refresh);
        // console.log("res");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
  };

  const deleteData = (id) => {
    axios
      .post("/delete", { id: id })
      .then(() => {
        setRefresh(!refresh);
        console.log("res");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    setSearchPass(searchinp);
  };

  let sortdetails = {
    details: sortBy,
    date: moment(datesel).format("ddd MMM DD YYYY"),
    search: searchpass,
    showAll: showAll,
  };
  useEffect(() => {
    console.log("useeffect rerun");
    setLoading(true);
    axios
      .post("/output", sortdetails)
      .then((res) => {
        const neworder = res.data;
        setOrder(neworder);
        setLoading(false);

        return () => {
          console.log("done");
        };
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [refresh, datesel, searchpass, showAll]);

  const Sorter = () => {
    let neworder = order;
    // console.log(neworder);
    // console.log(order);

    let direction = SORT_OPTIONS[sortBy].direction;
    let column = SORT_OPTIONS[sortBy].column;
    // console.log(direction);
    // console.log(column);
    // if (column == "time") {
    //   neworder.map((doc) => {
    //     console.log(doc[column]);
    // let thestr = doc[column];
    // console.log(thestr);
    // thestr = thestr.replace(/:/g, "");
    // console.log(thestr);
    // doc[column] = thestr;
    //   });
    // }
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
    // console.log(status);
    // console.log(neworder);
    // console.log("hhaa");

    // console.log(neworder)
    // console.log(neworder);
    // setOrder(neworder);

    return () => {
      // console.log("sorting finished");
    };
  };

  const onSortToggle = (e) => {
    setSortBy(e.currentTarget.value);
  };
  const onStatusToggle = (e) => {
    setStatus(e.currentTarget.value);
    // setRefresh(!refresh);
  };

  useMemo(() => {
    Sorter();
  }, [order, sortBy]);

  return (
    <body class="antialiased font-sans">
      <div class="container mx-auto px-2 sm:px-8 ">
        <div class="py-8 ">
          <div className="flex justify-start items-center">
            <div>
              <h2 class="text-3xl leading-tight">Orders</h2>
            </div>
          </div>
          {/* <div>{showAll !== "ALL" ? datesel.toDateString() : "All Orders"}</div> */}
          <div class="my-2 flex sm:flex-row flex-col  ">
            <div class="flex flex-row mb-1 sm:mb-0">
              {/* {showAll !== "ALL" ? (
                <div id="zdropdown" className=" relative">
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
                    <div className=" z-50 w-64 absolute bg-gray-100  rounded-lg ">
                      <Calendar
                        onChange={onDateSelection}
                        // selectRange="true"
                        value={datesel}
                        className="rounded-lg shadow-sm px-2 "
                      />
                    </div>
                  ) : null}
                </div>
              ) : null} */}
              {showAll !== "ALL" ? (
                <div>
                  <input
                    type="date"
                    id="thedate"
                    name="thedate"
                    value={moment(datesel).format("YYYY-MM-D")}
                    className="h-full rounded-l border block appearance-none w-44 bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                    onInput={(e) => {
                      // onDateSelection(date);
                      onDateSelection(e.target.value);
                    }}
                  />
                </div>
              ) : null}

              <div class="relative">
                <select
                  class="appearance-none h-full rounded border block w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                  value={sortBy}
                  onChange={onSortToggle}
                >
                  <option value="TIME_ASC">Time(Latest)</option>
                  <option value="TIME_DESC">Time(Oldest)</option>
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
              <div class="relative">
                <select
                  class=" h-full rounded border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none   focus:bg-white focus:border-gray-500"
                  value={status}
                  onChange={onStatusToggle}
                >
                  <option value="all">All</option>
                  <option value="active">Active</option>
                  <option value="completed">Completed</option>
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
                  class="z-20 appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                />
              </form>
            </div>
            <div className="flex mt-5 sm:mt-0 items-center justify-center sm:ml-10">
              <div>
                <button
                  className=" bg-blue-500 text-white hover:bg-blue-700 font-bold uppercase text-sm sm:text-base px-4 py-1 rounded shadow-md hover:shadow-lg outline-none focus:outline-none "
                  type="button"
                  style={{ transition: "all .15s ease" }}
                  onClick={() => {
                    setRefresh(!refresh);
                    setSearchInp("");
                    setSearchPass(searchinp);
                  }}
                >
                  <i className="fa fa-refresh"></i> Refresh
                </button>
              </div>
              <div className="w-10"></div>
              <div>
                <button
                  className="bg-blue-500 text-white hover:bg-blue-700 font-bold uppercase text-sm sm:text-base px-4 py-1 rounded shadow-md hover:shadow-lg outline-none focus:outline-none "
                  type="button"
                  style={{ transition: "all .15s ease" }}
                  onClick={() => {
                    showAll == "ALL" ? setShowAll("DATE") : setShowAll("ALL");
                  }}
                >
                  <i className="fa fa-refresh"></i>{" "}
                  {showAll == "ALL" ? "Show By Date" : "Show All"}
                </button>
              </div>
            </div>
          </div>
          <div class=" px-4 sm:px-8 py-4 overflow-x-auto">
            <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th class="px-2 py-3 sm:px-5 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Created At
                    </th>
                    <th class="px-2 py-3 sm:px-5 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th class="px-2 py-3 sm:px-5 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Phone
                    </th>
                    <th class="hidden sm:table-cell px-2 py-3 sm:px-5 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th class="hidden sm:table-cell px-2 py-3 sm:px-5 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Company
                    </th>
                    <th class="hidden sm:table-cell px-2 py-3 sm:px-5 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Order
                    </th>
                    <th class="hidden sm:table-cell px-2 py-3 sm:px-5 sm:py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {order
                    .filter((doc) => {
                      return doc.status === status || status === "all";
                    })
                    .map((doc) => (
                      <tr
                        key={doc.id}
                        className="hover:bg-white cursor-pointer "
                      >
                        <td
                          onClick={() => {
                            Modalpop(doc);
                          }}
                          className="border-b border-gray-300  px-4 py-2 text-xs sm:text-sm"
                        >
                          <div>
                            {moment(doc.createdat).format(
                              "h:mm a, Do MMMM YYYY"
                            )}
                          </div>
                        </td>

                        <td
                          onClick={() => {
                            Modalpop(doc);
                          }}
                          className="border-b border-gray-300 px-4 py-2 "
                        >
                          {doc.name}
                        </td>
                        <td
                          onClick={() => {
                            Modalpop(doc);
                          }}
                          className="border-b border-gray-300 px-4 py-2 "
                        >
                          {doc.phone}
                        </td>
                        <td
                          onClick={() => {
                            Modalpop(doc);
                          }}
                          className="hidden sm:table-cell border-b border-gray-300 px-4 py-2 "
                        >
                          {doc.email}
                        </td>
                        <td
                          onClick={() => {
                            Modalpop(doc);
                          }}
                          className="hidden sm:table-cell border-b border-gray-300 px-4 py-2 "
                        >
                          {doc.companyname}
                        </td>
                        <td
                          onClick={() => {
                            Modalpop(doc);
                          }}
                          className="hidden sm:table-cell border-b border-gray-300 px-4 py-2 "
                        >
                          {doc.orders}
                        </td>
                        <td className="hidden sm:table-cell border-b border-gray-300 px-4 py-2 ">
                          <span
                            onClick={() => toggleStatus(doc.id, doc.status)}
                            class="cursor-pointer relative inline-block px-3 py-1 font-semibold text-green-900  leading-tight"
                          >
                            <span
                              aria-hidden
                              class={`absolute inset-0 ${
                                doc.status === "active"
                                  ? "bg-red-300"
                                  : "bg-green-200"
                              }  opacity-50 rounded-full`}
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
                  Showing {order.length} Entries
                </span>
              </div>
            </div>
          </div>
        </div>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
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
                  <div className="m-10">
                    <div className="text-sm px-6 mt-2 text-gray-600">
                      Created At :{modaldata.time} {modaldata.createdat}
                    </div>
                    <div className="relative mt-4 px-6 flex-auto">
                      <div className="text-gray-600 text-lg leading-relaxed">
                        Name: {modaldata.name}
                      </div>
                      <div className="text-gray-600 text-lg leading-relaxed">
                        Company Name: {modaldata.companyname}
                      </div>
                      <div className="text-gray-600 text-lg leading-relaxed">
                        Phone: {modaldata.phone}
                      </div>
                      <div className="text-gray-600 text-lg leading-relaxed">
                        Email:{modaldata.email}
                      </div>
                      <p className=" text-gray-600 text-lg leading-relaxed">
                        Order: {modaldata.orders}
                      </p>
                      <p className=" text-gray-600 text-lg leading-relaxed ">
                        Status:{" "}
                        <span className="bg-green-200 rounded-full py-2 px-3 font-bold text-green-800 uppercase text-sm">
                          {modaldata.status}
                        </span>
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
                    <button
                      className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() =>
                        toggleStatus(modaldata.id, modaldata.status)
                      }
                    >
                      Mark{" "}
                      {modaldata.status == "active" ? "Completed" : "Active"}
                    </button>
                    {Admin ? (
                      <button
                        className="bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                        onClick={() => deleteData(modaldata.id)}
                      >
                        Delete
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
        {loading ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              // onClick={() => setShowModal(false)}
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}

                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <img src={spinner} />
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
