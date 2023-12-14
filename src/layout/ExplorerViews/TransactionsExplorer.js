import { useParams } from "react-router-dom";
const TransactionsExplorer = () => {
  const Id = useParams();

  return (
    <>
      <div className="max-w-[1408px] min-w-[343px] w-full flex flex-col px-5 mx-auto pb-6">
        <div className="pb-6">
          <h1 className="text-[34px] font-semibold max-w-[816px] leading-[40px] dark:text-darkFontPrimary text-fontSecondary text-left">
            Transactions
          </h1>
        </div>
      </div>
    </>
  );
};

export default TransactionsExplorer;
