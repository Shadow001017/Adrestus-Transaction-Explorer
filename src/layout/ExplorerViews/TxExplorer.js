import { useParams } from "react-router-dom";

import HashItem from "../../components/ExplorerView/TransactionView/HashItem";
import BlockNumberItem from "../../components/ExplorerView/TransactionView/BlockNumberItem";
import TimestampItem from "../../components/ExplorerView/TransactionView/TimestampItem";
import StateItem from "../../components/ExplorerView/TransactionView/StateItem";
import AddressItem from "../../components/ExplorerView/TransactionView/AddressItem";
import ValueItem from "../../components/ExplorerView/TransactionView/ValueItem";
import TransferItem from "../../components/ExplorerView/TransactionView/TransferItem";
import TxFeeItem from "../../components/ExplorerView/TransactionView/TxFeeItem";
import GasLimitItem from "../../components/ExplorerView/TransactionView/GasLimitItem";
import GasPriceItem from "../../components/ExplorerView/TransactionView/GasPriceItem";

const TxExplorer = () => {
  const { id } = useParams();

  return (
    <>
      <div className="max-w-[1408px] min-w-[343px] w-full flex flex-col px-5 mx-auto pb-6">
        <div className="pb-6">
          <h1 className="text-[34px] font-semibold max-w-[816px] leading-[40px] dark:text-darkFontPrimary text-fontSecondary text-left">
            Transaction
          </h1>
        </div>
        <div className=" rounded-lg overflow-x-auto flex flex-col bg-white dark:bg-darkPrimary p-6 border-[1px] dark:border-darkColorSeparator border-colorSeparator">
          <div className="flex flex-col">
            <div className=""></div>
            <div className="flex flex-start overflow-auto">
              <table className="w-full min-w-[698px] relative border-spacing-0 border-separate h-auto">
                <thead className="none"></thead>
                <tbody className="">
                  <StateItem title="State" value={true} />
                  <HashItem title="Hash" value={id} />
                  <BlockNumberItem title="Block Number" value="50648123" />
                  <TimestampItem
                    title="Timestamp"
                    value="2023-12-06T15:11:26.000Z"
                  />
                  <AddressItem
                    title="From"
                    value="0x21C3de23d98Caddc406E3d31b25e807aDDF33633"
                  />
                  <AddressItem
                    title="To"
                    value="0x3d31b25e807aDDF33633ddc4062d98Caddc406E3"
                  />
                  <ValueItem title="Value" value="0" />
                  <TransferItem title="Token Transfers" value="" />
                  <TxFeeItem title="Transaction Fee" value="0.0197111165" />
                  <GasLimitItem
                    title="Gas Limit & Usage by Txn"
                    value="1,105,244 | 164,288 (14.86%)"
                  />
                  <GasPriceItem title="Gas Price" value="0.00000012" />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TxExplorer;
