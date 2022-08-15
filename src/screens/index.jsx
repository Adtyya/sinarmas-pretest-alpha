import React, { useState, useCallback } from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import data from "../dummy.json";
import TableComp from "../components/Table";
import Modal from "@material-ui/core/Modal";
import Label from "../components/Label";
import Input from "../components/Input";

const HomeScreen = () => {
  const [open, setOpen] = useState(false);
  const [staff, setStaff] = useState(false);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [editId, setEditId] = useState(null);

  const handleOpen = useCallback(
    (a, event) => {
      setOpen(true);
      setId(event);
    },
    [setOpen]
  );

  const handleOpenEdit = useCallback(
    (a, event) => {
      setEdit(true);
      setEditId(event);
    },
    [setEdit]
  );

  const handleCloseEdit = useCallback(() => {
    setEdit(false);
    setEditId(null);
  }, [setEdit]);

  const handleClose = useCallback(() => {
    setOpen(false);
    setId(null);
  }, [setOpen]);

  const handleCloseStaff = useCallback(() => {
    setStaff(false);
  }, [setStaff]);

  const deleteData = () => {
    alert("Data dengan id " + id + " berhasil dihapus !");
    setId(null);
  };

  return (
    <Layout>
      <div className="flex justify-center">
        {data.map((el, i) => (
          <div
            className="grid grid-cols-1 w-3/4 lg:w-full md:grid-cols-3 gap-5 mt-8"
            key={i}
          >
            <Card
              title="Total staff"
              dotColor="white"
              color="red"
              count={el.total_staff}
              extras="orang"
            />
            <Card
              title="Costumer bulan ini"
              dotColor="white"
              color="blue"
              count={el.total_pelanggan}
              extras="orang"
            />
            <Card
              title="Follow up"
              dotColor="white"
              color="green"
              count={el.follow_up}
              extras="orang"
            />
          </div>
        ))}
      </div>
      <h1 className="text-is-xl font-normal text-black text-opacity-60 my-5">
        Lists staff
      </h1>
      <div className="my-8">
        <div className="flex w-full">
          <button
            className="bg-red-500 px-5 py-1 shadow shadow-red-500 text-white text-is-s rounded"
            onClick={() => setStaff(true)}
          >
            Tambah staff
          </button>
        </div>
        <div className="flex w-full justify-center mt-5">
          <div className="w-full relative max-w-4xl overflow-auto">
            <TableComp
              data={data || []}
              setOpen={handleOpen}
              setEdit={handleOpenEdit}
            />
          </div>
        </div>
      </div>
      <Modal open={open}>
        <div className="flex w-full h-screen flex-col justify-center items-center">
          <div className="p-3 bg-white w-full max-w-sm lg:max-w-lg rounded shadow-lg">
            <h1 className="text-is-l text-black font-normal">
              Apakah anda yakin ingin menghapus data ini ?
            </h1>
            <div className="flex w-full my-3 space-x-3">
              <button
                className="px-3 py-1 text-is-s bg-red-500 rounded text-white"
                onClick={deleteData}
              >
                Hapus
              </button>
              <button className="text-is-s" onClick={handleClose}>
                Kembali
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal open={staff}>
        <div className="flex w-full h-screen flex-col justify-center items-center">
          <div className="p-3 bg-white w-full max-w-sm lg:max-w-lg rounded shadow-lg">
            <h1 className="text-is-l text-black font-normal">
              Tambah staff baru
            </h1>
            <div>
              <form className="p-3">
                <div className="my-2">
                  <Label labelName={"ID Staff"} htmlFor={"id"} />
                  <Input type="text" inputName={"staffid"} />
                </div>
                <div className="my-2">
                  <Label labelName={"Nama"} htmlFor={"name"} />
                  <Input type="text" inputName={"name"} />
                </div>
                <div className="my-2">
                  <Label labelName={"Password"} htmlFor={"pw"} />
                  <Input type="password" inputName={"pw"} />
                </div>
                <div className="my-2">
                  <Label labelName={"Roles"} htmlFor={"roles"} />
                  <select
                    name="roles"
                    id="roles"
                    className="bg-gray-50 w-full border focus:outline-none px-2 py-2 text-is-s"
                  >
                    <option selected>-- Pilih roles --</option>
                    <option>Staff</option>
                    <option>Super Staff</option>
                    <option>Admin</option>
                    <option>Supervisor</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="flex w-full my-3 space-x-3">
              <button
                className="px-3 py-1 text-is-s bg-red-500 rounded text-white"
                onClick={handleCloseStaff}
              >
                Tambah staff
              </button>
              <button className="text-is-s" onClick={handleCloseStaff}>
                Kembali
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <Modal open={edit}>
        <div className="flex w-full h-screen flex-col justify-center items-center">
          <div className="p-3 bg-white w-full max-w-sm lg:max-w-lg rounded shadow-lg">
            <h1 className="text-is-l text-black font-normal">
              Edit data staff dengan id {editId}
            </h1>
            <div>
              <form className="p-3">
                <div className="my-2">
                  <Label labelName={"ID Staff"} htmlFor={"id"} />
                  <Input type="text" inputName={"staffid"} />
                </div>
                <div className="my-2">
                  <Label labelName={"Nama"} htmlFor={"name"} />
                  <Input type="text" inputName={"name"} />
                </div>
                <div className="my-2">
                  <Label labelName={"Password"} htmlFor={"pw"} />
                  <Input type="password" inputName={"pw"} />
                </div>
                <div className="my-2">
                  <Label labelName={"Roles"} htmlFor={"roles"} />
                  <select
                    name="roles"
                    id="roles"
                    className="bg-gray-50 w-full border focus:outline-none px-2 py-2 text-is-s"
                  >
                    <option selected>-- Pilih roles --</option>
                    <option>Staff</option>
                    <option>Super Staff</option>
                    <option>Admin</option>
                    <option>Supervisor</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="flex w-full my-3 space-x-3">
              <button
                className="px-3 py-1 text-is-s bg-red-500 rounded text-white"
                onClick={handleCloseEdit}
              >
                Update data
              </button>
              <button className="text-is-s" onClick={handleCloseEdit}>
                Kembali
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default HomeScreen;
