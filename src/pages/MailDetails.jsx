import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/common/Header";

const MailDetails = () => {
  const { id } = useParams();
  const [mail, setMail] = useState([]);
  const [replyMsg, setReplyMsg] = useState("");

  useEffect(() => {
    const fetchMail = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URI}/mail/mail-details/${id}`,
        );
        setMail(response.data);
      } catch (error) {
        console.error("Error fetching mail:", error);
      }
    };

    fetchMail();
  }, [id]);

  // Handle textarea change
  const handleChange = (event) => {
    setReplyMsg(event.target.value);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Logic to send reply message
    console.log("Reply message:", replyMsg);
    // Clear replyMsg after submission if needed
    setReplyMsg("");
  };

  // Format date and time
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const formattedTime = date.toLocaleTimeString("en-US", options);
    return `${formattedTime}`;
  };

  return (
    <div className="m-5 w-full overflow-hidden rounded-lg border bg-white p-3">
      <Header title="Mail Details" />
      <main className="mb-5 flex h-[calc(100%-61px)] flex-col gap-5 overflow-y-auto p-3">
        {/* <h6 className="mb-1">
          <a href="/">/mail-box</a>
          <a href="">/mail-box</a>
        </h6> */}
        <div className="mail container mx-auto max-w-[800px] rounded border bg-white px-8 py-10 text-gray-800 shadow">
          <h6 className="mb-3 text-sm">{formatDate(mail.date)}</h6>
          <h3 className="mb-1 font-semibold">From: {mail.email}</h3>
          <h3 className="font-semibold">Name: {mail.fullName}</h3>
          <h1 className="my-3 text-lg font-semibold">
            Subject: {mail.subject}
          </h1>
          <p>{mail.message}</p>
        </div>
        <div className="reply container mx-auto max-w-[800px] rounded border bg-gray-50 px-8 py-10 text-gray-800 shadow">
          <form onSubmit={handleSubmit}>
            <textarea
              name="message"
              id="message"
              className="h-[250px] w-full resize-none rounded-lg border border-[#dadada] px-3 py-2 text-gray-800 focus:outline-[#6077f2]"
              placeholder="Reply Message..."
              required
              value={replyMsg}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="mt-3 rounded-md bg-[#58b4ff] px-5 py-2 font-bold text-gray-50 hover:bg-[#3ea7fc]"
            >
              Send Reply
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default MailDetails;
