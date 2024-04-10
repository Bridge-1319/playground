import { BankAccount } from "@/types/bank-account.types";
import api from "./api.service";

const URL = '/bank-accounts'
export const createBankAccount = async (bankAccount:BankAccount):Promise<BankAccount> => {
    const {data} = await api.post(URL, bankAccount);
    return data;
}