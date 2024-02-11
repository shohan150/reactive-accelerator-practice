import { useState } from "react";

const AddTaskModel = ({ onSave, taskToUpdate, onCloseClick }) => {
  const [task, setTask] = useState(
    taskToUpdate || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      tags: [],
      priority: "",
      isFavourite: false,
    }
  );

  const [isAdd] = useState(Object.is(taskToUpdate, null));

  function handleChange(event) {
    //notice one thing, in each input field the name of the input field is kept same as the corresponding key in the task object. The benefit can be seen in the code below, we don't have to reset all of the keys of the task object each time. Rather only change the key whose value is updated.
    //though i don't know right now why this dynamic approach is taken. Why couldn't we set the task only when the 'add' button is clicked and add to the main task list directly at one go.
    //another benefit arised when adding the edit feature. If value is equal to task.title then that value comes from the task object. Also, Now I've gotten the answer to why the dynamic approach is taken. Because, if we updated the task object only when the add button is clicked, then we had no reason to use the 'value' attribute in every input field. karon, directly e.target.value diye e task object e data store kora jai. value attribute use kora e jabe na. R value attribute na rakhle, edit er somoy existing data show o korbe na. Tai, edit feature rakhte gele, value attriute lagbe e. R value attribute rakhle, state onChange e update korte e hobe.

    const name = event.target.name;
    let value = event.target.value;
    if (name === "tags") value = value.split(",");
    setTask({ ...task, [name]: value });
    //second bracket deyar karon dynamically key name k ana. name:value likhle jeta hobe, task object e name namer key te, value ta bosai. R [name]:value deya mane, oi name e j key ta thakbe setate value ta store hobe.
  }
  return (
    <>
      <div className="bg-black bg-opacity-70 h-full w-full z-10 absolute top-0 left-0"></div>
      <form
        className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11 absolute top-1/2 left-1/4 z-10"
        onSubmit={() => event.preventDefault()}
      >
        <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
          {isAdd ? "Add New Task" : "Edit Task"}
        </h2>

        <div className="space-y-9 text-white lg:space-y-10">
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="title">Title</label>
            <input
              className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
              type="text"
              name="title"
              id="title"
              required
              value={task.title}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-2 lg:space-y-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
              type="text"
              name="description"
              id="description"
              required
              value={task.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="tags">Tags</label>
              <input
                className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
                type="text"
                name="tags"
                id="tags"
                required
                value={task.tags}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2 lg:space-y-3">
              <label htmlFor="priority">Priority</label>
              <select
                className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
                name="priority"
                id="priority"
                required
                value={task.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-16 flex justify-between lg:mt-20">
          <button
            type="submit"
            className="rounded bg-red-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={onCloseClick}
          >
            Close
          </button>
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
            onClick={() => onSave(task, isAdd)}
          >
            Save Task
          </button>
        </div>
      </form>
    </>
  );
};

export default AddTaskModel;
