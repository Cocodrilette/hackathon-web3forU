import { useState } from "react";
import { ethers } from "ethers";

import { Address } from "../../contracts/Main-contract-address.json";
import Contract from "../../contracts/Main.json";

const Tasks = () => {
  const contractAddress = Address;
  const contractABI = Contract.abi;
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tasks, setTasks] = useState({
    taskName: "",
    taskDescription: "",
  });
  // This only represent the first task created in the contract
  // because iter over the tasks is extremely expensive and not recommended
  // This is just for demo purposes
  const [tasksList, setTasksList] = useState(null) as any;

  const getTask = async (position: number) => {
    const { ethereum } = window as any;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    try {
      setIsLoading(true);
      const [name, description, completed] = await contract.taskList(position);

      const task = {
        name,
        description,
        completed,
      };

      setTasksList(task);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.error(error);
    }
  };

  const createTask = async () => {
    const { ethereum } = window as any;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    try {
      setIsLoading(true);
      setIsError(false);

      const transaction = await contract.createTask(
        tasks.taskName,
        tasks.taskDescription
      );
      const res = await transaction.wait();
      console.log(res);

      setIsLoading(false);
      setTasks({ taskName: "", taskDescription: "" });

      getTask(0);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.error(error);
    }
  };

  const handleSubmit = () => {
    createTask();
  };

  const Button = () => {
    if (isLoading) {
      return (
        <button
          className="bg-gray-900 text-white py-2 rounded-md shadow-md font-bold"
          disabled={true}
        >
          Loading...
        </button>
      );
    }

    if (isError) {
      return (
        <button
          className="bg-red-300 text-black py-2 rounded-md shadow-md font-bold"
          onClick={handleSubmit}
        >
          Error creating task. Try again.
        </button>
      );
    }

    return (
      <button
        className="bg-gray-900 text-white py-2 rounded-md shadow-md font-bold"
        onClick={handleSubmit}
      >
        Create Task
      </button>
    );
  };

  return (
    <div className="flex-col max-w-xl text-center p-10 mt-10 m-auto bg-slate-100 rounded-md border-2 border-slate-300">
      <h1 className="text-2xl font-extrabold">Crypto Todo</h1>
      <div className="border"></div>
      <div className="my-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="flex flex-col gap-2"
        >
          <label className="text-left text-xl">Task name</label>
          <input
            type="text"
            placeholder="Name"
            className="border-2 border-slate-300 rounded-md p-2"
            onChange={(e) => setTasks({ ...tasks, taskName: e.target.value })}
          />
          <label className="text-left text-xl">Task description</label>

          <input
            type="text"
            placeholder="Description"
            className="border-2 border-slate-300 rounded-md p-2"
            onChange={(e) =>
              setTasks({ ...tasks, taskDescription: e.target.value })
            }
          />

          {Button()}
        </form>
      </div>
      <div>
        <h1 className="text-2xl font-extrabold">Tasks List</h1>
        <div className="border"></div>
        <div>
          {tasksList && (
            <div className="flex max-w-sm p-5 mt-5 m-auto bg-slate-200 rounded-md flex-col gap-2">
              <p className="text-left">
                <strong>Name:</strong> {tasksList.name}
              </p>
              <p className="text-left">
                <strong>Task description:</strong> {tasksList.description}
              </p>
              <p className="text-left">
                <strong>Task completed:</strong>{" "}
                {tasksList.completed ? "Yes" : "No"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
