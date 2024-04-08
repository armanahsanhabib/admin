/* eslint-disable react/prop-types */
const MailboxTable = (props) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-500"
          >
            Sender
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-500"
          >
            Subject
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-500"
          >
            Mail
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-sm font-medium uppercase tracking-wider text-gray-500"
          >
            Status
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {props.mails
          .slice()
          .reverse()
          .map((mail) => (
            <tr key={mail._id}>
              <td className="whitespace-nowrap px-6 py-3">
                <a href={`/mail-details/${mail._id}`}>{mail.fullName}</a>
              </td>
              <td className="max-w-[250px] truncate whitespace-nowrap px-6 py-3">
                <a href={`/mail-details/${mail._id}`}>{mail.subject}</a>
              </td>
              <td className="max-w-[500px] truncate whitespace-nowrap px-6 py-3">
                <a href={`/mail-details/${mail._id}`}>{mail.message}</a>
              </td>
              <td className="whitespace-nowrap px-6 py-3">
                <a href={`/mail-details/${mail._id}`}>Unread</a>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default MailboxTable;
