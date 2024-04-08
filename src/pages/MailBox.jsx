import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import MailboxTable from "../components/mailbox/MailboxTable";

const MailBox = () => {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    const fetchMails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URI}/mail/all-incoming-mails`,
        );
        setMails(response.data);
      } catch (error) {
        console.error("Error fetching mails:", error);
      }
    };

    fetchMails();
  }, []);

  return (
    <div className="m-5 w-full overflow-hidden rounded-lg border bg-white p-3">
      <Header title="Mailbox" />
      <main className="h-[calc(100%-61px)] overflow-auto p-3">
        {mails.length === 0 ? (
          <p>No mails found</p>
        ) : (
          <MailboxTable mails={mails} />
        )}
      </main>
    </div>
  );
};

export default MailBox;
