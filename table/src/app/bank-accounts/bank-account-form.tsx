"use client"
import { DialogTrigger, Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from 'zod'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from '@hookform/resolvers/zod'
import CurrencyInput from "@/components/ui/currency-input";
import { useEffect, useState } from "react";
import { createBankAccount, updateBankAccount } from "@/action";
import { BankAccount } from "@/types/bank-account.types";

const formSchema = z.object({
    accountNumber: z.string().min(1, { message: 'Account number is empty' })
        .max(50, { message: 'Account number is too long' }),

    balance: z.string({ required_error: 'Balance is empty' }).refine((value:string) => {
        const convertCurrencyToNumber = (amount: string) => parseFloat(amount.replace(',', '.'));
        const isAmountWithinRange = (amount: number) => amount >= -999999 && amount <= 10000;

        return isAmountWithinRange(convertCurrencyToNumber(value));
    }, {message: "Balance is out of range"})
});

interface BankAccountsFormProps {
    isOpen: boolean,
    onOpenChange: (open: boolean) => void,
    bankAccount: BankAccount | null
}


export const BankAccountsForm = ({isOpen, onOpenChange, bankAccount}:BankAccountsFormProps) => {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            accountNumber: '',
            balance: ''
        },
        mode: "onChange"
    });

    const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data: z.infer<typeof formSchema>) => {
        console.log(data);
        const convertCurrencyToNumber = (amount: string) => parseFloat(amount.replace(',', '.'));
        // data.balance = convertCurrencyToNumber(data.balance).toString(); 
        const payload = {accountNumber: data.accountNumber, balance: convertCurrencyToNumber(data.balance)}

        if(bankAccount) {
            console.log("ghghghghghgghg", payload)
            await updateBankAccount(payload.accountNumber, payload.balance);
        }
        else {
            await createBankAccount(payload);
        }
        onOpenChange(false);
    }

    useEffect(() => {
        if(bankAccount){
            form.reset({
                accountNumber: bankAccount.accountNumber,
                balance: bankAccount.balance.toString()
            })
        }else{
            form.reset();
        }
    },[isOpen, bankAccount])





    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <button className="sm">Add</button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>{bankAccount ? 'Update the bank account': 'Create the bank account'}</DialogTitle>
                </DialogHeader>

                <Form {...form}>
                    <form className="space-y-4">
                        <FormField control={form.control} name="accountNumber" render={({ field }) => (
                            <>
                                <FormItem>
                                    <FormLabel>Account Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="13dacc89f899" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            </>
                        )} >
                        </FormField>
                        <FormField control={form.control} name="balance" render={({ field:{value, onChange} }) => (
                            <>
                                <FormItem>
                                    <FormLabel>Balance</FormLabel>
                                    <FormControl>
                                        <CurrencyInput value={value} onValueChange={(value) => onChange(value)} />
                                    </FormControl>
                                    <FormMessage /> 
                                </FormItem>
                            </>
                        )} >
                        </FormField>
                    </form>
                </Form>

                <DialogFooter>
                    <Button type="button" disabled={!form.formState.isValid} onClick={form.handleSubmit(onSubmit)} >Confirm</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}