import './NewCost.css';
import CostForm from "./CostForm";
export default function NewCost(props) {
    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: Math.random().toString(),
        }
    }
    return (
        <div className="new-cost">
            <CostForm onSaveCostData={saveCostDataHandler}/>
        </div>
    );
}