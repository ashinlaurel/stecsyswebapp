import React, { useState, useEffect } from "react";
import axios from "axios";
import Calendar from "react-calendar";

const Getdata = (sortBy = "NAME_ASC", datesel, refresh, searchpass) => {
  const [order, setOrder] = useState([]);
  // let d = datesel.split(" ")[0];
  // console.log(datesel.toDateString(), "chose");
  let sortdetails = {
    details: sortBy,
    date: datesel.toDateString(),
    search: searchpass,
  };

  useEffect(() => {
    axios
      .post("/output", sortdetails)
      .then((res) => {
        const neworder = res.data;
        setOrder(neworder);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [sortBy, refresh, datesel, searchpass]);

  // console.log(order);
  return order;
};

const TableData = () => {
  const [sortBy, setSortBy] = useState("NAME_ASC");
  const [refresh, setRefresh] = useState(false);
  const [searchinp, setSearchInp] = useState("");
  const [searchpass, setSearchPass] = useState("");
  const todaydate = new Date();
  const [datesel, setDateSel] = useState(todaydate);
  const [datedrop, setDateDrop] = useState(false);
  const onDateSelection = (date) => {
    setDateSel(date);
    setDateDrop(!datedrop);
  };
  const dateselectbutton = () => {
    setDateDrop(!datedrop);
  };
  const toggleStatus = (id, stat) => {
    let nextStat;
    if (stat == "active") nextStat = "completed";
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
  const order = Getdata(sortBy, datesel, refresh, searchpass);
  return (
    <body class="antialiased font-sans bg-gray-200">
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
                  onChange={(e) => setSortBy(e.currentTarget.value)}
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
                // if (searchinp === "") {
                //   setSearchPass("");
                // }
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
                    <tr key={doc.id}>
                      <td className="border-b border-gray-300  px-4 py-2 ">
                        {doc.createdat}
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
                          class="cursor-pointer relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                        >
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
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
      </div>
    </body>
  );
};

export default TableData;
