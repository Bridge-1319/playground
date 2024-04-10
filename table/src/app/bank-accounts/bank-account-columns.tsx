import DataTableColumnHeader from "@/components/datatable/datatable-column-header";
import DataTableRowActions from "@/components/datatable/datatable-row-action";
import { BankAccount } from "@/types/bank-account.types";
import { ColumnDef } from "@tanstack/react-table";

interface BankAccountsColumnProps {
    onEdit: (value: BankAccount) => void;
    onDelete: (value: BankAccount) => void;
}
export const getBankAccountsColumns = ({ onDelete, onEdit }: BankAccountsColumnProps): ColumnDef<BankAccount>[] => [
    {
        accessorKey: 'accountNumber',
        header: 'Account Number',
        footer: 'Total',
    },
    {
        accessorKey: 'balance',
        header: ({ column }) => <DataTableColumnHeader className="text-right" column={column} title="Balance" />,
        // header: () => <div className="text-right">Balance</div>,
        cell: ({ row }) => (
            <div className="text-right">
                {row.original.balance}
            </div>
        ),
        footer: (props) => {
            const totalBalance = props.table.getRowModel().rows.reduce((acc, row) => acc + row.original.balance, 0);
            return (
                <div className="text-right">
                    {totalBalance}
                </div>
            )
        }
    },
    {
        id: 'actions',
        cell: ({ row }) => <DataTableRowActions row={row} onEdit={onEdit} onDelete={onDelete} />,
        size: 50
    }
]