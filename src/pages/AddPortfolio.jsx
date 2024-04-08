// import { IoMdDoneAll } from "react-icons/io";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import Header from "../components/common/Header";

const AddPortfolio = () => {
  const [formData, setFormData] = useState({
    title: "",
    tagline: "",
    image: null,
    route: "",
    youtube: "",
    live: "",
    github: "",
    category: "",
    technology: "",
    features: "",
  });

  // Function to handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle file input change
  const handleFileChange = (event) => {
    setFormData({ ...formData, image: event.target.files[0] });
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();

      // Append form data to FormData object
      formDataToSend.append("title", formData.title);
      formDataToSend.append("tagline", formData.tagline);
      formDataToSend.append("route", formData.route);
      formDataToSend.append("youtube", formData.youtube);
      formDataToSend.append("live", formData.live);
      formDataToSend.append("github", formData.github);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("technology", formData.technology);
      formDataToSend.append("features", formData.features);
      formDataToSend.append("image", formData.image);

      // Make POST request to backend API endpoint
      const response = await axios.post(
        "http://localhost:3000/portfolio/add-portfolio",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set content type for file upload
          },
        },
      );
      console.log("Data sent to backend:", response.data);
      toast.success("Portfolio Added Successfully!", {
        position: "bottom-center",
        autoClose: 3000,
      });
      // Clear form after successful submission, if needed
      setFormData({
        title: "",
        tagline: "",
        image: null,
        route: "",
        youtube: "",
        live: "",
        github: "",
        category: "",
        technology: "",
        features: "",
      });
    } catch (error) {
      console.error("Error sending data to backend:", error);
      // Handle error as needed
      toast.error("Error: portfolio can't be uploaded!", {
        position: "bottom-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="m-5 w-full overflow-hidden rounded-lg border bg-white p-3">
      <Header title="My portfolio" />
      <main className="h-[calc(100%-61px)] overflow-auto p-3">
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-3 gap-x-10 gap-y-5"
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="text-gray-700">
              Portfolio Title
            </label>
            <input
              required
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="rounded border px-3 py-2 outline-none focus:border-blue-600"
              placeholder="Enter title"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="tagline" className="text-gray-700">
              Portfolio Tagline
            </label>
            <input
              required
              type="text"
              name="tagline"
              id="tagline"
              value={formData.tagline}
              onChange={handleChange}
              className="rounded border px-3 py-2 outline-none focus:border-blue-600"
              placeholder="Enter tagline"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="image" className="text-gray-700">
              Full page screenshot
            </label>
            <input
              required
              type="file"
              name="image"
              id="image"
              onChange={handleFileChange}
              className="rounded border px-3 py-2 outline-none focus:border-blue-600"
              placeholder="Enter image"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="route" className="text-gray-700">
              Route
            </label>
            <input
              required
              type="text"
              name="route"
              id="route"
              value={formData.route}
              onChange={handleChange}
              className="rounded border px-3 py-2 outline-none focus:border-blue-600"
              placeholder="Enter route"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="youtube" className="text-gray-700">
              Youtube Video Link
            </label>
            <input
              type="text"
              name="youtube"
              id="youtube"
              value={formData.youtube}
              onChange={handleChange}
              className="rounded border px-3 py-2 outline-none focus:border-blue-600"
              placeholder="Enter youtube link"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="live" className="text-gray-700">
              Live Preview Link
            </label>
            <input
              required
              type="text"
              name="live"
              id="live"
              value={formData.live}
              onChange={handleChange}
              className="rounded border px-3 py-2 outline-none focus:border-blue-600"
              placeholder="Enter live link"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="github" className="text-gray-700">
              GitHub Link
            </label>
            <input
              required
              type="text"
              name="github"
              id="github"
              value={formData.github}
              onChange={handleChange}
              className="rounded border px-3 py-2 outline-none focus:border-blue-600"
              placeholder="Enter github link"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="category" className="text-gray-700">
              Category (Seperated by comma)
            </label>
            <input
              required
              type="text"
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
              className="rounded border px-3 py-2 outline-none focus:border-blue-600"
              placeholder="Select category"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="technology" className="text-gray-700">
              Technology (Seperated by comma)
            </label>
            <input
              required
              type="text"
              name="technology"
              id="technology"
              value={formData.technology}
              onChange={handleChange}
              className="rounded border px-3 py-2 outline-none focus:border-blue-600"
              placeholder="Select technology"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="features" className="text-gray-700">
              Features and functionality
            </label>
            {/* <input type="text" name="technology" id="technology" /> */}
            <textarea
              required
              name="features"
              id="features"
              value={formData.features}
              onChange={handleChange}
              className="h-[300px] resize-none rounded border px-3 py-2 outline-none focus:border-blue-600"
              placeholder="Select technology"
            ></textarea>
          </div>
          {/* <div className="description col-span-2 border p-5">
            <Editor
              editorState={editorState}
              onEditorStateChange={setEditorState}
            />
          </div> */}
          <div className="col-span-2"></div>
          <div className="button">
            <input
              required
              type="submit"
              value="Add Portfolio"
              className="cursor-pointer rounded-lg border bg-blue-500 px-5 py-2 font-semibold text-white hover:bg-blue-600"
            />
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddPortfolio;
