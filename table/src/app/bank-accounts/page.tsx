'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { BankAccountsForm } from "./bank-account-form"
import { useCallback, useEffect, useMemo, useState } from "react";
import { deleteBankAccount, getBankAccounts, updateBankAccount } from "@/action";
import DataTable from "@/components/datatable/datatable";
import { getBankAccountsColumns } from "./bank-account-columns";
import { BankAccount } from "@/types/bank-account.types";



 const BankAccountsPage = () => {
    const [bankAccounts, setBankAccounts] = useState([]);
    const [loading, setLoading] = useState(false);

    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)
    const [selectedBankAccount, setSelectedBankAccount] = useState<BankAccount | null>(null);


    useEffect(() => {

        const fetchAccount = async() => {
            setLoading(true);
            const data = await getBankAccounts();
            setBankAccounts(data);
            setLoading(false);
        }
        fetchAccount();
    }, []);

    const onDelete = useCallback(async (bankAccount:BankAccount) => await deleteBankAccount(bankAccount.accountNumber),[])
    const onEdit = useCallback(async (bankAccount:BankAccount) => {
        setSelectedBankAccount(bankAccount);
        setIsDialogOpen(true);
    },[])
    const columns = useMemo(() => getBankAccountsColumns({onDelete, onEdit}),[]);


    return (
        <Card className="h-full">
            <CardHeader>
                <div className="flex justify-between">
                    <div>
                <CardTitle>Bank Accounts</CardTitle>
                </div>

                <div className="flex-nowrap">
                    <BankAccountsForm isOpen={isDialogOpen} bankAccount={selectedBankAccount} onOpenChange={(value) => {
                        setIsDialogOpen(value);
                        if(!value) setSelectedBankAccount(null);
                    }}/>
                </div>
            </div>
            </CardHeader>
            <CardContent className="h-full">
                {loading && 'Loading...'}
                {!loading && <DataTable data={bankAccounts} columns={columns}/>}
            </CardContent>
        </Card>
    )
}

export default BankAccountsPage