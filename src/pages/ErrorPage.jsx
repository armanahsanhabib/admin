import Header from "../components/common/Header";

const ErrorPage = () => {
  return (
    <div className="m-5 w-full rounded-lg border bg-white p-3">
      <Header title="404 Error :(" />
      <main className="p-3">
        <h1 className="mb-4 text-2xl font-bold">
          Sorry, the page you&apos;re looking for cannot be found!
        </h1>
        <p className="text-gray-600">
          The link you followed may be broken or the page may have been removed.
        </p>
      </main>
    </div>
  );
};

export default ErrorPage;
