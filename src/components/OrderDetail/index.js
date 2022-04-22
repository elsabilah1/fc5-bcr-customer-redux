import CardOrder from './CardOrder';
import TransferMethod from './TransferMethod';

export default function OrderDetail() {
    return (
        <div className="grid gap-8 lg:grid-cols-3">
            <div className="col-span-full lg:col-span-2">
                <TransferMethod />
            </div>
            <CardOrder />
        </div>
    );
}
